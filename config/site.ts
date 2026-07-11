/**
 * Vertical configuration — the ONLY file to change when spinning up a new directory.
 *
 * To create a new vertical:
 *   1. Copy this repo to a new directory
 *   2. Edit this file (brand, colors, verticalSlug, copy, services, FAQs)
 *   3. Swap /public/hero-wash.jpg for a vertical-appropriate hero image
 *   4. Set NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY in Vercel env
 *   5. Deploy as a new Vercel project + point a new domain
 */

import type { LucideIcon } from "lucide-react";
import {
  Droplets,
  Home,
  SquareStack,
  TreePine,
  Fence,
  Flame,
  Sun,
  Building2,
  LayoutGrid,
  BrickWall,
  Layers,
  SprayCan,
  MapPin,
  Zap,
  BadgeCheck,
  CheckCircle,
  Clock,
  Shield,
} from "lucide-react";

// ─── Types ──────────────────────────────────────────────────────────────────

export interface HeadlineLine {
  text: string;
  highlight?: boolean;
}

export interface ServiceItem {
  id: string;
  label: string;
  icon: LucideIcon;
  description: string;
}

export interface PropertyType {
  id: string;
  label: string;
}

export interface SiteColors {
  /** Main interactive color (buttons, links, accents) */
  primary: string;
  /** Darker shade for hover states */
  primaryHover: string;
  /** Lighter shade — used for text on dark backgrounds */
  primaryLight: string;
  /** Very light shade — subtle text, badges */
  primaryXLight: string;
  /** Dark navy — headings, nav bg, dark sections */
  dark: string;
  /** Slightly darker navy — hero gradients */
  darkDeep: string;
  /** Light tinted background — alternating sections */
  lightBg: string;
}

export interface SiteConfig {
  // Brand
  brand: string;
  brandSuffix: string;
  icon: LucideIcon;

  // Vertical identity
  verticalSlug: string;    // URL slug prefix: "power-washing"
  verticalName: string;    // Display: "Power Washing"
  verticalProNoun: string; // "power washing professionals"

  // Domain (fallback if NEXT_PUBLIC_SITE_URL not set)
  domain: string;
  adsenseClient: string;

  colors: SiteColors;

  seo: {
    title: string;
    description: string;
    schemaServiceCategory: string;
    schemaServiceNames: string[];
  };

  hero: {
    badge: string;
    headlineLines: HeadlineLine[];
    subtext: string;
    trustSignals: { icon: LucideIcon; label: string }[];
  };

  stats: { icon: LucideIcon; value: string; label: string }[];

  faqs: { q: string; a: string }[];

  services: ServiceItem[];

  propertyTypes: PropertyType[];

  cta: {
    text: string;
    zipPlaceholder: string;
    zipSubtext: string;
  };

  cityPage: {
    headlineVerb: string;           // "Power Washing in"
    metaTitleTemplate: string;      // uses {city} and {state}
    metaDescTemplate: string;
    ogTitleTemplate: string;
    ogDescTemplate: string;
  };
}

// ─── Config ─────────────────────────────────────────────────────────────────

