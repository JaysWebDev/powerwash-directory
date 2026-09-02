-- Migration 003 — Pro Waitlist (WashPro Signal)
-- Weekly local-market intelligence brief for outdoor-services pros.
-- Run in Supabase SQL Editor.

CREATE TABLE IF NOT EXISTS pro_waitlist (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at     TIMESTAMPTZ DEFAULT NOW(),

  -- Who is signing up
  email          TEXT NOT NULL,
  business_name  TEXT,
  contact_name   TEXT,

  -- Their market (drives which local signal they get)
  city           TEXT,
  state          TEXT,
  service_focus  TEXT,          -- e.g. "power washing", "gutters", "multiple"

  -- Attribution + workflow
  source         TEXT NOT NULL DEFAULT '/pros',
  status         TEXT NOT NULL DEFAULT 'new'   -- new | invited | active | churned
    CHECK (status IN ('new', 'invited', 'active', 'churned')),
  notes          TEXT
);

-- One row per email (idempotent signups — re-submitting is a no-op upsert)
CREATE UNIQUE INDEX IF NOT EXISTS idx_pro_waitlist_email ON pro_waitlist (LOWER(email));
CREATE INDEX IF NOT EXISTS idx_pro_waitlist_status ON pro_waitlist (status, created_at DESC);

-- RLS: anyone can join, only service role can read/update
ALTER TABLE pro_waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join the waitlist"
  ON pro_waitlist FOR INSERT TO anon
  WITH CHECK (true);
