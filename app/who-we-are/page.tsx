"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "10+", label: "Years experience" },
  { value: "5+", label: "Industries" },
  { value: "13+", label: "Markets" },
];

const markets = ["United Kingdom", "Europe", "Africa", "North America"];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function WhoWeArePage() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <BioSection />
      <StatsStrip />
      <SectorMarkets />
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
              <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-electric-violet">
                Afua Mensah
              </p>
              <p className="mt-0.5 text-[12px] text-parchment/35">
                Founder, WMP
              </p>
            </div>
          </motion.div>

          {/* Mobile text */}
          <div>
            <h1 className="text-[clamp(2.2rem,8vw,3rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-parchment">
              {["Structures built", "by someone who's", "done it before."].map(
                (line, i) => (
                  <motion.span
                    key={i}
                    className="block"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.5 + i * 0.15,
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {line}
                  </motion.span>
                ),
              )}
            </h1>

            <motion.p
              className="mt-6 text-[0.95rem] leading-[1.85] text-parchment/55"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.0,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Afua Mensah is the Principal of Workforce Management Partners — a
              consultancy that partners with leaders to design the workforce
              structures their businesses need to scale.
            </motion.p>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.5 }}
            >
              <Button asChild size="lg">
                <Link href="/contact">Work with Afua</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Desktop: side-by-side layout */}
        <div className="hidden min-h-[72vh] grid-cols-[1fr_auto] items-center gap-16 lg:grid">
          {/* Left: text */}
          <div className="max-w-[82ch]">
            <h1 className="mt-8 text-[clamp(2.4rem,4.5vw,4rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-parchment">
              {[
                { text: "Structures built" },
                { text: "by someone who's" },
                { text: "done it before." },
              ].map((line, i) => (
                <motion.span
                  key={i}
                  className="block"
                  initial={{ opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5 + i * 0.17,
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line.text}
                </motion.span>
              ))}
            </h1>

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
              Afua Mensah is the Principal of Workforce Management Partners — a
              consultancy that partners with leaders to design the workforce
              structures their businesses need to scale.
            </motion.p>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.55 }}
            >
              <Button asChild size="lg">
                <Link href="/contact">Work with Afua</Link>
              </Button>
            </motion.div>
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
              <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-electric-violet">
                Afua Mensah
              </p>
              <p className="mt-0.5 text-[12px] text-parchment/35">
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
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.25em] text-electric-violet">
              Background
            </p>
            <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.9] text-warm-ash">
              <p>
                Afua Mensah is the Principal of Workforce Management Partners, a
                consultancy that partners with leaders to design the workforce
                structures their businesses need to scale. She brings over a
                decade of experience working directly with founders and senior
                leadership teams in international, high-growth environments.
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
                  <p className="text-[0.75rem] font-medium uppercase tracking-[0.22em] text-electric-violet">
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
    <section className="grain-overlay bg-near-black py-24 lg:py-32">
      <div className="container">
        <FadeIn className="mb-16 text-center">
          <p className="text-[0.75rem] font-medium uppercase tracking-[0.28em] text-electric-violet">
            The track record
          </p>
        </FadeIn>

        <motion.div
          className="grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-parchment/[0.07] bg-parchment/[0.05]"
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
              className="flex flex-col items-center justify-center bg-near-black px-4 py-10 text-center"
            >
              <p className="font-display text-[2.5rem] font-bold leading-none tracking-[-0.04em] text-parchment sm:text-[3.5rem] lg:text-[4.5rem]">
                {stat.value}
              </p>
              <p className="mt-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-parchment/40 sm:text-[0.75rem]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Markets ───────────────────────────────────────────────────────────────────

function SectorMarkets() {
  return (
    <section className="border-b border-border/60 bg-parchment py-24 lg:py-32">
      <div className="container">
        <FadeIn>
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.25em] text-electric-violet">
            Markets
          </p>
          <h3 className="mt-4 text-[1.6rem] font-semibold leading-[1.2] tracking-[-0.02em] text-near-black">
            International experience.
          </h3>
          <ul className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
            {markets.map((m, i) => (
              <motion.li
                key={m}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.08 * i,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="h-[5px] w-[5px] flex-shrink-0 rounded-full bg-electric-violet" />
                <span className="text-[1rem] text-warm-ash">{m}</span>
              </motion.li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────

function CtaSection() {
  return (
    <section className="grain-overlay relative overflow-hidden bg-near-black py-40 text-center">
      <ConcentricRings />
      <FadeIn className="container relative">
        <div className="inline-flex items-center gap-3">
          <div className="h-px w-8 bg-electric-violet" />
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-electric-violet">
            Next step
          </p>
          <div className="h-px w-8 bg-electric-violet" />
        </div>

        <h2 className="mx-auto mt-6 max-w-[22ch] text-balance text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-parchment">
          Ready to build the structure{" "}
          <em className="italic text-parchment/35">your business needs?</em>
        </h2>
        <p className="mx-auto mt-6 max-w-[44ch] text-[0.95rem] leading-[1.8] text-parchment/45">
          Get in touch. You&apos;ll know within 45 minutes whether WMP is the
          right partner for where you&apos;re going.
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
