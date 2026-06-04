"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { addCompany } from "./actions";

const SERVICE_OPTIONS = [
  "house-soft-washing", "driveway", "deck-restoration",
  "roof-cleaning", "fence-washing", "gutter-cleaning",
  "solar-panels", "commercial",
];

const inputClass = "w-full border border-[#cbd5e1] rounded-xl px-4 py-2.5 text-[#1e3a5f] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] transition-all placeholder:text-[#94a3b8]";

export default function AddCompanyForm() {
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [form, setForm] = useState({
    business_name: "", contact_name: "", email: "", phone: "",
    website: "", city: "", state: "", zip_codes: "", plan: "basic",
    monthly_lead_cap: "10", notes: "",
  });

  const toggleService = (s: string) =>
    setSelectedServices((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const result = await addCompany({
      ...form,
      monthly_lead_cap: parseInt(form.monthly_lead_cap),
      zip_codes: form.zip_codes.split(",").map((z) => z.trim()).filter(Boolean),
      services: selectedServices,
    });
    setSaving(false);
    if (result.success) {
      setOpen(false);
      setForm({ business_name: "", contact_name: "", email: "", phone: "", website: "", city: "", state: "", zip_codes: "", plan: "basic", monthly_lead_cap: "10", notes: "" });
      setSelectedServices([]);
      window.location.reload();
    } else {
      alert("Error: " + result.error);
    }
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#152c48] text-white font-semibold px-5 py-3 rounded-xl transition-colors shadow-sm"
      >
        <Plus className="w-4 h-4" /> Add Company
      </button>
    );
  }

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-[#e2e8f0] overflow-hidden">
      <div className="px-6 py-4 border-b border-[#e2e8f0] flex items-center justify-between">
        <h2 className="font-bold text-[#1e3a5f] text-lg">Add New Company</h2>
        <button onClick={() => setOpen(false)} className="text-[#94a3b8] hover:text-[#475569]">
          <X className="w-5 h-5" />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#1e3a5f] mb-1">Business Name *</label>
            <input required value={form.business_name} onChange={(e) => setForm((p) => ({ ...p, business_name: e.target.value }))} className={inputClass} placeholder="Sparkling Clean LLC" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#1e3a5f] mb-1">Contact Name</label>
            <input value={form.contact_name} onChange={(e) => setForm((p) => ({ ...p, contact_name: e.target.value }))} className={inputClass} placeholder="John Smith" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#1e3a5f] mb-1">Email *</label>
            <input required type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} className={inputClass} placeholder="owner@business.com" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#1e3a5f] mb-1">Phone</label>
            <input value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} className={inputClass} placeholder="(555) 000-0000" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#1e3a5f] mb-1">City</label>
            <input value={form.city} onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))} className={inputClass} placeholder="Charlotte" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#1e3a5f] mb-1">State</label>
            <input value={form.state} onChange={(e) => setForm((p) => ({ ...p, state: e.target.value }))} className={inputClass} placeholder="NC" maxLength={2} />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-[#1e3a5f] mb-1">ZIP Codes Served (comma-separated) *</label>
            <input required value={form.zip_codes} onChange={(e) => setForm((p) => ({ ...p, zip_codes: e.target.value }))} className={inputClass} placeholder="28202, 28203, 28204" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#1e3a5f] mb-1">Plan</label>
            <select value={form.plan} onChange={(e) => setForm((p) => ({ ...p, plan: e.target.value }))} className={inputClass}>
              <option value="free">Free (5 leads/mo)</option>
              <option value="basic">Basic (10 leads/mo)</option>
              <option value="pro">Pro (20 leads/mo)</option>
              <option value="premium">Premium (40 leads/mo)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#1e3a5f] mb-1">Monthly Lead Cap</label>
            <input type="number" min={1} max={100} value={form.monthly_lead_cap} onChange={(e) => setForm((p) => ({ ...p, monthly_lead_cap: e.target.value }))} className={inputClass} />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1e3a5f] mb-2">Services Offered</label>
          <div className="flex flex-wrap gap-2">
            {SERVICE_OPTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => toggleService(s)}
                className={`text-xs px-3 py-1.5 rounded-lg border-2 transition-all ${
                  selectedServices.includes(s)
                    ? "border-[#0ea5e9] bg-[#f0f9ff] text-[#0284c7] font-semibold"
                    : "border-[#e2e8f0] text-[#64748b] hover:border-[#0ea5e9]/40"
                }`}
              >
                {s.replace(/-/g, " ")}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#1e3a5f] mb-1">Internal Notes</label>
          <textarea rows={2} value={form.notes} onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))} className={`${inputClass} resize-none`} placeholder="Source, referral, special notes..." />
        </div>

        <div className="flex gap-3">
          <button type="submit" disabled={saving} className="bg-[#0ea5e9] hover:bg-[#0284c7] disabled:bg-[#94a3b8] text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm">
            {saving ? "Saving..." : "Save Company"}
          </button>
          <button type="button" onClick={() => setOpen(false)} className="border border-[#e2e8f0] text-[#64748b] hover:bg-[#f8fafc] px-6 py-2.5 rounded-xl text-sm">
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}
