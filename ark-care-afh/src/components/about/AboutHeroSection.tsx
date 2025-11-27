'use client'

import { useEffect, useRef, useState } from 'react'
import { Announcement, AnnouncementTag, AnnouncementTitle } from '@/components/kibo-ui/announcement'
import { ArrowUpRightIcon } from 'lucide-react'

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
      className="relative overflow-hidden text-white pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20 min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] flex items-center"
      style={{
        backgroundImage: 'url(/homy.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/homy.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        aria-hidden="true"
      />

      {/* Gradient Overlay Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-primary/30 to-slate-800/55" />
        
        {/* Secondary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
        
        {/* Animated Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10 w-full">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Announcement Badge */}
          <div className="mb-6 sm:mb-7 md:mb-8 flex justify-center">
            <Announcement className="bg-white/10 backdrop-blur-md border-white/20 text-white" themed>
              <AnnouncementTag className="bg-white/20 text-white">About Us</AnnouncementTag>
              <AnnouncementTitle className="text-white">
                Licensed & Certified
                <ArrowUpRightIcon size={16} className="shrink-0 text-white/70" />
              </AnnouncementTitle>
            </Announcement>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 md:mb-6 leading-tight px-2 sm:px-0">
            About Ark Care AFH
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Licensed adult family home providing personalized care in Algona, Washington
          </p>
        </div>
      </div>
    </section>
  )
}

