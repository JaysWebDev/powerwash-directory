import Link from "next/link";
import {
  Radar,
  TrendingDown,
  Building2,
  CloudRain,
  ArrowRight,
  Clock,
  MapPin,
  Mail,
} from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";
import MarketPicker from "@/components/MarketPicker";
import { siteConfig } from "@/config/site";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${siteConfig.domain}`;
const PRODUCT = "WashPro Signal";

export const metadata = {
  title: `${PRODUCT} — The Monday brief that tells you where your next job is`,
  description:
    "A weekly local-market brief for outdoor-services pros. Every Monday: new accounts to pitch, competitors slipping, and demand spikes in your service area — so you spend less time prospecting and more time working.",
  alternates: { canonical: `${SITE_URL}/pros` },
  openGraph: {
    title: `${PRODUCT} — Local market intel for outdoor-services pros`,
    description:
      "Every Monday, the 3–5 things that changed in your local market that you can act on this week.",
    url: `${SITE_URL}/pros`,
    type: "website" as const,
  },
};

const SIGNALS = [
  {
    icon: Building2,
    title: "New accounts to pitch",
    body:
      "Fresh commercial properties, new businesses, and management companies appearing in your service area — before your competitors call them.",
  },
  {
    icon: TrendingDown,
    title: "Competitors slipping",
    body:
      "When a nearby competitor's reviews drop or they stop responding, their customers are up for grabs. We flag it the week it happens.",
  },
  {
    icon: CloudRain,
    title: "Demand spikes",
    body:
      "Storms, pollen, and seasonal turns drive washing, gutter, and roof demand. Know which weeks to push promos and where to route crews.",
  },
];

const STEPS = [
  {
    icon: MapPin,
    title: "Tell us your market",
    body: "Your city and what you do. That's it — no dashboards to babysit.",
  },
  {
    icon: Radar,
    title: "We watch it for you",
    body: "We track local listings, reviews, new businesses, and weather across your area every week.",
  },
  {
    icon: Mail,
    title: "You get the delta",
    body: "Monday morning, 3–5 things that actually changed and what to do about each — in a 2-minute read.",
  },
];

export default function ProsLanding() {
  return (
    <main className="flex flex-col flex-1">
      {/* Top bar */}
      <header
        className="w-full page-px py-4 flex items-center justify-between"
        style={{ background: "var(--cd-d)" }}
      >
        <span className="font-display font-extrabold text-white text-xl tracking-tight">
          {PRODUCT}
        </span>
        <Link
          href="/"
          className="text-xs font-semibold transition-colors hover:text-white"
          style={{ color: "var(--cp-xl)" }}
        >
          ← Homeowner directory
        </Link>
      </header>

      {/* Hero */}
      <section
        className="hero-clip page-px section-py text-white"
        style={{
          background: `linear-gradient(160deg, var(--cd) 0%, var(--cd-d) 100%)`,
        }}
      >
        <div className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5"
              style={{ background: "rgba(255,255,255,0.1)", color: "var(--cp-xl)" }}
            >
              <Radar className="w-3.5 h-3.5" /> Early access · Outdoor-services pros
            </span>
            <h1
              className="font-display font-extrabold leading-[1.05] mb-5"
              style={{ fontSize: "var(--fs-hero)" }}
            >
              Stop guessing where
              <br />
              your next job is.
            </h1>
            <p className="text-lg mb-6 max-w-xl" style={{ color: "#cbd5e1" }}>
              {PRODUCT} is the Monday brief for power-washing, gutter, and exterior-cleaning
              crews. Every week we hand you the handful of things that changed in your local
              market — new accounts to pitch, competitors slipping, demand spikes — so you can
              spend less time prospecting and more time working.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-7" style={{ color: "var(--cp-xl)" }}>
              <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" /> 2-minute read</span>
              <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> Built for your city</span>
              <span className="inline-flex items-center gap-2"><Mail className="w-4 h-4" /> Straight to your inbox</span>
            </div>
            <p className="font-semibold mb-3">See what&apos;s moving in your market — free</p>
            <MarketPicker />
          </div>

          <div id="waitlist">
            <p className="font-semibold mb-3 text-center lg:text-left">
              Join the early-access waitlist
            </p>
            <WaitlistForm source="/pros#hero" />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="page-px section-py">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold heading-mb" style={{ fontSize: "var(--fs-display)", color: "var(--cd)" }}>
            You&apos;re great at the work. Prospecting is the part that eats your week.
          </h2>
          <p className="text-lg text-[#64748b]">
            Most owner-operators find new jobs by word of mouth and hope. Meanwhile the commercial
            account that just opened down the road, the competitor whose reviews are tanking, and the
            storm that just soaked half your territory all came and went — and nobody told you in time
            to act. {PRODUCT} is the person whose only job is to watch your market and tap you on the
            shoulder.
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="page-px section-py" style={{ background: "var(--cl)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-center heading-mb" style={{ fontSize: "var(--fs-display)", color: "var(--cd)" }}>
            Three signals, every Monday
          </h2>
          <div className="grid-fluid-3">
            {SIGNALS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl bg-white card-pad shadow-sm">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "var(--cl)", color: "var(--cp)" }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--cd)" }}>{title}</h3>
                <p className="text-[#64748b] text-[0.95rem]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="page-px section-py">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-center heading-mb" style={{ fontSize: "var(--fs-display)", color: "var(--cd)" }}>
            How it works
          </h2>
          <div className="grid-fluid-3">
            {STEPS.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="relative rounded-2xl border border-[#e2e8f0] card-pad">
                <span
                  className="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm"
                  style={{ background: "var(--cp)" }}
                >
                  {i + 1}
                </span>
                <Icon className="w-7 h-7 mb-3" style={{ color: "var(--cp)" }} />
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--cd)" }}>{title}</h3>
                <p className="text-[#64748b] text-[0.95rem]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="page-px section-py text-white"
        style={{ background: `linear-gradient(160deg, var(--cd) 0%, var(--cd-d) 100%)` }}
      >
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="font-display font-extrabold mb-4" style={{ fontSize: "var(--fs-display)" }}>
            Get in before your competitors do
          </h2>
          <p className="text-lg" style={{ color: "#cbd5e1" }}>
            We&apos;re onboarding the first markets in small batches so every brief is genuinely
            useful. Early-access members get it free while we build, and lock in founding pricing
            after. No credit card to join.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <WaitlistForm source="/pros#footer" />
        </div>
        <p className="text-center mt-8">
          <Link href="/" className="inline-flex items-center gap-1 text-sm hover:text-white" style={{ color: "var(--cp-xl)" }}>
            Looking to hire a pro instead? Visit the directory <ArrowRight className="w-4 h-4" />
          </Link>
        </p>
      </section>
    </main>
  );
}
