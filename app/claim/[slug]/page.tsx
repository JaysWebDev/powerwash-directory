import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Droplets, BadgeCheck, Star, Phone, MapPin, ChevronRight } from "lucide-react";
import { getCompanyBySlug, cityToSlug } from "@/lib/directory";
import ClaimForm from "./ClaimForm";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const company = await getCompanyBySlug(slug);
  if (!company) return { title: "Not Found" };
  return { title: `Claim ${company.business_name} — WashPro Directory` };
}

export default async function ClaimPage({ params }: Props) {
  const { slug } = await params;
  const company = await getCompanyBySlug(slug);
  if (!company) notFound();

  const citySlug = cityToSlug(company.city, company.state);

  if (company.is_claimed) {
    return (
      <main className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-[#e2e8f0] max-w-md">
          <BadgeCheck className="w-12 h-12 text-[#16a34a] mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-[#1e3a5f] mb-3">Already Claimed</h1>
          <p className="text-[#64748b] mb-6">
            <strong className="text-[#1e3a5f]">{company.business_name}</strong> has already been claimed
            by its owner.
          </p>
          <a href={`/companies/${slug}`} className="inline-block bg-[#0ea5e9] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#0284c7] transition-colors text-sm">
            View Listing
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e2e8f0] shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <Droplets className="w-7 h-7 text-[#0ea5e9]" />
            <span className="font-bold text-xl text-[#1e3a5f] tracking-tight">
              WashPro <span className="text-[#0ea5e9]">Directory</span>
            </span>
          </a>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#e2e8f0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-1.5 text-sm text-[#64748b]">
          <a href="/" className="hover:text-[#1e3a5f] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5" />
          <a href={`/${citySlug}`} className="hover:text-[#1e3a5f] transition-colors">
            {company.city}, {company.state}
          </a>
          <ChevronRight className="w-3.5 h-3.5" />
          <a href={`/companies/${slug}`} className="hover:text-[#1e3a5f] transition-colors truncate">
            {company.business_name}
          </a>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1e3a5f] font-medium">Claim Listing</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left — listing info */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 sticky top-24">
              <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wide mb-4">Your Listing</p>

              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#1e3a5f] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {company.business_name.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase()}
                </div>
                <div>
                  <h2 className="font-bold text-[#1e3a5f] leading-tight">{company.business_name}</h2>
                  <p className="text-sm text-[#64748b]">{company.city}, {company.state}</p>
                </div>
              </div>

              {company.rating && (
                <div className="flex items-center gap-2 mb-3 text-sm text-[#64748b]">
                  <Star className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]" />
                  <span>{company.rating.toFixed(1)} · {company.review_count} reviews</span>
                </div>
              )}
              {company.phone && (
                <div className="flex items-center gap-2 mb-3 text-sm text-[#64748b]">
                  <Phone className="w-4 h-4 text-[#0ea5e9]" />
                  <span>{company.phone}</span>
                </div>
              )}
              {company.address && (
                <div className="flex items-center gap-2 text-sm text-[#64748b]">
                  <MapPin className="w-4 h-4 text-[#0ea5e9]" />
                  <span className="truncate">{company.address}</span>
                </div>
              )}

              <div className="mt-5 pt-5 border-t border-[#f1f5f9]">
                <p className="text-xs text-[#94a3b8] mb-2 font-medium">Claiming gives you:</p>
                <ul className="space-y-1.5">
                  {[
                    "✓ Verified badge on your listing",
                    "✓ Update your description & services",
                    "✓ Add photos & business hours",
                    "✓ Respond to customer inquiries",
                    "✓ Priority placement in search",
                  ].map((item) => (
                    <li key={item} className="text-xs text-[#475569]">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right — claim form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8">
              <h1 className="text-2xl font-bold text-[#1e3a5f] mb-2">
                Claim This Listing
              </h1>
              <p className="text-[#64748b] mb-8 text-sm leading-relaxed">
                Is this your business? Tell us how you're connected and we'll verify your ownership
                within 1–2 business days — completely free.
              </p>

              <ClaimForm
                company_id={company.id}
                company_slug={slug}
                company_name={company.business_name}
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
