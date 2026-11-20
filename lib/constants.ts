// Single source of truth for brand facts (decided 2026-07-07).
// The old site had inconsistent names and emails — these values win everywhere.
export const SITE = {
  brandName: "Innergiz Consulting",
  legalName: "Innergiz Consulting Private Limited", // per the old site's legal pages
  tagline: "Energizing people. Transforming companies.",
  subTagline: "Where inner drive catalyzes outer impact",
  email: "connect@innergiz.com",
  phone: "+91-99901 80804",
  address: "#164, GS Road, Chhattarpur Extn., New Delhi 110074",
  academyUrl: "https://academy.innergiz.com",
} as const;

// Production origin for absolute URLs (sitemap, Open Graph, canonical links).
// PLACEHOLDER: set NEXT_PUBLIC_SITE_URL at deploy — the agency fills the real
// domain here (see .env.example). The fallback is intentionally a placeholder so
// a wrong/stale origin is never shipped by accident.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com";

// Primary navigation (redesign 2026-09): minimal — About + Services (the
// "Choose your path" anchor on the landing page). Keeping the list here means
// Header and Footer never drift apart.
export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/#paths", label: "Services" },
] as const;

// Legal links live in the footer's bottom bar.
export const LEGAL_LINKS = [
  { href: "/terms", label: "Terms & conditions" },
  { href: "/privacy", label: "Privacy policy" },
  { href: "/refund-policy", label: "Refund policy" },
] as const;
