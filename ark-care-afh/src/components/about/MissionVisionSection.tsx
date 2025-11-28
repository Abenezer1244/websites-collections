'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Announcement, AnnouncementTag, AnnouncementTitle } from '@/components/kibo-ui/announcement'
import { Badge } from '@/components/ui/badge'

export function MissionVisionSection() {
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

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Futuristic Animated Dot Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base white gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50/45" />
        
        {/* Animated Dot Grid - Multiple Layers */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.4) 1.5px, transparent 0)',
            backgroundSize: '52px 52px',
            opacity: 0.4,
            animation: 'dotGridRotate 19s ease-in-out infinite',
          }}
        />
        
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.35) 1px, transparent 0)',
            backgroundSize: '70px 70px',
            opacity: 0.3,
            animation: 'dotGridRotate 23s ease-in-out infinite reverse',
          }}
        />
        
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 0.5px, transparent 0)',
            backgroundSize: '88px 88px',
            opacity: 0.2,
            animation: 'dotGridRotate 27s ease-in-out infinite',
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
            backgroundSize: '52px 52px',
            animation: 'gridRotate 13s ease-in-out infinite',
          }}
        />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-br from-primary/5 via-primary/2 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '19s'}} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-100/30 via-primary/3 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '23s', animationDelay: '5s'}} />
        
        {/* Light radial burst */}
        <div className="absolute top-1/2 right-1/4 w-[750px] h-[750px] bg-gradient-radial from-primary/3 via-primary/1 to-transparent rounded-full blur-3xl opacity-50 animate-pulse" style={{animationDuration: '26s'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Announcement className="mx-auto max-w-fit mb-4" themed>
            <AnnouncementTag>Purpose</AnnouncementTag>
            <AnnouncementTitle>Mission & Vision</AnnouncementTitle>
          </Announcement>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <Card className={`h-full bg-gradient-to-br from-white via-white to-primary/5 border-primary/20 shadow-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <Badge variant="secondary" className="w-fit mb-2">Mission</Badge>
              <CardTitle className="text-3xl md:text-4xl font-bold text-slate-900">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-slate-800 leading-relaxed">
                At Ark Care AFH, we are dedicated to providing compassionate, high-quality adult family home care that honors the dignity, independence, and individual needs of each resident.
              </p>
              <p className="text-lg text-slate-800 leading-relaxed">
                We create a warm, supportive home environment where residents receive personalized care and meaningful engagement, supported by trained, caring staff.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className={`h-full bg-gradient-to-br from-white via-white to-primary/5 border-primary/20 shadow-xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <Badge variant="secondary" className="w-fit mb-2">Vision</Badge>
              <CardTitle className="text-3xl md:text-4xl font-bold text-slate-900">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-slate-800 leading-relaxed">
                We envision a future where every individual receives care that promotes their well-being, respects their choices, and enables them to live with dignity and purpose.
              </p>
              <p className="text-lg text-slate-800 leading-relaxed">
                Our home is a place where quality care, professional expertise, and genuine compassion come together to create the best possible outcomes for our residents.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

