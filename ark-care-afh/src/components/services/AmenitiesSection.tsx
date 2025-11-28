'use client'

import { useEffect, useRef, useState } from 'react'

export function AmenitiesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const amenities = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Comfortable Living Spaces",
      description: "Private bedrooms with comfortable furnishings and personal décor options."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Accessible Design",
      description: "Accessible facilities with grab bars, ramps, and other safety features."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Common Areas",
      description: "Living room, dining area, and outdoor spaces for relaxation and activities."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Safety Features",
      description: "Security systems, fire safety equipment, and emergency response protocols."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Technology",
      description: "WiFi access, TV, and modern conveniences for comfort and connection."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Professional Environment",
      description: "Clean, well-maintained facility with professional staffing and care protocols."
    }
  ]

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Futuristic Animated Dot Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base white gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/25 to-white" />
        
        {/* Animated Dot Grid - Primary Layer */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.4) 1.5px, transparent 0)',
            backgroundSize: '42px 42px',
            opacity: 0.4,
            animation: 'dotGridAmenities 16s ease-in-out infinite',
          }}
        />
        
        {/* Animated Dot Grid - Secondary Layer */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.35) 1px, transparent 0)',
            backgroundSize: '58px 58px',
            opacity: 0.3,
            animation: 'dotGridAmenities 20s ease-in-out infinite reverse',
          }}
        />
        
        {/* Animated Dot Grid - Tertiary Layer */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 0.5px, transparent 0)',
            backgroundSize: '74px 74px',
            opacity: 0.2,
            animation: 'dotGridAmenities 24s ease-in-out infinite',
          }}
        />
        
        {/* Animated connecting grid */}
        <div 
          className="absolute inset-0"
          style={{
            opacity: 0.15,
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '42px 42px',
            animation: 'gridAmenities 10s ease-in-out infinite',
          }}
        />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 via-primary/2 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '18s'}} />
        <div className="absolute bottom-0 right-0 w-[650px] h-[650px] bg-gradient-to-tr from-slate-100/30 via-primary/3 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '22s', animationDelay: '5s'}} />
        
        {/* Light mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/1.5 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Facility</span>
            <div className={`mt-2 h-1 bg-primary mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'w-20' : 'w-0'}`} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Facility Amenities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-white via-slate-50 to-primary/5 rounded-2xl p-8 shadow-xl border-2 border-primary/20 transition-all duration-700 hover:shadow-2xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{transitionDelay: `${(index + 1) * 100}ms`}}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-6 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                {amenity.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {amenity.title}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

