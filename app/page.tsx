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
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e2e8f0] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2">
              <Icon className="w-6 h-6" style={{ color: "var(--cp)" }} />
              <span
                style={{ fontFamily: "var(--font-display)", color: "var(--cd)" }}
                className="font-bold text-lg tracking-tight"
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
              className="text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm nav-cta-btn"
            >
              {siteConfig.cta.text}
            </a>
          </div>
          {/* Mobile section links — scrollable pill row, hidden on md+ */}
          <div className="flex md:hidden items-center gap-2 pb-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {[
              ["Services", "#services"],
              ["How It Works", "#how-it-works"],
              ["Reviews", "#reviews"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="flex-shrink-0 text-xs font-medium text-[#475569] hover:text-[#1e3a5f] px-3 py-1.5 rounded-full bg-[#f1f5f9] hover:bg-[#e2e8f0] transition-colors whitespace-nowrap"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative w-full flex items-center hero-clip" style={{ minHeight: "clamp(480px, 60vh, 720px)" }}>
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

        <div className="relative z-10 max-w-6xl mx-auto w-full page-px" style={{ paddingTop: "clamp(3rem, 8vw, 6rem)", paddingBottom: "clamp(3rem, 8vw, 6rem)" }}>
          <div className="max-w-xl">
            <div
              className="animate-fade-in-up inline-flex items-center gap-2 bg-white/10 border border-white/20 text-sm font-medium px-4 py-2 rounded-full mb-7 backdrop-blur-sm"
              style={{ color: "var(--cp-l)", maxWidth: "100%" }}
            >
              <Star className="w-3.5 h-3.5 fill-current flex-shrink-0" />
              <span className="truncate">{hero.badge}</span>
            </div>

            <h1
              style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-hero)" }}
              className="animate-fade-in-up animate-delay-1 font-bold text-white leading-[1.05] mb-5 tracking-tight"
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

            <p className="animate-fade-in-up animate-delay-2 text-white/80 mb-8 leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.5vw + 0.4rem, 1.125rem)" }}>
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
      <section className="bg-white border-b border-[#e2e8f0]" style={{ paddingBlock: "clamp(0.875rem, 2vw, 1.25rem)" }}>
        <div className="max-w-6xl mx-auto page-px">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-0 md:divide-x md:divide-[#e2e8f0]">
            {stats.map(({ icon: StatIcon, value, label }) => (
              <div key={label} className="flex items-center justify-center gap-3 md:px-4">
                <StatIcon className="flex-shrink-0" style={{ width: "clamp(1rem, 2vw, 1.25rem)", height: "clamp(1rem, 2vw, 1.25rem)", color: "var(--cp)" }} />
                <div>
                  <div
                    style={{ fontFamily: "var(--font-display)", color: "var(--cd)", fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
                    className="font-bold leading-tight"
                  >
                    {value}
                  </div>
                  <div className="text-[#64748b]" style={{ fontSize: "clamp(0.65rem, 1vw, 0.75rem)" }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES + QUOTE (client boundary) ──────────────── */}
      <ServicesAndQuote />

      {/* ── HOW IT WORKS ────────────────────────────────────── */}
      <section id="how-it-works" className="section-py bg-white">
        <div className="max-w-6xl mx-auto page-px">
          <div className="text-center heading-mb">
            <h2
              style={{ fontFamily: "var(--font-display)", color: "var(--cd)", fontSize: "var(--fs-display)" }}
              className="font-bold mb-3"
            >
              How It Works
            </h2>
            <p className="text-[#64748b]" style={{ fontSize: "clamp(0.95rem, 1.5vw + 0.3rem, 1.125rem)" }}>Three simple steps to a cleaner home</p>
          </div>

          <div className="relative" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "clamp(0.875rem, 2.5vw, 1.5rem)" }}>
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
                className="relative flex flex-col items-center text-center rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#0ea5e9]/30 hover:shadow-md transition-all card-pad"
              >
                <span
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                  className="absolute top-4 right-5 font-bold text-[#e2e8f0] select-none leading-none"
                >
                  {item.step}
                </span>
                <div className="mb-4" style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)" }}>{item.emoji}</div>
                <h3
                  style={{ fontFamily: "var(--font-display)", color: "var(--cd)", fontSize: "var(--fs-title)" }}
                  className="font-bold mb-2"
                >
                  {item.title}
                </h3>
                <p className="text-[#64748b] leading-relaxed" style={{ fontSize: "var(--fs-body)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────── */}
      <section id="reviews" className="section-py" style={{ backgroundColor: "var(--cl)" }}>
        <div className="max-w-6xl mx-auto page-px">
          <div className="text-center heading-mb">
            <h2
              style={{ fontFamily: "var(--font-display)", color: "var(--cd)", fontSize: "var(--fs-display)" }}
              className="font-bold mb-4"
            >
              What Homeowners Say
            </h2>
            <div className="flex justify-center items-center gap-1 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#f59e0b] fill-[#f59e0b]" />
              ))}
            </div>
            <p className="text-[#64748b]" style={{ fontSize: "var(--fs-body)" }}>
              <strong style={{ color: "var(--cd)" }}>4.9 / 5</strong> from 2,400+ verified reviews
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "clamp(0.875rem, 2.5vw, 1.5rem)" }}>
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-2xl shadow-sm border border-[#e2e8f0] flex flex-col card-pad"
              >
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]" />
                  ))}
                </div>
                <p className="text-[#475569] leading-relaxed italic flex-1 mb-6" style={{ fontSize: "var(--fs-body)" }}>
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
      <section id="faq" className="section-py bg-white">
        <div className="max-w-3xl mx-auto page-px">
          <div className="text-center heading-mb">
            <h2
              style={{ fontFamily: "var(--font-display)", color: "var(--cd)", fontSize: "var(--fs-display)" }}
              className="font-bold mb-3"
            >
              Common Questions
            </h2>
            <p className="text-[#64748b]" style={{ fontSize: "var(--fs-body)" }}>
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
