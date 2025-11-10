import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
        <div className="absolute inset-0 bg-black/40 z-5" />

        {/* Animated Background Orbs - Large and Vibrant */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-primary/60 to-primary/30 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-10" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/50 to-cyan-500/25 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-10" style={{animationDelay: '0.5s'}} />
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-gradient-to-br from-blue-500/50 to-blue-400/25 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-10" style={{animationDelay: '1s'}} />

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
      <section className="relative py-20 md:py-40 overflow-hidden" data-section="why-choose">
        {/* Animated Background Orbs */}
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.2s'}} />
        <div className="absolute -bottom-32 -right-32 w-[350px] h-[350px] bg-gradient-to-br from-cyan-400/25 to-cyan-500/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.7s'}} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="mb-24 animate-slideup text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary text-sm font-semibold rounded-full mb-6">
              Why Choose Us
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-8 leading-tight max-w-4xl mx-auto">
              Why Choose Ark Care AFH?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're committed to providing compassionate, high-quality care that promotes dignity and independence.
            </p>
          </div>

          {/* Feature Grid - New Layout */}
          <div className="space-y-16">
            {/* Feature 1 - Left Layout */}
            <div className="grid md:grid-cols-2 gap-12 items-center animate-slideup-delay-1">
              <div className="order-2 md:order-1">
                <h3 className="text-4xl font-black text-foreground mb-5">
                  24/7 Professional Care
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our experienced staff provides round-the-clock support and personalized attention to meet your loved one's unique needs. We maintain the highest standards of care quality.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground font-medium">Licensed nursing professionals</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground font-medium">Emergency response systems</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground font-medium">Medication management</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative flex items-center justify-center min-h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl blur-2xl" />
                  <div className="relative bg-gradient-to-br from-primary/15 to-transparent rounded-3xl border border-primary/20 dark:border-primary/10 w-full h-96 flex items-center justify-center overflow-hidden">
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
            <div className="grid md:grid-cols-2 gap-12 items-center animate-slideup-delay-2">
              <div>
                <div className="relative flex items-center justify-center min-h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl blur-2xl" />
                  <div className="relative bg-gradient-to-br from-primary/15 to-transparent rounded-3xl border border-primary/20 dark:border-primary/10 w-full h-96 flex items-center justify-center overflow-hidden">
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
                <h3 className="text-4xl font-black text-foreground mb-5">
                  Home-Like Environment
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our residence provides a warm, welcoming home setting that promotes comfort, dignity, and a sense of belonging. Every detail is thoughtfully designed.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground font-medium">Comfortable private rooms</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground font-medium">Community gathering spaces</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground font-medium">Beautiful outdoor areas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 - Center Layout */}
            <div className="animate-slideup-delay-3">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl font-black text-foreground mb-5">
                    Activity & Engagement
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    We provide meaningful activities and social engagement to support physical and mental well-being. Staying active is key to quality of life.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground font-medium">Daily social activities</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground font-medium">Recreational programs</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground font-medium">Mental wellness support</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2">
                  <div className="relative flex items-center justify-center min-h-96">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl blur-2xl" />
                    <div className="relative bg-gradient-to-br from-primary/15 to-transparent rounded-3xl border border-primary/20 dark:border-primary/10 w-full h-96 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/activity-engagement.png"
                        alt="Activity & Engagement"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
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
      <section className="relative py-16 md:py-24 bg-muted overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-br from-blue-400/25 to-blue-500/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.4s'}} />
        <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-gradient-to-br from-primary/25 to-primary/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.9s'}} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Content */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Comprehensive Care Services
            </h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Ark Care AFH offers a complete range of services to support your loved one's health, safety, and quality of life.
            </p>
            <ul className="space-y-3 mb-8 inline-block text-left">
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
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.2s'}} />
        <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] bg-gradient-to-br from-cyan-400/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.6s'}} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 text-center animate-slideup">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
              Client Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Stories From Our Community
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear directly from residents and families about their experiences at Ark Care AFH
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 animate-slideup-delay-1">
            {[
              {
                text: "Ark Care AFH has been wonderful for my mother. She feels at home here, the staff treats her with genuine care and respect.",
                author: "Margaret S.",
                relation: "Daughter",
                initials: "MS",
                color: "from-primary to-cyan-400"
              },
              {
                text: "I moved here 6 months ago and it's been the best decision. The caregivers are patient and kind, and I feel like part of a family.",
                author: "Henry P.",
                relation: "Resident",
                initials: "HP",
                color: "from-cyan-400 to-blue-500"
              },
              {
                text: "The level of personalized attention my father receives is exceptional. They communicate regularly and truly care about his well-being.",
                author: "Jennifer K.",
                relation: "Daughter",
                initials: "JK",
                color: "from-blue-500 to-indigo-500"
              },
              {
                text: "Professional, compassionate, and attentive. My wife receives excellent care for her specific needs. Very grateful for the support.",
                author: "Robert M.",
                relation: "Spouse",
                initials: "RM",
                color: "from-indigo-500 to-purple-500"
              },
              {
                text: "The staff goes above and beyond. They listen to our concerns and always have time to chat. It's truly like a home.",
                author: "Patricia L.",
                relation: "Family Member",
                initials: "PL",
                color: "from-purple-500 to-pink-500"
              },
              {
                text: "Best decision we made for our father's care. Safe, loving environment with activities and excellent medical management.",
                author: "David T.",
                relation: "Son",
                initials: "DT",
                color: "from-pink-500 to-primary"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 h-full hover:shadow-xl transition-all duration-300 hover:border-primary/40 flex flex-col relative overflow-hidden">
                  {/* Gradient accent top */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Avatar Circle */}
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    {testimonial.initials}
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                    <p className="font-bold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {testimonial.relation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - 2 Column Layout */}
      <section className="relative py-16 md:py-24 bg-slate-900 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/20 to-cyan-400/5 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.3s'}} />
        <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.5s'}} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 text-center animate-slideup">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-6">
              Help & Support
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Common Questions Answered
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Get answers to help you make the best decision for your loved one
            </p>
          </div>

          {/* 2 Column FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-8 animate-slideup-delay-1">
            {[
              {
                q: "What is the admission process?",
                a: "We begin with a tour of our facility and a consultation to discuss care needs. We answer all your questions and determine the best fit for your loved one."
              },
              {
                q: "What services are included?",
                a: "Our comprehensive services include 24/7 professional care, medication management, personal care, meal preparation, laundry, activities, and transportation."
              },
              {
                q: "Can family visit anytime?",
                a: "We have flexible visiting hours to accommodate family schedules. Regular family involvement is encouraged and we maintain open communication."
              },
              {
                q: "Are you licensed?",
                a: "Yes, we fully comply with all state and local regulations for adult family homes. Our owner holds all necessary licenses and certifications."
              },
              {
                q: "What activities are offered?",
                a: "We provide games, crafts, outdoor outings, movies, reading, and social gatherings. All activities are tailored to individual interests and abilities."
              },
              {
                q: "How do we handle concerns?",
                a: "We take all concerns seriously and address them promptly. Please speak with our staff directly - we're committed to working together for the best outcome."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 h-full hover:border-primary/40 transition-all duration-300 hover:shadow-2xl">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-cyan-400 text-slate-900 font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                    {idx + 1}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {item.q}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {item.a}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 h-1 w-12 bg-gradient-to-r from-primary to-cyan-400 rounded-full group-hover:w-full transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 text-center animate-slideup-delay-2">
            <div className="bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-2xl border border-primary/40 p-10 md:p-14">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Didn't find your answer?
              </h3>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto text-lg">
                Our caring team is here to answer any questions and help you find the right care solution.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
              >
                Contact Us Today
                <svg className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Hero Style */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-primary/5 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.1s'}} />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/15 to-cyan-500/5 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.5s'}} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-slideup mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
              Take Action Today
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6 leading-tight">
              Ready to Give Your Loved One the Care They Deserve?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Ark Care AFH offers the compassionate, professional care your family member needs. Take the first step today—schedule your tour.
            </p>

            {/* Main CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary to-cyan-500 text-white font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300 shadow-lg hover:scale-105 mb-12 group"
            >
              Schedule Your Tour Now
              <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Three Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 animate-slideup-delay-1">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyan-400 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-500" />
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">👥</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Expert Care Team</h3>
                <p className="text-muted-foreground">
                  Licensed professionals with years of experience in compassionate care and specialized support.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-500" />
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🏡</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Home-Like Environment</h3>
                <p className="text-muted-foreground">
                  A warm, welcoming space where residents feel safe, comfortable, and genuinely cared for.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-primary rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-500" />
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">💙</div>
                <h3 className="text-xl font-bold text-foreground mb-3">Personalized Care Plans</h3>
                <p className="text-muted-foreground">
                  Customized services tailored to each resident's unique needs, preferences, and health requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA Row */}
          <div className="text-center animate-slideup-delay-2">
            <p className="text-muted-foreground mb-6 text-lg">
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
