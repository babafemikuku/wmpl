"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

// ── Data ─────────────────────────────────────────────────────────────────────

const engagementStages = [
  {
    index: "01",
    label: "Discovery and scoping",
    summary:
      "We partner with you and your senior team to build a shared picture of the current state.",
    tags: ["Stakeholder interviews", "Process review", "Gap analysis"],
    detail:
      "Every WMP engagement starts with a conversation. 45 minutes to understand your business needs, asking direct questions and expecting direct answers. If WMP is the right partner, we agree scope through discovery — designing it in partnership and confirming it in writing before any work begins. We'll tell you honestly if we're not the right fit and point you in a better direction.",
  },
  {
    index: "02",
    label: "Design and build",
    summary:
      "We design the frameworks, structures, and plans. You shape it as it develops.",
    tags: ["Frameworks", "Structures", "Iterative review"],
    detail:
      "The work is built with the people who know the business best. Our strongest partnerships happen when leaders are direct about what's breaking, open to being challenged, and ready to make decisions. You bring the context and the commitment. We bring the expertise and the structure.",
  },
  {
    index: "03",
    label: "Handover and embed",
    summary:
      "We don't hand over a document and disappear. We make sure the work lands before we leave.",
    tags: ["Manager enablement", "Leadership alignment", "90-day plan"],
    detail:
      "WMP leaves. The structure stays. Programme-level engagements include a separately scoped implementation phase. Ownership transfers to your leadership team in full — we build the capability for them to run it without us.",
  },
];

const engagementProps = [
  {
    label: "Fixed Fee",
    description:
      "A fixed engagement costs a fraction of what the problem is currently costing you. No surprises. No scope creep you haven't agreed to.",
  },
  {
    label: "Senior Partner Led",
    description:
      "Every engagement is led by a senior partner, not handed to junior consultants after the pitch. The person you meet is the person doing the work.",
  },
  {
    label: "Time-bound",
    description:
      "We agree the timeline before any work begins. A focused service runs around 4 weeks. A full programme can take up to 15 weeks.",
  },
  {
    label: "Owned by you",
    description:
      "We build the system. Running it is yours. No retainers. No dependency. No ongoing operations. Clean handover every time.",
  },
];

const faqs = [
  {
    q: "How long does an engagement take?",
    a: "It depends on what you need. A focused service runs around 4 weeks. A full programme can take up to 15 weeks. We agree the timeline before any work begins so there are no surprises.",
  },
  {
    q: "Can we start with one service and expand?",
    a: "Yes. Most engagements start with one problem. As the work develops, if something else needs addressing we'll scope it together. Where things go is always your decision.",
  },
  {
    q: "What if our priorities shift mid-engagement?",
    a: "It happens, and it's not a problem. If something changes, we talk about it directly, agree what that means for scope and cost, and nothing moves until you've confirmed it.",
  },
  {
    q: "How involved does our team need to be?",
    a: "The first two weeks ask the most of you. After that it's regular working sessions, not constant availability. The one thing we do need is the right people in the room when decisions have to be made. That's what makes the work land.",
  },
];

