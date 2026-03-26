import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/motion";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for Skagit River adult family home in Mount Vernon, WA. Monthly rate range, what's included, payment options including private pay and long-term care insurance.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main
        id="main"
        className="pt-36 md:pt-44 pb-24 px-6 md:px-12 max-w-3xl mx-auto"
        tabIndex={-1}
      >
        <nav aria-label="Breadcrumb" className="mb-8 text-sm font-light text-rock/70">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-clay transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>Pricing</li>
          </ol>
        </nav>

        <FadeIn>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-rock mb-4">
              Pricing &amp; what's included
            </h1>
            <p className="text-rock/70 text-lg">
              Transparent information so you can plan with confidence. Exact rates
              are provided after a tour and assessment.
            </p>
          </header>
        </FadeIn>

        <div className="space-y-10 text-rock/90 font-light leading-relaxed">
          <FadeIn>
            <section>
              <h2 className="text-xl font-serif font-normal text-rock mb-3">
                Monthly rate range
              </h2>
              <p>
                Private-pay monthly rates at Skagit River typically{" "}
                <strong>
                  start in the mid-range for adult family homes in Skagit County
                </strong>{" "}
                (Mount Vernon, WA area) and vary by room type and level of care.
                We give you an exact quote after a brief assessment and tour.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-serif font-normal text-rock mb-3">
                What's included in the base rate
              </h2>
              <ul className="list-none space-y-2">
                {[
                  "24/7 supervision and awake staff",
                  "Three meals daily plus snacks (including special diets)",
                  "Medication management (RN delegated)",
                  "Assistance with activities of daily living (bathing, dressing, grooming)",
                  "Housekeeping and laundry",
                  "Activities and engagement",
                  "Care coordination with physicians and families",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clay mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-serif font-normal text-rock mb-3">
                What may be billed separately
              </h2>
              <p>
                Some items are not included in the base monthly rate and may be
                billed separately when applicable: certain medical supplies,
                incontinence supplies beyond a baseline, outside therapies (e.g.
                PT/OT) not covered by insurance, and one-on-one nursing or
                companion care beyond the standard level. We explain any additional
                costs before admission and document them clearly.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <section>
              <h2 className="text-xl font-serif font-normal text-rock mb-3">
                Accepted payment types
              </h2>
              <p>
                We accept <strong>private pay</strong> (check, ACH, or other
                arrangements) and work with families who use{" "}
                <strong>long-term care insurance</strong>. We can provide
                documentation and assist with forms required by your LTC insurance
                provider. Medicare does not cover room and board in an adult family
                home; Medicaid may cover some residents through state programs. We
                can discuss eligibility and refer you to local resources.
              </p>
            </section>
          </FadeIn>

          <FadeIn>
            <p className="pt-6 border-t border-rock/10">
              <Link
                href="/contact"
                className="text-clay-text font-medium hover:underline"
              >
                Contact us
              </Link>{" "}
              for a tour and a personalized quote, or call{" "}
              <a
                href={SITE.phoneHref}
                className="text-clay-text font-medium hover:underline"
              >
                {SITE.phone}
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </>
  );
}
