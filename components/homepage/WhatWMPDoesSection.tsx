"use client";
import { motion } from "motion/react";
import { FadeUp } from "../global/animations";
import { TaglineBanner } from "../global/TaglineBanner";
const wmpDesigns = [
  "Workforce & organisational structure",
  "Clear roles & accountability",
  "Headcount & hiring strategy",
  "People function operating models",
  "Manager ownership & effectiveness",
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

export default function WhatWMPDoesSection() {
  return (
    <section className="py-24 lg:py-15" style={{ backgroundColor: "#F7F5F0" }}>
      <div className="container space-y-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-white p-8">
            <FadeUp>
              <h3
                className="mb-6 font-bold tracking-[-0.02em]"
                style={{ fontSize: 24, color: "#5E35B1" }}
              >
                What WMP Designs
              </h3>
            </FadeUp>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#5E35B1" }}
                  aria-hidden
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div
                  className="mt-2 w-px flex-1"
                  style={{ backgroundColor: "#5E35B1", opacity: 0.2 }}
                />
              </div>

              <ul className="flex-1 space-y-2">
                {wmpDesigns.map((item, i) => (
                  <motion.li
                    key={item}
                    className="rounded-md px-4 py-3"
                    style={{
                      backgroundColor: "#F6F6FA",
                      fontSize: 16,
                      color: "#5E35B1",
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 1.8,
                      ease: [0.22, 1, 0.36, 1],
                      delay: i * 0.15,
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white p-8">
            <FadeUp>
              <h3
                className="mb-6 font-bold tracking-[-0.02em]"
                style={{ fontSize: 24, color: "#6B6660" }}
              >
                What WMP Does Not Do
              </h3>
            </FadeUp>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#E5E3DF" }}
                  aria-hidden
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 2l6 6M8 2L2 8"
                      stroke="#6B6660"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div
                  className="mt-2 w-px flex-1"
                  style={{ backgroundColor: "#6B6660", opacity: 0.2 }}
                />
              </div>

              <ul className="flex-1 space-y-2">
                {wmpDoesNot.map((item, i) => (
                  <motion.li
                    key={item}
                    className="rounded-md px-4 py-3 text-warm-ash text-base"
                    style={{
                      backgroundColor: "#F6F6FA",
                      fontSize: 16,
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 1.8,
                      ease: [0.22, 1, 0.36, 1],
                      delay: i * 0.15,
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <FadeUp delay={0.3}>
          <TaglineBanner text="We design the system with you, so your team can run it with confidence." />
        </FadeUp>
      </div>
    </section>
  );
}
