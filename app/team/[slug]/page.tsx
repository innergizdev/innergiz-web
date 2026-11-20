import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Text from "@/components/ui/Text";
import CtaBand from "@/components/sections/CtaBand";
import { memberBySlug, membersWithBio } from "@/content/team";

// Bio pages exist only for members with migrated bios (5 of 6 — see content/team.ts).
export function generateStaticParams() {
  return membersWithBio().map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = memberBySlug(slug);
  if (!member) return {};
  return { title: member.name, description: member.credentials };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = memberBySlug(slug);
  if (!member || member.bio.length === 0) notFound();

  return (
    <>
      <Section className="pt-36 lg:pt-48">
        <Container className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-20">
          <div className="flex flex-col gap-6">
            <div className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-lg bg-ivory-deep">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                sizes="320px"
                priority
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Eyebrow>{member.credentials}</Eyebrow>
            <Heading level={1} className="max-w-[10ch] text-[clamp(2.5rem,6vw,5rem)]">
              {member.name}
            </Heading>
            <p className="font-mono text-xs uppercase tracking-mono text-teal">{member.role}</p>
            <div className="flex flex-col gap-5">
              {member.bio.map((paragraph) => (
                <Text key={paragraph.slice(0, 32)}>{paragraph}</Text>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {member.certifications.length > 0 && (
        <Section tone="deep" className="py-14 lg:py-20">
          <Container className="flex flex-col gap-8">
            <Heading level={2}>Certifications</Heading>
            <ul className="grid gap-x-12 gap-y-4 lg:grid-cols-2">
              {member.certifications.map((certification) => (
                <li
                  key={certification.slice(0, 40)}
                  className="border-b border-champagne-faint pb-4 text-sm leading-[1.7] text-ink/80"
                >
                  {certification}
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}
      <CtaBand />
    </>
  );
}
