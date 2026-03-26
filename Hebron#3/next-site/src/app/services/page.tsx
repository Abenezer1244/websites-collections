import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Pill,
  UtensilsCrossed,
  Accessibility,
  WashingMachine,
  Music,
  Brain,
  HeartHandshake,
  Clock,
  Leaf,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScaleReveal, StaggerChildren } from "@/components/motion";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Services | ${SITE.name}`,
  description:
    "Explore the comprehensive care services at Skagit River Adult Family Home, including medication management, memory care, hospice support, daily living assistance, and holistic wellness programs in Mount Vernon, WA.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const coreServices = [
  {
    icon: Heart,
    title: "Activities of Daily Living",
    description:
      "Compassionate, hands-on assistance with bathing, dressing, grooming, and personal hygiene tailored to each resident\u2019s comfort level and preferences.",
  },
  {
    icon: Pill,
    title: "Medication Management",
    description:
      "Precise medication administration overseen by a registered nurse, including scheduling, refill coordination, and ongoing communication with physicians.",
  },
  {
    icon: UtensilsCrossed,
    title: "Culinary & Nutrition",
    description:
      "Three home-cooked meals and snacks daily, prepared with fresh ingredients and adapted to dietary needs, cultural preferences, and physician-ordered diets.",
  },
  {
    icon: Accessibility,
    title: "Mobility & Transfer",
    description:
      "Safe transfer assistance, fall-prevention strategies, and mobility support so residents can move through their day with confidence and dignity.",
  },
  {
    icon: WashingMachine,
    title: "Housekeeping & Laundry",
    description:
      "A clean, comfortable living environment maintained daily, including personal laundry, linen changes, and light housekeeping throughout the home.",
  },
  {
    icon: Music,
    title: "Engagement & Activities",
    description:
      "Meaningful social, recreational, and therapeutic activities designed to stimulate cognitive function, encourage movement, and nurture joy.",
  },
];

const specialties = [
  {
    title: "Memory Care",
    description:
      "Our memory care program provides a secure, structured environment designed specifically for residents living with Alzheimer\u2019s disease and other forms of dementia. Every element of daily life is crafted to reduce confusion, promote familiarity, and honor the individual\u2019s story.",
    bullets: [
      "Consistent daily routines and sensory-rich activities to support orientation",
      "Staff trained in dementia communication, redirection, and behavioral support",
    ],
    image:
      "https://i.ibb.co/gMJq1ZvM/Memory-Care-Vista-Prairie-s-Dementia-Care-Program-Memory-Care-50.jpg",
  },
  {
    title: "Hospice Support",
    description:
      "When a resident transitions to hospice, our team partners closely with the hospice provider to ensure seamless, dignified care. Comfort, pain management, and emotional support guide every decision.",
    bullets: [
      "Coordinated care plans with hospice nurses, chaplains, and social workers",
      "Private, peaceful spaces for family visits and meaningful moments",
    ],
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Respite Care",
    description:
      "Short-term stays that give family caregivers the rest they need while ensuring their loved one receives the same attentive, personalized care as every long-term resident.",
    bullets: [
      "Flexible scheduling from a few days to several weeks",
      "Full access to all services, meals, and activities during the stay",
    ],
    image: "https://i.ibb.co/TDs0Nz9S/unnamed.jpg",
  },
];

const conditions = [
  "Dementia & Alzheimer\u2019s",
  "Stroke recovery",
  "COPD & respiratory care",
  "Mobility issues & fall risk",
  "Hospice & end-of-life care",
  "Diabetes & medication management",
  "Post-hospitalization & respite",
];

const included = [
  "Private or semi-private furnished room",
  "Three meals & snacks daily",
  "24/7 awake caregiver staffing",
  "Medication management & RN oversight",
  "Personal care & ADL assistance",
  "Laundry, housekeeping & linens",
  "Recreational & social activities",
  "Care plan development & family updates",
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative bg-sand pt-32 pb-20 lg:pb-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          {/* Breadcrumb */}
          <FadeIn>
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex items-center gap-2 text-sm text-rock/60">
                <li>
                  <Link href="/" className="hover:text-rock transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-rock font-medium">Services</li>
              </ol>
            </nav>
          </FadeIn>

          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            {/* LEFT */}
            <div className="lg:w-1/2 flex flex-col items-start">
              <FadeIn>
                <span className="inline-flex items-center gap-2 rounded-full border border-clay/30 bg-clay/10 px-4 py-1.5 text-xs font-medium tracking-wide text-clay-dark mb-8">
                  <Leaf className="w-3.5 h-3.5" />
                  Comprehensive Care
                </span>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-rock leading-[1.1] mb-6">
                  Tailored services for a life{" "}
                  <span className="italic text-clay">well-lived.</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-rock/70 text-lg font-light leading-relaxed max-w-lg mb-8">
                  Every resident at {SITE.name} receives a thoughtfully crafted
                  care plan that evolves with their needs, delivered by a
                  dedicated team in a warm, home-like setting.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex flex-wrap gap-3">
                  {["24/7 Monitoring", "RN Delegation", "Holistic Wellness"].map(
                    (label) => (
                      <span
                        key={label}
                        className="rounded-full border border-rock/20 px-4 py-1.5 text-xs font-medium text-rock/70 tracking-wide"
                      >
                        {label}
                      </span>
                    )
                  )}
                </div>
              </FadeIn>
            </div>

            {/* RIGHT — overlapping images */}
            <div className="lg:w-1/2 relative h-[420px] sm:h-[500px] lg:h-[560px] w-full">
              <ScaleReveal className="absolute top-0 right-0 w-3/4 h-5/6 rounded-2xl overflow-hidden">
                <Image
                  src="https://i.ibb.co/FL180T8H/adult-family-homes.jpg"
                  alt="Residents enjoying a bright living space at Skagit River Adult Family Home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 75vw, 37vw"
                  priority
                />
              </ScaleReveal>
              <ScaleReveal
                delay={0.2}
                className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-2xl overflow-hidden border-4 border-sand z-10"
              >
                <Image
                  src="https://i.ibb.co/z1sThtz/1.webp"
                  alt="Caregiver assisting a resident with a warm smile"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </ScaleReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CARE APPROACH ===== */}
      <section className="py-20 lg:py-28 bg-sand">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-white rounded-3xl px-8 py-14 sm:px-12 sm:py-20">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
              {/* Sticky sidebar */}
              <div className="md:w-1/3 md:sticky md:top-32 md:self-start">
                <FadeIn>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-clay mb-3">
                    The Foundation
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-rock leading-snug">
                    Our Care Approach
                  </h2>
                </FadeIn>
              </div>

              {/* Content */}
              <div className="md:w-2/3">
                <StaggerChildren className="grid sm:grid-cols-2 gap-10">
                  {/* Person-Centered Focus */}
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-clay/10 mb-5">
                      <Heart className="w-5 h-5 text-clay" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-rock mb-3">
                      Person-Centered Focus
                    </h3>
                    <p className="text-rock/70 font-light leading-relaxed text-sm">
                      We begin with the individual, not the diagnosis. Care
                      plans are shaped by each resident&apos;s history,
                      preferences, routines, and goals so that every day feels
                      purposeful and familiar.
                    </p>
                  </div>

                  {/* Proactive Health Monitoring */}
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-clay/10 mb-5">
                      <HeartHandshake className="w-5 h-5 text-clay" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-rock mb-3">
                      Proactive Health Monitoring
                    </h3>
                    <p className="text-rock/70 font-light leading-relaxed text-sm">
                      With a high staff-to-resident ratio, our team notices
                      subtle changes early, communicates with physicians
                      promptly, and adjusts care before small issues grow.
                    </p>
                  </div>
                </StaggerChildren>

                {/* Quote */}
                <FadeIn className="mt-14">
                  <div className="bg-sand/50 rounded-2xl px-8 py-10">
                    <p className="font-serif text-xl sm:text-2xl italic text-rock/80 leading-relaxed">
                      &ldquo;Good care is quiet. It shows up in the details no
                      one has to ask for.&rdquo;
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CORE SERVICES ===== */}
      <section className="py-20 lg:py-28 bg-sand">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Sticky left header */}
            <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start">
              <FadeIn>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-clay mb-3">
                  What We Provide
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-rock leading-snug mb-6">
                  Our Core Services
                </h2>
                <p className="text-rock/60 font-light leading-relaxed text-sm sm:text-base">
                  Everything your loved one needs for a comfortable, dignified
                  daily life, all under one roof.
                </p>
              </FadeIn>
            </div>

            {/* Right: numbered service list */}
            <div className="lg:w-2/3">
              {coreServices.map((service, i) => {
                const Icon = service.icon;
                return (
                  <FadeIn key={service.title} delay={i * 0.08}>
                    <div
                      className={`flex gap-6 sm:gap-8 py-10 ${
                        i < coreServices.length - 1
                          ? "border-b border-rock/10"
                          : ""
                      }`}
                    >
                      {/* Number */}
                      <span className="font-serif text-4xl sm:text-5xl font-light text-clay/25 select-none leading-none pt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="w-5 h-5 text-clay" />
                          <h3 className="font-serif text-xl sm:text-2xl text-rock">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-rock/70 font-light leading-relaxed text-sm sm:text-base max-w-xl">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPECIALTIES ===== */}
      <section className="py-20 lg:py-28 bg-sand">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-white rounded-3xl px-8 py-14 sm:px-12 sm:py-20">
            <FadeIn className="text-center mb-16">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-clay mb-3">
                Specialized Programs
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-rock mb-4">
                Our Specialties
              </h2>
              <p className="text-rock/70 font-light leading-relaxed max-w-xl mx-auto">
                Beyond everyday care, we offer focused programs for residents
                with specific medical or support needs.
              </p>
            </FadeIn>

            {/* Memory Care — full width */}
            <FadeIn className="mb-16">
              <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "21/9" }}>
                <Image
                  src={specialties[0].image}
                  alt="Memory care environment with calm, structured spaces"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 85vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-white mb-3">
                    {specialties[0].title}
                  </h3>
                  <p className="text-white/85 font-light leading-relaxed max-w-2xl mb-4 text-sm sm:text-base">
                    {specialties[0].description}
                  </p>
                  <ul className="space-y-2">
                    {specialties[0].bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-white/80 text-sm font-light"
                      >
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-clay flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Hospice Support — image left, text right */}
            <FadeIn className="mb-16">
              <div className="flex flex-col md:flex-row gap-8 lg:gap-14 items-center">
                <div className="md:w-1/2 relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                  <Image
                    src={specialties[1].image}
                    alt="Peaceful setting for hospice and comfort care"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-rock mb-4">
                    {specialties[1].title}
                  </h3>
                  <p className="text-rock/70 font-light leading-relaxed mb-5 text-sm sm:text-base">
                    {specialties[1].description}
                  </p>
                  <ul className="space-y-3">
                    {specialties[1].bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-rock/70 text-sm font-light"
                      >
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-clay flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Respite Care — text left, image right */}
            <FadeIn>
              <div className="flex flex-col md:flex-row-reverse gap-8 lg:gap-14 items-center">
                <div className="md:w-1/2 relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                  <Image
                    src={specialties[2].image}
                    alt="Welcoming environment for short-term respite stays"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-rock mb-4">
                    {specialties[2].title}
                  </h3>
                  <p className="text-rock/70 font-light leading-relaxed mb-5 text-sm sm:text-base">
                    {specialties[2].description}
                  </p>
                  <ul className="space-y-3">
                    {specialties[2].bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-rock/70 text-sm font-light"
                      >
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-clay flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== CONDITIONS WE SERVE ===== */}
      <section className="py-20 lg:py-28 bg-sand">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="text-center mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-clay mb-3">
              Who We Help
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-rock mb-4">
              Conditions We Serve
            </h2>
            <p className="text-rock/70 font-light leading-relaxed max-w-xl mx-auto">
              Our team is experienced in supporting residents across a wide
              range of health conditions and care needs.
            </p>
          </FadeIn>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 max-w-4xl mx-auto">
            {conditions.map((condition) => (
              <div
                key={condition}
                className="flex items-center gap-3 text-rock/80 font-light"
              >
                <span className="w-2 h-2 rounded-full bg-clay flex-shrink-0" />
                {condition}
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== WHAT'S INCLUDED + STAFFING ===== */}
      <section className="py-20 lg:py-28 bg-sand">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-linen rounded-3xl px-8 py-14 sm:px-12 sm:py-20">
            <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">
              {/* LEFT — Included */}
              <div className="lg:w-1/2">
                <FadeIn>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-clay mb-3">
                    Base Rate
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-tight text-rock mb-8">
                    What&apos;s included in the base rate
                  </h2>
                </FadeIn>
                <StaggerChildren className="space-y-4">
                  {included.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-rock/80 font-light text-sm sm:text-base"
                    >
                      <span className="w-2 h-2 rounded-full bg-clay flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </StaggerChildren>
              </div>

              {/* RIGHT — Staffing */}
              <div className="lg:w-1/2">
                <FadeIn>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-clay mb-3">
                    Our Process
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-tight text-rock mb-8">
                    Staffing & care plan process
                  </h2>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <div className="space-y-5 text-rock/70 font-light leading-relaxed text-sm sm:text-base">
                    <p>
                      Before move-in, we conduct a thorough assessment of your
                      loved one&apos;s physical, cognitive, and emotional needs.
                      This assessment forms the foundation of a personalized care
                      plan developed in collaboration with the resident&apos;s
                      physician and family.
                    </p>
                    <p>
                      Our home maintains a high staff-to-resident ratio with
                      24/7 awake caregivers. A registered nurse provides
                      delegation, oversight, and routine health evaluations. Care
                      plans are reviewed regularly and adjusted as needs evolve.
                    </p>
                    <p>
                      Ready to learn more? Visit our{" "}
                      <Link
                        href="/pricing"
                        className="text-clay underline underline-offset-2 hover:text-clay-dark transition-colors"
                      >
                        pricing page
                      </Link>{" "}
                      for rate details, or{" "}
                      <Link
                        href="/contact"
                        className="text-clay underline underline-offset-2 hover:text-clay-dark transition-colors"
                      >
                        contact us
                      </Link>{" "}
                      to schedule a tour and complimentary assessment.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
