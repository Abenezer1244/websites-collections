import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, Calendar } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { ParallaxImage } from "@/components/shared/parallax-image";
import { SectionDivider } from "@/components/shared/section-divider";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Hebron Care Adult Family Home in Everett, WA. A licensed, intimate home where your loved one receives 24/7 personalized care, memory support, and real family connection.",
  openGraph: {
    title: "Hebron Care Adult Family Home | Everett, WA",
    description:
      "Not a facility. A home. Six residents, around-the-clock care, and a family that knows your loved one by name.",
    url: "https://2hebron-careafh.live",
  },
};

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-stretch overflow-hidden bg-[var(--color-cream)]">
      {/* Left: text column */}
      <div className="relative z-10 flex flex-col justify-center w-full md:w-1/2 px-8 sm:px-12 lg:px-20 py-24">
        {/* Small eyebrow */}
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-[var(--color-teal)] mb-6 opacity-80">
          Adult Family Home · Everett, WA
        </p>

        {/* Main headline */}
        <h1 className="font-serif text-[clamp(2.8rem,5.5vw,5rem)] leading-[1.05] text-[var(--color-ink)] mb-8">
          Where your<br />
          loved one is<br />
          <em className="text-[var(--color-teal)] not-italic">known by name.</em>
        </h1>

        <p className="font-sans font-light text-base sm:text-lg text-[var(--color-ink-light)] max-w-sm mb-10 leading-relaxed">
          We care for six residents at a time. Not because it&rsquo;s policy, but because
          that&rsquo;s how you actually know someone.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-teal)] text-white font-sans text-sm font-medium px-7 py-3.5 rounded-sm hover:bg-[var(--color-teal-dark)] transition-colors duration-200"
          >
            <Calendar size={16} strokeWidth={1.5} />
            Schedule a Tour
          </Link>
          <a
            href="tel:+14253747954"
            className="inline-flex items-center gap-2 border border-[var(--color-teal)] text-[var(--color-teal)] font-sans text-sm font-medium px-7 py-3.5 rounded-sm hover:bg-[var(--color-teal)]/5 transition-colors duration-200"
          >
            <Phone size={16} strokeWidth={1.5} />
            (425) 374-7954
          </a>
        </div>
      </div>

      {/* Right: photo */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-1/2">
        <ParallaxImage
          src="/images/DSC00423-fotor-2026032515228.webp"
          alt="Warm, light-filled living room at Hebron Care Adult Family Home"
          className="h-full w-full"
          speed={0.25}
          priority
        />
        {/* subtle gradient bleed into left column */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-cream)] to-transparent pointer-events-none" />
      </div>

      {/* Mobile: photo below text — shown as a background tint */}
      <div className="absolute inset-0 md:hidden opacity-10 pointer-events-none">
        <Image
          src="/images/DSC00423-fotor-2026032515228.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
    </section>
  );
}

// ─── Trust Strip ─────────────────────────────────────────────────────────────

function TrustStrip() {
  return (
    <div className="bg-[var(--color-teal)] py-3 px-6">
      <p className="text-center font-sans text-xs sm:text-sm tracking-widest text-white/70 uppercase">
        Licensed by Washington State DSHS
        <span className="mx-3 opacity-40">·</span>
        Serving Everett families since 2016
        <span className="mx-3 opacity-40">·</span>
        24/7 care, every day of the year
      </p>
    </div>
  );
}

// ─── Story / Editorial Section ────────────────────────────────────────────────

