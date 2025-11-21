"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { resumeData } from "@/lib/resumeData";

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
      <div className="space-y-6">
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
        <Card>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white uppercase tracking-[0.2rem] text-xs">
              Connect with me
            </h3>
            <div className="flex flex-wrap gap-4">
              {resumeData.socialLinks.map((social) => (
                <Link
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-none border border-white/20 text-white/80 px-4 py-2 text-sm uppercase tracking-[0.2rem] hover:border-white/60 hover:text-white transition"
                >
                  {social.platform}
                </Link>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

