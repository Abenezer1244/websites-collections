import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Shield } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScaleReveal, StaggerChildren } from "@/components/motion";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
};

const journeySteps = [
  {
    number: "01",
    title: "The Calling",
    description:
      "What began as a deeply personal experience caring for an aging family member grew into a calling that could not be ignored. We saw first hand how institutional settings often fell short of providing the warmth, attention, and dignity every person deserves in their later years.",
  },
  {
    number: "02",
    title: "The Foundation",
    description:
      "In Mount Vernon, WA, we found the perfect setting to bring our vision to life. A peaceful residential neighborhood along the Skagit River corridor became the home for our adult family home, where every detail was designed to feel less like a facility and more like a real home.",
  },
  {
    number: "03",
    title: "The Present",
    description:
      "Today, Skagit River Adult Family Home is a place where residents thrive. With a maximum of six residents, we maintain the intimacy and personal attention that larger facilities simply cannot replicate. Every meal is home cooked, every care plan is personal, and every day is meaningful.",
  },
];

const staffValues = [
  {
    title: "Trained & Certified",
    description:
      "Every team member holds current certifications in CPR, first aid, and dementia care. Our clinical staff includes registered nurses who oversee all medication management and care plans.",
  },
  {
    title: "Compassionate by Nature",
    description:
      "We hire for empathy first. Our caregivers are people who genuinely love what they do, forming real bonds with each resident and treating them like their own family.",
  },
  {
    title: "Always Present",
    description:
      "Our staff is awake and on site 24 hours a day, 7 days a week. There is always someone available to assist, comfort, or respond to any need at any hour.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar variant="dark" />

      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden bg-sand">
        {/* Abstract blur decoration */}
        <div
          className="absolute top-20 right-0 w-[500px] h-[500px] bg-clay/10 rounded-full blur-[120px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-clay/5 rounded-full blur-[100px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Breadcrumb */}
          <FadeIn delay={0.05}>
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex items-center gap-2 text-sm text-rock/50">
                <li>
                  <Link href="/" className="hover:text-rock transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-rock/80">About Us</li>
              </ol>
            </nav>
          </FadeIn>

          {/* Label */}
          <FadeIn delay={0.1}>
            <p className="text-clay-text text-sm uppercase tracking-[0.2em] mb-5 font-medium">
              About Skagit River
            </p>
          </FadeIn>

          {/* H1 */}
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-rock mb-6 max-w-4xl mx-auto leading-[1.1]">
              Redefining the meaning{" "}
              <span className="italic text-clay">of care.</span>
            </h1>
          </FadeIn>

          {/* Subtitle */}
          <FadeIn delay={0.3}>
            <p className="text-rock/70 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12">
              At {SITE.name}, we believe every person deserves to age with
              dignity, warmth, and a sense of belonging. Our home is built on
              the simple idea that real care means treating every resident like
              family, in a community where they truly feel at home.
            </p>
          </FadeIn>

          {/* Hero image */}
          <ScaleReveal delay={0.35}>
            <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden">
              <Image
                src="/gallery/dsc00588.webp"
                alt="Warm, inviting home exterior surrounded by nature in Mount Vernon, Washington"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 1280px"
              />
            </div>
          </ScaleReveal>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section className="py-6 md:py-10">
        <div className="bg-white rounded-[3rem] mx-2 md:mx-6 shadow-sm border border-rock/5 grain">
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
            {/* Decorative vertical accent line */}
            <div className="flex gap-8 md:gap-12">
              <div
                className="hidden md:block w-1 rounded-full bg-gradient-to-b from-clay/40 via-clay/20 to-transparent shrink-0"
                aria-hidden="true"
              />

              <div className="flex-1 space-y-12 md:space-y-16">
                {/* Vision */}
                <FadeIn delay={0.1}>
                  <div>
                    <p className="text-clay-text text-xs uppercase tracking-[0.2em] mb-4 font-medium">
                      Our Vision
                    </p>
                    <p className="font-serif text-xl md:text-2xl text-rock leading-relaxed mb-4">
                      A world where aging is not something to fear, but a chapter
                      filled with comfort, connection, and purpose. We envision
                      every senior living in an environment that honors who they
                      are and who they have always been.
                    </p>
                    <p className="text-rock/60 font-light leading-relaxed">
                      We hold this vision close in everything we do, from the
                      way we design our living spaces to the way we greet each
                      resident every morning. It guides our decisions, shapes
                      our culture, and inspires us to always do better.
                    </p>
                  </div>
                </FadeIn>

                {/* Divider */}
                <hr className="border-rock/10" />

                {/* Mission */}
                <FadeIn delay={0.2}>
                  <div>
                    <p className="text-clay-text text-xs uppercase tracking-[0.2em] mb-4 font-medium">
                      Our Mission
                    </p>
                    <p className="font-serif text-xl md:text-2xl text-rock leading-relaxed mb-4">
                      To provide exceptional, personalized care in a genuine home
                      setting, where every resident is treated with the same love
                      and respect we would give our own family members.
                    </p>
                    <p className="text-rock/60 font-light leading-relaxed">
                      This means maintaining a small, intimate environment with
                      no more than six residents at a time. It means home cooked
                      meals, individualized care plans, and a team that knows
                      every resident by name, by preference, and by heart.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR JOURNEY ===== */}
      <section className="py-20 md:py-32 bg-stone/40">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20 md:mb-28">
            <FadeIn>
              <p className="text-clay-text text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                How It Started
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-rock tracking-tight">
                Our Journey
              </h2>
            </FadeIn>
          </div>

          {/* Vertical timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-clay/30 via-clay/15 to-transparent md:-translate-x-px"
              aria-hidden="true"
            />

            {journeySteps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${
                    i < journeySteps.length - 1 ? "mb-20 md:mb-28" : ""
                  }`}
                >
                  {/* Dot on the timeline */}
                  <div
                    className="absolute left-6 md:left-1/2 top-1 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10"
                    aria-hidden="true"
                  >
                    <FadeIn delay={0.2 + i * 0.15}>
                      <div className="w-4 h-4 rounded-full bg-sand border-[3px] border-clay shadow-sm" />
                    </FadeIn>
                  </div>

                  {/* Content: alternating sides on desktop, all right on mobile */}
                  <FadeIn
                    delay={0.25 + i * 0.15}
                    direction={isEven ? "left" : "right"}
                    className={`pl-16 md:pl-0 md:w-1/2 ${
                      isEven
                        ? "md:pr-16 lg:pr-24 md:text-right"
                        : "md:pl-16 lg:pl-24 md:ml-auto"
                    }`}
                  >
                    {/* Large number */}
                    <span
                      className={`block font-serif text-7xl md:text-8xl lg:text-9xl font-light leading-none text-clay/10 mb-2 select-none ${
                        isEven ? "md:text-right" : ""
                      }`}
                    >
                      {step.number}
                    </span>

                    {/* Title */}
                    <h3
                      className={`font-serif text-2xl md:text-3xl text-rock mb-4 ${
                        isEven ? "md:text-right" : ""
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-rock/65 font-light leading-relaxed text-base md:text-lg max-w-lg ${
                        isEven ? "md:ml-auto" : ""
                      }`}
                    >
                      {step.description}
                    </p>
                  </FadeIn>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== OUR PEOPLE ===== */}
      <section className="py-6 md:py-10">
        <div className="bg-white rounded-[3rem] mx-2 md:mx-6 shadow-sm border border-rock/5 grain">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
            {/* Section header */}
            <FadeIn>
              <p className="text-clay-text text-sm uppercase tracking-[0.2em] mb-4 font-medium">
                Our People
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-serif text-2xl md:text-3xl text-rock/80 italic font-light max-w-2xl leading-relaxed mb-16 md:mb-24">
                &ldquo;A house is built with walls and beams; a home is built
                with love and dreams.&rdquo;
              </p>
            </FadeIn>

            {/* Staff description */}
            <FadeIn delay={0.15}>
              <p className="text-rock/70 font-light leading-relaxed text-base md:text-lg max-w-3xl mb-16">
                Our team is the heart of Skagit River. Each caregiver is
                carefully selected not just for their qualifications, but for
                their character. We look for people who are patient, warm,
                and genuinely dedicated to making a difference in the lives
                of our residents every single day.
              </p>
            </FadeIn>

            {/* Staff values */}
            <div className="space-y-0">
              {staffValues.map((item, i) => (
                <FadeIn key={item.title} delay={0.15 + i * 0.1}>
                  <div
                    className={`flex flex-col md:flex-row gap-4 md:gap-12 py-10 ${
                      i < staffValues.length - 1
                        ? "border-b border-rock/10"
                        : ""
                    }`}
                  >
                    <div className="md:w-1/3">
                      <h3 className="font-serif text-xl md:text-2xl text-rock">
                        {item.title}
                      </h3>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-rock/70 font-light leading-relaxed text-base md:text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* 24/7 Awake Staff Highlight */}
            <FadeIn delay={0.1}>
              <div className="mt-20 md:mt-28 bg-sand/50 rounded-2xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-clay/10 shrink-0">
                    <Shield className="w-7 h-7 text-clay" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-serif text-xl md:text-2xl text-rock">
                        24/7 Awake Staff
                      </h3>
                      <Clock className="w-5 h-5 text-clay/60" />
                    </div>
                    <p className="text-rock/70 font-light leading-relaxed text-base md:text-lg max-w-3xl">
                      Unlike many adult family homes, our caregiving team is
                      awake and on site around the clock. There is always
                      someone available to assist with nighttime needs, respond
                      to emergencies, or simply offer comfort during sleepless
                      hours. This commitment to 24/7 awake care gives families
                      peace of mind knowing their loved one is never alone.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
