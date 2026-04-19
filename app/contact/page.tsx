"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  MessageSquare,
  ChevronDown,
  Clock,
  Users,
  Banknote,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ── Types / State ─────────────────────────────────────────────────────────────

type FormState = {
  name: string;
  email: string;
  company: string;
  size: string;
  message: string;
};

const companySizes = [
  { value: "", label: "Select company size" },
  { value: "under-20", label: "Under 20 people" },
  { value: "20-50", label: "20–50 people" },
  { value: "50-200", label: "50–200 people" },
  { value: "200+", label: "200+ people" },
];

const trustSignals = [
  {
    Icon: Clock,
    label: "45-minute call",
    sub: "You'll know if WMP is the right fit",
  },
  { Icon: Banknote, label: "Fixed fee", sub: "No retainers, no surprises" },
  {
    Icon: Users,
    label: "Senior partner led",
    sub: "Who you meet does the work",
  },
  { Icon: Calendar, label: "Time-bound", sub: "4–15 weeks and a clean exit" },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    size: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Simulate submission — wire to your form backend
    setSubmitted(true);
  };

  const isValid =
    form.name.trim() &&
    form.email.includes("@") &&
    form.company.trim() &&
    form.size &&
    form.message.trim();

  return (
    <main className="flex flex-1 flex-col">
      {/* ── Hero ── */}
      <section className="grain-overlay grid-bg relative min-h-[42vh] overflow-hidden bg-near-black">
        <HeroAccentLine />

        {/* Ghost icon */}
        <MessageSquare
          className="pointer-events-none absolute -right-10 -top-10 text-parchment opacity-[0.025]"
          style={{ width: 420, height: 420, strokeWidth: 0.55 }}
          aria-hidden
        />

        <div className="container relative flex min-h-[42vh] items-end pb-20 pt-32">
          <div className="max-w-4xl">
            <h1 className="mt-8 text-balance text-[clamp(2.6rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-parchment">
              Let&apos;s have a direct conversation.
            </h1>
            <p className="mt-5 max-w-5xl text-[1rem] leading-[1.8] text-parchment/50">
              Fill in the form and we&apos;ll arrange a call at a time that
              works for both of us.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main content: form + sidebar ── */}
      <section className="bg-parchment py-24 lg:py-32">
        <div className="container">
          <div className="grid items-start gap-16 lg:grid-cols-[2fr_1fr]">
            {/* ── Form ── */}
            <div>
              {submitted ? (
                <SuccessState />
              ) : (
                <div className="space-y-0">
                  {/* Form card */}
                  <div className="overflow-hidden rounded-sm border border-border/80 bg-parchment">
                    <div className="space-y-0 divide-y divide-border/50">
                      {/* Row: Name + Email */}
                      <div className="grid grid-cols-1 gap-px bg-border/80 sm:grid-cols-2">
                        <FieldWrapper focused={focused === "name"}>
                          <FieldLabel htmlFor="name">Full name</FieldLabel>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            placeholder=""
                            value={form.name}
                            onChange={handleChange}
                            onFocus={() => setFocused("name")}
                            onBlur={() => setFocused(null)}
                            className="w-full bg-transparent text-[1rem] text-near-black placeholder:text-warm-ash/55 focus:outline-none"
                          />
                        </FieldWrapper>

                        <FieldWrapper focused={focused === "email"}>
                          <FieldLabel htmlFor="email">Email address</FieldLabel>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder=""
                            value={form.email}
                            onChange={handleChange}
                            onFocus={() => setFocused("email")}
                            onBlur={() => setFocused(null)}
                            className="w-full bg-transparent text-[1rem] text-near-black placeholder:text-warm-ash/55 focus:outline-none"
                          />
                        </FieldWrapper>
                      </div>

                      {/* Row: Company + Size */}
                      <div className="grid grid-cols-1 gap-px bg-border/50 sm:grid-cols-2">
                        <FieldWrapper focused={focused === "company"}>
                          <FieldLabel htmlFor="company">
                            Company name
                          </FieldLabel>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            autoComplete="organization"
                            placeholder=""
                            value={form.company}
                            onChange={handleChange}
                            onFocus={() => setFocused("company")}
                            onBlur={() => setFocused(null)}
                            className="w-full bg-transparent text-[15px] text-near-black placeholder:text-warm-ash/55 focus:outline-none"
                          />
                        </FieldWrapper>

                        <FieldWrapper focused={focused === "size"}>
                          <FieldLabel htmlFor="size">Company size</FieldLabel>
                          <div className="relative flex items-center">
                            <select
                              id="size"
                              name="size"
                              value={form.size}
                              onChange={handleChange}
                              onFocus={() => setFocused("size")}
                              onBlur={() => setFocused(null)}
                              className={`w-full appearance-none bg-transparent text-[1rem] focus:outline-none ${
                                form.size
                                  ? "text-near-black"
                                  : "text-warm-ash/55"
                              }`}
                            >
                              {companySizes.map((opt) => (
                                <option
                                  key={opt.value}
                                  value={opt.value}
                                  disabled={opt.value === ""}
                                  className="text-near-black"
                                >
                                  {opt.label}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-0 h-4 w-4 text-warm-ash/50" />
                          </div>
                        </FieldWrapper>
                      </div>

                      {/* Message */}
                      <FieldWrapper focused={focused === "message"} tall>
                        <FieldLabel htmlFor="message">
                          What&apos;s driving this conversation?
                        </FieldLabel>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="Tell us what's breaking, what you're trying to solve, or where you want to get to..."
                          value={form.message}
                          onChange={handleChange}
                          onFocus={() => setFocused("message")}
                          onBlur={() => setFocused(null)}
                          className="w-full resize-none bg-transparent text-[15px] leading-[1.7] text-near-black placeholder:text-warm-ash/55 focus:outline-none"
                        />
                      </FieldWrapper>
                    </div>

                    {/* Submit */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 border-t border-border/60 bg-linen px-8 py-5">
                      <p className="text-[1rem] text-center lg:text-left leading-[1.6] text-warm-ash">
                        We&apos;ll respond within one business day to arrange a
                        time.
                      </p>
                      <button
                        onClick={handleSubmit}
                        disabled={!isValid}
                        className={`inline-flex w-full lg:w-[30%] text-center justify-center items-center gap-2 rounded-sm px-6 py-3 text-[1rem] font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-violet ${
                          isValid
                            ? "bg-near-black text-parchment hover:bg-electric-violet"
                            : "cursor-not-allowed bg-near-black/20 text-near-black/30"
                        }`}
                      >
                        Send message
                        <ArrowUpRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>

                  {/* Closing statement */}
                  <div className="mt-8 border-l-2 border-electric-violet pl-6"></div>
                </div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-8 lg:sticky lg:top-24">
              {/* Nav links */}
              <div className="space-y-3">
                <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-warm-ash">
                  Learn more first
                </p>
                {[
                  { label: "What we do", href: "/what-we-do" },
                  { label: "How we work", href: "/how-we-work" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between rounded-sm border border-border/60 bg-parchment px-5 py-3 text-[15px] font-medium text-near-black transition-colors hover:border-electric-violet/40 hover:bg-linen"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 text-electric-violet" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// ── Form sub-components ───────────────────────────────────────────────────────

function FieldWrapper({
  children,
  focused,
  tall = false,
}: {
  children: React.ReactNode;
  focused: boolean;
  tall?: boolean;
}) {
  return (
    <div
      className={`relative bg-parchment px-8 py-5 transition-colors duration-150 ${
        tall ? "col-span-full" : ""
      } ${focused ? "bg-linen" : ""}`}
    >
      {/* Left accent on focus */}
      <div
        className={`absolute bottom-0 left-0 top-0 w-0.5 transition-all duration-200 ${
          focused ? "bg-electric-violet" : "bg-transparent"
        }`}
      />
      {children}
    </div>
  );
}

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-[14px] font-medium uppercase tracking-[0.15em] text-warm-ash"
    >
      {children}
    </label>
  );
}

function SuccessState() {
  return (
    <div className="flex flex-col items-start overflow-hidden rounded-sm border border-border/60 bg-parchment">
      {/* Top bar */}
      <div className="w-full border-b border-border/60 bg-linen px-8 py-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-electric-violet">
          Message received
        </p>
      </div>

      <div className="px-8 py-12">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-violet-tint">
          <CheckCircle2
            className="h-6 w-6 text-electric-violet"
            strokeWidth={1.5}
          />
        </div>

        <h2 className="text-[1.6rem] font-semibold leading-[1.2] tracking-[-0.025em] text-near-black">
          We&apos;ll be in touch shortly.
        </h2>
        <p className="mt-4 max-w-[38ch] text-[0.95rem] leading-[1.8] text-warm-ash">
          Expect to hear from us within one business day to arrange a 45-minute
          conversation. That&apos;s when we&apos;ll both find out if this is the
          right fit.
        </p>

        <div className="mt-8 border-l-2 border-electric-violet pl-5">
          <p className="text-[0.875rem] italic leading-[1.75] text-warm-ash">
            "We partner with you to design the system. Running it is yours."
          </p>
        </div>

        <div className="mt-10 flex gap-4">
          <Link
            href="/what-we-do"
            className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-electric-violet transition-opacity hover:opacity-70"
          >
            Explore our services
            <ArrowUpRight className="h-3 w-3" />
          </Link>
          <Link
            href="/how-we-work"
            className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-warm-ash transition-opacity hover:opacity-70"
          >
            How we work
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── Shared sub-components ─────────────────────────────────────────────────────

function SectionEyebrow({
  children,
  light = false,
  centered = false,
}: {
  children: React.ReactNode;
  light?: boolean;
  centered?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-3 ${centered ? "mx-auto justify-center" : ""}`}
    >
      <div className="h-px w-8 bg-electric-violet" />
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-electric-violet">
        {children}
      </p>
    </div>
  );
}

function HeroAccentLine() {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-[38%] w-px opacity-40"
      style={{
        background:
          "linear-gradient(to bottom, transparent, hsl(263 55% 57%), transparent)",
      }}
      aria-hidden
    />
  );
}

function FadeIn({
  children,
  delay = 0,
  className = "",
  y = 28,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
