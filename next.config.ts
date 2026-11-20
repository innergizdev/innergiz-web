import type { NextConfig } from "next";

// 301 map from the old WordPress URLs (Phase 2) — preserves search
// equity when the domain eventually points at this site. Harmless until then.
const OLD_SERVICE_PREFIX: Record<string, string> = {
  "executive-coaching": "organisations",
  "holistic-well-being": "organisations",
  "corporate-excellence-programs": "organisations",
  "psychometric-assessments": "organisations",
  "management-consulting": "organisations",
  "trainer-certification-program": "individuals",
  "life-coaching": "individuals",
  "coach-education": "individuals",
};

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/organisation", destination: "/organisations", permanent: true },
      { source: "/individual", destination: "/individuals", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/upcoming-events", destination: "/events", permanent: true },
      { source: "/terms-conditions", destination: "/terms", permanent: true },
      { source: "/privacy_policy", destination: "/privacy", permanent: true },
      ...Object.entries(OLD_SERVICE_PREFIX).map(([slug, hub]) => ({
        source: `/service/${slug}`,
        destination: `/${hub}/${slug}`,
        permanent: true,
      })),
      // Old team bio URLs lived at the root; they now live under /team.
      ...["surbhee-singh", "smarty-singh", "ruchi-sharma", "sidhartha-bhasin", "ishha-ajmera"].map(
        (slug) => ({ source: `/${slug}`, destination: `/team/${slug}`, permanent: true }),
      ),
    ];
  },
};

export default nextConfig;
