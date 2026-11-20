import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import CtaBand from "@/components/sections/CtaBand";
import TeamMasthead from "@/components/sections/TeamMasthead";
import { TEAM } from "@/content/team";

export const metadata: Metadata = {
  title: "About us",
  description:
    "An ICF-affiliated coaching education company on a mission to ignite potential — meet the Innergizers and the philosophy behind our work.",
};

const eyebrow = "font-mono text-[11px] uppercase tracking-[0.24em]";

export default function AboutPage() {
  return (
    <>
      {/* Intro — About eyebrow + Anton headline, three paragraphs on the right */}
      <section className="bg-ivory pb-[clamp(80px,12vh,140px)] pt-[clamp(140px,20vh,200px)]">
        <Container className="grid items-start gap-[clamp(36px,6vw,96px)] lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <span className={`${eyebrow} inline-flex items-center gap-3 text-teal`}>
              <span className="h-px w-8 bg-champagne" />
              About
            </span>
            <h1 className="max-w-[10ch] font-heading text-[clamp(3rem,8vw,7.4rem)] uppercase leading-[0.88]">
              Progress begins <span className="text-teal">within.</span>
            </h1>
          </div>
          <div className="flex max-w-[62ch] flex-col gap-5">
            <p className="text-[clamp(16px,1.3vw,19px)] leading-[1.65]">
              At Innergiz, we believe meaningful progress begins within. By harnessing inner
              energy, we help individuals achieve their goals through focused learning and
              development experiences.
            </p>
            <p className="text-[clamp(15px,1.2vw,17px)] leading-[1.65]">
              As an ICF-affiliated coaching education company, we are on a mission to ignite
              potential and shape the next generation of certified, credentialed coaches who lead
              with purpose and impact. Our ICF-approved programs equip aspiring coaches with the
              mindset, skills, and standards required to build impactful, ethical coaching practices.
            </p>
            <p className="text-[clamp(15px,1.2vw,17px)] leading-[1.65] text-ink/60">
              We believe growth is a conscious choice — to lead from within, to anticipate change,
              and to act with intention. Whether you&rsquo;re seeking to lead with greater purpose,
              build a coaching career, or elevate your organization, Innergiz is your partner in
              unlocking what&rsquo;s next.
            </p>
          </div>
        </Container>
      </section>

      {/* Vision & Mission — ink band */}
      <section className="bg-ink py-[clamp(80px,12vh,150px)] text-ivory">
        <Container className="grid gap-[clamp(48px,6vw,96px)] lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <span className={`${eyebrow} text-champagne`}>Vision</span>
            <p className="font-voice text-[clamp(2rem,4vw,3.4rem)] italic leading-[1.08] tracking-[-0.01em]">
              A catalyst for transformative journeys.
            </p>
            <p className="max-w-[46ch] leading-[1.65] text-ivory/70">
              Enabling individuals and organizations to realize their fullest potential and drive
              meaningful, collective progress.
            </p>
          </div>
          <div className="flex flex-col gap-6 border-t border-champagne/30 pt-5">
            <span className={`${eyebrow} text-champagne`}>Mission</span>
            <p className="max-w-[44ch] text-[clamp(17px,1.5vw,21px)] leading-[1.6]">
              We exist to awaken the Innergiz within individuals and organizations — guiding them to
              channel their inner strength and potential toward creating meaningful impact in an
              ever-evolving world.
            </p>
          </div>
        </Container>
      </section>

      <TeamMasthead team={TEAM} />
      <CtaBand />
    </>
  );
}
