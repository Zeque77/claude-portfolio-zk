import { NextResponse } from "next/server";

const MAX_FIELD_LENGTH = 5000;
const RECIPIENT_EMAIL = "zeque77@gmail.com";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Please check the form and try again." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ message: "Please check the form and try again." }, { status: 400 });
  }

  const fields = body as Record<string, unknown>;

  const name = typeof fields.name === "string" ? fields.name.trim() : "";
  const email = typeof fields.email === "string" ? fields.email.trim() : "";
  const message = typeof fields.message === "string" ? fields.message.trim() : "";

  if (typeof fields.company === "string" && fields.company.trim()) {
    return NextResponse.json({ message: "Please try again." }, { status: 400 });
  }

  if (
    !name || name.length > 120 || !email || email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !message || message.length > MAX_FIELD_LENGTH
  ) {
    return NextResponse.json({ message: "Please provide a valid name, email, and message." }, { status: 400 });
  }

  try {
    const response = await fetch(FORMSUBMIT_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `Portfolio contact from ${name}`,
        _template: "table",
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    const result = (await response.json()) as { success?: boolean | string; message?: string };
    const requiresActivation = /confirm|activation/i.test(result.message ?? "");

    if (requiresActivation) {
      return NextResponse.json(
        { message: "Check the recipient inbox for FormSubmit’s one-time activation email, confirm it, then send your message again." },
        { status: 503 },
      );
    }

    if (!response.ok || result.success === false || result.success === "false") {
      return NextResponse.json(
        { message: "The message could not be delivered. Please try again or connect on LinkedIn." },
        { status: 502 },
      );
    }

    return NextResponse.json(
      {
        message: "Message submitted. If this is the first use, confirm FormSubmit’s activation email sent to the recipient to enable delivery.",
      },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof Error && error.name === "TimeoutError") {
      return NextResponse.json(
        { message: "The email service took too long to respond. Please try again." },
        { status: 504 },
      );
    }

    return NextResponse.json(
      { message: "The contact service is temporarily unavailable. Please try again later." },
      { status: 502 },
    );
  }
}