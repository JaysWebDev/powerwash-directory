import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { Star, CheckCircle, Shield, Clock, ChevronRight } from "lucide-react";
import {
  parseLocationSlug,
  getCompaniesByCity,
  getNearbyCities,
  cityToSlug,
  DIRECTORY_CITIES,
} from "@/lib/directory";
import CompanyCard from "@/components/CompanyCard";
import AdUnit from "@/components/AdUnit";
import HeroZipInput from "@/components/HeroZipInput";
import ServicesAndQuote from "@/components/ServicesAndQuote";
import { siteConfig, cityTemplate } from "@/config/site";

const Icon = siteConfig.icon;

export const revalidate = 86400; // Rebuild city pages once per day

type Props = { params: Promise<{ location: string }> };

export async function generateStaticParams() {
  return DIRECTORY_CITIES.map(({ city, stateAbbr }) => ({
    location: cityToSlug(city, stateAbbr),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location } = await params;
  const parsed = parseLocationSlug(location);
  if (!parsed) return { title: "Not Found" };

  const { city, state } = parsed;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${siteConfig.domain}`;
  const cp = siteConfig.cityPage;

  return {
    title: cityTemplate(cp.metaTitleTemplate, city, state),
    description: cityTemplate(cp.metaDescTemplate, city, state),
    alternates: { canonical: `${siteUrl}/${location}` },
    openGraph: {
      title: cityTemplate(cp.ogTitleTemplate, city, state),
      description: cityTemplate(cp.ogDescTemplate, city, state),
      url: `${siteUrl}/${location}`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { location } = await params;
  const parsed = parseLocationSlug(location);
  if (!parsed) notFound();

  const { city, state } = parsed;
  const companies = await getCompaniesByCity(city, state);

  const cityEntry = DIRECTORY_CITIES.find(
    (c) => c.city.toLowerCase() === city.toLowerCase() && c.stateAbbr === state
  );
  const stateFull = cityEntry?.state ?? state;

  // JSON-LD schema for this city page
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteConfig.verticalName} Companies in ${city}, ${state}`,
    description: `Top-rated ${siteConfig.verticalProNoun} in ${city}, ${stateFull}`,
    numberOfItems: companies.length,
    itemListElement: companies.slice(0, 10).map((co, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "HomeAndConstructionBusiness",
        name: co.business_name,
        telephone: co.phone ?? undefined,
        address: co.address
          ? { "@type": "PostalAddress", streetAddress: co.address, addressLocality: city, addressRegion: state, addressCountry: "US" }
          : undefined,
        aggregateRating: co.rating
          ? { "@type": "AggregateRating", ratingValue: co.rating, reviewCount: co.review_count || 1, bestRating: 5 }
          : undefined,
      },
    })),
  };

  const nearbyCities = getNearbyCities(city, state, 8);

  return (
    <main className="flex flex-col flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── NAV ───────────────────────────────────── */}
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

      {/* ── HERO ──────────────────────────────────── */}
      <section className="relative w-full min-h-[440px] flex items-center">
        <Image src="/hero-wash.jpg" alt={`${siteConfig.verticalName} in ${city}, ${state}`} fill className="object-cover object-center" priority sizes="100vw" />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to right, color-mix(in srgb, var(--cd) 92%, transparent), color-mix(in srgb, var(--cd) 70%, transparent), color-mix(in srgb, var(--cd) 30%, transparent))` }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 w-full">
          <div className="flex items-center gap-1.5 text-white/50 text-xs mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80">{city}, {state}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 tracking-tight">
            {siteConfig.cityPage.headlineVerb}<br />
            <span style={{ color: "var(--cp-l)" }}>{city}, {state}</span>
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-lg">
            {companies.length > 0
              ? `${companies.length} local pros ready to give you a free quote.`
              : "Find top-rated local pros and get a free quote."}
            {" "}Licensed, insured, and vetted.
          </p>

          <div className="max-w-md">
            <HeroZipInput />
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8">
            {[
              { icon: CheckCircle, label: "Licensed & Insured" },
              { icon: Clock,        label: "Quotes in 24 Hours" },
              { icon: Shield,       label: "100% Free Service" },
            ].map(({ icon: TrustIcon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/70 text-sm">
                <TrustIcon className="w-4 h-4 flex-shrink-0" style={{ color: "var(--cp-l)" }} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────── */}
      <section className="bg-white border-b border-[#e2e8f0] py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-[#64748b]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#1e3a5f] text-lg">{companies.length}+</span>
              <span>Local Pros in {city}</span>
            </div>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]" />)}
              <span className="font-semibold text-[#1e3a5f] ml-1">4.8</span>
              <span>avg rating</span>
            </div>
            <div>Free quotes · No obligation</div>
          </div>
        </div>
      </section>

      {/* ── LISTINGS ──────────────────────────────── */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-2">
              Top Power Washing Companies in {city}, {state}
            </h2>
            <p className="text-[#64748b]">
              Sorted by rating · All verified by WashPro Directory
            </p>
          </div>

          {/* Ad — above listings */}
          <AdUnit slot="5303723755" className="mb-8" />

          {companies.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {companies.slice(0, 6).map((company) => (
                  <CompanyCard key={company.id} company={company} />
                ))}
              </div>

              {/* In-article ad between row 2 and row 3 */}
              {companies.length > 6 && (
                <>
                  <AdUnit slot="9977465932" format="fluid" layout="in-article" className="my-8" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {companies.slice(6).map((company) => (
                      <CompanyCard key={company.id} company={company} />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#e2e8f0]">
              <Icon className="w-10 h-10 text-[#0ea5e9] mx-auto mb-3" />
              <h3 className="font-bold text-[#1e3a5f] text-lg mb-2">No listings yet for {city}</h3>
              <p className="text-[#64748b] mb-6">Be the first to submit a quote request — we&apos;ll match you with a local pro.</p>
              <a href="#quote-form" className="inline-block bg-[#0ea5e9] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#0284c7] transition-colors">
                Get a Free Quote
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ── QUOTE FORM ────────────────────────────── */}
      <ServicesAndQuote />

      {/* ── NEARBY CITIES ─────────────────────────── */}
      {nearbyCities.length > 0 && (
        <section className="py-12 bg-white border-t border-[#e2e8f0]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-bold text-[#1e3a5f] mb-5">
              Power Washing in Nearby Cities
            </h2>
            <div className="flex flex-wrap gap-3">
              {nearbyCities.map((c) => (
                <a
                  key={c.city}
                  href={`/${cityToSlug(c.city, c.stateAbbr)}`}
                  className="px-4 py-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl text-sm text-[#475569] hover:border-[#0ea5e9] hover:text-[#0ea5e9] transition-all"
                >
                  {c.city}, {c.stateAbbr}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FOOTER ────────────────────────────────── */}
      <footer className="bg-[#1e3a5f] text-white/60 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Icon className="w-5 h-5 text-[#0ea5e9]" />
            <span className="font-bold text-white">WashPro <span className="text-[#0ea5e9]">Directory</span></span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} WashPro Directory. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
