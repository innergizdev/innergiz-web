import { NextResponse } from "next/server";
import type { ContactPayload } from "@/lib/api";

// TODO: PHASE 3 — replace mock with real implementation.
// Planned: validate payload, send email to SITE.email via provider (Resend or
// Formspree — owner decision pending), rate-limit by IP. No database needed.
// DO NOT add real logic before Phase 3 is explicitly started (see PROJECT-STATUS.md).
export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  // Honeypot tripped — pretend success so bots learn nothing.
  if (payload.company) {
    return NextResponse.json({ ok: true, message: "Thank you! We'll be in touch soon." });
  }

  if (!payload.name?.trim() || !payload.email?.trim() || !payload.message?.trim()) {
    return NextResponse.json(
      { ok: false, message: "Please fill in your name, email, and message." },
      { status: 400 },
    );
  }

  // Mock response — nothing is stored or sent yet.
  return NextResponse.json({
    ok: true,
    message: "Thank you! We'll be in touch soon. (Mock response — backend arrives in Phase 3.)",
  });
}
