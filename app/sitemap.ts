import type { MetadataRoute } from "next";
import { SERVICES } from "@/content/services";
import { LEGAL_DOCS } from "@/content/legal";
import { membersWithBio } from "@/content/team";

// TODO: PHASE 4 — swap for the real production origin at deploy.
const BASE = "https://innergiz.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/organisations", "/individuals", "/services", "/contact", "/events"];
  const serviceRoutes = SERVICES.map(
    (s) => `/${s.audience === "organisations" ? "organisations" : "individuals"}/${s.slug}`,
  );
  const teamRoutes = membersWithBio().map((m) => `/team/${m.slug}`);
  const legalRoutes = LEGAL_DOCS.map((d) => `/${d.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...teamRoutes, ...legalRoutes].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
  }));
}
