# WashPro Directory — find.outdoorwashing.com

## What This Is
AdSense-monetized power washing directory. More city pages + listings = more traffic = more ad revenue. This is a vertical template — `config/site.ts` is the only file to edit when spinning up a new vertical (gutters, lawn care, etc.).

This project is **separate from trading, rental, and OpenClaw**. Do not cross-reference them.

## Stack
- **Frontend**: Next.js App Router, deployed on Vercel (`jayswebdevs-projects/powerwash-directory`)
- **DB**: Supabase project `woqpaauhejesfjdygzxh` (us-west-2), free tier
- **Ads**: AdSense `ca-pub-3493426366115346` — already wired in `app/layout.tsx`
- **Domain**: `find.outdoorwashing.com` (Vercel) — `outdoorwashing.com` is a separate site on Cloudflare Tunnel, do not touch it

## Critical Paths
- Vertical config (brand, colors, SEO, copy): `config/site.ts` — single source of truth for the vertical identity
- City list + slug logic: `lib/directory.ts` → `DIRECTORY_CITIES` array drives static pages + sitemap
- City page route: `app/[location]/page.tsx` → URL pattern: `/power-washing-{city}-{state-abbr}`
- Supabase client: `lib/supabase.ts` + `lib/db.ts`
- Company type: `lib/directory.ts` → `Company` interface
- Secrets: `.env.local` — Yelp API key, Supabase keys, site URL. Never commit this file.

## Supabase Schema
- `companies` — core table: `slug` (UNIQUE), `lat/lng`, `is_approved`, `is_featured`, `is_claimed`, `city`, `state`, trust signals
- `reviews` — moderation-gated; `sync_company_rating()` trigger on approve
- `leads` — quote form submissions
- `lead_assignments` — lead routing (not primary revenue path)
- `email` is nullable — scraped companies don't have email

## Data & Scraper
- 1,445 approved companies across original 20 cities (seeded via Yelp Fusion API)
- Scraper lives at `/home/j/_DEV/personal_scraper_lab/` (separate repo)
- Run: `venv/bin/python3 run_directory.py --config configs/powerwash.yaml --source yelp`
- Config: `configs/powerwash.yaml` — city list, pages_per_city, `conflict_col=slug`
- Output: CSV backup to `data/` + Supabase upsert

## Adding Cities (standard flow)
1. Add entries to `DIRECTORY_CITIES` in `lib/directory.ts`
2. Run scraper against new cities (`configs/powerwash.yaml`)
3. Verify data in Supabase dashboard
4. Deploy to Vercel — static pages generate automatically from city list

## Key Rules
- Do NOT modify `config/site.ts` vertical identity (brand/domain/adsense) without approval
- Do NOT delete rows from `companies` table — set `is_approved=false` to hide instead
- Do NOT push secrets to GitHub — `.env.local` stays local; Vercel env vars are set in the dashboard
- This repo IS on public GitHub (`jayswebdev`) — no internal project references, no Gitea URLs, no trading/rental paths
- Always test `npm run build` locally before pushing (static generation will fail if Supabase env vars are missing)

## Next Steps (in order)
1. Company detail pages: `app/companies/[slug]/page.tsx`
2. Claim-your-listing flow (email-gated)
3. Expand to additional verticals by copying repo + editing `config/site.ts`

## Deploy
- Push to `main` → Vercel auto-deploys
- Check build logs at Vercel dashboard under `jayswebdevs-projects/powerwash-directory`
- Vercel env vars needed: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
