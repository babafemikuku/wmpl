import BuildIcon from "@/public/icons/box.svg";
import GrowthIcon from "@/public/icons/tree.svg";
import ScaleIcon from "@/public/icons/scale.svg";
import Image from "next/image";
import { FadeUp } from "../global/animations";

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
        <FadeUp>
          <div className="p-4 md:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#F6F6FA] rounded-full flex items-center justify-center text-lg">
                <Image src="/icons/box.svg" alt="" width={20} height={20} />
              </div>
              <h3 className="text-[#5E35B1] font-bold font-serif text-[24px]">
                Build the Foundation
              </h3>
            </div>
            <p className="text-[#1C1C1C] text-lg leading-relaxed">
              Does your business actually run without you?
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-[#7B4FD4] font-bold underline underline-offset-2"
            >
              Learn More →
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#F6F6FA] rounded-full flex items-center justify-center text-lg">
                <Image src="/icons/tree.svg" alt="" width={20} height={20} />
              </div>
              <h3 className="text-[#5E35B1] font-bold font-serif text-[24px]">
                Design for Growth
              </h3>
            </div>
            <p className="text-[#1C1C1C] text-lg leading-relaxed">
              Do your people know what good looks like?
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-[#7B4FD4] font-bold underline underline-offset-2"
            >
              Learn More →
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#F6F6FA] rounded-full flex items-center justify-center text-lg">
                <Image src="/icons/scale.svg" alt="" width={20} height={20} />
              </div>
              <h3 className="text-[#5E35B1] font-bold font-serif text-[24px]">
                Scale Sustainably
              </h3>
            </div>
            <p className="text-[#1C1C1C] text-lg leading-relaxed">
              Can you scale without breaking what you've built?
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-[#7B4FD4] font-bold underline underline-offset-2"
            >
              Learn More →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
