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
  { city: "Saint Paul",     state: "Minnesota",      stateAbbr: "MN" },
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
  // ── 100-City Expansion — Jun 2026 ────────────────────────────────────────
  // Florida
  { city: "Fort Lauderdale",  state: "Florida",        stateAbbr: "FL" },
  { city: "Fort Myers",       state: "Florida",        stateAbbr: "FL" },
  { city: "St. Petersburg",   state: "Florida",        stateAbbr: "FL" },
  { city: "Cape Coral",       state: "Florida",        stateAbbr: "FL" },
  { city: "Clearwater",       state: "Florida",        stateAbbr: "FL" },
  { city: "Gainesville",      state: "Florida",        stateAbbr: "FL" },
  // Georgia
  { city: "Savannah",         state: "Georgia",        stateAbbr: "GA" },
  { city: "Augusta",          state: "Georgia",        stateAbbr: "GA" },
  { city: "Columbus",         state: "Georgia",        stateAbbr: "GA" },
  { city: "Alpharetta",       state: "Georgia",        stateAbbr: "GA" },
  { city: "Marietta",         state: "Georgia",        stateAbbr: "GA" },
  // Tennessee
  { city: "Knoxville",        state: "Tennessee",      stateAbbr: "TN" },
  { city: "Chattanooga",      state: "Tennessee",      stateAbbr: "TN" },
  { city: "Murfreesboro",     state: "Tennessee",      stateAbbr: "TN" },
  { city: "Franklin",         state: "Tennessee",      stateAbbr: "TN" },
  // North Carolina
  { city: "Cary",             state: "North Carolina", stateAbbr: "NC" },
  { city: "Concord",          state: "North Carolina", stateAbbr: "NC" },
  { city: "High Point",       state: "North Carolina", stateAbbr: "NC" },
  { city: "Wilmington",       state: "North Carolina", stateAbbr: "NC" },
  // Ohio
  { city: "Cleveland",        state: "Ohio",           stateAbbr: "OH" },
  { city: "Dayton",           state: "Ohio",           stateAbbr: "OH" },
  { city: "Youngstown",       state: "Ohio",           stateAbbr: "OH" },
  // Virginia
  { city: "Newport News",     state: "Virginia",       stateAbbr: "VA" },
  { city: "Hampton",          state: "Virginia",       stateAbbr: "VA" },
  { city: "Alexandria",       state: "Virginia",       stateAbbr: "VA" },
  // Maryland
  { city: "Rockville",        state: "Maryland",       stateAbbr: "MD" },
  { city: "Gaithersburg",     state: "Maryland",       stateAbbr: "MD" },
  { city: "Silver Spring",    state: "Maryland",       stateAbbr: "MD" },
  // Michigan
  { city: "Detroit",          state: "Michigan",       stateAbbr: "MI" },
  { city: "Grand Rapids",     state: "Michigan",       stateAbbr: "MI" },
  { city: "Warren",           state: "Michigan",       stateAbbr: "MI" },
  { city: "Sterling Heights", state: "Michigan",       stateAbbr: "MI" },
  { city: "Ann Arbor",        state: "Michigan",       stateAbbr: "MI" },
  { city: "Lansing",          state: "Michigan",       stateAbbr: "MI" },
  { city: "Dearborn",         state: "Michigan",       stateAbbr: "MI" },
  { city: "Livonia",          state: "Michigan",       stateAbbr: "MI" },
  // South Carolina
  { city: "Charleston",       state: "South Carolina", stateAbbr: "SC" },
  { city: "Columbia",         state: "South Carolina", stateAbbr: "SC" },
  { city: "Greenville",       state: "South Carolina", stateAbbr: "SC" },
  { city: "Myrtle Beach",     state: "South Carolina", stateAbbr: "SC" },
  { city: "Spartanburg",      state: "South Carolina", stateAbbr: "SC" },
  // Wisconsin
  { city: "Milwaukee",        state: "Wisconsin",      stateAbbr: "WI" },
  { city: "Green Bay",        state: "Wisconsin",      stateAbbr: "WI" },
  { city: "Kenosha",          state: "Wisconsin",      stateAbbr: "WI" },
  { city: "Racine",           state: "Wisconsin",      stateAbbr: "WI" },
  // Minnesota
  { city: "Rochester",        state: "Minnesota",      stateAbbr: "MN" },
  { city: "Bloomington",      state: "Minnesota",      stateAbbr: "MN" },
  { city: "Duluth",           state: "Minnesota",      stateAbbr: "MN" },
  // Louisiana
  { city: "New Orleans",      state: "Louisiana",      stateAbbr: "LA" },
  { city: "Lafayette",        state: "Louisiana",      stateAbbr: "LA" },
  { city: "Bossier City",     state: "Louisiana",      stateAbbr: "LA" },
  // Alabama
  { city: "Huntsville",       state: "Alabama",        stateAbbr: "AL" },
  { city: "Mobile",           state: "Alabama",        stateAbbr: "AL" },
  { city: "Hoover",           state: "Alabama",        stateAbbr: "AL" },
  // Kansas
  { city: "Wichita",          state: "Kansas",         stateAbbr: "KS" },
  { city: "Overland Park",    state: "Kansas",         stateAbbr: "KS" },
  { city: "Kansas City",      state: "Kansas",         stateAbbr: "KS" },
  { city: "Olathe",           state: "Kansas",         stateAbbr: "KS" },
  // Oklahoma
  { city: "Tulsa",            state: "Oklahoma",       stateAbbr: "OK" },
  { city: "Norman",           state: "Oklahoma",       stateAbbr: "OK" },
  // Illinois
  { city: "Naperville",       state: "Illinois",       stateAbbr: "IL" },
  { city: "Rockford",         state: "Illinois",       stateAbbr: "IL" },
  { city: "Springfield",      state: "Illinois",       stateAbbr: "IL" },
  { city: "Joliet",           state: "Illinois",       stateAbbr: "IL" },
  // Indiana
  { city: "Evansville",       state: "Indiana",        stateAbbr: "IN" },
  { city: "South Bend",       state: "Indiana",        stateAbbr: "IN" },
  // Colorado
  { city: "Fort Collins",     state: "Colorado",       stateAbbr: "CO" },
  { city: "Boulder",          state: "Colorado",       stateAbbr: "CO" },
  // Washington
  { city: "Vancouver",        state: "Washington",     stateAbbr: "WA" },
  { city: "Bellevue",         state: "Washington",     stateAbbr: "WA" },
  // Oregon
  { city: "Eugene",           state: "Oregon",         stateAbbr: "OR" },
  { city: "Salem",            state: "Oregon",         stateAbbr: "OR" },
  // Missouri
  { city: "Springfield",      state: "Missouri",       stateAbbr: "MO" },
  { city: "Independence",     state: "Missouri",       stateAbbr: "MO" },
  // Idaho
  { city: "Boise",            state: "Idaho",          stateAbbr: "ID" },
  { city: "Meridian",         state: "Idaho",          stateAbbr: "ID" },
  { city: "Coeur d'Alene",    state: "Idaho",          stateAbbr: "ID" },
  // Mississippi
  { city: "Jackson",          state: "Mississippi",    stateAbbr: "MS" },
  { city: "Southaven",        state: "Mississippi",    stateAbbr: "MS" },
  // Arkansas
  { city: "Fayetteville",     state: "Arkansas",       stateAbbr: "AR" },
  // Nevada
  { city: "Sparks",           state: "Nevada",         stateAbbr: "NV" },
  // Pennsylvania
  { city: "Allentown",        state: "Pennsylvania",   stateAbbr: "PA" },
  { city: "Erie",             state: "Pennsylvania",   stateAbbr: "PA" },
  // New York
  { city: "Staten Island",    state: "New York",       stateAbbr: "NY" },
  { city: "Syracuse",         state: "New York",       stateAbbr: "NY" },
  { city: "Brooklyn",         state: "New York",       stateAbbr: "NY" },
  // New Jersey
  { city: "Paterson",         state: "New Jersey",     stateAbbr: "NJ" },
  { city: "Elizabeth",        state: "New Jersey",     stateAbbr: "NJ" },
  // Kentucky
  { city: "Bowling Green",    state: "Kentucky",       stateAbbr: "KY" },
  { city: "Covington",        state: "Kentucky",       stateAbbr: "KY" },
  // Texas
  { city: "Arlington",        state: "Texas",          stateAbbr: "TX" },
  { city: "El Paso",          state: "Texas",          stateAbbr: "TX" },
  { city: "Waco",             state: "Texas",          stateAbbr: "TX" },
  // Utah
  { city: "Salt Lake City",   state: "Utah",           stateAbbr: "UT" },
  { city: "West Valley City", state: "Utah",           stateAbbr: "UT" },
  { city: "Provo",            state: "Utah",           stateAbbr: "UT" },
  { city: "Sandy",            state: "Utah",           stateAbbr: "UT" },
  // Northern Plains & Mountain West
  { city: "Sioux Falls",      state: "South Dakota",   stateAbbr: "SD" },
  { city: "Fargo",            state: "North Dakota",   stateAbbr: "ND" },
  { city: "Billings",         state: "Montana",        stateAbbr: "MT" },
  { city: "Cheyenne",         state: "Wyoming",        stateAbbr: "WY" },
  { city: "Charleston",       state: "West Virginia",  stateAbbr: "WV" },
  // ── New England completions — Jun 2026 ───────────────────────────────────
  { city: "Manchester",       state: "New Hampshire",     stateAbbr: "NH" },
  { city: "Concord",          state: "New Hampshire",     stateAbbr: "NH" },
  { city: "Portland",         state: "Maine",             stateAbbr: "ME" },
  { city: "Albany",           state: "New York",          stateAbbr: "NY" },
  { city: "Burlington",       state: "Vermont",           stateAbbr: "VT" },
  { city: "Washington",       state: "District of Columbia", stateAbbr: "DC" },
  // ── Data-driven expansion — Jun 2026 (25+ companies in Supabase) ─────────
  // California
  { city: "San Francisco",  state: "California",     stateAbbr: "CA" },
  { city: "Oakland",        state: "California",     stateAbbr: "CA" },
  { city: "Clovis",         state: "California",     stateAbbr: "CA" },
  { city: "Roseville",      state: "California",     stateAbbr: "CA" },
  // Florida
  { city: "Ocala",          state: "Florida",        stateAbbr: "FL" },
  { city: "Naples",         state: "Florida",        stateAbbr: "FL" },
  { city: "Pompano Beach",  state: "Florida",        stateAbbr: "FL" },
  { city: "Bradenton",      state: "Florida",        stateAbbr: "FL" },
  { city: "Boca Raton",     state: "Florida",        stateAbbr: "FL" },
  // South Carolina
  { city: "Summerville",    state: "South Carolina", stateAbbr: "SC" },
  { city: "North Charleston", state: "South Carolina", stateAbbr: "SC" },
  { city: "Greer",          state: "South Carolina", stateAbbr: "SC" },
  { city: "Simpsonville",   state: "South Carolina", stateAbbr: "SC" },
  { city: "Conway",         state: "South Carolina", stateAbbr: "SC" },
  { city: "Mount Pleasant", state: "South Carolina", stateAbbr: "SC" },
  // Arkansas
  { city: "Springdale",     state: "Arkansas",       stateAbbr: "AR" },
  { city: "North Little Rock", state: "Arkansas",    stateAbbr: "AR" },
  { city: "Rogers",         state: "Arkansas",       stateAbbr: "AR" },
  { city: "Bentonville",    state: "Arkansas",       stateAbbr: "AR" },
  // Oregon / Washington
  { city: "Springfield",    state: "Oregon",         stateAbbr: "OR" },
  { city: "Beaverton",      state: "Oregon",         stateAbbr: "OR" },
  { city: "Spokane Valley", state: "Washington",     stateAbbr: "WA" },
  { city: "Kirkland",       state: "Washington",     stateAbbr: "WA" },
  { city: "Everett",        state: "Washington",     stateAbbr: "WA" },
  // Oklahoma
  { city: "Broken Arrow",   state: "Oklahoma",       stateAbbr: "OK" },
  { city: "Edmond",         state: "Oklahoma",       stateAbbr: "OK" },
  // Louisiana
  { city: "Metairie",       state: "Louisiana",      stateAbbr: "LA" },
  // Mississippi
  { city: "Brandon",        state: "Mississippi",    stateAbbr: "MS" },
  { city: "Madison",        state: "Mississippi",    stateAbbr: "MS" },
  // Idaho
  { city: "Nampa",          state: "Idaho",          stateAbbr: "ID" },
  // Massachusetts
  { city: "Hyannis",        state: "Massachusetts",  stateAbbr: "MA" },
  { city: "Everett",        state: "Massachusetts",  stateAbbr: "MA" },
  // Alabama
  { city: "Madison",        state: "Alabama",        stateAbbr: "AL" },
  // Virginia
  { city: "Midlothian",     state: "Virginia",       stateAbbr: "VA" },
  { city: "Arlington",      state: "Virginia",       stateAbbr: "VA" },
  // Colorado
  { city: "Littleton",      state: "Colorado",       stateAbbr: "CO" },
  // Iowa
  { city: "West Des Moines", state: "Iowa",          stateAbbr: "IA" },
  // Utah
  { city: "Orem",           state: "Utah",           stateAbbr: "UT" },
  { city: "West Jordan",    state: "Utah",           stateAbbr: "UT" },
  // New Mexico
  { city: "Rio Rancho",     state: "New Mexico",     stateAbbr: "NM" },
  // Arizona
  { city: "Surprise",       state: "Arizona",        stateAbbr: "AZ" },
  // ── ~400-City Expansion — Jun 2026 ───────────────────────────────────────
  // Florida (major metros still missing)
  { city: "Tallahassee",      state: "Florida",        stateAbbr: "FL" },
  { city: "West Palm Beach",  state: "Florida",        stateAbbr: "FL" },
  { city: "Lakeland",         state: "Florida",        stateAbbr: "FL" },
  { city: "Pembroke Pines",   state: "Florida",        stateAbbr: "FL" },
  { city: "Hollywood",        state: "Florida",        stateAbbr: "FL" },
  { city: "Miramar",          state: "Florida",        stateAbbr: "FL" },
  { city: "Sunrise",          state: "Florida",        stateAbbr: "FL" },
  { city: "Deltona",          state: "Florida",        stateAbbr: "FL" },
  // Texas
  { city: "Frisco",           state: "Texas",          stateAbbr: "TX" },
  { city: "McKinney",         state: "Texas",          stateAbbr: "TX" },
  { city: "Amarillo",         state: "Texas",          stateAbbr: "TX" },
  { city: "McAllen",          state: "Texas",          stateAbbr: "TX" },
  { city: "Brownsville",      state: "Texas",          stateAbbr: "TX" },
  { city: "Killeen",          state: "Texas",          stateAbbr: "TX" },
  { city: "Mesquite",         state: "Texas",          stateAbbr: "TX" },
  { city: "Midland",          state: "Texas",          stateAbbr: "TX" },
  { city: "Pasadena",         state: "Texas",          stateAbbr: "TX" },
  // California
  { city: "Sunnyvale",        state: "California",     stateAbbr: "CA" },
  { city: "Santa Rosa",       state: "California",     stateAbbr: "CA" },
  { city: "Rancho Cucamonga", state: "California",     stateAbbr: "CA" },
  { city: "Fontana",          state: "California",     stateAbbr: "CA" },
  { city: "Moreno Valley",    state: "California",     stateAbbr: "CA" },
  { city: "Ontario",          state: "California",     stateAbbr: "CA" },
  { city: "Oxnard",           state: "California",     stateAbbr: "CA" },
  { city: "Salinas",          state: "California",     stateAbbr: "CA" },
  { city: "Escondido",        state: "California",     stateAbbr: "CA" },
  { city: "Pomona",           state: "California",     stateAbbr: "CA" },
  { city: "Hayward",          state: "California",     stateAbbr: "CA" },
  { city: "Torrance",         state: "California",     stateAbbr: "CA" },
  { city: "Pasadena",         state: "California",     stateAbbr: "CA" },
  // Georgia
  { city: "Sandy Springs",    state: "Georgia",        stateAbbr: "GA" },
  { city: "Roswell",          state: "Georgia",        stateAbbr: "GA" },
  { city: "Macon",            state: "Georgia",        stateAbbr: "GA" },
  { city: "Warner Robins",    state: "Georgia",        stateAbbr: "GA" },
  // Tennessee
  { city: "Clarksville",      state: "Tennessee",      stateAbbr: "TN" },
  { city: "Jackson",          state: "Tennessee",      stateAbbr: "TN" },
  // North Carolina
  { city: "Asheville",        state: "North Carolina", stateAbbr: "NC" },
  { city: "Gastonia",         state: "North Carolina", stateAbbr: "NC" },
  { city: "Chapel Hill",      state: "North Carolina", stateAbbr: "NC" },
  // Virginia
  { city: "Roanoke",          state: "Virginia",       stateAbbr: "VA" },
  { city: "Suffolk",          state: "Virginia",       stateAbbr: "VA" },
  // Maryland
  { city: "Frederick",        state: "Maryland",       stateAbbr: "MD" },
  { city: "Columbia",         state: "Maryland",       stateAbbr: "MD" },
  // Connecticut
  { city: "Stamford",         state: "Connecticut",    stateAbbr: "CT" },
  { city: "Norwalk",          state: "Connecticut",    stateAbbr: "CT" },
  // New Jersey
  { city: "Trenton",          state: "New Jersey",     stateAbbr: "NJ" },
  { city: "Edison",           state: "New Jersey",     stateAbbr: "NJ" },
  { city: "Woodbridge",       state: "New Jersey",     stateAbbr: "NJ" },
  // Pennsylvania
  { city: "Scranton",         state: "Pennsylvania",   stateAbbr: "PA" },
  { city: "Lancaster",        state: "Pennsylvania",   stateAbbr: "PA" },
  { city: "Reading",          state: "Pennsylvania",   stateAbbr: "PA" },
  // Arizona
  { city: "Tempe",            state: "Arizona",        stateAbbr: "AZ" },
  { city: "Peoria",           state: "Arizona",        stateAbbr: "AZ" },
  // Ohio
  { city: "Canton",           state: "Ohio",           stateAbbr: "OH" },
  { city: "Lorain",           state: "Ohio",           stateAbbr: "OH" },
  // Michigan
  { city: "Flint",            state: "Michigan",       stateAbbr: "MI" },
  { city: "Clinton Township", state: "Michigan",       stateAbbr: "MI" },
  { city: "Westland",         state: "Michigan",       stateAbbr: "MI" },
  // Illinois
  { city: "Peoria",           state: "Illinois",       stateAbbr: "IL" },
  { city: "Elgin",            state: "Illinois",       stateAbbr: "IL" },
  // South Carolina
  { city: "Rock Hill",        state: "South Carolina", stateAbbr: "SC" },
  // Missouri
  { city: "Columbia",         state: "Missouri",       stateAbbr: "MO" },
  { city: "Lee's Summit",     state: "Missouri",       stateAbbr: "MO" },
  // Iowa
  { city: "Cedar Rapids",     state: "Iowa",           stateAbbr: "IA" },
  { city: "Davenport",        state: "Iowa",           stateAbbr: "IA" },
  // Nebraska
  { city: "Bellevue",         state: "Nebraska",       stateAbbr: "NE" },
  // Hawaii
  { city: "Honolulu",         state: "Hawaii",         stateAbbr: "HI" },
  // Montana
  { city: "Missoula",         state: "Montana",        stateAbbr: "MT" },
  // North Dakota
  { city: "Bismarck",         state: "North Dakota",   stateAbbr: "ND" },
  // South Dakota
  { city: "Rapid City",       state: "South Dakota",   stateAbbr: "SD" },
  // New Mexico
  { city: "Las Cruces",       state: "New Mexico",     stateAbbr: "NM" },
  // Delaware
  { city: "Wilmington",       state: "Delaware",       stateAbbr: "DE" },
  { city: "Dover",            state: "Delaware",       stateAbbr: "DE" },
  // Texas — suburbs & mid-size cities
  { city: "Sugar Land",       state: "Texas",          stateAbbr: "TX" },
  { city: "The Woodlands",    state: "Texas",          stateAbbr: "TX" },
  { city: "Pearland",         state: "Texas",          stateAbbr: "TX" },
  { city: "League City",      state: "Texas",          stateAbbr: "TX" },
  { city: "Round Rock",       state: "Texas",          stateAbbr: "TX" },
  { city: "Cedar Park",       state: "Texas",          stateAbbr: "TX" },
  { city: "Allen",            state: "Texas",          stateAbbr: "TX" },
  { city: "Richardson",       state: "Texas",          stateAbbr: "TX" },
  { city: "Lewisville",       state: "Texas",          stateAbbr: "TX" },
  { city: "Carrollton",       state: "Texas",          stateAbbr: "TX" },
  { city: "Grand Prairie",    state: "Texas",          stateAbbr: "TX" },
  { city: "Denton",           state: "Texas",          stateAbbr: "TX" },
  { city: "Tyler",            state: "Texas",          stateAbbr: "TX" },
  { city: "Beaumont",         state: "Texas",          stateAbbr: "TX" },
  { city: "Abilene",          state: "Texas",          stateAbbr: "TX" },
  { city: "Odessa",           state: "Texas",          stateAbbr: "TX" },
  { city: "Longview",         state: "Texas",          stateAbbr: "TX" },
  { city: "Edinburg",         state: "Texas",          stateAbbr: "TX" },
  // New York — suburbs & upstate
  { city: "White Plains",     state: "New York",       stateAbbr: "NY" },
  { city: "New Rochelle",     state: "New York",       stateAbbr: "NY" },
  { city: "Mount Vernon",     state: "New York",       stateAbbr: "NY" },
  { city: "Hempstead",        state: "New York",       stateAbbr: "NY" },
  { city: "Schenectady",      state: "New York",       stateAbbr: "NY" },
  { city: "Binghamton",       state: "New York",       stateAbbr: "NY" },
  { city: "Poughkeepsie",     state: "New York",       stateAbbr: "NY" },
  { city: "Utica",            state: "New York",       stateAbbr: "NY" },
  { city: "Freeport",         state: "New York",       stateAbbr: "NY" },
  { city: "Niagara Falls",    state: "New York",       stateAbbr: "NY" },
  { city: "Troy",             state: "New York",       stateAbbr: "NY" },
  { city: "Spring Valley",    state: "New York",       stateAbbr: "NY" },
  // New Jersey — suburbs & mid-size cities
  { city: "Camden",           state: "New Jersey",     stateAbbr: "NJ" },
  { city: "Clifton",          state: "New Jersey",     stateAbbr: "NJ" },
  { city: "Toms River",       state: "New Jersey",     stateAbbr: "NJ" },
  { city: "Hamilton",         state: "New Jersey",     stateAbbr: "NJ" },
  { city: "Cherry Hill",      state: "New Jersey",     stateAbbr: "NJ" },
  { city: "Union City",       state: "New Jersey",     stateAbbr: "NJ" },
  { city: "Bayonne",          state: "New Jersey",     stateAbbr: "NJ" },
  { city: "East Orange",      state: "New Jersey",     stateAbbr: "NJ" },
  { city: "Hackensack",       state: "New Jersey",     stateAbbr: "NJ" },
  { city: "Parsippany",       state: "New Jersey",     stateAbbr: "NJ" },
  { city: "Vineland",         state: "New Jersey",     stateAbbr: "NJ" },
  { city: "Brick",            state: "New Jersey",     stateAbbr: "NJ" },
  // Pennsylvania — suburbs & regional cities
  { city: "Bethlehem",        state: "Pennsylvania",   stateAbbr: "PA" },
  { city: "Harrisburg",       state: "Pennsylvania",   stateAbbr: "PA" },
  { city: "Upper Darby",      state: "Pennsylvania",   stateAbbr: "PA" },
  { city: "Wilkes-Barre",     state: "Pennsylvania",   stateAbbr: "PA" },
  { city: "York",             state: "Pennsylvania",   stateAbbr: "PA" },
  { city: "Easton",           state: "Pennsylvania",   stateAbbr: "PA" },
  { city: "Norristown",       state: "Pennsylvania",   stateAbbr: "PA" },
  { city: "Chester",          state: "Pennsylvania",   stateAbbr: "PA" },
  { city: "Altoona",          state: "Pennsylvania",   stateAbbr: "PA" },
  { city: "State College",    state: "Pennsylvania",   stateAbbr: "PA" },
  // Illinois — Chicago suburbs & downstate
  { city: "Waukegan",         state: "Illinois",       stateAbbr: "IL" },
  { city: "Cicero",           state: "Illinois",       stateAbbr: "IL" },
  { city: "Champaign",        state: "Illinois",       stateAbbr: "IL" },
  { city: "Bloomington",      state: "Illinois",       stateAbbr: "IL" },
  { city: "Decatur",          state: "Illinois",       stateAbbr: "IL" },
  { city: "Evanston",         state: "Illinois",       stateAbbr: "IL" },
  { city: "Schaumburg",       state: "Illinois",       stateAbbr: "IL" },
  { city: "Bolingbrook",      state: "Illinois",       stateAbbr: "IL" },
  { city: "Palatine",         state: "Illinois",       stateAbbr: "IL" },
  { city: "Skokie",           state: "Illinois",       stateAbbr: "IL" },
  { city: "Des Plaines",      state: "Illinois",       stateAbbr: "IL" },
  { city: "Orland Park",      state: "Illinois",       stateAbbr: "IL" },
  // Ohio — Cleveland/Columbus/Dayton suburbs & regional cities
  { city: "Parma",            state: "Ohio",           stateAbbr: "OH" },
  { city: "Kettering",        state: "Ohio",           stateAbbr: "OH" },
  { city: "Hamilton",         state: "Ohio",           stateAbbr: "OH" },
  { city: "Springfield",      state: "Ohio",           stateAbbr: "OH" },
  { city: "Elyria",           state: "Ohio",           stateAbbr: "OH" },
  { city: "Lakewood",         state: "Ohio",           stateAbbr: "OH" },
  { city: "Cuyahoga Falls",   state: "Ohio",           stateAbbr: "OH" },
  { city: "Middletown",       state: "Ohio",           stateAbbr: "OH" },
  { city: "Mansfield",        state: "Ohio",           stateAbbr: "OH" },
  { city: "Newark",           state: "Ohio",           stateAbbr: "OH" },
  { city: "Mentor",           state: "Ohio",           stateAbbr: "OH" },
  { city: "Dublin",           state: "Ohio",           stateAbbr: "OH" },
  // Florida — suburbs & regional cities
  { city: "Kissimmee",        state: "Florida",        stateAbbr: "FL" },
  { city: "Port St. Lucie",   state: "Florida",        stateAbbr: "FL" },
  { city: "Daytona Beach",    state: "Florida",        stateAbbr: "FL" },
  { city: "Palm Bay",         state: "Florida",        stateAbbr: "FL" },
  { city: "Melbourne",        state: "Florida",        stateAbbr: "FL" },
  { city: "Pensacola",        state: "Florida",        stateAbbr: "FL" },
  { city: "Spring Hill",      state: "Florida",        stateAbbr: "FL" },
  { city: "Deerfield Beach",  state: "Florida",        stateAbbr: "FL" },
  { city: "Boynton Beach",    state: "Florida",        stateAbbr: "FL" },
  { city: "Coral Springs",    state: "Florida",        stateAbbr: "FL" },
  { city: "Plantation",       state: "Florida",        stateAbbr: "FL" },
  { city: "Homestead",        state: "Florida",        stateAbbr: "FL" },
  { city: "Coconut Creek",    state: "Florida",        stateAbbr: "FL" },
  { city: "Davie",            state: "Florida",        stateAbbr: "FL" },
  { city: "Weston",           state: "Florida",        stateAbbr: "FL" },
  { city: "Margate",          state: "Florida",        stateAbbr: "FL" },
  { city: "Sanford",          state: "Florida",        stateAbbr: "FL" },
  { city: "Palm Coast",       state: "Florida",        stateAbbr: "FL" },
  // California — suburbs & inland cities
  { city: "Murrieta",         state: "California",     stateAbbr: "CA" },
  { city: "Temecula",         state: "California",     stateAbbr: "CA" },
  { city: "Corona",           state: "California",     stateAbbr: "CA" },
  { city: "Elk Grove",        state: "California",     stateAbbr: "CA" },
  { city: "Thousand Oaks",    state: "California",     stateAbbr: "CA" },
  { city: "Visalia",          state: "California",     stateAbbr: "CA" },
  { city: "Victorville",      state: "California",     stateAbbr: "CA" },
  { city: "Garden Grove",     state: "California",     stateAbbr: "CA" },
  { city: "Fullerton",        state: "California",     stateAbbr: "CA" },
  { city: "Lancaster",        state: "California",     stateAbbr: "CA" },
  { city: "El Cajon",         state: "California",     stateAbbr: "CA" },
  { city: "Concord",          state: "California",     stateAbbr: "CA" },
  { city: "Burbank",          state: "California",     stateAbbr: "CA" },
  { city: "Norwalk",          state: "California",     stateAbbr: "CA" },
  { city: "Inglewood",        state: "California",     stateAbbr: "CA" },
  { city: "Santa Clarita",    state: "California",     stateAbbr: "CA" },
  { city: "Simi Valley",      state: "California",     stateAbbr: "CA" },
  // Georgia — Atlanta suburbs & regional cities
  { city: "Smyrna",           state: "Georgia",        stateAbbr: "GA" },
  { city: "Peachtree City",   state: "Georgia",        stateAbbr: "GA" },
  { city: "Athens",           state: "Georgia",        stateAbbr: "GA" },
  { city: "Gainesville",      state: "Georgia",        stateAbbr: "GA" },
  { city: "Lawrenceville",    state: "Georgia",        stateAbbr: "GA" },
  { city: "Kennesaw",         state: "Georgia",        stateAbbr: "GA" },
  { city: "Woodstock",        state: "Georgia",        stateAbbr: "GA" },
  { city: "Duluth",           state: "Georgia",        stateAbbr: "GA" },
  { city: "Douglasville",     state: "Georgia",        stateAbbr: "GA" },
  { city: "Valdosta",         state: "Georgia",        stateAbbr: "GA" },
  // Virginia — DC suburbs & regional cities
  { city: "Fredericksburg",   state: "Virginia",       stateAbbr: "VA" },
  { city: "Lynchburg",        state: "Virginia",       stateAbbr: "VA" },
  { city: "Harrisonburg",     state: "Virginia",       stateAbbr: "VA" },
  { city: "Charlottesville",  state: "Virginia",       stateAbbr: "VA" },
  { city: "Manassas",         state: "Virginia",       stateAbbr: "VA" },
  { city: "Leesburg",         state: "Virginia",       stateAbbr: "VA" },
  { city: "Woodbridge",       state: "Virginia",       stateAbbr: "VA" },
  { city: "Herndon",          state: "Virginia",       stateAbbr: "VA" },
  // Maryland — Baltimore/DC suburbs
  { city: "Annapolis",        state: "Maryland",       stateAbbr: "MD" },
  { city: "Bowie",            state: "Maryland",       stateAbbr: "MD" },
  { city: "Hagerstown",       state: "Maryland",       stateAbbr: "MD" },
  { city: "Towson",           state: "Maryland",       stateAbbr: "MD" },
  { city: "Waldorf",          state: "Maryland",       stateAbbr: "MD" },
  { city: "Laurel",           state: "Maryland",       stateAbbr: "MD" },
  { city: "Ellicott City",    state: "Maryland",       stateAbbr: "MD" },
  { city: "Glen Burnie",      state: "Maryland",       stateAbbr: "MD" },
  // Washington — Seattle suburbs & eastern WA
  { city: "Renton",           state: "Washington",     stateAbbr: "WA" },
  { city: "Kent",             state: "Washington",     stateAbbr: "WA" },
  { city: "Yakima",           state: "Washington",     stateAbbr: "WA" },
  { city: "Bellingham",       state: "Washington",     stateAbbr: "WA" },
  { city: "Redmond",          state: "Washington",     stateAbbr: "WA" },
  { city: "Federal Way",      state: "Washington",     stateAbbr: "WA" },
  { city: "Auburn",           state: "Washington",     stateAbbr: "WA" },
  { city: "Lakewood",         state: "Washington",     stateAbbr: "WA" },
  // Tennessee — Nashville/Knoxville suburbs
  { city: "Brentwood",        state: "Tennessee",      stateAbbr: "TN" },
  { city: "Hendersonville",   state: "Tennessee",      stateAbbr: "TN" },
  { city: "Johnson City",     state: "Tennessee",      stateAbbr: "TN" },
  { city: "Kingsport",        state: "Tennessee",      stateAbbr: "TN" },
  { city: "Smyrna",           state: "Tennessee",      stateAbbr: "TN" },
  { city: "Collierville",     state: "Tennessee",      stateAbbr: "TN" },
  { city: "Spring Hill",      state: "Tennessee",      stateAbbr: "TN" },
  { city: "Gallatin",         state: "Tennessee",      stateAbbr: "TN" },
  // Arizona — Phoenix suburbs & regional cities
  { city: "Avondale",         state: "Arizona",        stateAbbr: "AZ" },
  { city: "Goodyear",         state: "Arizona",        stateAbbr: "AZ" },
  { city: "Buckeye",          state: "Arizona",        stateAbbr: "AZ" },
  { city: "Yuma",             state: "Arizona",        stateAbbr: "AZ" },
  { city: "Flagstaff",        state: "Arizona",        stateAbbr: "AZ" },
  { city: "Maricopa",         state: "Arizona",        stateAbbr: "AZ" },
  { city: "Casa Grande",      state: "Arizona",        stateAbbr: "AZ" },
  { city: "Queen Creek",      state: "Arizona",        stateAbbr: "AZ" },
  // Colorado — Denver suburbs
  { city: "Lakewood",         state: "Colorado",       stateAbbr: "CO" },
  { city: "Arvada",           state: "Colorado",       stateAbbr: "CO" },
  { city: "Westminster",      state: "Colorado",       stateAbbr: "CO" },
  { city: "Centennial",       state: "Colorado",       stateAbbr: "CO" },
  { city: "Thornton",         state: "Colorado",       stateAbbr: "CO" },
  { city: "Englewood",        state: "Colorado",       stateAbbr: "CO" },
  { city: "Pueblo",           state: "Colorado",       stateAbbr: "CO" },
  // Minnesota — Twin Cities suburbs & regional
  { city: "Eden Prairie",     state: "Minnesota",      stateAbbr: "MN" },
  { city: "Burnsville",       state: "Minnesota",      stateAbbr: "MN" },
  { city: "Plymouth",         state: "Minnesota",      stateAbbr: "MN" },
  { city: "Brooklyn Park",    state: "Minnesota",      stateAbbr: "MN" },
  { city: "Maple Grove",      state: "Minnesota",      stateAbbr: "MN" },
  { city: "Coon Rapids",      state: "Minnesota",      stateAbbr: "MN" },
  { city: "Lakeville",        state: "Minnesota",      stateAbbr: "MN" },
  { city: "Eagan",            state: "Minnesota",      stateAbbr: "MN" },
  // Wisconsin — Milwaukee suburbs & regional
  { city: "Waukesha",         state: "Wisconsin",      stateAbbr: "WI" },
  { city: "Appleton",         state: "Wisconsin",      stateAbbr: "WI" },
  { city: "Oshkosh",          state: "Wisconsin",      stateAbbr: "WI" },
  { city: "Eau Claire",       state: "Wisconsin",      stateAbbr: "WI" },
  { city: "Janesville",       state: "Wisconsin",      stateAbbr: "WI" },
  { city: "West Allis",       state: "Wisconsin",      stateAbbr: "WI" },
  { city: "La Crosse",        state: "Wisconsin",      stateAbbr: "WI" },
  // Missouri — KC/STL suburbs & regional
  { city: "St. Charles",      state: "Missouri",       stateAbbr: "MO" },
  { city: "O'Fallon",         state: "Missouri",       stateAbbr: "MO" },
  { city: "Florissant",       state: "Missouri",       stateAbbr: "MO" },
  { city: "Chesterfield",     state: "Missouri",       stateAbbr: "MO" },
  { city: "Jefferson City",   state: "Missouri",       stateAbbr: "MO" },
  { city: "Joplin",           state: "Missouri",       stateAbbr: "MO" },
  { city: "Ballwin",          state: "Missouri",       stateAbbr: "MO" },
  // Indiana — Indianapolis suburbs & regional
  { city: "Carmel",           state: "Indiana",        stateAbbr: "IN" },
  { city: "Fishers",          state: "Indiana",        stateAbbr: "IN" },
  { city: "Muncie",           state: "Indiana",        stateAbbr: "IN" },
  { city: "Anderson",         state: "Indiana",        stateAbbr: "IN" },
  { city: "Lafayette",        state: "Indiana",        stateAbbr: "IN" },
  { city: "Terre Haute",      state: "Indiana",        stateAbbr: "IN" },
  { city: "Bloomington",      state: "Indiana",        stateAbbr: "IN" },
  // Kentucky — Louisville area & regional
  { city: "Owensboro",        state: "Kentucky",       stateAbbr: "KY" },
  { city: "Frankfort",        state: "Kentucky",       stateAbbr: "KY" },
  { city: "Elizabethtown",    state: "Kentucky",       stateAbbr: "KY" },
  { city: "Paducah",          state: "Kentucky",       stateAbbr: "KY" },
  { city: "Richmond",         state: "Kentucky",       stateAbbr: "KY" },
  { city: "Florence",         state: "Kentucky",       stateAbbr: "KY" },
  // Oregon — Portland suburbs & regional
  { city: "Hillsboro",        state: "Oregon",         stateAbbr: "OR" },
  { city: "Gresham",          state: "Oregon",         stateAbbr: "OR" },
  { city: "Medford",          state: "Oregon",         stateAbbr: "OR" },
  { city: "Bend",             state: "Oregon",         stateAbbr: "OR" },
  { city: "Corvallis",        state: "Oregon",         stateAbbr: "OR" },
  { city: "Tigard",           state: "Oregon",         stateAbbr: "OR" },
  // Nevada — Greater Las Vegas & regional
  { city: "Carson City",      state: "Nevada",         stateAbbr: "NV" },
  { city: "Pahrump",          state: "Nevada",         stateAbbr: "NV" },
  { city: "Spring Valley",    state: "Nevada",         stateAbbr: "NV" },
  { city: "Summerlin",        state: "Nevada",         stateAbbr: "NV" },
  { city: "Boulder City",     state: "Nevada",         stateAbbr: "NV" },
  // Oklahoma — OKC/Tulsa suburbs
  { city: "Lawton",           state: "Oklahoma",       stateAbbr: "OK" },
  { city: "Moore",            state: "Oklahoma",       stateAbbr: "OK" },
  { city: "Midwest City",     state: "Oklahoma",       stateAbbr: "OK" },
  { city: "Owasso",           state: "Oklahoma",       stateAbbr: "OK" },
  { city: "Yukon",            state: "Oklahoma",       stateAbbr: "OK" },
  { city: "Bixby",            state: "Oklahoma",       stateAbbr: "OK" },
  // North Carolina — Charlotte/Raleigh suburbs & regional
  { city: "Apex",             state: "North Carolina", stateAbbr: "NC" },
  { city: "Huntersville",     state: "North Carolina", stateAbbr: "NC" },
  { city: "Matthews",         state: "North Carolina", stateAbbr: "NC" },
  { city: "Holly Springs",    state: "North Carolina", stateAbbr: "NC" },
  { city: "Mooresville",      state: "North Carolina", stateAbbr: "NC" },
  { city: "Burlington",       state: "North Carolina", stateAbbr: "NC" },
  { city: "Wilson",           state: "North Carolina", stateAbbr: "NC" },
  { city: "Greenville",       state: "North Carolina", stateAbbr: "NC" },
  { city: "Rocky Mount",      state: "North Carolina", stateAbbr: "NC" },
  { city: "Jacksonville",     state: "North Carolina", stateAbbr: "NC" },
  // South Carolina — coastal & upstate additions
  { city: "Hilton Head",      state: "South Carolina", stateAbbr: "SC" },
  { city: "Anderson",         state: "South Carolina", stateAbbr: "SC" },
  { city: "Florence",         state: "South Carolina", stateAbbr: "SC" },
  { city: "Goose Creek",      state: "South Carolina", stateAbbr: "SC" },
  { city: "Aiken",            state: "South Carolina", stateAbbr: "SC" },
  // Louisiana — New Orleans area & regional
  { city: "Kenner",           state: "Louisiana",      stateAbbr: "LA" },
  { city: "Slidell",          state: "Louisiana",      stateAbbr: "LA" },
  { city: "Lake Charles",     state: "Louisiana",      stateAbbr: "LA" },
  { city: "Monroe",           state: "Louisiana",      stateAbbr: "LA" },
  { city: "Houma",            state: "Louisiana",      stateAbbr: "LA" },
  // Utah — Wasatch Front additions
  { city: "Ogden",            state: "Utah",           stateAbbr: "UT" },
  { city: "Layton",           state: "Utah",           stateAbbr: "UT" },
  { city: "St. George",       state: "Utah",           stateAbbr: "UT" },
  { city: "Murray",           state: "Utah",           stateAbbr: "UT" },
  { city: "Taylorsville",     state: "Utah",           stateAbbr: "UT" },
  { city: "Millcreek",        state: "Utah",           stateAbbr: "UT" },
  // Michigan — Detroit suburbs
  { city: "Troy",             state: "Michigan",       stateAbbr: "MI" },
  { city: "Novi",             state: "Michigan",       stateAbbr: "MI" },
  { city: "Farmington Hills", state: "Michigan",       stateAbbr: "MI" },
  { city: "Southfield",       state: "Michigan",       stateAbbr: "MI" },
  { city: "Royal Oak",        state: "Michigan",       stateAbbr: "MI" },
  { city: "Dearborn Heights", state: "Michigan",       stateAbbr: "MI" },
  { city: "Taylor",           state: "Michigan",       stateAbbr: "MI" },
  { city: "St. Clair Shores", state: "Michigan",       stateAbbr: "MI" },
  { city: "Rochester Hills",  state: "Michigan",       stateAbbr: "MI" },
  // Kansas — regional cities
  { city: "Topeka",           state: "Kansas",         stateAbbr: "KS" },
  { city: "Lawrence",         state: "Kansas",         stateAbbr: "KS" },
  { city: "Salina",           state: "Kansas",         stateAbbr: "KS" },
  { city: "Manhattan",        state: "Kansas",         stateAbbr: "KS" },
  // Iowa — regional cities
  { city: "Sioux City",       state: "Iowa",           stateAbbr: "IA" },
  { city: "Waterloo",         state: "Iowa",           stateAbbr: "IA" },
  { city: "Iowa City",        state: "Iowa",           stateAbbr: "IA" },
  { city: "Ames",             state: "Iowa",           stateAbbr: "IA" },
  // Mississippi — regional cities
  { city: "Gulfport",         state: "Mississippi",    stateAbbr: "MS" },
  { city: "Hattiesburg",      state: "Mississippi",    stateAbbr: "MS" },
  { city: "Biloxi",           state: "Mississippi",    stateAbbr: "MS" },
  { city: "Tupelo",           state: "Mississippi",    stateAbbr: "MS" },
  // Nebraska — regional cities
  { city: "Grand Island",     state: "Nebraska",       stateAbbr: "NE" },
  { city: "Kearney",          state: "Nebraska",       stateAbbr: "NE" },
  { city: "Hastings",         state: "Nebraska",       stateAbbr: "NE" },
  // New Mexico — regional cities
  { city: "Santa Fe",         state: "New Mexico",     stateAbbr: "NM" },
  { city: "Roswell",          state: "New Mexico",     stateAbbr: "NM" },
  // New Hampshire — regional cities
  { city: "Nashua",           state: "New Hampshire",  stateAbbr: "NH" },
  { city: "Dover",            state: "New Hampshire",  stateAbbr: "NH" },
  { city: "Rochester",        state: "New Hampshire",  stateAbbr: "NH" },
  { city: "Derry",            state: "New Hampshire",  stateAbbr: "NH" },
  // Maine — regional cities
  { city: "Lewiston",         state: "Maine",          stateAbbr: "ME" },
  { city: "Bangor",           state: "Maine",          stateAbbr: "ME" },
  { city: "South Portland",   state: "Maine",          stateAbbr: "ME" },
  // Vermont — regional cities
  { city: "Rutland",          state: "Vermont",        stateAbbr: "VT" },
  { city: "South Burlington", state: "Vermont",        stateAbbr: "VT" },
  // West Virginia — regional cities
  { city: "Huntington",       state: "West Virginia",  stateAbbr: "WV" },
  { city: "Morgantown",       state: "West Virginia",  stateAbbr: "WV" },
  { city: "Parkersburg",      state: "West Virginia",  stateAbbr: "WV" },
  // Wyoming — regional cities
  { city: "Casper",           state: "Wyoming",        stateAbbr: "WY" },
  { city: "Laramie",          state: "Wyoming",        stateAbbr: "WY" },
  // Montana — regional cities
  { city: "Great Falls",      state: "Montana",        stateAbbr: "MT" },
  { city: "Helena",           state: "Montana",        stateAbbr: "MT" },
  // North Dakota — regional cities
  { city: "Grand Forks",      state: "North Dakota",   stateAbbr: "ND" },
  { city: "Minot",            state: "North Dakota",   stateAbbr: "ND" },
  // South Dakota — regional cities
  { city: "Aberdeen",         state: "South Dakota",   stateAbbr: "SD" },
  // Arkansas — regional cities
  { city: "Jonesboro",        state: "Arkansas",       stateAbbr: "AR" },
  { city: "Pine Bluff",       state: "Arkansas",       stateAbbr: "AR" },
  { city: "Hot Springs",      state: "Arkansas",       stateAbbr: "AR" },
  // Alabama — regional cities
  { city: "Auburn",           state: "Alabama",        stateAbbr: "AL" },
  { city: "Tuscaloosa",       state: "Alabama",        stateAbbr: "AL" },
  { city: "Decatur",          state: "Alabama",        stateAbbr: "AL" },
  { city: "Dothan",           state: "Alabama",        stateAbbr: "AL" },
  // Idaho — regional cities
  { city: "Twin Falls",       state: "Idaho",          stateAbbr: "ID" },
  { city: "Pocatello",        state: "Idaho",          stateAbbr: "ID" },
  { city: "Idaho Falls",      state: "Idaho",          stateAbbr: "ID" },
  // ── DB-backed expansion — Sep 2026 ─────────────────────────────────────────
  // Alabama
  { city: "Alabaster",             state: "Alabama",               stateAbbr: "AL" },
  { city: "Athens",                state: "Alabama",               stateAbbr: "AL" },
  { city: "Bessemer",              state: "Alabama",               stateAbbr: "AL" },
  { city: "Daphne",                state: "Alabama",               stateAbbr: "AL" },
  { city: "Fairhope",              state: "Alabama",               stateAbbr: "AL" },
  { city: "Foley",                 state: "Alabama",               stateAbbr: "AL" },
  { city: "Harvest",               state: "Alabama",               stateAbbr: "AL" },
  { city: "Millbrook",             state: "Alabama",               stateAbbr: "AL" },
  { city: "Opelika",               state: "Alabama",               stateAbbr: "AL" },
  { city: "Pelham",                state: "Alabama",               stateAbbr: "AL" },
  { city: "Phenix City",           state: "Alabama",               stateAbbr: "AL" },
  { city: "Prattville",            state: "Alabama",               stateAbbr: "AL" },
  { city: "Spanish Fort",          state: "Alabama",               stateAbbr: "AL" },
  { city: "Theodore",              state: "Alabama",               stateAbbr: "AL" },
  { city: "Trussville",            state: "Alabama",               stateAbbr: "AL" },
  { city: "Valley",                state: "Alabama",               stateAbbr: "AL" },
  { city: "Wetumpka",              state: "Alabama",               stateAbbr: "AL" },
  // Arkansas
  { city: "Benton",                state: "Arkansas",              stateAbbr: "AR" },
  { city: "Cabot",                 state: "Arkansas",              stateAbbr: "AR" },
  { city: "Conway",                state: "Arkansas",              stateAbbr: "AR" },
  { city: "Sherwood",              state: "Arkansas",              stateAbbr: "AR" },
  // California
  { city: "Antioch",               state: "California",            stateAbbr: "CA" },
  { city: "Brentwood",             state: "California",            stateAbbr: "CA" },
  { city: "Carlsbad",              state: "California",            stateAbbr: "CA" },
  { city: "Citrus Heights",        state: "California",            stateAbbr: "CA" },
  { city: "Costa Mesa",            state: "California",            stateAbbr: "CA" },
  { city: "Fair Oaks",             state: "California",            stateAbbr: "CA" },
  { city: "Fairfield",             state: "California",            stateAbbr: "CA" },
  { city: "Folsom",                state: "California",            stateAbbr: "CA" },
  { city: "Highland",              state: "California",            stateAbbr: "CA" },
  { city: "La Mesa",               state: "California",            stateAbbr: "CA" },
  { city: "Lake Elsinore",         state: "California",            stateAbbr: "CA" },
  { city: "Lake Forest",           state: "California",            stateAbbr: "CA" },
  { city: "Lakeside",              state: "California",            stateAbbr: "CA" },
  { city: "Livermore",             state: "California",            stateAbbr: "CA" },
  { city: "Lodi",                  state: "California",            stateAbbr: "CA" },
  { city: "Manteca",               state: "California",            stateAbbr: "CA" },
  { city: "Menifee",               state: "California",            stateAbbr: "CA" },
  { city: "Merced",                state: "California",            stateAbbr: "CA" },
  { city: "Mission Viejo",         state: "California",            stateAbbr: "CA" },
  { city: "Newport Beach",         state: "California",            stateAbbr: "CA" },
  { city: "North Hollywood",       state: "California",            stateAbbr: "CA" },
  { city: "Oakley",                state: "California",            stateAbbr: "CA" },
  { city: "Oceanside",             state: "California",            stateAbbr: "CA" },
  { city: "Orange",                state: "California",            stateAbbr: "CA" },
  { city: "Rancho Cordova",        state: "California",            stateAbbr: "CA" },
  { city: "Redlands",              state: "California",            stateAbbr: "CA" },
  { city: "Redwood City",          state: "California",            stateAbbr: "CA" },
  { city: "Rialto",                state: "California",            stateAbbr: "CA" },
  { city: "San Marcos",            state: "California",            stateAbbr: "CA" },
  { city: "San Ramon",             state: "California",            stateAbbr: "CA" },
  { city: "Santa Clara",           state: "California",            stateAbbr: "CA" },
  { city: "Santa Cruz",            state: "California",            stateAbbr: "CA" },
  { city: "Spring Valley",         state: "California",            stateAbbr: "CA" },
  { city: "Tracy",                 state: "California",            stateAbbr: "CA" },
  { city: "Truckee",               state: "California",            stateAbbr: "CA" },
  { city: "Turlock",               state: "California",            stateAbbr: "CA" },
  { city: "Tustin",                state: "California",            stateAbbr: "CA" },
  { city: "Vacaville",             state: "California",            stateAbbr: "CA" },
  { city: "Vista",                 state: "California",            stateAbbr: "CA" },
  { city: "Westminster",           state: "California",            stateAbbr: "CA" },
  { city: "Yucaipa",               state: "California",            stateAbbr: "CA" },
  // Colorado
  { city: "Brighton",              state: "Colorado",              stateAbbr: "CO" },
  { city: "Broomfield",            state: "Colorado",              stateAbbr: "CO" },
  { city: "Greeley",               state: "Colorado",              stateAbbr: "CO" },
  { city: "Longmont",              state: "Colorado",              stateAbbr: "CO" },
  { city: "Loveland",              state: "Colorado",              stateAbbr: "CO" },
  { city: "Parker",                state: "Colorado",              stateAbbr: "CO" },
  { city: "Windsor",               state: "Colorado",              stateAbbr: "CO" },
  // Connecticut
  { city: "East Hartford",         state: "Connecticut",           stateAbbr: "CT" },
  { city: "East Haven",            state: "Connecticut",           stateAbbr: "CT" },
  { city: "Fairfield",             state: "Connecticut",           stateAbbr: "CT" },
  { city: "Groton",                state: "Connecticut",           stateAbbr: "CT" },
  { city: "Manchester",            state: "Connecticut",           stateAbbr: "CT" },
  { city: "Newington",             state: "Connecticut",           stateAbbr: "CT" },
  { city: "Southington",           state: "Connecticut",           stateAbbr: "CT" },
  { city: "Wallingford",           state: "Connecticut",           stateAbbr: "CT" },
  { city: "Watertown",             state: "Connecticut",           stateAbbr: "CT" },
  { city: "West Haven",            state: "Connecticut",           stateAbbr: "CT" },
  // Florida
  { city: "Doral",                 state: "Florida",               stateAbbr: "FL" },
  { city: "Dunedin",               state: "Florida",               stateAbbr: "FL" },
  { city: "Largo",                 state: "Florida",               stateAbbr: "FL" },
  { city: "Lehigh Acres",          state: "Florida",               stateAbbr: "FL" },
  { city: "Miami Gardens",         state: "Florida",               stateAbbr: "FL" },
  { city: "Middleburg",            state: "Florida",               stateAbbr: "FL" },
  { city: "New Port Richey",       state: "Florida",               stateAbbr: "FL" },
  { city: "North Fort Myers",      state: "Florida",               stateAbbr: "FL" },
  { city: "Oakland Park",          state: "Florida",               stateAbbr: "FL" },
  { city: "Palm Harbor",           state: "Florida",               stateAbbr: "FL" },
  { city: "Parrish",               state: "Florida",               stateAbbr: "FL" },
  { city: "Riverview",             state: "Florida",               stateAbbr: "FL" },
  { city: "Sarasota",              state: "Florida",               stateAbbr: "FL" },
  { city: "Seminole",              state: "Florida",               stateAbbr: "FL" },
  { city: "Tarpon Springs",        state: "Florida",               stateAbbr: "FL" },
  // Georgia
  { city: "Acworth",               state: "Georgia",               stateAbbr: "GA" },
  { city: "Canton",                state: "Georgia",               stateAbbr: "GA" },
  { city: "Cumming",               state: "Georgia",               stateAbbr: "GA" },
  { city: "Dalton",                state: "Georgia",               stateAbbr: "GA" },
  { city: "Evans",                 state: "Georgia",               stateAbbr: "GA" },
  { city: "Grovetown",             state: "Georgia",               stateAbbr: "GA" },
  { city: "Hephzibah",             state: "Georgia",               stateAbbr: "GA" },
  { city: "Martinez",              state: "Georgia",               stateAbbr: "GA" },
  { city: "Norcross",              state: "Georgia",               stateAbbr: "GA" },
  { city: "Pooler",                state: "Georgia",               stateAbbr: "GA" },
  { city: "Powder Springs",        state: "Georgia",               stateAbbr: "GA" },
  { city: "Rincon",                state: "Georgia",               stateAbbr: "GA" },
  { city: "Ringgold",              state: "Georgia",               stateAbbr: "GA" },
  { city: "Rossville",             state: "Georgia",               stateAbbr: "GA" },
  // Iowa
  { city: "Ankeny",                state: "Iowa",                  stateAbbr: "IA" },
  { city: "Council Bluffs",        state: "Iowa",                  stateAbbr: "IA" },
  { city: "Urbandale",             state: "Iowa",                  stateAbbr: "IA" },
  // Idaho
  { city: "Caldwell",              state: "Idaho",                 stateAbbr: "ID" },
  { city: "Hayden",                state: "Idaho",                 stateAbbr: "ID" },
  { city: "Post Falls",            state: "Idaho",                 stateAbbr: "ID" },
  // Illinois
  { city: "Antioch",               state: "Illinois",              stateAbbr: "IL" },
  { city: "Belvidere",             state: "Illinois",              stateAbbr: "IL" },
  { city: "Loves Park",            state: "Illinois",              stateAbbr: "IL" },
  { city: "Northbrook",            state: "Illinois",              stateAbbr: "IL" },
  { city: "Oswego",                state: "Illinois",              stateAbbr: "IL" },
  { city: "Plainfield",            state: "Illinois",              stateAbbr: "IL" },
  { city: "West Chicago",          state: "Illinois",              stateAbbr: "IL" },
  // Indiana
  { city: "Elkhart",               state: "Indiana",               stateAbbr: "IN" },
  { city: "Goshen",                state: "Indiana",               stateAbbr: "IN" },
  { city: "Granger",               state: "Indiana",               stateAbbr: "IN" },
  { city: "Mishawaka",             state: "Indiana",               stateAbbr: "IN" },
  { city: "Newburgh",              state: "Indiana",               stateAbbr: "IN" },
  // Kansas
  { city: "Lenexa",                state: "Kansas",                stateAbbr: "KS" },
  { city: "Shawnee",               state: "Kansas",                stateAbbr: "KS" },
  // Kentucky
  { city: "Franklin",              state: "Kentucky",              stateAbbr: "KY" },
  { city: "Georgetown",            state: "Kentucky",              stateAbbr: "KY" },
  { city: "Henderson",             state: "Kentucky",              stateAbbr: "KY" },
  { city: "Nicholasville",         state: "Kentucky",              stateAbbr: "KY" },
  { city: "Winchester",            state: "Kentucky",              stateAbbr: "KY" },
  // Louisiana
  { city: "Benton",                state: "Louisiana",             stateAbbr: "LA" },
  { city: "Broussard",             state: "Louisiana",             stateAbbr: "LA" },
  { city: "Carencro",              state: "Louisiana",             stateAbbr: "LA" },
  { city: "Denham Springs",        state: "Louisiana",             stateAbbr: "LA" },
  { city: "Harvey",                state: "Louisiana",             stateAbbr: "LA" },
  { city: "Haughton",              state: "Louisiana",             stateAbbr: "LA" },
  { city: "Marrero",               state: "Louisiana",             stateAbbr: "LA" },
  { city: "New Iberia",            state: "Louisiana",             stateAbbr: "LA" },
  { city: "Prairieville",          state: "Louisiana",             stateAbbr: "LA" },
  { city: "Youngsville",           state: "Louisiana",             stateAbbr: "LA" },
  // Massachusetts
  { city: "Andover",               state: "Massachusetts",         stateAbbr: "MA" },
  { city: "Braintree",             state: "Massachusetts",         stateAbbr: "MA" },
  { city: "Canton",                state: "Massachusetts",         stateAbbr: "MA" },
  { city: "Chelmsford",            state: "Massachusetts",         stateAbbr: "MA" },
  { city: "Dartmouth",             state: "Massachusetts",         stateAbbr: "MA" },
  { city: "Marlborough",           state: "Massachusetts",         stateAbbr: "MA" },
  { city: "Milford",               state: "Massachusetts",         stateAbbr: "MA" },
  { city: "Northborough",          state: "Massachusetts",         stateAbbr: "MA" },
  { city: "Stoughton",             state: "Massachusetts",         stateAbbr: "MA" },
  { city: "Tewksbury",             state: "Massachusetts",         stateAbbr: "MA" },
  { city: "Wakefield",             state: "Massachusetts",         stateAbbr: "MA" },
  { city: "West Springfield",      state: "Massachusetts",         stateAbbr: "MA" },
  { city: "Whitman",               state: "Massachusetts",         stateAbbr: "MA" },
  // Maryland
  { city: "Bethesda",              state: "Maryland",              stateAbbr: "MD" },
  { city: "Dundalk",               state: "Maryland",              stateAbbr: "MD" },
  { city: "Germantown",            state: "Maryland",              stateAbbr: "MD" },
  { city: "Westminster",           state: "Maryland",              stateAbbr: "MD" },
  // Michigan
  { city: "Adrian",                state: "Michigan",              stateAbbr: "MI" },
  { city: "Brighton",              state: "Michigan",              stateAbbr: "MI" },
  { city: "Canton",                state: "Michigan",              stateAbbr: "MI" },
  { city: "Holland",               state: "Michigan",              stateAbbr: "MI" },
  { city: "Holt",                  state: "Michigan",              stateAbbr: "MI" },
  { city: "Howell",                state: "Michigan",              stateAbbr: "MI" },
  { city: "Jackson",               state: "Michigan",              stateAbbr: "MI" },
  { city: "Macomb",                state: "Michigan",              stateAbbr: "MI" },
  { city: "Mason",                 state: "Michigan",              stateAbbr: "MI" },
  { city: "Monroe",                state: "Michigan",              stateAbbr: "MI" },
  { city: "Rockford",              state: "Michigan",              stateAbbr: "MI" },
  { city: "Shelby Township",       state: "Michigan",              stateAbbr: "MI" },
  { city: "Waterford Township",    state: "Michigan",              stateAbbr: "MI" },
  { city: "Wyoming",               state: "Michigan",              stateAbbr: "MI" },
  { city: "Ypsilanti",             state: "Michigan",              stateAbbr: "MI" },
  // Minnesota
  { city: "Apple Valley",          state: "Minnesota",             stateAbbr: "MN" },
  { city: "Moorhead",              state: "Minnesota",             stateAbbr: "MN" },
  // Missouri
  { city: "Belton",                state: "Missouri",              stateAbbr: "MO" },
  { city: "Blue Springs",          state: "Missouri",              stateAbbr: "MO" },
  { city: "Fenton",                state: "Missouri",              stateAbbr: "MO" },
  { city: "Nixa",                  state: "Missouri",              stateAbbr: "MO" },
  { city: "Ozark",                 state: "Missouri",              stateAbbr: "MO" },
  { city: "Republic",              state: "Missouri",              stateAbbr: "MO" },
  // Mississippi
  { city: "Clinton",               state: "Mississippi",           stateAbbr: "MS" },
  { city: "Flowood",               state: "Mississippi",           stateAbbr: "MS" },
  { city: "Hernando",              state: "Mississippi",           stateAbbr: "MS" },
  { city: "Horn Lake",             state: "Mississippi",           stateAbbr: "MS" },
  { city: "Olive Branch",          state: "Mississippi",           stateAbbr: "MS" },
  { city: "Pearl",                 state: "Mississippi",           stateAbbr: "MS" },
  { city: "Ridgeland",             state: "Mississippi",           stateAbbr: "MS" },
  // North Carolina
  { city: "Clemmons",              state: "North Carolina",        stateAbbr: "NC" },
  { city: "Garner",                state: "North Carolina",        stateAbbr: "NC" },
  { city: "Hampstead",             state: "North Carolina",        stateAbbr: "NC" },
  { city: "Hope Mills",            state: "North Carolina",        stateAbbr: "NC" },
  { city: "Kernersville",          state: "North Carolina",        stateAbbr: "NC" },
  { city: "Leland",                state: "North Carolina",        stateAbbr: "NC" },
  { city: "Lexington",             state: "North Carolina",        stateAbbr: "NC" },
  { city: "Morrisville",           state: "North Carolina",        stateAbbr: "NC" },
  { city: "Pittsboro",             state: "North Carolina",        stateAbbr: "NC" },
  { city: "Raeford",               state: "North Carolina",        stateAbbr: "NC" },
  { city: "Salisbury",             state: "North Carolina",        stateAbbr: "NC" },
  { city: "Sanford",               state: "North Carolina",        stateAbbr: "NC" },
  { city: "Statesville",           state: "North Carolina",        stateAbbr: "NC" },
  { city: "Thomasville",           state: "North Carolina",        stateAbbr: "NC" },
  { city: "Wake Forest",           state: "North Carolina",        stateAbbr: "NC" },
  // North Dakota
  { city: "West Fargo",            state: "North Dakota",          stateAbbr: "ND" },
  // Nebraska
  { city: "Papillion",             state: "Nebraska",              stateAbbr: "NE" },
  // New Hampshire
  { city: "Salem",                 state: "New Hampshire",         stateAbbr: "NH" },
  // New Jersey
  { city: "Brick Township",        state: "New Jersey",            stateAbbr: "NJ" },
  { city: "Kearny",                state: "New Jersey",            stateAbbr: "NJ" },
  { city: "Wayne",                 state: "New Jersey",            stateAbbr: "NJ" },
  // New York
  { city: "Cheektowaga",           state: "New York",              stateAbbr: "NY" },
  { city: "Greece",                state: "New York",              stateAbbr: "NY" },
  { city: "Liverpool",             state: "New York",              stateAbbr: "NY" },
  { city: "Lockport",              state: "New York",              stateAbbr: "NY" },
  { city: "North Tonawanda",       state: "New York",              stateAbbr: "NY" },
  { city: "Port Chester",          state: "New York",              stateAbbr: "NY" },
  { city: "Queens",                state: "New York",              stateAbbr: "NY" },
  { city: "Tonawanda",             state: "New York",              stateAbbr: "NY" },
  { city: "Webster",               state: "New York",              stateAbbr: "NY" },
  { city: "West Seneca",           state: "New York",              stateAbbr: "NY" },
  // Ohio
  { city: "Barberton",             state: "Ohio",                  stateAbbr: "OH" },
  { city: "Brunswick",             state: "Ohio",                  stateAbbr: "OH" },
  { city: "Holland",               state: "Ohio",                  stateAbbr: "OH" },
  { city: "Loveland",              state: "Ohio",                  stateAbbr: "OH" },
  { city: "Massillon",             state: "Ohio",                  stateAbbr: "OH" },
  { city: "Medina",                state: "Ohio",                  stateAbbr: "OH" },
  { city: "Miamisburg",            state: "Ohio",                  stateAbbr: "OH" },
  { city: "Milford",               state: "Ohio",                  stateAbbr: "OH" },
  { city: "Niles",                 state: "Ohio",                  stateAbbr: "OH" },
  { city: "Perrysburg",            state: "Ohio",                  stateAbbr: "OH" },
  { city: "Stow",                  state: "Ohio",                  stateAbbr: "OH" },
  { city: "Sylvania",              state: "Ohio",                  stateAbbr: "OH" },
  { city: "Tallmadge",             state: "Ohio",                  stateAbbr: "OH" },
  { city: "Warren",                state: "Ohio",                  stateAbbr: "OH" },
  // Oregon
  { city: "Albany",                state: "Oregon",                stateAbbr: "OR" },
  { city: "Keizer",                state: "Oregon",                stateAbbr: "OR" },
  { city: "Milwaukie",             state: "Oregon",                stateAbbr: "OR" },
  { city: "Roseburg",              state: "Oregon",                stateAbbr: "OR" },
  { city: "Woodburn",              state: "Oregon",                stateAbbr: "OR" },
  // Pennsylvania
  { city: "West Chester",          state: "Pennsylvania",          stateAbbr: "PA" },
  // Rhode Island
  { city: "Lincoln",               state: "Rhode Island",          stateAbbr: "RI" },
  { city: "Middletown",            state: "Rhode Island",          stateAbbr: "RI" },
  { city: "West Warwick",          state: "Rhode Island",          stateAbbr: "RI" },
  // South Carolina
  { city: "Bluffton",              state: "South Carolina",        stateAbbr: "SC" },
  { city: "Blythewood",            state: "South Carolina",        stateAbbr: "SC" },
  { city: "Boiling Springs",       state: "South Carolina",        stateAbbr: "SC" },
  { city: "Easley",                state: "South Carolina",        stateAbbr: "SC" },
  { city: "Inman",                 state: "South Carolina",        stateAbbr: "SC" },
  { city: "Irmo",                  state: "South Carolina",        stateAbbr: "SC" },
  { city: "Ladson",                state: "South Carolina",        stateAbbr: "SC" },
  { city: "Lexington",             state: "South Carolina",        stateAbbr: "SC" },
  { city: "Little River",          state: "South Carolina",        stateAbbr: "SC" },
  { city: "Murrells Inlet",        state: "South Carolina",        stateAbbr: "SC" },
  { city: "North Augusta",         state: "South Carolina",        stateAbbr: "SC" },
  { city: "North Myrtle Beach",    state: "South Carolina",        stateAbbr: "SC" },
  { city: "Surfside Beach",        state: "South Carolina",        stateAbbr: "SC" },
  { city: "Taylors",               state: "South Carolina",        stateAbbr: "SC" },
  { city: "West Columbia",         state: "South Carolina",        stateAbbr: "SC" },
  // Tennessee
  { city: "Bartlett",              state: "Tennessee",             stateAbbr: "TN" },
  { city: "Cleveland",             state: "Tennessee",             stateAbbr: "TN" },
  { city: "Columbia",              state: "Tennessee",             stateAbbr: "TN" },
  { city: "Cordova",               state: "Tennessee",             stateAbbr: "TN" },
  { city: "Hixson",                state: "Tennessee",             stateAbbr: "TN" },
  { city: "La Vergne",             state: "Tennessee",             stateAbbr: "TN" },
  { city: "Maryville",             state: "Tennessee",             stateAbbr: "TN" },
  { city: "Ooltewah",              state: "Tennessee",             stateAbbr: "TN" },
  { city: "Sevierville",           state: "Tennessee",             stateAbbr: "TN" },
  // Texas
  { city: "Hewitt",                state: "Texas",                 stateAbbr: "TX" },
  { city: "Portland",              state: "Texas",                 stateAbbr: "TX" },
  { city: "Robinson",              state: "Texas",                 stateAbbr: "TX" },
  { city: "Rockport",              state: "Texas",                 stateAbbr: "TX" },
  { city: "Spring",                state: "Texas",                 stateAbbr: "TX" },
  { city: "Temple",                state: "Texas",                 stateAbbr: "TX" },
  // Utah
  { city: "Draper",                state: "Utah",                  stateAbbr: "UT" },
  { city: "Herriman",              state: "Utah",                  stateAbbr: "UT" },
  { city: "Lehi",                  state: "Utah",                  stateAbbr: "UT" },
  { city: "South Jordan",          state: "Utah",                  stateAbbr: "UT" },
  // Virginia
  { city: "Chesterfield",          state: "Virginia",              stateAbbr: "VA" },
  { city: "Fairfax",               state: "Virginia",              stateAbbr: "VA" },
  { city: "Falls Church",          state: "Virginia",              stateAbbr: "VA" },
  { city: "Glen Allen",            state: "Virginia",              stateAbbr: "VA" },
  { city: "Henrico",               state: "Virginia",              stateAbbr: "VA" },
  { city: "Mechanicsville",        state: "Virginia",              stateAbbr: "VA" },
  { city: "Portsmouth",            state: "Virginia",              stateAbbr: "VA" },
  { city: "Springfield",           state: "Virginia",              stateAbbr: "VA" },
  { city: "Sterling",              state: "Virginia",              stateAbbr: "VA" },
  { city: "Williamsburg",          state: "Virginia",              stateAbbr: "VA" },
  { city: "Yorktown",              state: "Virginia",              stateAbbr: "VA" },
  // Washington
  { city: "Bothell",               state: "Washington",            stateAbbr: "WA" },
  { city: "Edmonds",               state: "Washington",            stateAbbr: "WA" },
  { city: "Lynnwood",              state: "Washington",            stateAbbr: "WA" },
  { city: "Maple Valley",          state: "Washington",            stateAbbr: "WA" },
  { city: "Olympia",               state: "Washington",            stateAbbr: "WA" },
  { city: "Puyallup",              state: "Washington",            stateAbbr: "WA" },
  { city: "Snohomish",             state: "Washington",            stateAbbr: "WA" },
  { city: "Woodinville",           state: "Washington",            stateAbbr: "WA" },
  // Wisconsin
  { city: "De Pere",               state: "Wisconsin",             stateAbbr: "WI" },
  { city: "Franklin",              state: "Wisconsin",             stateAbbr: "WI" },
  { city: "Middleton",             state: "Wisconsin",             stateAbbr: "WI" },
  { city: "Sun Prairie",           state: "Wisconsin",             stateAbbr: "WI" },
  // West Virginia
  { city: "South Charleston",      state: "West Virginia",         stateAbbr: "WV" },
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

