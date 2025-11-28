'use client'

import { useEffect, useRef, useState } from 'react'
import { Accordion } from '@/components/ui/accordion'
import { Announcement, AnnouncementTag, AnnouncementTitle } from '@/components/kibo-ui/announcement'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function FAQSection() {
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

  const faqItems = [
    {
      id: "admission",
      title: "What is the admission process?",
      content: "We begin with a tour of our facility and a consultation to discuss care needs. We answer all your questions and determine the best fit for your loved one.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: "services",
      title: "What services are included?",
      content: "Our comprehensive services include 24/7 professional care, medication management, personal care, meal preparation, laundry, activities, and transportation.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      id: "visits",
      title: "Can family visit anytime?",
      content: "We have flexible visiting hours to accommodate family schedules. Regular family involvement is encouraged and we maintain open communication.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: "licensed",
      title: "Are you licensed?",
      content: "Yes, we fully comply with all state and local regulations for adult family homes. Our owner holds all necessary licenses and certifications.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: "activities",
      title: "What activities are offered?",
      content: "We provide games, crafts, outdoor outings, movies, reading, and social gatherings. All activities are tailored to individual interests and abilities.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: "concerns",
      title: "How do we handle concerns?",
      content: "We take all concerns seriously and address them promptly. Please speak with our staff directly - we're committed to working together for the best outcome.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden bg-white" data-section="faq">
      {/* Futuristic Animated Dot Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base white gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/35 to-white" />
        
        {/* Animated Dot Grid - Multiple Layers */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.4) 1.5px, transparent 0)',
            backgroundSize: '36px 36px',
            opacity: 0.4,
            animation: 'dotGridPulse 14s ease-in-out infinite',
          }}
        />
        
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.35) 1px, transparent 0)',
            backgroundSize: '52px 52px',
            opacity: 0.3,
            animation: 'dotGridPulse 18s ease-in-out infinite reverse',
          }}
        />
        
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.3) 0.5px, transparent 0)',
            backgroundSize: '68px 68px',
            opacity: 0.2,
            animation: 'dotGridPulse 22s ease-in-out infinite',
          }}
        />
        
        {/* Animated connecting lines */}
        <div 
          className="absolute inset-0"
          style={{
            opacity: 0.15,
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '36px 36px',
            animation: 'gridWave 11s ease-in-out infinite',
          }}
        />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-br from-primary/5 via-primary/2 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '17s'}} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-100/30 via-primary/3 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '21s', animationDelay: '6s'}} />
        
        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/3 w-[750px] h-[750px] bg-gradient-radial from-primary/4 via-primary/1 to-transparent rounded-full blur-3xl opacity-50 animate-pulse" style={{animationDuration: '24s'}} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Kibo UI Announcement */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-6">
            <Announcement className="mx-auto max-w-fit mb-4" themed>
              <AnnouncementTag>FAQ</AnnouncementTag>
              <AnnouncementTitle>Common Questions</AnnouncementTitle>
            </Announcement>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Common Questions Answered
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to help you make the best decision for your loved one
          </p>
        </div>

        {/* Accordion FAQ with Enhanced Cards */}
        <Card className={`max-w-3xl mx-auto mb-12 bg-gradient-to-br from-white via-slate-50 to-primary/5 border-primary/20 shadow-xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-slate-900">Frequently Asked Questions</CardTitle>
            <CardDescription className="text-center">Click on any question to see the answer</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion
              items={faqItems.map(item => ({
                id: item.id,
                title: item.title,
                content: item.content,
                icon: item.icon
              }))}
              allowMultiple={false}
            />
          </CardContent>
        </Card>

      </div>
    </section>
  )
}

