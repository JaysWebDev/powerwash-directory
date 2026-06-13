import type { MetadataRoute } from "next";
import { DIRECTORY_CITIES, DIRECTORY_STATES, cityToSlug, stateToSlug, getAllCompanySlugs } from "@/lib/directory";
import { servicesContent } from "@/config/services-content";
import { guidesContent } from "@/config/guides-content";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://find.outdoorwashing.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const companySlugs = await getAllCompanySlugs();

  const statePages: MetadataRoute.Sitemap = DIRECTORY_STATES.map(({ stateAbbr }) => ({
    url: `${BASE_URL}/${stateToSlug(stateAbbr)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const cityPages: MetadataRoute.Sitemap = DIRECTORY_CITIES.map(({ city, stateAbbr }) => ({
    url: `${BASE_URL}/${cityToSlug(city, stateAbbr)}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const companyPages: MetadataRoute.Sitemap = companySlugs.map((slug) => ({
    url: `${BASE_URL}/companies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const servicePages: MetadataRoute.Sitemap = servicesContent.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const guidePages: MetadataRoute.Sitemap = guidesContent.map((g) => ({
    url: `${BASE_URL}/guides/${g.slug}`,
    lastModified: new Date(g.updatedDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/guides`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/cost-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...servicePages,
    ...guidePages,
    ...statePages,
    ...cityPages,
    ...companyPages,
  ];
}
