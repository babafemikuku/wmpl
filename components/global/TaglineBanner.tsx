export function TaglineBanner({ text }: { text: string }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl px-6 md:px-10 py-12 text-center"
      style={{ backgroundColor: "#5E35B1" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 10%, rgba(255,255,255,0.1) 90%, rgba(255,255,255,0) 100%),
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 2px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 2px, transparent 2px)
          `,
          backgroundSize: "100% 100%, 50px 50px, 50px 50px",
        }}
      />
      <p className="relative font-semibold leading-[1.2] tracking-[-0.02em] text-white text-[26px] md:text-[32px]">
        {text}
      </p>
    </div>
  );
}
