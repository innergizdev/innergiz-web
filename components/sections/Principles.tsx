import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import { PRINCIPLES } from "@/content/site-data";

// Operating philosophy as four ivory-deep tiles (no numbering, per the redesign).
// Tiles reveal with a stagger as the grid scrolls in.
export default function Principles() {
  return (
    <Section>
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <Heading level={2}>Four principles, held to</Heading>
          </Reveal>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((principle, i) => (
            <Reveal
              key={principle.title}
              delay={i * 0.08}
              className="flex flex-col gap-3 rounded-sm bg-ivory-deep p-7"
            >
              <h3 className="font-heading text-xl uppercase">{principle.title}</h3>
              <p className="text-sm leading-[1.7] text-ink/70">{principle.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
