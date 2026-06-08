-- Migration 002 — Claim Requests
-- Run in Supabase SQL Editor

CREATE TABLE IF NOT EXISTS claim_requests (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at       TIMESTAMPTZ DEFAULT NOW(),

  -- Which company
  company_id       UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  company_slug     TEXT NOT NULL,
  company_name     TEXT NOT NULL,

  -- Who is claiming
  claimant_name    TEXT NOT NULL,
  claimant_email   TEXT NOT NULL,
  claimant_phone   TEXT,
  claimant_role    TEXT NOT NULL DEFAULT 'owner',

  -- Workflow
  status           TEXT NOT NULL DEFAULT 'pending'  -- pending | approved | rejected
    CHECK (status IN ('pending', 'approved', 'rejected')),
  reviewed_at      TIMESTAMPTZ,
  notes            TEXT
);

CREATE INDEX IF NOT EXISTS idx_claim_requests_company  ON claim_requests(company_id);
CREATE INDEX IF NOT EXISTS idx_claim_requests_email    ON claim_requests(claimant_email);
CREATE INDEX IF NOT EXISTS idx_claim_requests_status   ON claim_requests(status, created_at DESC);

-- RLS: anyone can submit, only service role can read/update
ALTER TABLE claim_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a claim"
  ON claim_requests FOR INSERT TO anon
  WITH CHECK (true);

-- When a claim is approved, mark the company as claimed
CREATE OR REPLACE FUNCTION approve_claim(claim_id UUID)
RETURNS VOID AS $$
DECLARE
  v_company_id UUID;
BEGIN
  SELECT company_id INTO v_company_id FROM claim_requests WHERE id = claim_id;

  UPDATE claim_requests
  SET status = 'approved', reviewed_at = NOW()
  WHERE id = claim_id;

  UPDATE companies
  SET is_claimed = true, claimed_at = NOW()
  WHERE id = v_company_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
