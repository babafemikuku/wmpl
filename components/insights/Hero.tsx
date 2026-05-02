import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative h-75 md:h-100 overflow-hidden">
      <Image
        src="/images/team-strategizing.jpg"
        alt="Team working together"
        fill
        className="object-cover md:object-[50%_80%]"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col h-full items-center justify-center">
        <h1 className="text-white text-5xl font-serif font-bold mb-6">
          Insights
        </h1>

        <p className="text-xl md:text-2xl font-semibold text-white text-center">
          Perspectives on structure, performance, and growth
        </p>
      </div>
    </header>
  );
}
