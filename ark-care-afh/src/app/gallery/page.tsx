import type { Metadata } from 'next'
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
  const galleryPlaceholders = [
    { id: 1, title: "Barbecues & Picnics" },
    { id: 2, title: "Bible Study Groups" },
    { id: 3, title: "Birthday Celebrations" },
    { id: 4, title: "Board & Card Games" },
    { id: 5, title: "Arts & Crafts" },
    { id: 6, title: "Cooking Activities" },
    { id: 7, title: "Holiday Events" },
    { id: 8, title: "Movie Nights" },
    { id: 9, title: "Music & Entertainment" },
    { id: 10, title: "Puzzle Activities" },
    { id: 11, title: "Exercise & Wellness" },
    { id: 12, title: "Tea Time & Social Events" },
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
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 text-center">
            Our Activities
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-12 text-center max-w-2xl mx-auto">
            We offer a variety of engaging activities designed to promote physical wellness, mental stimulation, and social connection for all our residents.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPlaceholders.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white dark:bg-slate-900 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="aspect-square bg-white dark:bg-black flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-slate-700 dark:text-slate-300"
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
                <div className="p-4 group-hover:bg-primary/5 transition-colors">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Schedule a Tour
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
            We'd love to show you around Ark Care AFH! Contact us to schedule a personalized tour of our facility and meet our caring staff.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Schedule Your Tour
          </a>
        </div>
      </section>
    </>
  )
}
