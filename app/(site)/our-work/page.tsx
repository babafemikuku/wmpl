import { AboutSection } from "@/components/our-work/Bio";
import Hero from "@/components/our-work/Hero";
import { TheWork } from "@/components/our-work/TheWork";
import WhyWMP from "@/components/our-work/WhyWMP";
import { main } from "motion/react-client";

export default function OurWork() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <WhyWMP />
      <TheWork />
      <AboutSection />
    </main>
  );
}
