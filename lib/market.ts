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
