"use client";

import { motion } from "motion/react";

import { FadeUp } from "../global/animations";
import { TaglineBanner } from "../global/TaglineBanner";

const auditCovers = [
  "Current organisational structure, reporting lines, and team composition",
  "Leadership interviews to understand how the business operates from the inside",
  "A review of existing role documentation and any available people data",
  "An honest assessment of where structural problems are most likely to sit, based on what leadership describes and what the data shows",
  "A clear recommendation for the engagement that follows",
  "Succession & continuity frameworks",
];

const auditReceives = [
  "A written diagnostic specific to your business",
  "Findings ordered by priority, what needs addressing first, and why",
  "A structural picture of the business as it currently stands",
  "An honest assessment of where problems are most likely to sit, based on what leadership described and what the data showed",
  "A clear recommendation for the engagement that follows, which services, in what order, and why",
];

const engagementOptions = [
  {
    id: "targeted",
    label: "Targeted Intervention",
    description:
      "A focused engagement addressing a single structural issue where the priority is clear and contained.",
    points: [
      "A single structural issue holding performance back",
      "Resolved through focused, contained work",
      "Clear ownership and a defined end point",
    ],
    recommended: false,
  },
  {
    id: "alignment",
    label: "Structural Alignment",
    description:
      "A coordinated engagement across multiple services to resolve interconnected structural issues.",
    points: [
      "Interconnected structural issues slowing performance",
      "Addressed in a deliberate sequence to improve how the business runs",
      "Root causes resolved to create consistent execution",
    ],
    recommended: true,
  },
  {
    id: "redesign",
    label: "Full Structural Redesign",
    description:
      "A comprehensive engagement for businesses undergoing significant change or preparing for the next stage of growth.",
    points: [
      "Structural issues addressed end-to-end to improve performance",
      "Senior-led with consistent involvement throughout",
      "Built to support major change and future growth",
    ],
    recommended: false,
  },
];

