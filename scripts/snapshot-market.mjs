// Weekly market snapshot — writes one JSON file per run to data/snapshots/.
// Comparing the two most recent files yields the week-over-week deltas the
// Signal brief uses. File-based so it needs no Supabase table (no DDL access).
//
//   node scripts/snapshot-market.mjs                 # snapshot every approved company
//   node scripts/snapshot-market.mjs --city "Las Vegas" --state NV
//   node scripts/snapshot-market.mjs --out-dir "/media/j/Extreme SSD/Server/washpro-snapshots"
//
import fs from "node:fs";
import path from "node:path";
import { sb, fetchAll, ROOT } from "./_client.mjs";

function arg(name) {
  const i = process.argv.indexOf(name);
  return i > -1 ? process.argv[i + 1] : null;
}

const city = arg("--city");
const state = arg("--state");
const outDir = arg("--out-dir") || path.join(ROOT, "data", "snapshots");
const today = new Date().toISOString().slice(0, 10);

const filters = { is_approved: true };
if (city) filters.city = city;
if (state) filters.state = state;

console.log(`Snapshotting ${city ? `${city}, ${state ?? ""}`.trim() : "ALL markets"} for ${today} …`);

const companies = await fetchAll(
  "companies",
  "slug, business_name, city, state, rating, review_count, website, services",
  filters
);

const records = companies
  .filter((c) => c.slug)
  .map((c) => ({
    slug: c.slug,
    business_name: c.business_name ?? null,
    city: c.city ?? null,
    state: c.state ?? null,
    rating: c.rating != null ? Number(c.rating) : null,
    review_count: c.review_count ?? 0,
    has_website: Boolean(c.website),
    service_count: (c.services || []).length,
  }));

fs.mkdirSync(outDir, { recursive: true });
const file = path.join(outDir, `snapshot-${today}.json`);
fs.writeFileSync(file, JSON.stringify({ date: today, count: records.length, companies: records }));
console.log(`Wrote ${records.length} records → ${file}`);

// Upsert into Supabase — idempotent, re-running same day updates in place.
const rows = records.map((r) => ({
  snapshot_date: today,
  company_slug: r.slug,
  business_name: r.business_name,
  city: r.city,
  state: r.state,
  rating: r.rating,
  review_count: r.review_count,
  has_website: r.has_website,
  service_count: r.service_count,
}));

const BATCH = 1000;
let upserted = 0;
for (let i = 0; i < rows.length; i += BATCH) {
  const { error } = await sb
    .from("market_snapshots")
    .upsert(rows.slice(i, i + BATCH), { onConflict: "snapshot_date,company_slug" });
  if (error) throw error;
  upserted += Math.min(BATCH, rows.length - i);
  process.stdout.write(`\r  Upserted ${upserted}/${rows.length} …`);
}
console.log(`\nDone → market_snapshots (${upserted} rows, date=${today})`);
