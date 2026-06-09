"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, TrendingUp, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/our-work", label: "Our Work" },
  { href: "/insights", label: "Insights" },
];

const DARK_HERO_PAGES = ["/", "/insights"];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const hasDarkHero = DARK_HERO_PAGES.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const headerBg = hasDarkHero
    ? scrolled || menuOpen
      ? "bg-[#1C1C1C]/95 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.07)]"
      : "bg-transparent backdrop-blur-sm"
    : "bg-[#1C1C1C]/95 shadow-[0_1px_0_rgba(255,255,255,0.06)]";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
      >
        <div className="container flex min-h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setMenuOpen(false)}
            aria-label="Workforce Management Partners"
          >
            <Image
              src="/logo-mark-white.svg"
              alt="Workforce Management Partners"
              width={156}
              height={56}
              className="h-14 w-auto sm:h-18"
              priority
            />
          </Link>

          <div className="hidden lg:flex">
            <nav className="flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[13px] font-bold font-body transition-colors duration-200 hover:underline ${
                    pathname === item.href
                      ? "text-[#7B4FD4] underline font-extrabold"
                      : "text-parchment"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <Button
            asChild
            className="hidden! lg:flex! items-center gap-1 bg-[#7B4FD4] text-parchment hover:scale-3d rounded-lg"
          >
            <Link href="/contact">
              Contact us
              <TrendingUp strokeWidth={2} className="w-5 h-5" />
            </Link>
          </Button>

          {/* Mobile menu toggle — always light since header is always dark-bg */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-sm text-parchment transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-violet lg:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      <Drawer open={menuOpen} onOpenChange={setMenuOpen} direction="right">
        <DrawerContent className="flex flex-col border-none bg-parchment lg:hidden rounded-none">
          <DrawerHeader className="flex items-center justify-items-end border-b border-parchment/[0.07] px-6 py-5">
            <DrawerClose asChild>
              <button
                aria-label="Close menu"
                className="flex! h-12 w-12 items-center justify-center rounded-full bg-parchment/10 transition-colors hover:bg-parchment/20"
              >
                <X className="text-near-black w-6 h-6" />
              </button>
            </DrawerClose>
          </DrawerHeader>

          <nav className="flex flex-1 flex-col px-6 rounded-none">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-5 text-xl font-semibold transition-colors text-near-black"
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-electric-violet" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="px-6 py-8">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl py-4 text-[0.875rem] font-semibold text-white transition-opacity hover:opacity-85"
              style={{ backgroundColor: "#7B4FD4" }}
            >
              Contact us
              <TrendingUp strokeWidth={2} className="h-4 w-4" />
            </Link>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}