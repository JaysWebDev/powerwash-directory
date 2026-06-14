"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { submitLead } from "@/app/actions/submitLead";
import { CheckCircle, ArrowRight, AlertCircle, ChevronLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

const BrandIcon = siteConfig.icon;

const inputBase =
  "w-full rounded-xl px-4 py-3 text-[#1e3a5f] bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all placeholder:text-[#94a3b8] text-sm";
const inputOk = `${inputBase} border border-[#cbd5e1] focus:ring-[#0ea5e9]`;
const inputErr = `${inputBase} border border-red-400 focus:ring-red-400`;

function validateField(field: string, value: string): string {
  if (field === "zip") return /^\d{5}$/.test(value.trim()) ? "" : "Please enter a valid 5-digit ZIP code.";
  if (field === "name") return value.trim() ? "" : "Full name is required.";
  if (field === "phone") return value.replace(/\D/g, "").length >= 10 ? "" : "Please enter a valid phone number.";
  if (field === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? "" : "Please enter a valid email address.";
  if (field === "size") return value ? "" : "Please select a property size.";
  return "";
}

function FieldError({ show, msg }: { show: boolean; msg: string }) {
  if (!show || !msg) return null;
  return (
    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
      {msg}
    </p>
  );
}

type Props = { serviceId: string; serviceName: string };

export default function ServiceQuoteForm({ serviceId, serviceName }: Props) {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState({ zip: "", size: "", name: "", phone: "", email: "" });

  const handleBlur = (field: string, value: string) => {
    setTouched((p) => ({ ...p, [field]: true }));
    setErrors((p) => ({ ...p, [field]: validateField(field, value) }));
  };

  const handleChange = (field: string, value: string) => {
    setFormData((p) => ({ ...p, [field]: value }));
    if (touched[field]) setErrors((p) => ({ ...p, [field]: validateField(field, value) }));
  };

  const handleContinue = () => {
    const zipError = validateField("zip", formData.zip);
    setTouched((p) => ({ ...p, zip: true }));
    setErrors((p) => ({ ...p, zip: zipError }));
    if (zipError) return;
    setStep(2);
    document.getElementById("service-quote-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fields = ["size", "name", "phone", "email"] as const;
    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};
    for (const f of fields) {
      newTouched[f] = true;
      newErrors[f] = validateField(f, formData[f]);
    }
    setTouched((p) => ({ ...p, ...newTouched }));
    setErrors((p) => ({ ...p, ...newErrors }));
    if (Object.values(newErrors).some(Boolean)) return;

    startTransition(async () => {
      const result = await submitLead({
        full_name: formData.name,
        phone: formData.phone,
        email: formData.email,
        zip_code: formData.zip,
        property_type: "single-family",
        services: [serviceId],
        property_size: formData.size,
        notes: "",
        source: `/services/${serviceId}`,
      });
      if (result.success) {
        router.push(`/thanks?services=${encodeURIComponent(serviceName)}`);
      } else {
        alert("Something went wrong — please try again.");
      }
    });
  };

  return (
    <div id="service-quote-form">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-[#f0f9ff] border border-[#bae6fd] text-[#0284c7] text-sm font-medium px-4 py-1.5 rounded-full mb-4">
          <BrandIcon className="w-3.5 h-3.5" />
          Free — No obligation
        </div>
        <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2" style={{ fontFamily: "var(--font-display)" }}>
          Get Free {serviceName} Quotes
        </h2>
        <p className="text-[#64748b]">
          Matched with up to 3 licensed local pros in 24 hours
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-white rounded-3xl p-8 shadow-sm border border-[#bfdbfe] space-y-5"
      >
        {/* Progress */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 transition-colors ${step === 1 ? "bg-[#0ea5e9] text-white" : "bg-[#dcfce7] text-[#16a34a]"}`}>
              {step === 1 ? "1" : <CheckCircle className="w-4 h-4" />}
            </span>
            <span className={`text-sm font-semibold ${step === 1 ? "text-[#1e3a5f]" : "text-[#64748b]"}`}>
              Your ZIP
            </span>
          </div>
          <div className="flex-1 h-px mx-2 bg-[#e2e8f0] relative overflow-hidden rounded-full">
            <div className={`absolute inset-y-0 left-0 bg-[#0ea5e9] transition-all duration-500 ${step === 2 ? "w-full" : "w-0"}`} />
          </div>
          <div className="flex items-center gap-2">
            <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 ${step === 2 ? "bg-[#0ea5e9] text-white" : "bg-[#e2e8f0] text-[#94a3b8]"}`}>2</span>
            <span className={`text-sm font-semibold ${step === 2 ? "text-[#1e3a5f]" : "text-[#94a3b8]"}`}>
              Your Details
            </span>
          </div>
        </div>

        {/* Service badge */}
        <div className="flex items-center gap-2 text-sm text-[#0284c7] bg-[#f0f9ff] border border-[#bae6fd] px-4 py-2.5 rounded-xl">
          <CheckCircle className="w-4 h-4 flex-shrink-0" />
          <span className="font-medium">{serviceName}</span>
          <span className="text-[#64748b] font-normal ml-auto">selected</span>
        </div>

        {step === 1 && (
          <>
            <div>
              <label htmlFor="sq-zip" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                Your ZIP Code <span className="text-red-500">*</span>
              </label>
              <input
                id="sq-zip"
                type="text"
                inputMode="numeric"
                maxLength={5}
                placeholder="e.g. 28202"
                value={formData.zip}
                onChange={(e) => handleChange("zip", e.target.value)}
                onBlur={(e) => handleBlur("zip", e.target.value)}
                className={touched.zip && errors.zip ? inputErr : inputOk}
              />
              <FieldError show={!!(touched.zip && errors.zip)} msg={errors.zip ?? ""} />
            </div>
            <button
              type="button"
              onClick={handleContinue}
              className="w-full bg-[#1e3a5f] hover:bg-[#152c48] text-white font-bold text-lg py-4 rounded-xl transition-all hover:scale-[1.01] shadow-md flex items-center justify-center gap-2"
            >
              <BrandIcon className="w-5 h-5 text-[#38bdf8]" />
              Continue
              <ArrowRight className="w-5 h-5" />
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex items-center gap-1.5 text-sm text-[#64748b] hover:text-[#1e3a5f] transition-colors font-medium -mt-1"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>

            <div>
              <label htmlFor="sq-size" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                Property Size <span className="text-red-500">*</span>
              </label>
              <select
                id="sq-size"
                value={formData.size}
                onChange={(e) => handleChange("size", e.target.value)}
                onBlur={(e) => handleBlur("size", e.target.value)}
                className={touched.size && errors.size ? inputErr : inputOk}
              >
                <option value="">Select size...</option>
                <option value="small">Small — Under 1,500 sq ft</option>
                <option value="medium">Medium — 1,500–3,000 sq ft</option>
                <option value="large">Large — Over 3,000 sq ft</option>
              </select>
              <FieldError show={!!(touched.size && errors.size)} msg={errors.size ?? ""} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="sq-name" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="sq-name"
                  type="text"
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={(e) => handleBlur("name", e.target.value)}
                  className={touched.name && errors.name ? inputErr : inputOk}
                />
                <FieldError show={!!(touched.name && errors.name)} msg={errors.name ?? ""} />
              </div>
              <div>
                <label htmlFor="sq-phone" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  id="sq-phone"
                  type="tel"
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  onBlur={(e) => handleBlur("phone", e.target.value)}
                  className={touched.phone && errors.phone ? inputErr : inputOk}
                />
                <FieldError show={!!(touched.phone && errors.phone)} msg={errors.phone ?? ""} />
              </div>
            </div>

            <div>
              <label htmlFor="sq-email" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="sq-email"
                type="email"
                placeholder="jane@email.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                onBlur={(e) => handleBlur("email", e.target.value)}
                className={touched.email && errors.email ? inputErr : inputOk}
              />
              <FieldError show={!!(touched.email && errors.email)} msg={errors.email ?? ""} />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-[#1e3a5f] hover:bg-[#152c48] disabled:bg-[#94a3b8] disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded-xl transition-all hover:scale-[1.01] shadow-md flex items-center justify-center gap-2"
            >
              <BrandIcon className="w-5 h-5 text-[#38bdf8]" />
              {isPending ? "Submitting..." : "Get My Free Quotes"}
            </button>
            <p className="text-center text-[#94a3b8] text-xs leading-relaxed">
              No spam. We never sell your information.
            </p>
          </>
        )}
      </form>
    </div>
  );
}
