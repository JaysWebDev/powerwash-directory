"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, ArrowRight } from "lucide-react";
import { MARKETS } from "@/lib/market";

export default function MarketPicker() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  function go(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const q = value.trim().toLowerCase();
    if (!q) return;
    // exact "City, ST" match first, then city-name match
    const match =
      MARKETS.find((m) => m.label.toLowerCase() === q) ||
      MARKETS.find((m) => m.city.toLowerCase() === q) ||
      MARKETS.find((m) => m.city.toLowerCase().startsWith(q));
    if (match) {
      router.push(`/pros/${match.slug}`);
    } else {
      setError("We don't cover that city yet — join the general list below and we'll add it.");
    }
  }

  return (
    <form onSubmit={go} className="max-w-md mx-auto lg:mx-0">
      <div className="flex items-center gap-2 bg-white rounded-2xl p-2 shadow-2xl" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.25)" }}>
        <div className="flex items-center gap-2 flex-1 px-3">
          <MapPin className="w-5 h-5 text-[#94a3b8] flex-shrink-0" />
          <label htmlFor="market-input" className="sr-only">Your city</label>
          <input
            id="market-input"
            list="market-list"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Your city (e.g. Las Vegas, NV)"
            className="flex-1 py-3 text-lg bg-transparent focus:outline-none placeholder:text-[#94a3b8]"
            style={{ color: "var(--cd)" }}
            autoComplete="off"
          />
          <datalist id="market-list">
            {MARKETS.map((m) => (
              <option key={m.slug} value={m.label} />
            ))}
          </datalist>
        </div>
        <button
          type="submit"
          className="text-white font-bold text-base px-5 py-3.5 rounded-xl transition-colors flex-shrink-0 inline-flex items-center gap-1.5"
          style={{ backgroundColor: "var(--cp)" }}
        >
          See my market <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      {error && <p className="text-center lg:text-left text-sm mt-3" style={{ color: "var(--cp-xl)" }}>{error}</p>}
    </form>
  );
}
