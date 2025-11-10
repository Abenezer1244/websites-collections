import type { Metadata } from 'next'
import { AnimatedBlob, AnimatedBlobSecondary } from '@/components/AnimatedBlob'
import { JsonLd } from '@/components/JsonLd'
import { pageMetadata, generateWebPageSchema, generateBreadcrumbSchema, siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: pageMetadata.termsOfService.title,
  description: pageMetadata.termsOfService.description,
  keywords: pageMetadata.termsOfService.keywords,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteConfig.url}/terms-of-service`,
    siteName: siteConfig.name,
    title: pageMetadata.termsOfService.title,
    description: pageMetadata.termsOfService.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Terms of Service - Ark Care AFH',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageMetadata.termsOfService.title,
    description: pageMetadata.termsOfService.description,
    images: [siteConfig.ogImage],
  },
}

export default function TermsOfService() {
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Terms of Service', url: `${siteConfig.url}/terms-of-service` }
  ]

  const pageSchema = generateWebPageSchema(
    pageMetadata.termsOfService.title,
    pageMetadata.termsOfService.description,
    `${siteConfig.url}/terms-of-service`
  )

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/90 to-primary/70 text-white py-16">
        <AnimatedBlob position="top-right" size="lg" opacity="medium" />
        <AnimatedBlobSecondary position="bottom-left" size="md" opacity="light" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          <p className="text-lg mt-4 opacity-90 max-w-2xl">
            Terms and conditions for using Ark Care AFH services and website
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-slate-800 dark:text-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mt-8 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using the Ark Care AFH website and services, you agree to comply with these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, please do not use our website or services.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mt-8 mb-4">2. Services Overview</h2>
            <p>
              Ark Care AFH is a licensed adult family home located in Algona, Washington, providing residential care services for seniors, adults with developmental disabilities, and individuals requiring specialized behavioral health support. Our services include 24/7 care, medication management, personal care, meals, activities, and transportation.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mt-8 mb-4">3. Admission & Care Agreements</h2>
            <p className="font-semibold text-slate-900 dark:text-slate-50">Admission Requirements:</p>
            <ul className="space-y-3 ml-6 list-disc">
              <li>Completion of admission application and documentation</li>
              <li>Provision of medical history and current medications</li>
              <li>Agreement to comply with facility policies and procedures</li>
              <li>Authorization for payment and insurance coordination</li>
              <li>Emergency contact information</li>
            </ul>
            <p className="mt-6">
              A separate Care Agreement will be executed at the time of admission outlining specific care services, costs, payment terms, and resident rights and responsibilities.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mt-8 mb-4">4. Resident Rights & Responsibilities</h2>
            <p className="font-semibold text-slate-900 dark:text-slate-50">Resident Rights:</p>
            <ul className="space-y-3 ml-6 list-disc">
              <li>Right to receive quality care in a safe, clean environment</li>
              <li>Right to dignity, respect, and privacy</li>
              <li>Right to participate in care planning decisions</li>
              <li>Right to access medical records</li>
              <li>Right to communicate with family and healthcare providers</li>
              <li>Right to voice complaints and concerns</li>
              <li>Right to refuse treatment (within legal limits)</li>
            </ul>
            <p className="font-semibold text-slate-900 dark:text-slate-50 mt-6">Resident Responsibilities:</p>
            <ul className="space-y-3 ml-6 list-disc">
              <li>Comply with facility policies and procedures</li>
              <li>Treat staff and other residents with respect</li>
              <li>Maintain personal hygiene and health</li>
              <li>Participate in care planning</li>
              <li>Pay fees according to agreed payment terms</li>
              <li>Notify staff of changes in health condition</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mt-8 mb-4">5. Payment & Fees</h2>
            <p>
              Residents or their representatives are responsible for paying all charges for services provided. Payment terms, rates, and methods will be agreed upon at the time of admission. We accept private pay, insurance, and certain government programs.
            </p>
            <p>
              Failure to pay fees may result in discharge from the facility in accordance with Washington state regulations and our admission agreement.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mt-8 mb-4">6. Discharge Policy</h2>
            <p>
              Ark Care AFH reserves the right to discharge residents when:
            </p>
            <ul className="space-y-3 ml-6 list-disc">
              <li>Requested by the resident or authorized representative</li>
              <li>Care needs exceed our service capabilities</li>
              <li>Resident behavior poses safety risks to themselves or others</li>
              <li>Non-compliance with care plans or facility policies</li>
              <li>Non-payment of fees according to agreed terms</li>
              <li>Violation of resident conduct standards</li>
            </ul>
            <p className="mt-6">
              All discharges will be conducted in accordance with Washington state regulations and will include advance notice when possible. We will assist with transition planning and coordination with other facilities.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mt-8 mb-4">7. Health & Safety</h2>
            <p>
              Ark Care AFH maintains health and safety standards in compliance with state regulations. Our facility includes:
            </p>
            <ul className="space-y-3 ml-6 list-disc">
              <li>Regular health and safety inspections</li>
              <li>Emergency response protocols</li>
              <li>Fire safety equipment and procedures</li>
              <li>Accessible design and safety features</li>
              <li>Staff trained in first aid and emergency response</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mt-8 mb-4">8. Medical Care Coordination</h2>
            <p>
              Ark Care AFH coordinates with residents' healthcare providers for medical care and treatment. Residents must provide:
            </p>
            <ul className="space-y-3 ml-6 list-disc">
              <li>Primary care physician information</li>
              <li>Current medication list and prescriptions</li>
              <li>Authorization for pharmacy coordination</li>
              <li>Consent for medical appointments and treatment coordination</li>
            </ul>
            <p className="mt-6">
              We administer medications as prescribed and maintain detailed health records. Residents or representatives must inform us of any medication changes or health concerns.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mt-8 mb-4">9. Website Terms</h2>
            <p className="font-semibold text-slate-900 dark:text-slate-50">Website Use:</p>
            <ul className="space-y-3 ml-6 list-disc">
              <li>Information provided is for informational purposes only</li>
              <li>You agree not to use the website for illegal or unauthorized purposes</li>
              <li>You agree not to transmit viruses or malware</li>
              <li>You agree not to engage in harassment or abusive behavior</li>
              <li>You will not attempt to gain unauthorized access to systems</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mt-8 mb-4">10. Limitation of Liability</h2>
            <p>
              Ark Care AFH provides services in accordance with applicable laws and regulations. While we maintain high standards of care, we are not liable for:
            </p>
            <ul className="space-y-3 ml-6 list-disc">
              <li>Personal property loss or theft (secure valuables in a safe)</li>
              <li>Unforeseeable medical emergencies despite appropriate care</li>
              <li>Website availability or technical issues</li>
              <li>Third-party actions outside our control</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mt-8 mb-4">11. Complaint & Dispute Resolution</h2>
            <p>
              Residents and families are encouraged to voice concerns directly to staff or management. For unresolved complaints:
            </p>
            <ul className="space-y-3 ml-6 list-disc">
              <li>Submit written complaint to facility management</li>
              <li>Complaints will be investigated and resolved promptly</li>
              <li>Contact Washington State Department of Health for regulatory complaints</li>
              <li>Legal disputes will be resolved according to Washington state law</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mt-8 mb-4">12. Intellectual Property</h2>
            <p>
              All content on the Ark Care AFH website, including text, images, logos, and graphics, is the property of Ark Care AFH and protected by copyright laws. You may not reproduce, distribute, or transmit any content without our written permission.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mt-8 mb-4">13. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of external websites. Use of third-party sites is at your own risk and subject to their terms of service.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mt-8 mb-4">14. Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of the State of Washington, without regard to conflicts of law principles. Any legal action or proceeding related to these terms shall be brought exclusively in the state or federal courts located in King County, Washington.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mt-8 mb-4">15. Contact & Questions</h2>
            <p>
              For questions about these Terms of Service or our policies:
            </p>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-lg mt-4">
              <p><strong>Phone:</strong> (206) 455-3644</p>
              <p><strong>Address:</strong> 127 4th Ave N, Algona, WA 98001</p>
              <p><strong>Email:</strong> contact@arkcare.local</p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mt-8 mb-4">16. Effective Date & Updates</h2>
            <p>
              These Terms of Service are effective as of {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}. We may update these terms at any time. Changes will be posted on our website with an updated effective date. Your continued use of our services constitutes acceptance of updated terms.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Questions About Our Terms?
          </h2>
          <p className="text-lg text-slate-800 dark:text-slate-200 mb-8">
            We're happy to clarify any part of our Terms of Service. Please reach out with any questions.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  )
}
