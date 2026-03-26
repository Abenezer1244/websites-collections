import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Hebron Care Adult Family Home LLC #2 collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] py-16 px-6">
      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-teal)] leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-[var(--color-ink)]/50 font-sans">
            Last updated: March 2025
          </p>
        </header>

        {/* Intro */}
        <p className="text-base leading-relaxed text-[var(--color-ink)]/80 mb-10">
          Hebron Care Adult Family Home LLC #2 (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) respects your privacy. This policy explains what information
          we collect through this website, how we use it, and how we protect it.
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl text-[var(--color-teal)] mb-4">
            Information We Collect
          </h2>
          <p className="text-base leading-relaxed text-[var(--color-ink)]/80 mb-4">
            We only collect personal information that you voluntarily provide when
            you submit a form on our site, such as a tour request or a general
            contact inquiry. This may include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base leading-relaxed text-[var(--color-ink)]/80 pl-2">
            <li>Your name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Any message or details you choose to share</li>
          </ul>
          <p className="text-base leading-relaxed text-[var(--color-ink)]/80 mt-4">
            We do not collect any information automatically beyond what is
            necessary for basic website functionality (see Cookies below).
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl text-[var(--color-teal)] mb-4">
            How We Use Your Information
          </h2>
          <p className="text-base leading-relaxed text-[var(--color-ink)]/80 mb-4">
            The information you provide is used solely to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base leading-relaxed text-[var(--color-ink)]/80 pl-2">
            <li>Respond to your inquiry in a timely manner</li>
            <li>
              Follow up with you about care options and scheduling a tour of our
              home
            </li>
          </ul>
          <p className="text-base leading-relaxed text-[var(--color-ink)]/80 mt-4">
            We will never use your information for unrelated marketing purposes
            or share it with advertisers.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl text-[var(--color-teal)] mb-4">
            We Do Not Sell Your Data
          </h2>
          <p className="text-base leading-relaxed text-[var(--color-ink)]/80">
            We do not sell, rent, trade, or otherwise transfer your personal
            information to any third party for commercial purposes. Ever. Your
            information stays with us and is used only to connect with you about
            care for your loved one.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl text-[var(--color-teal)] mb-4">
            Form Processing
          </h2>
          <p className="text-base leading-relaxed text-[var(--color-ink)]/80">
            Contact and tour request forms on this site are processed through{" "}
            <a
              href="https://formspree.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-teal)] underline underline-offset-2 hover:text-[var(--color-gold)] transition-colors"
            >
              Formspree
            </a>
            , a third-party form service. When you submit a form, your data is
            transmitted to Formspree and then forwarded to us by email. Formspree
            operates under its own privacy policy, which you can review at{" "}
            <a
              href="https://formspree.io/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-teal)] underline underline-offset-2 hover:text-[var(--color-gold)] transition-colors"
            >
              formspree.io/legal/privacy-policy
            </a>
            .
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl text-[var(--color-teal)] mb-4">
            Cookies
          </h2>
          <p className="text-base leading-relaxed text-[var(--color-ink)]/80">
            This website uses only minimal cookies necessary for basic
            functionality (such as remembering your session state). We do not use
            advertising cookies, behavioral tracking cookies, or any third-party
            analytics that profile your browsing behavior across other sites.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl text-[var(--color-teal)] mb-4">
            Your Rights &amp; Data Deletion
          </h2>
          <p className="text-base leading-relaxed text-[var(--color-ink)]/80 mb-4">
            You have the right to request that we delete any personal information
            we have collected from you. To make a deletion request or ask any
            questions about your data, please reach out to us directly:
          </p>
          <ul className="space-y-2 text-base leading-relaxed text-[var(--color-ink)]/80 pl-2">
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
          <p className="text-base leading-relaxed text-[var(--color-ink)]/80 mt-4">
            We will respond to all data requests promptly and in accordance with
            applicable privacy laws.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl text-[var(--color-teal)] mb-4">
            Changes to This Policy
          </h2>
          <p className="text-base leading-relaxed text-[var(--color-ink)]/80">
            We may update this Privacy Policy from time to time. Any changes will
            be reflected on this page with an updated &ldquo;Last updated&rdquo; date. We
            encourage you to review this page periodically.
          </p>
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
