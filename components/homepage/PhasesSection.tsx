import Link from "next/link";
import { FadeUp } from "../global/animations";

const phases = [
  {
    id: "foundation",
    label: "Foundation",
    body: "You have 40 employees. New hires are figuring things out for themselves, nobody owns processes, and nothing runs consistently without you. The time you spend managing what your managers should own is time you're not spending on the business. You know it, but you haven't had time to fix it.",
    imageSrc: "/images/purple-illustration.jpg",
  },
  {
    id: "growth",
    label: "Growth",
    body: "Your business is growing, so is revenue, but you can feel the structure beginning to strain. The ways of working at 20 people is starting to cost you at 70 people. It's still in control for now, but you can see where this is heading. Fixing structure before it breaks costs significantly less than fixing it after.",
    imageSrc: "/images/purple-illustration.jpg",
  },
  {
    id: "scale",
    label: "Scale",
    body: "The business is growing. The team is growing. But somehow the pressure isn't easing—more people, more complexity, more cost. You haven't built a workforce strategy to make sense of it. Every misaligned hire costs more than the salary. You're starting to feel it.",
    imageSrc: "/images/purple-illustration.jpg",
  },
];

export function PhasesSection() {
  return (
    <section className="bg-linen py-24 lg:py-14">
      <div className="container">
        <FadeUp>
          <h2 className="mb-10 text-center text-[32px] font-semibold leading-[1.1] tracking-[-0.03em] text-near-black">
            Every situation is different, but the pattern is the same.
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr_auto]">
            <div className="contents lg:col-span-2 lg:grid lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-4">
              <div className="flex flex-col overflow-hidden rounded-2xl bg-white lg:col-span-2">
                <img
                  src={phases[0].imageSrc}
                  alt=""
                  aria-hidden
                  className="h-35 w-full object-cover"
                />
                <div className="p-7">
                  <h3 className="mb-3 font-display text-2xl font-bold tracking-[0.5rem] text-near-black">
                    {phases[0].label}
                  </h3>
                  <p className="text-base leading-[1.85] text-warm-ash">
                    {phases[0].body}
                  </p>
                </div>
              </div>

              <div className="flex flex-col overflow-hidden rounded-2xl bg-white">
                <img
                  src={phases[1].imageSrc}
                  alt=""
                  aria-hidden
                  className="h-[120px] w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-3 font-display text-2xl font-bold tracking-[0.5rem] text-near-black">
                    {phases[1].label}
                  </h3>
                  <p className="text-base leading-[1.85] text-warm-ash">
                    {phases[1].body}
                  </p>
                </div>
              </div>

              <div className="flex flex-col overflow-hidden rounded-2xl bg-white">
                <img
                  src={phases[2].imageSrc}
                  alt=""
                  aria-hidden
                  className="h-[120px] w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-3 font-display text-2xl font-bold tracking-[0.5rem] text-near-black">
                    {phases[2].label}
                  </h3>
                  <p className="text-base leading-[1.85] text-warm-ash">
                    {phases[2].body}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-2xl lg:w-95">
              <div className="min-h-65 flex-1 lg:min-h-0 -mb-4 relative z-10">
                <img
                  src="/images/office-woman.jpg"
                  alt="A business leader"
                  className="h-full w-full object-cover rounded-b-2xl"
                  style={{ minHeight: 260 }}
                />
              </div>
              <div className="bg-electric-violet px-7 py-8">
                <h4 className="mb-3 text-[12px] font-bold uppercase tracking-[0.22em] text-white/60">
                  Workforce Management Partners
                </h4>
                <p className="text-2xl font-medium leading-[1.3] tracking-[-0.02em] text-[#F7F5F0]">
                  If any of these sound like your business, let's talk.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-base font-semibold text-white underline underline-offset-4 transition-opacity hover:opacity-75"
                >
                  Start the conversation →
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
