import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScaleReveal } from "@/components/motion";
import { ContactForm } from "@/components/sections/contact-form";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <>
      <Navbar variant="dark" />

      {/* ===== HERO ===== */}
      <header className="relative pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery/dsc00616.webp"
            alt="Magnolia blossoms framing the home entrance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-sand/85" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Breadcrumb */}
          <FadeIn delay={0.05}>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm text-rock/50 mb-8"
            >
              <Link
                href="/"
                className="hover:text-rock transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <span className="text-rock/80">Contact</span>
            </nav>
          </FadeIn>

          {/* Badge */}
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-rock/5 rounded-full px-4 py-1.5 mb-6">
              <Mail className="w-3.5 h-3.5 text-clay" />
              <span className="text-xs font-medium text-rock/70 uppercase tracking-widest">
                Contact Us
              </span>
            </div>
          </FadeIn>

          {/* Heading */}
          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight text-rock mb-6 max-w-2xl mx-auto">
              We&apos;re here to{" "}
              <span className="italic text-clay">listen.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-rock/60 text-lg font-light leading-relaxed max-w-xl mx-auto">
              Whether you have questions about our care, want to schedule a
              visit, or simply need someone to talk to about your family&apos;s
              next step, we are always here for you.
            </p>
          </FadeIn>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-sand">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT: Contact Form */}
          <FadeIn className="lg:col-span-7">
            <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-[2.5rem] p-8 md:p-10">
              <h2 className="text-2xl font-serif text-rock mb-2">
                Send us a message
              </h2>
              <p className="text-sm text-rock/50 mb-8">
                Fill out the form below and we will get back to you within one
                business day.
              </p>
              <ContactForm />
            </div>
          </FadeIn>

          {/* RIGHT: Contact Info */}
          <FadeIn direction="right" className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-0">
              {/* Phone */}
              <div className="py-6 border-b border-rock/8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-clay/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-clay" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-rock/50 uppercase tracking-widest mb-2">
                      Call Us
                    </p>
                    <a
                      href={SITE.phoneHref}
                      className="text-lg font-serif text-rock hover:text-clay transition-colors block"
                    >
                      {SITE.phone}
                    </a>
                    <a
                      href={`tel:${SITE.homePhone.replace(/\D/g, "")}`}
                      className="text-sm text-rock/60 hover:text-clay transition-colors block mt-1"
                    >
                      Home: {SITE.homePhone}
                    </a>
                    <p className="text-sm text-rock/60 mt-1">
                      Fax: {SITE.fax}
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="py-6 border-b border-rock/8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-clay/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-clay" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-rock/50 uppercase tracking-widest mb-2">
                      Email Us
                    </p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-sm text-rock hover:text-clay transition-colors break-all"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="py-6 border-b border-rock/8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-clay/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-clay" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-rock/50 uppercase tracking-widest mb-2">
                      Visit Us
                    </p>
                    <p className="text-sm text-rock leading-relaxed">
                      {SITE.address.street}
                      <br />
                      {SITE.address.city}, {SITE.address.state}{" "}
                      {SITE.address.zip}
                    </p>
                    <a
                      href={SITE.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-clay hover:text-clay-dark transition-colors mt-2 inline-block"
                    >
                      Get directions &rarr;
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="py-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-clay/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-clay" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-rock/50 uppercase tracking-widest mb-2">
                      Office Hours
                    </p>
                    <p className="text-sm text-rock">
                      Monday to Friday, 9am to 6pm
                    </p>
                    <p className="text-xs text-rock/50 mt-1">
                      Care staff available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== MAP SECTION ===== */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-stone">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-rock mb-4">
                Find us here
              </h2>
              <p className="text-rock/60 font-light max-w-md mx-auto mb-4">
                Located in a quiet residential neighborhood in Mount Vernon,
                Washington.
              </p>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-clay hover:text-clay-dark transition-colors"
              >
                Get directions
                <span>&rarr;</span>
              </a>
            </div>
          </FadeIn>

          <ScaleReveal>
            <div className="relative group">
              <div className="rounded-3xl overflow-hidden border-4 border-white shadow-lg">
                <iframe
                  src={SITE.mapsEmbed}
                  width="100%"
                  height="480"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing location of ${SITE.name} at ${SITE.address.full}`}
                  className="w-full grayscale-[20%] sepia-[10%] group-hover:grayscale-0 group-hover:sepia-0 transition-[filter] duration-500"
                />
              </div>

              {/* Location label */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-medium text-rock">
                  Skagit River
                </span>
              </div>
            </div>
          </ScaleReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
