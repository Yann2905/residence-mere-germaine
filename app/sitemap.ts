import type { MetadataRoute } from "next";
import { infosSite } from "@/config/site";

/**
 * Plan du site (sitemap.xml) généré automatiquement par Next.js.
 * Accessible sur /sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = infosSite.url;
  const derniereModification = new Date();

  return [
    { url: base, lastModified: derniereModification, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/chambres`, lastModified: derniereModification, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/reservation`, lastModified: derniereModification, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/galerie`, lastModified: derniereModification, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: derniereModification, changeFrequency: "yearly", priority: 0.6 },
  ];
}
