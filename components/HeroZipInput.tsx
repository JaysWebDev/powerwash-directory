"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function HeroZipInput() {
  const [zip, setZip] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zip.length === 5) {
      const url = new URL(window.location.href);
      url.searchParams.set("zip", zip);
      window.history.pushState({}, "", url.toString());
    }
    setTimeout(() => {
      document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div
        className="flex items-center gap-2 bg-white rounded-2xl p-2 shadow-2xl"
        style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.25)" }}
      >
        <div className="flex items-center gap-2 flex-1 px-3">
          <Search className="w-5 h-5 text-[#94a3b8] flex-shrink-0" />
          <label htmlFor="hero-zip" className="sr-only">ZIP code</label>
          <input
            id="hero-zip"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{5}"
            maxLength={5}
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
            placeholder={siteConfig.cta.zipPlaceholder}
            className="flex-1 py-3 text-[#1e3a5f] text-lg bg-transparent focus:outline-none placeholder:text-[#94a3b8]"
            style={{ color: "var(--cd)" }}
          />
        </div>
        <button
          type="submit"
          className="text-white font-bold text-base px-6 py-3.5 rounded-xl transition-colors flex-shrink-0"
          style={{ backgroundColor: "var(--cp)" }}
        >
          {siteConfig.cta.text}
        </button>
      </div>
      <p className="text-center text-sm mt-3" style={{ color: "var(--cp-xl)" }}>
        {siteConfig.cta.zipSubtext}
      </p>
    </form>
  );
}
