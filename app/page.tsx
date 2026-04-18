"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";

import { HomeOperatingLevers } from "@/components/home-operating-levers";
import { Button } from "@/components/ui/button";

// ── Data ────────────────────────────────────────────────────────────────────

const pillars = [
  {
    num: "01",
    title: "Build the Foundation",
    question: "Does your business actually run without you?",
    description:
      "This is the first breaking point when growth strains the system. WMP partners with you to establish the operational backbone with clear processes, defined ownership, and the infrastructure your business needs to run without the founder in every decision.",
  },
  {
    num: "02",
    title: "Design for Growth",
    question: "Do your people know what good looks like?",
    description:
      "Most organisations have clarity problems rather than performance problems. WMP partners with your leadership team to design the structure that ensures your people know what they own, what's expected, and how they'll be held accountable.",
  },
  {
    num: "03",
    title: "Scale Sustainably",
    question: "Can you scale without breaking what you've built?",
    description:
      "Scaling sustainably requires a disciplined workforce strategy. WMP partners with you to align headcount to revenue, map capability to ambition, and build leadership depth that doesn't depend on one or two individuals.",
  },
];

const wmpDoes = [
  "Workforce & organisational structure",
  "Role clarity & accountability frameworks",
  "Headcount & hiring strategy",
  "People/HR function operating models",
  "Manager effectiveness",
  "Succession & continuity frameworks",
];

const wmpDoesNot = [
  "HR or payroll administration",
  "HR operations management",
  "Recruitment execution",
  "Day-to-day employee relations",
  "Retainer-based advisory",
  "Outsourced people management",
];

const growthStages = [
  {
    label: "Foundation",
    description:
      "You have 40 employees. New hires are figuring things out for themselves, nobody owns processes, and nothing runs consistently without you. The time you spend managing what your managers should own is time you're not spending on the business.",
    bars: [30, 50, 45, 70, 60, 85, 75, 95, 80, 100],
  },
  {
    label: "Anticipation",
    description:
      "Your business is growing, so is revenue, but you can feel the structure beginning to strain. The ways of working at 20 people is starting to cost you at 70 people. Its still in control for now, but you can see where this is heading. Fixing structure before it breaks costs significantly less than fixing it after.",
    bars: [90, 85, 75, 70, 65, 60, 58, 55, 55, 52],
  },
  {
    label: "Scale",
    description:
      "The business is growing. The team is growing. But somehow the pressure isn't easing. More people, more complexity, more cost. You haven't built a workforce strategy to make sense of it. There's a difference between building a team and building with intention. You're starting to feel it. Every misaligned hire costs more than the salary",
    bars: [60, 65, 72, 78, 80, 88, 85, 92, 95, 100],
  },
];

// ── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Problem Statement ── */}
      <section className="border-b border-border/60 bg-parchment py-16 lg:py-24">
        <div className="container">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <FadeIn>
              <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-near-black">
                Your operating model is limiting your growth
              </h2>
              <div className="mt-8 overflow-hidden rounded-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/what-we-do.png"
                  alt="Leadership team in a working session"
                  className="h-64 w-full object-cover lg:h-72"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-[1.2rem] leading-[1.85] text-warm-ash">
                Most founders and leadership teams reach a point where the
                business is growing, but something feels wrong. Decisions are
                slow. Everyone is busy, but nothing is moving. Your best people
                are frustrated.
              </p>
              <p className="my-3 text-[1.2rem] leading-[1.85] text-warm-ash">
                It&apos;s not a people problem.{" "}
                <span className="font-medium text-near-black">
                  It&apos;s a structural problem.
                </span>
              </p>
              <p className="mt-3 text-[1.2rem] leading-[1.85] text-warm-ash">
                When a business scales faster than its operating model, the
                symptoms show up in missed delivery, unclear ownership, reactive
                hiring and unclear managerial responsibility. Every one of those
                symptoms has a commercial cost. Most leaders are paying it
                without realising. Workforce Management Partners exists for this
                moment. We partner with you to design the structure your
                business actually needs.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Three Pillars ── */}
      <section className="border-b border-border/60 bg-linen py-16 lg:py-24">
        <div className="container">
          <FadeIn className="mb-12">
            <h2 className="mt-6 text-center text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-near-black">
              WMP delivers services that support your commercial ambitions
              across three areas.
            </h2>
            <h3 className="mt-6 text-center text-base font-semibold leading-[1.1] tracking-[-0.03em] text-near-black/90 sm:text-xl">
              You bring the business context, we bring the expertise.
            </h3>
          </FadeIn>

          <motion.div
            className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border/60 bg-border/60 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
          >
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.num}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="cursor-default bg-parchment p-6 transition-colors duration-200 hover:bg-linen sm:p-10"
              >
                {/* <p
                  className="mb-5 font-display text-[3.5rem] font-bold leading-none text-near-black opacity-[0.07]"
                  aria-hidden
                >
                  {pillar.num}
                </p> */}
                <h3 className="mt-5 text-[1.35rem] font-semibold leading-[1.3] tracking-[-0.02em] text-near-black">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[1rem] font-medium italic text-electric-violet">
                  {pillar.question}
                </p>
                <p className="mt-4 text-[1rem] leading-7 text-warm-ash">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── The Insight ── */}
      <section className="grain-overlay relative overflow-hidden bg-near-black py-16 lg:py-24">
        <span
          className="pointer-events-none absolute -bottom-8 -left-2 select-none font-display text-[10rem] font-bold leading-none tracking-[-0.04em] text-parchment opacity-[0.02]"
          aria-hidden
        >
          Structure
        </span>

        <div className="container relative">
          <FadeIn className="mb-12">
            <h2 className="mt-6 text-center text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-parchment">
              The moment you engage WMP
            </h2>
            <h3 className="mt-6 text-center text-base font-semibold leading-[1.1] tracking-[-0.03em] text-parchment sm:text-xl">
              Every situation is different. The underlying pattern is the same.
            </h3>
          </FadeIn>

          <motion.div
            className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-parchment/[0.08] bg-parchment/[0.06] md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {growthStages.map((stage) => (
              <motion.div
                key={stage.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="cursor-default bg-parchment/[0.025] p-6 transition-colors hover:bg-parchment/[0.05] sm:p-10"
              >
                <p className="text-[1rem] font-medium uppercase tracking-[0.22em] text-electric-violet">
                  {stage.label}
                </p>
                <div className="mt-6 flex h-14 items-end gap-[3px]">
                  {stage.bars.map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t-[2px] bg-electric-violet/20"
                      initial={{ scaleY: 0, originY: 1 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      style={{ height: `${h}%`, transformOrigin: "bottom" }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2 + i * 0.04,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </div>

                <p className="mt-3 text-[1rem] leading-7 text-parchment/45">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <FadeIn delay={0.2} className="mt-8 text-center">
            <p className="text-[1rem] text-parchment/35">
              If any of these sound like your business, we&apos;d like to hear
              more.
            </p>
            <div className="mt-6 flex justify-center">
              <Button asChild>
                <Link href="/contact">Start the conversation</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── What WMP Designs vs Does Not Do ── */}
      <section className="border-b border-border/60 bg-parchment py-16 lg:py-24">
        <div className="container">
          <FadeIn>
            {/* Two-column comparison */}
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border/60 bg-border/60 md:grid-cols-2">
              {/* Left — does */}
              <div className="bg-parchment p-6 sm:p-10">
                <div className="mb-6 inline-flex items-center gap-2">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-violet-tint">
                    <svg
                      className="h-2.5 w-2.5"
                      viewBox="0 0 10 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ color: "hsl(var(--electric-violet))" }}
                    >
                      <polyline points="1,5 3.5,7.5 9,2" />
                    </svg>
                  </span>
                  <span className="text-[18px] font-semibold uppercase tracking-[0.22em] text-electric-violet">
                    What WMP Designs
                  </span>
                </div>

                <ul className="flex flex-col gap-3.5">
                  {wmpDoes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-[7px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-electric-violet" />
                      <span className="text-md leading-relaxed text-warm-ash">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — does not */}
              <div className="bg-parchment p-6 sm:p-10">
                <span className="mb-6 block text-[18px] font-semibold uppercase tracking-[0.22em] text-warm-ash">
                  What WMP Does Not Do
                </span>

                <ul className="flex flex-col gap-3.5">
                  {wmpDoesNot.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-[7px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-warm-ash/30" />
                      <span className="text-md leading-relaxed text-warm-ash">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Positioning statement bar */}
          </FadeIn>
        </div>
        <div className="flex container mt-6 flex-col items-start justify-between gap-4 overflow-hidden border-l-4 border-primary bg-[#B6A6F2] px-6 py-5 sm:flex-row sm:items-center sm:px-10 sm:py-6">
          <p className="italic text-white/70 text-base sm:text-xl">
            We partner with you to design the system.{" "}
            <em className="font-semibold leading-[1.4] text-white/80">
              Running it is yours.
            </em>
          </p>

          <Button
            asChild
            className="flex-shrink-0 bg-primary text-primary-foreground hover:opacity-90"
          >
            <Link href="/contact">Start the conversation</Link>
          </Button>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="grain-overlay relative overflow-hidden bg-near-black py-20 text-center lg:py-36">
        <ConcentricRings />
        <FadeIn className="container relative">
          <h2 className="mx-auto mt-6 max-w-[22ch] text-balance text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-parchment">
            Ready to build the structure your business needs?
          </h2>
          <p className="mt-6 text-[1rem] leading-[1.8] text-parchment/45">
            Get in touch. We&apos;ll arrange a conversation at a time that works
            for us.
          </p>
          <div className="mt-12">
            <Button asChild size="lg">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}

// ── Hero with animated canvas visual ────────────────────────────────────────

// ── Hero with split layout: headline left, org visual right ─────────────────

const heroImages = [
  "/images/carousel-1.png",
  "/images/carousel-2.png",
  "/images/carousel-3.png",
  "/images/carousel-4.png",
  "/images/carousel-5.png",
  "/images/carousel-6.png",
];

function HeroSection() {
  const doubled = [...heroImages, ...heroImages];

  return (
    <section className="grain-overlay relative min-h-[92vh] overflow-hidden bg-near-black">
      {/* ── Full-height scrolling image strip (background) ── */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="flex h-full"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {doubled.map((src, i) => (
            <div key={i} className="relative h-full w-[50vw] flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                aria-hidden
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Gradient: left ~2/3 is solid dark, right ~1/3 bleeds image through */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, hsl(0 0% 11%) 0%, hsl(0 0% 11%) 60%, hsl(0 0% 11% / 0.88) 82%, hsl(0 0% 11% / 0.22) 100%)",
          }}
        />
        {/* Top + bottom vignette */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-near-black to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-near-black to-transparent" />
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 opacity-[0.04]"
        aria-hidden
      >
        <Image
          src="/logo.svg"
          alt=""
          width={311}
          height={112}
          className="h-auto w-48 sm:w-[16rem] lg:w-80"
          priority
        />
      </div>

      {/* ── Headline + CTA ── */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] w-full flex-col items-center justify-center px-4 py-16 text-center sm:py-24 md:px-8">
        <h1 className="mt-8 text-[clamp(1.9rem,7.5vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-parchment">
          {[
            "The structure that got you here",
            "won\u2019t get you where you\u2019re going.",
          ].map((line, lineIndex, arr) => {
            const offset = arr
              .slice(0, lineIndex)
              .reduce((sum, l) => sum + l.length, 0);
            return (
              <span key={lineIndex} className="block">
                {[...line].map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.35 + (offset + i) * 0.03,
                      duration: 0.18,
                      ease: "easeOut",
                    }}
                  >
                    {char === " " ? "\u00a0" : char}
                  </motion.span>
                ))}
              </span>
            );
          })}
        </h1>
        <motion.p
          className="mx-auto mt-6 max-w-[70ch] text-center text-[1rem] leading-[1.8] text-parchment/55"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          WMP works alongside leaders to design the workforce infrastructure
          their businesses need to scale.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button asChild size="lg">
            <Link href="/contact">Get in touch</Link>
          </Button>
          <Link
            href="/how-we-work"
            className="border-b border-parchment/25 pb-px text-[1rem] text-parchment/60 transition-colors hover:border-parchment/55 hover:text-parchment"
          >
            See how we work →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function HeroOrgVisual() {
  return (
    <div className="w-full max-w-[520px] select-none">
      {/* Column labels */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <div className="h-px w-5 bg-electric-violet opacity-30" />
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-electric-violet opacity-60">
            Before
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-px w-5 bg-electric-violet opacity-70" />
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-electric-violet">
            After WMP
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* BEFORE (unchanged except text) */}
        <div className="relative rounded-sm border border-parchment/[0.06] bg-parchment/[0.03] p-5">
          <div className="mx-auto mb-3 w-fit rounded border border-electric-violet/30 bg-electric-violet/10 px-4 py-2">
            <span className="text-[12px] font-medium text-electric-violet/70">
              Founder
            </span>
          </div>

          {/* KEEP your original SVG here unchanged */}
          <svg viewBox="0 0 160 110" className="w-full opacity-60" aria-hidden>
            {/* Lines all converging back upward to founder */}
            <line
              x1="28"
              y1="48"
              x2="80"
              y2="12"
              stroke="rgba(108,71,255,0.3)"
              strokeWidth="0.75"
            />
            <line
              x1="52"
              y1="52"
              x2="80"
              y2="12"
              stroke="rgba(108,71,255,0.25)"
              strokeWidth="0.75"
            />
            <line
              x1="80"
              y1="52"
              x2="80"
              y2="12"
              stroke="rgba(108,71,255,0.3)"
              strokeWidth="0.75"
            />
            <line
              x1="108"
              y1="52"
              x2="80"
              y2="12"
              stroke="rgba(108,71,255,0.25)"
              strokeWidth="0.75"
            />
            <line
              x1="132"
              y1="48"
              x2="80"
              y2="12"
              stroke="rgba(108,71,255,0.3)"
              strokeWidth="0.75"
            />
            {/* Cross-connections (chaos) */}
            <line
              x1="28"
              y1="60"
              x2="52"
              y2="58"
              stroke="rgba(108,71,255,0.15)"
              strokeWidth="0.5"
            />
            <line
              x1="108"
              y1="58"
              x2="132"
              y2="55"
              stroke="rgba(108,71,255,0.15)"
              strokeWidth="0.5"
            />
            <line
              x1="52"
              y1="62"
              x2="80"
              y2="60"
              stroke="rgba(108,71,255,0.12)"
              strokeWidth="0.5"
            />
            {/* Level 2 nodes */}
            <rect
              x="12"
              y="48"
              width="32"
              height="18"
              rx="3"
              fill="rgba(108,71,255,0.07)"
              stroke="rgba(108,71,255,0.25)"
              strokeWidth="0.5"
            />
            <rect
              x="36"
              y="52"
              width="32"
              height="18"
              rx="3"
              fill="rgba(108,71,255,0.07)"
              stroke="rgba(108,71,255,0.25)"
              strokeWidth="0.5"
            />
            <rect
              x="64"
              y="52"
              width="32"
              height="18"
              rx="3"
              fill="rgba(108,71,255,0.07)"
              stroke="rgba(108,71,255,0.25)"
              strokeWidth="0.5"
            />
            <rect
              x="92"
              y="52"
              width="32"
              height="18"
              rx="3"
              fill="rgba(108,71,255,0.07)"
              stroke="rgba(108,71,255,0.25)"
              strokeWidth="0.5"
            />
            <rect
              x="116"
              y="48"
              width="32"
              height="18"
              rx="3"
              fill="rgba(108,71,255,0.07)"
              stroke="rgba(108,71,255,0.25)"
              strokeWidth="0.5"
            />
            {/* Level 3: scattered, no pattern */}
            <line
              x1="28"
              y1="66"
              x2="22"
              y2="84"
              stroke="rgba(108,71,255,0.15)"
              strokeWidth="0.5"
            />
            <line
              x1="52"
              y1="70"
              x2="60"
              y2="88"
              stroke="rgba(108,71,255,0.15)"
              strokeWidth="0.5"
            />
            <line
              x1="80"
              y1="70"
              x2="74"
              y2="88"
              stroke="rgba(108,71,255,0.15)"
              strokeWidth="0.5"
            />
            <line
              x1="108"
              y1="70"
              x2="114"
              y2="88"
              stroke="rgba(108,71,255,0.15)"
              strokeWidth="0.5"
            />
            <line
              x1="132"
              y1="66"
              x2="138"
              y2="84"
              stroke="rgba(108,71,255,0.15)"
              strokeWidth="0.5"
            />
            <rect
              x="8"
              y="84"
              width="28"
              height="14"
              rx="2"
              fill="rgba(108,71,255,0.04)"
              stroke="rgba(108,71,255,0.15)"
              strokeWidth="0.5"
            />
            <rect
              x="46"
              y="88"
              width="28"
              height="14"
              rx="2"
              fill="rgba(108,71,255,0.04)"
              stroke="rgba(108,71,255,0.15)"
              strokeWidth="0.5"
            />
            <rect
              x="60"
              y="88"
              width="28"
              height="14"
              rx="2"
              fill="rgba(108,71,255,0.04)"
              stroke="rgba(108,71,255,0.15)"
              strokeWidth="0.5"
            />
            <rect
              x="100"
              y="88"
              width="28"
              height="14"
              rx="2"
              fill="rgba(108,71,255,0.04)"
              stroke="rgba(108,71,255,0.15)"
              strokeWidth="0.5"
            />
            <rect
              x="124"
              y="84"
              width="28"
              height="14"
              rx="2"
              fill="rgba(108,71,255,0.04)"
              stroke="rgba(108,71,255,0.15)"
              strokeWidth="0.5"
            />
          </svg>

          <p className="mt-3 text-center text-[11px] leading-[1.6] text-parchment/35">
            Everything routes through one person
          </p>
        </div>

        {/* AFTER (fixed layout) */}
        <div className="relative rounded-sm border border-electric-violet/20 bg-electric-violet/[0.04] p-5">
          <div className="mx-auto mb-2 w-fit rounded border border-electric-violet/50 bg-electric-violet/15 px-4 py-2">
            <span className="text-[12px] font-semibold text-electric-violet">
              Leadership
            </span>
          </div>

          <svg viewBox="0 0 180 140" className="w-full" aria-hidden>
            {/* ── T1 → T2 ── */}
            <line
              x1="90"
              y1="10"
              x2="30"
              y2="40"
              stroke="rgba(108,71,255,0.45)"
              strokeWidth="1"
            />
            <line
              x1="90"
              y1="10"
              x2="90"
              y2="40"
              stroke="rgba(108,71,255,0.45)"
              strokeWidth="1"
            />
            <line
              x1="90"
              y1="10"
              x2="150"
              y2="40"
              stroke="rgba(108,71,255,0.45)"
              strokeWidth="1"
            />

            {/* ── TIER 2 ── */}
            <rect
              x="8"
              y="40"
              width="50"
              height="26"
              rx="5"
              fill="rgba(108,71,255,0.1)"
              stroke="rgba(108,71,255,0.4)"
            />
            <text
              x="33"
              y="57"
              textAnchor="middle"
              fontSize="9"
              fill="rgba(108,71,255,0.8)"
              fontWeight="700"
            >
              Operations
            </text>

            <rect
              x="68"
              y="40"
              width="50"
              height="26"
              rx="5"
              fill="rgba(108,71,255,0.1)"
              stroke="rgba(108,71,255,0.4)"
            />
            <text
              x="93"
              y="57"
              textAnchor="middle"
              fontSize="9"
              fill="rgba(108,71,255,0.8)"
              fontWeight="700"
            >
              Product
            </text>

            <rect
              x="128"
              y="40"
              width="50"
              height="26"
              rx="5"
              fill="rgba(108,71,255,0.1)"
              stroke="rgba(108,71,255,0.4)"
            />
            <text
              x="153"
              y="57"
              textAnchor="middle"
              fontSize="9"
              fill="rgba(108,71,255,0.8)"
              fontWeight="700"
            >
              Growth
            </text>

            {/* ── T2 → T3 ── */}
            {/* ── T2 → T3 (fixed so they start below boxes) ── */}
            <line
              x1="20"
              y1="66"
              x2="15"
              y2="90"
              stroke="rgba(108,71,255,0.3)"
            />
            <line
              x1="40"
              y1="66"
              x2="45"
              y2="90"
              stroke="rgba(108,71,255,0.3)"
            />

            <line
              x1="80"
              y1="66"
              x2="75"
              y2="90"
              stroke="rgba(108,71,255,0.3)"
            />
            <line
              x1="100"
              y1="66"
              x2="105"
              y2="90"
              stroke="rgba(108,71,255,0.3)"
            />

            <line
              x1="140"
              y1="66"
              x2="135"
              y2="90"
              stroke="rgba(108,71,255,0.3)"
            />
            <line
              x1="160"
              y1="66"
              x2="165"
              y2="90"
              stroke="rgba(108,71,255,0.3)"
            />

            {/* ── TIER 3 (proper spacing) ── */}

            {/* Labels (no overlap now) */}
            {/* ── TIER 3 (fixed spacing + breathing room) ── */}
            {/* Boxes */}
            <rect
              x="0"
              y="90"
              width="30"
              height="18"
              rx="5"
              fill="rgba(108,71,255,0.06)"
              stroke="rgba(108,71,255,0.25)"
            />
            <rect
              x="34"
              y="90"
              width="30"
              height="18"
              rx="5"
              fill="rgba(108,71,255,0.06)"
              stroke="rgba(108,71,255,0.25)"
            />

            <rect
              x="68"
              y="90"
              width="30"
              height="18"
              rx="5"
              fill="rgba(108,71,255,0.06)"
              stroke="rgba(108,71,255,0.25)"
            />
            <rect
              x="102"
              y="90"
              width="30"
              height="18"
              rx="5"
              fill="rgba(108,71,255,0.06)"
              stroke="rgba(108,71,255,0.25)"
            />

            <rect
              x="136"
              y="90"
              width="30"
              height="18"
              rx="5"
              fill="rgba(108,71,255,0.06)"
              stroke="rgba(108,71,255,0.25)"
            />
            <rect
              x="170"
              y="90"
              width="30"
              height="18"
              rx="5"
              fill="rgba(108,71,255,0.06)"
              stroke="rgba(108,71,255,0.25)"
            />

            {/* Labels */}
            <text
              x="15"
              y="102"
              textAnchor="middle"
              fontSize="8"
              fill="rgba(108,71,255,0.55)"
            >
              Team A
            </text>
            <text
              x="49"
              y="102"
              textAnchor="middle"
              fontSize="8"
              fill="rgba(108,71,255,0.55)"
            >
              Team B
            </text>

            <text
              x="83"
              y="102"
              textAnchor="middle"
              fontSize="8"
              fill="rgba(108,71,255,0.55)"
            >
              Team C
            </text>
            <text
              x="117"
              y="102"
              textAnchor="middle"
              fontSize="8"
              fill="rgba(108,71,255,0.55)"
            >
              Team D
            </text>

            <text
              x="151"
              y="102"
              textAnchor="middle"
              fontSize="8"
              fill="rgba(108,71,255,0.55)"
            >
              Team E
            </text>
            <text
              x="185"
              y="102"
              textAnchor="middle"
              fontSize="8"
              fill="rgba(108,71,255,0.55)"
            >
              Team F
            </text>

            <text
              x="90"
              y="125"
              textAnchor="middle"
              fontSize="8.5"
              fill="rgba(108,71,255,0.4)"
            >
              Clear ownership at every level
            </text>
          </svg>

          <p className="mt-3 text-center text-[11px] leading-[1.6] text-electric-violet/60">
            Runs without the founder
          </p>
        </div>
      </div>

      {/* Metrics */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { label: "Role clarity", value: "100%", sub: "ownership defined" },
          { label: "Decision speed", value: "3×", sub: "faster" },
          { label: "Headcount", value: "Aligned", sub: "to revenue" },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-sm border border-parchment/[0.07] bg-parchment/[0.03] px-3 py-3"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-electric-violet/60">
              {m.label}
            </p>
            <p className="mt-1.5 text-[1.2rem] font-semibold leading-none text-electric-violet/90">
              {m.value}
            </p>
            <p className="mt-1 text-[10px] text-parchment/35">{m.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Shared sub-components ────────────────────────────────────────────────────

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
