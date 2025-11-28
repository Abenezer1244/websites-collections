import type { Metadata } from 'next'
import { AnimatedBlob, AnimatedBlobSecondary } from '@/components/AnimatedBlob'
import { JsonLd } from '@/components/JsonLd'
import { pageMetadata, generateWebPageSchema, generateBreadcrumbSchema, siteConfig } from '@/lib/seo'
import { Announcement, AnnouncementTag, AnnouncementTitle } from '@/components/kibo-ui/announcement'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: pageMetadata.privacyPolicy.title,
  description: pageMetadata.privacyPolicy.description,
  keywords: pageMetadata.privacyPolicy.keywords,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteConfig.url}/privacy-policy`,
    siteName: siteConfig.name,
    title: pageMetadata.privacyPolicy.title,
    description: pageMetadata.privacyPolicy.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Privacy Policy - Ark Care AFH',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageMetadata.privacyPolicy.title,
    description: pageMetadata.privacyPolicy.description,
    images: [siteConfig.ogImage],
  },
}

export default function PrivacyPolicy() {
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Privacy Policy', url: `${siteConfig.url}/privacy-policy` }
  ]

  const pageSchema = generateWebPageSchema(
    pageMetadata.privacyPolicy.title,
    pageMetadata.privacyPolicy.description,
    `${siteConfig.url}/privacy-policy`
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
          <div className="flex justify-center mb-6">
            <Announcement className="bg-white/10 backdrop-blur-md border-white/20 text-white" themed>
              <AnnouncementTag className="bg-white/20 text-white">Privacy</AnnouncementTag>
              <AnnouncementTitle className="text-white">
                Your Privacy Matters
              </AnnouncementTitle>
            </Announcement>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-lg mt-4 opacity-90 max-w-2xl">
            How we protect and handle your personal and health information
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-slate-800">
            <h2 className="text-3xl font-bold text-slate-900 mt-8 mb-4">1. Introduction</h2>
            <p>
              Ark Care AFH ("we," "us," "our," or "Company") is committed to protecting your privacy and ensuring you have a positive experience on our website and in receiving our services. This Privacy Policy explains our information practices, what types of information we collect, how we use it, and the choices you have regarding your information.
            </p>
            <p>
              This policy applies to information we collect through our website, in person, by phone, and through our communications with you.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-8 mb-4">2. Health Information & HIPAA Compliance</h2>
            <p>
              Ark Care AFH is regulated by the State of Washington and complies with the Health Insurance Portability and Accountability Act (HIPAA) and all applicable federal and state privacy laws. We maintain strict confidentiality of all protected health information (PHI) and medical records.
            </p>
            <p>
              All resident health information is maintained securely and accessed only by authorized personnel who need the information to provide care, conduct operations, or fulfill legal obligations.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-8 mb-4">3. Information We Collect</h2>
            <p className="font-semibold text-slate-900">We may collect the following types of information:</p>
            <ul className="space-y-3 ml-6 list-disc">
              <li><strong>Personal Information</strong>: Name, address, phone number, email address, date of birth, and Social Security number</li>
              <li><strong>Health Information</strong>: Medical history, current medications, allergies, healthcare provider information, and health conditions</li>
              <li><strong>Financial Information</strong>: Insurance information, billing address, and payment methods (processed securely)</li>
              <li><strong>Emergency Contact Information</strong>: Names and phone numbers of family members and emergency contacts</li>
              <li><strong>Website Information</strong>: IP address, browser type, pages visited, and time spent on our website (through cookies and analytics)</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-8 mb-4">4. How We Use Your Information</h2>
            <p className="font-semibold text-slate-900">We use the information we collect for:</p>
            <ul className="space-y-3 ml-6 list-disc">
              <li>Providing care services and medical treatment</li>
              <li>Communicating with residents and families about care plans and updates</li>
              <li>Billing and processing payments</li>
              <li>Coordinating with healthcare providers and pharmacies</li>
              <li>Maintaining accurate medical and administrative records</li>
              <li>Complying with legal and regulatory requirements</li>
              <li>Improving our services and website functionality</li>
              <li>Responding to inquiries and requests</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-8 mb-4">5. Information Sharing & Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal or health information to third parties. We may share information only in the following circumstances:
            </p>
            <ul className="space-y-3 ml-6 list-disc">
              <li><strong>Healthcare Providers</strong>: With doctors, pharmacies, and hospitals with your consent to coordinate care</li>
              <li><strong>Insurance Companies</strong>: To verify coverage and process claims</li>
              <li><strong>Legal Obligations</strong>: When required by law, court order, or regulatory agencies</li>
              <li><strong>Family Members</strong>: With your authorization, we communicate with designated family members</li>
              <li><strong>Business Associates</strong>: With vendors who assist in our operations under confidentiality agreements</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-8 mb-4">6. Data Security</h2>
            <p>
              We implement administrative, physical, and technical safeguards to protect your information from unauthorized access, disclosure, modification, or destruction. These include:
            </p>
            <ul className="space-y-3 ml-6 list-disc">
              <li>Secure storage of medical records and personal information</li>
              <li>Password-protected computer systems and databases</li>
              <li>Encrypted transmission of sensitive information</li>
              <li>Limited access to information on a need-to-know basis</li>
              <li>Staff training on privacy and confidentiality procedures</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-8 mb-4">7. Cookies & Website Tracking</h2>
            <p>
              Our website uses cookies to enhance your browsing experience and analyze website traffic. Cookies are small files stored on your device that help us recognize you and remember your preferences. You can control cookie settings through your browser, though some features may not function properly without them.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-8 mb-4">8. Your Rights</h2>
            <p>
              Under HIPAA and state privacy laws, you have the right to:
            </p>
            <ul className="space-y-3 ml-6 list-disc">
              <li>Access your medical records and health information</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request restrictions on the use of your information</li>
              <li>Request an accounting of disclosures</li>
              <li>Request communication through alternative methods</li>
              <li>File a complaint with us or with state authorities</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-8 mb-4">9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, wish to exercise your privacy rights, or have privacy concerns, please contact us:
            </p>
            <Card className="mt-4 border-primary/20 flashlight-card animate-on-scroll" style={{ animationFillMode: 'both' }}>
              <CardContent className="pt-6">
                <p><strong>Phone:</strong> (206) 455-3644</p>
                <p><strong>Address:</strong> 127 4th Ave N, Algona, WA 98001</p>
                <p><strong>Email:</strong> contact@arkcare.local</p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-slate-900 mt-8 mb-4">10. Policy Changes</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on our website with an updated effective date. Your continued use of our services constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-8 mb-4">11. Effective Date</h2>
            <p>
              This Privacy Policy is effective as of {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-white via-slate-50 to-primary/5 border-primary/20 shadow-xl flashlight-card animate-on-scroll" style={{ animationFillMode: 'both' }}>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold text-slate-900">
                Questions About Privacy?
              </CardTitle>
              <CardDescription className="text-lg text-slate-800">
                We're committed to protecting your privacy. Please don't hesitate to reach out if you have any questions or concerns.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
