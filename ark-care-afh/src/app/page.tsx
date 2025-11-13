import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { JsonLd } from '@/components/JsonLd'
import { pageMetadata, generateWebPageSchema, generateBreadcrumbSchema, siteConfig } from '@/lib/seo'
import { TestimonialCarousel } from '@/components/TestimonialCarousel'
import { Accordion } from '@/components/ui/accordion'
import { WhyChooseSection } from '@/components/WhyChooseSection'
import { HeroSection } from '@/components/HeroSection'
import { ServicesOverviewSection } from '@/components/ServicesOverviewSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { FAQSection } from '@/components/FAQSection'
import { CTASection } from '@/components/CTASection'

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

      {/* Hero Section - Modern Redesign */}
      <HeroSection />

      {/* Why Choose Us Section - Completely Redesigned */}
      <WhyChooseSection />

      {/* Services Overview Section - Modern Redesign */}
      <ServicesOverviewSection />

      {/* Testimonials Section - Modern Redesign */}
      <TestimonialsSection />

      {/* FAQ Section - 2 Column Layout */}
      <section className="relative py-8 md:py-12 bg-gradient-to-br from-primary/6 via-slate-50 to-white overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.3s'}} />
        <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.5s'}} />
        {/* More visible wave pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_transparent_0%,_rgba(0,0,0,0.04)_50%,_transparent_100%)] opacity-60 pointer-events-none z-0" style={{backgroundSize: '200% 100%', backgroundPosition: '0% 0%', animation: 'wave 20s ease-in-out infinite'}} />

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
      <section className="relative py-8 md:py-12 bg-gradient-to-br from-primary/12 via-white to-slate-100 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.1s'}} />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.5s'}} />
        {/* More visible radial spotlight effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] opacity-12 pointer-events-none z-0" />
        {/* More visible grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,_transparent_1px),linear-gradient(90deg,_rgba(0,0,0,0.03)_1px,_transparent_1px)] bg-[size:50px_50px] opacity-50 pointer-events-none z-0" />

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
