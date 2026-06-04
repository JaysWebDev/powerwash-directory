-- ============================================================
-- Migration 001 — Directory Schema
-- Extends companies table for public directory + adds reviews
-- Run in Supabase SQL Editor
-- ============================================================

-- ─── EXTENSIONS ──────────────────────────────────────────────
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "unaccent";  -- for slug normalization

-- ─── SLUG HELPER ─────────────────────────────────────────────
-- Generates a URL-safe slug from text
CREATE OR REPLACE FUNCTION slugify(value TEXT)
RETURNS TEXT AS $$
  SELECT regexp_replace(
    regexp_replace(
      lower(unaccent(trim(value))),
      '[^a-z0-9\s-]', '', 'g'
    ),
    '[\s-]+', '-', 'g'
  );
$$ LANGUAGE SQL IMMUTABLE;

-- ─── UPDATED_AT TRIGGER ──────────────────────────────────────
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ─── EXTEND COMPANIES TABLE ──────────────────────────────────
-- Directory identity
ALTER TABLE companies ADD COLUMN IF NOT EXISTS slug            TEXT UNIQUE;
ALTER TABLE companies ADD COLUMN IF NOT EXISTS short_description TEXT;
ALTER TABLE companies ADD COLUMN IF NOT EXISTS description     TEXT;
ALTER TABLE companies ADD COLUMN IF NOT EXISTS logo_url        TEXT;
ALTER TABLE companies ADD COLUMN IF NOT EXISTS photo_urls      TEXT[]  DEFAULT '{}';

-- Location (lat/lng for map + geo search)
ALTER TABLE companies ADD COLUMN IF NOT EXISTS address         TEXT;
ALTER TABLE companies ADD COLUMN IF NOT EXISTS latitude        DOUBLE PRECISION;
ALTER TABLE companies ADD COLUMN IF NOT EXISTS longitude       DOUBLE PRECISION;

-- Trust signals
ALTER TABLE companies ADD COLUMN IF NOT EXISTS is_insured      BOOLEAN DEFAULT false;
ALTER TABLE companies ADD COLUMN IF NOT EXISTS is_licensed     BOOLEAN DEFAULT false;
ALTER TABLE companies ADD COLUMN IF NOT EXISTS license_number  TEXT;
ALTER TABLE companies ADD COLUMN IF NOT EXISTS years_in_business INTEGER;

-- Directory visibility (separate from is_active which is lead-routing)
ALTER TABLE companies ADD COLUMN IF NOT EXISTS is_approved     BOOLEAN DEFAULT false;
ALTER TABLE companies ADD COLUMN IF NOT EXISTS is_featured     BOOLEAN DEFAULT false;

-- Claim system (owner can claim their listing to edit it)
ALTER TABLE companies ADD COLUMN IF NOT EXISTS is_claimed      BOOLEAN DEFAULT false;
ALTER TABLE companies ADD COLUMN IF NOT EXISTS claimed_by      UUID REFERENCES auth.users(id);
ALTER TABLE companies ADD COLUMN IF NOT EXISTS claimed_at      TIMESTAMPTZ;

-- Timestamps
ALTER TABLE companies ADD COLUMN IF NOT EXISTS updated_at      TIMESTAMPTZ DEFAULT NOW();

-- ─── AUTO-SLUG FOR NEW COMPANIES ─────────────────────────────
-- Generates slug from business_name + city on insert if not provided
CREATE OR REPLACE FUNCTION generate_company_slug()
RETURNS TRIGGER AS $$
DECLARE
  base_slug TEXT;
  final_slug TEXT;
  counter   INTEGER := 0;
BEGIN
  IF NEW.slug IS NULL OR NEW.slug = '' THEN
    base_slug := slugify(NEW.business_name || ' ' || COALESCE(NEW.city, ''));
    final_slug := base_slug;
    WHILE EXISTS (SELECT 1 FROM companies WHERE slug = final_slug AND id != NEW.id) LOOP
      counter := counter + 1;
      final_slug := base_slug || '-' || counter;
    END LOOP;
    NEW.slug := final_slug;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_company_slug ON companies;
CREATE TRIGGER trg_company_slug
  BEFORE INSERT ON companies
  FOR EACH ROW EXECUTE FUNCTION generate_company_slug();

