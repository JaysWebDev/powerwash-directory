import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Clock, Calendar, ChevronRight } from "lucide-react";
import { guidesContent, getGuideContent } from "@/config/guides-content";
import { servicesContent } from "@/config/services-content";
import { siteConfig } from "@/config/site";
import ServiceQuoteForm from "@/components/ServiceQuoteForm";
import AdUnit from "@/components/AdUnit";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${siteConfig.domain}`;
const BRAND = `${siteConfig.brand} ${siteConfig.brandSuffix}`;

export function generateStaticParams() {
  return guidesContent.map((g) => ({ slug: g.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuideContent(slug);
  if (!g) return {};
  return {
    title: g.title,
    description: g.metaDescription,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: `${BASE_URL}/guides/${g.slug}` },
    openGraph: {
      title: g.title,
      description: g.metaDescription,
      url: `${BASE_URL}/guides/${g.slug}`,
      type: "article",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: g.headline }],
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const g = getGuideContent(slug);
  if (!g) notFound();

  const relatedServices = servicesContent.filter((s) => g.relatedServices.includes(s.slug));
  const relatedGuides = guidesContent.filter(
    (gu) => g.relatedGuides.includes(gu.slug) && gu.slug !== g.slug
  );
  const primaryService = relatedServices[0];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` },
      { "@type": "ListItem", position: 3, name: g.headline },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.headline,
    description: g.metaDescription,
    datePublished: g.publishDate,
    dateModified: g.updatedDate,
    author: { "@type": "Organization", name: BRAND, url: BASE_URL },
    publisher: { "@type": "Organization", name: BRAND, url: BASE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/guides/${g.slug}` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <main>
        {/* ── Article header ── */}
        <section className="section-py bg-white border-b border-[#e2e8f0]">
          <div className="max-w-5xl mx-auto page-px">
            <nav className="text-xs text-[#64748b] mb-4 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-[#1e3a5f] transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/guides" className="hover:text-[#1e3a5f] transition-colors">Guides</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#1e3a5f] font-medium line-clamp-1">{g.headline}</span>
            </nav>

            <div className="grid md:grid-cols-[1fr_340px] gap-10 items-start">
              <div>
                <h1
                  className="font-bold text-[#1e3a5f] mb-4"
                  style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-display)" }}
                >
                  {g.headline}
                </h1>
                <div className="flex items-center gap-4 text-sm text-[#64748b]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {g.readTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    Updated {g.updatedDate}
                  </span>
                  <span className="text-xs">By {BRAND}</span>
                </div>
              </div>
              <div className="hidden md:block sticky top-24">
                {primaryService && (
                  <ServiceQuoteForm serviceId={primaryService.id} serviceName={primaryService.name} />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Article body ── */}
        <section className="section-py bg-[#f8fafc]">
          <div className="max-w-5xl mx-auto page-px">
            <div className="grid md:grid-cols-[1fr_340px] gap-10 items-start">
              <article className="space-y-8">
                {/* Intro */}
                <p className="text-[#475569] leading-relaxed text-lg">{g.intro}</p>

                {g.sections.map((section, si) => (
                  <div key={section.heading}>
                    {(si === 1 || si === 3) && (
                      <AdUnit slot="9977465932" format="fluid" layout="in-article" className="mb-8" />
                    )}
                    <h2
                      className="font-bold text-[#1e3a5f] mb-3"
                      style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-title)" }}
                    >
                      {section.heading}
                    </h2>
                    <div className="space-y-3">
                      {section.content.map((para, i) => (
                        <p key={i} className="text-[#475569] leading-relaxed">{para}</p>
                      ))}
                    </div>
                    {section.bullets && (
                      <ul className="mt-3 space-y-2">
                        {section.bullets.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-[#475569]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.numbered && (
                      <ol className="mt-3 space-y-2 list-none">
                        {section.numbered.map((item, i) => (
                          <li key={item} className="flex items-start gap-3 text-[#475569]">
                            <span className="w-5 h-5 rounded-full bg-[#1e3a5f] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                              {i + 1}
                            </span>
                            {item}
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                ))}

                {/* Inline CTA */}
                <div
                  className="rounded-2xl p-6 text-center"
                  style={{ background: "linear-gradient(135deg, #dbeafe 0%, #e0f2fe 100%)" }}
                >
                  <p className="font-bold text-[#1e3a5f] mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    Ready to get quotes from local pros?
                  </p>
                  <p className="text-[#64748b] text-sm mb-4">
                    Free, no-obligation quotes from licensed contractors in your area.
                  </p>
                  <Link
                    href="/#quote-form"
                    className="inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#152c48] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
                  >
                    Get Free Quotes
                  </Link>
                </div>

                {/* Related guides */}
                {relatedGuides.length > 0 && (
                  <div>
                    <h2
                      className="font-bold text-[#1e3a5f] mb-4"
                      style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-title)" }}
                    >
                      Related Guides
                    </h2>
                    <div className="space-y-2">
                      {relatedGuides.map((rg) => (
                        <Link
                          key={rg.slug}
                          href={`/guides/${rg.slug}`}
                          className="flex items-center gap-3 p-4 bg-white border border-[#e2e8f0] rounded-xl hover:border-[#0ea5e9] transition-all group"
                        >
                          <div className="flex-1">
                            <p className="font-semibold text-[#1e3a5f] group-hover:text-[#0ea5e9] transition-colors text-sm">
                              {rg.headline}
                            </p>
                            <p className="text-xs text-[#64748b] mt-0.5">{rg.readTime}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-[#94a3b8] group-hover:text-[#0ea5e9] transition-colors flex-shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </article>

              {/* Sidebar */}
              <div className="hidden md:block space-y-6 sticky top-24">
                {relatedServices.length > 0 && (
                  <div className="bg-white border border-[#e2e8f0] rounded-2xl p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-3">
                      Related Services
                    </p>
                    <div className="space-y-2">
                      {relatedServices.slice(0, 4).map((sv) => {
                        const svc = siteConfig.services.find((x) => x.id === sv.id);
                        const Icon = svc?.icon;
                        return (
                          <Link
                            key={sv.slug}
                            href={`/services/${sv.slug}`}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#f0f9ff] transition-colors group"
                          >
                            {Icon && (
                              <div className="w-8 h-8 rounded-lg bg-[#f0f7ff] flex items-center justify-center flex-shrink-0">
                                <Icon className="w-4 h-4 text-[#0ea5e9]" />
                              </div>
                            )}
                            <span className="text-sm font-medium text-[#1e3a5f] group-hover:text-[#0ea5e9] transition-colors">
                              {sv.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Mobile form */}
        {primaryService && (
          <section className="section-py md:hidden" style={{ background: "linear-gradient(160deg, #dbeafe 0%, #e0f2fe 50%, #f0fdf4 100%)" }}>
            <div className="max-w-lg mx-auto page-px">
              <ServiceQuoteForm serviceId={primaryService.id} serviceName={primaryService.name} />
            </div>
          </section>
        )}
      </main>
    </>
  );
}
