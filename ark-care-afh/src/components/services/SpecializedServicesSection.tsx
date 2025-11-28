'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Announcement, AnnouncementTag, AnnouncementTitle } from '@/components/kibo-ui/announcement'
import { Badge } from '@/components/ui/badge'

export function SpecializedServicesSection() {
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

  const specialties = [
    {
      title: "Mental Health Support",
      description: "Specialized behavioral health support and mental health services for individuals with psychiatric or emotional health needs.",
      features: ["Behavior support services", "Mental health monitoring"]
    },
    {
      title: "Dementia Care",
      description: "Specialized care and support for individuals living with dementia and cognitive decline.",
      features: ["Memory care support", "Safe, supportive environment"]
    },
    {
      title: "Developmental Disabilities",
      description: "Comprehensive support for adults with intellectual and developmental disabilities.",
      features: ["Life skills support", "Community integration activities"]
    }
  ]

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Futuristic Animated Dot Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base white gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50/35" />
        
        {/* Animated Dot Grid - Multiple Layers */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.4) 1.5px, transparent 0)',
            backgroundSize: '50px 50px',
            opacity: 0.4,
            animation: 'dotGridSpecialties 17s ease-in-out infinite',
          }}
        />
        
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.35) 1px, transparent 0)',
            backgroundSize: '75px 75px',
            opacity: 0.3,
            animation: 'dotGridSpecialties 21s ease-in-out infinite reverse',
          }}
        />
        
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 0.5px, transparent 0)',
            backgroundSize: '100px 100px',
            opacity: 0.2,
            animation: 'dotGridSpecialties 25s ease-in-out infinite',
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
            backgroundSize: '50px 50px',
            animation: 'gridSpecialties 11s ease-in-out infinite',
          }}
        />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 via-primary/2 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '20s'}} />
        <div className="absolute bottom-0 left-0 w-[650px] h-[650px] bg-gradient-to-tr from-slate-100/30 via-primary/3 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '24s', animationDelay: '6s'}} />
        
        {/* Light radial burst */}
        <div className="absolute bottom-0 right-0 w-[750px] h-[750px] bg-gradient-radial from-primary/3 via-primary/1 to-transparent rounded-full blur-3xl opacity-50 animate-pulse" style={{animationDuration: '27s'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Announcement className="mx-auto max-w-fit mb-4" themed>
            <AnnouncementTag>Specialized</AnnouncementTag>
            <AnnouncementTitle>Our Specialties</AnnouncementTitle>
          </Announcement>
          <div className={`mt-2 h-1 bg-primary mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'w-20' : 'w-0'}`} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <Card
              key={index}
              className={`group h-full bg-gradient-to-br from-white via-slate-50 to-primary/5 border-2 border-primary/20 shadow-xl transition-all duration-700 hover:shadow-2xl hover:scale-105 hover:border-primary/40 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{transitionDelay: `${(index + 1) * 100}ms`}}
            >
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Specialized</Badge>
                <CardTitle className="text-2xl font-bold text-slate-900">{specialty.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  {specialty.description}
                </p>
                <ul className="space-y-3">
                  {specialty.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-slate-900 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

