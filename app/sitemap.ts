import type { MetadataRoute } from "next";
import { DIRECTORY_CITIES, cityToSlug, getAllCompanySlugs } from "@/lib/directory";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://find.outdoorwashing.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const companySlugs = await getAllCompanySlugs();

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

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
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
    ...cityPages,
    ...companyPages,
  ];
}
