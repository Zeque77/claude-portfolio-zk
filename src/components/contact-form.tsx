"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(result.message ?? "The message could not be sent.");

      setState("success");
      setMessage(result.message ?? "Your message has been submitted.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-heading">
        <span className="eyebrow"><i /> Start a conversation</span>
        <h3>Tell me what you’re building.</h3>
        <p>Your message is sent by email. First-time provider activation may be required.</p>
      </div>
      <label htmlFor="contact-name">Your name</label>
      <input id="contact-name" name="name" autoComplete="name" required maxLength={120} />
      <label htmlFor="contact-email">Email address</label>
      <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} />
      <label htmlFor="contact-message">Message</label>
      <textarea id="contact-message" name="message" rows={4} required maxLength={5000} />
      <label className="contact-honeypot" htmlFor="contact-company">Leave this field empty</label>
      <input className="contact-honeypot" id="contact-company" name="company" tabIndex={-1} autoComplete="off" />
      <Button type="submit" size="lg" className="button-primary" disabled={state === "sending"}>
        {state === "sending" ? <LoaderCircle className="animate-spin" aria-hidden="true" /> : <>Send message <ArrowUpRight aria-hidden="true" /></>}
      </Button>
      <p className={`contact-form-status status-${state}`} role="status" aria-live="polite">{message}</p>
    </form>
  );
}