import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatedBlob, AnimatedBlobSecondary } from '@/components/AnimatedBlob'
import { JsonLd } from '@/components/JsonLd'
import { pageMetadata, generateWebPageSchema, generateBreadcrumbSchema, siteConfig } from '@/lib/seo'

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6">
                      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                        <svg
                          className="w-10 h-10 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="text-xs text-slate-600 text-center font-medium">Photo Coming Soon</p>
                    </div>
                  )}
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-4 group-hover:bg-primary/5 transition-colors">
                  <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
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
