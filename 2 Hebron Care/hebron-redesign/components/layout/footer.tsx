import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--color-teal)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="https://i.ibb.co/V0gtsJtY/Untitled-design.png"
                alt="Hebron Care logo"
                width={36}
                height={36}
                className="rounded-full object-cover"
              />
              <span className="font-serif text-lg tracking-[0.2em] uppercase font-medium">
                Hebron Care
              </span>
            </div>
            <p className="text-white/60 font-light text-sm leading-relaxed max-w-sm mb-8">
              A licensed adult family home in Everett, Washington.
              Not a facility. A home where your loved one is known by name.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+14253747954"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-[var(--color-gold)] transition-colors"
              >
                <Phone size={16} strokeWidth={1.5} />
                (425) 374-7954
              </a>
              <a
                href="mailto:hebroncareafhllc@gmail.com"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-[var(--color-gold)] transition-colors"
              >
                <Mail size={16} strokeWidth={1.5} />
                hebroncareafhllc@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                2421 81st Pl SE, Everett, WA 98208
              </div>
            </div>
          </div>

          {/* Nav column */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-5">Pages</h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about-us", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Hours column */}
          <div className="lg:col-span-4">
            <h3 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-5">Hours</h3>
            <div className="space-y-2 text-sm text-white/60">
              <p>
                <span className="text-white/80">Care:</span> 24 hours, 7 days a week
              </p>
              <p>
                <span className="text-white/80">Office:</span> Monday–Friday, 9am–5pm
              </p>
              <p>
                <span className="text-white/80">Tours:</span> By appointment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Hebron Care Adult Family Home LLC #2. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
