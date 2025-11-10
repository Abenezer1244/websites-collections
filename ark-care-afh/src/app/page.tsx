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

      {/* Testimonials Section - Modern Auto-Scrolling Carousel */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute -top-32 -right-40 w-[420px] h-[420px] bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.3s'}} />
        <div className="absolute -bottom-32 -left-40 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/20 to-cyan-400/8 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.8s'}} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 text-center animate-slideup">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-6">
              Client Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              What People Are Saying
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Real stories from residents, families, and caregivers who trust Ark Care AFH
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div className="carousel-slide flex">
              {[
                {
                  text: "Ark Care AFH has been wonderful for my mother. She feels at home here, the staff treats her with genuine care and respect, and I feel confident knowing she's in good hands. The whole team goes above and beyond.",
                  author: "Margaret S.",
                  relation: "Daughter",
                  type: "Family"
                },
                {
                  text: "I moved here 6 months ago and it's been the best decision. The caregivers are patient and kind, the meals are delicious, and there's always something to do. I feel like part of a family here.",
                  author: "Henry P.",
                  relation: "Resident",
                  type: "Resident"
                },
                {
                  text: "We can't thank Sarah and her team enough. The level of personalized attention my father receives is exceptional. They communicate with us regularly and truly care about his well-being.",
                  author: "Jennifer K.",
                  relation: "Daughter",
                  type: "Family"
                },
                {
                  text: "The staff here is professional, compassionate, and attentive. My wife receives excellent care for her specific needs, and I'm grateful for the peace of mind and support we receive.",
                  author: "Robert M.",
                  relation: "Spouse",
                  type: "Family"
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4 md:px-8"
                >
                  <div className="group bg-gradient-to-br from-slate-700/80 to-slate-800/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-600/40 p-8 md:p-12 h-full hover:shadow-2xl transition-all duration-500 hover:border-primary/40">
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-cyan-400 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Badge & Stars Row */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current transition-transform group-hover:scale-110"
                            style={{transitionDelay: `${i * 50}ms`}}
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        testimonial.type === 'Resident'
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                          : 'bg-primary/20 text-primary border border-primary/30'
                      }`}>
                        {testimonial.type}
                      </span>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-lg text-slate-100 mb-8 leading-relaxed font-medium">
                      "{testimonial.text}"
                    </p>

                    {/* Author Section */}
                    <div className="border-t border-slate-600/40 pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-white text-lg">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-primary/80 font-medium">
                            {testimonial.relation}
                          </p>
                        </div>
                        <svg className="w-5 h-5 text-primary opacity-40" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Gradient Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-slate-900 via-slate-900/50 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-slate-900 via-slate-900/50 to-transparent pointer-events-none z-10" />
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {[0, 1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="group/indicator cursor-pointer"
              >
                <div className={`h-2 rounded-full transition-all duration-500 ${
                  i === 0 ? 'w-8 bg-primary' : 'w-2 bg-slate-500 group-hover/indicator:bg-primary/60'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Modern Accordion Design */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 left-0 w-[380px] h-[380px] bg-gradient-to-br from-primary/25 to-primary/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.1s'}} />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-gradient-to-br from-cyan-400/25 to-cyan-500/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.6s'}} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 text-center animate-slideup">
            <span className="inline-block px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary text-sm font-semibold rounded-full mb-6">
              Questions?
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about Ark Care AFH
            </p>
          </div>

          <div className="space-y-4 animate-slideup-delay-1">
            {[
              {
                q: "What is the admission process?",
                a: "The admission process begins with a tour of our facility and a consultation with our team. During this visit, we discuss your care needs, answer your questions, and determine if Ark Care AFH is the right fit. If both parties agree to move forward, we complete paperwork and schedule a start date.",
                icon: "📋"
              },
              {
                q: "What services are included in the care plan?",
                a: "Services include 24/7 professional care, medication management, personal care, meal preparation, laundry, housekeeping, activities, and transportation. We create customized care plans based on individual needs.",
                icon: "🏥"
              },
              {
                q: "Can family members visit anytime?",
                a: "We have flexible visiting hours to accommodate family schedules. We encourage regular family involvement and communication. Please discuss visiting preferences during the admission process.",
                icon: "👨‍👩‍👧"
              },
              {
                q: "Are you licensed and regulated?",
                a: "Yes, we comply with all state and local regulations for adult family homes. Our owner holds necessary licenses and certifications.",
                icon: "✅"
              },
              {
                q: "What kinds of activities are available?",
                a: "We offer a variety of activities including games, crafts, outdoor outings, movies, reading, and social gatherings. Activities are tailored to individual interests and abilities.",
                icon: "🎨"
              },
              {
                q: "What if I have concerns about the care?",
                a: "We take all concerns seriously. Please speak with our staff or owner directly. We're committed to addressing concerns promptly and working together for the best outcome.",
                icon: "💬"
              }
            ].map((item, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-2xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800/50 hover:shadow-lg transition-all duration-300 overflow-hidden open:shadow-lg open:border-primary/20"
              >
                <summary className="cursor-pointer p-6 md:p-8 flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center gap-4 flex-1">
                    <span className="text-2xl md:text-3xl">{item.icon}</span>
                    <span className="font-bold text-lg text-foreground group-open:text-primary transition-colors">
                      {item.q}
                    </span>
                  </div>
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-slate-200 dark:border-slate-700 bg-gradient-to-b from-slate-50/50 to-transparent dark:from-slate-900/20">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-16 text-center animate-slideup-delay-2">
            <div className="bg-gradient-to-r from-primary/5 to-cyan-400/5 dark:from-primary/10 dark:to-cyan-400/10 rounded-2xl border border-primary/20 p-8 md:p-12">
              <p className="text-lg text-foreground font-semibold mb-4">
                Still have questions?
              </p>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Our caring team is ready to answer any questions and help you find the perfect care solution for your loved one.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl hover:scale-105 duration-300"
              >
                Get in Touch Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Engagement */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-cyan-400/5" />

        {/* Animated Background Orbs */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.2s'}} />
        <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] bg-gradient-to-br from-cyan-400/15 to-cyan-500/5 rounded-full blur-3xl animate-pulse-glow pointer-events-none z-0" style={{animationDelay: '0.7s'}} />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slideup">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                Next Steps
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                Ready to Give Your Loved One the Care They Deserve?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join families who trust Ark Care AFH for compassionate, personalized care. Schedule a tour today and see why our residents and families choose us.
              </p>

              {/* Benefit List */}
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground font-medium">Personalized tour of our facility</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground font-medium">One-on-one consultation with our team</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground font-medium">Customized care plan discussion</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  Schedule a Tour
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary/5 transition-all duration-300"
                >
                  Ask a Question
                </Link>
              </div>
            </div>

            {/* Right Visual Element */}
            <div className="relative animate-slideup-delay-1">
              <div className="relative bg-gradient-to-br from-primary/10 to-cyan-400/10 rounded-3xl p-8 md:p-12 border border-primary/20 shadow-xl">
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                </div>

                <div className="relative z-10">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur rounded-2xl p-6 text-center border border-primary/10">
                      <div className="text-3xl font-black text-primary mb-2">24/7</div>
                      <p className="text-sm text-muted-foreground font-medium">Professional Care</p>
                    </div>
                    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur rounded-2xl p-6 text-center border border-primary/10">
                      <div className="text-3xl font-black text-primary mb-2">10+</div>
                      <p className="text-sm text-muted-foreground font-medium">Years Experience</p>
                    </div>
                    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur rounded-2xl p-6 text-center border border-primary/10">
                      <div className="text-3xl font-black text-cyan-500 mb-2">100%</div>
                      <p className="text-sm text-muted-foreground font-medium">Family Satisfaction</p>
                    </div>
                    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur rounded-2xl p-6 text-center border border-primary/10">
                      <div className="text-3xl font-black text-cyan-500 mb-2">50+</div>
                      <p className="text-sm text-muted-foreground font-medium">Care Members</p>
                    </div>
                  </div>

                  {/* Trust Badge */}
                  <div className="bg-gradient-to-r from-primary/20 to-cyan-400/20 rounded-2xl p-6 border border-primary/30 text-center">
                    <p className="text-sm text-muted-foreground font-medium mb-2">
                      ✨ Licensed & Regulated
                    </p>
                    <p className="text-foreground font-bold text-sm">
                      State-Compliant Adult Family Home
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
