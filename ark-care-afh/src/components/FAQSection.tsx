'use client'

import Link from 'next/link'
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
    <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden" data-section="faq" style={{
      backgroundImage: 'url(/white_background_4.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/white_background_4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        aria-hidden="true"
      />

      {/* Rich Textured Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white/95 to-primary/10" />
        
        {/* Animated orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-gradient-to-tr from-primary/15 to-slate-100/50 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}} />
        
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-8" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }} />
        
        {/* Wave pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)',
        }} />
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

