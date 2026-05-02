import Image from "next/image";
import { FadeUp } from "../global/animations";

export default function Structure() {
  return (
    <section className="px-4 md:px-8 py-20 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/background-pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "1000px 1000px",
          opacity: 0.5,
        }}
      />
      <div className="relative container grid grid-cols-1 lg:grid-cols-2 gap-18 items-center">
        <div>
          <FadeUp>
            <h2 className="text-4xl lg:text-5xl font-semibold font-serif leading-tight mb-8">
              Designing the structure behind performance
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="space-y-5 lg:text-[18px] font-medium leading-relaxed text-warm-ash">
              <p>
                We design workforce structure for sustainable business
                performance. This covers operational models, accountability
                frameworks, and workforce strategy - everything your business
                needs without breaking.
              </p>
              <p>
                The best workforce structures are built with the people who know
                the business best.
              </p>
              <p>
                Our strongest partnerships happen when leaders are clear on
                what’s not working and ready to act.
              </p>
              <p>You bring the context. We bring the structure.</p>
            </div>
          </FadeUp>
        </div>

        <div className="flex items-center justify-center">
          <FadeUp delay={0.4}>
            <div className="relative w-full max-w-162.5">
              <div
                className="absolute inset-0 rounded-tl-2xl rounded-br-2xl"
                style={{ backgroundColor: "#5E35B1" }}
              />

              <div className="relative translate-x-3 -translate-y-3">
                <Image
                  src="/images/presentation.jpg"
                  alt="Team Presentation"
                  width={649}
                  height={587}
                  className="w-full h-auto rounded-br-2xl rounded-tl-2xl"
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
