import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Clock, DollarSign, RefreshCw, ChevronRight } from "lucide-react";
import { servicesContent, getServiceContent } from "@/config/services-content";
import { guidesContent } from "@/config/guides-content";
import { siteConfig } from "@/config/site";
import ServiceQuoteForm from "@/components/ServiceQuoteForm";
import AdUnit from "@/components/AdUnit";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${siteConfig.domain}`;

export function generateStaticParams() {
  return servicesContent.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getServiceContent(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.metaDescription,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: `${BASE_URL}/services/${s.slug}` },
    openGraph: {
      title: s.title,
      description: s.metaDescription,
      url: `${BASE_URL}/services/${s.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getServiceContent(slug);
  if (!s) notFound();

  const relatedGuides = guidesContent.filter((g) => s.relatedGuides.includes(g.slug));
  const relatedServices = servicesContent.filter(
    (sv) => s.relatedServices.includes(sv.slug) && sv.slug !== s.slug
  );
  const siteService = siteConfig.services.find((sv) => sv.id === s.id);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
      { "@type": "ListItem", position: 3, name: s.name },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.metaDescription,
    provider: {
      "@type": "Organization",
      name: `${siteConfig.brand} ${siteConfig.brandSuffix}`,
      url: BASE_URL,
    },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: s.name,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main>
        {/* ── Hero ── */}
        <section className="section-py bg-white border-b border-[#e2e8f0]">
          <div className="max-w-5xl mx-auto page-px">
            <nav className="text-xs text-[#64748b] mb-4 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-[#1e3a5f] transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/services" className="hover:text-[#1e3a5f] transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#1e3a5f] font-medium">{s.name}</span>
            </nav>

            <div className="grid md:grid-cols-[1fr_360px] gap-10 items-start">
              <div>
                {siteService && (
                  <div className="w-12 h-12 rounded-2xl bg-[#f0f7ff] flex items-center justify-center mb-4">
                    <siteService.icon className="w-6 h-6 text-[#0ea5e9]" />
                  </div>
                )}
                <h1
                  className="font-bold text-[#1e3a5f] mb-3"
                  style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-display)" }}
                >
                  {s.headline}
                </h1>
                <p className="text-[#64748b] text-lg leading-relaxed mb-6">{s.subheadline}</p>

                {/* Quick stats */}
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: DollarSign, label: "Typical cost", value: s.quickStats.costRange },
                    { icon: Clock, label: "Job duration", value: s.quickStats.duration },
                    { icon: RefreshCw, label: "How often", value: s.quickStats.frequency },
                  ].map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-4 py-2.5"
                    >
                      <div className="w-7 h-7 rounded-full bg-[#dbeafe] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 text-[#1e3a5f]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#64748b]">{label}</p>
                        <p className="text-sm font-semibold text-[#1e3a5f]">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form — desktop sticky */}
              <div className="hidden md:block sticky top-24">
                <ServiceQuoteForm serviceId={s.id} serviceName={s.name} />
              </div>
            </div>
          </div>
        </section>

        {/* ── Content ── */}
        <section className="section-py bg-[#f8fafc]">
          <div className="max-w-5xl mx-auto page-px">
            <div className="grid md:grid-cols-[1fr_360px] gap-10 items-start">
              <div className="space-y-8">
                {/* Intro */}
                <p className="text-[#475569] leading-relaxed text-lg">{s.intro}</p>

                {/* Sections */}
                {s.sections.map((section, si) => (
                  <div key={section.heading}>
                    {si === 1 && (
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
                  </div>
                ))}

                <AdUnit slot="9977465932" format="fluid" layout="in-article" />

                {/* FAQs */}
                {s.faqs.length > 0 && (
                  <div>
                    <h2
                      className="font-bold text-[#1e3a5f] mb-4"
                      style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-title)" }}
                    >
                      Common Questions About {s.name}
                    </h2>
                    <div className="space-y-3">
                      {s.faqs.map((faq) => (
                        <details
                          key={faq.q}
                          className="group border border-[#e2e8f0] rounded-xl overflow-hidden bg-white"
                        >
                          <summary className="flex justify-between items-center gap-4 px-5 py-4 cursor-pointer list-none font-semibold text-[#1e3a5f] hover:bg-[#f8fafc] transition-colors">
                            {faq.q}
                          </summary>
                          <div className="px-5 pb-4 pt-2 text-[#64748b] leading-relaxed text-sm border-t border-[#e2e8f0] bg-[#f8fafc]">
                            {faq.a}
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                )}

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
                      {relatedGuides.map((guide) => (
                        <Link
                          key={guide.slug}
                          href={`/guides/${guide.slug}`}
                          className="flex items-center gap-3 p-4 bg-white border border-[#e2e8f0] rounded-xl hover:border-[#0ea5e9] transition-all group"
                        >
                          <div className="flex-1">
                            <p className="font-semibold text-[#1e3a5f] group-hover:text-[#0ea5e9] transition-colors text-sm">
                              {guide.headline}
                            </p>
                            <p className="text-xs text-[#64748b] mt-0.5">{guide.readTime}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-[#94a3b8] group-hover:text-[#0ea5e9] transition-colors flex-shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar placeholder for desktop — form is above */}
              <div className="hidden md:block" />
            </div>
          </div>
        </section>

        {/* ── Mobile form ── */}
        <section className="section-py md:hidden" style={{ background: "linear-gradient(160deg, #dbeafe 0%, #e0f2fe 50%, #f0fdf4 100%)" }}>
          <div className="max-w-lg mx-auto page-px">
            <ServiceQuoteForm serviceId={s.id} serviceName={s.name} />
          </div>
        </section>

        {/* ── Related services ── */}
        {relatedServices.length > 0 && (
          <section className="section-py bg-white border-t border-[#e2e8f0]">
            <div className="max-w-5xl mx-auto page-px">
              <h2
                className="font-bold text-[#1e3a5f] mb-6"
                style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-title)" }}
              >
                Related Services
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedServices.map((sv) => {
                  const svc = siteConfig.services.find((x) => x.id === sv.id);
                  const Icon = svc?.icon;
                  return (
                    <Link
                      key={sv.slug}
                      href={`/services/${sv.slug}`}
                      className="group flex items-center gap-3 p-4 border border-[#e2e8f0] rounded-xl hover:border-[#0ea5e9] hover:shadow-sm transition-all"
                    >
                      {Icon && (
                        <div className="w-9 h-9 rounded-xl bg-[#f0f7ff] group-hover:bg-[#e0f2fe] flex items-center justify-center flex-shrink-0 transition-colors">
                          <Icon className="w-4.5 h-4.5 text-[#0ea5e9]" />
                        </div>
                      )}
                      <span className="font-semibold text-[#1e3a5f] text-sm group-hover:text-[#0ea5e9] transition-colors">
                        {sv.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
