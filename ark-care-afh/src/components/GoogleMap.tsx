'use client'

import { useEffect, useRef, useState } from 'react'
import { businessInfo } from '@/lib/seo'

interface GoogleMapProps {
  className?: string
  height?: string
}

export function GoogleMap({ className = '', height = '400px' }: GoogleMapProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)

  // Construct the full address
  const fullAddress = `${businessInfo.address.streetAddress}, ${businessInfo.address.addressLocality}, ${businessInfo.address.addressRegion} ${businessInfo.address.postalCode}`
  
  // Google Maps Embed URL - supports both API key and basic embedding
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const mapUrl = apiKey 
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(fullAddress)}&zoom=15`
    : `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed&zoom=15`

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`relative rounded-xl overflow-hidden shadow-xl border-2 border-primary/20 ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center z-10">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4" />
            <p className="text-slate-600 text-sm">Loading map...</p>
          </div>
        </div>
      )}

      {/* Google Maps Embed */}
      <iframe
        src={mapUrl}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
        onLoad={() => setIsLoaded(true)}
        title="Ark Care AFH Location"
      />
      
      {/* Fallback link overlay for better UX */}
      <div className="absolute bottom-4 right-4 z-10">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm text-slate-900 font-semibold rounded-lg shadow-lg hover:bg-white transition-colors text-sm border border-slate-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Open in Maps
        </a>
      </div>
    </div>
  )
}

