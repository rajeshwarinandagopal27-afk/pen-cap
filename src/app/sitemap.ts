import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";
import { getAllProgramSlugs } from "@/lib/data/programs";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/programs",
    "/admissions",
    "/admissions/apply",
    "/outcomes",
    "/about",
    "/enterprise",
    "/cyber-range",
    "/pricing",
    "/contact",
    "/login",
    "/legal/privacy",
    "/legal/terms",
    "/legal/refunds",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const programRoutes = getAllProgramSlugs().map((slug) => ({
    url: `${siteConfig.url}/programs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...programRoutes];
}
