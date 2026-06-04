-- ============================================================
-- OutdoorWashing / WashPro Directory — Supabase Schema
-- Run this in your Supabase project → SQL Editor
-- ============================================================

-- Enable UUID generation
create extension if not exists "pgcrypto";

-- ─── LEADS ───────────────────────────────────────────────────
create table if not exists leads (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz default now(),

  -- Contact info
  full_name       text not null,
  phone           text not null,
  email           text not null,
  zip_code        text not null,

  -- Job details
  property_type   text,                        -- single-family, townhouse, commercial, other
  services        text[] default '{}',          -- array: ['house-soft-washing', 'driveway', ...]
  property_size   text,                        -- small, medium, large
  notes           text,
  photo_urls      text[] default '{}',

  -- Pipeline
  status          text default 'new',          -- new | assigned | contacted | quoted | won | lost
  estimated_value integer,                     -- estimated job value in dollars

  -- Metadata
  source          text,                        -- '/', '/get-quotes', etc.
  ip_address      text,
  user_agent      text
);

-- ─── COMPANIES ───────────────────────────────────────────────
create table if not exists companies (
  id                    uuid primary key default gen_random_uuid(),
  created_at            timestamptz default now(),

  -- Identity
  business_name         text not null,
  contact_name          text,
  email                 text not null unique,
  phone                 text,
  website               text,

  -- Coverage
  zip_codes             text[] default '{}',   -- ZIP codes they serve
  city                  text,
  state                 text,
  services              text[] default '{}',   -- services they offer

  -- Reputation
  rating                numeric(3,2) default 5.0,
  review_count          integer default 0,

  -- Status
  is_active             boolean default true,
  is_verified           boolean default false,

  -- Billing / lead plan
  plan                  text default 'free',   -- free | basic | pro | premium
  monthly_lead_cap      integer default 5,     -- max leads per month
  leads_this_month      integer default 0,
  plan_renewed_at       date default current_date,

  -- Internal notes
  notes                 text
);

-- ─── LEAD ASSIGNMENTS ────────────────────────────────────────
create table if not exists lead_assignments (
  id              uuid primary key default gen_random_uuid(),
  assigned_at     timestamptz default now(),

  lead_id         uuid not null references leads(id) on delete cascade,
  company_id      uuid not null references companies(id) on delete cascade,

  status          text default 'sent',         -- sent | viewed | responded | passed
  response_notes  text,

  unique(lead_id, company_id)
);

-- ─── INDEXES ─────────────────────────────────────────────────
create index if not exists leads_zip_code_idx     on leads(zip_code);
create index if not exists leads_status_idx       on leads(status);
create index if not exists leads_created_at_idx   on leads(created_at desc);
create index if not exists companies_zip_codes_idx on companies using gin(zip_codes);
create index if not exists companies_active_idx   on companies(is_active, plan);

-- ─── ROW LEVEL SECURITY ──────────────────────────────────────
-- Leads: anyone can INSERT (form submission), only service role can SELECT/UPDATE
alter table leads enable row level security;
create policy "Public can insert leads"
  on leads for insert to anon with check (true);

-- Companies: read-only for public (directory listing), writes via service role only
alter table companies enable row level security;
create policy "Public can view active companies"
  on companies for select to anon using (is_active = true);

-- Assignments: service role only (no public access)
alter table lead_assignments enable row level security;

-- ─── SEED: Sample Companies ──────────────────────────────────
insert into companies (business_name, contact_name, email, phone, city, state, zip_codes, services, rating, review_count, is_active, is_verified, plan, monthly_lead_cap)
values
  ('Clean Slate Power Washing', 'Mike Torres', 'mike@cleanslate.com', '(704) 555-0101', 'Charlotte', 'NC',
   ARRAY['28202','28203','28204','28205','28206','28207','28208'],
   ARRAY['house-soft-washing','driveway','deck-restoration','fence-washing'], 4.9, 47, true, true, 'pro', 20),

  ('Carolina Pressure Pros', 'Lisa Hammond', 'lisa@capressure.com', '(704) 555-0202', 'Charlotte', 'NC',
   ARRAY['28202','28209','28210','28211','28212'],
   ARRAY['house-soft-washing','roof-cleaning','driveway','commercial'], 4.7, 32, true, true, 'basic', 10),

  ('Sunshine Soft Wash', 'Derek Webb', 'derek@sunshinesoftwash.com', '(615) 555-0303', 'Nashville', 'TN',
   ARRAY['37201','37202','37203','37204','37205','37206'],
   ARRAY['house-soft-washing','roof-cleaning','gutter-cleaning','solar-panels'], 4.8, 61, true, true, 'premium', 40),

  ('Austin Power Wash Co.', 'Sandra Chen', 'sandra@austinpw.com', '(512) 555-0404', 'Austin', 'TX',
   ARRAY['78701','78702','78703','78704','78705','78741'],
   ARRAY['driveway','commercial','deck-restoration','fence-washing'], 4.6, 28, true, false, 'basic', 10),

  ('SparkleWash Pro', 'James Riley', 'james@sparklewash.com', '(512) 555-0505', 'Austin', 'TX',
   ARRAY['78701','78702','78703','78741','78745'],
   ARRAY['house-soft-washing','driveway','roof-cleaning','solar-panels','gutter-cleaning'], 4.9, 84, true, true, 'premium', 40);
