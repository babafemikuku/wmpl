import { TaglineBanner } from "../global/TaglineBanner";
import { FadeUp } from "../global/animations";

const stats = [
  { value: "10+", label: "Years experience" },
  { value: "5+", label: "Industries" },
  { value: "13+", label: "Countries" },
];

const bioParagraphs = [
  "Afua Mensah is the founder of Workforce Management Partners, a consultancy that partners with leaders to design the workforce structures their businesses need to scale.",
  "She brings over a decade of experience working directly with founders and senior leadership teams in international, high-growth environments. Her background spans technology, fintech, esports, media, and healthcare, across businesses operating in the UK, Europe, Africa, and North America. That breadth gives her a grounded understanding of how workforce strategy has to adapt to different commercial contexts and what stays constant regardless of sector or market.",
  "Afua's work is focused on a specific problem. When a business grows faster than its structure, the symptoms show up everywhere. Accountability becomes unclear. Hiring gets reactive. Founders can't step back. She partners with leadership teams to design the operational backbone that allows a business to perform without depending on one or two individuals to hold it together.",
  "Her approach is commercial first. Roles and structures are designed around how the business actually needs to work. The result is organisations that operate with greater cost discipline and the kind of consistency that makes growth sustainable rather than exhausting.",
  "Afua holds a CIPD Level 7 qualification in Strategic People Management, the highest professional qualification in the field, and brings that rigour to every engagement alongside practical delivery experience across complex, fast-moving organisations.",
];

export function AboutSection() {
  return (
    <section style={{ backgroundColor: "#F7F5F0" }} className="py-6 lg:py-8">
      <div className="container space-y-12 overflow-visible">
        <div
          className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "#EEECE8",
          }}
        >
          {stats.map((stat) => (
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
                &ldquo;Most businesses don&apos;t struggle because of strategy.
                They struggle because their business isn&apos;t structured to
                deliver it.&rdquo;
              </p>
              <p className="mt-2 text-lg font-bold text-white">
                Afua Mensah, Founder
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {bioParagraphs.map((para, i) => (
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
          <TaglineBanner text="We design the system with you, so your team can run it with confidence." />
        </FadeUp>
      </div>
    </section>
  );
}
