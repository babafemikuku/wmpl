"use client";

import { BriefcaseBusiness, GitBranchPlus, UsersRound } from "lucide-react";
import { motion } from "motion/react";

import { Separator } from "@/components/ui/separator";

const operatingLevers = [
  {
    from: "Role clarity",
    to: "Execution speed",
    description:
      "Sharper role design removes hesitation and keeps execution moving at team speed.",
    Icon: BriefcaseBusiness,
  },
  {
    from: "Decision rights",
    to: "Consistency",
    description:
      "Clear authority lines stop escalations from bouncing back to the founder.",
    Icon: GitBranchPlus,
  },
  {
    from: "Headcount discipline",
    to: "Margin resilience",
    description:
      "A workforce plan tied to revenue gives growth more control and less drag.",
    Icon: UsersRound,
  },
];

export function HomeOperatingLevers() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden md:grid-cols-3">
      {operatingLevers.map((lever, index) => (
        <motion.div
          key={lever.from}
          className="group bg-parchment hover:bg-linen transition-colors duration-250"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        >
          <div className="p-8 space-y-6 h-full">
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius)] bg-near-black text-parchment">
              <lever.Icon className="h-5 w-5" strokeWidth={1.7} />
            </div>

            {/* From label */}
            <p className="text-2xl font-semibold tracking-[-0.02em] text-near-black font-display">
              {lever.from}
            </p>

            {/* Arrow + "Drives X" pill */}
            <div className="flex items-center gap-3">
              <LeverArrow />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-electric-violet">
                Drives {lever.to}
              </span>
            </div>

            <Separator className="bg-electric-violet/20" />

            {/* Description */}
            <p className="text-[0.9rem] leading-7 text-warm-ash">
              {lever.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function LeverArrow() {
  return (
    <div className="relative flex items-center">
      <div className="h-px w-6 bg-electric-violet" />
      <svg
        viewBox="0 0 6 8"
        className="ml-[-1px] h-2 w-[5px] text-electric-violet"
        fill="none"
      >
        <path
          d="M1 1L5 4L1 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
