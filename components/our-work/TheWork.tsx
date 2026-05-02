"use client";
import { FadeIn, FadeUp } from "../global/animations";
import { motion } from "motion/react";

type CaseStudy = {
  id: string;
  phase: string;
  title: string;
  tags: string[];
  icon: string;
  situation: string;
  theWork: string[];
  whatShifted: string[];
};

const caseStudies: CaseStudy[] = [
  {
    id: "saas-scaling",
    phase: "Building the Foundation",
    title: "Restoring control in a scaling SaaS business.",
    tags: ["SaaS", "Series D", "300+ employees", "Multi-region"],
    icon: "/icons/box.svg",
    situation:
      "The business had scaled quickly but structure had not kept pace. Roles were duplicated across regions and the cost base was no longer aligned to business priorities.",
    theWork: [
      "Assessed roles and structure across regions.",
      "Identified duplication and misalignment.",
      "Partnered with leadership to redesign the organisation.",
      "Delivered a global restructure across 12 countries.",
    ],
    whatShifted: [
      "A leaner structure aligned to business priorities.",
      "Reduced duplication across regions.",
      "Business continuity maintained through the transition.",
    ],
  },
  {
    id: "founder-led",
    phase: "Design for Growth",
    title: "Creating accountability in a founder-led business.",
    tags: ["Founder-led", "Series B", "Under 50 employees"],
    icon: "/icons/tree.svg",
    situation:
      "The business was navigating significant disruption, including changing workforce requirements and increasing pressure to improve performance, alongside challenges securing Series C funding due to shifting market conditions. Managers across multiple functions needed support to manage performance consistently and with confidence.",
    theWork: [
      "Partnering with department leads, supporting role development and recruitment decisions.",
      "Built and embedded performance management processes.",
      "Identified development needs within teams and built plans to address them.",
    ],
    whatShifted: [
      "A consistent approach to performance management established across all functions.",
      "Managers equipped to handle performance and capability issues independently.",
      "Clearer expectations within teams and reduced escalation to senior leadership.",
    ],
  },
  {
    id: "scaling-sustainably",
    phase: "Scaling Sustainably",
    title: "Creating the operating model for global scale.",
    tags: ["Global", "1000+ employees", "Multi-entity"],
    icon: "/icons/tree.svg",
    situation:
      "The organisation had expanded across regions following a series of mergers and acquisitions, but ways of working had not scaled with it. Processes varied, creating friction and inconsistency in how the business operated.",
    theWork: [
      "Centralized HR advisory and case management across regions.",
      "Built standardized processes to support a consistent global operating model",
      "Introduced a shared services structure enabling a lean central team to support a large and distributed workforce.",
    ],
    whatShifted: [
      "Consistent handling of cases and decisions across all regions.",
      "Improved visibility of activity across the team.",
      "A scalable operating model that could absorb continued growth without adding proportional headcount.",
    ],
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1 list-disc list-outside ml-5">
      {items.map((item) => (
        <li key={item} className="text-lg leading-normal text-near-black">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function TheWork() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#F7F5F0" }}>
      <div className="container">
        <FadeUp>
          <div className="mb-10">
            <h2 className="text-[32px] font-bold tracking-[-0.03em] text-near-black">
              The Work
            </h2>
            <p className="mt-2 text-lg text-near-black">
              All case studies are anonymised for confidentiality purposes.
            </p>
          </div>
        </FadeUp>

        <div className="space-y-10">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              className="overflow-hidden py-6 rounded-2xl border border-electric-violet bg-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.15,
              }}
            >
              <div className="relative px-8 pb-6 ">
                <div className="absolute right-8 top-6 opacity-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cs.icon}
                    alt=""
                    aria-hidden
                    className="h-16 w-16 object-contain"
                    style={{ filter: "grayscale(1)" }}
                  />
                </div>

                <p className="text-lg font-semibold uppercase text-near-black">
                  {cs.phase}
                </p>
                <h3 className="mt-2 max-w-[80%] font-bold tracking-[-0.025em] text-[32px] text-[#5E35B1]">
                  {cs.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-2 border-b border-electric-violet pb-6">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-3 py-1 text-base font-semibold text-[#5E35B1] border-[#EEE2FE] bg-[linear-gradient(90deg,_#E9D8FF_-195.88%,_rgba(255,255,255,0)_364.12%,_#29252E_364.12%)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-8 py-2">
                <div className="">
                  <h4
                    className="mb-3 text-2xl font-bold uppercase"
                    style={{ color: "#5E35B1" }}
                  >
                    The Situation
                  </h4>
                  <p className="text-lg leading-[1.8] text-near-black">
                    {cs.situation}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8 pt-7 lg:grid-cols-2">
                  <div>
                    <h4
                      className="mb-4 text-2xl font-bold uppercase"
                      style={{ color: "#5E35B1" }}
                    >
                      The Work
                    </h4>
                    <BulletList items={cs.theWork} />
                  </div>
                  <div>
                    <h4
                      className="mb-4 text-2xl font-bold uppercase"
                      style={{ color: "#5E35B1" }}
                    >
                      What Shifted
                    </h4>
                    <BulletList items={cs.whatShifted} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
