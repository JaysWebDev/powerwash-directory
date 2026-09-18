// WashPro Signal — weekly market brief generator.
// Builds the brief from live `companies` data, and layers week-over-week deltas
// from the JSON snapshots in data/snapshots/ once two or more exist.
//
//   node scripts/generate-brief.mjs --city "Las Vegas" --state NV
//   node scripts/generate-brief.mjs --city Austin --state TX --out-dir ./briefs
//
import fs from "node:fs";
import path from "node:path";
import { fetchAll, ROOT } from "./_client.mjs";

function arg(name, def = null) {
  const i = process.argv.indexOf(name);
  return i > -1 ? process.argv[i + 1] : def;
}

const CITY = arg("--city", "Las Vegas");
const STATE = arg("--state", "NV");
const OUT_DIR = arg("--out-dir", process.cwd());
const SNAP_DIR = arg("--snapshots-dir", path.join(ROOT, "data", "snapshots"));
const fmtSvc = (s) => s.replace(/-/g, " ");
const rv = (n) => `${n} review${Number(n) === 1 ? "" : "s"}`;
const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

// Off-vertical filter: the Yelp scrape swept in window-cleaning / gutter / lawn businesses and
// stamped them ALL with the same default power-wash services, so `services` can't tell them apart
// — the business NAME is the only usable signal. Exclude names that read as a DIFFERENT trade,
// UNLESS they also claim pressure/power/soft washing (genuine dual-service pros are kept). Applied
// at the SOURCE so the market count, white-space denominators, and named benchmark/soft-spot
// sections all agree on "power-washers only" — otherwise a thin city (Chicago) surfaced a gutter
// co. + window washers as its "top power-washing pros," and Vegas's "287 companies" was ~27%
// off-vertical. Validated 2026-09-17: across the rated set 176 excluded / 106 dual-service kept /
// 0 false keeps. Do NOT switch this to `services`-based — every row has identical defaulted services.
const OFFVERT_RE = /window (clean|wash)|gutter|chimney|carpet|roofing|roof repair|junk|landscap|lawn|tree service|maid|janitor|pool serv|pest|hvac|plumb|paint/i;
const PWASH_RE = /pressure|power ?wash|soft ?wash|exterior clean/i;
const isPowerWasher = (name) => !(OFFVERT_RE.test(name || "") && !PWASH_RE.test(name || ""));

// ── Live market ────────────────────────────────────────────────
const allApproved = await fetchAll(
  "companies",
  "slug, business_name, city, state, rating, review_count, website, phone, services, created_at",
  { is_approved: true, city: CITY, state: STATE }
);
const pros = allApproved.filter((p) => isPowerWasher(p.business_name));
if (!pros.length) {
  console.error(`No approved power-washing pros for ${CITY}, ${STATE} (of ${allApproved.length} approved rows).`);
  process.exit(1);
}

const rated = pros.filter((p) => p.rating != null && Number(p.rating) > 0 && p.review_count > 0);
const avgRating = rated.length ? (rated.reduce((s, p) => s + Number(p.rating), 0) / rated.length).toFixed(2) : null;
// NOTE: `website is null` is NOT a real-world "no web presence" signal — audited 2026-08-29 and
// re-confirmed 2026-09-16: the no-website rows ALSO have null phone, and the set includes
// 300+ review businesses (Avanti Green etc.). It's a scrape-completeness artifact. Do NOT pitch
// on it. No "competitors with no website" section, no no-website stat. See [[washpro_signal_state]].

const svcCount = {};
for (const p of pros) for (const s of p.services || []) svcCount[s] = (svcCount[s] || 0) + 1;
const whitespace = Object.entries(svcCount).sort((a, b) => a[1] - b[1]).slice(0, 4);
const saturated = Object.entries(svcCount).sort((a, b) => b[1] - a[1]).slice(0, 3);
// A "soft spot" is only worth targeting if the gap is real AND the pro has enough reviews
// for the rating to mean something. Otherwise a 4.9★/7-review pro reads as a laggard against
// an inflated small-sample average — noise, not signal.
const SOFT_MIN_REVIEWS = 10;
const SOFT_MIN_GAP = 0.3;
const softSpots = rated
  .filter((p) => avgRating && Number(avgRating) - Number(p.rating) >= SOFT_MIN_GAP && Number(p.review_count) >= SOFT_MIN_REVIEWS)
  .sort((a, b) => a.rating - b.rating).slice(0, 4);
