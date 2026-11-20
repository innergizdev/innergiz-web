import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceArticle from "@/components/sections/ServiceArticle";
import CtaBand from "@/components/sections/CtaBand";
import { serviceBySlug, servicesFor } from "@/content/services";

// Statically generate the three individual services from the typed data.
export function generateStaticParams() {
  return servicesFor("individuals").map((s) => ({ slug: s.slug }));
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

export default async function IndividualServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service || service.audience !== "individuals") notFound();
  return (
    <>
      <ServiceArticle service={service} />
      <CtaBand />
    </>
  );
}
