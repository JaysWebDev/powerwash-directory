# 🚿 Powerwash Directory

**Local service marketplace connecting customers with pressure washing businesses — zip-based provider matching, lead capture, and admin panel. 1,445 companies across 20 city pages.**

Live → [find.outdoorwashing.com](https://find.outdoorwashing.com) · [jays.website/business/](https://jays.website/business/)

---

## 1. Overview

WashPro is a local service marketplace for the power washing industry. Homeowners enter their zip code, describe their job, and get matched with vetted local pros. Businesses get a managed lead pipeline. The directory layer is built for speed — quote requests in under 2 minutes.

**Stack:** Next.js 15 · TypeScript · Tailwind CSS · Supabase · SQLite (local dev)

---

## 2. Features

- **Zip-based matching** — hero input routes customers to local provider pool
- **Lead submission** — structured quote requests (property type, services, size, notes)
- **Admin panel** — review and manage incoming leads
- **Provider directory** — 1,445 companies, searchable by service type and location
- **City pages** — 20 pre-built city landing pages for SEO
- **SEO-ready** — sitemap, robots.txt, Google verification
- **Deployable** — nginx config + systemd service included for VPS deployment

---

## 3. Quick Start

```bash
git clone https://github.com/JaysWebDev/powerwash-directory
cd powerwash-directory
npm install

cp .env.local.example .env.local
# Fill in your Supabase project URL and keys

npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 4. Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Get these from your Supabase project → Settings → API.

---

## 5. Database

Schema lives in `supabase/schema.sql`. Run migrations via the Supabase dashboard or CLI:

```bash
supabase db push
```

---

## 6. VPS Deployment

Nginx and systemd configs are included:

```bash
# Copy nginx config
sudo cp outdoorwashing.conf /etc/nginx/sites-available/outdoorwashing.conf
sudo ln -s /etc/nginx/sites-available/outdoorwashing.conf /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# Install systemd service
sudo cp outdoorwashing.service /etc/systemd/system/
sudo systemctl enable --now outdoorwashing
```

The service expects `.env.local` at the project root with Supabase credentials before start.

---

## 7. Troubleshooting

**Port in use:** Check `lsof -i :3031` and adjust `PORT` in the service file.

**DB connection errors:** Verify `NEXT_PUBLIC_SUPABASE_URL` and both keys are set in `.env.local`.

**Build fails:** Run `npm run build` locally to surface TypeScript errors before deploying.

---

[find.outdoorwashing.com](https://find.outdoorwashing.com) · jays.website/business/ · [JaysWebDev](https://github.com/JaysWebDev)
