import type { NextConfig } from "next";

/**
 * Configuration Next.js
 * Les images (public/images) sont automatiquement optimisées
 * et servies en AVIF/WebP par next/image.
 */
const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
