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
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
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
        <footer style={{ background: c.darkDeep, color: "#cbd5e1" }} className="mt-auto py-10 px-6 text-sm">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-6">
            <div>
              <p className="font-semibold text-white text-base mb-1">{brandFull}</p>
              <p style={{ color: "#64748b" }} className="text-xs max-w-xs">
                Free directory connecting homeowners with licensed, insured local pros.
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-8 gap-y-2">
              <a href="/" style={{ color: "#94a3b8" }} className="hover:text-white transition-colors">Home</a>
              <a href="/about" style={{ color: "#94a3b8" }} className="hover:text-white transition-colors">About</a>
              <a href="/privacy" style={{ color: "#94a3b8" }} className="hover:text-white transition-colors">Privacy Policy</a>
              <a href={`mailto:hello@${siteConfig.domain}`} style={{ color: "#94a3b8" }} className="hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
          <div className="max-w-6xl mx-auto mt-6 pt-4 border-t border-white/10 text-xs" style={{ color: "#64748b" }}>
            © {new Date().getFullYear()} {brandFull}. All rights reserved. · {brandFull} is a free matching service — not a contractor.
          </div>
        </footer>
      </body>
    </html>
  );
}
