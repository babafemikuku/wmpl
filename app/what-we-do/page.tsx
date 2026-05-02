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
import Hero from "@/components/what-we-do/Hero";
import Services from "@/components/what-we-do/Services";
import Structure from "@/components/what-we-do/Structure";
import { FadeUp } from "@/components/global/animations";
import { TaglineBanner } from "@/components/global/TaglineBanner";

type Service = {
  id: string;
  title: string;
  intro: string;
  image: string;
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
  PhaseIcon: string;
  services: Service[];
};

const phases: Phase[] = [
  {
    index: 1,
    title: "Build the foundation",
    tagline: "Does your business actually run without you?",
    description:
      "This is the first breaking point. Growth strains the system, and the founder ends up making every decision. We establish the operational backbone: clear processes, defined ownership, and the infrastructure your managers need to run the business without you in the room.",
    PhaseIcon: "/icons/box.svg",
    services: [
      {
        id: "workforce-design",
        title: "Workforce Design Infrastructure",
        Icon: Network,
        image: "/images/wfi-design.jpg",
        intro:
          "Most employee lifecycles are built reactively,  a policy here, a process there, nothing connected. WMP designs the full infrastructure that your managers can own and run, so leadership time goes back to the business",
        description:
          "Your business is losing value at every stage of the employee journey, and most of it is invisible. New hires take months to become effective. Performance is managed inconsistently or not at all. When people leave, knowledge walks out with them. Nobody owns the process, so the same problems keep happening.",
        steps: [
          {
            label: "Research and discovery",
            detail:
              "Stakeholder interviews, current state audit, and process documentation review.",
          },
          {
            label: "Current state mapping",
            detail:
              "Map existing lifecycle stages, identify ownership gaps, and analyse areas of improvement.",
          },
          {
            label: "Analysis and design",
            detail:
              "Design lifecycle framework, define process ownership, and create an implementation plan.",
          },
          {
            label: "Implementation and embed",
            detail: "",
          },
        ],
        whatShifts:
          "Your managers were promoted because they were good at their jobs. Now they're managing people, and nobody taught them how. WMP builds the frameworks and capabilities so your management layer actually leads.",
      },
      {
        id: "organisational-redesign",
        title: "Organisational Redesign",
        Icon: Building2,
        image: "/images/org-redesign.jpg",

        intro:
          "A misaligned structure doesn't just slow you down; it costs you in duplicated roles, unclear escalation paths, and decisions that take three meetings instead of one. WMP redesigns the structure around how the business actually needs to operate.",
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
          "Your managers start making decisions your structure was previously preventing them from making. Growth stops depending on you being in every room.",
      },
      {
        id: "people-function",
        title: "People Function Transformation",
        Icon: Users,
        image: "/images/services/pf-trans.jpg",

        intro:
          "The result is a People function that contributes to commercial performance, not one that spends its time firefighting. WMP redefines what the function is for and rebuilds how it operates.",
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
          "Your leadership team stops working around the People function and starts working with it.",
      },
    ],
  },
  {
    index: 2,
    title: "Design for growth",
    tagline: "Do your people know what good looks like?",
    description:
      "Most organisations have clarity problems rather than performance problems. WMP partners with your leadership team to design the structure that ensures your people know what they own, what's expected, and how they'll be held accountable.",
    PhaseIcon: "/icons/tree.svg",
    services: [
      {
        id: "role-accountability",
        title: "Role & Accountability Design",
        Icon: GitBranch,
        image: "/images/services/boss-asst.jpg",

        intro:
          "After this engagement, every role in your business has a defined owner, clear expectations, and a way to measure performance. Escalations drop. Decisions move faster. Managers stop waiting to be told what to do.",
        description:
          "Everyone is working hard, but there are gaps in ownership. Duplication creates fiction and gaps create failure. You are constantly having to make decisions for your managers and employees look to you for direction, slowing business delivery.",
        steps: [
          {
            label: "Discovery and intake",
            detail:
              "Initial assessment, stakeholder interviews, and review existing roles and responsibilities.",
          },
          {
            label: "Drafting and design",
            detail:
              "Develop role responsibilities, define KPIs, and competency frameworks.",
          },
          {
            label: "Review and iteration",
            detail:
              "Stakeholder feedback session, refine roles and responsibilities, and leadership validation.",
          },
          {
            label: "Finalisation and handover",
            detail:
              "Finalise role documents, implementation plan, and handover.",
          },
        ],
        whatShifts:
          "The conversations stop coming back to you. People know what they own and can be held to it.",
      },
      {
        id: "manager-effectiveness",
        title: "Manager Effectiveness",
        Icon: UserCog,
        image: "/images/services/corporate-team.jpg",

        intro:
          "Your managers were promoted because they were good at their jobs. Now they're managing people, and nobody taught them how. WMP builds the frameworks and capabilities so your management layer actually leads.",
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
          "The conversations you are currently having with your managers, they start having with their teams.",
      },
    ],
  },
  {
    index: 3,
    title: "Scale sustainably",
    tagline: "Can you scale without breaking what you've built?",
    description:
      "Scaling sustainably requires a disciplined workforce strategy. We align headcount to revenue, map capability to ambition, and build leadership depth that doesn’t depend on one or two individuals. There’s a difference between growing a team and building with intention.",
    PhaseIcon: "/icons/scale.svg",
    services: [
      {
        id: "workforce-planning",
        title: "Workforce Planning & Investment",
        Icon: BarChart3,
        image: "/images/services/investment-paper.jpg",

        intro:
          "Can you justify every hire you've made this year against revenue? WMP builds a planning model that ties headcount to commercial targets so every future hire has a business case behind it.",
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
          "You stop hiring reactively and start hiring intentionally.",
      },
      {
        id: "capability-assessment",
        title: "Capability Assessment & Gap Analysis",
        Icon: ScanSearch,
        image: "/images/services/examiner.jpg",

        intro:
          "You won't know you're missing a critical capability until a project fails or a key person leaves. WMP maps what you have against what you need, so you can close the gaps before they cost you.",
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
          "The anxiety about who could step up if someone left tomorrow gets replaced with a plan.",
      },
      {
        id: "succession-planning",
        title: "Succession & Continuity Planning",
        Icon: Shield,
        image: "/images/services/handshake.jpg",

        intro:
          "The business is over-reliant on individuals, and there is no plan for when that changes. WMP identifies the risks and builds a continuity framework before you need one.",
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
          "The people your business depends on most stop being a single point of failure",
      },
    ],
  },
];

