import type { MetadataRoute } from "next";

/**
 * Sitemap natif Next.js App Router.
 * Genere /sitemap.xml a partir des 33 URLs du sitemap.json du projet.
 * Source de verite : sitemap.json (base_url + priorites).
 */

const BASE_URL = "https://piscines-wagner-mersch.vercel.app";

// Date de derniere modification reference = date de generation du sitemap.json
const LAST_MODIFIED = new Date("2026-06-30");

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

interface SitemapEntry {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
}

// 33 URLs, alignees sur sitemap.json (priorites et chemins exacts)
const entries: SitemapEntry[] = [
  // Home
  { path: "/", priority: 1.0, changeFrequency: "weekly" },

  // Services principaux
  { path: "/construction-piscine-beton", priority: 0.95, changeFrequency: "monthly" },
  { path: "/installation-piscine-coque", priority: 0.9, changeFrequency: "monthly" },
  { path: "/construction-piscine-hors-sol", priority: 0.8, changeFrequency: "monthly" },
  { path: "/installation-piscine-naturelle", priority: 0.8, changeFrequency: "monthly" },
  { path: "/construction-piscine", priority: 0.9, changeFrequency: "monthly" },
  { path: "/abri-piscine", priority: 0.9, changeFrequency: "monthly" },
  { path: "/securite-piscine", priority: 0.9, changeFrequency: "monthly" },
  { path: "/etancheite-piscine", priority: 0.85, changeFrequency: "monthly" },
  { path: "/renovation-piscine", priority: 0.9, changeFrequency: "monthly" },
  { path: "/reparation-piscine", priority: 0.8, changeFrequency: "monthly" },
  { path: "/margelles", priority: 0.75, changeFrequency: "monthly" },
  { path: "/local-technique", priority: 0.75, changeFrequency: "monthly" },

  // Pages communes
  { path: "/pisciniste-mersch", priority: 0.85, changeFrequency: "monthly" },
  { path: "/pisciniste-luxembourg-ville", priority: 0.85, changeFrequency: "monthly" },
  { path: "/pisciniste-esch-sur-alzette", priority: 0.8, changeFrequency: "monthly" },
  { path: "/pisciniste-ettelbruck", priority: 0.8, changeFrequency: "monthly" },
  { path: "/pisciniste-strassen", priority: 0.75, changeFrequency: "monthly" },
  { path: "/pisciniste-capellen", priority: 0.75, changeFrequency: "monthly" },
  { path: "/pisciniste-differdange", priority: 0.7, changeFrequency: "monthly" },
  { path: "/pisciniste-hesperange", priority: 0.7, changeFrequency: "monthly" },

  // Guides
  { path: "/guide/reglementation-grand-ducale-securite-piscine", priority: 0.75, changeFrequency: "monthly" },
  { path: "/guide/choisir-beton-vs-coque", priority: 0.75, changeFrequency: "monthly" },
  { path: "/guide/quand-renover-piscine", priority: 0.7, changeFrequency: "monthly" },
  { path: "/guide/hivernage-piscine-luxembourg", priority: 0.7, changeFrequency: "monthly" },
  { path: "/guide/budget-piscine-luxembourg", priority: 0.75, changeFrequency: "monthly" },

  // Pages institutionnelles
  { path: "/a-propos", priority: 0.6, changeFrequency: "monthly" },
  { path: "/realisations", priority: 0.75, changeFrequency: "monthly" },
  { path: "/avis", priority: 0.7, changeFrequency: "monthly" },

  // Conversion
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
  { path: "/devis", priority: 0.95, changeFrequency: "monthly" },

  // Legal
  { path: "/mentions-legales", priority: 0.3, changeFrequency: "yearly" },
  { path: "/politique-confidentialite", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map((entry) => ({
    url: `${BASE_URL}${entry.path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
