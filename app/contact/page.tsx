import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact us",
  description: `Questions, comments, or ready to start? Reach ${SITE.brandName} — ${SITE.email}.`,
};

const eyebrow = "font-mono text-[11px] uppercase tracking-[0.24em]";
const dtCls = "font-mono text-[10px] uppercase tracking-[0.2em] text-teal";

export default function ContactPage() {
  return (
    <section className="bg-ivory pb-[clamp(80px,12vh,150px)] pt-[clamp(140px,20vh,200px)]">
      <Container className="grid gap-[clamp(40px,6vw,80px)] lg:grid-cols-[1fr_1.15fr]">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <span className={`${eyebrow} inline-flex items-center gap-3 text-teal`}>
              <span className="h-px w-8 bg-champagne" />
              Contact
            </span>
            <h1 className="max-w-[9ch] font-heading text-[clamp(3rem,8vw,6.6rem)] uppercase leading-[0.88]">
              Get in touch
            </h1>
            <p className="max-w-[42ch] text-[clamp(16px,1.3vw,19px)] leading-[1.65] text-ink/70">
              Let us know if you have a question, want to leave a comment, or would like further
              information about {SITE.brandName}.
            </p>
          </div>
          <dl className="flex flex-col">
            <div className="flex flex-col gap-1 border-t border-ink/20 py-4">
              <dt className={dtCls}>Email</dt>
              <dd>
                <a href={`mailto:${SITE.email}`} className="text-ink/90 transition-colors hover:text-teal">
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-1 border-t border-ink/20 py-4">
              <dt className={dtCls}>Phone</dt>
              <dd>
                <a
                  href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}
                  className="text-ink/90 transition-colors hover:text-teal"
                >
                  {SITE.phone}
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-1 border-t border-ink/20 py-4">
              <dt className={dtCls}>Office</dt>
              <dd className="max-w-[32ch] leading-[1.7] text-ink/90">{SITE.address}</dd>
            </div>
          </dl>
        </div>

        {/* Form on an ivory-deep panel; its submit is the only crimson on the page */}
        <div className="rounded-sm bg-ivory-deep p-[clamp(24px,3vw,40px)]">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
