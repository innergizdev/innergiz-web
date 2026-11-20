import ArrowLink from "@/components/ui/ArrowLink";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import { servicesFor } from "@/content/services";
import type { Service } from "@/content/types";

// Shared template for all eight service pages (Phase 2): renders the
// typed Service data, then cross-links the sibling services of the same hub.
export default function ServiceArticle({ service }: { service: Service }) {
  const hubHref = service.audience === "organisations" ? "/organisations" : "/individuals";
  const hubLabel = service.audience === "organisations" ? "Organisations" : "Individuals";
  const siblings = servicesFor(service.audience).filter((s) => s.slug !== service.slug);

  return (
    <>
      <Section className="pt-36 lg:pt-48">
        <Container className="flex flex-col gap-8">
          <Eyebrow>
            Services — {hubLabel}
          </Eyebrow>
          <Heading level={1} className="max-w-[14ch]">
            {service.title}
          </Heading>
          <div className="flex flex-col gap-5">
            {service.intro.map((paragraph) => (
              <Text key={paragraph.slice(0, 32)}>{paragraph}</Text>
            ))}
          </div>
        </Container>
      </Section>

      {service.sections?.map((section, i) => (
        <Section key={i} tone={i % 2 === 0 ? "deep" : "ivory"} className="py-14 lg:py-20">
          <Container className="flex flex-col gap-8">
            {section.heading && <Heading level={2}>{section.heading}</Heading>}
            {section.body?.map((paragraph) => <Text key={paragraph.slice(0, 32)}>{paragraph}</Text>)}
            {section.bullets && (
              <ul className="grid gap-x-12 gap-y-6 lg:grid-cols-2">
                {section.bullets.map((bullet) => (
                  <li
                    key={bullet.text.slice(0, 32)}
                    className="flex flex-col gap-1 border-t border-champagne-faint pt-4"
                  >
                    {bullet.title && (
                      <span className="font-mono text-xs uppercase tracking-mono text-teal">
                        {bullet.title}
                      </span>
                    )}
                    <p className="text-sm leading-[1.7] text-ink/80">{bullet.text}</p>
                  </li>
                ))}
              </ul>
            )}
          </Container>
        </Section>
      ))}

      {service.programs && (
        <Section tone="ink" className="py-14 lg:py-20">
          <Container className="flex flex-col gap-8">
            <Heading level={2}>{service.programsHeading ?? "Programs"}</Heading>
            <ul className="grid gap-x-12 lg:grid-cols-2">
              {service.programs.map((program, i) => (
                <li
                  key={program.title}
                  className="flex flex-col gap-2 border-b border-champagne-faint py-5"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs tracking-mono text-champagne">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-xl uppercase text-ivory">{program.title}</h3>
                  </div>
                  {program.blurb && (
                    <p className="pl-10 text-sm leading-[1.7] text-ivory/70">{program.blurb}</p>
                  )}
                </li>
              ))}
            </ul>
            <Text onInk muted className="text-sm">
              Program details, schedules, and fees on request — reach out and we&rsquo;ll
              guide you to the right fit.
            </Text>
          </Container>
        </Section>
      )}

      <Section className="py-14 lg:py-20">
        <Container className="flex flex-col gap-8 lg:max-w-[720px] lg:px-0">
          <Eyebrow>More for {hubLabel.toLowerCase()}</Eyebrow>
          <div>
            {siblings.map((sibling) => (
              <ArrowLink key={sibling.slug} href={`${hubHref}/${sibling.slug}`}>
                {sibling.title}
              </ArrowLink>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