const leaders = [...rated].sort((a, b) => b.rating - a.rating || b.review_count - a.review_count).slice(0, 3);

// ── Week-over-week deltas (from JSON snapshots, if 2+ exist) ────
function computeDeltas() {
  let files;
  try {
    files = fs.readdirSync(SNAP_DIR).filter((f) => /^snapshot-\d{4}-\d{2}-\d{2}\.json$/.test(f)).sort();
  } catch {
    return null; // no snapshots dir yet
  }
  if (files.length < 2) return null;
  const load = (f) => {
    const j = JSON.parse(fs.readFileSync(path.join(SNAP_DIR, f), "utf8"));
    const date = j.date ?? f.slice(9, 19);
    const rows = (j.companies || []).filter((r) => r.city === CITY && r.state === STATE);
    return { date, rows };
  };
  const curF = files[files.length - 1];
  const prevF = files[files.length - 2];
  const { date: curDate, rows: cur } = load(curF);
  const { date: prevDate, rows: prev } = load(prevF);
  const prevBy = Object.fromEntries(prev.map((r) => [r.slug, r]));
  const curBy = Object.fromEntries(cur.map((r) => [r.slug, r]));

  const newListings = cur.filter((r) => !prevBy[r.slug]);
  const gone = prev.filter((r) => !curBy[r.slug]);
  const reviewGains = cur
    .map((r) => ({ ...r, delta: (r.review_count || 0) - (prevBy[r.slug]?.review_count ?? r.review_count ?? 0) }))
    .filter((r) => prevBy[r.slug] && r.delta > 0)
    .sort((a, b) => b.delta - a.delta).slice(0, 5);
  const ratingDrops = cur
    .map((r) => ({ ...r, drop: (prevBy[r.slug]?.rating ?? r.rating) - (r.rating ?? 0) }))
    .filter((r) => prevBy[r.slug]?.rating && r.rating && r.drop >= 0.1)
    .sort((a, b) => b.drop - a.drop).slice(0, 5);
  const siteAdded = cur.filter((r) => r.has_website && prevBy[r.slug] && !prevBy[r.slug].has_website);

  return { curDate, prevDate, newListings, gone, reviewGains, ratingDrops, siteAdded };
}
const deltas = computeDeltas();

