"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Hero from "@/components/how-we-work/Hero";
import { DiagnosisSection } from "@/components/how-we-work/DiagnosisSection";
import { TaglineBanner } from "@/components/global/TaglineBanner";
import { FadeUp } from "@/components/global/animations";

export default function HowWeWorkPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <section className="relative py-6 md:py-12 inset-0 pointer-events-none">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/background-pattern.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "1000px 1000px",
            opacity: 0.5,
          }}
        />
        <FadeUp>
          <div className="text-center container relative">
            <h2 className=" font-bold leading-[1.1] text-4xl md:text-5xl tracking-[-0.03em] text-near-black">
              Every growing business reaches a point where structure becomes the
              strategy
            </h2>
            <p className="mx-auto mt-4 text-lg leading-[1.8] text-warm-ash">
              WMP partners with leaders to diagnose the structural issues
              holding their business back and fix them. Evidence first, always.
            </p>
          </div>
        </FadeUp>
      </section>
      <DiagnosisSection />
    </main>
  );
}
