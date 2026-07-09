import Link from "next/link";
import type { Metadata } from "next";
import { Clock, ChevronRight } from "lucide-react";
import { guidesContent } from "@/config/guides-content";
import { siteConfig } from "@/config/site";
import AdUnit from "@/components/AdUnit";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${siteConfig.domain}`;

export const metadata: Metadata = {
  title: "Power Washing Guides & Tips | WashPro Directory",
  description:
    "Free guides for homeowners on power washing costs, soft vs pressure washing, roof algae removal, best timing, and how to vet a contractor. Written by industry experts.",
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `${BASE_URL}/guides` },
  openGraph: {
    title: "Power Washing Guides & Tips | WashPro Directory",
    description: "Free homeowner guides on power washing costs, methods, timing, and hiring the right pro.",
    url: `${BASE_URL}/guides`,
    type: "website",
  },
};

export default function GuidesIndexPage() {
  return (
    <main>
      <section className="section-py bg-white border-b border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto page-px">
          <nav className="text-xs text-[#64748b] mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-[#1e3a5f] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#1e3a5f] font-medium">Guides</span>
          </nav>
          <h1
            className="font-bold text-[#1e3a5f] mb-3"
            style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-display)" }}
          >
            Power Washing Guides
          </h1>
          <p className="text-[#64748b] max-w-2xl" style={{ fontSize: "var(--fs-body)" }}>
            Everything a homeowner needs to know about exterior cleaning — costs, methods, timing, and choosing the right pro.
          </p>
        </div>
      </section>

      <section className="section-py bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto page-px">
          <AdUnit slot="5303723755" className="mb-8" />
          <div className="space-y-4">
            {guidesContent.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group block bg-white border border-[#e2e8f0] rounded-2xl p-6 hover:border-[#0ea5e9] hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2
                      className="font-bold text-[#1e3a5f] group-hover:text-[#0ea5e9] transition-colors mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {guide.headline}
                    </h2>
                    <p className="text-[#64748b] text-sm leading-relaxed line-clamp-2">{guide.intro}</p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-[#94a3b8]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {guide.readTime}
                      </span>
                      <span>Updated {guide.updatedDate}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#94a3b8] group-hover:text-[#0ea5e9] transition-colors flex-shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
