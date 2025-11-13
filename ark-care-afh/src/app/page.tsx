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

      {/* Key Benefits Section - Completely Redesigned */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white" data-section="why-choose" style={{overflow: 'visible'}}>
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" style={{overflow: 'hidden'}}>
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '0.4s'}} />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '0.8s'}} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{overflow: 'visible'}}>
          {/* Header Section */}
          <div className="text-center mb-16 animate-slideup">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-semibold uppercase tracking-wide">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Why Choose Ark Care AFH?
            </h2>
            <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Experience the difference of compassionate, personalized care in a warm, home-like environment
            </p>
          </div>

          {/* Main Features Grid - Modern Card Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 relative z-10 py-4" style={{overflow: 'visible'}}>
            {/* Feature Card 1 */}
            <div className="group relative animate-slideup-delay-1 z-20" style={{overflow: 'visible', transform: 'translateY(0)', transition: 'transform 0.3s ease'}} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div className="relative h-full bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-300 overflow-hidden">
                {/* Decorative gradient corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors">
                  24/7 Professional Care
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Round-the-clock support from licensed professionals ensuring safety and comfort at all times.
                </p>
                
                {/* Feature List */}
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 text-sm">Licensed nursing professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 text-sm">Emergency response systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 text-sm">Medication management</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="group relative animate-slideup-delay-2 z-20" style={{overflow: 'visible', transform: 'translateY(0)', transition: 'transform 0.3s ease'}} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div className="relative h-full bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-300 overflow-hidden">
                {/* Decorative gradient corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors">
                  Home-Like Environment
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  A warm, welcoming setting designed to feel like home while providing professional care.
                </p>
                
                {/* Feature List */}
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 text-sm">Comfortable private rooms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 text-sm">Community gathering spaces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 text-sm">Beautiful outdoor areas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="group relative animate-slideup-delay-3 z-20" style={{overflow: 'visible', transform: 'translateY(0)', transition: 'transform 0.3s ease'}} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div className="relative h-full bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-300 overflow-hidden">
                {/* Decorative gradient corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors">
                  Activity & Engagement
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Meaningful activities and social engagement to support physical and mental well-being.
                </p>
                
                {/* Feature List */}
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 text-sm">Daily social activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 text-sm">Recreational programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 text-sm">Mental wellness support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center animate-slideup-delay-3">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl border border-primary/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-slate-900">Ready to learn more?</p>
                  <p className="text-xs text-slate-600">Schedule a tour and see our facility</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Schedule Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="relative py-10 md:py-16 bg-gradient-to-br from-primary/8 via-white to-slate-100 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-br from-primary/25 to-primary/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.4s'}} />
        <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-gradient-to-br from-primary/25 to-primary/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.9s'}} />
        {/* Visible diagonal stripes effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/8 to-transparent opacity-50 pointer-events-none z-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)'}} />

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
      <section className="relative py-8 md:py-12 bg-gradient-to-br from-slate-100 via-white to-primary/12 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.2s'}} />
        <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.6s'}} />
        {/* More visible mesh gradient effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary)_0%,_transparent_60%)] opacity-20 pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--primary)_0%,_transparent_60%)] opacity-20 pointer-events-none z-0" />

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
