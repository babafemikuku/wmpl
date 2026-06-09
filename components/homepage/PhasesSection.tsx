"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, Variants } from "motion/react";

const phases = [
  {
    id: "foundation",
    label: "Foundation",
    body: "You have 40 employees. New hires are figuring things out for themselves, nobody owns processes, and nothing runs consistently without you. The time you spend managing what your managers should own is time you're not spending on the business. You know it, but you haven't had time to fix it.",
    imageSrc: "/images/purple-illustration.jpg",
  },
  {
    id: "growth",
    label: "Growth",
    body: "Your business is growing, so is revenue, but you can feel the structure beginning to strain. The ways of working at 20 people is starting to cost you at 70 people. It's still in control for now, but you can see where this is heading. Fixing structure before it breaks costs significantly less than fixing it after.",
    imageSrc: "/images/purple-illustration.jpg",
  },
  {
    id: "scale",
    label: "Scale",
    body: "The business is growing. The team is growing. But somehow the pressure isn't easing—more people, more complexity, more cost. You haven't built a workforce strategy to make sense of it. Every misaligned hire costs more than the salary. You're starting to feel it.",
    imageSrc: "/images/purple-illustration.jpg",
  },
];

// Variants for desktop: custom prop = { xBlock, xText }
// Variants for mobile: always fade-up from y: 20
const blockVariants: Variants = {
  hidden: (custom: { xBlock: number; mobile: boolean }) => ({
    opacity: 0,
    x: custom.mobile ? 0 : custom.xBlock,
    y: custom.mobile ? 20 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const textVariants: Variants = {
  hidden: (custom: { xText: number; mobile: boolean }) => ({
    opacity: 0,
    x: custom.mobile ? 0 : custom.xText,
    y: custom.mobile ? 20 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.08 },
  },
};

// Hook: true if window width < 768px — SSR-safe via useState + useEffect
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

interface AnimatedBlockProps {
  xBlock: number; // slide direction for the card wrapper
  xText: number;  // slide direction for the inner text
  children: React.ReactNode;
  className?: string;
}

function AnimatedBlock({ xBlock, xText, children, className }: AnimatedBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      className={className}
      custom={{ xBlock, mobile: isMobile }}
      variants={blockVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Wrap children that should have text-slide in a nested motion.div */}
      <motion.div
        custom={{ xText, mobile: isMobile }}
        variants={textVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function PhasesSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.5 });

  return (
    <section className="bg-linen py-24 lg:py-14">
      <div className="container">
        {/* Heading — simple fade-up, no horizontal slide */}
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 text-center text-[42px] font-semibold leading-[1.1] tracking-[-0.03em] text-near-black"
        >
          Every situation is different, but the pattern is the same.
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr_auto]">
          <div className="contents lg:col-span-2 lg:grid lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-4">

            {/* Foundation — slides from left (-40), text from right (+40) */}
            <AnimatedBlock
              xBlock={-40}
              xText={40}
              className="flex flex-col overflow-hidden rounded-2xl bg-white lg:col-span-2"
            >
              <img
                src={phases[0].imageSrc}
                alt=""
                aria-hidden
                className="h-35 w-full object-cover"
              />
              <div className="p-7">
                <h3 className="mb-3 font-display text-2xl font-bold tracking-[0.5rem] text-near-black">
                  {phases[0].label}
                </h3>
                <p className="text-base leading-[1.85] text-warm-ash">
                  {phases[0].body}
                </p>
              </div>
            </AnimatedBlock>

            {/* Growth — same as Foundation: slides from left */}
            <AnimatedBlock
              xBlock={-40}
              xText={40}
              className="flex flex-col overflow-hidden rounded-2xl bg-white"
            >
              <img
                src={phases[1].imageSrc}
                alt=""
                aria-hidden
                className="h-[120px] w-full object-cover"
              />
              <div className="p-6">
                <h3 className="mb-3 font-display text-2xl font-bold tracking-[0.5rem] text-near-black">
                  {phases[1].label}
                </h3>
                <p className="text-base leading-[1.85] text-warm-ash">
                  {phases[1].body}
                </p>
              </div>
            </AnimatedBlock>

            {/* Scale — slides from right (+40), text from left (-40) */}
            <AnimatedBlock
              xBlock={40}
              xText={-40}
              className="flex flex-col overflow-hidden rounded-2xl bg-white"
            >
              <img
                src={phases[2].imageSrc}
                alt=""
                aria-hidden
                className="h-[120px] w-full object-cover"
              />
              <div className="p-6">
                <h3 className="mb-3 font-display text-2xl font-bold tracking-[0.5rem] text-near-black">
                  {phases[2].label}
                </h3>
                <p className="text-base leading-[1.85] text-warm-ash">
                  {phases[2].body}
                </p>
              </div>
            </AnimatedBlock>
          </div>

          {/* CTA card — slides from right, same as Scale */}
          <AnimatedBlock
            xBlock={40}
            xText={-40}
            className="flex flex-col overflow-hidden rounded-2xl lg:w-95"
          >
            <div className="min-h-65 flex-1 lg:min-h-0 -mb-4 relative z-10">
              <img
                src="/images/office-woman.jpg"
                alt="A business leader"
                className="h-full w-full object-cover rounded-b-2xl"
                style={{ minHeight: 260 }}
              />
            </div>
            <div className="bg-electric-violet px-7 py-8">
              <h4 className="mb-3 text-[12px] font-bold uppercase tracking-[0.22em] text-white/60">
                Workforce Management Partners
              </h4>
              <p className="text-2xl font-medium leading-[1.3] tracking-[-0.02em] text-[#F7F5F0]">
                If any of these sound like your business, let's talk.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-1.5 text-base font-semibold text-white underline underline-offset-4 transition-opacity hover:opacity-75"
              >
                Start the conversation →
              </Link>
            </div>
          </AnimatedBlock>
        </div>
      </div>
    </section>
  );
}