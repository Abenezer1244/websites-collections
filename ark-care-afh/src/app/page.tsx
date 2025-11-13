import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedBlob, AnimatedBlobSecondary } from '@/components/AnimatedBlob'
import { JsonLd } from '@/components/JsonLd'
import { pageMetadata, generateWebPageSchema, generateBreadcrumbSchema, siteConfig } from '@/lib/seo'
import { TestimonialCarousel } from '@/components/TestimonialCarousel'
import { Accordion } from '@/components/ui/accordion'

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

      {/* Hero Section with Image Background - Full Screen Height */}
      <section className="relative overflow-hidden text-white min-h-screen flex items-center" style={{backgroundImage: 'url(/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
        {/* Image Background - Decorative */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{backgroundImage: 'url(/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}
          aria-hidden="true"
        />

        {/* Dark Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-black/40 z-5" />

        {/* Animated Background Orbs - Large and Vibrant */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-primary/60 to-primary/30 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-10" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-primary/50 to-primary/25 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-10" style={{animationDelay: '0.5s'}} />
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-gradient-to-br from-primary/50 to-primary/25 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-10" style={{animationDelay: '1s'}} />

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

      {/* Key Benefits Section - Brand New Design */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-white" data-section="why-choose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="mb-12 animate-slideup text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
              Why Choose Us
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight max-w-4xl mx-auto">
              Why Choose Ark Care AFH?
            </h2>
            <p className="text-xl text-slate-800 max-w-2xl mx-auto leading-relaxed">
              We're committed to providing compassionate, high-quality care that promotes dignity and independence.
            </p>
          </div>

          {/* Feature Grid - New Layout */}
          <div className="space-y-10">
            {/* Feature 1 - Left Layout */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-slideup-delay-1">
              <div className="order-2 md:order-1">
                <h3 className="text-4xl font-black text-slate-900 mb-5">
                  24/7 Professional Care
                </h3>
                <p className="text-lg text-slate-800 leading-relaxed mb-6">
                  Our experienced staff provides round-the-clock support and personalized attention to meet your loved one's unique needs. We maintain the highest standards of care quality.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-slate-900 font-medium">Licensed nursing professionals</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-slate-900 font-medium">Emergency response systems</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-slate-900 font-medium">Medication management</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative flex items-center justify-center min-h-80">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl blur-2xl" />
                  <div className="relative bg-gradient-to-br from-primary/15 to-transparent rounded-3xl border border-primary/20 w-full h-80 flex items-center justify-center overflow-hidden shadow-lg">
                    <Image
                      src="/care-247.png"
                      alt="24/7 Care"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 - Right Layout */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-slideup-delay-2">
              <div>
                <div className="relative flex items-center justify-center min-h-80">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl blur-2xl" />
                  <div className="relative bg-gradient-to-br from-primary/15 to-transparent rounded-3xl border border-primary/20 w-full h-80 flex items-center justify-center overflow-hidden shadow-lg">
                    <Image
                      src="/homy.webp"
                      alt="Warm & Welcoming Home"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-4xl font-black text-slate-900 mb-5">
                  Home-Like Environment
                </h3>
                <p className="text-lg text-slate-800 leading-relaxed mb-6">
                  Our residence provides a warm, welcoming home setting that promotes comfort, dignity, and a sense of belonging. Every detail is thoughtfully designed.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-slate-900 font-medium">Comfortable private rooms</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-slate-900 font-medium">Community gathering spaces</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-slate-900 font-medium">Beautiful outdoor areas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 - Center Layout */}
            <div className="animate-slideup-delay-3">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-4xl font-black text-slate-900 mb-5">
                    Activity & Engagement
                  </h3>
                  <p className="text-lg text-slate-800 leading-relaxed mb-6">
                    We provide meaningful activities and social engagement to support physical and mental well-being. Staying active is key to quality of life.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-slate-900 font-medium">Daily social activities</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-slate-900 font-medium">Recreational programs</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-slate-900 font-medium">Mental wellness support</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2">
                  <div className="relative flex items-center justify-center min-h-80">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl blur-2xl" />
                    <div className="relative bg-gradient-to-br from-primary/15 to-transparent rounded-3xl border border-primary/20 w-full h-80 flex items-center justify-center overflow-hidden shadow-lg">
                      <Image
                        src="/activity-engagement.png"
                        alt="Activity & Engagement"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                        style={{filter: 'hue-rotate(60deg)'}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="relative py-10 md:py-16 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Content */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Comprehensive Care Services
            </h2>
            <p className="text-slate-800 mb-8 text-lg max-w-2xl mx-auto">
              Ark Care AFH offers a complete range of services to support your loved one's health, safety, and quality of life.
            </p>
            <ul className="space-y-3 mb-8 inline-block text-left">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-900 font-medium">Medication management with pharmacy oversight</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-900 font-medium">Assistance with daily living & hygiene</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-900 font-medium">Specialized support for mental health, dementia & developmental disabilities</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-900 font-medium">Customized activities & Meaningful Day programs</span>
              </li>
            </ul>
            <div className="flex justify-center">
              <Link
                href="/services"
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Grid Cards */}
      <section className="relative py-8 md:py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-10 text-center animate-slideup">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
              Client Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
              Stories From Our Community
            </h2>
            <p className="text-base text-slate-800 max-w-2xl mx-auto">
              Hear directly from residents and families about their experiences at Ark Care AFH
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="animate-slideup-delay-1">
            <TestimonialCarousel
              testimonials={[
                {
                  quote: "Ark Care AFH has been wonderful for my mother. She feels at home here, the staff treats her with genuine care and respect.",
                  author: "Margaret S.",
                  role: "Daughter",
                  rating: 5
                },
                {
                  quote: "I moved here 6 months ago and it's been the best decision. The caregivers are patient and kind, and I feel like part of a family.",
                  author: "Henry P.",
                  role: "Resident",
                  rating: 5
                },
                {
                  quote: "The level of personalized attention my father receives is exceptional. They communicate regularly and truly care about his well-being.",
                  author: "Jennifer K.",
                  role: "Daughter",
                  rating: 5
                },
                {
                  quote: "Professional, compassionate, and attentive. My wife receives excellent care for her specific needs. Very grateful for the support.",
                  author: "Robert M.",
                  role: "Spouse",
                  rating: 5
                },
                {
                  quote: "The staff goes above and beyond. They listen to our concerns and always have time to chat. It's truly like a home.",
                  author: "Patricia L.",
                  role: "Family Member",
                  rating: 5
                },
                {
                  quote: "Best decision we made for our father's care. Safe, loving environment with activities and excellent medical management.",
                  author: "David T.",
                  role: "Son",
                  rating: 5
                }
              ]}
              autoPlayDelay={5000}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section - 2 Column Layout */}
      <section className="relative py-8 md:py-12 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-10 text-center animate-slideup">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
              Help & Support
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
              Common Questions Answered
            </h2>
            <p className="text-base text-slate-800 max-w-2xl mx-auto">
              Get answers to help you make the best decision for your loved one
            </p>
          </div>

          {/* Accordion FAQ */}
          <div className="animate-slideup-delay-1 max-w-3xl mx-auto">
            <Accordion
              items={[
                {
                  id: "admission",
                  title: "What is the admission process?",
                  content: "We begin with a tour of our facility and a consultation to discuss care needs. We answer all your questions and determine the best fit for your loved one."
                },
                {
                  id: "services",
                  title: "What services are included?",
                  content: "Our comprehensive services include 24/7 professional care, medication management, personal care, meal preparation, laundry, activities, and transportation."
                },
                {
                  id: "visits",
                  title: "Can family visit anytime?",
                  content: "We have flexible visiting hours to accommodate family schedules. Regular family involvement is encouraged and we maintain open communication."
                },
                {
                  id: "licensed",
                  title: "Are you licensed?",
                  content: "Yes, we fully comply with all state and local regulations for adult family homes. Our owner holds all necessary licenses and certifications."
                },
                {
                  id: "activities",
                  title: "What activities are offered?",
                  content: "We provide games, crafts, outdoor outings, movies, reading, and social gatherings. All activities are tailored to individual interests and abilities."
                },
                {
                  id: "concerns",
                  title: "How do we handle concerns?",
                  content: "We take all concerns seriously and address them promptly. Please speak with our staff directly - we're committed to working together for the best outcome."
                }
              ]}
              allowMultiple={false}
            />
          </div>

          {/* CTA Box */}
          <div className="mt-10 text-center animate-slideup-delay-2">
            <div className="bg-gradient-to-r from-primary/20 to-primary/20 rounded-2xl border border-primary/40 p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Didn't find your answer?
              </h3>
              <p className="text-slate-800 mb-8 max-w-xl mx-auto text-lg">
                Our caring team is here to answer any questions and help you find the right care solution.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Hero Style */}
      <section className="relative py-8 md:py-12 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-slideup mb-10">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
              Take Action Today
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
              Ready to Give Your Loved One the Care They Deserve?
            </h2>
            <p className="text-base text-slate-800 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ark Care AFH offers the compassionate, professional care your family member needs. Take the first step today—schedule your tour.
            </p>

            {/* Main CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-primary text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 shadow-lg hover:scale-105 mb-8"
            >
              Schedule Your Tour Now
            </Link>
          </div>

          {/* Three Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 animate-slideup-delay-1">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-500" />
              <div className="relative bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Expert Care Team</h3>
                <p className="text-sm text-slate-800">
                  Licensed professionals with years of experience in compassionate care and specialized support.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-500" />
              <div className="relative bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Home-Like Environment</h3>
                <p className="text-sm text-slate-800">
                  A warm, welcoming space where residents feel safe, comfortable, and genuinely cared for.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-500" />
              <div className="relative bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Personalized Care Plans</h3>
                <p className="text-sm text-slate-800">
                  Customized services tailored to each resident's unique needs, preferences, and health requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA Row */}
          <div className="text-center animate-slideup-delay-2">
            <p className="text-slate-800 mb-4 text-sm">
              Have questions? Contact us anytime.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300"
              >
                Contact Information
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary/5 transition-all duration-300"
              >
                Learn About Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
