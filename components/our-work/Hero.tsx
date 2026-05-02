import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative h-75 md:h-100 overflow-hidden">
      <Image
        src="/images/medals.jpg"
        alt="Team working together"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-white text-5xl font-serif font-bold">Our Work</h1>
      </div>
    </header>
  );
}
