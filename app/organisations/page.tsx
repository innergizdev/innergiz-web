import { Suspense } from "react";
import type { Metadata } from "next";
import PageHero from "@/components/hero/PageHero";
import TopicExplorer from "@/components/sections/TopicExplorer";
import StatsBand from "@/components/sections/StatsBand";
import Principles from "@/components/sections/Principles";
import CtaBand from "@/components/sections/CtaBand";
import { servicesFor } from "@/content/services";

export const metadata: Metadata = {
  title: "For organisations",
  description:
    "Executive coaching, corporate excellence programs, management consulting, psychometric assessments, and holistic well-being — building high-performing, future-ready teams.",
};

export default function OrganisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Services — Organisations"
        title={
          <>
            For organi<span className="text-teal">s</span>ations
          </>
        }
        body="Innergiz partners with organizations to unlock leadership potential, drive culture transformation, and enable sustained growth. Through coaching, training, assessments, and well-being programs, businesses build high-performing, future-ready teams aligned with strategic goals."
        primary={{ href: "/contact", label: "Book a call" }}
        secondary={{ href: "#topics", label: "Explore topics" }}
        imageLabel="Team workshop or leadership session"
      />
      <Suspense>
        <TopicExplorer
          services={servicesFor("organisations")}
          audienceLabel="Organisations"
          ctaSuffix="for your team?"
          railFooter={{
            kind: "quote",
            text: "Investing in executive coaching is an investment in the long-term success of the entire organization.",
            attribution: "Innergiz, on leadership development",
          }}
        />
      </Suspense>
      <StatsBand />
      <Principles />
      <CtaBand
        eyebrow="Build a future-ready team"
        title="Tell us where you want to go —"
        accent="we'll design the intervention."
      />
    </>
  );
}
