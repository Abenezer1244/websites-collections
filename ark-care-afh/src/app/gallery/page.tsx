import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedBlob, AnimatedBlobSecondary } from '@/components/AnimatedBlob'
import { JsonLd } from '@/components/JsonLd'
import { pageMetadata, generateWebPageSchema, generateBreadcrumbSchema, siteConfig } from '@/lib/seo'
import { GalleryClient } from './GalleryClient'

export const metadata: Metadata = {
  title: pageMetadata.gallery.title,
  description: pageMetadata.gallery.description,
  keywords: pageMetadata.gallery.keywords,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteConfig.url}/gallery`,
    siteName: siteConfig.name,
    title: pageMetadata.gallery.title,
    description: pageMetadata.gallery.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Ark Care AFH Gallery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageMetadata.gallery.title,
    description: pageMetadata.gallery.description,
    images: [siteConfig.ogImage],
  },
}

export default function Gallery() {
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Gallery', url: `${siteConfig.url}/gallery` }
  ]

  const pageSchema = generateWebPageSchema(
    pageMetadata.gallery.title,
    pageMetadata.gallery.description,
    `${siteConfig.url}/gallery`
  )

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)
  
  // Gallery items - add image paths to /public/gallery/ when photos are available
  // Example: { id: 1, title: "Barbecues & Picnics", image: "/gallery/barbecues.jpg" }
  const galleryItems = [
    { id: 1, title: "Barbecues & Picnics", image: null, alt: "Residents enjoying outdoor barbecues and picnics" },
    { id: 2, title: "Bible Study Groups", image: null, alt: "Residents participating in Bible study groups" },
    { id: 3, title: "Birthday Celebrations", image: null, alt: "Birthday celebrations for residents" },
    { id: 4, title: "Board & Card Games", image: null, alt: "Residents playing board and card games" },
    { id: 5, title: "Arts & Crafts", image: null, alt: "Residents engaged in arts and crafts activities" },
    { id: 6, title: "Cooking Activities", image: null, alt: "Residents participating in cooking activities" },
    { id: 7, title: "Holiday Events", image: null, alt: "Holiday celebrations and events" },
    { id: 8, title: "Movie Nights", image: null, alt: "Residents enjoying movie nights together" },
    { id: 9, title: "Music & Entertainment", image: null, alt: "Music and entertainment activities" },
    { id: 10, title: "Puzzle Activities", image: null, alt: "Residents working on puzzles" },
    { id: 11, title: "Exercise & Wellness", image: null, alt: "Exercise and wellness activities" },
    { id: 12, title: "Tea Time & Social Events", image: null, alt: "Tea time and social gathering events" },
  ]

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/90 to-primary/70 text-white pt-32 md:pt-40 pb-16">
        <AnimatedBlob position="top-right" size="lg" opacity="medium" />
        <AnimatedBlobSecondary position="bottom-left" size="md" opacity="light" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">Gallery</h1>
          <p className="text-lg mt-4 opacity-90 max-w-2xl">
            Take a tour of Ark Care AFH and see our comfortable, welcoming home environment
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Our Activities
          </h2>
          <p className="text-lg text-slate-800 mb-12 text-center max-w-2xl mx-auto">
            We offer a variety of engaging activities designed to promote physical wellness, mental stimulation, and social connection for all our residents.
          </p>
          <GalleryClient items={galleryItems} />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Schedule a Tour
          </h2>
          <p className="text-lg text-slate-800 mb-8">
            We'd love to show you around Ark Care AFH! Contact us to schedule a personalized tour of our facility and meet our caring staff.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Schedule Your Tour
          </Link>
        </div>
      </section>
    </>
  )
}
