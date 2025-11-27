'use client'

import { useEffect, useRef, useState } from 'react'
import { Accordion } from '@/components/ui/accordion'

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
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.3) 3px, transparent 0)',
            backgroundSize: '36px 36px',
            opacity: 0.25,
            animation: 'dotGridPulse 14s ease-in-out infinite',
          }}
        />
        
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.25) 2.5px, transparent 0)',
            backgroundSize: '52px 52px',
            opacity: 0.18,
            animation: 'dotGridPulse 18s ease-in-out infinite reverse',
          }}
        />
        
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 2px, transparent 0)',
            backgroundSize: '68px 68px',
            opacity: 0.12,
            animation: 'dotGridPulse 22s ease-in-out infinite',
          }}
        />
        
        {/* Animated connecting lines */}
        <div 
          className="absolute inset-0"
          style={{
            opacity: 0.08,
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
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
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Common Questions Answered
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to help you make the best decision for your loved one
          </p>
        </div>

        {/* Accordion FAQ */}
        <div className={`max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Accordion
            items={[
              {
                id: "admission",
                title: "What is the admission process?",
                content: "We begin with a tour of our facility and a consultation to discuss care needs. We answer all your questions and determine the best fit for your loved one."
              },
              {
                id: "services",
                title: "What services are included?",
                content: "Our comprehensive services include 24/7 professional care, medication management, personal care, meal preparation, laundry, activities, and transportation."
              },
              {
                id: "visits",
                title: "Can family visit anytime?",
                content: "We have flexible visiting hours to accommodate family schedules. Regular family involvement is encouraged and we maintain open communication."
              },
              {
                id: "licensed",
                title: "Are you licensed?",
                content: "Yes, we fully comply with all state and local regulations for adult family homes. Our owner holds all necessary licenses and certifications."
              },
              {
                id: "activities",
                title: "What activities are offered?",
                content: "We provide games, crafts, outdoor outings, movies, reading, and social gatherings. All activities are tailored to individual interests and abilities."
              },
              {
                id: "concerns",
                title: "How do we handle concerns?",
                content: "We take all concerns seriously and address them promptly. Please speak with our staff directly - we're committed to working together for the best outcome."
              }
            ]}
            allowMultiple={false}
          />
        </div>

      </div>
    </section>
  )
}

