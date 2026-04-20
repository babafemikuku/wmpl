"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "10+", label: "Years experience" },
  { value: "5+", label: "Industries" },
  { value: "13+", label: "Countries" },
];

const markets = ["United Kingdom", "Europe", "Africa", "North America"];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function WhoWeArePage() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      {/* <BioSection /> */}
      <StatsStrip />
      {/* <SectorMarkets /> */}
      <CtaSection />
    </main>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="grain-overlay relative overflow-hidden bg-near-black">
      <div className="container relative z-10 py-24 lg:py-32">
        {/* Mobile: stacked layout — image first, then text */}
        <div className="flex flex-col gap-12 lg:hidden">
          {/* Mobile image — full width, portrait crop */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="relative mx-auto w-full max-w-[280px]"
          >
            <div
              className="relative overflow-hidden rounded-sm"
              style={{ aspectRatio: "3/4" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/afua-mensah.jpeg"
                alt="Afua Mensah, Principal of WMP"
                className="h-full w-full object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-near-black/60 to-transparent" />
            </div>
            <div className="mt-3">
              <p className="text-[1rem] font-semibold uppercase tracking-[0.25em] text-electric-violet">
                Afua Mensah
              </p>
              <p className="mt-0.5 text-[1rem] text-parchment/35">
                Founder, WMP
              </p>
            </div>
          </motion.div>

          {/* Mobile text */}
          <div>
            <motion.h1
              className="mt-8 text-[clamp(1.9rem,7.5vw,4.5rem)] font-semibold text-justify leading-[1.06] text-parchment"
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + 0 * 0.17,
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Afua Mensah
            </motion.h1>

            <motion.div
              className="mt-6 text-[1rem] leading-[1.85] text-parchment/55"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.0,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <blockquote className="italic">
                "Most businesses don’t struggle because of strategy. They
                struggle because their business isn’t structured to deliver it."
              </blockquote>
              <p>
                Afua Mensah is the Principal of Workforce Management Partners, a
                consultancy that partners with leaders to design the workforce
                structures their businesses need to scale
              </p>
              <p>
                She brings over a decade of experience working directly with
                founders and senior leadership teams in international,
                high-growth environments. Her background spans technology,
                fintech, esports, media, and healthcare — across businesses
                operating in the UK, Europe, Africa, and North America. That
                breadth gives her a grounded understanding of how workforce
                strategy has to adapt to different commercial contexts, and what
                stays constant regardless of sector or market.
              </p>
              <p>
                Afua's work is focused on a specific problem: when a business
                grows faster than its structure, the symptoms show up
                everywhere. Accountability becomes unclear. Hiring gets
                reactive. Founders can't step back. She partners with leadership
                teams to design the operational backbone that allows a business
                to perform without depending on one or two individuals to hold
                it together.
              </p>
              <p>
                Her approach is commercial first. Roles and structures are
                designed around how the business actually needs to work — the
                result is organisations that operate with greater cost
                discipline and the kind of consistency that makes growth
                sustainable rather than exhausting.
              </p>
              <p>
                Afua holds a CIPD Level 7 qualification in Strategic People
                Management, the highest professional qualification in the field,
                and brings that rigour to every engagement alongside practical
                delivery experience across complex, fast-moving organisations.
              </p>
              <p>
                Through WMP, she works with leaders who are ready to build
                something that runs properly.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Desktop: side-by-side layout */}
        <div className="hidden min-h-[72vh] grid-cols-[1fr_auto] items-center gap-16 lg:grid">
          {/* Left: text */}
          <div className="max-w-[82ch]">
            <motion.h1
              className="mt-8 text-[clamp(1.9rem,7.5vw,4.5rem)] font-semibold leading-[1.06] text-parchment"
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + 0 * 0.17,
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Afua Mensah
            </motion.h1>

            <motion.p
              className="mt-8 max-w-[74ch] text-[1rem] leading-[1.85] text-parchment/55"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="space-y-5 text-[1.05rem] leading-[1.9] text-parchment">
                <blockquote className="italic">
                  "Most businesses don’t struggle because of strategy. They
                  struggle because their business isn’t structured to deliver
                  it."
                </blockquote>
                <p>
                  Afua Mensah is the Principal of Workforce Management Partners,
                  a consultancy that partners with leaders to design the
                  workforce structures their businesses need to scale
                </p>
                <p>
                  She brings over a decade of experience working directly with
                  founders and senior leadership teams in international,
                  high-growth environments. Her background spans technology,
                  fintech, esports, media, and healthcare — across businesses
                  operating in the UK, Europe, Africa, and North America. That
                  breadth gives her a grounded understanding of how workforce
                  strategy has to adapt to different commercial contexts, and
                  what stays constant regardless of sector or market.
                </p>
                <p>
                  Afua's work is focused on a specific problem: when a business
                  grows faster than its structure, the symptoms show up
                  everywhere. Accountability becomes unclear. Hiring gets
                  reactive. Founders can't step back. She partners with
                  leadership teams to design the operational backbone that
                  allows a business to perform without depending on one or two
                  individuals to hold it together.
                </p>
                <p>
                  Her approach is commercial first. Roles and structures are
                  designed around how the business actually needs to work — the
                  result is organisations that operate with greater cost
                  discipline and the kind of consistency that makes growth
                  sustainable rather than exhausting.
                </p>
                <p>
                  Afua holds a CIPD Level 7 qualification in Strategic People
                  Management, the highest professional qualification in the
                  field, and brings that rigour to every engagement alongside
                  practical delivery experience across complex, fast-moving
                  organisations.
                </p>
                <p>
                  Through WMP, she works with leaders who are ready to build
                  something that runs properly.
                </p>
              </div>
            </motion.p>
          </div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative h-[420px] w-[300px] overflow-hidden rounded-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/afua-mensah.jpeg"
                alt="Afua Mensah, Principal of WMP"
                className="h-full w-full object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-near-black/60 to-transparent" />
            </div>

            <div className="mt-4">
              <p className="text-[1rem] font-semibold uppercase text-electric-violet">
                Afua Mensah
              </p>
              <p className="mt-0.5 text-[1rem] text-parchment/35">
                Founder, WMP
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Bio + Quote ───────────────────────────────────────────────────────────────

function BioSection() {
  return (
    <section
      id="bio"
      className="border-b border-border/60 bg-parchment py-24 lg:py-32"
    >
      <div className="container">
        <div className="grid items-start gap-16 lg:grid-cols-[2.2fr_1fr]">
          {/* Left: full bio */}
          <FadeIn>
            {/* <p className="text-[1rem] font-semibold uppercase tracking-[0.25em] text-electric-violet">
              Background
            </p> */}
            <div className="space-y-5 text-[1.05rem] leading-[1.9] text-warm-ash">
              <p>
                She brings over a decade of experience working directly with
                founders and senior leadership teams in international,
                high-growth environments.
              </p>
              <p>
                Her background spans technology, fintech, esports, media, and
                healthcare — across businesses operating in the UK, Europe,
                Africa, and North America. That breadth gives her a grounded
                understanding of how workforce strategy has to adapt to
                different commercial contexts, and what stays constant
                regardless of sector or market.
              </p>
              <p>
                Afua's work is focused on a specific problem: when a business
                grows faster than its structure, the symptoms show up
                everywhere. Accountability becomes unclear. Hiring gets
                reactive. Founders can't step back. She partners with leadership
                teams to design the operational backbone that allows a business
                to perform without depending on one or two individuals to hold
                it together.
              </p>
              <p>
                Her approach is commercial first. Roles and structures are
                designed around how the business actually needs to work — the
                result is organisations that operate with greater cost
                discipline and the kind of consistency that makes growth
                sustainable rather than exhausting.
              </p>
              <p>
                Afua holds a CIPD Level 7 qualification in Strategic People
                Management, the highest professional qualification in the field,
                and brings that rigour to every engagement alongside practical
                delivery experience across complex, fast-moving organisations.
                Through WMP, she works with leaders who are ready to build
                something that runs properly.
              </p>
            </div>
          </FadeIn>

          {/* Right: pull quote */}
          <FadeIn delay={0.15}>
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-sm border border-border/60 bg-linen p-8">
                <div className="mb-6 h-px w-10 bg-electric-violet" />
                <p className="font-display text-[1.15rem] font-semibold italic leading-[1.55] tracking-[-0.01em] text-near-black">
                  &ldquo;Most businesses don&apos;t struggle because of
                  strategy. They struggle because their business isn&apos;t
                  structured to deliver it.&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-[5px] w-[5px] flex-shrink-0 rounded-full bg-electric-violet" />
                  <p className="text-[1rem] font-semibold uppercase text-electric-violet">
                    Afua Mensah
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ── Stats strip ───────────────────────────────────────────────────────────────

function StatsStrip() {
  return (
    <section className="grain-overlay bg-parchment py-24 lg:py-32">
      <div className="container">
        {/* <FadeIn className="mb-16 text-center">
          <p className="text-[0.75rem] font-medium uppercase tracking-[0.28em] text-electric-violet">
            The track record
          </p>
        </FadeIn> */}

        <motion.div
          className="grid grid-cols-3 gap-px overflow-hidden rounded-sm bg-parchment/[0.05]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="flex flex-col items-center justify-center bg-parchment px-4 py-10 text-center"
            >
              <p className="font-display text-[2.5rem] font-bold leading-none tracking-[-0.04em] text-near-black sm:text-[3.5rem] lg:text-[4.5rem]">
                {stat.value}
              </p>
              <p className="mt-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-neat-black sm:text-[0.75rem]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────

function CtaSection() {
  return (
    <section className="grain-overlay relative overflow-hidden bg-near-black py-20 text-center lg:py-36">
      <ConcentricRings />
      <FadeIn className="container relative">
        <h2 className="mx-auto mt-6 max-w-[32ch] text-balance text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-parchment">
          Get in touch. We'll arrange a conversation at a time that works for
          both of us.
        </h2>

        <div className="mt-12">
          <Button asChild size="lg">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}

// ── Utilities ─────────────────────────────────────────────────────────────────

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

function ConcentricRings() {
  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      aria-hidden
    >
      {[500, 700, 900].map((size) => (
        <div
          key={size}
          className="absolute rounded-full border border-electric-violet/30"
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
}
