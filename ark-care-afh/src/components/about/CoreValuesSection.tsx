'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Announcement, AnnouncementTag, AnnouncementTitle } from '@/components/kibo-ui/announcement'
import { Badge } from '@/components/ui/badge'

export function CoreValuesSection() {
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

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Compassion",
      description: "We care deeply about our residents' well-being and are committed to treating each person with kindness and empathy.",
      badge: "Core"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Quality",
      description: "Excellence is our standard. We maintain the highest quality in care, services, and our facility.",
      badge: "Standard"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Respect",
      description: "We honor the dignity and autonomy of each resident, respecting their choices and preferences.",
      badge: "Essential"
    }
  ]

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Futuristic Animated Dot Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base white gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/25 to-white" />
        
        {/* Animated Dot Grid - Primary Layer */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.4) 1.5px, transparent 0)',
            backgroundSize: '40px 40px',
            opacity: 0.4,
            animation: 'dotGridHex 15s ease-in-out infinite',
          }}
        />
        
        {/* Animated Dot Grid - Secondary Layer */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.35) 1px, transparent 0)',
            backgroundSize: '56px 56px',
            opacity: 0.3,
            animation: 'dotGridHex 19s ease-in-out infinite reverse',
          }}
        />
        
        {/* Animated Dot Grid - Tertiary Layer */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 0.5px, transparent 0)',
            backgroundSize: '72px 72px',
            opacity: 0.2,
            animation: 'dotGridHex 23s ease-in-out infinite',
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
            backgroundSize: '40px 40px',
            animation: 'gridHex 11s ease-in-out infinite',
          }}
        />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 via-primary/2 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '17s'}} />
        <div className="absolute bottom-0 left-0 w-[650px] h-[650px] bg-gradient-to-tr from-slate-100/30 via-primary/3 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '20s', animationDelay: '6s'}} />
        
        {/* Light mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/1 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Announcement className="mx-auto max-w-fit mb-4" themed>
            <AnnouncementTag>Values</AnnouncementTag>
            <AnnouncementTitle>Our Core Values</AnnouncementTitle>
          </Announcement>
          <div className={`mt-2 h-1 bg-primary mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'w-20' : 'w-0'}`} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className={`text-center group h-full bg-gradient-to-br from-white via-white to-primary/5 border-2 border-primary/20 shadow-xl transition-all duration-700 hover:shadow-2xl hover:scale-105 hover:border-primary/40 backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{transitionDelay: `${(index + 1) * 100}ms`}}
            >
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                  {value.icon}
                </div>
                {value.badge && (
                  <Badge variant="secondary" className="w-fit mx-auto mb-2">{value.badge}</Badge>
                )}
                <CardTitle className="text-xl font-bold text-slate-900">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

