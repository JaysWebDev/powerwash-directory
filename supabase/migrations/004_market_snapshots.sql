-- Migration 004 — Market Snapshots (WashPro Signal delta engine)
-- One lightweight row per company per snapshot run. Comparing two snapshot_dates
-- yields the week-over-week deltas the Signal brief is built on (new listings,
-- review growth, website added/removed, rating drops).
-- Run in Supabase SQL Editor.

CREATE TABLE IF NOT EXISTS market_snapshots (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  snapshot_date  DATE NOT NULL DEFAULT CURRENT_DATE,
  captured_at    TIMESTAMPTZ DEFAULT NOW(),

  company_slug   TEXT NOT NULL,
  business_name  TEXT,
  city           TEXT,
  state          TEXT,

  -- Mutable signals we diff week over week
  rating         NUMERIC(3,2),
  review_count   INTEGER,
  has_website    BOOLEAN,
  service_count  SMALLINT,

  UNIQUE (snapshot_date, company_slug)
);

CREATE INDEX IF NOT EXISTS idx_snapshots_market ON market_snapshots (city, state, snapshot_date DESC);
CREATE INDEX IF NOT EXISTS idx_snapshots_date   ON market_snapshots (snapshot_date);

-- Internal data only — no anon access (RLS on, no policy = anon blocked, service role bypasses).
ALTER TABLE market_snapshots ENABLE ROW LEVEL SECURITY;