const moments = [
  {
    label: "Foundation",
    trigger: "You have 40 employees.",
    detail:
      "New hires are figuring things out for themselves, nobody owns processes, and nothing runs consistently without you. The time you spend managing what your managers should own is time you're not spending on the business.",
  },
  {
    label: "Anticipation",
    trigger: "Revenue is growing, but the structure is starting to strain.",
    detail:
      "The ways of working at 20 people is starting to cost you at 70 people. It's still in control for now, but you can see where this is heading. Fixing structure before it breaks costs significantly less than fixing it after.",
  },
  {
    label: "Scale",
    trigger: "More people, more complexity, more cost.",
    detail:
      "But somehow the pressure isn't easing. You haven't built a workforce strategy to make sense of it. There's a difference between building a team and building with intention. You're starting to feel it. Every misaligned hire costs more than the salary.",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HowWeWorkPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="flex flex-1 flex-col">
      {/* ── HERO ── */}
      <section className="grain-overlay grid-bg relative min-h-[60vh] overflow-hidden bg-near-black">
        <HeroAccentLine />

        <div className="container relative flex min-h-[40vh] flex-col pb-0 pt-32">
          <h1 className="mt-8 max-w-5xl mx-auto text-balance text-[clamp(2.8rem,5.5vw,4.5rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-parchment">
            Direct questions. Honest answers. Work that lands.
          </h1>
        </div>
      </section>

      {/* ── OPENING STATEMENT ── */}
      <section className="bg-parchment py-24 lg:py-32">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="mt-6 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-near-black">
                Built with you. Not handed to you.
              </h2>
            </div>
            <div className="space-y-5 text-[1rem] leading-[1.9] text-warm-ash">
              <p>
                Every WMP engagement starts with a conversation. 45 minutes to
                understand your business needs, asking direct questions and
                expecting direct answers.
              </p>
              <p>
                If WMP is the right partner for your business, we&apos;ll agree
                a scope through discovery, design it in partnership, and confirm
                it in writing before any work begins.
              </p>
              <p className="">
                We&apos;ll tell you honestly if we&apos;re not the right fit and
                point you in a better direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT STAGES ── */}
      <section className="bg-near-black py-24 lg:py-32">
        <div className="container">
          <div className="mb-16 grid items-end gap-12">
            <div>
              <h2 className="mt-6 text-center text-5xl font-semibold leading-[1.1] tracking-[-0.03em] text-white">
                What a typical engagement looks like
              </h2>
            </div>
          </div>

          {/* Timeline — horizontal on desktop, vertical on mobile */}
          <div className="relative">
            {/* Desktop connector line */}
            <div className="absolute left-0 right-0 top-[2.4rem] hidden h-px bg-parchment/10 lg:block" />

            <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-6">
              {engagementStages.map((stage, i) => (
                <div key={stage.index} className="group relative">
                  {/* Mobile: left border spine */}
                  <div className="absolute bottom-0 left-[1.95rem] top-0 w-px bg-parchment/10 lg:hidden" />

                  <div className="relative p-0 pb-10 pl-16 lg:pl-0 lg:pt-0">
                    {/* Node */}
                    <div className="absolute left-0 top-0 flex h-16 w-16 flex-shrink-0 items-center justify-center lg:relative lg:mb-0 lg:h-auto lg:w-auto lg:flex-row lg:items-start">
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-parchment/20 bg-near-black text-[11px] font-semibold tracking-[0.1em] text-parchment/50 transition-colors duration-300 group-hover:border-electric-violet group-hover:text-electric-violet lg:h-12 lg:w-12">
                        {stage.index}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:mt-0 lg:px-0 lg:pt-20">
                      <h3 className="text-[1.2rem] lg:text-center font-semibold leading-[1.35] tracking-[-0.02em] text-parchment">
                        {stage.label}
                      </h3>
                      <p className="mt-3 text-[1rem] text-justify leading-[1.8] text-parchment/50">
                        {stage.summary}
                      </p>

                      {/* Tags */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {stage.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-[2px] border border-parchment/10 px-2.5 py-1 text-[0.9rem] font-medium tracking-[0.12em] text-parchment/35"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WMP leaves banner */}
          <div className="mt-14 flex items-center justify-between rounded-sm border border-parchment/10 bg-parchment/[0.03] px-8 py-5">
            <p className="text-[1rem] font-semibold tracking-[-0.01em] text-parchment">
              WMP leaves. The structure stays.
            </p>
            <p className="hidden text-[1rem] text-parchment/40 sm:block">
              Programme-level engagements include a separately scoped
              implementation phase.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOUR PILLARS ── */}
      <section className="bg-parchment py-24 lg:py-32">
        <div className="container">
          <div className="mb-16">
            <h2 className="mt-6 text-center text-5xl font-semibold leading-[1.1] tracking-[-0.03em] text-near-black">
              Every engagement is
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
            {engagementProps.map((prop, i) => (
              <div key={prop.label} className="group bg-parchment p-8">
                {/* Ghost number */}
                {/* <p
                  className="mb-6 font-display text-[3rem] font-bold leading-none text-near-black opacity-[0.06]"
                  aria-hidden
                >
                  0{i + 1}
                </p> */}

                {/* Label */}
                <p className="text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-electric-violet">
                  {prop.label}
                </p>

                {/* Description
                <p className="mt-4 text-[0.875rem] leading-[1.85] text-warm-ash">
                  {prop.description}
                </p> */}

                {/* Accent */}
                {/* <div className="mt-8 h-px w-full bg-border/60">
                  <div className="h-px w-0 bg-electric-violet transition-all duration-500 group-hover:w-full" />
                </div> */}
              </div>
            ))}
          </div>

          <FadeIn delay={0.2} className="mt-16">
            <div className="overflow-hidden rounded-sm border-l-4 border-electric-violet bg-violet-tint px-10 py-7">
              <p className="text-[1rem] font-semibold leading-[1.6] text-near-black">
                A fixed engagement costs a fraction of what the problem is
                currently costing you.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-linen py-24 lg:py-32">
        <div className="container">
          <div className="grid items-start gap-16 lg:grid-cols-[1fr_2fr]">
            {/* Sticky heading */}
            <div className="lg:sticky lg:top-24">
              {/* <SectionEyebrow>FAQs</SectionEyebrow> */}
              <h2 className="mt-6 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-near-black">
                Direct answers to direct questions.
              </h2>
              <p className="mt-4 text-[1rem] leading-[1.8] text-warm-ash">
                If something isn&apos;t covered here, ask us directly.
              </p>
              <Link
                href="/contact"
                className="mt-6 flex items-center gap-2 text-[1rem] font-medium uppercase tracking-[0.2em] text-electric-violet transition-opacity hover:opacity-70"
              >
                Get in touch
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Accordion */}
            <div className="divide-y divide-border/60 overflow-hidden rounded-sm border border-border/60">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-parchment">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-start justify-between gap-6 px-8 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-violet"
                  >
                    <span className="text-[1rem] font-semibold leading-[1.4] tracking-[-0.01em] text-near-black">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 text-electric-violet transition-transform duration-300 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Answer panel */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === i
                        ? "max-h-48 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-8 pb-7 text-[0.9rem] leading-[1.85] text-warm-ash">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="grain-overlay relative overflow-hidden bg-near-black py-40 text-center">
        <ConcentricRings />

        {/* Tagline */}
        <div className="container relative">
          <SectionEyebrow light centered>
            Ready
          </SectionEyebrow>

          <h2 className="mx-auto mt-6 max-w-[24ch] text-balance text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-parchment">
            Ready to build the structure{" "}
            <em className="italic text-parchment/30">your business needs?</em>
          </h2>

          <p className="mx-auto mt-6 max-w-[42ch] text-[0.95rem] leading-[1.8] text-parchment/45">
            Get in touch. We&apos;ll arrange a conversation at a time that
            works. You&apos;ll know within 45 minutes whether WMP is the right
            partner.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Get in touch</Link>
            </Button>
            <Link
              href="/services"
              className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-parchment/50 transition-colors hover:text-parchment"
            >
              See what we do
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Closing line */}
          <p className="mt-16 text-[0.75rem] uppercase tracking-[0.3em] text-parchment/20">
            We partner with you to design the system. Running it is yours.
          </p>
        </div>
      </section>
    </main>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

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

function ConcentricRings() {
  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      aria-hidden
    >
      {[500, 700, 900].map((size) => (
        <div
          key={size}
          className="absolute rounded-full border border-electric-violet"
          style={{ width: size, height: size }}
        />
      ))}
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
