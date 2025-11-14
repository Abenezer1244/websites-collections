'use client'

import { useEffect, useRef, useState } from 'react'

export function AboutHeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section 
      ref={heroRef}
      data-section="hero"
      className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white pt-32 md:pt-40 pb-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-wider">About Us</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            About Ark Care AFH
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
            Licensed adult family home providing personalized care in Algona, Washington
          </p>
        </div>
      </div>
    </section>
  )
}

