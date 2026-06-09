"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import Hero from "@/components/homepage/Hero";

import { HomeOperatingLevers } from "@/components/home-operating-levers";
import { Button } from "@/components/ui/button";
import WhatWMPDoesSection from "@/components/homepage/WhatWMPDoesSection";
import OperatingModelSection from "@/components/homepage/OperatingModelSection";
import ServiceAreas from "@/components/homepage/ServiceAreas";
import { PhasesSection } from "@/components/homepage/PhasesSection";
import { SiteFooter } from "@/components/global/Footer";

// ── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <OperatingModelSection />
      <ServiceAreas />
      <PhasesSection />
      <WhatWMPDoesSection />
    </main>
  );
}

const heroImages = [
  "/images/carousel-1.png",
  "/images/carousel-2.png",
  "/images/carousel-3.png",
  "/images/carousel-4.png",
  "/images/carousel-5.png",
  "/images/carousel-6.png",
];
