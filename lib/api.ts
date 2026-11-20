// The ONLY place that calls /api/*. Components import these
// typed functions, so swapping the mock backend for the real one in Phase 3
// is a change to the route handlers — never to components.

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
  // Honeypot: real users never fill this hidden field; bots do.
  company?: string;
}

export interface ContactResponse {
  ok: boolean;
  message: string;
}

export async function submitContact(payload: ContactPayload): Promise<ContactResponse> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    return { ok: false, message: "Something went wrong. Please try again or email us directly." };
  }
  return res.json();
}