export default function ServicesPage() {
  const [openService, setOpenService] = useState<Service | null>(null);

  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Structure />
      <section className=" bg-parchment py-6 lg:py-12">
        <FadeUp>
          <div className="text-center">
            <h2 className="text-[32px] font-bold leading-tight tracking-[-0.03em] text-near-black">
              Our Services
            </h2>
            <p className="mt-4 text-lg leading-[1.75] text-warm-ash">
              Structure aligned to how your business operates and performs.
            </p>
          </div>
        </FadeUp>

        <Services
          phase={phases[0]}
          onServiceSelect={(service) => setOpenService(service)}
        />
        <Services
          phase={phases[1]}
          onServiceSelect={(service) => setOpenService(service)}
        />
        <Services
          phase={phases[2]}
          onServiceSelect={(service) => setOpenService(service)}
        />
      </section>

      <div className="container py-10">
        <FadeUp delay={0.3}>
          <TaglineBanner text="We design the system with you, so your team can run it with confidence." />
        </FadeUp>
      </div>

      <Dialog
        open={!!openService}
        onOpenChange={(v) => !v && setOpenService(null)}
      >
        <DialogContent className="w-full max-w-3xl! overflow-hidden rounded-2xl border-0 bg-white p-0 [&>button:last-child]:hidden">
          {openService && (
            <div className="flex max-h-[90vh] flex-col">
              <DialogClose asChild>
                <button className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full text-warm-ash transition-colors hover:text-near-black cursor-pointer bg-[#F2F2F7]">
                  <X className="h-4 w-4" />
                </button>
              </DialogClose>

              <div className="overflow-y-auto bg-parchment mt-14 rounded-b-2xl">
                <div className="relative h-55 w-full overflow-hidden rounded-t-2xl">
                  <img
                    src={openService.image}
                    alt={openService.title}
                    className="h-full w-full object-cover md:object-[50%_40%]"
                  />
                </div>

                <div className="px-6 py-6">
                  <DialogHeader>
                    <DialogTitle className="text-[32px] text-left font-bold leading-[1.2] tracking-[-0.025em] text-near-black">
                      {openService.title}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="p-4 py-6 bg-white mt-5 rounded-2xl border border-[#292D3280]/50">
                    <h4 className="font-bold border-b-[0.5px] border-[#5E35B1] text-2xl text-[#5E35B1] tracking-[-0.01em] mb-6">
                      The Work
                    </h4>

                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span
                          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                          style={{ backgroundColor: "#5E35B1" }}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <path
                              d="M2 6l3 3 5-5"
                              stroke="white"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <div className="relative mt-2 flex flex-1 flex-col items-center">
                          <div
                            className="w-0.5 flex-1 bg-[#5E35B1]"
                            style={{
                              backgroundColor: "#5E35B1",
                            }}
                          />
                          <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            style={{ flexShrink: 0 }}
                          >
                            <polygon points="5,6 0,0 10,0" fill="#5E35B1" />
                          </svg>
                        </div>
                      </div>
                      <ul className="flex-1 space-y-2">
                        {openService.steps.map((step) => (
                          <li
                            key={step.label}
                            className="rounded-md px-4 py-1 text-base leading-[1.6] text-near-black"
                            style={{ backgroundColor: "#F6F6FA" }}
                          >
                            {step.label}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-10">
                      <h4 className="mb-3 font-bold tracking-[-0.01em] text-2xl text-[#5E35B1]">
                        What shifts
                      </h4>
                      <p className="text-base leading-[1.8] text-near-black">
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