export const siteConfig: SiteConfig = {
  brand: "WashPro",
  brandSuffix: "Directory",
  icon: Droplets,

  verticalSlug: "power-washing",
  verticalName: "Power Washing",
  verticalProNoun: "power washing professionals",

  domain: "find.outdoorwashing.com",
  adsenseClient: "ca-pub-3493426366115346",

  colors: {
    primary: "#0ea5e9",
    primaryHover: "#0284c7",
    primaryLight: "#38bdf8",
    primaryXLight: "#93c5fd",
    dark: "#1e3a5f",
    darkDeep: "#152c48",
    lightBg: "#eef4fb",
  },

  seo: {
    title: "Power Washing Near Me | Free Quotes from Local Pros | WashPro Directory",
    description:
      "Find licensed, insured power washing pros near you. Get free quotes from local companies — compare rates, read reviews, and hire the right pro in minutes. No obligation.",
    schemaServiceCategory: "Power Washing Services",
    schemaServiceNames: [
      "House Soft Washing",
      "Driveway & Concrete Cleaning",
      "Deck Restoration",
      "Roof Cleaning",
      "Fence Washing",
      "Gutter Cleaning",
      "Solar Panel Cleaning",
      "Commercial Property Washing",
    ],
  },

  hero: {
    badge: "Trusted by homeowners across the US · Free service",
    headlineLines: [
      { text: "Get Your Property" },
      { text: "Power Washed", highlight: true },
      { text: "Today" },
    ],
    subtext: "Trusted local pros · Fast quotes · No obligation",
    trustSignals: [
      { icon: CheckCircle, label: "Licensed & Insured Pros" },
      { icon: Clock,        label: "Quotes in 24 Hours" },
      { icon: Shield,       label: "100% Free Service" },
    ],
  },

  stats: [
    { icon: Building2, value: "1,400+", label: "Listed Local Pros" },
    { icon: MapPin,    value: "300+",   label: "Cities Covered" },
    { icon: Zap,       value: "Free",   label: "Quotes — Always" },
    { icon: BadgeCheck, value: "Zero",  label: "Obligation to Hire" },
  ],

  faqs: [
    {
      q: "How much does power washing typically cost?",
      a: "Costs vary by surface size and type. Driveways typically run $100–$250, house exteriors $200–$500, and decks $150–$350. Getting multiple quotes through WashPro ensures you get the best rate for your area.",
    },
    {
      q: "How often should I have my home power washed?",
      a: "Most homes benefit from annual or bi-annual service. Humid climates, homes near trees, or north-facing surfaces may need more frequent cleaning. Driveways typically need washing every 1–2 years.",
    },
    {
      q: `Are pros on WashPro Directory licensed and insured?`,
      a: "Yes. All pros carry appropriate business licensing and liability insurance. We verify credentials before any provider is listed on our platform — your home is protected.",
    },
    {
      q: "How long does power washing take?",
      a: "A typical home exterior takes 2–4 hours. Driveways and decks usually take 1–2 hours each. Your matched pro will provide a time estimate with their quote.",
    },
    {
      q: "Is power washing safe for plants and landscaping?",
      a: "Experienced pros take precautions: wetting plants before and after, using eco-friendly detergents, and directing spray away from beds. Ask your pro about their specific approach.",
    },
    {
      q: "What's the difference between pressure washing and soft washing?",
      a: "Pressure washing uses high-pressure water to blast away hard dirt from concrete, brick, and stone. Soft washing uses low pressure plus specialized cleaning solutions to safely remove mold, algae, and stains from more delicate surfaces like siding, roofs, and fences. Most pros use both methods depending on what's being cleaned.",
    },
    {
      q: "Can power washing damage my home's siding or roof?",
      a: "In the wrong hands, yes — high pressure can crack siding, strip paint, or force water under shingles. That's why professional technique matters. Reputable pros always use the correct pressure and method for each surface. Vinyl siding and roofs are always cleaned with soft-wash low-pressure techniques by trained contractors.",
    },
    {
      q: "Do I need to be home when the work is done?",
      a: "Not necessarily. Most pros just need access to an outdoor water spigot and the areas to be cleaned. If gates or specific access points need to be unlocked, coordinate with your pro before the appointment. Many homeowners are at work during the service with no issues.",
    },
    {
      q: "What's included in a quote — are there hidden fees?",
      a: "A good quote covers labor, cleaning solutions, and equipment. Watch out for add-ons like 'chemical fees' or 'travel surcharges' that aren't mentioned upfront. When you request quotes through WashPro, pros are expected to give all-in pricing. Always confirm what's included in writing before work begins.",
    },
    {
      q: "Is power washing worth it before selling my house?",
      a: "Absolutely. Curb appeal is one of the biggest factors in first impressions, and a clean exterior can add thousands to perceived home value. Driveways, siding, decks, and walkways that look dingy can turn off buyers before they even step inside. A $200–$400 professional wash can easily net a 5–10x return in improved offer quality.",
    },
  ],

  services: [
    {
      id: "house-soft-washing",
      label: "House Soft Washing",
      icon: Home,
      description: "Gentle low-pressure clean for siding, brick & exteriors",
    },
    {
      id: "driveway",
      label: "Driveway & Concrete",
      icon: SquareStack,
      description: "Remove oil stains, tire marks, mildew, and buildup",
    },
    {
      id: "deck-restoration",
      label: "Deck Restoration",
      icon: TreePine,
      description: "Bring wood and composite surfaces back to life",
    },
    {
      id: "roof-cleaning",
      label: "Roof Cleaning",
      icon: Droplets,
      description: "Safe soft-wash to remove algae, moss & black streaks",
    },
    {
      id: "fence-washing",
      label: "Fence Washing",
      icon: Fence,
      description: "Wood, vinyl, and chain-link deep cleaning",
    },
    {
      id: "gutter-cleaning",
      label: "Gutter Cleaning",
      icon: Flame,
      description: "Clear debris and flush downspouts for proper drainage",
    },
    {
      id: "solar-panels",
      label: "Solar Panel Cleaning",
      icon: Sun,
      description: "Maximize energy output with a professional soft wash",
    },
    {
      id: "commercial",
      label: "Commercial Property",
      icon: Building2,
      description: "Storefronts, parking lots, sidewalks & commercial buildings",
    },
    {
      id: "patio-paver-cleaning",
      label: "Patio & Paver Cleaning",
      icon: LayoutGrid,
      description: "Restore pavers and stone patios without losing joint sand",
    },
    {
      id: "brick-cleaning",
      label: "Brick & Masonry",
      icon: BrickWall,
      description: "Gentle cleaning for brick, mortar, and stone surfaces",
    },
    {
      id: "stucco-cleaning",
      label: "Stucco & EIFS",
      icon: Layers,
      description: "Low-pressure soft wash safe for stucco and Dryvit",
    },
    {
      id: "graffiti-removal",
      label: "Graffiti Removal",
      icon: SprayCan,
      description: "Remove spray paint from brick, concrete, and metal",
    },
  ],

  propertyTypes: [
    { id: "single-family", label: "Single Family Home" },
    { id: "townhouse",     label: "Townhouse / Condo" },
    { id: "commercial",    label: "Commercial" },
    { id: "other",         label: "Other" },
  ],

  cta: {
    text: "Get Free Quote",
    zipPlaceholder: "Enter your ZIP code...",
    zipSubtext: "Service available in 500+ cities · Average response: 18 minutes",
  },

  cityPage: {
    headlineVerb: "Power Washing in",
    metaTitleTemplate:
      "Best Power Washing in {city}, {state} — Free Quotes | WashPro Directory",
    metaDescTemplate:
      "Find top-rated power washing companies in {city}, {state}. Compare reviews, get free quotes from licensed & insured local pros. Fast response, no obligation.",
    ogTitleTemplate:
      "Power Washing in {city}, {state} — Top Rated Local Pros",
    ogDescTemplate:
      "Compare the best power washing companies in {city}, {state}. Free quotes, verified reviews.",
  },
};

/** Interpolate {city} and {state} placeholders in city page templates. */
export function cityTemplate(template: string, city: string, state: string) {
  return template.replace(/\{city\}/g, city).replace(/\{state\}/g, state);
}
