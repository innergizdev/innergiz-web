// Content data models. All page copy is typed data so the shared
// templates can iterate — components never hardcode content.

export type Audience = "organisations" | "individuals";

// A block of service-page copy: optional heading, paragraphs, and bullets.
// Bullets may carry a bold lead-in title (matches the old site's structure).
export interface ServiceSection {
  heading?: string;
  body?: string[];
  bullets?: { title?: string; text: string }[];
}

// A named sub-program (Corporate Excellence and Coach Education list these).
export interface Program {
  title: string;
  blurb?: string;
}

export interface Service {
  slug: string;
  audience: Audience;
  title: string;
  oneLiner: string; // pane sub-heading and metadata description
  railDesc?: string; // one-line summary shown under the title in the TopicExplorer rail
  intro: string[];
  sections?: ServiceSection[];
  programs?: Program[];
  programsHeading?: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  credentials: string; // headline from the old bio pages
  photo: string; // /team/<slug>.jpg
  bio: string[]; // empty → no detail page (grid entry only)
  certifications: string[];
}

// Old site's event dates were broken placeholders; null dates render
// "Dates announced soon" until the client provides a real schedule.
export interface EventItem {
  slug: string;
  title: string;
  startDate: string | null; // ISO yyyy-mm-dd
  endDate: string | null;
  mode: "online" | "in-person" | "hybrid";
  registrationUrl: string | null; // null → contact form
}

export interface Stat {
  value: number;
  suffix: "+";
  label: string;
}

export interface Principle {
  title: string;
  text: string;
}

export interface ClientLogo {
  name: string;
  file: string; // /clients/<file>.png
}
