import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/what-we-do", label: "What we do" },
  { href: "/who-we-are", label: "Who we are" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-linen">
      <div className="container py-10 space-y-8">
        {/* Main row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Left: identity */}
          <div className="space-y-3">
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="Workforce Management Partners"
            >
              <Image
                src="/logo-black.svg"
                alt="Workforce Management Partners"
                width={156}
                height={56}
                className="h-10 w-auto sm:h-18"
              />
            </Link>
            <p className="text-[1rem] text-warm-ash">
              Partnering with leaders.
            </p>
          </div>

          {/* Right: nav links */}
          <nav className="flex flex-col gap-2 sm:items-end">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[1rem] font-medium text-warm-ash transition-colors hover:text-near-black hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-border/50 pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-center">
          <p className="text-[1rem] text-warm-ash">
            © {new Date().getFullYear()} Workforce Management Partners
          </p>
          {/* <Link
            href="/privacy"
            className="text-xs text-warm-ash transition-colors hover:text-near-black"
          >
            Privacy Policy
          </Link> */}
        </div>
      </div>
    </footer>
  );
}