DROP TRIGGER IF EXISTS trg_company_updated_at ON companies;
CREATE TRIGGER trg_company_updated_at
  BEFORE UPDATE ON companies
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Backfill slugs for existing seed rows
UPDATE companies
SET slug = (
  SELECT final_slug FROM (
    SELECT slugify(business_name || ' ' || COALESCE(city, '')) AS final_slug
  ) s
)
WHERE slug IS NULL;

-- ─── REVIEWS TABLE ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS reviews (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at    TIMESTAMPTZ DEFAULT NOW(),

  company_id    UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,

  -- Reviewer (anonymous OK — just name + email for verification)
  reviewer_name TEXT NOT NULL,
  reviewer_email TEXT NOT NULL,       -- not displayed publicly
  is_verified   BOOLEAN DEFAULT false, -- email verified?

  -- Content
  rating        SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  title         TEXT,
  body          TEXT,

  -- Moderation
  is_approved   BOOLEAN DEFAULT false,
  flagged       BOOLEAN DEFAULT false
);

CREATE INDEX IF NOT EXISTS idx_reviews_company ON reviews(company_id, is_approved);
CREATE INDEX IF NOT EXISTS idx_reviews_created  ON reviews(created_at DESC);

-- Auto-update company rating + review_count when reviews change
CREATE OR REPLACE FUNCTION sync_company_rating()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE companies
  SET
    rating       = (SELECT ROUND(AVG(rating)::NUMERIC, 2) FROM reviews WHERE company_id = COALESCE(NEW.company_id, OLD.company_id) AND is_approved = true),
    review_count = (SELECT COUNT(*) FROM reviews WHERE company_id = COALESCE(NEW.company_id, OLD.company_id) AND is_approved = true),
    updated_at   = NOW()
  WHERE id = COALESCE(NEW.company_id, OLD.company_id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_sync_rating ON reviews;
CREATE TRIGGER trg_sync_rating
  AFTER INSERT OR UPDATE OR DELETE ON reviews
  FOR EACH ROW EXECUTE FUNCTION sync_company_rating();

-- ─── INDEXES ─────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_companies_slug         ON companies(slug);
CREATE INDEX IF NOT EXISTS idx_companies_city_state   ON companies(city, state);
CREATE INDEX IF NOT EXISTS idx_companies_approved     ON companies(is_approved, is_featured);
CREATE INDEX IF NOT EXISTS idx_companies_location     ON companies(latitude, longitude);
CREATE INDEX IF NOT EXISTS idx_companies_services     ON companies USING GIN(services);

-- ─── RLS POLICIES ────────────────────────────────────────────
-- Public directory: approved listings are readable
DROP POLICY IF EXISTS "Public can view active companies" ON companies;
CREATE POLICY "Public can view approved listings"
  ON companies FOR SELECT TO anon
  USING (is_approved = true);

-- Claimed owners can update their own listing
DROP POLICY IF EXISTS "Owners can update own listing" ON companies;
CREATE POLICY "Owners can update own listing"
  ON companies FOR UPDATE
  USING (auth.uid() = claimed_by);

-- Reviews: public can read approved ones
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view approved reviews"
  ON reviews FOR SELECT TO anon
  USING (is_approved = true);

CREATE POLICY "Anyone can submit a review"
  ON reviews FOR INSERT TO anon
  WITH CHECK (true);

-- ─── BACKFILL SEED DATA ──────────────────────────────────────
-- Mark seed companies as approved so they show in directory
UPDATE companies SET is_approved = true WHERE is_verified = true;

-- Add lat/lng + address for seed companies (approximate city centers)
UPDATE companies SET
  latitude = 35.2271, longitude = -80.8431,
  address  = 'Charlotte, NC'
WHERE city = 'Charlotte' AND state = 'NC';

UPDATE companies SET
  latitude = 36.1627, longitude = -86.7816,
  address  = 'Nashville, TN'
WHERE city = 'Nashville' AND state = 'TN';

UPDATE companies SET
  latitude = 30.2672, longitude = -97.7431,
  address  = 'Austin, TX'
WHERE city = 'Austin' AND state = 'TX';
