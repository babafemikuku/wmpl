"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  X,
  Network,
  Building2,
  Users,
  Target,
  UserCog,
  BarChart3,
  ScanSearch,
  GitBranch,
  Layers,
  TrendingUp,
  Workflow,
  Shield,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

type Service = {
  id: string;
  title: string;
  intro: string;
  description: string;
  steps: { label: string; detail: string }[];
  whatShifts: string;
  Icon: React.ElementType;
};

type Phase = {
  index: number;
  title: string;
  tagline: string;
  description: string;
  PhaseIcon: React.ElementType;
  services: Service[];
};

const phases: Phase[] = [
  {
    index: 1,
    title: "Build the foundation",
    tagline: "Does your business actually run without you?",
    description:
      "This is the first breaking point when growth strains the system. WMP partners with you to establish the operational backbone with clear processes, defined ownership, and the infrastructure your business needs to run without the founder in every decision.",
    PhaseIcon: Layers,
    services: [
      {
        id: "workforce-design",
        title: "Workforce Design Infrastructure",
        Icon: Network,
        intro:
          "The business can't run without you in every decision. WMP partners with you to design the employee lifecycle your managers can run without you. That's leadership time back, and a business that grows without depending on one person to make every decision.",
        description:
          "Your business is losing value at every stage of the employee journey, and most of it is invisible. New hires take months to become effective. Performance is managed inconsistently or not at all. When people leave, knowledge walks out with them. Nobody owns the process, so the same problems keep happening.",
        steps: [
          {
            label: "Research & Discovery",
            detail:
              "Stakeholder interviews, current state audit, and process documentation review.",
          },
          {
            label: "Current State Mapping",
            detail:
              "Map existing lifecycle stages, identify ownership gaps, and analyse areas of improvement.",
          },
          {
            label: "Analysis & Design",
            detail:
              "Design lifecycle framework, define process ownership, and create an implementation plan.",
          },
        ],
        whatShifts:
          "Every stage of the employee lifecycle is now working for the business, not against it. New hires become effective faster, stay longer, and when they leave, the business is protected. Each person contributes more, costs less to replace, and leaves the business stronger than they found it.",
      },
      {
        id: "organisational-redesign",
        title: "Organisational Redesign",
        Icon: Building2,
        intro:
          "The structure that got you here is no longer working. WMP partners with you to design the new structure and support leadership through the transition. The right structure reduces the cost of growth and increases the speed of execution.",
        description:
          "The initial structure of your business made sense with fewer people. With growing headcount, friction, inefficient ways of working and senior leaders operating below their level, your business is not on track to deliver its mission and strategy. You’re the only person with the full picture.",
        steps: [
          {
            label: "Diagnose and set goals",
            detail:
              "Current state assessment, leadership interviews, and structural failure analysis.",
          },
          {
            label: "Design principles",
            detail:
              "Establish design logic, define spans of control, and set decision rights.",
          },
          {
            label: "Strategy alignment",
            detail:
              "Map structure to commercial strategy, stress-test against growth plan.",
          },
          {
            label: "Identify constraints",
            detail:
              "Map fixed points, budget and legal boundaries, people constraints.",
          },
          {
            label: "Resource and capability",
            detail: "Skills audit, identify gaps, assess role readiness.",
          },
          {
            label: "Delivery preparation",
            detail:
              "Compliance review, communication strategy, employee support programmes.",
          },
        ],
        whatShifts:
          "Performance is elevated, workflows improved, decision-making streamlined, costs reduced, and employee engagement boosted. Growth stops being dependent on you being present in every room.",
      },
      {
        id: "people-function",
        title: "People Function Transformation",
        Icon: Users,
        intro:
          "The People function is reactive, administrative, and misaligned with where the business is going. WMP partners with you to redefine what it's for and redesign how it operates. A function that contributes to growth rather than just administering it.",
        description:
          "Your HR/People departments are burdened with time-consuming manual tasks, including addressing issues, managing compliance, and handling queries. Leaders work around it, but the business needs a strategic partner contributing to growth by aligning people strategy with company goals.",
        steps: [
          {
            label: "Assess & Plan",
            detail:
              "Current roles & capability audit, define transformation vision, and build business case.",
          },
          {
            label: "Design & Implement",
            detail:
              "Redesign HR operating model, clarify HR vs leadership responsibilities, process redesign, and capability alignment.",
          },
          {
            label: "Transition Support",
            detail:
              "Training leaders through transition, embed new responsibilities, enable new ways of working, and handover.",
          },
        ],
        whatShifts:
          "The business performs better because the people behind it are better supported, better developed, and better led. That's what a strategic People function delivers. Not compliance, not administration, but commercial output.",
      },
    ],
  },
  {
    index: 2,
    title: "Design for growth",
    tagline: "Do your people know what good looks like?",
    description:
      "Most organisations have clarity problems rather than performance problems. WMP partners with your leadership team to design the structure that ensures your people know what they own, what's expected, and how they'll be held accountable.",
    PhaseIcon: Target,
    services: [
      {
        id: "role-accountability",
        title: "Role & Accountability Design",
        Icon: GitBranch,
        intro:
          "Everyone is busy but nothing is moving. WMP partners with you to define what every role owns and what good looks like. Faster decisions, fewer escalations, and managers who lead without being directed.",
        description:
          "Everyone is working hard, but there are gaps in ownership. Duplication creates fiction and gaps create failure. You are constantly having to make decisions for your managers and employees look to you for direction, slowing business delivery.",
        steps: [
          {
            label: "Discovery & intake",
            detail:
              "Initial assessment, stakeholder interviews, and review existing roles and responsibilities.",
          },
          {
            label: "Drafting & design",
            detail:
              "Develop role responsibilities, define KPIs, and competency frameworks.",
          },
          {
            label: "Review & iteration",
            detail:
              "Stakeholder feedback session, refine roles and responsibilities, and leadership validation.",
          },
          {
            label: "Finalisation",
            detail:
              "Finalise role documents, implementation plan, and handover.",
          },
        ],
        whatShifts:
          "Decisions stop being reliant on your presence. People know what they are responsible for and can be held accountable. You stop being the answer to every question that should have been answered before it reached you.",
      },
      {
        id: "manager-effectiveness",
        title: "Manager Effectiveness",
        Icon: UserCog,
        intro:
          "The management layer isn't leading. WMP partners with you to build the frameworks and capability your managers need to lead without the founder in the room. A manager who leads well gets more from their team and keeps them longer.",
        description:
          "Your managers are technically capable, but they are not leading. Employees escalate to you, and difficult conversations are nonexistent. You do not trust the layer below you to run the business.",
        steps: [
          {
            label: "Manager discussions",
            detail:
              "One-to-one meetings with all managers, assess capability, and identify confidence gaps.",
          },
          {
            label: "Findings and communication",
            detail:
              "Collate findings, present to leadership, and agree on priority areas.",
          },
          {
            label: "Training and learning",
            detail:
              "Management fundamentals, peer learning network, scenario-based training.",
          },
          {
            label: "Build the toolkit",
            detail:
              "Manager accountability toolkit, performance conversation guides.",
          },
          {
            label: "Feedback and coaching culture",
            detail: "Embed feedback culture, coaching framework rollout.",
          },
          {
            label: "Close and handover",
            detail: "Final review, hand over all materials.",
          },
        ],
        whatShifts:
          "The conversations you're currently having with your managers, they start having with their teams. The escalations stop. The business runs a level below you.",
      },
    ],
  },
  {
    index: 3,
    title: "Scale sustainably",
    tagline: "Can you scale without breaking what you've built?",
    description:
      "Scaling sustainably requires a disciplined workforce strategy. WMP partners with you to align headcount to revenue, map capability to ambition, and build leadership depth that doesn't depend on one or two individuals.",
    PhaseIcon: TrendingUp,
    services: [
      {
        id: "workforce-planning",
        title: "Workforce Planning & Investment",
        Icon: BarChart3,
        intro:
          "Payroll is growing faster than revenue, and hiring decisions are being made on instinct. WMP partners with you to build a revenue-aligned hiring plan your leadership team can use for every future headcount decision. The cost of one misaligned hire typically exceeds the cost of the engagement that prevented it.",
        description:
          "Payroll is growing faster than revenue, and nobody can explain exactly why. Hiring decisions get made in response to pressure rather than strategy. There is no framework to resolve it, just tension from every direction.",
        steps: [
          {
            label: "Diagnose",
            detail:
              "Headcount by function, payroll as percentage of revenue, hiring trends, revenue targets.",
          },
          {
            label: "Define the logic",
            detail:
              "Define hiring principles, role prioritisation framework, and challenge existing assumptions.",
          },
          {
            label: "Build the plan",
            detail:
              "12 to 24-month hiring roadmap, cost modelling and scenarios, and link hiring to milestones.",
          },
          {
            label: "Align leadership",
            detail:
              "Leadership alignment session, introduce hiring governance, and define approval framework.",
          },
        ],
        whatShifts:
          "Hiring becomes a commercial decision, not a reactive one. Every role has a reason behind it, a cost attached to it, and a milestone it's connected to. The business grows with intention rather than momentum.",
      },
      {
        id: "capability-assessment",
        title: "Capability Assessment & Gap Analysis",
        Icon: ScanSearch,
        intro:
          "You don't know whether you have the capability to execute your growth plan. WMP partners with you to map current capability against future requirements and define what needs to change. Knowing where you're exposed before someone leaves is always cheaper than finding out after they do.",
        description:
          "You don't know if your business has the skills it needs to execute its growth plan. Key processes live in people's heads. There is no clear view of who could step up, where the gaps are, or what needs to change before the business finds out the hard way.",
        steps: [
          {
            label: "Define what good looks like",
            detail:
              "Understand growth plans, identify critical capabilities, and anchor to business needs.",
          },
          {
            label: "Identify critical roles",
            detail:
              "Define revenue-driving roles, assess role clarity and accountability.",
          },
          {
            label: "Assess current capability",
            detail:
              "Skills gap analysis, compare current vs required capability, pipeline view.",
          },
          {
            label: "Define actions",
            detail:
              "Prioritise gaps, define develop, hire or restructure actions, and a capability assessment.",
          },
        ],
        whatShifts:
          "You know exactly where the business is strong, where it's exposed, and what to do about it before something forces your hand. The anxiety about who could step up gets replaced with a plan.",
      },
      {
        id: "succession-planning",
        title: "Succession & Continuity Planning",
        Icon: Shield,
        intro:
          "The business is over-reliant on individuals and there is no plan for when that changes. WMP partners with you to identify the risks and build a continuity plan before you need one. The cost of losing a critical person unprepared goes far beyond finding a replacement.",
        description:
          "There are people in your business whose departure would cause serious disruption. You know who they are. There is no plan for when that happens, and the longer the business grows around them, the more exposed it becomes.",
        steps: [
          {
            label: "Identify exposure",
            detail:
              "Identify critical roles, map individual dependencies, build a Continuity Risk Map.",
          },
          {
            label: "Define succession logic",
            detail:
              "Define successor criteria, define what ready means, categorise roles by readiness.",
          },
          {
            label: "Assess bench strength",
            detail:
              "Assess who can step up now, identify 6 to 12-month pipeline, and map where no successor exists.",
          },
          {
            label: "Define continuity actions",
            detail:
              "Targeted retention planning, knowledge transfer plan, immediate risk mitigation steps.",
          },
        ],
        whatShifts:
          "The people your business depends on most stop being a single point of failure. You have a plan. If something changes, the business keeps moving.",
      },
    ],
  },
];

