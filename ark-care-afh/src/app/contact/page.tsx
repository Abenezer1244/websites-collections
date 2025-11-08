import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import { pageMetadata, generateWebPageSchema, generateBreadcrumbSchema, siteConfig } from '@/lib/seo'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  keywords: pageMetadata.contact.keywords,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    title: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Contact Ark Care AFH',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
    images: [siteConfig.ogImage],
  },
}

export default function Contact() {
  const breadcrumbs = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Contact', url: `${siteConfig.url}/contact` }
  ]

  const pageSchema = generateWebPageSchema(
    pageMetadata.contact.title,
    pageMetadata.contact.description,
    `${siteConfig.url}/contact`
  )

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs)

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ContactPageClient />
    </>
  )
}
