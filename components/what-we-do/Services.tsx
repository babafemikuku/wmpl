"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight, Layers } from "lucide-react";
import type { ElementType } from "react";
import { FadeIn, FadeUp } from "../global/animations";

type Step = {
  label: string;
  detail: string;
};

type Service = {
  id: string;
  title: string;
  intro: string;
  image: string;
  description: string;
  steps: Step[];
  whatShifts: string;
  Icon: ElementType;
};

type Phase = {
  title: string;
  description: string;
  PhaseIcon: string;
  services: Service[];
};

interface ServicesProps {
  phase: Phase;
  onServiceSelect: (service: Service) => void;
}

export default function Services({ phase, onServiceSelect }: ServicesProps) {
  const serviceCount = phase.services.length;
  const [leftService, centerService, rightService] = phase.services;

  return (
    <section className="bg-parchment py-16 lg:py-4">
      <div className="container">
        <div className="mt-12 grid gap-6 lg:mt-10 p-4 md:p-6 bg-white rounded-2xl">
          <div className="overflow-hidden rounded-[20px] bg-[#5E35B1] px-8 py-6 text-parchment">
            <div className="w-9 h-9 bg-[#F6F6FA] rounded-full flex items-center justify-center text-lg">
              <Image src={phase.PhaseIcon} alt="" width={20} height={20} />
            </div>
            <h3 className="mt-3 text-[32px] font-semibold leading-tight tracking-[-0.03em] text-white">
              {phase.title}
            </h3>
            <p className="mt-3 text-base leading-normal text-parchment">
              {phase.description}
            </p>
          </div>

          {serviceCount === 3 && (
            <div className="grid gap-6 lg:grid-cols-[1fr_minmax(420px,1.2fr)_1fr]">
              <div className="grid">
                <FadeUp>
                  <ServiceCard
                    service={leftService}
                    onSelect={onServiceSelect}
                    rounded="top"
                  />
                  <ServiceImage service={leftService} rounded="bottom" />
                </FadeUp>
              </div>

              <div className="grid">
                <FadeUp delay={0.2}>
                  <ServiceImage service={centerService} rounded="top" />
                  <ServiceCard
                    service={centerService}
                    onSelect={onServiceSelect}
                    rounded="bottom"
                  />
                </FadeUp>
              </div>

              <div className="grid">
                <FadeUp delay={0.3}>
                  <ServiceCard
                    service={rightService}
                    onSelect={onServiceSelect}
                    rounded="top"
                  />
                  <ServiceImage service={rightService} rounded="bottom" />
                </FadeUp>
              </div>
            </div>
          )}

          {serviceCount === 2 && (
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="grid">
                <FadeUp>
                  <ServiceCard
                    service={leftService}
                    onSelect={onServiceSelect}
                    rounded="top"
                  />
                  <ServiceImage service={leftService} rounded="bottom" />
                </FadeUp>
              </div>

              <div className="grid">
                <FadeUp delay={0.2}>
                  <ServiceImage service={centerService} rounded="top" />
                  <ServiceCard
                    service={centerService}
                    onSelect={onServiceSelect}
                    rounded="bottom"
                  />
                </FadeUp>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  onSelect,
  rounded,
}: {
  service: Service;
  onSelect: (s: Service) => void;
  rounded: "top" | "bottom";
}) {
  const radius = rounded === "top" ? "rounded-t-2xl" : "rounded-b-2xl";
  return (
    <article className={`bg-parchment ${radius} p-8 `}>
      <h3 className="text-2xl font-bold leading-tight tracking-[-0.02em] text-near-black">
        {service.title}
      </h3>
      <p className="mt-4 text-sm leading-[1.85] text-warm-ash">
        {service.intro}
      </p>
      <button
        type="button"
        onClick={() => onSelect(service)}
        className="mt-8 inline-flex items-center cursor-pointer gap-2 text-base font-semibold underline text-electric-violet transition hover:opacity-80"
      >
        See how this works
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
    </article>
  );
}

function ServiceImage({
  service,
  rounded,
}: {
  service: Service;
  rounded: "top" | "bottom";
}) {
  const radius = rounded === "top" ? "rounded-t-2xl" : "rounded-b-2xl";
  return (
    <div className={`overflow-hidden bg-parchment ${radius} self-start`}>
      <div className="relative aspect-4/3 sm:aspect-16/12">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className={`h-full w-full object-cover ${radius}`}
        />
      </div>
    </div>
  );
}
