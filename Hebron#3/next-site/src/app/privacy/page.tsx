import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/motion";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Skagit River Adult Family Home. How we collect, use, and protect your information.",
};

export default function PrivacyPage() {
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
            <li>Privacy Policy</li>
          </ol>
        </nav>

        <FadeIn>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-rock mb-4">
              Privacy Policy
            </h1>
            <p className="text-rock/70 text-sm">Last updated: March 2026</p>
          </header>
        </FadeIn>

        <div className="space-y-8 text-rock/90 font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-serif font-normal text-rock mb-3">
              Who we are
            </h2>
            <p>
              {SITE.legalName} (&ldquo;Skagit River,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us&rdquo;) operates this website. We are a residential adult
              family home in Mount Vernon, Washington, providing compassionate care
              for our residents. This Privacy Policy describes how we collect, use,
              and protect information when you visit our site or contact us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-normal text-rock mb-3">
              Information we collect
            </h2>
            <p>We may collect information you provide directly, such as when you:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Submit our contact form (e.g., name, email, phone, message)</li>
              <li>Call or email us using the contact details on the site</li>
              <li>Sign up for updates or request a tour</li>
            </ul>
            <p className="mt-3">
              We may also automatically collect certain technical information when
              you visit our website (e.g., IP address, browser type, pages viewed)
              through standard web server logs or similar technologies. We do not
              use cookies for tracking or advertising; any cookies are limited to
              essential site function if needed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-normal text-rock mb-3">
              How we use your information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Respond to your inquiries and schedule tours</li>
              <li>Send you information you have requested about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with applicable laws and protect our rights</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or trade your personal information to third
              parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-normal text-rock mb-3">
              How we protect your information
            </h2>
            <p>
              We take reasonable steps to protect your personal information from
              unauthorized access, use, or disclosure. Communication over the
              internet is not guaranteed to be secure; we encourage you to avoid
              sending highly sensitive information through the contact form.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-normal text-rock mb-3">
              Your rights
            </h2>
            <p>
              Depending on applicable law, you may have the right to request access
              to, correction of, or deletion of personal information we hold about
              you, or to opt out of certain uses. To exercise these rights or ask
              questions about our privacy practices, please contact us using the
              information below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-normal text-rock mb-3">
              Third party links
            </h2>
            <p>
              Our website may contain links to third party sites (e.g., maps,
              social media). We are not responsible for the privacy practices of
              those sites. We encourage you to read their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-normal text-rock mb-3">
              Changes to this policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. The
              &ldquo;Last updated&rdquo; date at the top of this page will reflect
              the most recent changes. Continued use of the site after changes
              constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-normal text-rock mb-3">
              Contact us
            </h2>
            <p>For privacy related questions or requests:</p>
            <p className="mt-2">
              <strong>{SITE.legalName}</strong>
              <br />
              <a
                href={`mailto:${SITE.email}`}
                className="text-clay-text hover:text-rock underline underline-offset-2"
              >
                {SITE.email}
              </a>
              <br />
              Provider: {SITE.phone} &middot; Home: {SITE.homePhone}
              <br />
              {SITE.address.full}
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
