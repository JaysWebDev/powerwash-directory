"use client";

import { useState, useTransition } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { claimListing } from "@/app/actions/claimListing";

interface Props {
  company_id: string;
  company_slug: string;
  company_name: string;
}

const inputClass =
  "w-full border border-[#cbd5e1] rounded-xl px-4 py-3 text-[#1e3a5f] bg-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent transition-all placeholder:text-[#94a3b8] text-sm";

const ROLES = [
  { id: "owner", label: "Business Owner" },
  { id: "manager", label: "Manager" },
  { id: "employee", label: "Employee / Staff" },
  { id: "marketing", label: "Marketing / Agency" },
];

export default function ClaimForm({ company_id, company_slug, company_name }: Props) {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "owner",
  });

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const result = await claimListing({
        company_id,
        company_slug,
        company_name,
        claimant_name: form.name,
        claimant_email: form.email,
        claimant_phone: form.phone,
        claimant_role: form.role,
      });
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.error ?? "Something went wrong.");
      }
    });
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-[#dcfce7] rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-[#16a34a]" />
        </div>
        <h2 className="text-2xl font-bold text-[#1e3a5f] mb-3">Request Received!</h2>
        <p className="text-[#64748b] max-w-sm mx-auto leading-relaxed">
          We'll verify your connection to <strong className="text-[#1e3a5f]">{company_name}</strong> and
          follow up at <strong className="text-[#1e3a5f]">{form.email}</strong> within 1–2 business days.
        </p>
        <a
          href={`/companies/${company_slug}`}
          className="inline-block mt-8 text-[#0ea5e9] font-semibold text-sm hover:underline"
        >
          ← Back to listing
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="claim-name" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
            Your Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="claim-name"
            required
            type="text"
            placeholder="Jane Smith"
            value={form.name}
            onChange={set("name")}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="claim-email" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
            Business Email <span className="text-red-500">*</span>
          </label>
          <input
            id="claim-email"
            required
            type="email"
            placeholder="jane@yourbusiness.com"
            value={form.email}
            onChange={set("email")}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="claim-phone" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
            Phone <span className="text-[#94a3b8] font-normal">(optional)</span>
          </label>
          <input
            id="claim-phone"
            type="tel"
            placeholder="(555) 000-0000"
            value={form.phone}
            onChange={set("phone")}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="claim-role" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
            Your Role <span className="text-red-500">*</span>
          </label>
          <select
            id="claim-role"
            required
            value={form.role}
            onChange={set("role")}
            className={inputClass}
          >
            {ROLES.map((r) => (
              <option key={r.id} value={r.id}>{r.label}</option>
            ))}
          </select>
        </div>
      </div>

      {error && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-[#1e3a5f] hover:bg-[#152c48] disabled:bg-[#94a3b8] disabled:cursor-not-allowed text-white font-bold text-base py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
      >
        {isPending ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
        ) : (
          "Submit Claim Request"
        )}
      </button>

      <p className="text-center text-[#94a3b8] text-xs">
        We verify all claims before granting access. No credit card required.
      </p>
    </form>
  );
}
