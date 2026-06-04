import Image from "next/image";
import {
  Droplets,
  Star,
  CheckCircle,
  Clock,
  Shield,
  ChevronDown,
  Users,
  Zap,
  BadgeCheck,
} from "lucide-react";
import ServicesAndQuote from "@/components/ServicesAndQuote";
import HeroZipInput from "@/components/HeroZipInput";

const reviews = [
  {
    name: "Sarah M.",
    city: "Charlotte, NC",
    initials: "SM",
    text: "Found an amazing pro through WashPro in under 10 minutes. My driveway looks brand new — got 3 quotes and the pricing was super competitive.",
  },
  {
    name: "James T.",
    city: "Nashville, TN",
    initials: "JT",
    text: "Had a vetted pro at my house the next morning. House siding looks incredible. The whole process was way easier than I expected.",
  },
  {
    name: "Linda R.",
    city: "Austin, TX",
    initials: "LR",
    text: "My deck hasn't looked this good in years. WashPro matched me with a fantastic local company — great pricing, great work, zero hassle.",
  },
];

const faqItems = [
  {
    q: "How much does power washing typically cost?",
    a: "Costs vary by surface size and type. Driveways typically run $100–$250, house exteriors $200–$500, and decks $150–$350. Getting multiple quotes through WashPro ensures you get the best rate for your area.",
  },
  {
    q: "How often should I have my home power washed?",
    a: "Most homes benefit from annual or bi-annual service. Humid climates, homes near trees, or north-facing surfaces may need more frequent cleaning. Driveways typically need washing every 1–2 years.",
  },
  {
    q: "Are pros on WashPro Directory licensed and insured?",
    a: "Yes. All pros carry appropriate business licensing and liability insurance. We verify credentials before any provider is listed on our platform — your home is protected.",
  },
  {
    q: "How long does power washing take?",
    a: "A typical home exterior takes 2–4 hours. Driveways and decks usually take 1–2 hours each. Your matched pro will provide a time estimate with their quote.",
  },
  {
    q: "Is power washing safe for plants and landscaping?",
    a: "Experienced pros take precautions: wetting plants before and after, using eco-friendly detergents, and directing spray away from beds. Ask your pro about their specific approach.",
  },
];

