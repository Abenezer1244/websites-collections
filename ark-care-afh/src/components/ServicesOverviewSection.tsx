'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Announcement, AnnouncementTag, AnnouncementTitle } from '@/components/kibo-ui/announcement'
import { Button } from '@/components/ui/button'

export function ServicesOverviewSection() {
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

  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Medication Management",
      description: "With pharmacy oversight",
      badge: "Essential"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Daily Living Assistance",
      description: "Hygiene & personal care",
      badge: "Core"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Specialized Support",
      description: "Mental health, dementia & developmental disabilities",
      badge: "Specialized"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Meaningful Day Programs",
      description: "Customized activities",
      badge: "Engagement"
    }
  ]

  const serviceFeatures = [
    "Medication management with pharmacy oversight",
    "Assistance with daily living & hygiene",
    "Specialized support for mental health, dementia & developmental disabilities",
    "Customized activities & Meaningful Day programs"
  ]

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden bg-white" data-section="services-overview">
      {/* Futuristic Animated Dot Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base white gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/30 to-white" />
        
        {/* Animated Dot Grid Pattern - Multiple Layers */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.4) 1.5px, transparent 0)',
            backgroundSize: '44px 44px',
            opacity: 0.4,
            animation: 'dotGridMove2 18s linear infinite',
          }}
        />
        
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.35) 1px, transparent 0)',
            backgroundSize: '60px 60px',
            opacity: 0.3,
            animation: 'dotGridMove2 22s linear infinite reverse',
          }}
        />
        
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 0.5px, transparent 0)',
            backgroundSize: '76px 76px',
            opacity: 0.2,
            animation: 'dotGridMove2 28s linear infinite',
          }}
        />
        
        {/* Animated connecting grid lines */}
        <div 
          className="absolute inset-0"
          style={{
            opacity: 0.15,
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '44px 44px',
            animation: 'gridShift 10s ease-in-out infinite',
          }}
        />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 via-primary/2 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '14s'}} />
        <div className="absolute bottom-20 left-20 w-[650px] h-[650px] bg-gradient-to-tr from-slate-200/25 via-primary/3 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '18s', animationDelay: '4s'}} />
        
        {/* Radial glow effect */}
        <div className="absolute top-1/3 left-1/3 w-[900px] h-[900px] bg-gradient-radial from-primary/4 via-primary/1 to-transparent rounded-full blur-3xl opacity-40 animate-pulse" style={{animationDuration: '22s'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Kibo UI Announcement */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-6">
            <Announcement className="mx-auto max-w-fit mb-4" themed>
              <AnnouncementTag>Services</AnnouncementTag>
              <AnnouncementTitle>Our Services</AnnouncementTitle>
            </Announcement>
            <div className={`mt-2 h-1 bg-primary mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'w-20' : 'w-0'}`} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-slate-900">
            Comprehensive Care Services
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-slate-700">
            Ark Care AFH offers a complete range of services to support your loved one's health, safety, and quality of life.
          </p>
        </div>

        {/* Services Grid with Kibo UI Card Components */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-11 md:mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group h-full bg-gradient-to-br from-white via-white to-primary/5 border-2 border-primary/20 shadow-lg backdrop-blur-sm transition-all duration-700 hover:shadow-xl hover:scale-105 hover:border-primary/40 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{transitionDelay: `${(index + 1) * 100}ms`}}
            >
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center mb-4 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                  {service.icon}
                </div>
                {service.badge && (
                  <Badge variant="secondary" className="w-fit mb-2">{service.badge}</Badge>
                )}
                <CardTitle className="text-lg font-bold text-slate-900">{service.title}</CardTitle>
                <CardDescription className="text-sm text-slate-600">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Feature List with Kibo UI Card Component */}
        <Card className={`bg-gradient-to-br from-white via-slate-50 to-primary/10 border-2 border-primary/20 shadow-2xl mb-12 backdrop-blur-sm transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-900 text-center">What's Included</CardTitle>
            <CardDescription className="text-center">All services are included in our comprehensive care plan</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {serviceFeatures.map((item, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <svg className="w-5 h-5 text-primary transition-colors duration-300 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-900 font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* CTA with Kibo UI Button */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button asChild size="lg" className="shadow-lg hover:shadow-xl">
            <Link href="/services" className="inline-flex items-center gap-2">
              <span>View All Services</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

