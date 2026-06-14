"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { submitLead } from "@/app/actions/submitLead";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Upload,
  Clock,
  Shield,
  Star,
  ChevronLeft,
  AlertCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const { services, propertyTypes } = siteConfig;
const BrandIcon = siteConfig.icon;

const inputBase =
  "w-full rounded-xl px-4 py-3 text-[#1e3a5f] bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all placeholder:text-[#94a3b8] text-sm";
const inputOk = `${inputBase} border border-[#cbd5e1] focus:ring-[#0ea5e9]`;
const inputErr = `${inputBase} border border-red-400 focus:ring-red-400`;

function validateField(field: string, value: string): string {
  if (field === "zip")
    return /^\d{5}$/.test(value.trim())
      ? ""
      : "Please enter a valid 5-digit ZIP code.";
  if (field === "name") return value.trim() ? "" : "Full name is required.";
  if (field === "phone")
    return value.replace(/\D/g, "").length >= 10
      ? ""
      : "Please enter a valid phone number.";
  if (field === "email")
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
      ? ""
      : "Please enter a valid email address.";
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

export default function ServicesAndQuote() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [propertyType, setPropertyType] = useState("single-family");
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState({
    size: "",
    zip: "",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

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
    if (!selectedServices.includes(id) && selectedServices.length === 0) {
      setTimeout(() => {
        document
          .getElementById("quote-form")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  };

  const handleBlur = (field: string, value: string) => {
    setTouched((p) => ({ ...p, [field]: true }));
    setErrors((p) => ({ ...p, [field]: validateField(field, value) }));
  };

  const handleChange = (field: string, value: string) => {
    setFormData((p) => ({ ...p, [field]: value }));
    if (touched[field]) {
      setErrors((p) => ({ ...p, [field]: validateField(field, value) }));
    }
  };

  const handleContinue = () => {
    const zipError = validateField("zip", formData.zip);
    setTouched((p) => ({ ...p, zip: true }));
    setErrors((p) => ({ ...p, zip: zipError }));
    if (selectedServices.length === 0 || zipError) return;
    setStep(2);
    setTimeout(() => {
      document
        .getElementById("quote-form")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
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
        property_type: propertyType,
        services: selectedServices,
        property_size: formData.size,
        notes: formData.notes,
        source: window.location.pathname,
      });
      if (result.success) {
        const serviceLabels = selectedServices
          .map((id) => services.find((s) => s.id === id)?.label)
          .filter(Boolean)
          .join(",");
        router.push(`/thanks?services=${encodeURIComponent(serviceLabels)}`);
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
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--fs-display)",
              }}
              className="font-bold text-[#1e3a5f] mb-3"
            >
              Our Services
            </h2>
            <p
              className="text-[#64748b]"
              style={{
                fontSize: "clamp(0.875rem, 1.5vw + 0.3rem, 1.125rem)",
              }}
            >
              Select the services you need — we&apos;ll match you with the
              right pros
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(170px, 100%), 1fr))",
              gap: "clamp(0.75rem, 2vw, 1rem)",
            }}
          >
            {services.map((service) => {
              const Icon = service.icon;
              const isSelected = selectedServices.includes(service.id);
              return (
                <button
                  key={service.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleServiceCardClick(service.id)}
                  className={`group text-left rounded-2xl border-2 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer card-pad focus-visible:ring-2 focus-visible:ring-[#0ea5e9] focus-visible:ring-offset-2 ${
                    isSelected
                      ? "border-[#0ea5e9] bg-[#f0f9ff] shadow-md"
                      : "border-[#e2e8f0] bg-white hover:border-[#0ea5e9]/40"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                      isSelected
                        ? "bg-[#0ea5e9]"
                        : "bg-[#f0f7ff] group-hover:bg-[#e0f2fe]"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 transition-colors ${
                        isSelected ? "text-white" : "text-[#0ea5e9]"
                      }`}
                    />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(0.95rem, 1.5vw + 0.3rem, 1.125rem)",
                    }}
                    className="font-bold text-[#1e3a5f] mb-1"
                  >
                    {service.label}
                  </h3>
                  <p className="text-[#64748b] text-xs leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-1">
                    {isSelected ? (
                      <span className="flex items-center gap-1 text-[#0284c7] text-xs font-semibold">
                        <CheckCircle className="w-3.5 h-3.5" /> Added
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[#94a3b8] text-xs group-hover:text-[#0ea5e9] transition-colors">
                        <ArrowRight className="w-3.5 h-3.5" /> Select
                      </span>
                    )}
                    <Link
                      href={`/services/${service.id}`}
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Learn more about ${service.label}`}
                      className="text-xs text-[#0284c7] hover:underline font-medium flex-shrink-0 py-1 px-1"
                    >
                      Learn more
                    </Link>
                  </div>
                </button>
              );
            })}
          </div>

          {selectedServices.length > 0 && (
            <div className="mt-6 text-center">
              <p className="text-sm text-[#64748b]">
                <span className="font-semibold text-[#0ea5e9]">
                  {selectedServices.length} service
                  {selectedServices.length > 1 ? "s" : ""} selected
                </span>{" "}
                — scroll down to complete your free quote request
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── QUOTE FORM ────────────────────────────────────────── */}
      <section
        id="quote-form"
        className="section-py"
        style={{
          background:
            "linear-gradient(160deg, #dbeafe 0%, #e0f2fe 40%, #f0fdf4 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto page-px">
          <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 xl:gap-16 items-start">

            {/* ── Left info panel (desktop only) ── */}
            <div className="hidden md:flex flex-col gap-7 sticky top-24">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/60 border border-[#bfdbfe] text-[#1e3a5f] text-sm font-medium px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
                  <BrandIcon
                    className="w-3.5 h-3.5"
                    style={{ color: "var(--cp)" }}
                  />
                  Free — No obligation
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--fs-display)",
                  }}
                  className="font-bold text-[#1e3a5f] mb-4"
                >
                  Get Free Quotes
                </h2>
                <p className="text-[#475569] text-lg leading-relaxed">
                  We&apos;ll match you with up to{" "}
                  <strong className="text-[#1e3a5f]">
                    3 top-rated local pros
                  </strong>{" "}
                  within 24 hours
                </p>
              </div>

              <div className="space-y-3">
                {(
                  [
                    { icon: CheckCircle, text: "Licensed & insured pros only" },
                    {
                      icon: Clock,
                      text: "Quotes delivered within 24 hours",
                    },
                    { icon: Shield, text: "Free service — no hidden fees" },
                    {
                      icon: Star,
                      text: "Average 4.8 / 5 across local pros",
                    },
                  ] as const
                ).map(({ icon: BenefitIcon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#dbeafe] flex items-center justify-center flex-shrink-0">
                      <BenefitIcon className="w-4 h-4 text-[#1e3a5f]" />
                    </div>
                    <span className="text-sm font-medium text-[#1e3a5f]">
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-white/60 border border-[#bfdbfe] rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-3">
                  How it works
                </p>
                <ol className="space-y-2">
                  {[
                    "Submit one form",
                    "Get matched with up to 3 local pros",
                    "Compare quotes — no obligation",
                  ].map((label, i) => (
                    <li
                      key={label}
                      className="flex items-start gap-3 text-sm text-[#1e3a5f]"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#1e3a5f] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                        {i + 1}
                      </span>
                      {label}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* ── Right: form ── */}
            <div>
              {/* Mobile header */}
              <div className="text-center mb-6 md:hidden">
                <div className="inline-flex items-center gap-2 bg-white/60 border border-[#bfdbfe] text-[#1e3a5f] text-sm font-medium px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
                  <BrandIcon
                    className="w-3.5 h-3.5"
                    style={{ color: "var(--cp)" }}
                  />
                  Free — No obligation
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--fs-display)",
                  }}
                  className="font-bold text-[#1e3a5f] mb-3"
                >
                  Get Free Quotes
                </h2>
                <p className="text-[#475569]">
                  We&apos;ll match you with up to{" "}
                  <strong className="text-[#1e3a5f]">
                    3 top-rated local pros
                  </strong>{" "}
                  within 24 hours
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-3xl p-8 shadow-sm border border-[#bfdbfe] space-y-6"
              >
                {/* ── Progress indicator ── */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 transition-colors ${
                        step === 1
                          ? "bg-[#0ea5e9] text-white"
                          : "bg-[#dcfce7] text-[#16a34a]"
                      }`}
                    >
                      {step === 1 ? (
                        "1"
                      ) : (
                        <CheckCircle className="w-4 h-4" />
                      )}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        step === 1 ? "text-[#1e3a5f]" : "text-[#64748b]"
                      }`}
                    >
                      Services &amp; ZIP
                    </span>
                  </div>
                  <div className="flex-1 h-px mx-2 bg-[#e2e8f0] relative overflow-hidden rounded-full">
                    <div
                      className={`absolute inset-y-0 left-0 bg-[#0ea5e9] transition-all duration-500 ${
                        step === 2 ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 ${
                        step === 2
                          ? "bg-[#0ea5e9] text-white"
                          : "bg-[#e2e8f0] text-[#94a3b8]"
                      }`}
                    >
                      2
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        step === 2 ? "text-[#1e3a5f]" : "text-[#94a3b8]"
                      }`}
                    >
                      Your Details
                    </span>
                  </div>
                </div>

                {/* ── STEP 1: Services + ZIP ── */}
                {step === 1 && (
                  <>
                    <div>
                      <p className="block text-sm font-semibold text-[#1e3a5f] mb-3">
                        Services Needed{" "}
                        <span className="text-red-500">*</span>
                        {selectedServices.length === 0 && (
                          <span className="ml-2 text-[#94a3b8] font-normal text-xs">
                            (select at least one)
                          </span>
                        )}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {services.map((s) => {
                          const isChecked = selectedServices.includes(s.id);
                          return (
                            <button
                              key={s.id}
                              type="button"
                              aria-pressed={isChecked}
                              onClick={() => toggleService(s.id)}
                              className={`text-left text-sm px-4 py-3 rounded-xl border-2 transition-all focus-visible:ring-2 focus-visible:ring-[#0ea5e9] focus-visible:ring-offset-1 ${
                                isChecked
                                  ? "border-[#0ea5e9] bg-[#f0f9ff] text-[#0284c7] font-semibold"
                                  : "border-[#e2e8f0] text-[#475569] hover:border-[#0ea5e9]/40"
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                {isChecked && (
                                  <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                                )}
                                {s.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="form-zip"
                        className="block text-sm font-semibold text-[#1e3a5f] mb-2"
                      >
                        ZIP Code <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="form-zip"
                        type="text"
                        inputMode="numeric"
                        maxLength={5}
                        placeholder="e.g. 28202"
                        value={formData.zip}
                        onChange={(e) => handleChange("zip", e.target.value)}
                        onBlur={(e) => handleBlur("zip", e.target.value)}
                        className={
                          touched.zip && errors.zip ? inputErr : inputOk
                        }
                      />
                      <FieldError
                        show={!!(touched.zip && errors.zip)}
                        msg={errors.zip ?? ""}
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleContinue}
                      disabled={selectedServices.length === 0}
                      className="w-full bg-[#1e3a5f] hover:bg-[#152c48] disabled:bg-[#94a3b8] disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded-xl transition-all hover:scale-[1.01] shadow-md flex items-center justify-center gap-2"
                    >
                      <BrandIcon
                        className="w-5 h-5"
                        style={{ color: "var(--cp-l)" }}
                      />
                      Continue — Add Contact Info
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <p className="text-center text-[#94a3b8] text-xs">
                      One more step — your name, phone, and email
                    </p>
                  </>
                )}

                {/* ── STEP 2: Contact details ── */}
                {step === 2 && (
                  <>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex items-center gap-1.5 text-sm text-[#64748b] hover:text-[#1e3a5f] transition-colors font-medium -mt-2"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back to services
                    </button>

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
                            aria-pressed={propertyType === pt.id}
                            onClick={() => setPropertyType(pt.id)}
                            className={`text-sm px-3 py-2.5 rounded-xl border-2 transition-all focus-visible:ring-2 focus-visible:ring-[#0ea5e9] focus-visible:ring-offset-1 ${
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

                    {/* Property size */}
                    <div>
                      <label
                        htmlFor="form-size"
                        className="block text-sm font-semibold text-[#1e3a5f] mb-2"
                      >
                        Property Size <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="form-size"
                        value={formData.size}
                        onChange={(e) => handleChange("size", e.target.value)}
                        onBlur={(e) => handleBlur("size", e.target.value)}
                        className={
                          touched.size && errors.size ? inputErr : inputOk
                        }
                      >
                        <option value="">Select size...</option>
                        <option value="small">
                          Small — Under 1,500 sq ft
                        </option>
                        <option value="medium">
                          Medium — 1,500–3,000 sq ft
                        </option>
                        <option value="large">Large — Over 3,000 sq ft</option>
                      </select>
                      <FieldError
                        show={!!(touched.size && errors.size)}
                        msg={errors.size ?? ""}
                      />
                    </div>

                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="form-name"
                          className="block text-sm font-semibold text-[#1e3a5f] mb-2"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="form-name"
                          type="text"
                          placeholder="Jane Smith"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          onBlur={(e) => handleBlur("name", e.target.value)}
                          className={
                            touched.name && errors.name ? inputErr : inputOk
                          }
                        />
                        <FieldError
                          show={!!(touched.name && errors.name)}
                          msg={errors.name ?? ""}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="form-phone"
                          className="block text-sm font-semibold text-[#1e3a5f] mb-2"
                        >
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="form-phone"
                          type="tel"
                          placeholder="(555) 000-0000"
                          value={formData.phone}
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                          onBlur={(e) => handleBlur("phone", e.target.value)}
                          className={
                            touched.phone && errors.phone ? inputErr : inputOk
                          }
                        />
                        <FieldError
                          show={!!(touched.phone && errors.phone)}
                          msg={errors.phone ?? ""}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="form-email"
                        className="block text-sm font-semibold text-[#1e3a5f] mb-2"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        placeholder="jane@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={(e) => handleBlur("email", e.target.value)}
                        className={
                          touched.email && errors.email ? inputErr : inputOk
                        }
                      />
                      <FieldError
                        show={!!(touched.email && errors.email)}
                        msg={errors.email ?? ""}
                      />
                    </div>

                    {/* Notes */}
                    <div>
                      <label
                        htmlFor="form-notes"
                        className="block text-sm font-semibold text-[#1e3a5f] mb-2"
                      >
                        Additional Notes{" "}
                        <span className="text-[#94a3b8] font-normal">
                          (optional)
                        </span>
                      </label>
                      <textarea
                        id="form-notes"
                        rows={3}
                        placeholder="Square footage, specific areas, access notes..."
                        value={formData.notes}
                        onChange={(e) => handleChange("notes", e.target.value)}
                        className={`${inputOk} resize-none`}
                      />
                    </div>

                    {/* Photo Upload */}
                    <div>
                      <p className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                        Upload a Photo{" "}
                        <span className="text-[#94a3b8] font-normal">
                          (optional — helps pros give accurate quotes)
                        </span>
                      </p>
                      <label
                        htmlFor="form-photo"
                        className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-[#cbd5e1] rounded-xl px-4 py-6 cursor-pointer hover:border-[#0ea5e9] hover:bg-[#f8fbff] transition-all group"
                      >
                        <Upload className="w-7 h-7 text-[#94a3b8] group-hover:text-[#0ea5e9] transition-colors" />
                        <span className="text-sm text-[#64748b] group-hover:text-[#0284c7] transition-colors">
                          Click to upload or drag &amp; drop
                        </span>
                        <span className="text-xs text-[#94a3b8]">
                          PNG, JPG up to 10MB
                        </span>
                        <input
                          id="form-photo"
                          type="file"
                          accept="image/*"
                          className="hidden"
                        />
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full bg-[#1e3a5f] hover:bg-[#152c48] disabled:bg-[#94a3b8] disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded-xl transition-all hover:scale-[1.01] shadow-md flex items-center justify-center gap-2"
                    >
                      <BrandIcon
                        className="w-5 h-5"
                        style={{ color: "var(--cp-l)" }}
                      />
                      {isPending ? "Submitting..." : "Get My Free Quotes"}
                    </button>

                    <p className="text-center text-[#94a3b8] text-xs leading-relaxed">
                      By submitting, you agree to receive quotes from local
                      service providers.
                      <br />
                      No spam. We never sell your information.
                    </p>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
