"use client";

import { Fragment } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { FadeUp } from "../global/animations";
import { motion } from "motion/react";

const HERO_LINES = [
  "Workplace management",
  "partners works together",
  "with leaders to design the",
  "workforce infrastructure",
  "their businesses need to",
  "scale.",
];

function AnimatedHeroLine({
  line,
  lineOffset,
}: {
  line: string;
  lineOffset: number;
}) {
  let wordOffset = 0;

  return (
    <span className="block">
      {line.split(" ").map((word, wordIndex, words) => {
        const start = wordOffset;
        wordOffset += word.length + 1;

        return (
          <Fragment key={`${word}-${wordIndex}`}>
            <span className="inline-flex whitespace-nowrap">
              {[...word].map((char, charIndex) => (
                <motion.span
                  key={`${char}-${charIndex}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.35 + (lineOffset + start + charIndex) * 0.03,
                    duration: 0.18,
                    ease: "easeOut",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            {wordIndex < words.length - 1 ? " " : null}
          </Fragment>
        );
      })}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f0e8] h-screen">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 1,
        }}
      />

      <div className="absolute inset-0 bg-black/90" />

      <div className="relative z-10 h-full container px-0 py-20 text-left flex flex-col items-start justify-end">
        <h1 className="w-full max-w-250 text-[32px] sm:text-[40px] md:text-[52px] font-bold text-white leading-[1.08] sm:leading-tight mb-6 min-h-[3.5em] md:min-h-[2.6em]">
          {HERO_LINES.map((line, lineIndex, lines) => {
            const lineOffset = lines
              .slice(0, lineIndex)
              .reduce((sum, currentLine) => sum + currentLine.length, 0);

            return (
              <AnimatedHeroLine
                key={line}
                line={line}
                lineOffset={lineOffset}
              />
            );
          })}
        </h1>

        <FadeUp delay={0.05}>
          <p className="text-white text-base mb-8 mx-auto md:max-w-2xl">
            The structure that got you here
            won&apos;t get you where you&apos;re going.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="flex justify-center gap-4 lg:mb-14">
            <Button
              asChild
              className="flex items-center gap-1 font-bold! bg-[#7B4FD4] text-parchment hover:scale-3d rounded-lg"
            >
              <Link href="/contact">
                Contact us
                <TrendingUp className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex items-center gap-1 font-bold! text-white hover:bg-parchment/20 rounded-lg"
            >
              <Link href="/how-we-work">See how we work</Link>
            </Button>
          </div>
        </FadeUp>

        {/* <FadeIn>
          <div className="relative w-full h-63 md:h-125">
            <Image
              src="/hero.gif"
              alt="Hero"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </FadeIn> */}
      </div>
    </section>
  );
}