function StorySection() {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] flex items-end overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/DSC00514-fotor-2026032515181.webp"
          alt="Caregiver and resident sharing a quiet moment together at Hebron Care"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay — dark at bottom, lighter at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/85 via-[var(--color-ink)]/30 to-transparent" />
      </div>

      {/* Pull quote overlaid at bottom */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 sm:px-12 lg:px-20 pb-16 sm:pb-20">
        <blockquote>
          <p className="font-serif italic text-white text-[clamp(1.6rem,3.5vw,3rem)] leading-[1.2] mb-5 max-w-3xl">
            &ldquo;Every person who walks through our door becomes family. We don&rsquo;t just
            provide care. We share life together.&rdquo;
          </p>
          <footer className="flex items-center gap-3">
            <span className="block w-8 h-px bg-[var(--color-gold)]" />
            <cite className="font-sans text-sm not-italic text-white/60 tracking-wider uppercase">
              Hebron Care Team, Everett WA
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

// ─── Services Bento Grid ──────────────────────────────────────────────────────

function ServicesSection() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section header */}
        <ScrollReveal direction="up" duration={0.6}>
          <div className="mb-14">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
              What we do
            </p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-[var(--color-ink)] leading-tight max-w-lg">
              Care that fits each person.<br />Not the other way around.
            </h2>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="flex flex-col gap-4">

          {/* Row 1: large left + two small right */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Large tile — Memory Care — photo dominant */}
            <ScrollReveal direction="up" delay={0} className="md:col-span-2">
              <div className="relative h-80 sm:h-96 md:h-[420px] overflow-hidden group rounded-sm">
                <Image
                  src="/images/DSC00385-fotor-2026032515528.webp"
                  alt="Memory care resident in a calm, familiar environment at Hebron Care"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-teal-dark)]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-[var(--color-gold)] mb-2">
                    Specialized Support
                  </p>
                  <h3 className="font-serif text-white text-3xl sm:text-4xl mb-3">Memory Care</h3>
                  <p className="font-sans text-white/75 text-sm max-w-xs leading-relaxed">
                    Routine, familiarity, and gentle structure. The three things that matter most when memory changes.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Two small stacked tiles */}
            <div className="flex flex-col gap-4">

              {/* Daily Living — type dominant on cream */}
              <ScrollReveal direction="left" delay={0.1} className="flex-1">
                <div className="h-full min-h-[190px] bg-[var(--color-cream-dark)] flex flex-col justify-between p-7 rounded-sm border border-[var(--color-teal)]/10">
                  <h3 className="font-serif text-[var(--color-teal)] text-2xl leading-snug">
                    Daily Living<br />Support
                  </h3>
                  <p className="font-sans text-[var(--color-ink-light)] text-sm leading-relaxed mt-3">
                    Bathing, dressing, meals, mobility. Handled with respect, never rush.
                  </p>
                </div>
              </ScrollReveal>

              {/* Medication — teal background */}
              <ScrollReveal direction="left" delay={0.18} className="flex-1">
                <div className="h-full min-h-[190px] bg-[var(--color-teal)] flex flex-col justify-between p-7 rounded-sm">
                  <h3 className="font-serif text-white text-2xl leading-snug">
                    Medication<br />Management
                  </h3>
                  <p className="font-sans text-white/65 text-sm leading-relaxed mt-3">
                    We track schedules, coordinate with physicians, and make sure nothing slips through.
                  </p>
                </div>
              </ScrollReveal>

            </div>
          </div>

          {/* Row 2: two small left + large right — reversed */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Two small stacked */}
            <div className="flex flex-col gap-4">

              {/* Respite — gold accent */}
              <ScrollReveal direction="right" delay={0} className="flex-1">
                <div className="h-full min-h-[190px] bg-[var(--color-gold)] flex flex-col justify-between p-7 rounded-sm">
                  <h3 className="font-serif text-white text-2xl leading-snug">
                    Respite Care
                  </h3>
                  <p className="font-sans text-white/80 text-sm leading-relaxed mt-3">
                    Short-term stays for families who need a rest. We hold things steady while you recharge.
                  </p>
                </div>
              </ScrollReveal>

              {/* 24/7 — dark ink tile */}
              <ScrollReveal direction="right" delay={0.1} className="flex-1">
                <div className="h-full min-h-[190px] bg-[var(--color-ink)] flex flex-col justify-between p-7 rounded-sm">
                  <h3 className="font-serif text-[var(--color-cream)] text-2xl leading-snug">
                    24/7<br />Monitoring
                  </h3>
                  <p className="font-sans text-[var(--color-cream)]/50 text-sm leading-relaxed mt-3">
                    Someone is always awake and attentive. Day shifts, overnight, holidays. No exceptions.
                  </p>
                </div>
              </ScrollReveal>

            </div>

            {/* Large tile — Holistic Wellness — photo dominant */}
            <ScrollReveal direction="up" delay={0.08} className="md:col-span-2">
              <div className="relative h-80 sm:h-96 md:h-[420px] overflow-hidden group rounded-sm">
                <Image
                  src="/images/DSC00397-fotor-2026032515820.webp"
                  alt="Residents enjoying outdoor garden time at Hebron Care"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-transparent" />
                <div className="absolute top-0 left-0 p-8">
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-[var(--color-gold)] mb-2">
                    Whole-Person Care
                  </p>
                  <h3 className="font-serif text-white text-3xl sm:text-4xl mb-3">Holistic Wellness</h3>
                  <p className="font-sans text-white/75 text-sm max-w-xs leading-relaxed">
                    Walks in the garden, home-cooked meals, music, prayer, laughter. The things that make life worth living.
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

        {/* Link to Services page */}
        <ScrollReveal direction="up" delay={0.1} className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-sans text-sm text-[var(--color-teal)] hover:text-[var(--color-teal-dark)] transition-colors group"
          >
            See all services
            <ArrowRight size={15} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </ScrollReveal>

      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--color-teal-dark)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        <ScrollReveal direction="up" duration={0.5}>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-16">
            What families say
          </p>
        </ScrollReveal>

        {/* Staggered masonry layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 lg:items-start">

          {/* Primary — large, 60% width */}
          <ScrollReveal direction="up" delay={0} className="lg:w-[60%]">
            <blockquote className="border-l-2 border-[var(--color-gold)] pl-8">
              <p className="font-serif italic text-white text-[clamp(1.4rem,2.5vw,2rem)] leading-[1.35] mb-6">
                &ldquo;I visited four homes before Hebron. The moment I walked in, it felt
                different. Quiet, warm, like someone actually lived there. My mother
                has been a resident for two years now. She knows the staff by name.
                They know her. That doesn&rsquo;t happen at a facility. It happens because
                this is a real home.&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <span className="block w-6 h-px bg-[var(--color-gold)]/50" />
                <cite className="font-sans not-italic text-white/45 text-xs tracking-widest uppercase">
                  Sandra T., Daughter of resident
                </cite>
              </footer>
            </blockquote>
          </ScrollReveal>

          {/* Secondary — two stacked, 40% */}
          <div className="lg:w-[40%] flex flex-col gap-10 lg:pt-12">

            <ScrollReveal direction="up" delay={0.12}>
              <blockquote>
                <p className="font-serif italic text-white/80 text-lg sm:text-xl leading-[1.4] mb-4">
                  &ldquo;After my father&rsquo;s stroke, we didn&rsquo;t know where to turn. The team at
                  Hebron walked us through everything: the paperwork, the transition,
                  the hard days. We never felt alone.&rdquo;
                </p>
                <footer className="flex items-center gap-3">
                  <span className="block w-5 h-px bg-[var(--color-gold)]/40" />
                  <cite className="font-sans not-italic text-white/40 text-xs tracking-widest uppercase">
                    James &amp; Miriam L., Family of resident
                  </cite>
                </footer>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.22}>
              <blockquote className="border-t border-white/10 pt-10">
                <p className="font-serif italic text-white/80 text-lg sm:text-xl leading-[1.4] mb-4">
                  &ldquo;I can call at midnight and someone answers. That used to keep me up at
                  night. Now it doesn&rsquo;t.&rdquo;
                </p>
                <footer className="flex items-center gap-3">
                  <span className="block w-5 h-px bg-[var(--color-gold)]/40" />
                  <cite className="font-sans not-italic text-white/40 text-xs tracking-widest uppercase">
                    Doris M., Wife of resident
                  </cite>
                </footer>
              </blockquote>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ─────────────────────────────────────────────────────────────

