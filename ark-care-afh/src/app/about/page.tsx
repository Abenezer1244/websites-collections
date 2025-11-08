import type { Metadata } from 'next'
import { AnimatedBlob, AnimatedBlobSecondary } from '@/components/AnimatedBlob'
import { JsonLd } from '@/components/JsonLd'
import { pageMetadata, generateWebPageSchema, generateBreadcrumbSchema, siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
  keywords: pageMetadata.about.keywords,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    title: pageMetadata.about.title,
    description: pageMetadata.about.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'About Ark Care AFH',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageMetadata.about.title,
    description: pageMetadata.about.description,
    images: [siteConfig.ogImage],
  },
}

export default function About() {
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'About', url: `${siteConfig.url}/about` }
  ]

  const pageSchema = generateWebPageSchema(
    pageMetadata.about.title,
    pageMetadata.about.description,
    `${siteConfig.url}/about`
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
          <h1 className="text-4xl md:text-5xl font-bold">About Ark Care AFH</h1>
          <p className="text-lg mt-4 opacity-90 max-w-2xl">
            Licensed adult family home providing personalized care in Algona, Washington
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                At Ark Care AFH, we are dedicated to providing compassionate, high-quality adult family home care that honors the dignity, independence, and individual needs of each resident.
              </p>
              <p className="text-lg text-muted-foreground">
                We create a warm, supportive home environment where residents receive personalized care and meaningful engagement, supported by trained, caring staff.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We envision a future where every individual receives care that promotes their well-being, respects their choices, and enables them to live with dignity and purpose.
              </p>
              <p className="text-lg text-muted-foreground">
                Our home is a place where quality care, professional expertise, and genuine compassion come together to create the best possible outcomes for our residents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Our Story
          </h2>
          <div className="bg-card rounded-lg shadow-sm border border-border p-8 md:p-12">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Ark Care AFH is a licensed adult family home located in Algona, Washington, dedicated to providing compassionate, personalized care in a home-like environment. We specialize in caring for individuals with diverse needs, including seniors, adults with developmental disabilities, and those requiring specialized behavioral health support.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our facility at 127 4th Ave N, Algona, WA 98001 was designed from the ground up to provide a safe, comfortable, and welcoming home. We carefully selected our location and designed our spaces to promote independence, dignity, and quality of life for our residents.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We offer comprehensive services under multiple programs including HCS (Home and Community Services), DDA Meaningful Day programs, and Expanded Community Services. Our specialized support includes care for individuals with mental health needs, dementia support, and developmental disability services.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we are proud to serve residents in our community, providing comprehensive care services that allow individuals to maintain their independence while receiving the support they need. Our team is committed to exceeding expectations and making a positive difference in the lives of those we serve. For more information or to schedule a tour, please call us at (206) 455-3644.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Compassion</h3>
              <p className="text-muted-foreground">
                We care deeply about our residents' well-being and are committed to treating each person with kindness and empathy.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Quality</h3>
              <p className="text-muted-foreground">
                Excellence is our standard. We maintain the highest quality in care, services, and our facility.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Respect</h3>
              <p className="text-muted-foreground">
                We honor the dignity and autonomy of each resident, respecting their choices and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Why Choose Ark Care AFH?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Experienced Staff</h3>
                <p className="mt-2 text-muted-foreground">
                  Our team consists of trained, caring professionals with experience in adult family home care.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Personalized Care</h3>
                <p className="mt-2 text-muted-foreground">
                  Each resident receives a customized care plan tailored to their unique needs and preferences.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Home Environment</h3>
                <p className="mt-2 text-muted-foreground">
                  Our facility is designed to feel like home, promoting comfort and a sense of belonging.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Community Focus</h3>
                <p className="mt-2 text-muted-foreground">
                  We foster a sense of community and encourage meaningful engagement within our home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
