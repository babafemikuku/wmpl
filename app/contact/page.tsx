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
import Hero from "@/components/contact/Hero";
import { ContactSection } from "@/components/contact/ContactSection";
import { FadeUp } from "@/components/global/animations";
import { TaglineBanner } from "@/components/global/TaglineBanner";

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
      <Hero />
      <ContactSection />

      <div className="container py-10">
        <FadeUp delay={0.3}>
          <TaglineBanner text="We design the system with you, so your team can run it with confidence." />
        </FadeUp>
      </div>
    </main>
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
