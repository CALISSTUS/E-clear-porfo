import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.seo.title,
    short_name: siteConfig.name,
    description: siteConfig.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#050508",
    theme_color: "#6C3BFF",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
