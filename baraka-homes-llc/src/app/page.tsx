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

      {/* FAQ Section - Modern Redesign */}
      <FAQSection />

      {/* CTA Section - Modern Redesign */}
      <CTASection />
    </>
  )
}
