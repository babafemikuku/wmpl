"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/contact", label: "Contact Us" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-near-black/95 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.07)]"
            : "bg-near-black/90 backdrop-blur-sm shadow-[0_1px_0_rgba(255,255,255,0.04)]"
        }`}
      >
        <div className="container flex min-h-20 items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setMenuOpen(false)}
            aria-label="Workforce Management Partners"
          >
            <Image
              src="/logo.svg"
              alt="Workforce Management Partners"
              width={156}
              height={56}
              className="h-9 w-auto sm:h-10"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 lg:flex">
            <nav className="flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-parchment ${
                    pathname === item.href
                      ? "text-parchment"
                      : "text-parchment/55"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button
              asChild
              className="border border-parchment/20 bg-parchment/10 text-parchment hover:bg-parchment/20"
            >
              <Link href="/contact">Work with us</Link>
            </Button>
          </div>

          {/* Mobile: hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-sm text-parchment/70 transition-colors hover:text-parchment focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-violet lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-near-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden
      />

      {/* Drawer panel */}
      <div
        className={`fixed inset-x-0 top-20 z-40 transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-3 opacity-0 pointer-events-none"
        }`}
      >
        <div className="border-b border-parchment/10 bg-near-black shadow-[0_24px_48px_rgba(0,0,0,0.5)]">
          {/* Nav links */}
          <nav className="container divide-y divide-parchment/[0.07]">
            {navigation.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between py-4 text-[1rem] font-medium transition-colors duration-150 ${
                  pathname === item.href
                    ? "text-parchment"
                    : "text-parchment/55 hover:text-parchment"
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 30}ms` : "0ms" }}
              >
                <span>{item.label}</span>
                {pathname === item.href && (
                  <span className="h-1 w-1 rounded-full bg-electric-violet" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="container pb-8 pt-4">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-sm border border-parchment/20 bg-parchment/10 py-4 text-[0.875rem] font-semibold uppercase tracking-[0.18em] text-parchment transition-colors hover:bg-parchment/20"
            >
              Work with us
            </Link>

            {/* Brand line */}
            <p className="mt-6 text-center text-[0.7rem] uppercase tracking-[0.22em] text-parchment/20">
              We partner with you to design the system.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
