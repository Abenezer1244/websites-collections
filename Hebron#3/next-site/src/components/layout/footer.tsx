import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative bg-rock text-sand rounded-t-[3rem] overflow-hidden">
      {/* Decorative blur circle */}
      <div
        className="absolute top-0 right-0 w-80 h-80 bg-clay/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      />

      {/* CTA Section */}
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">
        <span className="inline-block text-sm font-medium tracking-widest uppercase text-clay-light mb-4">
          Take Action Today
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-8">
          Let&apos;s discuss their needs.
        </h2>
        <a
          href={SITE.phoneHref}
          className="inline-flex items-center gap-2.5 bg-clay text-white rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:bg-clay-dark transition-colors duration-200"
        >
          <Phone className="h-5 w-5" />
          {SITE.phone}
        </a>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-white/10" />
      </div>

      {/* Footer bottom */}
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left column */}
          <div>
            <p className="font-serif text-2xl italic text-white mb-4">
              Skagit River
            </p>
            <address className="not-italic text-sand/70 text-sm leading-relaxed space-y-1">
              <p>{SITE.address.street}</p>
              <p>
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </p>
              <p className="mt-3">
                Phone:{" "}
                <a
                  href={SITE.phoneHref}
                  className="text-sand hover:text-white transition-colors"
                >
                  {SITE.phone}
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sand hover:text-white transition-colors"
                >
                  {SITE.email}
                </a>
              </p>
            </address>
            <p className="mt-4 text-sand/50 text-xs">
              License #{SITE.license} in Washington State
            </p>
          </div>

          {/* Right column */}
          <div className="md:text-right">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end mb-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-sand/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="text-sand/50 text-xs">
              &copy; {new Date().getFullYear()} {SITE.legalName}. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