// ── Markdown ───────────────────────────────────────────────────
function markdown() {
  let o = `# WashPro Signal — Weekly Market Brief\n### ${CITY}, ${STATE}\n\n`;
  o += `**Market at a glance:** ${pros.length} active pros`;
  if (rated.length) o += ` · ${rated.length} with public ratings (avg ${avgRating}★)`;
  o += `\n\n`;

  if (deltas) {
    o += `## What changed since ${deltas.prevDate}\n`;
    if (deltas.newListings.length) o += `- **${deltas.newListings.length} new competitor(s)** appeared: ${deltas.newListings.slice(0, 5).map((r) => r.business_name).join(", ")}.\n`;
    if (deltas.gone.length) o += `- **${deltas.gone.length} listing(s) dropped off** (likely dormant — their old customers are winnable).\n`;
    if (deltas.reviewGains.length) o += `- **Fastest-growing reputations:** ${deltas.reviewGains.map((r) => `${r.business_name} (+${r.delta})`).join(", ")}.\n`;
    if (deltas.ratingDrops.length) o += `- **Rating slipped:** ${deltas.ratingDrops.map((r) => `${r.business_name} (−${r.drop.toFixed(1)}★)`).join(", ")} — customers up for grabs.\n`;
    if (deltas.siteAdded.length) o += `- **Went digital this week:** ${deltas.siteAdded.map((r) => r.business_name).join(", ")}.\n`;
    if (![deltas.newListings, deltas.gone, deltas.reviewGains, deltas.ratingDrops, deltas.siteAdded].some((a) => a.length)) o += `- Quiet week — no material moves in your market.\n`;
    o += `\n---\n\n`;
  } else {
    o += `> Opening snapshot. Week-over-week change tracking begins once the next weekly snapshot runs.\n\n---\n\n`;
  }

  const sections = [];

  // Lead with white space — it's computed from the well-populated `services` arrays and is
  // the strongest, most credible signal in the brief.
  {
    let s = `White space — services barely anyone offers\n`;
    for (const [svc, n] of whitespace) s += `- **${fmtSvc(svc)}** — only ${n} of ${pros.length} pros offer it.\n`;
    s += `\nCrowded on: ${saturated.map(([svc, n]) => `${fmtSvc(svc)} (${n})`).join(", ")}.\n\n**Move:** Headline the least-covered service — own the category locally.\n`;
    sections.push(s);
  }

  if (softSpots.length) {
    let s = `Reputation soft spots\n`;
    for (const p of softSpots) s += `- **${p.business_name}** — ${p.rating}★ (${rv(p.review_count)}), below the ${avgRating}★ average.\n`;
    s += `\n**Move:** Run a "free second opinion" offer in their service area.\n`;
    sections.push(s);
  } else {
    sections.push(`Reputation is wide open\nPublic ratings are thin here — the first crew to build a visible review base wins the searches.\n\n**Move:** Ask every finished job for a Google review this week.\n`);
  }

  {
    let s = `The benchmark\n`;
    if (leaders.length) for (const p of leaders) s += `- **${p.business_name}** — ${p.rating}★ (${rv(p.review_count)}).\n`;
    else s += `No standout public rating yet — the "best in town" slot is unclaimed.\n`;
    sections.push(s);
  }

  sections.forEach((s, i) => { o += `## ${i + 1}. ${s}\n`; });
  o += `\n---\n*Generated from ${pros.length} live ${CITY} listings on ${new Date().toISOString().slice(0, 10)}.*\n`;
  return o;
}

