import { Suspense } from "react";
import type { Metadata } from "next";
import PageHero from "@/components/hero/PageHero";
import TopicExplorer from "@/components/sections/TopicExplorer";
import CtaBand from "@/components/sections/CtaBand";
import { servicesFor } from "@/content/services";

export const metadata: Metadata = {
  title: "For individuals",
  description:
    "Life coaching, trainer certification, and ICF-accredited coach education — for those pursuing clarity, career shifts, or professional growth.",
};

export default function IndividualsPage() {
  return (
    <>
      <PageHero
        eyebrow="Services — Individuals"
        title={
          <>
            For individ<span className="text-teal">u</span>als
          </>
        }
        body="Designed for those pursuing clarity, career shifts, or professional growth — our programs empower individuals to navigate life transitions, step into leadership, or become certified coaches and trainers through internationally recognized pathways."
        primary={{ href: "/contact", label: "Book a call" }}
        secondary={{ href: "#topics", label: "Explore topics" }}
        imageLabel="One-on-one coaching moment"
      />
      <Suspense>
        <TopicExplorer
          services={servicesFor("individuals")}
          audienceLabel="Individuals"
          ctaSuffix="for yourself?"
          railFooter={{
            kind: "quote",
            text: "A personalized, holistic approach to living with purpose, passion, and authenticity.",
            attribution: "Innergiz, on life coaching",
          }}
        />
      </Suspense>
      <CtaBand
        eyebrow="Start your own transformation"
        title="A first conversation costs"
        accent="nothing."
      />
    </>
  );
}
