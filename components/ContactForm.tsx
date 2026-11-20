"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { submitContact } from "@/lib/api";

type Status = "idle" | "sending" | "sent" | "error";

const inputClasses =
  "w-full rounded-sm border border-champagne-faint bg-ivory px-4 py-3 text-base text-ink placeholder:text-ink/40 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30";

// Contact form UI (Phase 2). Submits through lib/api.ts to the mock route —
// the mock → real swap in Phase 3 never touches this component.
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    const result = await submitContact({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""), // honeypot
    }).catch(() => ({ ok: false, message: "Network error — please try again." }));

    setFeedback(result.message);
    setStatus(result.ok ? "sent" : "error");
    if (result.ok) form.reset();
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col gap-3 rounded-sm bg-ivory p-8" role="status">
        <p className="font-heading text-2xl uppercase">Message received</p>
        <p className="text-sm leading-[1.7] text-ink/70">{feedback}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-mono text-teal">Name *</span>
          <input name="name" required autoComplete="name" className={inputClasses} placeholder="Your name" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-mono text-teal">Email *</span>
          <input name="email" type="email" required autoComplete="email" className={inputClasses} placeholder="name@company.com" />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="font-mono text-xs uppercase tracking-mono text-teal">Phone</span>
        <input name="phone" type="tel" autoComplete="tel" className={inputClasses} placeholder="+91-" />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-mono text-xs uppercase tracking-mono text-teal">Message *</span>
        <textarea name="message" required rows={5} className={inputClasses} placeholder="What would you like to explore?" />
      </label>
      {/* Honeypot — hidden from people, irresistible to bots */}
      <input
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      {status === "error" && (
        <p className="text-sm text-error" role="alert">
          {feedback}
        </p>
      )}
      <div>
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