// ── State helpers ─────────────────────────────────────────────────────────────

export const DIRECTORY_STATES: { state: string; stateAbbr: string }[] =
  Array.from(
    new Map(DIRECTORY_CITIES.map((c) => [c.stateAbbr, { state: c.state, stateAbbr: c.stateAbbr }])).values()
  ).sort((a, b) => a.state.localeCompare(b.state));

function slugifyState(stateName: string): string {
  return stateName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s-]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function stateToSlug(stateAbbr: string): string {
  const entry = DIRECTORY_STATES.find((s) => s.stateAbbr === stateAbbr);
  if (!entry) return `${siteConfig.verticalSlug}-${stateAbbr.toLowerCase()}`;
  return `${siteConfig.verticalSlug}-${slugifyState(entry.state)}`;
}

export function parseStateSlug(slug: string): { state: string; stateAbbr: string } | null {
  const prefix = `${siteConfig.verticalSlug}-`;
  if (!slug.startsWith(prefix)) return null;
  const rest = slug.slice(prefix.length);
  return DIRECTORY_STATES.find((s) => slugifyState(s.state) === rest) ?? null;
}

export function getCitiesInState(stateAbbr: string) {
  return DIRECTORY_CITIES.filter((c) => c.stateAbbr === stateAbbr);
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

export async function getCityCompanyCounts(
  cities: { city: string; stateAbbr: string }[]
): Promise<Record<string, number>> {
  if (cities.length === 0) return {};
  const supabase = createServerClient();
  const counts: Record<string, number> = {};

  await Promise.all(
    cities.map(async ({ city, stateAbbr }) => {
      const { count } = await supabase
        .from("companies")
        .select("id", { count: "exact", head: true })
        .eq("city", city)
        .eq("state", stateAbbr)
        .eq("is_approved", true);
      counts[`${city}-${stateAbbr}`] = count ?? 0;
    })
  );

  return counts;
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

export async function getFeaturedCompanies(limit = 3): Promise<Company[]> {
  const supabase = createServerClient();
  const { data } = await supabase
    .from("companies")
    .select("id,slug,business_name,phone,address,city,state,rating,review_count,services,is_verified,is_featured,is_claimed,logo_url,short_description,latitude,longitude,website")
    .eq("is_approved", true)
    .eq("is_featured", true)
    .order("rating", { ascending: false })
    .limit(limit);

  if (!data || data.length === 0) {
    const { data: fallback } = await supabase
      .from("companies")
      .select("id,slug,business_name,phone,address,city,state,rating,review_count,services,is_verified,is_featured,is_claimed,logo_url,short_description,latitude,longitude,website")
      .eq("is_approved", true)
      .not("rating", "is", null)
      .order("rating", { ascending: false })
      .order("review_count", { ascending: false })
      .limit(limit);
    return (fallback as Company[]) ?? [];
  }

  return (data as Company[]) ?? [];
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
