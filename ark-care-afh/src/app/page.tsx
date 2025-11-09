import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedBlob, AnimatedBlobSecondary } from '@/components/AnimatedBlob'
import { JsonLd } from '@/components/JsonLd'
import { pageMetadata, generateWebPageSchema, generateBreadcrumbSchema, siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  keywords: pageMetadata.home.keywords,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Ark Care AFH - Adult Family Home Care in Algona, WA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    images: [siteConfig.ogImage],
  },
}

export default function Home() {
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url }
  ]

  const pageSchema = generateWebPageSchema(
    pageMetadata.home.title,
    pageMetadata.home.description,
    siteConfig.url
  )

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section with Video Background - Full Screen Height */}
      <section className="relative overflow-hidden text-white min-h-screen flex items-center">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Animated Blobs */}
        <AnimatedBlob position="top-right" size="lg" opacity="medium" />
        <AnimatedBlobSecondary position="bottom-left" size="md" opacity="light" />

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex items-center justify-center">
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
              Compassionate Care in a Home Environment
            </h1>
            <p className="text-base md:text-lg mb-10 opacity-80 mx-auto leading-relaxed max-w-2xl">
              Ark Care AFH provides personalized adult family home care services in Algona, WA with specialized support for mental health, dementia, and developmental disabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section - Redesigned */}
      <section className="py-20 md:py-32" data-section="why-choose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4 animate-slideup">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight animate-slideup">
              Why Choose Ark Care AFH?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slideup">
              We're committed to providing compassionate, high-quality care that promotes dignity and independence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
            {/* Benefit 1 */}
            <div className="group relative bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-xl dark:hover:shadow-xl dark:hover:shadow-primary/20 transition-all duration-300 overflow-hidden animate-slideup-delay-1">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 dark:bg-primary/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute top-6 right-6 text-5xl font-black text-primary/15 dark:text-primary/10">
                01
              </div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/30 dark:to-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-primary animate-icon-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  24/7 Professional Care
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our experienced staff provides round-the-clock support and personalized attention to meet your loved one's unique needs.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="group relative bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-xl dark:hover:shadow-xl dark:hover:shadow-primary/20 transition-all duration-300 overflow-hidden md:translate-y-6 animate-slideup-delay-2">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 dark:bg-primary/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute top-6 right-6 text-5xl font-black text-primary/15 dark:text-primary/10">
                02
              </div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/30 dark:to-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-primary animate-icon-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 9l4-4m0 0l4 4m-4-4v4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Home-Like Environment
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our residence provides a warm, welcoming home setting that promotes comfort, dignity, and a sense of belonging.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="group relative bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-xl dark:hover:shadow-xl dark:hover:shadow-primary/20 transition-all duration-300 overflow-hidden animate-slideup-delay-3">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 dark:bg-primary/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute top-6 right-6 text-5xl font-black text-primary/15 dark:text-primary/10">
                03
              </div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/30 dark:to-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-primary animate-icon-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Activity & Engagement
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We provide meaningful activities and social engagement to support physical and mental well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Comprehensive Care Services
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Ark Care AFH offers a complete range of services to support your loved one's health, safety, and quality of life.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground font-medium">Medication management with pharmacy oversight</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground font-medium">Assistance with daily living & hygiene</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground font-medium">Specialized support for mental health, dementia & developmental disabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground font-medium">Customized activities & meaningful day programs</span>
                </li>
              </ul>
              <Link
                href="/services"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                View All Services
              </Link>
            </div>

            {/* Placeholder for image */}
            <div className="bg-card rounded-lg h-80 border-2 border-dashed border-border flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-muted-foreground mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-muted-foreground">Image coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What People Are Saying
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real reviews from residents and their families about the care they receive at Ark Care AFH
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                text: "Ark Care AFH has been wonderful for my mother. She feels at home here, the staff treats her with genuine care and respect, and I feel confident knowing she's in good hands. The whole team goes above and beyond.",
                author: "Margaret S.",
                relation: "Daughter"
              },
              {
                text: "I moved here 6 months ago and it's been the best decision. The caregivers are patient and kind, the meals are delicious, and there's always something to do. I feel like part of a family here.",
                author: "Henry P.",
                relation: "Resident"
              },
              {
                text: "We can't thank Sarah and her team enough. The level of personalized attention my father receives is exceptional. They communicate with us regularly and truly care about his well-being.",
                author: "Jennifer K.",
                relation: "Daughter"
              },
              {
                text: "The staff here is professional, compassionate, and attentive. My wife receives excellent care for her specific needs, and I'm grateful for the peace of mind and support we receive.",
                author: "Robert M.",
                relation: "Spouse"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-sm border border-border p-8 hover:shadow-md transition-shadow"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.relation}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Want to hear more? View all testimonials from our community.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about Ark Care AFH
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is the admission process?",
                a: "The admission process begins with a tour of our facility and a consultation with our team. During this visit, we discuss your care needs, answer your questions, and determine if Ark Care AFH is the right fit. If both parties agree to move forward, we complete paperwork and schedule a start date."
              },
              {
                q: "What services are included in the care plan?",
                a: "Services include 24/7 professional care, medication management, personal care, meal preparation, laundry, housekeeping, activities, and transportation. We create customized care plans based on individual needs."
              },
              {
                q: "Can family members visit anytime?",
                a: "We have flexible visiting hours to accommodate family schedules. We encourage regular family involvement and communication. Please discuss visiting preferences during the admission process."
              },
              {
                q: "Are you licensed and regulated?",
                a: "Yes, we comply with all state and local regulations for adult family homes. Our owner holds necessary licenses and certifications."
              },
              {
                q: "What kinds of activities are available?",
                a: "We offer a variety of activities including games, crafts, outdoor outings, movies, reading, and social gatherings. Activities are tailored to individual interests and abilities."
              },
              {
                q: "What if I have concerns about the care?",
                a: "We take all concerns seriously. Please speak with our staff or owner directly. We're committed to addressing concerns promptly and working together for the best outcome."
              }
            ].map((item, idx) => (
              <details
                key={idx}
                className="bg-card rounded-lg border border-border p-6 hover:shadow-sm transition-shadow"
              >
                <summary className="cursor-pointer font-semibold text-foreground flex justify-between items-center">
                  <span>{item.q}</span>
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 ml-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </summary>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Have more questions? We're here to help!
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today to schedule a tour or discuss how Ark Care AFH can meet your loved one's care needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