function PillHeader({ index, label }: { index: string; label: string }) {
  return (
    <div
      className="mb-6 flex items-center justify-center rounded-lg px-6 py-3"
      style={{ backgroundColor: "#5E35B1" }}
    >
      <p className="text-base font-semibold uppercase tracking-[0.25em] text-white">
        {index} — {label}
      </p>
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <span
          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: "#5E35B1" }}
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
        {items.map((item, i) => (
          <motion.li
            key={item}
            className="rounded-md px-4 py-3 text-base leading-[1.7]"
            style={{ backgroundColor: "#F6F6FA", color: "#5E35B1" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 1.3,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.12,
            }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function DeliveryCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col rounded-xl bg-white p-6 lg:p-8 border border-[rgba(0,0,0,0.06)]">
      <h4 className="mb-3 font-bold text-xl md:text-2xl tracking-[-0.02em] text-near-black">
        {title}
      </h4>

      <p className="text-base leading-normal text-warm-ash">{description}</p>
    </div>
  );
}

export function DiagnosisSection() {
  return (
    <section className="py-14 lg:py-8" style={{ backgroundColor: "#F7F5F0" }}>
      <div className="container space-y-6">
        <div className="overflow-hidden rounded-2xl p-6 lg:p-10 bg-[#EDEAE3] mb-13">
          <FadeUp>
            <PillHeader index="01" label="Structural Audit" />
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mb-8 text-center">
              <h3 className="font-bold leading-[1.2] text-[28px] md:text-[32px] tracking-[-0.025em] text-near-black">
                Every engagement starts with a structural diagnostic, not a
                proposal.
              </h3>
              <p className="mx-auto mt-4 text-base md:text-lg leading-[1.8] text-warm-ash">
                WMP conducts a structural audit. A focused assessment of how
                your business is set up to perform. It concludes with a clear
                recommendation based on the intervention your business actually
                needs.
              </p>
            </div>
          </FadeUp>

          <div className="space-y-4">
            <div className="rounded-xl bg-white p-4 lg:p-8">
              <FadeUp>
                <h4 className="mb-5 font-bold text-[#5E35B1] text-xl md:text-2xl tracking-[-0.01em]">
                  What the Audit covers
                </h4>
              </FadeUp>

              <CheckList items={auditCovers} />
            </div>

            <div className="rounded-xl bg-white p-4 lg:p-8">
              <FadeUp>
                <h4 className="mb-5 font-bold text-[#5E35B1] text-xl md:text-2xl tracking-[-0.01em]">
                  What You Receive
                </h4>
              </FadeUp>

              <CheckList items={auditReceives} />
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl p-8 lg:p-10 bg-[#EDEAE3] mb-13">
          <FadeUp>
            <PillHeader index="02" label="Engagement" />
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mb-10 text-center">
              <h3 className="font-bold leading-[1.2] text-[28px] md:text-[32px] tracking-[-0.025em] text-near-black">
                Recommendations are evidence-based.
              </h3>
              <p className="mx-auto mt-4 text-lg leading-[1.8] text-warm-ash">
                Based on the audit, WMP defines the right engagement. Each
                option is clearly scoped, what it solves, what it leaves, and
                how long it takes. We recommend the best path forward so that
                you can make a confident, informed decision.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {engagementOptions.map((option, i) => {
              const isRecommended = option.recommended;
              return (
                <motion.div
                  key={option.id}
                  className={`flex flex-col rounded-xl p-6 ${isRecommended ? "none" : "border  border-[#292D3280]/50"}`}
                  style={{
                    backgroundColor: isRecommended ? "#5E35B1" : "white",
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
                  {isRecommended && (
                    <div className="mb-4 rounded-full bg-white px-3 py-1 text-center">
                      <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#7F56D9]">
                        *Recommended most often
                      </p>
                    </div>
                  )}

                  <h4
                    className="mb-3 font-bold leading-[1.2] text-2xl tracking-[-0.02em]"
                    style={{
                      color: isRecommended ? "white" : "#1C1C1C",
                    }}
                  >
                    {option.label}
                  </h4>

                  <p
                    className="mb-5 text-base leading-[1.75]"
                    style={{
                      color: isRecommended
                        ? "rgba(255,255,255,0.7)"
                        : "#6B6660",
                    }}
                  >
                    {option.description}
                  </p>

                  <ul
                    className={`mt-auto space-y-2 border-t pt-4 ${isRecommended ? "border-white" : "border-[#787068]"} `}
                  >
                    {option.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-md px-4 py-3 text-base leading-[1.65]"
                        style={{
                          backgroundColor: isRecommended
                            ? "rgba(255,255,255,0.12)"
                            : "#F6F6FA",
                          color: isRecommended ? "white" : "#5E35B1",
                        }}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-[#EDEAE3] p-8 lg:p-10 mb-13">
          <FadeUp>
            <PillHeader index="03" label="Delivery" />
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mb-10 text-center">
              <h3 className="font-bold leading-[1.2] text-[28px] md:text-[32px] tracking-[-0.025em] text-near-black">
                Every engagement includes.
              </h3>
              <p className="mx-auto mt-4 text-lg leading-[1.8] text-warm-ash">
                Regardless of the engagement, the same commitments apply. These
                are not principles, They are the conditions under which WMP
                works.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FadeUp>
              <DeliveryCard
                title="Senior involvement throughout"
                description="The same person who conducts the audit leads the engagement. There is no handover. The quality of thinking at the diagnostic stage is carried through to delivery."
              />
            </FadeUp>

            <FadeUp delay={0.1}>
              <DeliveryCard
                title="Fixed fee, agreed upfront"
                description="Scope and fee are agreed before any work begins. If priorities shift, it is addressed directly. Any change in scope is defined and agreed before additional work starts."
              />
            </FadeUp>

            <FadeUp delay={0.3}>
              <DeliveryCard
                title="Documented outputs"
                description="Every engagement produces clear, written deliverables. Frameworks, role definitions, and processes your team can use and build on. All outputs belong to you."
              />
            </FadeUp>

            <FadeUp delay={0.4}>
              <DeliveryCard
                title="Defined end point"
                description="WMP steps back at the end of each engagement. The work is designed to be carried forward internally. Ongoing dependency is not the model."
              />
            </FadeUp>
          </div>
        </div>

        <FadeUp delay={0.3}>
          <TaglineBanner text="We design the system with you, so your team can run it with confidence." />
        </FadeUp>
      </div>
    </section>
  );
}