// ── Branded HTML (email-ready) ─────────────────────────────────
function html() {
  const NAVY = "#1e3a5f", NAVY_D = "#152c48", SKY = "#0ea5e9", BG = "#eef4fb", INK = "#0f2034", MUTE = "#64748b";
  const card = (inner) => `<div style="background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:20px 22px;margin:0 0 16px">${inner}</div>`;
  const h2 = (t) => `<h2 style="font-size:18px;color:${NAVY};margin:0 0 6px">${t}</h2>`;
  const move = (t) => `<p style="margin:12px 0 0;font-size:14px;color:${NAVY}"><strong style="color:${SKY}">Move →</strong> ${t}</p>`;
  const li = (t) => `<li style="margin:4px 0;font-size:14px;color:${INK}">${t}</li>`;

  let deltaCard = "";
  if (deltas) {
    const items = [];
    if (deltas.newListings.length) items.push(li(`<strong>${deltas.newListings.length} new competitor(s)</strong>: ${esc(deltas.newListings.slice(0, 5).map((r) => r.business_name).join(", "))}`));
    if (deltas.gone.length) items.push(li(`<strong>${deltas.gone.length} listing(s) dropped off</strong> — likely dormant, old customers winnable`));
    if (deltas.reviewGains.length) items.push(li(`<strong>Fastest-growing:</strong> ${esc(deltas.reviewGains.map((r) => `${r.business_name} (+${r.delta})`).join(", "))}`));
    if (deltas.ratingDrops.length) items.push(li(`<strong>Rating slipped:</strong> ${esc(deltas.ratingDrops.map((r) => `${r.business_name} (−${r.drop.toFixed(1)}★)`).join(", "))}`));
    if (deltas.siteAdded.length) items.push(li(`<strong>Went digital:</strong> ${esc(deltas.siteAdded.map((r) => r.business_name).join(", "))}`));
    if (!items.length) items.push(li("Quiet week — no material moves."));
    deltaCard = card(`${h2(`📈 What changed since ${deltas.prevDate}`)}<ul style="margin:8px 0 0;padding-left:18px">${items.join("")}</ul>`);
  }

  const cardDefs = [];
  cardDefs.push({
    title: "White space — under-served services",
    body: `<ul style="margin:0;padding-left:18px">${whitespace.map(([s, n]) => li(`<strong>${fmtSvc(s)}</strong> — only ${n} of ${pros.length}`)).join("")}</ul><p style="margin:8px 0 0;font-size:13px;color:${MUTE}">Crowded on: ${saturated.map(([s, n]) => `${fmtSvc(s)} (${n})`).join(", ")}.</p>${move("Headline the least-covered service — own the category locally.")}`,
  });
  cardDefs.push(softSpots.length
    ? { title: "Reputation soft spots", body: `<ul style="margin:0;padding-left:18px">${softSpots.map((p) => li(`${esc(p.business_name)} — ${p.rating}★ (${p.review_count})`)).join("")}</ul>${move('Run a "free second opinion" offer in their area.')}` }
    : { title: "Reputation is wide open", body: `<p style="margin:0;font-size:14px;color:${INK}">Ratings are thin here — the first crew to build a visible review base wins the searches.</p>${move("Ask every finished job for a Google review this week.")}` });
  cardDefs.push({
    title: "The benchmark",
    body: `<ul style="margin:0;padding-left:18px">${leaders.length ? leaders.map((p) => li(`${esc(p.business_name)} — ${p.rating}★ (${p.review_count})`)).join("") : li('"Best in town" is unclaimed.')}</ul>`,
  });
  const bodyCards = cardDefs.map((d, i) => card(`${h2(`${i + 1} · ${d.title}`)}${d.body}`)).join("");

  const stat = (v, l) => `<td style="text-align:center;padding:0 10px"><div style="font-size:22px;font-weight:800;color:#fff">${v}</div><div style="font-size:11px;color:#93c5fd;text-transform:uppercase;letter-spacing:.04em">${l}</div></td>`;

  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>WashPro Signal — ${CITY}</title></head>
<body style="margin:0;background:${BG};font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">
<div style="max-width:600px;margin:0 auto;padding:24px 16px">
  <div style="background:linear-gradient(160deg,${NAVY},${NAVY_D});border-radius:16px;padding:26px 24px;color:#fff;margin-bottom:20px">
    <div style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#93c5fd;font-weight:700">WashPro Signal</div>
    <div style="font-size:26px;font-weight:800;margin:6px 0 2px">${CITY}, ${STATE}</div>
    <div style="font-size:13px;color:#cbd5e1">Weekly market brief · ${new Date().toISOString().slice(0, 10)}</div>
    <table style="width:100%;margin-top:18px;border-top:1px solid rgba(255,255,255,.15);padding-top:16px"><tr>
      ${stat(pros.length, "Active pros")}${stat(rated.length ? `${avgRating}★` : "—", "Avg rating")}${stat(rated.length, "Rated pros")}
    </tr></table>
  </div>
  ${deltaCard}${bodyCards}
  <p style="text-align:center;font-size:12px;color:${MUTE};margin:20px 0 0">Generated from ${pros.length} live listings. In production this lands every Monday with week-over-week deltas, plus new-business permits and weather-driven demand for your ZIPs.</p>
</div></body></html>`;
}

fs.mkdirSync(OUT_DIR, { recursive: true });
const slug = `${CITY}-${STATE}`.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const mdPath = path.join(OUT_DIR, `signal-${slug}.md`);
const htmlPath = path.join(OUT_DIR, `signal-${slug}.html`);
fs.writeFileSync(mdPath, markdown());
fs.writeFileSync(htmlPath, html());
console.log(`${CITY}, ${STATE} | pros:${pros.length} rated:${rated.length} soft-spots:${softSpots.length} | deltas:${deltas ? "yes" : "none (need 2nd snapshot)"}`);
console.log(`Wrote ${mdPath}`);
console.log(`Wrote ${htmlPath}`);
