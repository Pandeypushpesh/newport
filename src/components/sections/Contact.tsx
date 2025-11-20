"use client";

import { FormEvent, useState } from "react";

import { Card } from "@/components/ui/Card";

type FormState = "idle" | "loading" | "success" | "error";

export const Contact = () => {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setState("loading");
    setError(null);
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Unable to send message right now.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Unexpected error occurred.");
    }
  };

  return (
    <section id="contact" className="relative z-10 w-full max-w-3xl mx-auto px-4 py-20">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.3rem] text-white/50">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Let's build something
        </h2>
      </header>
      <Card>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs uppercase tracking-[0.3rem] text-white/60">
              Name
            </label>
            <input
              required
              id="name"
              name="name"
              className="rounded-none border border-white/20 bg-transparent px-4 py-3 text-white focus:border-white/60 outline-none transition"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-xs uppercase tracking-[0.3rem] text-white/60"
            >
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              className="rounded-none border border-white/20 bg-transparent px-4 py-3 text-white focus:border-white/60 outline-none transition"
              placeholder="you@email.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-xs uppercase tracking-[0.3rem] text-white/60"
            >
              Message
            </label>
            <textarea
              required
              id="message"
              name="message"
              rows={4}
              className="rounded-none border border-white/20 bg-transparent px-4 py-3 text-white focus:border-white/60 outline-none transition resize-none"
              placeholder="Project details, timelines, goals..."
            />
          </div>
          <button
            type="submit"
            disabled={state === "loading"}
            className="rounded-none bg-white text-black px-6 py-3 font-semibold tracking-[0.3rem] uppercase text-xs disabled:opacity-70 disabled:cursor-not-allowed transition hover:bg-slate-200"
          >
            {state === "loading" ? "Sending..." : "Send Message"}
          </button>
          {state === "success" && (
            <p className="text-green-300 text-sm" aria-live="polite">
              Message sent successfully.
            </p>
          )}
          {state === "error" && error && (
            <p className="text-red-400 text-sm" aria-live="assertive">
              {error}
            </p>
          )}
        </form>
      </Card>
    </section>
  );
};

