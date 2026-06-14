import Link from "next/link";
import { CheckCircle, Clock, Users, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Request Received | WashPro Directory",
  description:
    "Your free quote request has been received. Local pros will contact you within 24 hours.",
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<{ services?: string }>;
};

export default async function ThanksPage({ searchParams }: Props) {
  const { services } = await searchParams;
  const serviceList = services
    ? services.split(",").map(decodeURIComponent).filter(Boolean)
    : [];

  const brandFull = `${siteConfig.brand} ${siteConfig.brandSuffix}`;

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
      style={{
        background: "linear-gradient(160deg, #dbeafe 0%, #e0f2fe 40%, #f0fdf4 100%)",
      }}
    >
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-sm border border-[#bfdbfe] p-10 text-center">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: "#dcfce7" }}
        >
          <CheckCircle className="w-10 h-10 text-[#16a34a]" />
        </div>

        <h1
          className="text-2xl font-bold text-[#1e3a5f] mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          You&apos;re All Set!
        </h1>
        <p className="text-[#64748b] leading-relaxed mb-6">
          Your request has been received. We&apos;re matching you with{" "}
          <strong className="text-[#1e3a5f]">up to 3 local pros</strong> in
          your area.
        </p>

        {serviceList.length > 0 && (
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-3">
              Services requested
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {serviceList.map((s) => (
                <span
                  key={s}
                  className="bg-[#f0f9ff] text-[#0284c7] border border-[#bae6fd] text-xs font-medium px-3 py-1 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-5 mb-8 text-left space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#64748b]">
            What happens next
          </p>
          {[
            {
              icon: Clock,
              text: "You'll hear from up to 3 local pros within 24 hours",
            },
            {
              icon: Users,
              text: "Compare their quotes — completely free, no obligation",
            },
            {
              icon: CheckCircle,
              text: "Choose the pro that fits your needs and budget",
            },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 text-sm text-[#475569]">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "#dbeafe" }}
              >
                <Icon className="w-3.5 h-3.5 text-[#1e3a5f]" />
              </div>
              {text}
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#0ea5e9] font-medium hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {brandFull}
        </Link>
      </div>
    </main>
  );
}
