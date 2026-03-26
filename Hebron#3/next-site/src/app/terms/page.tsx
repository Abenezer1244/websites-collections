import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/motion";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for using the Skagit River Adult Family Home website.",
};

export default function TermsPage() {
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
            <li>Terms of Service</li>
          </ol>
        </nav>

        <FadeIn>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-rock mb-4">
              Terms of Service
            </h1>
            <p className="text-rock/70 text-sm">Last updated: March 2026</p>
          </header>
        </FadeIn>

        <div className="space-y-8 text-rock/90 font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-serif font-normal text-rock mb-3">
              Acceptance of terms
            </h2>
            <p>
              By accessing or using the website of {SITE.legalName} (&ldquo;Skagit
              River,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;), you agree to be
              bound by these Terms of Service. If you do not agree, please do not
              use this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-normal text-rock mb-3">
              Use of the website
            </h2>
            <p>
              This website is provided for informational purposes about our adult
              family home and care services in Mount Vernon, Washington. You may use
              the site to learn about our services, view our gallery, and contact us
              to schedule a tour or ask questions. You agree to use the website only
              for lawful purposes and in a way that does not infringe the rights of
              others or restrict their use of the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-normal text-rock mb-3">
              Not professional or medical advice
            </h2>
            <p>
              Content on this website is general information only and does not
              constitute professional, medical, or legal advice. Care decisions
              should be made in consultation with qualified professionals. We do not
              guarantee that information on the site is complete, current, or
              suitable for your specific situation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-normal text-rock mb-3">
              Disclaimer of warranties
            </h2>
            <p>
              The website and its content are provided &ldquo;as is&rdquo; without
              warranties of any kind, either express or implied. We do not warrant
              that the site will be uninterrupted, error free, or free of harmful
              components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-normal text-rock mb-3">
              Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by law, {SITE.legalName} and its
              owners, operators, and affiliates shall not be liable for any direct,
              indirect, incidental, special, consequential, or punitive damages
              arising from your use of or inability to use this website, or from any
              content or communications you submit through the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-normal text-rock mb-3">
              Intellectual property
            </h2>
            <p>
              All content on this website (text, images, logos, design) is owned by
              Skagit River or used with permission and is protected by copyright and
              other intellectual property laws. You may not copy, reproduce,
              distribute, or create derivative works without our prior written
              consent, except for personal, non-commercial use such as viewing or
              sharing a link.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-normal text-rock mb-3">
              Third party links
            </h2>
            <p>
              Our site may contain links to third party websites (e.g., maps, social
              media). We are not responsible for the content or practices of those
              sites. Links do not imply endorsement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-normal text-rock mb-3">
              Governing law
            </h2>
            <p>
              These Terms are governed by the laws of the State of Washington,
              without regard to conflict of law principles. Any dispute relating to
              the website or these Terms shall be subject to the exclusive
              jurisdiction of the state and federal courts located in Washington.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-normal text-rock mb-3">
              Changes
            </h2>
            <p>
              We may update these Terms of Service from time to time. The
              &ldquo;Last updated&rdquo; date at the top of this page will reflect
              the most recent changes. Your continued use of the website after
              changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-normal text-rock mb-3">
              Contact
            </h2>
            <p>For questions about these Terms of Service:</p>
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
