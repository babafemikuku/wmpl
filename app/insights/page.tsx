import { TaglineBanner } from "@/components/global/TaglineBanner";
import Hero from "@/components/insights/Hero";
import { Posts } from "@/components/insights/Posts";

export default function Insights() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />

      <Posts />

      <div className="container py-6">
        <TaglineBanner text="We design the system with you, so your team can run it with confidence." />
      </div>
    </main>
  );
}
