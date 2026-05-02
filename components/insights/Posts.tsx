// ── insights-strip.tsx ────────────────────────────────────────────────────────

"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Clock } from "lucide-react";

type Insight = {
  id: string;
  title: string;
  readTime: string;
  href: string;
};

const insights: Insight[] = [
  {
    id: "people-function",
    title:
      "Your People function is a support function because you designed it that way.",
    readTime: "2 minute read",
    href: "/insights/people-function",
  },
  {
    id: "reactive-hire",
    title: "The real cost of a reactive hire.",
    readTime: "2 minute read",
    href: "/insights/reactive-hire",
  },
  {
    id: "ownership",
    title: "Ownership fails by design.",
    readTime: "2 minute read",
    href: "/insights/ownership",
  },
];

export function Posts() {
  return (
    <section style={{ backgroundColor: "#F7F5F0" }} className="py-6 lg:py-13">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {insights.map((insight, i) => (
            <motion.div
              key={insight.id}
              className="flex flex-col justify-between rounded-2xl border border-[#78706838] p-8 md:py-10"
              style={{ backgroundColor: "#EEECE8" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 1.3,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1,
              }}
            >
              <h4 className="text-base font-bold leading-[1.45] tracking-[-0.01em] text-[#121416]">
                {insight.title}
              </h4>

              <div className="mt-16 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-base text-[#121416CF]">
                  <Clock className="h-3.5 w-3.5" strokeWidth={1.5} />
                  {insight.readTime}
                </span>
                <span className="flex gap-1 items-center">
                  <Link
                    href={insight.href}
                    className="text-base font-semibold text-electric-violet underline underline-offset-2 transition-opacity hover:opacity-70"
                  >
                    Read more
                  </Link>
                  <ArrowRight className="w-4 h-4 text-electric-violet" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
