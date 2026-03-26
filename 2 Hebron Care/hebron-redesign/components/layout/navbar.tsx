"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-[var(--color-cream)] transition-shadow duration-300",
          scrolled && "shadow-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="https://i.ibb.co/V0gtsJtY/Untitled-design.png"
                alt="Hebron Care logo"
                width={36}
                height={36}
                className="rounded-full object-cover transition-transform group-hover:scale-105"
              />
              <span className="font-serif text-lg tracking-[0.2em] uppercase font-medium text-[var(--color-teal)]">
                Hebron Care
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-10">
              {links.map((link) => {
                const isActive = pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-[13px] tracking-wide transition-colors relative py-1",
                      isActive
                        ? "text-[var(--color-teal)] font-medium"
                        : "text-[var(--color-ink)]/70 hover:text-[var(--color-teal)]"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[var(--color-gold)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+14253747954"
                className="text-[13px] text-[var(--color-ink)]/60 hover:text-[var(--color-teal)] transition-colors flex items-center gap-1.5"
              >
                <Phone size={14} strokeWidth={1.5} />
                (425) 374-7954
              </a>
              <Link
                href="/contact"
                className="bg-[var(--color-teal)] text-white px-5 py-2.5 rounded-full text-[13px] tracking-wide hover:bg-[var(--color-teal-light)] transition-all hover:shadow-lg hover:shadow-[var(--color-teal)]/20 flex items-center gap-2"
              >
                <Calendar size={14} strokeWidth={1.5} />
                Schedule a Tour
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 -mr-2 text-[var(--color-teal)]"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-[var(--color-cream)] z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full pt-20 px-8 pb-8">
                <nav className="flex flex-col gap-1 flex-1">
                  {links.map((link, i) => {
                    const isActive = pathname === link.href ||
                      (link.href !== "/" && pathname.startsWith(link.href));
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 + 0.1 }}
                      >
                        <Link
                          href={link.href}
                          className={cn(
                            "block py-4 text-2xl font-serif tracking-tight border-b border-[var(--color-teal)]/10 transition-colors",
                            isActive
                              ? "text-[var(--color-teal)] font-medium"
                              : "text-[var(--color-ink)]/70 hover:text-[var(--color-teal)]"
                          )}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="space-y-3 mt-auto">
                  <a
                    href="tel:+14253747954"
                    className="flex items-center justify-center gap-2 py-3 text-sm text-[var(--color-teal)] border border-[var(--color-teal)]/20 rounded-xl"
                  >
                    <Phone size={16} strokeWidth={1.5} />
                    (425) 374-7954
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 py-3 text-sm text-white bg-[var(--color-teal)] rounded-xl shadow-lg shadow-[var(--color-teal)]/20"
                  >
                    <Calendar size={16} strokeWidth={1.5} />
                    Schedule a Tour
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
