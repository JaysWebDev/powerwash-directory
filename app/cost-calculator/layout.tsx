import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? `https://${siteConfig.domain}`;

export const metadata: Metadata = {
  title: `Free Power Washing Cost Calculator 2026 | ${siteConfig.brand} ${siteConfig.brandSuffix}`,
  description:
    "Estimate power washing costs instantly. Get accurate price ranges for house washing, driveway, deck, roof cleaning, and more — before you call a pro.",
  alternates: { canonical: `${BASE_URL}/cost-calculator` },
};

export default function CostCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
