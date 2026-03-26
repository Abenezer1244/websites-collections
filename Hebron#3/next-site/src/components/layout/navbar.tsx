"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";

interface NavbarProps {
  variant?: "light" | "dark";
}

export function Navbar({ variant = "dark" }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When scrolled, always use dark text on solid bg regardless of variant
  const isLight = variant === "light" && !scrolled;

  const inactiveClass = isLight
    ? "text-white/80 hover:text-white"
    : "text-rock/80 hover:text-rock";

  const logoTextClass = isLight ? "text-white" : "text-rock";

  const hamburgerClass = isLight
    ? "text-white hover:bg-white/10"
    : "text-rock hover:bg-rock/10";

  // Nav bar background: transparent when at top, solid when scrolled
  const navBgClass = scrolled
    ? "bg-sand/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(45,42,38,0.08)]"
    : "bg-transparent";

  // Pill background: glassmorphic on dark hero, more opaque when scrolled
  const pillBgClass = scrolled
    ? "bg-white/70 border border-rock/10 backdrop-blur-xl shadow-md"
    : "bg-white/15 border border-white/60 backdrop-blur-3xl shadow-lg";

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${navBgClass}`}>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src={SITE.logo}
            alt={`${SITE.name} logo`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span
            className={`font-serif text-xl font-semibold tracking-tight transition-colors duration-300 ${logoTextClass}`}
          >
            Skagit River
          </span>
        </Link>

        {/* Desktop nav pill */}
        <div
          className={`hidden md:flex items-center rounded-full px-2 py-1.5 transition-all duration-300 ${pillBgClass}`}
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-all duration-200 px-4 py-1.5 rounded-full ${
                  isActive
                    ? "bg-white shadow-sm font-medium text-rock"
                    : inactiveClass
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-clay text-white rounded-full px-5 py-2.5 text-sm font-medium shadow-md hover:bg-clay-dark transition-colors duration-200"
        >
          Schedule a Tour
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className={`md:hidden p-2 rounded-lg transition-colors ${hamburgerClass}`}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-4 left-4 right-4 z-50 bg-[#2D2A26] rounded-3xl p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <Image
                    src={SITE.logo}
                    alt={`${SITE.name} logo`}
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <span className="font-serif text-lg font-semibold text-sand">
                    Skagit River
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-sand/70 hover:text-sand rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`text-lg px-4 py-3 rounded-2xl transition-colors ${
                        isActive
                          ? "bg-white/10 text-white font-medium"
                          : "text-sand/80 hover:text-sand hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-clay text-white rounded-full px-5 py-3 font-medium shadow-md hover:bg-clay-dark transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Schedule a Tour
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
