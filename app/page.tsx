import PageHero from "@/components/hero/PageHero";
import ChooseYourPath from "@/components/sections/ChooseYourPath";
import CtaBand from "@/components/sections/CtaBand";
import LogoWall from "@/components/sections/LogoWall";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <PageHero
        eyebrow="Executive coaching · Coach education"
        title={
          <>
            Energizing
            <br />
            people.
            <br />
            <span className="text-teal">Transforming</span>
            <br />
            <span className="relative inline-block">
              companies.
              <span className="absolute inset-x-0 bottom-[0.08em] h-[0.08em] bg-champagne" />
            </span>
          </>
        }
        body="Where inner drive catalyzes outer impact. An ICF-affiliated practice igniting potential and shaping the next generation of certified, credentialed coaches."
        primary={{ href: "/contact", label: "Book a call" }}
        secondary={{ href: "#paths", label: "Explore services" }}
        imageLabel="Hero photography"
      />
      <LogoWall />

      {/* About — asymmetric: pull quote high-left, prose drops lower-right */}
      <section id="about" className="bg-ivory py-[clamp(80px,12vh,160px)]">
        <Container className="grid items-start gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-teal">About us</span>
            <p className="font-voice text-[clamp(2.2rem,4.6vw,4rem)] italic leading-[1.08] tracking-[-0.01em]">
              Meaningful progress begins within.
            </p>
            <span className="h-px w-14 bg-champagne" />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-5 lg:pt-11">
            <p className="text-[clamp(16px,1.3vw,19px)] leading-[1.65]">
              At {SITE.brandName.split(" ")[0]}, we believe in harnessing inner energy: we help
              individuals achieve their goals through focused learning and development experiences.
              As an ICF-affiliated coaching education company, we are on a mission to ignite
              potential and shape the next generation of certified, credentialed coaches who lead
              with purpose and impact.
            </p>
            <p className="text-[clamp(15px,1.2vw,17px)] leading-[1.65] text-ink/60">
              Guided by deep expertise, our team supports professionals at every stage — from
              emerging leaders to senior executives — through coaching, training, and psychometric
              assessments that build clarity, capability, and resilience.
            </p>
            <Link
              href="/about#team"
              className="mt-1.5 w-fit border-b border-teal/35 pb-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-teal hover:border-ink hover:text-ink"
            >
              Meet the Innergizers ↗
            </Link>
          </Reveal>
        </Container>
      </section>

      <ChooseYourPath />
      <CtaBand />
    </>
  );
}
