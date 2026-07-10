import type { BioSectionContent } from "@/sanity/lib/client";
import { TaglineBanner } from "../global/TaglineBanner";
import { FadeUp } from "../global/animations";

const tagline =
  "We design the system with you, so your team can run it with confidence.";

function getBioContent(bio?: BioSectionContent | null) {
  const stats =
    bio?.stats
      ?.filter((stat) => stat?.value && stat.label)
      .map((stat) => ({
        value: stat.value || "",
        label: stat.label || "",
      })) || [];
  const paragraphs = bio?.paragraphs?.filter(Boolean) || [];

  return {
    stats,
    quote: bio?.quote || "",
    quoteAttribution: bio?.quoteAttribution || "",
    paragraphs,
  };
}

export function AboutSection({ bio }: { bio?: BioSectionContent | null }) {
  const content = getBioContent(bio);

  return (
    <section style={{ backgroundColor: "#F7F5F0" }} className="py-6 lg:py-8">
      <div className="container space-y-12 overflow-visible">
        <div
          className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "#EEECE8",
          }}
        >
          {content.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center py-8 px-4 text-center"
            >
              <p
                className="font-semibold leading-none tracking-[-0.03em] text-5xl"
                style={{ color: "#5E35B1" }}
              >
                {stat.value}
              </p>
              <p
                className="mt-2 text-2xl font-medium"
                style={{ color: "#5E35B1" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[550px_1fr] lg:gap-36 items-start md:pt-8">
          <div
            className="relative rounded-2xl p-5 pb-7 pt-20"
            style={{ backgroundColor: "#5E35B1" }}
          >
            <div
              className="relative rounded-2xl overflow-hidden translate-x-10 md:translate-x-20 -translate-y-10 p-2 md:p-4"
              style={{
                backgroundColor: "#F0EDE8",
              }}
            >
              <div className="overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/afua.png"
                  alt="Afua Mensah, Founder of WMP"
                  className="w-full object-cover object-top md:h-120"
                  style={{ filter: "grayscale(100%)", aspectRatio: "3/4" }}
                />
              </div>
            </div>

            <div className="px-2" style={{ marginTop: "-12px" }}>
              <p className="text-base leading-[1.75] text-white">
                &ldquo;{content.quote}&rdquo;
              </p>
              <p className="mt-2 text-lg font-bold text-white">
                {content.quoteAttribution}
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {content.paragraphs.map((para, i) => (
              <p
                key={i}
                className="leading-[1.85] text-near-black text-lg font-medium"
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        <FadeUp delay={0.1}>
          <TaglineBanner text={tagline} />
        </FadeUp>
      </div>
    </section>
  );
}
