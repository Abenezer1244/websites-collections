// SEO Configuration and Utilities for Ark Care AFH

export const siteConfig = {
  name: 'Ark Care AFH',
  description: 'Licensed adult family home providing compassionate, personalized care in Algona, Washington. Specializing in mental health support, dementia care, and developmental disabilities.',
  url: 'https://arkcare.local',
  ogImage: 'https://arkcare.local/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/arkcare',
    linkedin: 'https://linkedin.com/company/arkcare',
    facebook: 'https://facebook.com/arkcare',
  },
}

export const businessInfo = {
  name: 'Ark Care AFH',
  type: 'HealthAndBeautyBusiness',
  description: 'Licensed adult family home providing 24/7 residential care services',
  address: {
    streetAddress: '127 4th Ave N',
    addressLocality: 'Algona',
    addressRegion: 'WA',
    postalCode: '98001',
    addressCountry: 'US',
  },
  telephone: '+1-206-455-3644',
  email: 'contact@arkcare.local',
  url: 'https://arkcare.local',
  priceRange: '$$',
  image: 'https://arkcare.local/logo.png',
  sameAs: [
    'https://facebook.com/arkcare',
    'https://linkedin.com/company/arkcare',
    'https://twitter.com/arkcare',
  ],
}

// Generate Organization Schema
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: businessInfo.name,
    image: businessInfo.image,
    description: businessInfo.description,
    url: businessInfo.url,
    telephone: businessInfo.telephone,
    email: businessInfo.email,
    priceRange: businessInfo.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.streetAddress,
      addressLocality: businessInfo.address.addressLocality,
      addressRegion: businessInfo.address.addressRegion,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.addressCountry,
    },
    sameAs: businessInfo.sameAs,
    knowsAbout: [
      'Adult family home care',
      'Mental health support',
      'Dementia care',
      'Developmental disability services',
      ' 24/7 residential care',
    ],
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'King County, Washington',
    },
  }
}

// Generate LocalBusiness Schema
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessInfo.name,
    image: businessInfo.image,
    description: businessInfo.description,
    url: businessInfo.url,
    telephone: businessInfo.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.streetAddress,
      addressLocality: businessInfo.address.addressLocality,
      addressRegion: businessInfo.address.addressRegion,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.addressCountry,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
        description: '24/7 care available',
      },
    ],
  }
}

// Generate WebPage Schema
export function generateWebPageSchema(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    inLanguage: 'en-US',
    creator: {
      '@type': 'Organization',
      name: businessInfo.name,
      url: businessInfo.url,
    },
  }
}

// Generate BreadcrumbList Schema
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Meta tags configuration by page
export const pageMetadata = {
  home: {
    title: 'Ark Care AFH | Compassionate Adult Family Home Care in Algona, WA',
    description: 'Ark Care AFH provides personalized adult family home care in Algona, Washington. Specializing in 24/7 care, mental health support, dementia care, and developmental disabilities.',
    keywords: ['adult family home', 'care services', 'Algona WA', 'dementia care', 'mental health support'],
  },
  about: {
    title: 'About Ark Care AFH | Our Mission & Values',
    description: 'Learn about Ark Care AFH\'s mission to provide compassionate, personalized care in a home-like environment. Meet our team and discover our core values.',
    keywords: ['about us', 'our mission', 'care philosophy', 'our team', 'licensed facility'],
  },
  services: {
    title: 'Our Services | Ark Care AFH',
    description: 'Comprehensive care services including 24/7 support, medication management, personal care, mental health support, dementia care, and more.',
    keywords: ['services', 'care services', 'HCS', 'DDA Meaningful Day', 'specialized care', 'behavior support'],
  },
  contact: {
    title: 'Contact Us | Ark Care AFH',
    description: 'Get in touch with Ark Care AFH to schedule a tour, ask questions, or learn more about our services. Call (206) 455-3644 or visit us in Algona.',
    keywords: ['contact', 'schedule tour', 'inquiry', 'phone', 'address'],
  },
  gallery: {
    title: 'Activities & Facilities | Ark Care AFH Gallery',
    description: 'Explore our facility and the engaging activities we offer residents. From barbecues to movie nights, we provide meaningful experiences.',
    keywords: ['activities', 'facilities', 'gallery', 'recreation', 'community'],
  },
  faq: {
    title: 'FAQ | Ark Care AFH',
    description: 'Frequently asked questions about admission, care services, costs, safety, and more. Find answers to help you make an informed decision.',
    keywords: ['FAQ', 'questions', 'admission', 'care', 'costs', 'safety'],
  },
  staff: {
    title: 'Our Team | Ark Care AFH Staff',
    description: 'Meet our dedicated, qualified staff members committed to providing excellent care. Learn about their expertise and experience.',
    keywords: ['staff', 'team', 'caregivers', 'qualified professionals', 'credentials'],
  },
  testimonials: {
    title: 'Testimonials | What Residents & Families Say',
    description: 'Read reviews from residents and families about their experience at Ark Care AFH. See why families trust us.',
    keywords: ['testimonials', 'reviews', 'family feedback', 'resident experience', 'ratings'],
  },
  privacyPolicy: {
    title: 'Privacy Policy | Ark Care AFH',
    description: 'Our privacy policy explains how we protect and handle your personal and health information in compliance with HIPAA.',
    keywords: ['privacy', 'HIPAA', 'data protection', 'security', 'confidentiality'],
  },
  termsOfService: {
    title: 'Terms of Service | Ark Care AFH',
    description: 'Our terms and conditions for using Ark Care AFH services. Learn about admission, resident rights, and care agreements.',
    keywords: ['terms', 'conditions', 'admission', 'agreement', 'policies'],
  },
}

// Open Graph configuration
export function generateOpenGraphTags(title: string, description: string, url: string, image?: string) {
  return {
    'og:title': title,
    'og:description': description,
    'og:url': url,
    'og:image': image || siteConfig.ogImage,
    'og:type': 'website',
    'og:site_name': siteConfig.name,
  }
}

// Twitter Card configuration
export function generateTwitterCardTags(title: string, description: string, image?: string) {
  return {
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image || siteConfig.ogImage,
    'twitter:creator': '@arkcare',
  }
}
