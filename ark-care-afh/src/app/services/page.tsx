import type { Metadata } from 'next'
import { AnimatedBlob, AnimatedBlobSecondary } from '@/components/AnimatedBlob'
import { JsonLd } from '@/components/JsonLd'
import { pageMetadata, generateWebPageSchema, generateBreadcrumbSchema, siteConfig } from '@/lib/seo'

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
  const services = [
    {
      title: "24/7 Professional Care",
      description: "Round-the-clock care and support from trained staff members available at all times.",
      features: ["Medication management", "Health monitoring", "Assistance as needed", "Emergency response"]
    },
    {
      title: "Medication Management",
      description: "Professional medication administration and management to ensure proper care.",
      features: ["Medication reminders", "Prescription coordination", "Health records tracking", "Communication with healthcare providers"]
    },
    {
      title: "Personal Care & Hygiene",
      description: "Personalized assistance with daily living activities and personal hygiene.",
      features: ["Bathing assistance", "Dressing help", "Grooming support", "Incontinence management"]
    },
    {
      title: "Meal Preparation & Nutrition",
      description: "Balanced, nutritious meals prepared daily with dietary preferences considered.",
      features: ["Menu planning", "Meal preparation", "Dietary accommodations", "Nutrition monitoring"]
    },
    {
      title: "Recreational Activities",
      description: "Engaging activities designed to promote physical and mental well-being.",
      features: ["Indoor activities", "Outdoor outings", "Hobbies and interests", "Social engagement"]
    },
    {
      title: "Transportation Services",
      description: "Assistance with transportation to medical appointments and community activities.",
      features: ["Medical appointments", "Community outings", "Grocery shopping", "Safe transport"]
    },
    {
      title: "Laundry & Housekeeping",
      description: "Regular laundry and housekeeping services maintain a clean, comfortable home.",
      features: ["Laundry service", "Room cleaning", "Housekeeping", "Linen management"]
    },
    {
      title: "Social & Emotional Support",
      description: "Compassionate support and encouragement for emotional well-being and social connection.",
      features: ["Companionship", "Family coordination", "Community connection", "Emotional support"]
    }
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
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="text-lg mt-4 opacity-90 max-w-2xl">
            Comprehensive care services including HCS, DDA meaningful day, expanded community services, and specialized behavioral health support
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-sm border border-border p-8 hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Facility Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Comfortable Living Spaces
              </h3>
              <p className="text-muted-foreground">
                Private bedrooms with comfortable furnishings and personal décor options.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Accessible Design
              </h3>
              <p className="text-muted-foreground">
                Accessible facilities with grab bars, ramps, and other safety features.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Common Areas
              </h3>
              <p className="text-muted-foreground">
                Living room, dining area, and outdoor spaces for relaxation and activities.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Safety Features
              </h3>
              <p className="text-muted-foreground">
                Security systems, fire safety equipment, and emergency response protocols.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Technology
              </h3>
              <p className="text-muted-foreground">
                WiFi access, TV, and modern conveniences for comfort and connection.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Professional Environment
              </h3>
              <p className="text-muted-foreground">
                Clean, well-maintained facility with professional staffing and care protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Specialties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Mental Health Support</h3>
              <p className="text-muted-foreground mb-4">
                Specialized behavioral health support and mental health services for individuals with psychiatric or emotional health needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground text-sm">Behavior support services</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground text-sm">Mental health monitoring</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Dementia Care</h3>
              <p className="text-muted-foreground mb-4">
                Specialized care and support for individuals living with dementia and cognitive decline.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground text-sm">Memory care support</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground text-sm">Safe, supportive environment</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Developmental Disabilities</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive support for adults with intellectual and developmental disabilities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground text-sm">Life skills support</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground text-sm">Community integration activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Care Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Our Care Approach
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            At Ark Care AFH, we believe in a person-centered care approach that respects individuality and promotes independence. Our services are designed around each resident's unique needs, preferences, and goals.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            We work closely with families, healthcare providers, and residents to develop comprehensive care plans that ensure the highest quality of life possible. We accept multiple programs including HCS (Home and Community Services), DDA Meaningful Day Services, Expanded Community Services, and Specialized Behavior Support.
          </p>
          <div className="bg-card rounded-lg border border-border p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Personalized Care Plans
            </h3>
            <p className="text-muted-foreground mb-4">
              Each resident receives an individualized care plan developed in consultation with family members and healthcare providers. Our plans include:
            </p>
            <ul className="space-y-2 text-left inline-block">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Health and wellness goals
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Personal preferences and interests
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Medication and health needs
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Social and recreational activities
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
