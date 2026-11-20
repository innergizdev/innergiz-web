import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import CtaBand from "@/components/sections/CtaBand";
import { LEGAL_DOCS, legalBySlug } from "@/content/legal";
import { SITE } from "@/lib/constants";

// One template renders /terms, /privacy, and /refund-policy from typed data.
export function generateStaticParams() {
  return LEGAL_DOCS.map((d) => ({ legal: d.slug }));
}

export const dynamicParams = false; // anything else under /<slug> is a real 404

export async function generateMetadata({
  params,
}: {
  params: Promise<{ legal: string }>;
}): Promise<Metadata> {
  const { legal } = await params;
  const doc = legalBySlug(legal);
  if (!doc) return {};
  return { title: doc.title, description: doc.description };
}

export default async function LegalPage({ params }: { params: Promise<{ legal: string }> }) {
  const { legal } = await params;
  const doc = legalBySlug(legal);
  if (!doc) notFound();

  return (
    <>
    <Section className="pt-36 lg:pt-48">
      <Container className="flex max-w-[880px] flex-col gap-10 lg:px-0">
        <div className="flex flex-col gap-6">
          <Eyebrow>Legal — {SITE.brandName}</Eyebrow>
          <Heading level={1} className="max-w-[14ch] text-[clamp(2.5rem,6vw,5rem)]">
            {doc.title}
          </Heading>
          {doc.effectiveDate && (
            <p className="font-mono text-xs uppercase tracking-mono text-ink/50">
              Effective {doc.effectiveDate}
            </p>
          )}
          {doc.intro?.map((paragraph) => <Text key={paragraph.slice(0, 32)}>{paragraph}</Text>)}
        </div>
        <div className="flex flex-col gap-8">
          {doc.sections.map((section) => (
            <section
              key={section.heading}
              className="flex flex-col gap-3 border-t border-champagne/40 pt-6"
            >
              <h2 className="font-heading text-xl uppercase">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-sm leading-[1.7] text-ink/80">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="flex list-disc flex-col gap-2 pl-5 text-sm leading-[1.7] text-ink/80 marker:text-champagne">
                  {section.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 40)}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </Container>
    </Section>
    <CtaBand />
    </>
  );
}
