"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Phone, MapPin, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { ParallaxImage } from "@/components/shared/parallax-image";
import { SectionDivider } from "@/components/shared/section-divider";
import { cn } from "@/lib/utils";

// ─── Values Data ─────────────────────────────────────────────────────────────

const values = [
  {
    id: "dignity",
    title: "Dignity First",
    summary: "Every decision we make starts with one question.",
    story: `A few months after we opened, one of our residents, a retired schoolteacher named Margaret, told me she hadn't eaten at a table with a proper tablecloth in years. She said it quietly, almost to herself. The next morning I pressed the linens we already had and put them on the dining table. She didn't say anything, but she smoothed her hand across the cloth before sitting down.

That moment taught me something: dignity isn't a policy. It's the thousand small choices you make when no one is watching. We don't ask "Is this the easiest option?" We ask "Would I want this for my own mother?"`,
  },
  {
    id: "family",
    title: "Family, Always",
    summary: "We mean it literally. This is a home, not a facility.",
    story: `When you move someone into care, you're trusting strangers with everything that matters. We never forget that weight.

We keep our doors open. We send photos when something good happens: a birthday, a walk in the garden, a moment that made us smile. We call families before they have to call us. And when they visit, we make sure there's always a place at the table for them too.

One family told us they started coming for dinner every Sunday. Not because anything was wrong, just because they wanted to. That's the kind of home we want this to be.`,
  },
  {
    id: "small-things",
    title: "The Small Things Matter",
    summary: "The routines are where care actually lives.",
    story: `One resident likes his coffee with exactly two sugars and a splash of cream. Another prefers to eat breakfast in her room on Tuesdays. Just does, always has. A third man won't sleep well unless the hallway light is left on.

None of these things are in a care plan. But we remember them, because they're the things that make someone feel at home versus just housed. When people lose control over big things, their health, their independence, the small things become enormous. We pay attention to the small things.`,
  },
  {
    id: "honesty",
    title: "Honest Communication",
    summary: "We tell you what's actually happening, even when it's hard.",
    story: `Early on, we had a family who hadn't been told the full picture about a loved one's decline. Previous caregivers had softened things until the situation felt like a sudden crisis. It wasn't sudden. They were blindsided and understandably devastated.

We promised ourselves we wouldn't do that. If something is changing, we say so. If we're worried, we share it. If a decision needs to be made, we walk through it with you: the real options, the real tradeoffs. And we support whatever you decide. Hard conversations are still care.`,
  },
];

// ─── Accordion Item ───────────────────────────────────────────────────────────