export default function ServicesPage() {
  const [openService, setOpenService] = useState<Service | null>(null);

  return (
    <main className="flex flex-1 flex-col">
      {/* ── Hero ── */}
      <section className="grain-overlay grid-bg relative min-h-[62vh] overflow-hidden bg-near-black">
        <Workflow
          className="pointer-events-none absolute -bottom-10 -right-10 text-parchment opacity-[0.03]"
          style={{ width: 440, height: 440, strokeWidth: 0.55 }}
          aria-hidden
        />
        {/* <span
          className="pointer-events-none absolute -bottom-6 left-8 select-none font-display text-[11rem] font-bold leading-none tracking-[-0.04em] text-parchment opacity-[0.022]"
          aria-hidden
        >
          02
        </span> */}

        <div className="container relative flex min-h-[62vh] items-center px-4 py-16 sm:py-24 md:px-8">
          <div className="mx-auto max-w-6xl">
            <h1 className="mt-8 text-center text-[clamp(2rem,7.5vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-parchment">
              Where structure drives performance.
            </h1>
          </div>
        </div>
      </section>

      {/* ── Problem Statement ── */}
      <section className="border-b border-border/60 bg-parchment py-16 lg:py-24">
        <div className="container">
          <div className="grid items-start lg:items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] text-center lg:text-left font-semibold leading-[1.1] tracking-[-0.03em] text-near-black">
                We partner with leaders to design workforce structure for
                sustainable business performance
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-[1rem] leading-[1.85] text-warm-ash">
                The work covers operational models, accountability frameworks,
                and workforce strategy. Everything your business needs to scale
                without breaking.
              </p>
              <p className="my-3 text-[1rem] leading-[1.85] text-warm-ash">
                The best workforce structures aren&apos;t delivered.
                They&apos;re built with the people who know the business best.
              </p>
              <p className="mt-3 text-[1rem] leading-[1.85] text-warm-ash">
                Our strongest partnerships happen when leaders are direct about
                what&apos;s breaking, open to being challenged, and ready to
                make decisions. You bring the context and the commitment. We
                bring the expertise and the structure. That combination is what
                makes the work land.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Three-column phases + services ── */}
      <section className="relative overflow-hidden border-b border-border/60 py-16 bg-border/60 lg:py-24">
        <div className="container relative">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border/60 bg-border/60 lg:grid-cols-3">
            {phases.map((phase) => {
              const { PhaseIcon } = phase;
              return (
                <div key={phase.index} className="flex flex-col gap-px">
                  {/* Phase header — paired with its services */}
                  <div className="relative overflow-hidden bg-near-black px-6 py-8 sm:px-8 sm:py-10">
                    <PhaseIcon
                      className="pointer-events-none absolute -bottom-4 -right-4 text-parchment opacity-[0.04]"
                      style={{ width: 160, height: 160, strokeWidth: 0.5 }}
                      aria-hidden
                    />
                    {/* <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-electric-violet">
                      0{phase.index}
                    </p> */}
                    <h2 className="text-[1.25rem] font-semibold leading-[1.2] tracking-[-0.025em] text-parchment">
                      {phase.title}
                    </h2>
                  </div>

                  {/* Services for this phase */}
                  {phase.services.map((service) => {
                    const { Icon } = service;
                    return (
                      <div
                        key={service.id}
                        className="group relative flex flex-col overflow-hidden bg-parchment p-5 sm:p-8"
                      >
                        <Icon
                          className="pointer-events-none absolute -bottom-6 -right-4 text-electric-violet opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.11]"
                          style={{ width: 110, height: 110, strokeWidth: 0.65 }}
                          aria-hidden
                        />

                        <div className="mb-5 flex h-8 w-8 items-center justify-center rounded-sm bg-violet-tint">
                          <Icon
                            className="h-3.5 w-3.5 text-electric-violet"
                            strokeWidth={1.5}
                          />
                        </div>

                        <h3 className="text-[1.125rem] font-semibold leading-[1.3] tracking-[-0.02em] text-near-black">
                          {service.title}
                        </h3>

                        <p className="mt-3 flex-1 text-[1rem] leading-[1.85] text-warm-ash sm:text-[0.95rem]">
                          {service.intro}
                        </p>

                        <div className="my-5 h-px w-full bg-border/60">
                          <div className="h-px w-0 bg-electric-violet transition-all duration-300 group-hover:w-full" />
                        </div>

                        <button
                          onClick={() => setOpenService(service)}
                          className="relative flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-electric-violet transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-violet cursor-pointer"
                        >
                          See how this works
                          <ArrowUpRight className="h-3 w-3" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="grain-overlay relative overflow-hidden bg-near-black py-20 text-center lg:py-36">
        <ConcentricRings />
        <FadeIn className="container relative">
          <h2 className="mx-auto mt-6 max-w-[32ch] text-balance text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-parchment">
            Get in touch. We'll arrange a conversation at a time that works for
            both of us.
          </h2>

          <div className="mt-12">
            <Button asChild size="lg">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </FadeIn>
      </section>

      {/* ── Service Dialog ── */}
      <Dialog
        open={!!openService}
        onOpenChange={(v) => !v && setOpenService(null)}
      >
        <DialogContent className="w-full max-w-7xl overflow-hidden border-border/60 bg-parchment p-0 [&>button:last-child]:hidden">
          {openService && (
            <div className="flex max-h-[90vh] flex-col">
              {/* Fixed header — never scrolls */}
              <div className="flex-shrink-0 border-b border-border/60 bg-parchment px-5 py-4 sm:px-8 sm:py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <DialogHeader>
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-violet-tint">
                          <openService.Icon
                            className="h-4 w-4 text-electric-violet"
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>
                      <DialogTitle className="font-display text-[1.4rem] font-semibold leading-[1.2] tracking-[-0.02em] text-near-black">
                        {openService.title}
                      </DialogTitle>
                    </DialogHeader>
                    <p className="mt-3 text-[1rem] leading-[1.8] text-warm-ash">
                      {openService.description}
                    </p>
                  </div>
                  <DialogClose asChild>
                    <button className="mt-1 flex-shrink-0 rounded-sm p-1 text-warm-ash transition-colors hover:text-near-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-violet">
                      <X className="h-4 w-4" />
                    </button>
                  </DialogClose>
                </div>
              </div>

              {/* Scrollable body */}
              <div className="overflow-y-auto">
                <div className="px-5 py-5 sm:px-8 sm:py-8">
                  <p className="mb-8 text-[1rem] font-medium uppercase tracking-[0.28em] text-electric-violet">
                    The work
                  </p>

                  <div className="space-y-0">
                    {openService.steps.map((step, i) => (
                      <div key={i} className="relative flex gap-5">
                        <div className="flex flex-col items-center">
                          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-electric-violet bg-parchment text-[11px] font-semibold text-electric-violet">
                            {i + 1}
                          </div>
                          {i < openService.steps.length - 1 && (
                            <div
                              className="mt-1 w-px flex-1 bg-border/80"
                              style={{ minHeight: "2.5rem" }}
                            />
                          )}
                        </div>
                        <div
                          className={`flex-1 ${i < openService.steps.length - 1 ? "pb-6" : ""}`}
                        >
                          <p className="text-[1rem] font-semibold leading-[1.4] tracking-[-0.01em] text-near-black">
                            {step.label}
                          </p>
                          <p className="mt-1.5 text-[1rem] leading-[1.75] text-warm-ash">
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 overflow-hidden rounded-sm border border-electric-violet/20 bg-violet-tint/30">
                    <div className="border-b border-electric-violet/20 px-6 py-3">
                      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-electric-violet">
                        What shifts
                      </p>
                    </div>
                    <div className="px-6 py-5">
                      <p className="text-[0.9rem] leading-[1.8] text-near-black">
                        {openService.whatShifts}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ConcentricRings() {
  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      aria-hidden
    >
      {[500, 700, 900].map((size) => (
        <div
          key={size}
          className="absolute rounded-full border border-electric-violet/30"
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
}