function CtaSection() {
  return (
    <section className="py-28 sm:py-36 bg-[var(--color-cream)]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">

        <ScrollReveal direction="up" duration={0.6}>
          <h2 className="font-serif text-[clamp(2.4rem,5vw,4.5rem)] text-[var(--color-ink)] leading-[1.05] mb-6">
            Come visit.<br />
            <em>We&rsquo;ll make coffee.</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1} duration={0.6}>
          <p className="font-sans font-light text-[var(--color-ink-light)] text-base sm:text-lg max-w-md mx-auto mb-12 leading-relaxed">
            No sales pitch. Just a walk through the house, a chance to ask questions,
            and a cup of something warm.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.18} duration={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--color-teal)] text-white font-sans text-sm font-medium px-8 py-4 rounded-sm hover:bg-[var(--color-teal-dark)] transition-colors duration-200"
            >
              <Calendar size={16} strokeWidth={1.5} />
              Schedule a Tour
            </Link>
            <a
              href="tel:+14253747954"
              className="inline-flex items-center gap-2 font-sans text-[var(--color-teal)] text-sm font-medium hover:text-[var(--color-teal-dark)] transition-colors group"
            >
              <Phone size={16} strokeWidth={1.5} />
              (425) 374-7954
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.28} duration={0.6}>
          <p className="font-sans text-xs text-[var(--color-ink-muted)] mt-10">
            2421 81st Pl SE, Everett, WA 98208
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <SectionDivider className="my-0" />
      <StorySection />
      <SectionDivider className="my-0" />
      <ServicesSection />
      <SectionDivider className="my-0" />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
