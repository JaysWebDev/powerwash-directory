"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Calculator, ChevronRight } from "lucide-react";
import AdUnit from "@/components/AdUnit";
import { siteConfig } from "@/config/site";

const BrandIcon = siteConfig.icon;

type ServiceKey =
  | "house-soft-washing"
  | "driveway"
  | "deck-restoration"
  | "roof-cleaning"
  | "fence-washing"
  | "gutter-cleaning"
  | "solar-panels"
  | "commercial"
  | "patio-paver-cleaning"
  | "brick-cleaning"
  | "stucco-cleaning"
  | "graffiti-removal";

const BASE_PRICES: Record<ServiceKey, [number, number]> = {
  "house-soft-washing": [200, 500],
  "driveway": [100, 300],
  "deck-restoration": [150, 400],
  "roof-cleaning": [250, 600],
  "fence-washing": [100, 300],
  "gutter-cleaning": [75, 250],
  "solar-panels": [100, 350],
  "commercial": [300, 2000],
  "patio-paver-cleaning": [150, 450],
  "brick-cleaning": [250, 600],
  "stucco-cleaning": [300, 650],
  "graffiti-removal": [150, 700],
};

const SIZE_MULT: Record<string, number> = { small: 0.75, medium: 1.0, large: 1.35 };
const STORY_MULT: Record<string, number> = { "1": 1.0, "2": 1.2, "3+": 1.5 };
const CONDITION_MULT: Record<string, number> = { light: 0.9, standard: 1.0, heavy: 1.2 };

const SHOW_STORIES = new Set<ServiceKey>([
  "house-soft-washing",
  "roof-cleaning",
  "gutter-cleaning",
  "stucco-cleaning",
]);

const SERVICE_OPTIONS: { id: ServiceKey; label: string; icon: typeof siteConfig.services[0]["icon"] }[] =
  siteConfig.services.map((s) => ({
    id: s.id as ServiceKey,
    label: s.label,
    icon: s.icon,
  }));

function OptionButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-[#0ea5e9] focus-visible:ring-offset-1 ${
        active
          ? "border-[#0ea5e9] bg-[#f0f9ff] text-[#0284c7]"
          : "border-[#e2e8f0] text-[#475569] hover:border-[#0ea5e9]/50"
      }`}
    >
      {children}
    </button>
  );
}

export default function CostCalculatorPage() {
  const [service, setService] = useState<ServiceKey | null>(null);
  const [size, setSize] = useState("medium");
  const [stories, setStories] = useState("1");
  const [condition, setCondition] = useState("standard");
  const [result, setResult] = useState<[number, number] | null>(null);

  const calculate = () => {
    if (!service) return;
    const [baseMin, baseMax] = BASE_PRICES[service];
    const sm = SIZE_MULT[size] ?? 1;
    const st = SHOW_STORIES.has(service) ? (STORY_MULT[stories] ?? 1) : 1;
    const cm = CONDITION_MULT[condition] ?? 1;
    const low = Math.round((baseMin * sm * st * cm) / 5) * 5;
    const high = Math.round((baseMax * sm * st * cm) / 5) * 5;
    setResult([low, high]);
  };

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <section className="bg-white border-b border-[#e2e8f0] section-py">
        <div className="max-w-3xl mx-auto page-px">
          <nav className="text-xs text-[#64748b] mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-[#1e3a5f] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1e3a5f] font-medium">Cost Calculator</span>
          </nav>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#f0f7ff] flex items-center justify-center">
              <Calculator className="w-5 h-5 text-[#0ea5e9]" />
            </div>
            <h1
              className="font-bold text-[#1e3a5f]"
              style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-display)" }}
            >
              Power Washing Cost Estimator
            </h1>
          </div>
          <p className="text-[#64748b]">
            Get a rough price range for your job in seconds. Actual quotes from local pros may vary based on your specific property and market.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-py">
        <div className="max-w-3xl mx-auto page-px">
          <div className="bg-white rounded-3xl border border-[#e2e8f0] shadow-sm p-8 space-y-8">

            {/* 1. Service */}
            <div>
              <p className="text-sm font-semibold text-[#1e3a5f] mb-3">
                1. What service do you need?
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SERVICE_OPTIONS.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={service === id}
                    onClick={() => { setService(id); setResult(null); }}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 text-xs font-medium transition-all text-center focus-visible:ring-2 focus-visible:ring-[#0ea5e9] focus-visible:ring-offset-1 ${
                      service === id
                        ? "border-[#0ea5e9] bg-[#f0f9ff] text-[#0284c7]"
                        : "border-[#e2e8f0] text-[#475569] hover:border-[#0ea5e9]/50"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${service === id ? "bg-[#0ea5e9]" : "bg-[#f0f7ff]"}`}>
                      <Icon className={`w-4 h-4 ${service === id ? "text-white" : "text-[#0ea5e9]"}`} />
                    </div>
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {service && (
              <>
                {/* 2. Property size */}
                <div>
                  <p className="text-sm font-semibold text-[#1e3a5f] mb-3">
                    2. Property / surface size
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: "small", label: "Small", sub: "Under 1,500 sq ft" },
                      { id: "medium", label: "Medium", sub: "1,500–3,000 sq ft" },
                      { id: "large", label: "Large", sub: "Over 3,000 sq ft" },
                    ].map(({ id, label, sub }) => (
                      <OptionButton key={id} active={size === id} onClick={() => { setSize(id); setResult(null); }}>
                        <span className="block">{label}</span>
                        <span className="block text-xs font-normal opacity-70">{sub}</span>
                      </OptionButton>
                    ))}
                  </div>
                </div>

                {/* 3. Stories (only for applicable services) */}
                {SHOW_STORIES.has(service) && (
                  <div>
                    <p className="text-sm font-semibold text-[#1e3a5f] mb-3">
                      3. How many stories?
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: "1", label: "1 story" },
                        { id: "2", label: "2 stories" },
                        { id: "3+", label: "3+ stories" },
                      ].map(({ id, label }) => (
                        <OptionButton key={id} active={stories === id} onClick={() => { setStories(id); setResult(null); }}>
                          {label}
                        </OptionButton>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Condition */}
                <div>
                  <p className="text-sm font-semibold text-[#1e3a5f] mb-3">
                    {SHOW_STORIES.has(service) ? "4" : "3"}. Current condition
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: "light", label: "Light", sub: "Mild dirt, minor algae" },
                      { id: "standard", label: "Standard", sub: "Visible staining or growth" },
                      { id: "heavy", label: "Heavy", sub: "Significant buildup, years of neglect" },
                    ].map(({ id, label, sub }) => (
                      <OptionButton key={id} active={condition === id} onClick={() => { setCondition(id); setResult(null); }}>
                        <span className="block">{label}</span>
                        <span className="block text-xs font-normal opacity-70">{sub}</span>
                      </OptionButton>
                    ))}
                  </div>
                </div>

                {/* Calculate button */}
                <button
                  type="button"
                  onClick={calculate}
                  className="w-full bg-[#1e3a5f] hover:bg-[#152c48] text-white font-bold text-lg py-4 rounded-xl transition-all hover:scale-[1.01] shadow-md flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Calculate Estimate
                </button>

                {/* Result */}
                {result && (
                  <div
                    className="rounded-2xl p-6 text-center border border-[#bfdbfe]"
                    style={{ background: "linear-gradient(135deg, #dbeafe 0%, #e0f2fe 100%)" }}
                  >
                    <p className="text-sm font-medium text-[#64748b] mb-1">Estimated price range</p>
                    <p
                      className="font-bold text-[#1e3a5f] mb-1"
                      style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3rem)" }}
                    >
                      ${result[0].toLocaleString()} – ${result[1].toLocaleString()}
                    </p>
                    <p className="text-xs text-[#64748b] mb-5">
                      Rough estimate only. Actual quotes depend on your specific property, local market, and contractor.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link
                        href="/#quote-form"
                        className="inline-flex items-center justify-center gap-2 bg-[#1e3a5f] hover:bg-[#152c48] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
                      >
                        <BrandIcon className="w-4 h-4 text-[#38bdf8]" />
                        Get Real Quotes — Free
                      </Link>
                      <button
                        type="button"
                        onClick={() => setResult(null)}
                        className="text-sm text-[#64748b] hover:text-[#1e3a5f] font-medium transition-colors px-4 py-3"
                      >
                        Adjust inputs
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            {!service && (
              <div className="text-center text-[#94a3b8] text-sm py-4">
                Select a service above to get started.
              </div>
            )}
          </div>

          <AdUnit slot="5303723755" className="mt-8" />

          {/* Disclaimer */}
          <div className="mt-6 bg-white border border-[#e2e8f0] rounded-2xl p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-2">How we calculate this</p>
            <p className="text-sm text-[#64748b] leading-relaxed">
              Price ranges are based on typical contractor rates in mid-cost U.S. markets. Adjustments are applied for property size, building height, and job complexity. Coastal metro areas (New York, California, South Florida) typically run 20–40% higher. Rural markets may run 10–20% lower. Commercial jobs vary widely and should always be quoted on-site. Use this as a baseline for evaluating quotes — not as a binding estimate.
            </p>
          </div>

          {/* Internal links */}
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="/guides/power-washing-cost" className="text-[#0ea5e9] hover:underline font-medium">
              Full 2026 Pricing Guide →
            </Link>
            <Link href="/guides/vet-power-washing-contractor" className="text-[#0ea5e9] hover:underline font-medium">
              How to Vet a Contractor →
            </Link>
            <Link href="/services" className="text-[#0ea5e9] hover:underline font-medium">
              Browse All Services →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