function AccordionItem({
  value,
  isOpen,
  onToggle,
}: {
  value: (typeof values)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "border-b border-[var(--color-teal)]/15 last:border-b-0 transition-colors duration-300",
        isOpen && "border-[var(--color-teal)]/25"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 py-7 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] rounded"
        aria-expanded={isOpen}
      >
        <div className="flex-1">
          <h3
            className={cn(
              "font-serif text-2xl md:text-3xl transition-colors duration-300",
              isOpen
                ? "text-[var(--color-teal)]"
                : "text-[var(--color-ink)] group-hover:text-[var(--color-teal)]"
            )}
          >
            {value.title}
          </h3>
          <p className="font-sans text-sm text-[var(--color-ink-muted)] mt-1 font-light">
            {value.summary}
          </p>
        </div>
        <span
          className={cn(
            "flex-shrink-0 mt-1 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300",
            isOpen
              ? "bg-[var(--color-teal)] border-[var(--color-teal)] text-white"
              : "border-[var(--color-teal)]/30 text-[var(--color-teal)] group-hover:border-[var(--color-teal)]"
          )}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pr-14">
              {value.story.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="font-sans text-[var(--color-ink-light)] font-light leading-relaxed mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutUsPage() {
  const [openValue, setOpenValue] = useState<string | null>("dignity");

  const toggle = (id: string) => {
    setOpenValue((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
        <ParallaxImage
          src="/images/DSC00412-fotor-2026032514584.webp"
          alt="Inside Hebron Care Adult Family Home"
          className="absolute inset-0 w-full h-full"
          speed={0.25}
          priority
        />

        {/* Gradient overlay — bottom-weighted so text is legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e38]/85 via-[#0a2e38]/35 to-transparent" />

        {/* Headline */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-16 md:pb-24 w-full">
            <ScrollReveal delay={0.1} duration={0.9}>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-4">
                Our Story
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] max-w-3xl">
                We started this because we believe aging should feel like
                living.
              </h1>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Origin Story ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: narrative */}
            <ScrollReveal direction="right" delay={0.1}>
              <div className="lg:sticky lg:top-28">
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-6">
                  Where We Came From
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-teal)] mb-8 leading-snug">
                  A home built out of something personal.
                </h2>

                <div className="space-y-5 font-sans font-light text-[var(--color-ink-light)] leading-relaxed">
                  <p>
                    My family has been in caregiving for as long as I can
                    remember. We watched relatives age, some in large
                    facilities, some at home, and we saw how much the setting
                    mattered. A person can be medically cared for and still feel
                    invisible. We wanted to do something different.
                  </p>
                  <p>
                    We opened Hebron Care because we believed a small home,
                    with a small number of residents and people who genuinely
                    knew them, could offer something that larger places simply
                    can't: real relationship. We know our residents' histories,
                    their preferences, the things that make them laugh. We
                    notice when something's off, not because an alert fires, but
                    because we were paying attention.
                  </p>
                  <p>
                    The name comes from a place of refuge, somewhere people
                    went when they needed safety and belonging. That's what we
                    try to build here, every day.
                  </p>
                  <p>
                    We're licensed by the state of Washington and held to
                    rigorous standards. But honestly, the standards we hold
                    ourselves to are higher. We ask: would we want this for our
                    own family? If the answer is anything less than yes, we
                    change it.
                  </p>

                  {/* Pull quote */}
                  <blockquote className="pull-quote border-l-2 border-[var(--color-gold)] pl-5 text-xl text-[var(--color-teal)] my-8">
                    "A person can be medically cared for and still feel
                    invisible. We wanted to do something different."
                  </blockquote>

                  <p>
                    We're located in a quiet residential neighborhood in
                    Everett, WA. Six residents maximum. Round-the-clock care.
                    Meals made from scratch. And a lot of conversations over
                    coffee that nobody scheduled.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: photo stack */}
            <ScrollReveal direction="left" delay={0.25}>
              <div className="flex flex-col gap-4">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm shadow-md">
                  <Image
                    src="/images/DSC00423-fotor-2026032515228.webp"
                    alt="Common living area at Hebron Care"
                    fill
                    className="object-cover hover:scale-[1.02] transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative w-full aspect-square overflow-hidden rounded-sm shadow-md">
                    <Image
                      src="/images/DSC00431-fotor-2026032515435.webp"
                      alt="Dining area at Hebron Care"
                      fill
                      className="object-cover hover:scale-[1.02] transition-transform duration-700"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative w-full aspect-square overflow-hidden rounded-sm shadow-md">
                    <Image
                      src="/images/DSC00436-fotor-2026032514591.webp"
                      alt="Resident bedroom at Hebron Care"
                      fill
                      className="object-cover hover:scale-[1.02] transition-transform duration-700"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Values Accordion ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: heading */}
            <ScrollReveal direction="right" delay={0.1}>
              <div className="lg:sticky lg:top-28">
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-6">
                  What We Believe
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-teal)] leading-snug mb-6">
                  These aren't slogans. They're things that actually happened.
                </h2>
                <p className="font-sans font-light text-[var(--color-ink-light)] leading-relaxed">
                  Every one of our values came from a real experience, a
                  moment that shaped how we do things here. We'd rather tell you
                  the story than print the slogan.
                </p>
              </div>
            </ScrollReveal>

            {/* Right: accordion */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="border-t border-[var(--color-teal)]/15">
                {values.map((v) => (
                  <AccordionItem
                    key={v.id}
                    value={v}
                    isOpen={openValue === v.id}
                    onToggle={() => toggle(v.id)}
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Team Section ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal delay={0.1}>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-6 text-center">
              The People Here
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-teal)] text-center mb-16 leading-snug max-w-xl mx-auto">
              A small team that knows your name before you unpack.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Photo */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-sm shadow-lg">
                <Image
                  src="/images/DSC00514-fotor-2026032515181.webp"
                  alt="Hebron Care team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle warm overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[var(--color-teal)]/20 to-transparent" />
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal direction="left" delay={0.25}>
              <div className="space-y-10">
                {/* Care Director */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-px bg-[var(--color-gold)]" />
                    <span className="font-sans text-xs tracking-[0.15em] uppercase text-[var(--color-gold)]">
                      Care Director
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-[var(--color-teal)] mb-3">
                    Hebron Care Leadership
                  </h3>
                  <p className="font-sans font-light text-[var(--color-ink-light)] leading-relaxed">
                    Our care director oversees the day-to-day life of the home
                    and is here most days. Not in an office, but in the kitchen,
                    in the common room, and at the table. She came to this work
                    after caring for her own grandmother and found that the homes
                    she wanted didn't exist. So she built one.
                  </p>
                </div>

                {/* Care Staff */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-px bg-[var(--color-gold)]" />
                    <span className="font-sans text-xs tracking-[0.15em] uppercase text-[var(--color-gold)]">
                      Care Staff
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-[var(--color-teal)] mb-3">
                    Our Caregivers
                  </h3>
                  <p className="font-sans font-light text-[var(--color-ink-light)] leading-relaxed">
                    Every person who works here is licensed, background-checked,
                    and trained, but we also hire for something harder to
                    measure: patience, warmth, and the kind of attention that
                    doesn't clock out. We're a small team on purpose. When you
                    call, you reach someone who knows your family.
                  </p>
                </div>

                {/* Location callout */}
                <div className="bg-[var(--color-teal)]/5 border border-[var(--color-teal)]/15 rounded-sm p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={16}
                      className="text-[var(--color-gold)] mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <p className="font-sans text-sm text-[var(--color-ink)] font-medium">
                        2421 81st Pl SE, Everett, WA 98203
                      </p>
                      <p className="font-sans text-xs text-[var(--color-ink-muted)] font-light mt-0.5">
                        Licensed Adult Family Home, State of Washington
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone
                      size={16}
                      className="text-[var(--color-gold)] flex-shrink-0"
                    />
                    <a
                      href="tel:+14253747954"
                      className="font-sans text-sm text-[var(--color-teal)] hover:text-[var(--color-gold)] transition-colors font-medium"
                    >
                      (425) 374-7954
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Closing CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[var(--color-teal)] relative overflow-hidden">
        {/* Subtle texture layer */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal delay={0.1} duration={0.9}>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-5">
              You're Welcome Here
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 max-w-2xl mx-auto">
              Come see for yourself.
            </h2>
            <p className="font-sans font-light text-white/70 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              We know choosing care for someone you love is one of the most
              important decisions you'll make. We'd rather you see the home,
              meet the team, and ask every question before you decide anything.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--color-gold)] text-white font-sans font-medium text-sm tracking-wide px-8 py-4 rounded-sm hover:bg-[var(--color-gold-dark)] transition-colors duration-300 group"
              >
                Schedule a Tour
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
              <a
                href="tel:+14253747954"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-sans font-light text-sm tracking-wide px-8 py-4 rounded-sm hover:border-white/60 hover:bg-white/5 transition-all duration-300"
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
