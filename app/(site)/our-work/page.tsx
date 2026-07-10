import { AboutSection } from "@/components/our-work/Bio";
import Hero from "@/components/our-work/Hero";
import { TheWork } from "@/components/our-work/TheWork";
import WhyWMP from "@/components/our-work/WhyWMP";
import { getOurWorkPage } from "@/sanity/lib/client";

export default async function OurWork() {
  const page = await getOurWorkPage();

  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <WhyWMP />
      <TheWork />
      <AboutSection bio={page?.bio} />
    </main>
  );
}
