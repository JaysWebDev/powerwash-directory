import { Star, Phone, MapPin, Globe, BadgeCheck, Zap } from "lucide-react";
import { Company } from "@/lib/directory";

const SERVICE_LABELS: Record<string, string> = {
  "house-soft-washing": "House Washing",
  "driveway": "Driveway",
  "deck-restoration": "Deck",
  "roof-cleaning": "Roof",
  "fence-washing": "Fence",
  "gutter-cleaning": "Gutters",
  "solar-panels": "Solar Panels",
  "commercial": "Commercial",
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < Math.round(rating)
              ? "text-[#f59e0b] fill-[#f59e0b]"
              : "text-[#e2e8f0] fill-[#e2e8f0]"
          }`}
        />
      ))}
    </div>
  );
}

export default function CompanyCard({ company }: { company: Company }) {
  const initials = company.business_name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="bg-white rounded-2xl border border-[#e2e8f0] hover:border-[#0ea5e9]/40 hover:shadow-md transition-all p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#1e3a5f] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-[#1e3a5f] text-base leading-tight truncate">
              {company.business_name}
            </h3>
            {company.is_featured && (
              <span className="inline-flex items-center gap-1 bg-[#fef3c7] text-[#d97706] text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0">
                <Zap className="w-2.5 h-2.5" /> Featured
              </span>
            )}
            {company.is_verified && (
              <span className="inline-flex items-center gap-1 text-[#16a34a] text-[10px] font-semibold flex-shrink-0">
                <BadgeCheck className="w-3 h-3" /> Verified
              </span>
            )}
          </div>

          {company.rating && (
            <div className="flex items-center gap-2 mt-1">
              <Stars rating={company.rating} />
              <span className="text-sm font-semibold text-[#1e3a5f]">
                {company.rating.toFixed(1)}
              </span>
              {company.review_count > 0 && (
                <span className="text-xs text-[#94a3b8]">
                  ({company.review_count} reviews)
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="space-y-1.5 text-sm">
        {company.phone && (
          <div className="flex items-center gap-2 text-[#475569]">
            <Phone className="w-3.5 h-3.5 text-[#0ea5e9] flex-shrink-0" />
            <a href={`tel:${company.phone.replace(/\D/g, "")}`} className="hover:text-[#0ea5e9] transition-colors font-medium">
              {company.phone}
            </a>
          </div>
        )}
        {company.address && (
          <div className="flex items-center gap-2 text-[#475569]">
            <MapPin className="w-3.5 h-3.5 text-[#0ea5e9] flex-shrink-0" />
            <span className="truncate">{company.address}</span>
          </div>
        )}
        {company.website && (
          <div className="flex items-center gap-2 text-[#475569]">
            <Globe className="w-3.5 h-3.5 text-[#0ea5e9] flex-shrink-0" />
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0ea5e9] transition-colors truncate"
            >
              Visit Website
            </a>
          </div>
        )}
      </div>

      {/* Services */}
      {company.services?.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {company.services.slice(0, 4).map((s) => (
            <span
              key={s}
              className="text-[10px] font-medium bg-[#f0f9ff] text-[#0284c7] border border-[#bae6fd] px-2 py-0.5 rounded-full"
            >
              {SERVICE_LABELS[s] ?? s}
            </span>
          ))}
          {company.services.length > 4 && (
            <span className="text-[10px] text-[#94a3b8] px-1 py-0.5">
              +{company.services.length - 4} more
            </span>
          )}
        </div>
      )}

      {/* CTAs */}
      <div className="mt-auto flex gap-2">
        <a
          href={`/companies/${company.slug}`}
          className="flex-1 block text-center border border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#f0f9ff] text-sm font-semibold py-2.5 rounded-xl transition-colors"
        >
          View Profile
        </a>
        <a
          href="#quote-form"
          className="flex-1 block text-center bg-[#0ea5e9] hover:bg-[#0284c7] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
        >
          Get Quote
        </a>
      </div>
    </div>
  );
}
