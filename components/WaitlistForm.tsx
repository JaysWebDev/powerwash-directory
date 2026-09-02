"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { joinWaitlist } from "@/app/actions/joinWaitlist";

const SERVICE_OPTIONS = [
  "Power washing / pressure washing",
  "Soft washing",
  "Gutter cleaning",
  "Window cleaning",
  "Roof cleaning",
  "Multiple services",
  "Other",
];

export default function WaitlistForm({
  source = "/pros",
  defaultCity = "",
  defaultState = "",
}: {
  source?: string;
  defaultCity?: string;
  defaultState?: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [error, setError] = useState<string | null>(null);
  const [alreadyJoined, setAlreadyJoined] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("submitting");

    const fd = new FormData(e.currentTarget);
    const res = await joinWaitlist({
      email: String(fd.get("email") ?? ""),
      business_name: String(fd.get("business_name") ?? ""),
      contact_name: String(fd.get("contact_name") ?? ""),
      city: String(fd.get("city") ?? ""),
      state: String(fd.get("state") ?? ""),
      service_focus: String(fd.get("service_focus") ?? ""),
      source,
    });

    if (res.success) {
      setAlreadyJoined(Boolean(res.alreadyJoined));
      setStatus("done");
    } else {
      setError(res.error ?? "Something went wrong. Please try again.");
      setStatus("idle");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl bg-white card-pad text-center shadow-xl" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}>
        <CheckCircle2 className="w-12 h-12 mx-auto mb-3" style={{ color: "var(--cp)" }} />
        <p className="font-display font-bold text-2xl mb-2" style={{ color: "var(--cd)" }}>
          {alreadyJoined ? "You're already on the list." : "You're on the list."}
        </p>
        <p className="text-[#64748b]">
          We&apos;re onboarding the first markets in small batches. You&apos;ll get an email the week
          your first Signal brief is ready — no spam in between.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 text-[#0f2034] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[color:var(--cp)] focus:border-transparent";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white card-pad shadow-xl grid gap-3"
      style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="business_name" type="text" placeholder="Business name" className={inputCls} autoComplete="organization" />
        <input name="contact_name" type="text" placeholder="Your name" className={inputCls} autoComplete="name" />
      </div>

      <input name="email" type="email" required placeholder="Work email *" className={inputCls} autoComplete="email" />

      <div className="grid gap-3 sm:grid-cols-3">
        <input name="city" type="text" placeholder="City" defaultValue={defaultCity} className={`${inputCls} sm:col-span-2`} autoComplete="address-level2" />
        <input name="state" type="text" placeholder="State" maxLength={2} defaultValue={defaultState} className={`${inputCls} uppercase`} autoComplete="address-level1" />
      </div>

      <select name="service_focus" defaultValue="" required className={`${inputCls} appearance-none`}>
        <option value="" disabled>What do you do? *</option>
        {SERVICE_OPTIONS.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-bold text-white transition-colors disabled:opacity-70"
        style={{ backgroundColor: "var(--cp)" }}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Joining…
          </>
        ) : (
          "Get early access"
        )}
      </button>

      <p className="text-center text-xs text-[#94a3b8]">
        Free while in early access · No credit card · Unsubscribe anytime
      </p>
    </form>
  );
}
