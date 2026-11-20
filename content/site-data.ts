import type { ClientLogo, EventItem, Principle, Stat } from "./types";

// TODO: verify all four values with the client before launch — recovered from
// the old site's animated counters (Phase 0 audit); they may be stale.
export const STATS: Stat[] = [
  { value: 32000, suffix: "+", label: "Individuals" },
  { value: 11000, suffix: "+", label: "Coaching hours" },
  { value: 65, suffix: "+", label: "Organisations" },
  { value: 120, suffix: "+", label: "Program topics" },
];

// Operating philosophy — copy from the old homepage, unchanged.
export const PRINCIPLES: Principle[] = [
  {
    title: "Drive results",
    text: "We focus on outcomes that matter — measurable, aligned, and lasting. Every engagement is designed to move the needle, not just tick a box.",
  },
  {
    title: "Integrity",
    text: "We honour every commitment with transparency and respect. Trust is the foundation of everything we build — with clients and within.",
  },
  {
    title: "Collaboration",
    text: "Together, we go further. Co-creating with clients, we blend insights, experience, and vision to spark real change.",
  },
  {
    title: "Excellence",
    text: "Good is never good enough. We bring rigour, intention, and heart to everything we do — for impact that endures.",
  },
];

// ONE placeholder event at launch (decision 2026-07-07): the old site's event
// dates were broken. Real schedule comes from the client.
export const EVENTS: EventItem[] = [
  {
    slug: "icap-level-1",
    title: "International Coach Accreditation Program (ICAP), Level 1",
    startDate: null, // TODO: PHASE 3 — real dates from client
    endDate: null,
    mode: "online",
    registrationUrl: null, // null → contact form
  },
];

// Logo wall — files live in /public/clients (Phase 0 archive).
// TODO: confirm with client that displaying these logos is contractually OK.
export const CLIENTS: ClientLogo[] = [
  { name: "Accenture", file: "accenture" },
  { name: "Barco", file: "barco" },
  { name: "Blue Star", file: "blue-star" },
  { name: "Dana", file: "dana" },
  { name: "Ericsson", file: "ericsson" },
  { name: "Flipkart", file: "flipkart" },
  { name: "Google", file: "google" },
  { name: "HDFC", file: "hdfc" },
  { name: "Hero", file: "hero" },
  { name: "ICICI", file: "icici" },
  { name: "Mahindra", file: "mahindra" },
  { name: "MUFG", file: "mufg" },
  { name: "Olympus", file: "olympus" },
  { name: "PepsiCo", file: "PepsiCo" },
  { name: "Perfetti", file: "perfetti" },
  { name: "Pernod Ricard", file: "pernod" },
  { name: "Sapient", file: "sapient" },
  { name: "Sony", file: "sony" },
  { name: "Tata Steel", file: "tatasteel" },
  { name: "VE Commercial Vehicles", file: "ve" },
];
