import Image from "next/image";
import { Star, ChevronDown } from "lucide-react";
import ServicesAndQuote from "@/components/ServicesAndQuote";
import HeroZipInput from "@/components/HeroZipInput";
import { siteConfig } from "@/config/site";

const { hero, stats, reviews, faqs, colors: c } = siteConfig;
const Icon = siteConfig.icon;
const brandFull = `${siteConfig.brand} ${siteConfig.brandSuffix}`;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e2e8f0] shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Icon className="w-7 h-7" style={{ color: "var(--cp)" }} />
            <span
              style={{ fontFamily: "var(--font-display)", color: "var(--cd)" }}
              className="font-bold text-xl tracking-tight"
            >
              {siteConfig.brand}{" "}
              <span style={{ color: "var(--cp)" }}>{siteConfig.brandSuffix}</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {[
              ["Services", "#services"],
              ["How It Works", "#how-it-works"],
              ["Reviews", "#reviews"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-[#475569] hover:text-[var(--cd)] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="#quote-form"
            className="text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm nav-cta-btn"
          >
            {siteConfig.cta.text}
          </a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[580px] md:min-h-[660px] flex items-center hero-clip">
        <Image
          src="/hero-wash.jpg"
          alt={`Professional ${siteConfig.verticalProNoun}`}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, color-mix(in srgb, var(--cd) 92%, transparent), color-mix(in srgb, var(--cd) 70%, transparent), color-mix(in srgb, var(--cd) 30%, transparent))`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, color-mix(in srgb, var(--cd-d) 40%, transparent), transparent, transparent)`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="max-w-xl">
            <div
              className="animate-fade-in-up inline-flex items-center gap-2 bg-white/10 border border-white/20 text-sm font-medium px-4 py-2 rounded-full mb-7 backdrop-blur-sm"
              style={{ color: "var(--cp-l)" }}
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              {hero.badge}
            </div>

            <h1
              style={{ fontFamily: "var(--font-display)" }}
              className="animate-fade-in-up animate-delay-1 text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-5 tracking-tight"
            >
              {hero.headlineLines.map((line, i) => (
                <span key={i}>
                  {line.highlight ? (
                    <span style={{ color: "var(--cp-l)" }}>{line.text}</span>
                  ) : (
                    line.text
                  )}
                  {i < hero.headlineLines.length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p className="animate-fade-in-up animate-delay-2 text-lg text-white/80 mb-8 leading-relaxed">
              {hero.subtext}
            </p>

            <div className="animate-fade-in-up animate-delay-3">
              <HeroZipInput />
            </div>

            <div className="animate-fade-in-up animate-delay-4 flex flex-wrap gap-x-6 gap-y-3 mt-8">
              {hero.trustSignals.map(({ icon: TrustIcon, label }) => (
                <div key={label} className="flex items-center gap-2 text-white/70 text-sm">
                  <TrustIcon
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "var(--cp-l)" }}
                  />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────────── */}
      <section className="bg-white border-b border-[#e2e8f0] py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-[#e2e8f0]">
            {stats.map(({ icon: StatIcon, value, label }) => (
              <div key={label} className="flex items-center justify-center gap-3 px-4">
                <StatIcon className="w-5 h-5 flex-shrink-0" style={{ color: "var(--cp)" }} />
                <div>
                  <div
                    style={{ fontFamily: "var(--font-display)", color: "var(--cd)" }}
                    className="text-xl font-bold leading-tight"
                  >
                    {value}
                  </div>
                  <div className="text-xs text-[#64748b]">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES + QUOTE (client boundary) ──────────────── */}
      <ServicesAndQuote />

      {/* ── HOW IT WORKS ────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2
              style={{ fontFamily: "var(--font-display)", color: "var(--cd)" }}
              className="text-4xl md:text-5xl font-bold mb-3"
            >
              How It Works
            </h2>
            <p className="text-[#64748b] text-lg">Three simple steps to a cleaner home</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div
              className="hidden md:block absolute top-14 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px"
              style={{ background: `linear-gradient(to right, transparent, color-mix(in srgb, var(--cp) 30%, transparent), transparent)` }}
            />
            {[
              {
                step: "01",
                emoji: "📋",
                title: "Tell Us About Your Job",
                desc: `Fill out our quick form with details about your property and the ${siteConfig.verticalName.toLowerCase()} services you need.`,
              },
              {
                step: "02",
                emoji: "🔍",
                title: "Get Matched With Local Pros",
                desc: `We connect you with up to 3 vetted, top-rated ${siteConfig.verticalProNoun} in your area.`,
              },
              {
                step: "03",
                emoji: "✅",
                title: "Compare Quotes & Choose",
                desc: "Review quotes, read real reviews, and hire the pro that fits your schedule and budget.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#0ea5e9]/30 hover:shadow-md transition-all"
              >
                <span
                  style={{ fontFamily: "var(--font-display)" }}
                  className="absolute top-5 right-6 text-5xl font-bold text-[#e2e8f0] select-none"
                >
                  {item.step}
                </span>
                <div className="text-5xl mb-5">{item.emoji}</div>
                <h3
                  style={{ fontFamily: "var(--font-display)", color: "var(--cd)" }}
                  className="text-xl font-bold mb-3"
                >
                  {item.title}
                </h3>
                <p className="text-[#64748b] leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────── */}
      <section id="reviews" className="py-24" style={{ backgroundColor: "var(--cl)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2
              style={{ fontFamily: "var(--font-display)", color: "var(--cd)" }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              What Homeowners Say
            </h2>
            <div className="flex justify-center items-center gap-1 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#f59e0b] fill-[#f59e0b]" />
              ))}
            </div>
            <p className="text-[#64748b]">
              <strong style={{ color: "var(--cd)" }}>4.9 / 5</strong> from 2,400+ verified reviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-2xl p-7 shadow-sm border border-[#e2e8f0] flex flex-col"
              >
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]" />
                  ))}
                </div>
                <p className="text-[#475569] leading-relaxed text-[0.95rem] italic flex-1 mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#f1f5f9]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: "var(--cd)" }}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "var(--cd)" }}>
                      {review.name}
                    </p>
                    <p className="text-[#94a3b8] text-xs">{review.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2
              style={{ fontFamily: "var(--font-display)", color: "var(--cd)" }}
              className="text-4xl md:text-5xl font-bold mb-3"
            >
              Common Questions
            </h2>
            <p className="text-[#64748b]">
              Everything you need to know about {siteConfig.verticalName.toLowerCase()}
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group border border-[#e2e8f0] rounded-xl overflow-hidden"
              >
                <summary
                  className="flex justify-between items-center gap-4 px-6 py-4 cursor-pointer list-none font-semibold hover:bg-[#f8fafc] transition-colors"
                  style={{ color: "var(--cd)" }}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className="faq-arrow w-5 h-5 flex-shrink-0"
                    style={{ color: "var(--cp)" }}
                  />
                </summary>
                <div className="px-6 pb-5 pt-2 text-[#64748b] leading-relaxed border-t border-[#e2e8f0] bg-[#f8fafc] text-sm">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="text-white/60 py-10" style={{ backgroundColor: "var(--cd)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Icon className="w-5 h-5" style={{ color: "var(--cp)" }} />
            <span style={{ fontFamily: "var(--font-display)" }} className="font-bold text-white text-lg">
              {siteConfig.brand}{" "}
              <span style={{ color: "var(--cp)" }}>{siteConfig.brandSuffix}</span>
            </span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} {brandFull}. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <a key={link} href="#" className="hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
