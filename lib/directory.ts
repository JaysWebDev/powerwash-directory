import { createServerClient } from "./supabase";
import { siteConfig } from "@/config/site";

export interface Company {
  id: string;
  slug: string;
  business_name: string;
  phone: string | null;
  address: string | null;
  city: string;
  state: string;
  website: string | null;
  rating: number | null;
  review_count: number;
  services: string[];
  is_verified: boolean;
  is_featured: boolean;
  is_claimed: boolean;
  latitude: number | null;
  longitude: number | null;
  short_description: string | null;
  description: string | null;
  logo_url: string | null;
}

export interface CityPageData {
  city: string;
  state: string;
  companies: Company[];
}

// Canonical city list for static generation + sitemap
export const DIRECTORY_CITIES: { city: string; state: string; stateAbbr: string }[] = [
  // Original 20
  { city: "Charlotte",      state: "North Carolina", stateAbbr: "NC" },
  { city: "Nashville",      state: "Tennessee",      stateAbbr: "TN" },
  { city: "Austin",         state: "Texas",          stateAbbr: "TX" },
  { city: "Atlanta",        state: "Georgia",        stateAbbr: "GA" },
  { city: "Dallas",         state: "Texas",          stateAbbr: "TX" },
  { city: "Houston",        state: "Texas",          stateAbbr: "TX" },
  { city: "Phoenix",        state: "Arizona",        stateAbbr: "AZ" },
  { city: "Jacksonville",   state: "Florida",        stateAbbr: "FL" },
  { city: "Orlando",        state: "Florida",        stateAbbr: "FL" },
  { city: "Tampa",          state: "Florida",        stateAbbr: "FL" },
  { city: "Raleigh",        state: "North Carolina", stateAbbr: "NC" },
  { city: "Denver",         state: "Colorado",       stateAbbr: "CO" },
  { city: "Columbus",       state: "Ohio",           stateAbbr: "OH" },
  { city: "Indianapolis",   state: "Indiana",        stateAbbr: "IN" },
  { city: "Louisville",     state: "Kentucky",       stateAbbr: "KY" },
  { city: "Memphis",        state: "Tennessee",      stateAbbr: "TN" },
  { city: "Oklahoma City",  state: "Oklahoma",       stateAbbr: "OK" },
  { city: "San Antonio",    state: "Texas",          stateAbbr: "TX" },
  { city: "Fort Worth",     state: "Texas",          stateAbbr: "TX" },
  { city: "Las Vegas",      state: "Nevada",         stateAbbr: "NV" },
  // Expansion — top US metros by population + search volume
  { city: "New York",       state: "New York",       stateAbbr: "NY" },
  { city: "Los Angeles",    state: "California",     stateAbbr: "CA" },
  { city: "Chicago",        state: "Illinois",       stateAbbr: "IL" },
  { city: "Philadelphia",   state: "Pennsylvania",   stateAbbr: "PA" },
  { city: "San Diego",      state: "California",     stateAbbr: "CA" },
  { city: "San Jose",       state: "California",     stateAbbr: "CA" },
  { city: "Seattle",        state: "Washington",     stateAbbr: "WA" },
  { city: "Portland",       state: "Oregon",         stateAbbr: "OR" },
  { city: "Boston",         state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Baltimore",      state: "Maryland",       stateAbbr: "MD" },
  { city: "Minneapolis",    state: "Minnesota",      stateAbbr: "MN" },
  { city: "Sacramento",     state: "California",     stateAbbr: "CA" },
  { city: "Kansas City",    state: "Missouri",       stateAbbr: "MO" },
  { city: "Omaha",          state: "Nebraska",       stateAbbr: "NE" },
  { city: "Albuquerque",    state: "New Mexico",     stateAbbr: "NM" },
  { city: "Tucson",         state: "Arizona",        stateAbbr: "AZ" },
  { city: "Fresno",         state: "California",     stateAbbr: "CA" },
  { city: "Mesa",           state: "Arizona",        stateAbbr: "AZ" },
  { city: "Virginia Beach", state: "Virginia",       stateAbbr: "VA" },
  { city: "Colorado Springs", state: "Colorado",     stateAbbr: "CO" },
  { city: "Long Beach",     state: "California",     stateAbbr: "CA" },
  { city: "Bakersfield",    state: "California",     stateAbbr: "CA" },
  { city: "Aurora",         state: "Colorado",       stateAbbr: "CO" },
  { city: "Anaheim",        state: "California",     stateAbbr: "CA" },
  { city: "Santa Ana",      state: "California",     stateAbbr: "CA" },
  { city: "Corpus Christi", state: "Texas",          stateAbbr: "TX" },
  { city: "Riverside",      state: "California",     stateAbbr: "CA" },
  { city: "Lexington",      state: "Kentucky",       stateAbbr: "KY" },
  { city: "Pittsburgh",     state: "Pennsylvania",   stateAbbr: "PA" },
  { city: "Anchorage",      state: "Alaska",         stateAbbr: "AK" },
  { city: "Stockton",       state: "California",     stateAbbr: "CA" },
  { city: "Cincinnati",     state: "Ohio",           stateAbbr: "OH" },
  { city: "St. Paul",       state: "Minnesota",      stateAbbr: "MN" },
  { city: "Greensboro",     state: "North Carolina", stateAbbr: "NC" },
  { city: "Toledo",         state: "Ohio",           stateAbbr: "OH" },
  { city: "Newark",         state: "New Jersey",     stateAbbr: "NJ" },
  { city: "Plano",          state: "Texas",          stateAbbr: "TX" },
  { city: "Henderson",      state: "Nevada",         stateAbbr: "NV" },
  { city: "Lincoln",        state: "Nebraska",       stateAbbr: "NE" },
  { city: "Buffalo",        state: "New York",       stateAbbr: "NY" },
  { city: "Fort Wayne",     state: "Indiana",        stateAbbr: "IN" },
  { city: "Jersey City",    state: "New Jersey",     stateAbbr: "NJ" },
  { city: "Chula Vista",    state: "California",     stateAbbr: "CA" },
  { city: "Miami",          state: "Florida",        stateAbbr: "FL" },
  { city: "St. Louis",      state: "Missouri",       stateAbbr: "MO" },
  { city: "Madison",        state: "Wisconsin",      stateAbbr: "WI" },
  { city: "Durham",         state: "North Carolina", stateAbbr: "NC" },
  { city: "Laredo",         state: "Texas",          stateAbbr: "TX" },
  { city: "Norfolk",        state: "Virginia",       stateAbbr: "VA" },
  { city: "Chandler",       state: "Arizona",        stateAbbr: "AZ" },
  { city: "Lubbock",        state: "Texas",          stateAbbr: "TX" },
  { city: "Winston-Salem",  state: "North Carolina", stateAbbr: "NC" },
  { city: "Garland",        state: "Texas",          stateAbbr: "TX" },
  { city: "Glendale",       state: "Arizona",        stateAbbr: "AZ" },
  { city: "Hialeah",        state: "Florida",        stateAbbr: "FL" },
  { city: "Reno",           state: "Nevada",         stateAbbr: "NV" },
  { city: "Baton Rouge",    state: "Louisiana",      stateAbbr: "LA" },
  { city: "Irvine",         state: "California",     stateAbbr: "CA" },
  { city: "Chesapeake",     state: "Virginia",       stateAbbr: "VA" },
  { city: "Irving",         state: "Texas",          stateAbbr: "TX" },
  { city: "Scottsdale",     state: "Arizona",        stateAbbr: "AZ" },
  { city: "North Las Vegas", state: "Nevada",        stateAbbr: "NV" },
  { city: "Fremont",        state: "California",     stateAbbr: "CA" },
  { city: "Gilbert",        state: "Arizona",        stateAbbr: "AZ" },
  { city: "San Bernardino", state: "California",     stateAbbr: "CA" },
  { city: "Birmingham",     state: "Alabama",        stateAbbr: "AL" },
  { city: "Rochester",      state: "New York",       stateAbbr: "NY" },
  { city: "Richmond",       state: "Virginia",       stateAbbr: "VA" },
  { city: "Spokane",        state: "Washington",     stateAbbr: "WA" },
  { city: "Des Moines",     state: "Iowa",           stateAbbr: "IA" },
  { city: "Montgomery",     state: "Alabama",        stateAbbr: "AL" },
  { city: "Modesto",        state: "California",     stateAbbr: "CA" },
  { city: "Fayetteville",   state: "North Carolina", stateAbbr: "NC" },
  { city: "Tacoma",         state: "Washington",     stateAbbr: "WA" },
  { city: "Shreveport",     state: "Louisiana",      stateAbbr: "LA" },
  { city: "Akron",          state: "Ohio",           stateAbbr: "OH" },
  { city: "Aurora",         state: "Illinois",       stateAbbr: "IL" },
  { city: "Yonkers",        state: "New York",       stateAbbr: "NY" },
  { city: "Huntington Beach", state: "California",   stateAbbr: "CA" },
  { city: "Little Rock",    state: "Arkansas",       stateAbbr: "AR" },
  { city: "Glendale",       state: "California",     stateAbbr: "CA" },
  // ── Northeast Triangle — Boston / Providence / Hartford ──
  // Massachusetts
  { city: "Worcester",      state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Springfield",    state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Lowell",         state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Cambridge",      state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Brockton",       state: "Massachusetts",  stateAbbr: "MA" },
  { city: "New Bedford",    state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Quincy",         state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Lynn",           state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Fall River",     state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Newton",         state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Somerville",     state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Lawrence",       state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Framingham",     state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Haverhill",      state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Waltham",        state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Malden",         state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Brookline",      state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Plymouth",       state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Medford",        state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Taunton",        state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Chicopee",       state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Weymouth",       state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Revere",         state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Peabody",        state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Methuen",        state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Barnstable",     state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Pittsfield",     state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Attleboro",      state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Salem",          state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Westfield",      state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Holyoke",        state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Leominster",     state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Fitchburg",      state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Beverly",        state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Burlington",     state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Woburn",         state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Dedham",         state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Norwood",        state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Needham",        state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Natick",         state: "Massachusetts",  stateAbbr: "MA" },
  // Rhode Island
  { city: "Providence",     state: "Rhode Island",   stateAbbr: "RI" },
  { city: "Warwick",        state: "Rhode Island",   stateAbbr: "RI" },
  { city: "Cranston",       state: "Rhode Island",   stateAbbr: "RI" },
  { city: "Pawtucket",      state: "Rhode Island",   stateAbbr: "RI" },
  { city: "East Providence", state: "Rhode Island",  stateAbbr: "RI" },
  { city: "Woonsocket",     state: "Rhode Island",   stateAbbr: "RI" },
  { city: "Newport",        state: "Rhode Island",   stateAbbr: "RI" },
  { city: "North Providence", state: "Rhode Island", stateAbbr: "RI" },
  { city: "Cumberland",     state: "Rhode Island",   stateAbbr: "RI" },
  // Connecticut
  { city: "Hartford",       state: "Connecticut",    stateAbbr: "CT" },
  { city: "New Haven",      state: "Connecticut",    stateAbbr: "CT" },
  { city: "Bridgeport",     state: "Connecticut",    stateAbbr: "CT" },
  { city: "Waterbury",      state: "Connecticut",    stateAbbr: "CT" },
  { city: "Danbury",        state: "Connecticut",    stateAbbr: "CT" },
  { city: "New Britain",    state: "Connecticut",    stateAbbr: "CT" },
  { city: "West Hartford",  state: "Connecticut",    stateAbbr: "CT" },
  { city: "Greenwich",      state: "Connecticut",    stateAbbr: "CT" },
  { city: "Bristol",        state: "Connecticut",    stateAbbr: "CT" },
  { city: "Meriden",        state: "Connecticut",    stateAbbr: "CT" },
  { city: "Milford",        state: "Connecticut",    stateAbbr: "CT" },
  { city: "Stratford",      state: "Connecticut",    stateAbbr: "CT" },
  { city: "New London",     state: "Connecticut",    stateAbbr: "CT" },
  { city: "Hamden",         state: "Connecticut",    stateAbbr: "CT" },
  { city: "Middletown",     state: "Connecticut",    stateAbbr: "CT" },
  { city: "Shelton",        state: "Connecticut",    stateAbbr: "CT" },
  { city: "Torrington",     state: "Connecticut",    stateAbbr: "CT" },
  { city: "Trumbull",       state: "Connecticut",    stateAbbr: "CT" },
  { city: "Naugatuck",      state: "Connecticut",    stateAbbr: "CT" },
  { city: "Enfield",        state: "Connecticut",    stateAbbr: "CT" },
];

export function cityToSlug(city: string, stateAbbr: string): string {
  const citySlug = city
    .toLowerCase()
    .replace(/[.']/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s-]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${siteConfig.verticalSlug}-${citySlug}-${stateAbbr.toLowerCase()}`;
}

export function parseLocationSlug(slug: string): { city: string; state: string } | null {
  const prefix = `${siteConfig.verticalSlug}-`;
  if (!slug.startsWith(prefix)) return null;

  const match = DIRECTORY_CITIES.find((c) => cityToSlug(c.city, c.stateAbbr) === slug);
  if (match) return { city: match.city, state: match.stateAbbr };

  const rest = slug.replace(prefix, "");
  const parts = rest.split("-");
  if (parts.length < 2) return null;
  const state = parts[parts.length - 1].toUpperCase();
  if (state.length !== 2) return null;
  const city = parts
    .slice(0, -1)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
  return { city, state };
}

// Regional groups for cross-state "nearby cities" linking
export const REGIONAL_GROUPS: Record<string, string[]> = {
  newengland:   ["MA", "RI", "CT", "NH", "VT", "ME"],
  midatlantic:  ["NY", "NJ", "PA", "MD", "DE", "DC", "VA"],
  southeast:    ["FL", "GA", "NC", "SC", "TN", "AL", "MS", "KY", "WV"],
  midwest:      ["OH", "IN", "IL", "MI", "WI", "MN", "IA", "MO", "ND", "SD", "NE", "KS"],
  southwest:    ["TX", "OK", "AR", "LA", "NM", "AZ"],
  west:         ["CA", "NV", "CO", "UT", "WY", "MT", "ID", "OR", "WA", "AK", "HI"],
};

export function getNearbyCities(city: string, stateAbbr: string, limit = 8) {
  const region = Object.values(REGIONAL_GROUPS).find((states) =>
    states.includes(stateAbbr)
  );

  // Same state first, then cross-state in same region
  const sameState = DIRECTORY_CITIES.filter(
    (c) => c.stateAbbr === stateAbbr && c.city !== city
  );
  const crossState = region
    ? DIRECTORY_CITIES.filter(
        (c) => c.stateAbbr !== stateAbbr && region.includes(c.stateAbbr)
      )
    : [];

  return [...sameState, ...crossState].slice(0, limit);
}

export async function getCompanyBySlug(slug: string): Promise<Company | null> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("companies")
    .select(
      "id,slug,business_name,phone,address,city,state,website,rating,review_count,services,is_verified,is_featured,is_claimed,latitude,longitude,short_description,description,logo_url"
    )
    .eq("slug", slug)
    .eq("is_approved", true)
    .single();

  if (error || !data) return null;
  return data as Company;
}

export async function getCompanyNeighbors(city: string, state: string, excludeSlug: string): Promise<Company[]> {
  const supabase = createServerClient();
  const { data } = await supabase
    .from("companies")
    .select("id,slug,business_name,phone,address,city,state,rating,review_count,services,is_verified,is_featured,is_claimed,logo_url,short_description,latitude,longitude,website")
    .eq("city", city)
    .eq("state", state)
    .eq("is_approved", true)
    .neq("slug", excludeSlug)
    .order("rating", { ascending: false })
    .limit(4);

  return (data as Company[]) ?? [];
}

export async function getAllCompanySlugs(): Promise<string[]> {
  const supabase = createServerClient();
  const { data } = await supabase
    .from("companies")
    .select("slug")
    .eq("is_approved", true)
    .limit(10000);

  return (data ?? []).map((r: { slug: string }) => r.slug).filter(Boolean);
}

export async function getCompaniesByCity(city: string, state: string): Promise<Company[]> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("companies")
    .select(
      "id,slug,business_name,phone,address,city,state,website,rating,review_count,services,is_verified,is_featured,is_claimed,latitude,longitude,short_description,logo_url"
    )
    .eq("city", city)
    .eq("state", state)
    .eq("is_approved", true)
    .order("is_featured", { ascending: false })
    .order("rating", { ascending: false })
    .limit(50);

  if (error) {
    console.error("getCompaniesByCity error:", error);
    return [];
  }
  return (data as Company[]) ?? [];
}
