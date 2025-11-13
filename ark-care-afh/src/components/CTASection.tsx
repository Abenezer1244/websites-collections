'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export function CTASection() {
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
    <section ref={sectionRef} className="relative py-20 md:py-32 bg-gradient-to-br from-primary via-primary/95 to-primary overflow-hidden" data-section="cta">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-8 border border-white/30">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">Take Action Today</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Schedule a tour to see our facility and meet our team. We're here to answer your questions and help you make the best decision for your loved one.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group relative px-10 py-5 bg-white text-primary font-bold rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Schedule a Tour</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 bg-transparent border-2 border-white/50 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white"
            >
              Contact Us
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Expert Guidance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

