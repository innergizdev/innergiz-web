import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Section from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import { STATS } from "@/content/site-data";

// The recovered counters as oversized editorial numerals that count up when the
// band scrolls into view — an ink "event" section per the style guide's rhythm.
// Values carry a verify-with-client TODO in content/site-data.ts.
export default function StatsBand() {
  return (
    <Section tone="ink">
      <Container className="flex flex-col gap-12">
        <Eyebrow onInk>Energising transformations, in numbers</Eyebrow>
        <dl className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} className="flex flex-col gap-2">
              <dd className="font-heading text-5xl leading-none text-ivory sm:text-6xl lg:text-7xl">
                <CountUp value={stat.value} />
                <span className="text-champagne">{stat.suffix}</span>
              </dd>
              <dt className="font-mono text-xs uppercase tracking-mono text-ivory/60">
                {stat.label}
              </dt>
            </Reveal>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
