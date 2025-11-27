'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

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
      description: "With pharmacy oversight"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Daily Living Assistance",
      description: "Hygiene & personal care"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Specialized Support",
      description: "Mental health, dementia & developmental disabilities"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Meaningful Day Programs",
      description: "Customized activities"
    }
  ]

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-slate-50/30" data-section="services-overview">
      {/* Modern Whitish Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Clean white base with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50/40" />
        
        {/* Modern hexagon pattern */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: `
            repeating-linear-gradient(30deg, transparent, transparent 50px, rgba(0,0,0,0.1) 50px, rgba(0,0,0,0.1) 51px, transparent 51px, transparent 100px)
          `,
        }} />
        
        {/* Soft floating orbs */}
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-primary/6 via-primary/3 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '12s'}} />
        <div className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-gradient-to-tr from-slate-200/30 via-primary/4 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '14s', animationDelay: '3s'}} />
        
        {/* Subtle wave pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)',
        }} />
        
        {/* Light radial burst */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-primary/2 to-transparent rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
            <div className={`mt-2 h-1 bg-primary mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'w-20' : 'w-0'}`} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: '#000000' }}>
            Comprehensive Care Services
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#000000' }}>
            Ark Care AFH offers a complete range of services to support your loved one's health, safety, and quality of life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-11 md:mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-white via-white to-primary/5 border-2 border-primary/20 rounded-xl p-6 shadow-lg backdrop-blur-sm transition-all duration-700 hover:shadow-xl hover:scale-105 hover:border-primary/40 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{transitionDelay: `${(index + 1) * 100}ms`}}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center mb-4 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Feature List */}
        <div className={`bg-gradient-to-br from-white via-slate-50 to-primary/10 rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-primary/20 mb-12 backdrop-blur-sm transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Medication management with pharmacy oversight",
              "Assistance with daily living & hygiene",
              "Specialized support for mental health, dementia & developmental disabilities",
              "Customized activities & Meaningful Day programs"
            ].map((item, index) => (
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
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <span>View All Services</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

