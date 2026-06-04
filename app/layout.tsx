import type { Metadata } from "next";
import { DM_Sans, Barlow_Condensed } from "next/font/google";
import "./globals.css";

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
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://find.outdoorwashing.com";

export const metadata: Metadata = {
  title: "WashPro Directory — Find Top-Rated Local Power Washing Pros",
  description:
    "Get free quotes from licensed, insured power washing professionals in your area. Compare rates and book in minutes.",
  keywords: "power washing, pressure washing, local pros, free quotes, home cleaning",
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3493426366115346"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "WashPro Directory",
              url: SITE_URL,
              description:
                "Find top-rated local power washing professionals. Get free quotes from licensed, insured pros in your area.",
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
              "@type": "HomeAndConstructionBusiness",
              name: "WashPro Directory",
              url: SITE_URL,
              description:
                "Connect with top-rated local power washing professionals. Free quotes from licensed, insured pros.",
              areaServed: { "@type": "Country", name: "United States" },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "2400",
                bestRating: "5",
                worstRating: "1",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Power Washing Services",
                itemListElement: [
                  "House Soft Washing",
                  "Driveway & Concrete Cleaning",
                  "Deck Restoration",
                  "Roof Cleaning",
                  "Fence Washing",
                  "Gutter Cleaning",
                  "Solar Panel Cleaning",
                  "Commercial Property Washing",
                ].map((name) => ({
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name },
                })),
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
