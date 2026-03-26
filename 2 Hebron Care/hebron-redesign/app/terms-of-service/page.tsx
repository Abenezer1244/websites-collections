import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of use for the Hebron Care Adult Family Home LLC #2 website.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] py-16 px-6">
      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-teal)] leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-[var(--color-ink)]/50 font-sans">
            Last updated: March 2025
          </p>
        </header>

        {/* Intro */}
        <p className="text-base leading-relaxed text-[var(--color-ink)]/80 mb-10">
          By accessing or using the Hebron Care Adult Family Home LLC #2 website
          (&ldquo;the Site&rdquo;), you agree to the following terms. Please read them
          carefully. If you do not agree, please discontinue use of the Site.
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl text-[var(--color-teal)] mb-4">
            Purpose of This Site
          </h2>
          <p className="text-base leading-relaxed text-[var(--color-ink)]/80">
            This website is provided for informational purposes only. Its purpose
            is to help families and individuals learn about the care services
            offered at Hebron Care Adult Family Home and to make it easy to get
            in touch with us. Nothing on this Site constitutes a binding
            agreement, guarantee of availability, or offer of services.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl text-[var(--color-teal)] mb-4">
            Not Medical or Legal Advice
          </h2>
          <p className="text-base leading-relaxed text-[var(--color-ink)]/80">
            The content on this Site, including descriptions of care services,
            health-related information, and any other materials, is for general
            informational purposes only. It is not intended to be, and should not
            be construed as, medical advice, a clinical recommendation, or legal
            counsel. Always consult a qualified healthcare provider or attorney
            for guidance specific to your situation.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl text-[var(--color-teal)] mb-4">
            Information May Change
          </h2>
          <p className="text-base leading-relaxed text-[var(--color-ink)]/80">
            We strive to keep the information on this Site accurate and
            up-to-date; however, details about services, pricing, availability,
            and staff may change at any time without notice. For the most current
            information, please contact us directly before making any decisions
            based on what you read here.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl text-[var(--color-teal)] mb-4">
            Form Submissions &amp; Contact Consent
          </h2>
          <p className="text-base leading-relaxed text-[var(--color-ink)]/80">
            By submitting a form on this Site, whether a tour request, contact
            form, or any other inquiry, you consent to being contacted by Hebron
            Care Adult Family Home LLC #2 via email or phone in response to your
            submission. We will only use your contact information to follow up on
            your specific inquiry.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl text-[var(--color-teal)] mb-4">
            Third-Party Links
          </h2>
          <p className="text-base leading-relaxed text-[var(--color-ink)]/80">
            This Site may contain links to external websites or services (such as
            Formspree for form processing). These links are provided for
            convenience only. We do not control, endorse, or accept responsibility
            for the content, privacy practices, or accuracy of any third-party
            sites. Visiting linked sites is at your own discretion and risk.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl text-[var(--color-teal)] mb-4">
            Limitation of Liability
          </h2>
          <p className="text-base leading-relaxed text-[var(--color-ink)]/80">
            To the fullest extent permitted by law, Hebron Care Adult Family Home
            LLC #2 shall not be liable for any damages arising from your use of
            this Site, reliance on its content, or inability to access it. The
            Site is provided &ldquo;as is&rdquo; without warranties of any kind, express or
            implied.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl text-[var(--color-teal)] mb-4">
            Intellectual Property
          </h2>
          <p className="text-base leading-relaxed text-[var(--color-ink)]/80">
            All content on this Site, including text, images, logos, and design,
            is the property of Hebron Care Adult Family Home LLC #2 unless
            otherwise noted. You may not reproduce, distribute, or use our
            content without written permission.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl text-[var(--color-teal)] mb-4">
            Governing Law
          </h2>
          <p className="text-base leading-relaxed text-[var(--color-ink)]/80">
            These terms are governed by the laws of the State of Washington,
            without regard to its conflict-of-law provisions. Any disputes
            arising from the use of this Site shall be subject to the exclusive
            jurisdiction of the courts located in Snohomish County, Washington.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl text-[var(--color-teal)] mb-4">
            Changes to These Terms
          </h2>
          <p className="text-base leading-relaxed text-[var(--color-ink)]/80">
            We reserve the right to update these Terms of Service at any time.
            Changes will be posted on this page with an updated &ldquo;Last
            updated&rdquo; date. Continued use of the Site after changes are posted
            constitutes your acceptance of the revised terms.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-12 p-6 bg-[var(--color-teal)]/5 rounded-lg border border-[var(--color-teal)]/10">
          <h2 className="font-serif text-2xl text-[var(--color-teal)] mb-4">
            Questions?
          </h2>
          <p className="text-base leading-relaxed text-[var(--color-ink)]/80 mb-3">
            If you have any questions about these Terms of Service, please contact
            us:
          </p>
          <ul className="space-y-2 text-base text-[var(--color-ink)]/80">
            <li>
              <span className="font-medium text-[var(--color-ink)]">Email:</span>{" "}
              <a
                href="mailto:hebroncareafhllc@gmail.com"
                className="text-[var(--color-teal)] underline underline-offset-2 hover:text-[var(--color-gold)] transition-colors"
              >
                hebroncareafhllc@gmail.com
              </a>
            </li>
            <li>
              <span className="font-medium text-[var(--color-ink)]">Phone:</span>{" "}
              <a
                href="tel:+14253747954"
                className="text-[var(--color-teal)] underline underline-offset-2 hover:text-[var(--color-gold)] transition-colors"
              >
                (425) 374-7954
              </a>
            </li>
          </ul>
        </section>

        {/* Back link */}
        <div className="border-t border-[var(--color-ink)]/10 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-sans text-[var(--color-teal)] hover:text-[var(--color-gold)] transition-colors"
          >
            <span aria-hidden="true">&larr;</span>
            Back to Home
          </Link>
        </div>
      </article>
    </div>
  );
}
