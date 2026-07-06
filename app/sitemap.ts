import type { MetadataRoute } from "next";

import { site } from "@/lib/data/site";
import { programs } from "@/lib/data/programs";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/programs",
    "/cyber-range",
    "/outcomes",
    "/enterprise",
    "/about",
    "/pricing",
    "/contact",
    "/admissions",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const programRoutes = programs.map((p) => ({
    url: `${site.url}/programs/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...programRoutes];
}
