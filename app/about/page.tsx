import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Users, Star, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";

const brand = `${siteConfig.brand} ${siteConfig.brandSuffix}`;
const domain = siteConfig.domain;

export const metadata: Metadata = {
  title: `About Us | ${brand}`,
  description: `${brand} helps homeowners find trusted, licensed ${siteConfig.verticalProNoun} near them. Free quotes, verified reviews, no obligation.`,
};

const steps = [
  { n: "1", title: "Search your area", body: "Enter your ZIP code or city to browse local pros near you." },
  { n: "2", title: "Compare listings",  body: "Review ratings, verified credentials, and services offered." },
  { n: "3", title: "Get free quotes",   body: "Submit one request — receive quotes from multiple local pros, no obligation." },
];

export default function AboutPage() {
  const { colors: c } = siteConfig;

  return (
    <main>
      {/* Hero */}
      <section className="py-16 px-6 text-center text-white" style={{ background: `linear-gradient(135deg, ${c.darkDeep}, ${c.dark})` }}>
        <Link href="/" className="text-sm mb-6 inline-block opacity-75 hover:opacity-100 text-white">
          ← Back to home
        </Link>
        <h1 className="text-4xl font-bold mb-4">{brand}</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Connecting homeowners with trusted, local {siteConfig.verticalProNoun} — fast, free, and no obligation.
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold mb-4" style={{ color: c.dark }}>Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          Finding a reliable {siteConfig.verticalName.toLowerCase()} professional shouldn&apos;t be a
          chore. {brand} is a free directory that makes it easy to discover licensed,
          insured pros in your area, compare real customer reviews, and get multiple quotes
          without the runaround. We believe every homeowner deserves quality service at a
          fair price — and that starts with being able to find the right pro quickly.
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
                <p className="text-sm text-gray-600">{s.body}</p>
              </div>
            ))}
          </div>
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
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* For pros */}
      <section className="py-14 px-6" style={{ background: c.lightBg }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4" style={{ color: c.dark }}>Are You a Pro?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            If you&apos;re a {siteConfig.verticalName.toLowerCase()} professional and want to be listed
            in our directory, reach out. Basic listings are free — we&apos;re building the
            largest, most accurate directory of {siteConfig.verticalProNoun} in the US.
          </p>
          <a
            href={`mailto:pros@${domain}`}
            className="inline-block px-6 py-3 rounded-lg text-white font-semibold text-sm"
            style={{ background: c.primary }}
          >
            Contact Us to Get Listed
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-bold mb-4" style={{ color: c.dark }}>Contact Us</h2>
        <div className="space-y-3 text-gray-600">
          <p>
            <strong>General inquiries:</strong>{" "}
            <a href={`mailto:hello@${domain}`} style={{ color: c.primary }}>hello@{domain}</a>
          </p>
          <p>
            <strong>Privacy requests:</strong>{" "}
            <a href={`mailto:privacy@${domain}`} style={{ color: c.primary }}>privacy@{domain}</a>
          </p>
          <p>
            <strong>Pro listings:</strong>{" "}
            <a href={`mailto:pros@${domain}`} style={{ color: c.primary }}>pros@{domain}</a>
          </p>
        </div>
      </section>
    </main>
  );
}
