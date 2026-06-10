"use client";

import { useState, useEffect, useTransition } from "react";
import { submitLead } from "@/app/actions/submitLead";
import { CheckCircle, ArrowRight, Upload } from "lucide-react";
import { siteConfig } from "@/config/site";

const { services, propertyTypes } = siteConfig;
const BrandIcon = siteConfig.icon;

const inputClass =
  "w-full border border-[#cbd5e1] rounded-xl px-4 py-3 text-[#1e3a5f] bg-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent transition-all placeholder:text-[#94a3b8] text-sm";

export default function ServicesAndQuote() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [propertyType, setPropertyType] = useState<string>("single-family");
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({
    size: "",
    zip: "",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  // Pre-fill ZIP from URL param (set by HeroZipInput)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const zip = params.get("zip");
    if (zip) setFormData((p) => ({ ...p, zip }));
  }, []);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleServiceCardClick = (id: string) => {
    toggleService(id);
    // Only scroll on first selection
    if (!selectedServices.includes(id) && selectedServices.length === 0) {
      setTimeout(() => {
        document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServices.length === 0) return;
    startTransition(async () => {
      const result = await submitLead({
        full_name: formData.name,
        phone: formData.phone,
        email: formData.email,
        zip_code: formData.zip,
        property_type: propertyType,
        services: selectedServices,
        property_size: formData.size,
        notes: formData.notes,
        source: window.location.pathname,
      });
      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong — please try again.");
      }
    });
  };

  return (
    <>
      {/* ── SERVICES GRID ─────────────────────────────────────── */}
      <section id="services" className="section-py bg-white">
        <div className="max-w-6xl mx-auto page-px">
          <div className="text-center heading-mb">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-display)" }} className="font-bold text-[#1e3a5f] mb-3">
              Our Services
            </h2>
            <p className="text-[#64748b]" style={{ fontSize: "clamp(0.875rem, 1.5vw + 0.3rem, 1.125rem)" }}>Select the services you need — we&apos;ll match you with the right pros</p>
          </div>

          <div className="grid-fluid-4">
            {services.map((service) => {
              const Icon = service.icon;
              const isSelected = selectedServices.includes(service.id);
              return (
                <button
                  key={service.id}
                  onClick={() => handleServiceCardClick(service.id)}
                  className={`group text-left rounded-2xl border-2 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer card-pad ${
                    isSelected
                      ? "border-[#0ea5e9] bg-[#f0f9ff] shadow-md"
                      : "border-[#e2e8f0] bg-white hover:border-[#0ea5e9]/40"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                    isSelected ? "bg-[#0ea5e9]" : "bg-[#f0f7ff] group-hover:bg-[#e0f2fe]"
                  }`}>
                    <Icon className={`w-5 h-5 transition-colors ${isSelected ? "text-white" : "text-[#0ea5e9]"}`} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(0.95rem, 1.5vw + 0.3rem, 1.125rem)" }} className="font-bold text-[#1e3a5f] mb-1">
                    {service.label}
                  </h3>
                  <p className="text-[#64748b] text-xs leading-relaxed">{service.description}</p>
                  {isSelected ? (
                    <div className="mt-3 flex items-center gap-1 text-[#0284c7] text-xs font-semibold">
                      <CheckCircle className="w-3.5 h-3.5" /> Added to your request
                    </div>
                  ) : (
                    <div className="mt-3 flex items-center gap-1 text-[#94a3b8] text-xs group-hover:text-[#0ea5e9] transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" /> Click to select
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {selectedServices.length > 0 && (
            <div className="mt-6 text-center">
              <p className="text-sm text-[#64748b]">
                <span className="font-semibold text-[#0ea5e9]">{selectedServices.length} service{selectedServices.length > 1 ? "s" : ""} selected</span>
                {" "}— scroll down to complete your free quote request
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── QUOTE FORM ────────────────────────────────────────── */}
      <section
        id="quote-form"
        className="section-py"
        style={{ background: "linear-gradient(160deg, #dbeafe 0%, #e0f2fe 40%, #f0fdf4 100%)" }}
      >
        <div className="max-w-2xl mx-auto page-px">
          <div className="text-center mb-6 md:mb-10">
            <div className="inline-flex items-center gap-2 bg-white/60 border border-[#bfdbfe] text-[#1e3a5f] text-sm font-medium px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
              <BrandIcon className="w-3.5 h-3.5" style={{ color: "var(--cp)" }} />
              Free — No obligation
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-display)" }} className="font-bold text-[#1e3a5f] mb-3">
              Get Free Quotes
            </h2>
            <p className="text-[#475569]">
              We&apos;ll match you with up to <strong className="text-[#1e3a5f]">3 top-rated local pros</strong> within 24 hours
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-[#bfdbfe]">
              <div className="w-16 h-16 bg-[#dcfce7] rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-8 h-8 text-[#16a34a]" />
              </div>
              <h3 style={{ fontFamily: "var(--font-display)" }} className="text-2xl font-bold text-[#1e3a5f] mb-3">
                You&apos;re All Set!
              </h3>
              <p className="text-[#64748b] leading-relaxed max-w-sm mx-auto mb-2">
                We&apos;ve received your request for:
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {selectedServices.map((id) => (
                  <span key={id} className="bg-[#f0f9ff] text-[#0284c7] border border-[#bae6fd] text-xs font-medium px-3 py-1 rounded-full">
                    {services.find((s) => s.id === id)?.label}
                  </span>
                ))}
              </div>
              <p className="text-[#64748b] text-sm">Expect to hear from up to 3 local pros within 24 hours.</p>
              <button
                onClick={() => { setSubmitted(false); setSelectedServices([]); setFormData({ size: "", zip: "", name: "", phone: "", email: "", notes: "" }); }}
                className="mt-8 text-sm text-[#0ea5e9] font-medium hover:underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm border border-[#bfdbfe] space-y-6">

              {/* Services (checkboxes) */}
              <div>
                <p className="block text-sm font-semibold text-[#1e3a5f] mb-3">
                  Services Needed <span className="text-red-500">*</span>
                  {selectedServices.length === 0 && (
                    <span className="ml-2 text-[#94a3b8] font-normal text-xs">(select at least one)</span>
                  )}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((s) => {
                    const isChecked = selectedServices.includes(s.id);
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => toggleService(s.id)}
                        className={`text-left text-sm px-4 py-3 rounded-xl border-2 transition-all ${
                          isChecked
                            ? "border-[#0ea5e9] bg-[#f0f9ff] text-[#0284c7] font-semibold"
                            : "border-[#e2e8f0] text-[#475569] hover:border-[#0ea5e9]/40"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {isChecked && <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />}
                          {s.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Property Type */}
              <div>
                <p className="block text-sm font-semibold text-[#1e3a5f] mb-3">
                  Property Type <span className="text-red-500">*</span>
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {propertyTypes.map((pt) => (
                    <button
                      key={pt.id}
                      type="button"
                      onClick={() => setPropertyType(pt.id)}
                      className={`text-sm px-3 py-2.5 rounded-xl border-2 transition-all ${
                        propertyType === pt.id
                          ? "border-[#1e3a5f] bg-[#1e3a5f] text-white font-semibold"
                          : "border-[#e2e8f0] text-[#475569] hover:border-[#1e3a5f]/30"
                      }`}
                    >
                      {pt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Property size + ZIP */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="form-size" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                    Property Size <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="form-size"
                    required
                    value={formData.size}
                    onChange={(e) => setFormData((p) => ({ ...p, size: e.target.value }))}
                    className={inputClass}
                  >
                    <option value="">Select size...</option>
                    <option value="small">Small — Under 1,500 sq ft</option>
                    <option value="medium">Medium — 1,500–3,000 sq ft</option>
                    <option value="large">Large — Over 3,000 sq ft</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="form-zip" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                    ZIP Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="form-zip"
                    required
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]{5}"
                    maxLength={5}
                    placeholder="e.g. 28202"
                    value={formData.zip}
                    onChange={(e) => setFormData((p) => ({ ...p, zip: e.target.value }))}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="form-name" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="form-name"
                    required
                    type="text"
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="form-phone" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="form-phone"
                    required
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="form-email" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="form-email"
                  required
                  type="email"
                  placeholder="jane@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  className={inputClass}
                />
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="form-notes" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                  Additional Notes <span className="text-[#94a3b8] font-normal">(optional)</span>
                </label>
                <textarea
                  id="form-notes"
                  rows={3}
                  placeholder="Square footage, specific areas, access notes..."
                  value={formData.notes}
                  onChange={(e) => setFormData((p) => ({ ...p, notes: e.target.value }))}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Photo Upload */}
              <div>
                <p className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                  Upload a Photo <span className="text-[#94a3b8] font-normal">(optional — helps pros give accurate quotes)</span>
                </p>
                <label htmlFor="form-photo" className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-[#cbd5e1] rounded-xl px-4 py-6 cursor-pointer hover:border-[#0ea5e9] hover:bg-[#f8fbff] transition-all group">
                  <Upload className="w-7 h-7 text-[#94a3b8] group-hover:text-[#0ea5e9] transition-colors" />
                  <span className="text-sm text-[#64748b] group-hover:text-[#0284c7] transition-colors">
                    Click to upload or drag &amp; drop
                  </span>
                  <span className="text-xs text-[#94a3b8]">PNG, JPG up to 10MB</span>
                  <input id="form-photo" type="file" accept="image/*" className="hidden" />
                </label>
              </div>

              {selectedServices.length === 0 && (
                <p className="text-amber-600 text-sm text-center bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5">
                  Please select at least one service above before submitting
                </p>
              )}

              <button
                type="submit"
                disabled={selectedServices.length === 0 || isPending}
                className="w-full bg-[#1e3a5f] hover:bg-[#152c48] disabled:bg-[#94a3b8] disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded-xl transition-all hover:scale-[1.01] shadow-md flex items-center justify-center gap-2"
              >
                <BrandIcon className="w-5 h-5" style={{ color: "var(--cp-l)" }} />
                {isPending ? "Submitting..." : "Get My Free Quotes"}
              </button>

              <p className="text-center text-[#94a3b8] text-xs leading-relaxed">
                By submitting, you agree to receive quotes from local service providers.
                <br />No spam. We never sell your information.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
