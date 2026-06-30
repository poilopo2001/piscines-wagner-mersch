import type { MetadataRoute } from "next";

/**
 * robots.txt natif Next.js App Router.
 * Genere /robots.txt : autorise tout, declare le sitemap.
 */

const BASE_URL = "https://piscines-wagner-mersch.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
