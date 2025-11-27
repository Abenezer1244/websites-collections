import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import { pageMetadata, generateWebPageSchema, generateBreadcrumbSchema, siteConfig } from '@/lib/seo'
import { AboutHeroSection } from '@/components/about/AboutHeroSection'
import { MissionVisionSection } from '@/components/about/MissionVisionSection'
import { OurStorySection } from '@/components/about/OurStorySection'
import { CoreValuesSection } from '@/components/about/CoreValuesSection'
import { TeamSection } from '@/components/about/TeamSection'

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

      {/* Hero Section - Modern Redesign */}
      <AboutHeroSection />

      {/* Mission & Vision - Modern Redesign */}
      <MissionVisionSection />

      {/* Our Story - Modern Redesign */}
      <OurStorySection />

      {/* Core Values - Modern Redesign */}
      <CoreValuesSection />

      {/* Our Team - Modern Redesign */}
      <TeamSection />
    </>
  )
}