const stats = [
  { icon: Users, value: "12,000+", label: "Homeowners Served" },
  { icon: Star, value: "4.8 / 5", label: "Average Rating" },
  { icon: Zap, value: "< 24 hrs", label: "Avg. Response Time" },
  { icon: BadgeCheck, value: "100%", label: "Free & No Obligation" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Droplets className="w-7 h-7 text-[#0ea5e9]" />
            <span style={{ fontFamily: "var(--font-display)" }} className="font-bold text-xl text-[#1e3a5f] tracking-tight">
              WashPro <span className="text-[#0ea5e9]">Directory</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {[["Services", "#services"], ["How It Works", "#how-it-works"], ["Reviews", "#reviews"]].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-[#475569] hover:text-[#1e3a5f] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="#quote-form"
            className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            Get Free Quote
          </a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[580px] md:min-h-[660px] flex items-center hero-clip">
        <Image
          src="/hero-wash.jpg"
          alt="Professional power washing a house exterior"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/92 via-[#1e3a5f]/70 to-[#1e3a5f]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#152c48]/40 via-transparent to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="max-w-xl">
            <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#38bdf8] text-sm font-medium px-4 py-2 rounded-full mb-7 backdrop-blur-sm">
              <Star className="w-3.5 h-3.5 fill-current" />
              Rated 4.9 / 5 by 2,400+ homeowners
            </div>

            <h1
              style={{ fontFamily: "var(--font-display)" }}
              className="animate-fade-in-up animate-delay-1 text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-5 tracking-tight"
            >
              Get Your Property
              <br />
              <span className="text-[#38bdf8]">Power Washed</span>
              <br />
              Today
            </h1>

            <p className="animate-fade-in-up animate-delay-2 text-lg text-white/80 mb-8 leading-relaxed">
              Trusted local pros · Fast quotes · No obligation
            </p>

            {/* ZIP Input — client component */}
            <div className="animate-fade-in-up animate-delay-3">
              <HeroZipInput />
            </div>

            {/* Trust signals */}
            <div className="animate-fade-in-up animate-delay-4 flex flex-wrap gap-x-6 gap-y-3 mt-8">
              {[
                { icon: CheckCircle, label: "Licensed & Insured Pros" },
                { icon: Clock, label: "Quotes in 24 Hours" },
                { icon: Shield, label: "100% Free Service" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-white/70 text-sm">
                  <Icon className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
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
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center justify-center gap-3 px-4">
                <Icon className="w-5 h-5 text-[#0ea5e9] flex-shrink-0" />
                <div>
                  <div
                    style={{ fontFamily: "var(--font-display)" }}
                    className="text-xl font-bold text-[#1e3a5f] leading-tight"
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
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-3"
            >
              How It Works
            </h2>
            <p className="text-[#64748b] text-lg">Three simple steps to a cleaner home</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-14 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-transparent via-[#0ea5e9]/30 to-transparent" />
            {[
              { step: "01", emoji: "📋", title: "Tell Us About Your Job", desc: "Fill out our quick form with details about your property and the services you need." },
              { step: "02", emoji: "🔍", title: "Get Matched With Local Pros", desc: "We connect you with up to 3 vetted, top-rated power washing professionals in your area." },
              { step: "03", emoji: "✅", title: "Compare Quotes & Choose", desc: "Review quotes, read real reviews, and hire the pro that fits your schedule and budget." },
            ].map((item) => (
              <div key={item.step} className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#0ea5e9]/30 hover:shadow-md transition-all">
                <span style={{ fontFamily: "var(--font-display)" }} className="absolute top-5 right-6 text-5xl font-bold text-[#e2e8f0] select-none">{item.step}</span>
                <div className="text-5xl mb-5">{item.emoji}</div>
                <h3 style={{ fontFamily: "var(--font-display)" }} className="text-xl font-bold text-[#1e3a5f] mb-3">{item.title}</h3>
                <p className="text-[#64748b] leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────── */}
      <section id="reviews" className="py-24 bg-[#eef4fb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
              What Homeowners Say
            </h2>
            <div className="flex justify-center items-center gap-1 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#f59e0b] fill-[#f59e0b]" />
              ))}
            </div>
            <p className="text-[#64748b]">
              <strong className="text-[#1e3a5f]">4.9 / 5</strong> from 2,400+ verified reviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="bg-white rounded-2xl p-7 shadow-sm border border-[#e2e8f0] flex flex-col">
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]" />
                  ))}
                </div>
                <p className="text-[#475569] leading-relaxed text-[0.95rem] italic flex-1 mb-6">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#f1f5f9]">
                  <div className="w-10 h-10 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1e3a5f] text-sm">{review.name}</p>
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
            <h2 style={{ fontFamily: "var(--font-display)" }} className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-3">
              Common Questions
            </h2>
            <p className="text-[#64748b]">Everything you need to know about power washing</p>
          </div>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="group border border-[#e2e8f0] rounded-xl overflow-hidden">
                <summary className="flex justify-between items-center gap-4 px-6 py-4 cursor-pointer list-none font-semibold text-[#1e3a5f] hover:bg-[#f8fafc] transition-colors">
                  <span>{item.q}</span>
                  <ChevronDown className="faq-arrow w-5 h-5 text-[#0ea5e9] flex-shrink-0" />
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
      <footer className="bg-[#1e3a5f] text-white/60 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Droplets className="w-5 h-5 text-[#0ea5e9]" />
            <span style={{ fontFamily: "var(--font-display)" }} className="font-bold text-white text-lg">
              WashPro <span className="text-[#0ea5e9]">Directory</span>
            </span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} WashPro Directory. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
