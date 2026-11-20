// Legal copy migrated verbatim-in-substance from the old site (Phase 0 archive).
// The legal entity is "Innergiz Consulting Private Limited" per these documents.
export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalDoc {
  slug: string;
  title: string;
  description: string;
  effectiveDate?: string;
  intro?: string[];
  sections: LegalSection[];
}

export const LEGAL_DOCS: LegalDoc[] = [
  {
    slug: "terms",
    title: "Terms & conditions",
    description: "Terms governing all services provided by Innergiz Consulting Private Limited.",
    intro: [
      "These Terms govern all services provided by Innergiz Consulting Private Limited (“Innergiz”), including leadership training, coaching education, and open learning programs. By enrolling or participating in any service, you agree to these Terms.",
    ],
    sections: [
      {
        heading: "Eligibility",
        paragraphs: [
          "Individuals or participants must be at least eighteen (18) years of age or have parental consent to register for Innergiz programs. By using our services, you represent and warrant that you have the legal capacity to enter into these Terms.",
        ],
      },
      {
        heading: "Use of services",
        paragraphs: [
          "Participants agree to use the services solely for personal or professional development and not for redistribution or resale. Coaching is not therapy, counseling, medical treatment, financial advice, or legal advice. If you require such services, you should seek qualified professionals.",
          "Outcomes may vary and depend on your commitment, participation, and circumstances. No guarantees of any type of results are made by Innergiz. You are solely responsible for any actions taken and decisions made based on coaching sessions, training, or course content.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "All content, tools, materials, frameworks, and program materials remain the exclusive intellectual property of Innergiz and must not be copied, shared, or reproduced without written consent.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "Innergiz shall not be liable for any direct, indirect, or consequential losses arising from participation in its services.",
        ],
      },
      {
        heading: "Governing law",
        paragraphs: [
          "These Terms are governed by the laws of India and are subject to the jurisdiction of the courts at New Delhi, India.",
        ],
      },
      {
        heading: "User responsibilities",
        paragraphs: [
          "You agree to use the services only for lawful purposes and in compliance with the terms and conditions laid out by Innergiz.",
        ],
      },
      {
        heading: "Payment and fees",
        paragraphs: [
          "All fees for services must be paid in full prior to participation unless otherwise agreed in writing. Fees are non-transferable and subject to our Refund & Cancellation Policy. We reserve the right to change pricing at any time; however, once you have purchased a service, your fee will remain fixed for that service.",
        ],
      },
    ],
  },
  {
    slug: "privacy",
    title: "Privacy policy",
    description: "How Innergiz Consulting Private Limited collects, uses, and protects your data.",
    sections: [
      {
        heading: "Information we collect",
        paragraphs: [
          "We collect personal data including names, contact details, and payment information for program registration and delivery.",
        ],
      },
      {
        heading: "Use of information",
        paragraphs: ["Collected information is used for communication, support, and delivery of services."],
      },
      {
        heading: "Data security",
        paragraphs: [
          "We employ reasonable security measures to safeguard your information from unauthorized access or misuse.",
        ],
      },
      {
        heading: "Data retention",
        paragraphs: [
          "Data is retained only as long as necessary to fulfill the purpose of collection or as required by law.",
        ],
      },
      {
        heading: "Data sharing",
        paragraphs: [
          "We do not sell or rent personal data. It may be shared only with trusted vendors or service providers bound by confidentiality obligations.",
        ],
      },
      {
        heading: "Shipping and delivery policy",
        paragraphs: [
          "As Innergiz primarily provides coaching and educational services, “delivery” refers to access to programs, digital materials, or online sessions.",
        ],
        bullets: [
          "Digital access will be provided within 120 hours of payment confirmation.",
          "For hybrid or in-person programs, venue or access details will be communicated at least 48 hours before commencement.",
          "If an offline program moves online (or vice versa), program fees are not adjusted or refunded. Innergiz management reserves the right to make such changes as deemed appropriate.",
        ],
      },
      {
        heading: "Cookie policy",
        paragraphs: [
          "Our website uses cookies to improve functionality and user experience. You may disable cookies through browser settings, though certain features may not function properly without them.",
        ],
      },
      {
        heading: "Disclaimer",
        paragraphs: [
          "Programs and services provided by Innergiz Consulting Private Limited are designed for professional and personal development purposes only. They do not substitute legal, psychological, or medical advice. Results may vary depending on individual participation and engagement.",
        ],
      },
      {
        heading: "Code of conduct and anti-discrimination policy",
        paragraphs: [
          "Innergiz promotes an inclusive, respectful, and safe learning environment. Discrimination, harassment, or disruptive behavior is strictly prohibited and may result in removal from the program without refund.",
        ],
      },
    ],
  },
  {
    slug: "refund-policy",
    title: "Refund & cancellation policy",
    description: "Refund and cancellation practices for Innergiz coaching programs, courses, and events.",
    effectiveDate: "January 1, 2026",
    intro: [
      "At Innergiz Consulting Private Limited (“Innergiz”), we strive to deliver high-quality coaching programs, courses, and learning experiences in line with global coaching standards. We aim to be transparent about our refund and cancellation practices.",
    ],
    sections: [
      {
        heading: "General policy",
        bullets: [
          "All coaching sessions, programs, and courses are provided on a strictly non-refundable basis once delivered.",
          "Coaching is a professional partnership that requires mutual commitment. Outcomes may vary based on individual engagement; no guarantees of specific results can be made.",
        ],
      },
      {
        heading: "Individual coaching sessions",
        bullets: [
          "Sessions may be rescheduled with a minimum of seventy-two (72) hours' prior written notice.",
          "Sessions canceled with less notice, or missed without notice, are treated as delivered and are not eligible for rescheduling or refund.",
        ],
      },
      {
        heading: "Coaching packages and programs",
        bullets: [
          "Multi-session coaching packages remain valid for six (6) months from the date of purchase.",
          "Unused sessions beyond the validity period expire automatically and are not refunded.",
        ],
      },
      {
        heading: "Group programs, workshops, and events",
        bullets: [
          "Cancellations made twenty-one (21) days or more before the start date may, at Innergiz's discretion, be eligible for a credit toward a future program.",
          "Cancellations within twenty-one (21) days of the event are not eligible for a refund or credit.",
          "No refund applies for non-attendance or inability to participate for any reason.",
          "In exceptional circumstances, and solely at Innergiz's discretion, a participant may attend a future batch of the same program if one is scheduled.",
        ],
      },
      {
        heading: "Digital content and online courses",
        paragraphs: [
          "All purchases of digital products, recordings, online courses, and downloadable resources are final and non-refundable due to immediate access provided upon purchase.",
        ],
      },
      {
        heading: "Exceptional circumstances",
        paragraphs: [
          "If Innergiz modifies, postpones, or cancels any program, participants will be offered a full refund or the option to transfer fees to another program of equal value. Refunds resulting from provider cancellation are processed within thirty (30) business days of written notice. All cases are reviewed individually and remain subject to the sole discretion of Innergiz Consulting Private Limited.",
        ],
      },
      {
        heading: "Amendments",
        paragraphs: [
          "Innergiz reserves the right to amend this policy at any time. Updates are published on this page; continued enrollment signifies acceptance of revised terms.",
        ],
      },
      {
        heading: "Dispute resolution",
        paragraphs: [
          "The parties may, by mutual consent, refer disputes to arbitration under the Arbitration and Conciliation Act, 1996, seated in New Delhi.",
        ],
      },
    ],
  },
];

export const legalBySlug = (slug: string) => LEGAL_DOCS.find((d) => d.slug === slug);
