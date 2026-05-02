import Image from "next/image";
import { FadeIn, FadeUp } from "../global/animations";

export default function OperatingModelSection() {
  return (
    <section className="bg-[#5E35B1] px-4 md:px-8 py-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-18 items-center">
        <div className="text-white">
          <FadeUp>
            <h2 className="text-4xl lg:text-5xl font-bold font-serif leading-tight mb-8">
              Your operating model is limiting your growth
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="space-y-5 text-[18px] font-medium leading-relaxed text-white">
              <p>
                Most founders and leadership teams reach a point where the
                business is growing, but something feels wrong. Decisions are
                slow. Everyone is busy, but nothing is moving. Your best people
                are frustrated.
              </p>
              <p>
                It's not a people problem.{" "}
                <strong className="text-white font-semibold">
                  It's a structural problem.
                </strong>
              </p>
              <p>
                When a business scales faster than its operating model, the
                symptoms show up in missed delivery, unclear ownership, reactive
                hiring and unclear managerial responsibility. Every one of those
                symptoms has a commercial cost. Most leaders are paying for it
                without realising.
              </p>
              <p>Workforce management partners exists for this moment.</p>
            </div>
          </FadeUp>
        </div>

        <FadeUp>
          <div className="flex items-center justify-center">
            <Image
              src="/w-graphic.png"
              alt="W logo graphic"
              width={574}
              height={466}
              className="w-full h-auto"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
