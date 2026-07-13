import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/content";

const routes = ["", "/about", "/skills", "/projects", "/services", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.seo.url;

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
