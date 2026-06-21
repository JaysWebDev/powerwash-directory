import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Star, Phone, MapPin, Globe, BadgeCheck, ChevronRight, Zap } from "lucide-react";
import { getCompanyBySlug, getCompanyNeighbors, getAllCompanySlugs, cityToSlug, stateToSlug, DIRECTORY_CITIES } from "@/lib/directory";
import CompanyCard from "@/components/CompanyCard";
import ServicesAndQuote from "@/components/ServicesAndQuote";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/config/site";

const Icon = siteConfig.icon;

export const revalidate = 86400;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getAllCompanySlugs();
  return slugs.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const company = await getCompanyBySlug(slug);
  if (!company) return { title: "Not Found" };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${siteConfig.domain}`;
  const title = `${company.business_name} — ${siteConfig.verticalName} in ${company.city}, ${company.state}`;
  const description = company.short_description
    ?? `${company.business_name} is a ${siteConfig.verticalName.toLowerCase()} company serving ${company.city}, ${company.state}. Get a free quote today.`;

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/companies/${slug}` },
    openGraph: { title, description, url: `${siteUrl}/companies/${slug}` },
  };
}

const SERVICE_LABELS: Record<string, string> = {
  "house-soft-washing": "House Soft Washing",
  "driveway":           "Driveway & Concrete",
  "deck-restoration":   "Deck Restoration",
  "roof-cleaning":      "Roof Cleaning",
  "fence-washing":      "Fence Washing",
  "gutter-cleaning":    "Gutter Cleaning",
  "solar-panels":       "Solar Panel Cleaning",
  "commercial":         "Commercial Property",
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-5 h-5 ${i < Math.round(rating) ? "text-[#f59e0b] fill-[#f59e0b]" : "text-[#e2e8f0] fill-[#e2e8f0]"}`} />
      ))}
    </div>
  );
}

export default async function CompanyPage({ params }: Props) {
  const { slug } = await params;
  const [company, neighbors] = await Promise.all([
    getCompanyBySlug(slug),
    getCompanyBySlug(slug).then(c => c ? getCompanyNeighbors(c.city, c.state, slug) : []),
  ]);

  if (!company) notFound();

  const citySlug = cityToSlug(company.city, company.state);
  const cityEntry = DIRECTORY_CITIES.find(c => c.stateAbbr === company.state && c.city === company.city);
  const stateFull = cityEntry?.state ?? company.state;
  const stateSlug = stateToSlug(company.state);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${siteConfig.domain}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: company.business_name,
    url: company.website ?? `${siteUrl}/companies/${slug}`,
    telephone: company.phone ?? undefined,
    address: company.address ? {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: company.city,
      addressRegion: company.state,
      addressCountry: "US",
    } : undefined,
    geo: company.latitude && company.longitude ? {
      "@type": "GeoCoordinates",
      latitude: company.latitude,
      longitude: company.longitude,
    } : undefined,
    aggregateRating: company.rating ? {
      "@type": "AggregateRating",
      ratingValue: company.rating,
      reviewCount: company.review_count || 1,
      bestRating: 5,
      worstRating: 1,
    } : undefined,
    hasOfferCatalog: company.services?.length ? {
      "@type": "OfferCatalog",
      name: siteConfig.seo.schemaServiceCategory,
      itemListElement: company.services.map(s => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: SERVICE_LABELS[s] ?? s },
      })),
    } : undefined,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: stateFull, item: `${siteUrl}/${stateSlug}` },
      { "@type": "ListItem", position: 3, name: `${siteConfig.verticalName} in ${company.city}, ${company.state}`, item: `${siteUrl}/${citySlug}` },
      { "@type": "ListItem", position: 4, name: company.business_name, item: `${siteUrl}/companies/${slug}` },
    ],
  };

  const initials = company.business_name.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase();

  const descriptionText = company.description
    ?? company.short_description
    ?? `${company.business_name} is a ${siteConfig.verticalName.toLowerCase()} company serving ${company.city}, ${company.state}${company.services?.length ? `, offering services including ${company.services.slice(0, 3).map(s => SERVICE_LABELS[s] ?? s).join(", ")}` : ""}. ${company.rating ? `They have a ${company.rating.toFixed(1)}-star rating based on ${company.review_count} customer reviews.` : "Contact them for a free quote on your next exterior cleaning project."}`;

  return (
    <main className="flex flex-col flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── NAV ─────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e2e8f0] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <Icon className="w-7 h-7" style={{ color: "var(--cp)" }} />
            <span className="font-bold text-xl tracking-tight" style={{ color: "var(--cd)" }}>
              {siteConfig.brand}{" "}
              <span style={{ color: "var(--cp)" }}>{siteConfig.brandSuffix}</span>
            </span>
          </a>
          <a
            href="#quote-form"
            className="text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm"
            style={{ backgroundColor: "var(--cp)" }}
          >
            {siteConfig.cta.text}
          </a>
        </div>
      </nav>

      {/* ── BREADCRUMB ──────────────────────── */}
      <div className="bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-1.5 text-sm text-[#64748b]">
          <a href="/" className="hover:underline transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <a href={`/${stateSlug}`} className="hover:underline transition-colors">{stateFull}</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <a href={`/${citySlug}`} className="hover:underline transition-colors">
            {company.city}, {company.state}
          </a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-medium truncate" style={{ color: "var(--cd)" }}>{company.business_name}</span>
        </div>
      </div>

      {/* ── PROFILE HEADER ──────────────────── */}
      <section className="bg-white border-b border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0" style={{ background: "var(--cd)" }}>
              {initials}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h1 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--cd)" }}>{company.business_name}</h1>
                {company.is_featured && (
                  <span className="inline-flex items-center gap-1 bg-[#fef3c7] text-[#d97706] text-xs font-bold px-2.5 py-1 rounded-full">
                    <Zap className="w-3 h-3" /> Featured
                  </span>
                )}
                {company.is_verified && (
                  <span className="inline-flex items-center gap-1 text-[#16a34a] text-xs font-semibold">
                    <BadgeCheck className="w-4 h-4" /> Verified
                  </span>
                )}
              </div>

              {company.rating && (
                <div className="flex items-center gap-3 mb-3">
                  <Stars rating={company.rating} />
                  <span className="font-bold" style={{ color: "var(--cd)" }}>{company.rating.toFixed(1)}</span>
                  {company.review_count > 0 && (
                    <span className="text-[#64748b] text-sm">({company.review_count} reviews)</span>
                  )}
                </div>
              )}

              <div className="flex flex-wrap gap-4 text-sm text-[#475569]">
                {company.phone && (
                  <a href={`tel:${company.phone.replace(/\D/g, "")}`} className="flex items-center gap-1.5 font-medium hover:underline transition-colors">
                    <Phone className="w-4 h-4" style={{ color: "var(--cp)" }} />{company.phone}
                  </a>
                )}
                {company.address && (
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" style={{ color: "var(--cp)" }} />{company.address}
                  </span>
                )}
                {company.website && (
                  <a href={company.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:underline transition-colors">
                    <Globe className="w-4 h-4" style={{ color: "var(--cp)" }} />Visit Website
                  </a>
                )}
              </div>
            </div>

            {/* CTA */}
            <a href="#quote-form" className="flex-shrink-0 text-white font-bold px-8 py-3.5 rounded-xl transition-colors shadow-sm text-sm" style={{ background: "var(--cp)" }}>
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* ── AD ──────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8">
        <AdUnit slot="5303723755" />
      </div>

      {/* ── SERVICES + DESCRIPTION ──────────── */}
      <section className="py-12 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Services */}
          <div className="md:col-span-2">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-3" style={{ color: "var(--cd)" }}>About {company.business_name}</h2>
              <p className="text-[#475569] leading-relaxed">{descriptionText}</p>
            </div>

            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--cd)" }}>Services Offered</h2>
            {company.services?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {company.services.map(s => (
                  <div key={s} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-[#e2e8f0]">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "var(--cp)" }} />
                    <span className="font-medium text-sm" style={{ color: "var(--cd)" }}>{SERVICE_LABELS[s] ?? s}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[#64748b]">Contact for service details.</p>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6">
              <h3 className="font-bold mb-4" style={{ color: "var(--cd)" }}>Business Info</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-[#94a3b8] text-xs uppercase tracking-wide mb-0.5">Location</dt>
                  <dd className="font-medium" style={{ color: "var(--cd)" }}>{company.city}, {company.state}</dd>
                </div>
                {company.is_verified && (
                  <div>
                    <dt className="text-[#94a3b8] text-xs uppercase tracking-wide mb-0.5">Status</dt>
                    <dd className="text-[#16a34a] font-medium flex items-center gap-1"><BadgeCheck className="w-3.5 h-3.5" /> Verified</dd>
                  </div>
                )}
                {company.rating && (
                  <div>
                    <dt className="text-[#94a3b8] text-xs uppercase tracking-wide mb-0.5">Rating</dt>
                    <dd className="font-medium" style={{ color: "var(--cd)" }}>{company.rating.toFixed(1)} / 5.0 ({company.review_count} reviews)</dd>
                  </div>
                )}
              </dl>
              <a href="#quote-form" className="mt-5 block text-center text-white font-bold py-3 rounded-xl transition-colors text-sm" style={{ background: "var(--cd)" }}>
                Request Free Quote
              </a>
              {!company.is_claimed && (
                <a href={`/claim/${slug}`} className="mt-3 block text-center text-xs font-medium py-2 rounded-xl border border-[#e2e8f0] text-[#64748b] hover:text-[#475569] transition-colors">
                  Is this your business? Claim it →
                </a>
              )}
            </div>

            <a href={`/${citySlug}`} className="flex items-center justify-between bg-white rounded-2xl border border-[#e2e8f0] p-4 hover:shadow-sm transition-all group">
              <div>
                <p className="text-xs text-[#94a3b8] mb-0.5">Browse all pros in</p>
                <p className="font-semibold text-sm" style={{ color: "var(--cd)" }}>{company.city}, {company.state}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-[#94a3b8] group-hover:text-[#475569] transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* ── QUOTE FORM ──────────────────────── */}
      <ServicesAndQuote />

      {/* ── OTHER PROS IN THIS CITY ─────────── */}
      {neighbors.length > 0 && (
        <section className="py-12 bg-[#f8fafc] border-t border-[#e2e8f0]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-bold mb-6" style={{ color: "var(--cd)" }}>
              Other {siteConfig.verticalName} Pros in {company.city}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {neighbors.map(n => <CompanyCard key={n.id} company={n} />)}
            </div>
            <div className="mt-6">
              <a href={`/${citySlug}`} className="inline-flex items-center gap-2 font-semibold text-sm hover:underline" style={{ color: "var(--cp)" }}>
                View all pros in {company.city} <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
