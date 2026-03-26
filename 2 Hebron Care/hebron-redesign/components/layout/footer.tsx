import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--color-teal)] text-white">
      {/* Gold rule */}
      <div className="h-px bg-[var(--color-gold)]/40" />

      {/* Brand name + Hours */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-10 md:pt-16 md:pb-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-[0.15em] uppercase text-white/90">
              Hebron Care
            </h2>
            <p className="font-sans text-sm text-white/40 mt-3 font-light">
              Adult Family Home · Everett, WA
            </p>
          </div>

          {/* Hours — right corner */}
          <div className="md:text-right">
            <h3 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-3">Hours</h3>
            <div className="space-y-1.5 text-sm text-white/60 font-light">
              <p><span className="text-white/80">Care:</span> 24 hours, 7 days a week</p>
              <p><span className="text-white/80">Office:</span> Monday&ndash;Friday, 9am&ndash;5pm</p>
              <p><span className="text-white/80">Tours:</span> By appointment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Compact info row */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-10 md:pb-12">
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-0 md:divide-x md:divide-white/10">
          {/* Contact */}
          <div className="md:pr-10 space-y-2">
            <a
              href="tel:+14253747954"
              className="flex items-center gap-2.5 text-[13px] text-white/60 hover:text-[var(--color-gold)] transition-colors"
            >
              <Phone size={14} strokeWidth={1.5} />
              (425) 374-7954
            </a>
            <a
              href="mailto:hebroncareafhllc@gmail.com"
              className="flex items-center gap-2.5 text-[13px] text-white/60 hover:text-[var(--color-gold)] transition-colors"
            >
              <Mail size={14} strokeWidth={1.5} />
              hebroncareafhllc@gmail.com
            </a>
            <div className="flex items-center gap-2.5 text-[13px] text-white/40">
              <MapPin size={14} strokeWidth={1.5} className="shrink-0" />
              2421 81st Pl SE, Everett, WA 98208
            </div>
          </div>

          {/* Pages */}
          <nav className="md:px-10 flex flex-wrap gap-x-6 gap-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about-us", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/gallery", label: "Gallery" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-white/25 tracking-wide">
            &copy; {new Date().getFullYear()} Hebron Care Adult Family Home LLC #2
          </p>
          <div className="flex gap-5 text-[11px] text-white/25">
            <Link href="/privacy-policy" className="hover:text-white/50 transition-colors">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white/50 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
