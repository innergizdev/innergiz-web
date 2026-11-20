import type { TeamMember } from "./types";

// "The Innergizers" — migrated from the old About page (decision 2026-07-07:
// members with working bios get detail pages; Hira's old bio link was a 404,
// so she is a grid-only entry until the client supplies her bio).
// TODO: confirm with client — 4 more members exist on the old site without bios
// (Sanjay Rai, Greg Chapman, Ritika Bhandari, Sonia Kararha).
export const TEAM: TeamMember[] = [
  {
    slug: "surbhee-singh",
    name: "Surbhee Singh",
    role: "Founder and CEO",
    credentials: "Founder | Master Certified Coach (MCC-ICF)",
    photo: "/team/surbhee-singh.jpg",
    bio: [
      "I am the Founder and CEO of a niche leadership development company, Innergiz Consulting. I use my diverse corporate experience to engage with C-suite leaders and key team members to identify strategic areas that can catapult their performance. I devise coaching interventions and customized training that help leaders adapt, align, and achieve their goals — improving productivity and revenue.",
      "I enable leaders and mid-to-senior managers to enhance their self-awareness and have greater impact in an increasingly globalized business environment. My areas of focus include coaching, coach mentoring, transition coaching, inner transformation, leadership development, communication influence, executive presence, self-mastery, storytelling, team integration, influence without authority, and holistic wellness.",
    ],
    certifications: [
      "Master Certified Coach (MCC-ICF) with over 3,000 hours of coaching experience",
      "Certified in Team Coaching from Erickson Coaching International",
      "Certified Intelligent Leadership Executive Coach by John Mattone Global Inc.",
      "Culturally Intelligent Coaching Certification by Merilyn O'Hearne",
      "Certified Emotional Intelligence Coach from Coach Transformation Academy",
    ],
  },
  {
    slug: "smarty-singh",
    name: "Smarty Singh",
    role: "Managing Partner, Coach & Consultant",
    credentials: "Executive Coach | Business Consultant",
    photo: "/team/smarty-singh.jpg",
    bio: [
      "I am an Executive Coach, Business Consultant, and Facilitator. Building businesses and launching start-ups have driven my core for the last two decades — from a leading Korean electronics giant and a Fortune 500 US multinational as Country Head, to selling my innovative online retail start-up and investing in technology solutions for Special Forces and Homeland Security. I am a thoroughbred 'fauji's' son who carries the values of integrity and sincerity close to heart.",
      "I am the Managing Partner at Innergiz Consulting. During my time at Samsung, I was one of two founder members of the department that launched Samsung Learning Academy. Coaching and facilitation come naturally to me: I have catalyzed learning journeys in self-mastery, high-performing teams, communication, managerial skills, presentation mastery, key account management, and selling skills.",
    ],
    certifications: [
      "Certified Coach from Erickson Coaching International, Canada",
      "Certified NLP Practitioner",
      "Business Coach from Coach Transformation Academy",
    ],
  },
  {
    slug: "ruchi-sharma",
    name: "Ruchi Sharma",
    role: "Coach & Facilitator",
    credentials: "Certified Leadership Coach | NLP Master Certified Practitioner",
    photo: "/team/ruchi-sharma.jpg",
    bio: [
      "I firmly believe each person is unique and possesses great potential to achieve their goals. I am passionate about leadership, coaching, and life skills — building successful teams by assisting each individual in becoming the best version of themselves.",
      "I have over 18 years of diverse HR experience across functions and industries: life coaching, emotional intelligence development, business partnering, leadership training, diversity and inclusion, and HR mergers and acquisitions. I have created programs for different leadership levels, including communication for impact, authentic leadership, demystifying people management, leading with trust and ownership, decoding empathy, resilience, and managing as a coach.",
    ],
    certifications: [
      "Certified Coach from Erickson Coaching International",
      "Certified Emotional and Social Intelligence Coach and Practitioner from the Institute of Social and Emotional Intelligence",
    ],
  },
  {
    slug: "sidhartha-bhasin",
    name: "Sidhartha Bhasin",
    role: "Coach & Facilitator",
    credentials: "Leadership & Team Coach | Strategy & Operations Leader",
    photo: "/team/sidhartha-bhasin.jpg",
    bio: [
      "I am a seasoned mentor and experienced leadership and team coach with a solution-focused approach that links business outcomes to leadership and team effectiveness. I bring together the ancient wisdom of the East with the coaching techniques of the West. I have coached 200+ leaders, facilitated over 350 workshops, and worked with clients of 18+ nationalities — recognized as Best Career Coach (2021) and Emerging HR Leader (2016).",
      "I lead HR Strategy and Operations for Googler Experience at Google Asia Pacific, having previously led HR Business Partner teams for Google's Products, Platforms, and Services lines, and held senior HR roles at Standard Chartered Bank, Ocwen Financial, and Aon.",
    ],
    certifications: [
      "Professional Certified Coach (PCC), International Coaching Federation (ICF)",
      "Trained with Erickson Coaching International, Co-Active Training Institute (CTI), and Positive Intelligence",
      "Certified Hogan Assessor",
      "Leadership Circle Practitioner",
      "Demartini Method Practitioner",
      "Certified Clifton Strengths Facilitator",
      "Certified in five-factor models (e.g. MBTI)",
    ],
  },
  {
    slug: "ishha-ajmera",
    name: "Ishha Ajmera",
    role: "Coach & Facilitator",
    credentials: "Executive Coach | Corporate Trainer",
    photo: "/team/ishha-ajmera.jpg",
    bio: [
      "I am an Associate Certified Coach from ICF with almost 20 years of experience as an entrepreneur and coach. I specialize in enhancing the leadership skills of founders and mid-senior managers, positively impacting organizational effectiveness.",
      "My strengths include self-mastery, transformational leadership, team integration, communication influence, executive presence, and holistic wellness. Organizations I have worked with include Aditya Birla Capital, Deutsche Bank, Dish TV, ICICI Securities, Magicbricks, SRF, TATA AIG, and Uber. I firmly believe every individual has potential beyond their realization, and I am committed to helping them become the best version of themselves.",
    ],
    certifications: [
      "Associate Certified Coach (ACC), International Coaching Federation (ICF)",
      "The Art & Science of Coaching (Modules I, II), Erickson Coaching International",
      "Coaching Mastery, Success Gyaan",
    ],
  },
  {
    slug: "hira-jethanandani",
    name: "Hira Jethanandani",
    role: "Partner — Training & Coaching",
    credentials: "Partner | Training & Coaching",
    photo: "/team/hira-jethanandani.jpg",
    bio: [], // old bio link was broken (404) — grid-only until client supplies content
    certifications: [],
  },
];

export const memberBySlug = (slug: string) => TEAM.find((m) => m.slug === slug);

// Only members with a bio get a detail page.
export const membersWithBio = () => TEAM.filter((m) => m.bio.length > 0);
