import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { ParallaxImage } from "@/components/shared/parallax-image";
import { SectionDivider } from "@/components/shared/section-divider";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Memory care, daily living assistance, medication management, respite care, and 24/7 monitoring. Delivered in a real home in Everett, WA. Learn what a day at Hebron Care actually looks like.",
  alternates: {
    canonical: "https://hebroncareafh2.com/services",
  },
  openGraph: {
    title: "Services | Hebron Care Adult Family Home",
    description:
      "We provide memory care, ADL support, medication management, respite care, and round-the-clock monitoring for up to six residents in Everett, WA.",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-cream)] pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" delay={0.05}>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-[var(--color-gold)] mb-6">
              Our Services
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[var(--color-ink)] leading-[1.05] mb-8">
              What we actually do,
              <br />
              <em>every single day.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.25}>
            <p className="font-sans font-light text-lg md:text-xl text-[var(--color-ink-light)] max-w-2xl leading-relaxed">
              We are a licensed adult family home caring for up to six residents at a time. That limit
              is not a constraint. It is the entire point. Every service we offer is shaped by one
              question: what does this specific person need today?
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ─── MEMORY CARE ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-0 md:gap-16 items-center">

            {/* Image — left */}
            <ScrollReveal direction="right" delay={0.05} className="relative">
              <div className="relative h-[420px] md:h-[580px] overflow-hidden">
                <Image
                  src="/images/DSC00385-fotor-2026032515528.webp"
                  alt="Caregiver spending quiet time with a memory care resident at Hebron Care"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* subtle gold edge accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-gold)]" />
              </div>
            </ScrollReveal>

            {/* Text — right */}
            <div className="pt-10 md:pt-0">
              <ScrollReveal direction="left" delay={0.1}>
                <p className="font-sans text-xs tracking-[0.25em] uppercase text-[var(--color-gold)] mb-4">
                  01. Memory Care
                </p>
                <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-ink)] leading-tight mb-6">
                  A familiar rhythm
                  <br />
                  in an unfamiliar world.
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.2}>
                <p className="font-sans font-light text-base text-[var(--color-ink-light)] leading-relaxed mb-5">
                  For someone living with Alzheimer's or another form of dementia, mornings can carry
                  real fear. We work hard to remove that fear. Our caregivers learn each resident's
                  history: what they did for work, what music they loved, whether they take their
                  coffee with cream. Those details are not small talk. They are the architecture of a
                  calmer day.
                </p>
                <p className="font-sans font-light text-base text-[var(--color-ink-light)] leading-relaxed mb-8">
                  Days here follow a gentle structure: a familiar wake-up routine, breakfast at the
                  same table, activities chosen for engagement rather than performance. We watch for
                  agitation and redirect before it escalates. We sit with residents who cannot sleep.
                  We do not rush.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.3}>
                {/* Pull quote */}
                <blockquote className="border-l-2 border-[var(--color-gold)] pl-6 py-1 mb-8">
                  <p className="font-serif text-xl md:text-2xl italic text-[var(--color-ink)] leading-snug mb-3">
                    "For the first time in two years, my mother recognized where she was when she
                    woke up. She called it home."
                  </p>
                  <cite className="font-sans text-xs tracking-widest uppercase text-[var(--color-ink-muted)] not-italic">
                    Daughter of a current resident
                  </cite>
                </blockquote>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.38}>
                <ul className="space-y-2 font-sans font-light text-sm text-[var(--color-ink-light)]">
                  {[
                    "Individualized daily routines built around each resident's history",
                    "Consistent caregiver assignments, familiar faces every morning",
                    "Wandering prevention and fall-risk monitoring",
                    "Family communication whenever something changes",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[5px] flex-shrink-0 w-1 h-1 rounded-full bg-[var(--color-gold)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ─── DAILY LIVING SUPPORT (ADLs) ─────────────────────────────────────── */}
      <section className="bg-[var(--color-cream)] py-20 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal direction="up" delay={0.05}>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-[var(--color-gold)] mb-8">
              02. Daily Living Support
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-ink)] leading-tight mb-12 max-w-4xl">
              Bathing. Dressing. Eating.{" "}
              <em>
                The things that matter most are the ones most people take for granted.
              </em>
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            <ScrollReveal direction="up" delay={0.2}>
              <p className="font-sans font-light text-base text-[var(--color-ink-light)] leading-relaxed">
                Activities of daily living (bathing, dressing, grooming, toileting, eating, moving
                from bed to chair) are what we do most of the day. We do not treat these as chores
                to complete. We treat them as the moments where dignity is either preserved or
                quietly taken away.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.28}>
              <p className="font-sans font-light text-base text-[var(--color-ink-light)] leading-relaxed">
                Our approach is unhurried. If a resident needs twenty minutes to button their shirt
                because they want to do it themselves, we give them twenty minutes. If they need
                full assistance without any self-direction, we provide that with the same
                professionalism. There is no template. There is only what works for this person,
                on this morning.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.35}>
              <div>
                <p className="font-sans font-semibold text-xs tracking-widest uppercase text-[var(--color-teal)] mb-3">
                  Personal Care
                </p>
                <p className="font-sans font-light text-sm text-[var(--color-ink-light)] leading-relaxed">
                  Bathing, oral hygiene, grooming, skin care, incontinence care, provided with
                  privacy and patience, tailored to each resident's comfort and preferences.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div>
                <p className="font-sans font-semibold text-xs tracking-widest uppercase text-[var(--color-teal)] mb-3">
                  Nutrition & Meals
                </p>
                <p className="font-sans font-light text-sm text-[var(--color-ink-light)] leading-relaxed">
                  Home-cooked meals accommodating dietary restrictions, therapeutic diets, and
                  cultural preferences. We sit at the table with residents. Meals are not a
                  delivery service. They are shared time.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.44}>
              <div>
                <p className="font-sans font-semibold text-xs tracking-widest uppercase text-[var(--color-teal)] mb-3">
                  Mobility & Transfers
                </p>
                <p className="font-sans font-light text-sm text-[var(--color-ink-light)] leading-relaxed">
                  Safe transfers, repositioning for residents with limited mobility, assistance
                  with ambulation and adaptive equipment. We coordinate with physical therapists
                  when prescribed care is needed.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.48}>
              <div>
                <p className="font-sans font-semibold text-xs tracking-widest uppercase text-[var(--color-teal)] mb-3">
                  Laundry & Housekeeping
                </p>
                <p className="font-sans font-light text-sm text-[var(--color-ink-light)] leading-relaxed">
                  A clean room, fresh clothing, and a tidy living space are included. Not as
                  extras, but as part of what a home means.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ─── MEDICATION MANAGEMENT ────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Text — left */}
            <div>
              <ScrollReveal direction="right" delay={0.05}>
                <p className="font-sans text-xs tracking-[0.25em] uppercase text-[var(--color-gold)] mb-4">
                  03. Medication Management
                </p>
                <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-ink)] leading-tight mb-6">
                  The right medication.
                  <br />
                  The right dose.
                  <br />
                  Every time.
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.18}>
                <p className="font-sans font-light text-base text-[var(--color-ink-light)] leading-relaxed mb-5">
                  Most of our residents take multiple medications, some with meals, some on an
                  empty stomach, some as-needed. Getting this right requires more than a pill
                  organizer. It requires a caregiver who knows your resident's routine well enough
                  to notice when something seems off, and a system structured enough to prevent
                  any margin for error.
                </p>
                <p className="font-sans font-light text-base text-[var(--color-ink-light)] leading-relaxed mb-8">
                  We maintain a detailed medication administration record for every resident. All
                  staff are trained in safe medication handling. We communicate with prescribing
                  physicians and pharmacists, flag side effects we observe, and coordinate
                  medication reviews when a resident's condition changes.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.26}>
                <ul className="space-y-3 font-sans font-light text-sm text-[var(--color-ink-light)]">
                  {[
                    "Trained staff administer all scheduled and PRN medications",
                    "Medication administration records (MARs) maintained daily",
                    "Pharmacy coordination and refill management",
                    "Side-effect monitoring and physician communication",
                    "Controlled substance handling per Washington State DSHS standards",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[5px] flex-shrink-0 w-1 h-1 rounded-full bg-[var(--color-gold)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>

            {/* Image — right */}
            <ScrollReveal direction="left" delay={0.1} className="relative">
              <div className="relative h-[420px] md:h-[540px] overflow-hidden">
                <Image
                  src="/images/DSC00397-fotor-2026032515820.webp"
                  alt="Organized medication management at Hebron Care Adult Family Home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-0 right-0 w-1 h-full bg-[var(--color-gold)]" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ─── RESPITE CARE ─────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-teal)] py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" delay={0.05}>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-[var(--color-gold)] mb-6">
              04. Respite Care
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
              Caregiving is the hardest job
              <br />
              <em>no one trained you for.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.25}>
            <p className="font-sans font-light text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
              Respite care is short-term placement (days, weeks, or a month) while a family
              caregiver recovers, travels, or simply rests. It is not a lesser version of our
              regular care. Every respite resident receives exactly what a long-term resident
              receives: the same meals, the same attention, the same unhurried mornings.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.32}>
            <p className="font-sans font-light text-base text-white/70 leading-relaxed mb-10 max-w-2xl">
              If you have been your parent's sole caregiver and you are exhausted, we want you to
              know: this is not abandonment. This is wisdom. A family that sustains itself can care
              for a loved one far longer and far better. We are here to make that possible.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.38}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-[var(--color-teal)] px-8 py-4 font-sans text-sm tracking-wide hover:bg-[var(--color-cream)] transition-colors duration-300"
            >
              Ask about availability
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 24/7 CARE & MONITORING ───────────────────────────────────────────── */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/DSC00412-fotor-2026032514584.webp"
            alt="Night view of Hebron Care, someone is always watching over our residents"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[var(--color-teal-dark)]/85" />
        </div>

        {/* Text overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <ScrollReveal direction="up" delay={0.05}>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-[var(--color-gold)] mb-6">
              05. 24/7 Care & Monitoring
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-8">
              Someone is always here.
              <br />
              <em>Always.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.25}>
            <p className="font-sans font-light text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
              There is no overnight shift where a single aide monitors six buzzers from a nursing
              station down the hall. We are a home. At night, a trained caregiver is present and
              awake. Not available on call, but here. In the building. Listening.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.32}>
            <p className="font-sans font-light text-base text-white/70 leading-relaxed max-w-2xl">
              If a resident gets up at 2 a.m. confused, someone is there within moments. If vitals
              change, someone notices. If there is a fall, we do not call for help. We are already
              the help. Families tell us this is the thing that finally lets them sleep.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ─── APPROACH — THREE TYPOGRAPHIC BLOCKS ─────────────────────────────── */}
      <section className="bg-[var(--color-cream)] py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0.05}>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-[var(--color-gold)] mb-4 text-center">
              How We Work
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-ink)] text-center mb-16 max-w-2xl mx-auto leading-tight">
              The numbers that shape everything we do.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-0">

            {/* Block 1: 1:6 ratio */}
            <ScrollReveal direction="up" delay={0.1} className="h-full">
              <div className="bg-white px-10 py-14 h-full border-b md:border-b-0 md:border-r border-[var(--color-cream-dark)]">
                <p
                  className="font-serif text-7xl md:text-8xl text-[var(--color-teal)] leading-none mb-6"
                  aria-label="One to six caregiver ratio"
                >
                  1:6
                </p>
                <p className="font-sans font-semibold text-xs tracking-widest uppercase text-[var(--color-ink-muted)] mb-4">
                  Caregiver Ratio
                </p>
                <p className="font-sans font-light text-sm text-[var(--color-ink-light)] leading-relaxed">
                  Washington State permits up to six residents in an adult family home. We hold to
                  that limit deliberately. Our caregivers are not stretched thin across a floor of
                  twenty. They know each resident by name, habit, and preference, and they have
                  the time to act on that knowledge.
                </p>
              </div>
            </ScrollReveal>

            {/* Block 2: 24/7 */}
            <ScrollReveal direction="up" delay={0.2} className="h-full">
              <div className="bg-[var(--color-teal)] px-10 py-14 h-full border-b md:border-b-0 md:border-r border-[var(--color-teal-dark)]">
                <p
                  className="font-serif text-7xl md:text-8xl text-[var(--color-gold)] leading-none mb-6"
                  aria-label="Twenty-four seven"
                >
                  24/7
                </p>
                <p className="font-sans font-semibold text-xs tracking-widest uppercase text-white/60 mb-4">
                  Round the Clock
                </p>
                <p className="font-sans font-light text-sm text-white/80 leading-relaxed">
                  Care does not pause at shift change or after dark. An awake caregiver is present
                  through every night. Not on-call, not sleeping in a break room, but present.
                  Needs do not follow business hours, and neither do we.
                </p>
              </div>
            </ScrollReveal>

            {/* Block 3: 1 home */}
            <ScrollReveal direction="up" delay={0.3} className="h-full">
              <div className="bg-[var(--color-ink)] px-10 py-14 h-full">
                <p
                  className="font-serif text-7xl md:text-8xl text-[var(--color-gold)] leading-none mb-6"
                  aria-label="One"
                >
                  1
                </p>
                <p className="font-sans font-semibold text-xs tracking-widest uppercase text-white/40 mb-4">
                  One Home, One Family
                </p>
                <p className="font-sans font-light text-sm text-white/70 leading-relaxed">
                  We are not a corporation with multiple locations managing occupancy rates. This is
                  one home, cared for by one consistent team. When you call, you reach someone who
                  knows your loved one. That is not a feature. It is the foundation everything
                  else is built on.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ─── BOTTOM CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-cream)] py-24 md:py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal direction="up" delay={0.05}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-ink)] leading-tight mb-6">
              Every family's needs are different.
              <br />
              <em>Let's talk about yours.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.18}>
            <p className="font-sans font-light text-base text-[var(--color-ink-light)] leading-relaxed mb-10 max-w-xl mx-auto">
              Whether you are exploring options for the first time or ready to ask specific
              questions, we would rather have a real conversation than send you a brochure.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.28}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[var(--color-teal)] text-white px-8 py-4 font-sans text-sm tracking-wide hover:bg-[var(--color-teal-dark)] transition-colors duration-300"
              >
                Get in touch
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+14253747954"
                className="inline-flex items-center gap-3 border border-[var(--color-ink)]/20 text-[var(--color-ink)] px-8 py-4 font-sans text-sm tracking-wide hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] transition-colors duration-300"
              >
                <Phone size={15} />
                (425) 374-7954
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
