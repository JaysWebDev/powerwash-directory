// Shared market-slug helpers for the WashPro Signal pro funnel (/pros/[market]).
// Slug scheme is its own simple "city-statetabbr" (e.g. "las-vegas-nv"),
// distinct from the directory's "power-washing-…" location slugs.
import { DIRECTORY_CITIES } from "./directory";

export function marketToSlug(city: string, stateAbbr: string): string {
  const c = city
    .toLowerCase()
    .replace(/[.']/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s-]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${c}-${stateAbbr.toLowerCase()}`;
}

export interface Market {
  city: string;
  stateAbbr: string;
  label: string; // "Las Vegas, NV"
  slug: string; // "las-vegas-nv"
}

// De-duplicated market list (some city+state pairs repeat in DIRECTORY_CITIES).
export const MARKETS: Market[] = Array.from(
  new Map(
    DIRECTORY_CITIES.map((c) => {
      const slug = marketToSlug(c.city, c.stateAbbr);
      return [slug, { city: c.city, stateAbbr: c.stateAbbr, label: `${c.city}, ${c.stateAbbr}`, slug }];
    })
  ).values()
).sort((a, b) => a.label.localeCompare(b.label));

export function resolveMarket(slug: string): { city: string; stateAbbr: string } | null {
  const m = MARKETS.find((x) => x.slug === slug);
  return m ? { city: m.city, stateAbbr: m.stateAbbr } : null;
}

// Off-vertical filter — the Yelp scrape swept in window-cleaning / gutter / lawn businesses and
// stamped them ALL with the same default power-wash services, so the business NAME is the only
// usable signal. A name reading as a DIFFERENT trade is excluded UNLESS it also claims
// pressure/power/soft washing (genuine dual-service pros are kept). This is the single source of
// truth for "is this a power washer" on the pro funnel; the weekly brief generator
// (scripts/generate-brief.mjs) carries an IDENTICAL copy of these two regexes — keep them in sync.
// Validated 2026-09-18: of the rated set, 176 excluded / 106 dual-service kept / 0 false keeps.
const OFFVERT_RE = /window (clean|wash)|gutter|chimney|carpet|roofing|roof repair|junk|landscap|lawn|tree service|maid|janitor|pool serv|pest|hvac|plumb|paint/i;
const PWASH_RE = /pressure|power ?wash|soft ?wash|exterior clean/i;
export function isPowerWasher(name: string | null | undefined): boolean {
  const n = name ?? "";
  return !(OFFVERT_RE.test(n) && !PWASH_RE.test(n));
}
