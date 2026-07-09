import Link from "next/link";
import type { Metadata } from "next";
import { servicesContent } from "@/config/services-content";
import { siteConfig } from "@/config/site";
import AdUnit from "@/components/AdUnit";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${siteConfig.domain}`;

export const metadata: Metadata = {
  title: "Power Washing Services | WashPro Directory",
  description:
    "Browse all power washing and exterior cleaning services — house soft washing, driveway, deck, roof, gutters, and more. Get free quotes from local licensed pros.",
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: "Power Washing Services | WashPro Directory",
    description: "Browse all exterior cleaning services and get free quotes from licensed local pros.",
    url: `${BASE_URL}/services`,
    type: "website",
  },
};

export default function ServicesIndexPage() {
  return (
    <main>
      {/* Header */}
      <section className="section-py bg-white border-b border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto page-px">
          <nav className="text-xs text-[#64748b] mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-[#1e3a5f] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#1e3a5f] font-medium">Services</span>
          </nav>
          <h1
            className="font-bold text-[#1e3a5f] mb-3"
            style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-display)" }}
          >
            Exterior Cleaning Services
          </h1>
          <p className="text-[#64748b] max-w-2xl" style={{ fontSize: "var(--fs-body)" }}>
            Get free quotes from licensed, insured local pros for any exterior cleaning job. Select a service below to learn more and request quotes.
          </p>
        </div>
      </section>

      {/* Service grid */}
      <section className="section-py bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto page-px">
          <AdUnit slot="5303723755" className="mb-8" />
          <div className="grid sm:grid-cols-2 gap-4">
            {servicesContent.map((s) => {
              const service = siteConfig.services.find((sv) => sv.id === s.id);
              const Icon = service?.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-white border border-[#e2e8f0] rounded-2xl p-6 hover:border-[#0ea5e9] hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    {Icon && (
                      <div className="w-10 h-10 rounded-xl bg-[#f0f7ff] group-hover:bg-[#e0f2fe] flex items-center justify-center flex-shrink-0 transition-colors">
                        <Icon className="w-5 h-5 text-[#0ea5e9]" />
                      </div>
                    )}
                    <div>
                      <h2 className="font-bold text-[#1e3a5f] mb-1" style={{ fontFamily: "var(--font-display)" }}>
                        {s.name}
                      </h2>
                      <p className="text-[#64748b] text-sm leading-relaxed line-clamp-2">{s.intro}</p>
                      <div className="mt-3 flex items-center gap-4 text-xs text-[#64748b]">
                        <span className="font-semibold text-[#0ea5e9]">{s.quickStats.costRange}</span>
                        <span>{s.quickStats.duration}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
