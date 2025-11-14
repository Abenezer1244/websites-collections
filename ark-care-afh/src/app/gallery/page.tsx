import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import { pageMetadata, generateWebPageSchema, generateBreadcrumbSchema, siteConfig } from '@/lib/seo'
import { GalleryClient } from './GalleryClient'
import { GalleryHeroSection } from '@/components/gallery/GalleryHeroSection'
import { GalleryCTASection } from '@/components/gallery/GalleryCTASection'

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
  
  // Activity Gallery items - add image paths to /public/gallery/ when photos are available
  const activityItems = [
    { id: 1, title: "Barbecues & Picnics", image: "/activity-engagement.png", alt: "Residents enjoying outdoor barbecues and picnics" },
    { id: 2, title: "Bible Study Groups", image: "/comprehensive-care.png", alt: "Residents participating in Bible study groups" },
    { id: 3, title: "Birthday Celebrations", image: "/care-247.png", alt: "Birthday celebrations for residents" },
    { id: 4, title: "Board & Card Games", image: "/activity-engagement.png", alt: "Residents playing board and card games" },
    { id: 5, title: "Arts & Crafts", image: "/comprehensive-care.png", alt: "Residents engaged in arts and crafts activities" },
    { id: 6, title: "Cooking Activities", image: "/care-247.png", alt: "Residents participating in cooking activities" },
    { id: 7, title: "Holiday Events", image: "/activity-engagement.png", alt: "Holiday celebrations and events" },
    { id: 8, title: "Movie Nights", image: "/comprehensive-care.png", alt: "Residents enjoying movie nights together" },
    { id: 9, title: "Music & Entertainment", image: "/care-247.png", alt: "Music and entertainment activities" },
    { id: 10, title: "Puzzle Activities", image: "/activity-engagement.png", alt: "Residents working on puzzles" },
    { id: 11, title: "Exercise & Wellness", image: "/comprehensive-care.png", alt: "Exercise and wellness activities" },
    { id: 12, title: "Tea Time & Social Events", image: "/care-247.png", alt: "Tea time and social gathering events" },
  ]

  // Full House Tour Gallery items
  const houseTourItems = [
    { id: 101, title: "Living Room", image: "/homy.webp", alt: "Comfortable living room with seating area" },
    { id: 102, title: "Bedroom", image: "/elderly-care-facilities.jpg", alt: "Cozy bedroom with comfortable furnishings" },
    { id: 103, title: "Kitchen", image: "/homy.webp", alt: "Well-equipped kitchen for meal preparation" },
    { id: 104, title: "Dining Room", image: "/elderly-care-facilities.jpg", alt: "Spacious dining room for meals" },
    { id: 105, title: "Backyard", image: "/activity-engagement.png", alt: "Beautiful backyard and outdoor space" },
    { id: 106, title: "Bathroom", image: "/homy.webp", alt: "Accessible bathroom facilities" },
    { id: 107, title: "Common Area", image: "/elderly-care-facilities.jpg", alt: "Common area for socializing" },
    { id: 108, title: "Garden", image: "/activity-engagement.png", alt: "Peaceful garden area" },
    { id: 109, title: "Hallway", image: "/homy.webp", alt: "Wide, accessible hallway" },
    { id: 110, title: "Front Entrance", image: "/elderly-care-facilities.jpg", alt: "Welcoming front entrance" },
  ]

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section - Modern Redesign */}
      <GalleryHeroSection />

      {/* Full House Tour Section */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Facility Tour</span>
              <div className="mt-2 h-1 w-20 bg-primary mx-auto" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Full House Tour
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Take a virtual tour of our comfortable, home-like facility. See our spacious rooms, common areas, and beautiful outdoor spaces.
            </p>
          </div>
          <GalleryClient items={houseTourItems} />
        </div>
      </section>

      {/* Activities Gallery Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/15 via-slate-100 to-primary/25 overflow-hidden">
        {/* Rich Colorful Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-slate-100 to-primary/30" />
          
          {/* Animated orbs */}
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-br from-primary/25 to-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 to-slate-200/60 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />
          <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}} />
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-8" style={{
            backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(0,0,0,0.03) 50%, transparent 70%), linear-gradient(-45deg, transparent 30%, rgba(0,0,0,0.03) 50%, transparent 70%)',
            backgroundSize: '50px 50px'
          }} />
          
          {/* Radial accent */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_70%)] opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Activities</span>
              <div className="mt-2 h-1 w-20 bg-primary mx-auto" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Our Activities
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              We offer a variety of engaging activities designed to promote physical wellness, mental stimulation, and social connection for all our residents.
            </p>
          </div>
          <GalleryClient items={activityItems} />
        </div>
      </section>

      {/* CTA Section - Modern Redesign */}
      <GalleryCTASection />
    </>
  )
}
