// Analytics Configuration
// To enable analytics, add your tracking IDs below and uncomment the relevant sections

// Google Analytics 4 (GA4)
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// Google Tag Manager
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || ''

// Facebook Pixel
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || ''

// Check if analytics should be enabled
export const isAnalyticsEnabled = () => {
  return process.env.NODE_ENV === 'production' && (GA_TRACKING_ID || GTM_ID || FB_PIXEL_ID)
}

// Google Analytics pageview tracking
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Google Analytics event tracking
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void
    dataLayer?: unknown[]
  }
}

