import type { MetadataRoute } from "next";
import { infosSite } from "@/config/site";

/**
 * Fichier robots.txt généré automatiquement par Next.js.
 * Accessible sur /robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${infosSite.url}/sitemap.xml`,
  };
}
