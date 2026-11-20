import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceArticle from "@/components/sections/ServiceArticle";
import CtaBand from "@/components/sections/CtaBand";
import { serviceBySlug, servicesFor } from "@/content/services";

// Statically generate the five organisation services from the typed data.
export function generateStaticParams() {
  return servicesFor("organisations").map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return { title: service.title, description: service.oneLiner };
}

export default async function OrganisationServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service || service.audience !== "organisations") notFound();
  return (
    <>
      <ServiceArticle service={service} />
      <CtaBand />
    </>
  );
}
