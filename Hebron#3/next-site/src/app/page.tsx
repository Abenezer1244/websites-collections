import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerChildren, ScaleReveal, ParallaxImage } from "@/components/motion";
import { SITE } from "@/lib/constants";
import { HomeFAQ } from "@/components/sections/home-faq";

export const metadata: Metadata = {
  title: `${SITE.name} | Adult Family Home in Mount Vernon, WA`,
};

export default function HomePage() {
  return (
    <>
      <Navbar variant="light" />

      {/* ===== HERO ===== */}
      <header
        id="main"
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
        tabIndex={-1}
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery/dsc00600.webp"
            alt="Skagit River adult family home exterior in Mount Vernon, WA"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-sand" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-12">
          <FadeIn delay={0.1}>
            <p className="text-white/90 text-sm uppercase tracking-[0.2em] mb-6 font-normal">
              Skagit River LLC
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-sand mb-6 leading-tight font-light tracking-tight font-serif">
              Comfort. Care. <br />
              <span className="italic">Family.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto mb-4">
              A warm, residential adult family home where your loved ones receive
              personalized attention, dignity, and a true sense of belonging.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-white/80 text-sm md:text-base font-normal tracking-wide mb-10">
              Serving Mount Vernon and surrounding areas in Skagit County, WA.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-sand text-rock px-8 py-4 rounded-full text-sm font-normal hover:bg-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                Schedule a Visit
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full text-sm font-normal hover:bg-white hover:text-rock transition-colors"
              >
                View our care
              </Link>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* ===== TRUST STRIP ===== */}
      <FadeIn>
        <section className="py-6 px-6 bg-stone">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-rock/70 font-normal">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-clay" />
              Licensed WA State Adult Family Home
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-clay" />
              24/7 Awake Staff
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-clay" />
              DSHS #{SITE.license}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-clay" />
              RN Delegated Medication Management
            </span>
          </div>
        </section>
      </FadeIn>

      {/* ===== EDITORIAL INTRO (replaces "Why Choose Us" cards) ===== */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-sand">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScaleReveal className="lg:col-span-7">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="/gallery/dsc00613.webp"
                alt="Welcoming front porch and entryway at Skagit River"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              {/* Overlapping accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-clay/10 rounded-2xl -z-10 hidden lg:block" />
            </div>
          </ScaleReveal>

          {/* Text */}
          <div className="lg:col-span-5">
            <FadeIn direction="right">
              <span className="text-clay-text text-xs font-normal uppercase tracking-[0.25em] mb-6 block">
                More than just care
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 font-light text-rock tracking-tight font-serif">
                A true home for{" "}
                <span className="italic text-clay">your family.</span>
              </h2>
              <p className="text-rock/70 text-lg font-light leading-relaxed mb-6">
                Transitioning to care shouldn't mean losing the comfort of home.
                We provide a safe, intimate environment where residents are treated
                like family, supported by professional caregivers around the clock.
              </p>
              <p className="text-rock/70 font-light leading-relaxed mb-8">
                With a small number of residents, our caregivers form meaningful
                bonds with each person, adapting to their unique preferences,
                routines, and needs. Home-cooked meals, gentle activities, and
                constant companionship make every day feel natural.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-clay-text font-medium text-sm hover:text-rock transition-colors group"
              >
                Learn about our story
                <span className="group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== EXPERTISE ZIGZAG ===== */}
      <section className="py-20 px-6 md:px-12 bg-warm-white rounded-[3rem] mx-2 md:mx-6 relative grain">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-rock">
                Our Expertise
              </h2>
              <p className="text-rock/60 font-light mt-4">
                Comprehensive care tailored to individual needs.
              </p>
            </div>
          </FadeIn>

          {/* Expertise 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-24">
            <FadeIn direction="left" className="order-2 md:order-1">
              <span className="text-xs font-normal uppercase tracking-widest text-clay-text mb-4 block">
                Personalized Support
              </span>
              <h3 className="text-3xl md:text-4xl mb-6 font-serif tracking-tight">
                Activities of Daily Living
              </h3>
              <p className="text-rock/70 mb-6 leading-relaxed font-light">
                We assist with all daily routines respectfully and gently. Our goal
                is to maintain dignity while providing the necessary support for
                bathing, dressing, grooming, and mobility. We adapt to the
                resident's pace, never rushing the process.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-rock/80 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-clay shrink-0" />
                  Gentle bathing &amp; dressing assistance
                </li>
                <li className="flex items-center gap-3 text-sm text-rock/80 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-clay shrink-0" />
                  Safe transferring &amp; mobility support
                </li>
              </ul>
            </FadeIn>
            <ScaleReveal className="order-1 md:order-2">
              <div className="h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="https://kenwoodcare.com/wp-content/uploads/2019/01/shutterstock_367740032.jpg"
                  alt="Caregiver assisting senior resident with daily activities"
                  fill
                  className="object-cover !relative"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScaleReveal>
          </div>

          {/* Expertise 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-24">
            <ScaleReveal>
              <div className="h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="https://i.ibb.co/N6F0frqV/Medication-Management-Tips-for-Seniors.jpg"
                  alt="Medication management and care coordination"
                  fill
                  className="object-cover !relative"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScaleReveal>
            <FadeIn direction="right">
              <span className="text-xs font-normal uppercase tracking-widest text-clay-text mb-4 block">
                Medical Oversight
              </span>
              <h3 className="text-3xl md:text-4xl mb-6 font-serif tracking-tight">
                Health &amp; Medication Management
              </h3>
              <p className="text-rock/70 mb-6 leading-relaxed font-light">
                Managing medications can be complex. Our trained staff handles
                storage, dispensing, and logging of all prescriptions. We closely
                monitor vital signs and coordinate seamlessly with primary care
                physicians and home health agencies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-rock/80 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-clay shrink-0" />
                  Accurate medication administration
                </li>
                <li className="flex items-center gap-3 text-sm text-rock/80 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-clay shrink-0" />
                  Coordination with healthcare providers
                </li>
              </ul>
            </FadeIn>
          </div>

          {/* Expertise 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <FadeIn direction="left" className="order-2 md:order-1">
              <span className="text-xs font-normal uppercase tracking-widest text-clay-text mb-4 block">
                Quality of Life
              </span>
              <h3 className="text-3xl md:text-4xl mb-6 font-serif tracking-tight">
                Engagement &amp; Well-being
              </h3>
              <p className="text-rock/70 mb-6 leading-relaxed font-light">
                A fulfilling life goes beyond physical health. We encourage social
                interaction through group activities, gentle exercises, and hobbies.
                Our home features comfortable common areas designed for relaxation
                and family visits.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-rock/80 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-clay shrink-0" />
                  Music therapy and gentle exercises
                </li>
                <li className="flex items-center gap-3 text-sm text-rock/80 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-clay shrink-0" />
                  Inviting spaces for family gatherings
                </li>
              </ul>
            </FadeIn>
            <ScaleReveal className="order-1 md:order-2">
              <div className="h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="https://i.ibb.co/4wx6m52c/mary-beth-with-residents-2-800x.webp"
                  alt="Staff engaging with residents in common area"
                  fill
                  className="object-cover !relative"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScaleReveal>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS (editorial, NO cards) ===== */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-stone">
        <div className="max-w-6xl mx-auto">
          {/* Featured testimonial */}
          <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
            <ScaleReveal className="w-full md:w-5/12">
              <div className="aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-stone relative">
                <Image
                  src="https://i.ibb.co/q38P8Ykt/IMG-3019edit-2.jpg"
                  alt="Family visiting resident at Skagit River"
                  fill
                  className="object-cover mix-blend-multiply opacity-90"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </ScaleReveal>
            <FadeIn direction="right" className="w-full md:w-7/12">
              <span className="text-xs font-normal uppercase tracking-widest text-clay-text mb-4 block">
                Family Testimonial
              </span>
              <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight leading-tight">
                "They gave us our peace of mind back."
              </h2>
              <p className="text-lg text-rock/80 font-light mb-8 italic leading-relaxed">
                "Moving our father into care was the hardest decision we've ever
                made. From the moment we walked into Skagit River, the guilt faded.
                It didn't feel like a facility; it felt like a home. The staff knows
                exactly how he likes his coffee, they sit and listen to his stories,
                and the medical oversight is impeccable. We can finally sleep at
                night knowing he is safe, loved, and treated with absolute dignity."
              </p>
              <div className="flex items-center gap-4 border-t border-rock/10 pt-6">
                <div className="w-10 h-10 rounded-full bg-rock flex items-center justify-center text-sand text-sm font-serif">
                  S
                </div>
                <div>
                  <p className="text-sm font-normal text-rock">S.J.</p>
                  <p className="text-xs font-light text-rock/60">
                    Daughter of Resident, Seattle, WA
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Additional quotes as flowing text, NOT cards */}
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              {
                quote:
                  "What stood out most was how personal everything feels. The caregivers noticed small details and it made our mom feel truly known.",
                name: "Michael T.",
                relation: "Son of a Resident",
                initial: "M",
              },
              {
                quote:
                  "Communication has been exceptional. We get updates, answers quickly, and we always feel welcomed when we visit. It's a relief to have a team we trust.",
                name: "Amina K.",
                relation: "Daughter of a Resident",
                initial: "A",
              },
              {
                quote:
                  "The home is spotless, calm, and warm. It doesn't feel clinical. Our family finally feels at peace with the decision.",
                name: "Jasmine R.",
                relation: "Niece of a Resident",
                initial: "J",
              },
              {
                quote:
                  "We toured several places, but Skagit River felt different immediately. The staff was attentive, patient, and kind. It's the first place that felt right.",
                name: "David L.",
                relation: "Grandson of a Resident",
                initial: "D",
              },
            ].map((t) => (
              <div key={t.name} className="border-t border-rock/10 pt-8">
                <p className="text-lg text-rock/80 font-light italic leading-relaxed mb-6 font-serif">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-rock flex items-center justify-center text-sand text-xs font-serif">
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-sm font-normal text-rock">{t.name}</p>
                    <p className="text-xs font-light text-rock/60">
                      {t.relation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24 px-6 md:px-12 bg-sand">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center tracking-tight">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <HomeFAQ />
        </div>
      </section>

      <Footer />
    </>
  );
}
