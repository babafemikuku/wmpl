"use client";
import Image from "next/image";
import { FadeIn, FadeUp } from "../global/animations";

export default function WhyWMP() {
  return (
    <section className="py-6 lg:py-12 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/background-pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "1000px 1000px",
          opacity: 0.5,
        }}
      />

      <div className="container relative">
        <div className="mb-4">
          <FadeUp>
            <h2 className="text-[32px] text-near-black font-bold mb-2">
              Why WMP
            </h2>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-lg text-warm-ash">
              Across scaling businesses, the same structural issues show up
              repeatedly, including founder dependency, unclear accountability,
              and hiring disconnected from strategy. Most businesses respond by
              adding people, but performance does not improve because the
              underlying issues are structural. WMP exists to fix them.
            </p>
          </FadeUp>
        </div>

        <FadeIn delay={0.5}>
          <div className="relative w-full h-20 md:h-44">
            <Image
              src="/images/spiral-pattern.jpg"
              alt="Hero"
              fill
              className="object-cover rounded-lg grayscale"
              priority
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
