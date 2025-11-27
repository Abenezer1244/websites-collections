import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import { pageMetadata, generateWebPageSchema, generateBreadcrumbSchema, siteConfig } from '@/lib/seo'
import { ServicesHeroSection } from '@/components/services/ServicesHeroSection'
import { ServicesGridSection } from '@/components/services/ServicesGridSection'
import { AmenitiesSection } from '@/components/services/AmenitiesSection'
import { SpecializedServicesSection } from '@/components/services/SpecializedServicesSection'
import { CareApproachSection } from '@/components/services/CareApproachSection'

export const metadata: Metadata = {
  title: pageMetadata.services.title,
  description: pageMetadata.services.description,
  keywords: pageMetadata.services.keywords,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.name,
    title: pageMetadata.services.title,
    description: pageMetadata.services.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Ark Care AFH Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageMetadata.services.title,
    description: pageMetadata.services.description,
    images: [siteConfig.ogImage],
  },
}

export default function Services() {
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Services', url: `${siteConfig.url}/services` }
  ]

  const pageSchema = generateWebPageSchema(
    pageMetadata.services.title,
    pageMetadata.services.description,
    `${siteConfig.url}/services`
  )

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section - Modern Redesign */}
      <ServicesHeroSection />

      {/* Services Grid - Modern Redesign */}
      <ServicesGridSection />

      {/* Amenities Section - Modern Redesign */}
      <AmenitiesSection />

      {/* Specialized Services - Modern Redesign */}
      <SpecializedServicesSection />

      {/* Care Approach - Modern Redesign */}
      <CareApproachSection />
    </>
  )
}
