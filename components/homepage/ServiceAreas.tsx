import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "../global/animations";

const areas = [
  {
    icon: "/icons/box.svg",
    title: "Build the Foundation",
    tagline: "Does your business actually run without you?",
    href: "/what-we-do#build-the-foundation",
  },
  {
    icon: "/icons/tree.svg",
    title: "Design for Growth",
    tagline: "Do your people know what good looks like?",
    href: "/what-we-do#design-for-growth",
  },
  {
    icon: "/icons/scale.svg",
    title: "Scale Sustainably",
    tagline: "Can you scale without breaking what you've built?",
    href: "/what-we-do#scale-sustainably",
  },
];

export default function ServiceAreas() {
  return (
    <section
      className="relative px-4 md:px-8 py-24 lg:py-28 bg-[#f0ece3]"
      style={{
        backgroundImage: "url('/grid_layer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center mb-12">
        <h2 className="text-[32px] font-bold font-serif text-[#1C1C1C] leading-tight mb-4">
          Three areas. One Outcome: a business that runs without depending on
          you
        </h2>
        <p className="text-[#787068] text-lg font-medium">
          You bring the business context, we bring the expertise.
        </p>
      </div>

      <div className="container bg-white rounded-2xl grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#EFF0F6]">
        {areas.map((area, i) => (
          <FadeUp key={area.href} delay={i * 0.1}>
            <div className="p-4 md:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#F6F6FA] rounded-full flex items-center justify-center">
                  <Image src={area.icon} alt="" width={20} height={20} />
                </div>
                <h3 className="text-[#5E35B1] font-bold font-serif text-[24px]">
                  {area.title}
                </h3>
              </div>
              <p className="text-[#1C1C1C] text-lg leading-relaxed">
                {area.tagline}
              </p>
              <Link
                href={area.href}
                className="inline-flex items-center gap-1 text-[#7B4FD4] font-bold underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                Learn More →
              </Link>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
