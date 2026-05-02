"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { FadeIn, FadeUp } from "../global/animations";

const LINES = [
  "The structure that got you here",
  "won't get you where you're going.",
];

const FULL_TEXT = LINES.join("\n");
const TYPE_SPEED = 65;

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);

    const interval = setInterval(() => {
      i++;
      setDisplayed(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, TYPE_SPEED);

    return () => clearInterval(interval);
  }, []);

  // Split displayed text back into lines for rendering
  const parts = displayed.split("\n");
  const line1 = parts[0] ?? "";
  const line2 = parts[1] ?? "";

  return (
    <section className="relative overflow-hidden bg-[#f5f0e8]">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/background-pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "1000px 1000px",
          opacity: 0.3,
        }}
      />

      <div className="relative z-10 container px-0 md:px-6 py-20 text-center">
        {/* Typewriter heading */}
        <h1 className="text-[46px] md:text-[52px] font-bold text-gray-900 leading-tight mb-6 min-h-[3.5em] md:min-h-[2.6em]">
          <span>{line1}</span>
          {parts.length > 1 && (
            <>
              <br />
              <span>{line2}</span>
            </>
          )}
          {!done && (
            <span
              className="inline-block w-[3px] h-[1em] ml-1 align-middle bg-[#7B4FD4] animate-pulse"
              aria-hidden
            />
          )}
        </h1>

        <FadeUp delay={0.05}>
          <p className="text-[#787068] text-lg mb-8 mx-auto">
            Workplace management partners works together with leaders to design
            the workforce infrastructure their businesses need to scale.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="flex justify-center gap-4 lg:mb-14">
            <Button
              asChild
              className="hidden! lg:flex! items-center gap-1 font-bold! bg-[#7B4FD4] text-parchment hover:bg-parchment/20 rounded-lg"
            >
              <Link href="/contact">
                Contact us
                <TrendingUp className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="hidden! lg:flex! items-center gap-1 font-bold! text-[#787068] hover:bg-parchment/20 rounded-lg"
            >
              <Link href="/how-we-work">See how we work</Link>
            </Button>
          </div>
        </FadeUp>

        <FadeIn>
          <div className="relative w-full h-63 md:h-125">
            <Image
              src="/hero.gif"
              alt="Hero"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
