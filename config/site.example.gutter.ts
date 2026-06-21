/**
 * EXAMPLE: Gutter Cleaning vertical configuration
 *
 * To create the gutter cleaning vertical:
 *   1. Copy powerwash-directory to /home/j/_DEV/gutter-directory/
 *   2. Replace config/site.ts with this file
 *   3. Replace /public/hero-wash.jpg with /public/hero-gutter.jpg
 *   4. Deploy as new Vercel project: find.guttercare.com
 *   5. Add gutter.yaml config to scraper lab
 */

import type { LucideIcon } from "lucide-react";
import {
  Droplets,
  Home,
  Zap,
  Shield,
  Wrench,
  TreePine,
  Building2,
  Users,
  Star,
  BadgeCheck,
  CheckCircle,
  Clock,
} from "lucide-react";

import { SiteConfig, HeadlineLine, ServiceItem, PropertyType, SiteColors } from "./site";

export const siteConfig: SiteConfig = {
  brand: "GutterPro",
  brandSuffix: "Directory",
  icon: Droplets,

  verticalSlug: "gutter-cleaning",
  verticalName: "Gutter Cleaning",
  verticalProNoun: "gutter cleaning professionals",

  domain: "find.guttercare.com",
  adsenseClient: "ca-pub-3493426366115346", // Same AdSense account

  colors: {
    primary: "#059669",      // Green theme for gutters
    primaryHover: "#047857",
    primaryLight: "#10b981",
    primaryXLight: "#6ee7b7",
    dark: "#1f2937",
    darkDeep: "#111827",
    lightBg: "#f0fdf4",
  },

  seo: {
    title: "Gutter Cleaning Near Me | Free Quotes from Local Pros | GutterPro Directory",
    description: "Find licensed, insured gutter cleaning pros near you. Get free quotes from local companies — compare rates, read reviews, and hire the right pro in minutes.",
    schemaServiceCategory: "Gutter Cleaning Services",
    schemaServiceNames: [
      "Gutter Cleaning",
      "Gutter Repair",
      "Downspout Cleaning",
      "Gutter Guard Installation",
      "Gutter Replacement",
      "Leaf Guard Installation",
      "Commercial Gutter Service",
    ],
  },

  hero: {
    badge: "Trusted by homeowners across the US · Free service",
    headlineLines: [
      { text: "Get Your Gutters" },
      { text: "Cleaned Today", highlight: true },
    ],
    subtext: "Professional gutter cleaning · Fast quotes · No obligation",
    trustSignals: [
      { icon: CheckCircle, label: "Licensed & Insured Pros" },
      { icon: Clock, label: "Quotes in 24 Hours" },
      { icon: Shield, label: "100% Free Service" },
    ],
  },

  stats: [
    { icon: Users, value: "8,000+", label: "Homeowners Served" },
    { icon: Star, value: "4.9 / 5", label: "Average Rating" },
    { icon: Zap, value: "< 24 hrs", label: "Avg. Response Time" },
    { icon: BadgeCheck, value: "100%", label: "Free & No Obligation" },
  ],

  faqs: [
    {
      q: "How much does gutter cleaning cost?",
      a: "Most homes cost $100–$250 for a full cleaning, depending on size and condition. Two-story homes and heavy debris may cost more. Getting quotes through GutterPro ensures competitive pricing in your area.",
    },
    {
      q: "How often should gutters be cleaned?",
      a: "Most homes need cleaning 2x per year — spring and fall. Homes near trees may need quarterly service. Neglecting gutter maintenance can lead to expensive water damage and foundation problems.",
    },
    {
      q: "Are gutter cleaning pros insured?",
      a: "Yes. All pros on GutterPro Directory carry liability insurance and proper licensing. Working on ladders and rooflines requires professional training — never risk DIY gutter work.",
    },
    {
      q: "Do I need to be home during gutter cleaning?",
      a: "Not usually. Pros just need access to your roof line and a water source. If you have locked gates or specific access requirements, coordinate beforehand.",
    },
    {
      q: "What's included in gutter cleaning service?",
      a: "Full service includes removing all debris, flushing downspouts, checking for leaks or damage, and cleaning up afterward. Some pros include minor repairs at no extra charge.",
    },
    {
      q: "Should I install gutter guards?",
      a: "Gutter guards reduce (but don't eliminate) cleaning frequency. They're worth it if you have many trees or struggle with frequent clogs. Your pro can assess whether guards make sense for your situation.",
    },
  ],

  services: [
    {
      id: "gutter-cleaning",
      label: "Gutter Cleaning",
      icon: Home,
      description: "Remove leaves, debris, and buildup from gutters & downspouts",
    },
    {
      id: "gutter-repair",
      label: "Gutter Repair",
      icon: Wrench,
      description: "Fix leaks, loose brackets, and damaged sections",
    },
    {
      id: "downspout-cleaning",
      label: "Downspout Service",
      icon: Droplets,
      description: "Clear clogs and ensure proper water drainage",
    },
    {
      id: "gutter-guards",
      label: "Gutter Guard Installation",
      icon: Shield,
      description: "Prevent future clogs with professional leaf guards",
    },
    {
      id: "gutter-replacement",
      label: "Gutter Replacement",
      icon: Building2,
      description: "Full gutter system replacement and installation",
    },
    {
      id: "roof-cleaning",
      label: "Roof & Gutter Package",
      icon: TreePine,
      description: "Combined roof and gutter cleaning service",
    },
  ],

  propertyTypes: [
    { id: "single-family", label: "Single Family Home" },
    { id: "townhouse", label: "Townhouse / Condo" },
    { id: "commercial", label: "Commercial Building" },
    { id: "other", label: "Other" },
  ],

  cta: {
    text: "Get Free Quote",
    zipPlaceholder: "Enter your ZIP code...",
    zipSubtext: "Service available in 500+ cities · Average response: 18 minutes",
  },

  cityPage: {
    headlineVerb: "Gutter Cleaning in",
    metaTitleTemplate: "Best Gutter Cleaning in {city}, {state} — Free Quotes | GutterPro Directory",
    metaDescTemplate: "Find top-rated gutter cleaning companies in {city}, {state}. Compare reviews, get free quotes from licensed & insured local pros.",
    ogTitleTemplate: "Gutter Cleaning in {city}, {state} — Top Rated Local Pros",
    ogDescTemplate: "Compare the best gutter cleaning companies in {city}, {state}. Free quotes, verified reviews.",
  },
};

export function cityTemplate(template: string, city: string, state: string) {
  return template.replace(/\{city\}/g, city).replace(/\{state\}/g, state);
}