import type { Metadata } from "next";
import { DM_Sans, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? `https://${siteConfig.domain}`;

const { colors: c, seo } = siteConfig;
const brandFull = `${siteConfig.brand} ${siteConfig.brandSuffix}`;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: SITE_URL,
    siteName: brandFull,
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: brandFull }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // CSS custom properties — all color references in components use these vars
  const cssVars = {
    "--cp":    c.primary,
    "--cp-h":  c.primaryHover,
    "--cp-l":  c.primaryLight,
    "--cp-xl": c.primaryXLight,
    "--cd":    c.dark,
    "--cd-d":  c.darkDeep,
    "--cl":    c.lightBg,
  } as React.CSSProperties;

  return (
    <html
      lang="en"
      style={cssVars}
      className={`${dmSans.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsenseClient}`}
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: brandFull,
              url: SITE_URL,
              description: seo.description,
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/?zip={zip_code}`,
                "query-input": "required name=zip_code",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: brandFull,
              url: SITE_URL,
              description: `Connect with top-rated local ${siteConfig.verticalProNoun}. Free quotes from licensed, insured pros.`,
              areaServed: { "@type": "Country", name: "United States" },
              contactPoint: [
                { "@type": "ContactPoint", email: `hello@${siteConfig.domain}`, contactType: "customer support" },
                { "@type": "ContactPoint", email: `pros@${siteConfig.domain}`, contactType: "business" },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <footer style={{ background: c.darkDeep, color: "#cbd5e1" }} className="mt-auto pt-12 pb-8 px-6 text-sm">
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-semibold text-white text-base mb-2">{brandFull}</p>
              <p style={{ color: "#64748b" }} className="text-xs leading-relaxed max-w-xs mb-4">
                Free directory connecting homeowners with licensed, insured local power washing pros.
              </p>
              <a
                href="/cost-calculator"
                style={{ color: "#38bdf8" }}
                className="text-xs font-semibold hover:text-white transition-colors"
              >
                Free Cost Estimator →
              </a>
            </div>
            {/* Services */}
            <nav aria-label="Services">
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#64748b" }}>Services</p>
              <ul className="space-y-2">
                {[
                  { href: "/services/house-soft-washing", label: "House Soft Washing" },
                  { href: "/services/driveway",           label: "Driveway Cleaning" },
                  { href: "/services/deck-restoration",   label: "Deck Restoration" },
                  { href: "/services/roof-cleaning",      label: "Roof Cleaning" },
                  { href: "/services/gutter-cleaning",    label: "Gutter Cleaning" },
                  { href: "/services",                    label: "All Services →" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} style={{ color: "#94a3b8" }} className="hover:text-white transition-colors text-xs">{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Guides */}
            <nav aria-label="Guides">
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#64748b" }}>Guides</p>
              <ul className="space-y-2">
                {[
                  { href: "/guides/power-washing-cost",          label: "Cost Guide 2026" },
                  { href: "/guides/pressure-vs-soft-washing",    label: "Pressure vs Soft Wash" },
                  { href: "/guides/remove-roof-algae",           label: "Remove Roof Algae" },
                  { href: "/guides/power-washing-home-value",    label: "Boost Home Value" },
                  { href: "/guides/vet-power-washing-contractor", label: "Vet a Contractor" },
                  { href: "/guides",                             label: "All Guides →" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} style={{ color: "#94a3b8" }} className="hover:text-white transition-colors text-xs">{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Company */}
            <nav aria-label="Company">
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#64748b" }}>Company</p>
              <ul className="space-y-2">
                {[
                  { href: "/",          label: "Home" },
                  { href: "/about",     label: "About" },
                  { href: "/privacy",   label: "Privacy Policy" },
                  { href: `mailto:hello@${siteConfig.domain}`, label: "Contact" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} style={{ color: "#94a3b8" }} className="hover:text-white transition-colors text-xs">{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="max-w-6xl mx-auto pt-6 border-t border-white/10 text-xs" style={{ color: "#64748b" }}>
            © {new Date().getFullYear()} {brandFull}. All rights reserved. · {brandFull} is a free matching service — not a contractor.
          </div>
        </footer>
      </body>
    </html>
  );
}
