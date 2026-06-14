import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Shield, BookOpen, Users, Star, Clock, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const brand = `${siteConfig.brand} ${siteConfig.brandSuffix}`;
const domain = siteConfig.domain;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${siteConfig.domain}`;

export const metadata: Metadata = {
  title: `About ${brand} — How We Vet Pros & Build Our Directory`,
  description: `Learn how ${brand} verifies licensing, insurance, and reviews for every listed contractor. Free directory connecting homeowners with trusted local power washing pros.`,
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: `About ${brand} — How We Vet Pros & Build Our Directory`,
    description: `Learn how ${brand} verifies licensing, insurance, and reviews for every listed contractor. Free directory connecting homeowners with trusted local power washing pros.`,
    url: `${SITE_URL}/about`,
    type: "website",
  },
};

const steps = [
  { n: "1", title: "Search your area", body: "Enter your ZIP code or city to browse local pros near you." },
  { n: "2", title: "Compare listings",  body: "Review ratings, verified credentials, and services offered." },
  { n: "3", title: "Get free quotes",   body: "Submit one request — receive quotes from multiple local pros, no obligation." },
];

const vettingSteps = [
  {
    icon: Shield,
    title: "License & insurance check",
    body: "We verify that listed contractors hold a valid state or local business license and carry general liability insurance. Unlicensed or uninsured companies are not listed.",
  },
  {
    icon: Star,
    title: "Review aggregation",
    body: "We pull ratings and reviews from multiple public sources (Google, Yelp, BBB). We do not manufacture or solicit reviews — what you see reflects real customer experience.",
  },
  {
    icon: CheckCircle,
    title: "Active business verification",
    body: "We check that the business has a verifiable address, working phone number, and has been active within the past 12 months. Closed or dormant companies are removed.",
  },
  {
    icon: Clock,
    title: "Ongoing monitoring",
    body: "Listings are reviewed periodically. If a contractor accumulates unresolved complaints, loses their license, or goes out of business, they are removed or marked inactive.",
  },
];

const editorialStandards = [
  "All cost figures in our guides are sourced from contractor surveys, public pricing databases, and industry trade associations — not invented.",
  "Guides are updated at least annually; the \"Last updated\" date on each article reflects actual content review, not automated timestamps.",
  "We do not accept payment for editorial coverage. A contractor cannot pay to improve their editorial ranking or appear in our guides.",
  "Sponsored or featured listings are clearly labeled. Organic directory rankings are based solely on verified data quality and completeness.",
];

export default function AboutPage() {
  const { colors: c } = siteConfig;

  return (
    <main>
      {/* Hero */}
      <section className="py-16 px-6 text-white" style={{ background: `linear-gradient(135deg, ${c.darkDeep}, ${c.dark})` }}>
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs mb-6 flex items-center gap-2 opacity-70">
            <Link href="/" className="hover:opacity-100 text-white transition-opacity">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span>About</span>
          </nav>
          <h1 className="text-4xl font-bold mb-4">{brand}</h1>
          <p className="text-lg max-w-2xl opacity-90 leading-relaxed">
            A free directory connecting homeowners with licensed, insured local power washing professionals.
            We verify every listing — you compare and choose with confidence.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold mb-4" style={{ color: c.dark }}>What We Do</h2>
        <p className="text-[#475569] leading-relaxed mb-4">
          {brand} is an independent directory of power washing and exterior cleaning contractors across the United States.
          Our goal is simple: make it easy for homeowners to find a legitimate, qualified local pro without spending hours
          on Google or worrying about who to trust.
        </p>
        <p className="text-[#475569] leading-relaxed mb-4">
          We are not a contractor and we do not perform any cleaning services. We are not affiliated with any of the
          companies listed in our directory. We earn revenue from display advertising — not from contractor referral fees
          or lead selling — which means our editorial rankings are not influenced by money.
        </p>
        <p className="text-[#475569] leading-relaxed">
          Every company in our directory has passed a basic verification process (see below). Homeowners can request
          quotes for free with no obligation.
        </p>
      </section>

      {/* How it works */}
      <section className="py-14 px-6" style={{ background: c.lightBg }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: c.dark }}>How It Works</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                  style={{ background: c.primary }}
                >
                  {s.n}
                </div>
                <h3 className="font-semibold mb-2" style={{ color: c.dark }}>{s.title}</h3>
                <p className="text-sm text-[#64748b]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we vet pros — the differentiator */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold mb-3" style={{ color: c.dark }}>How We Vet Contractors</h2>
        <p className="text-[#475569] leading-relaxed mb-8">
          Not every business that calls itself a "power washing company" is legitimate. We apply a four-step
          verification process before a contractor is listed, and we monitor listings on an ongoing basis.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {vettingSteps.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: c.primaryXLight }}
                >
                  <Icon className="w-4 h-4" style={{ color: c.primary }} />
                </div>
                <h3 className="font-semibold text-[#1e3a5f]">{title}</h3>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-[#64748b] leading-relaxed">
          <strong className="text-[#1e3a5f]">What verification does not cover:</strong> We are not able to
          physically inspect work quality, verify every individual review, or guarantee any specific outcome
          from a contractor you hire. Our verification is a baseline filter — it is not a personal endorsement.
          Always get multiple quotes and check references before hiring.
        </p>
      </section>

      {/* Editorial standards for guides */}
      <section className="py-14 px-6" style={{ background: c.lightBg }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-6 h-6" style={{ color: c.primary }} />
            <h2 className="text-2xl font-bold" style={{ color: c.dark }}>Editorial Standards for Our Guides</h2>
          </div>
          <p className="text-[#475569] leading-relaxed mb-6">
            Our{" "}
            <Link href="/guides" style={{ color: c.primary }} className="hover:underline font-medium">
              power washing guides
            </Link>{" "}
            are written to be genuinely useful to homeowners, not to rank for keywords. We follow these standards:
          </p>
          <ul className="space-y-3">
            {editorialStandards.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#475569] text-sm leading-relaxed">
                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: c.primary }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {siteConfig.stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label}>
                <Icon className="w-6 h-6 mx-auto mb-2" style={{ color: c.primary }} />
                <div className="text-2xl font-bold" style={{ color: c.dark }}>{stat.value}</div>
                <div className="text-xs text-[#64748b] mt-1">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* For pros */}
      <section className="py-14 px-6" style={{ background: c.lightBg }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4" style={{ color: c.dark }}>Are You a Power Washing Pro?</h2>
          <p className="text-[#475569] leading-relaxed mb-4">
            If you run a licensed, insured power washing business and want to be listed in our directory,
            reach out. Basic listings are free. We review each application to confirm licensing and insurance
            before adding a company.
          </p>
          <p className="text-[#475569] leading-relaxed mb-6">
            We are actively expanding to new cities — if your market is not yet listed, let us know.
          </p>
          <a
            href={`mailto:pros@${domain}`}
            className="inline-block px-6 py-3 rounded-lg text-white font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ background: c.primary }}
          >
            Apply to Get Listed
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold mb-4" style={{ color: c.dark }}>Contact Us</h2>
        <div className="space-y-3 text-[#475569]">
          <p>
            <strong className="text-[#1e3a5f]">General inquiries:</strong>{" "}
            <a href={`mailto:hello@${domain}`} style={{ color: c.primary }}>hello@{domain}</a>
          </p>
          <p>
            <strong className="text-[#1e3a5f]">Privacy requests:</strong>{" "}
            <a href={`mailto:privacy@${domain}`} style={{ color: c.primary }}>privacy@{domain}</a>
          </p>
          <p>
            <strong className="text-[#1e3a5f]">Pro listings:</strong>{" "}
            <a href={`mailto:pros@${domain}`} style={{ color: c.primary }}>pros@{domain}</a>
          </p>
        </div>
      </section>
    </main>
  );
}
