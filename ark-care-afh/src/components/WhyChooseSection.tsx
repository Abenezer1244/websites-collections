'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export function WhyChooseSection() {
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
    <section ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden bg-white" data-section="why-choose">
      {/* Futuristic Animated Dot Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base white gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/40 to-white" />
        
        {/* Animated Dot Grid Pattern - Primary Layer */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 1.5px, transparent 0)',
            backgroundSize: '40px 40px',
            animation: 'dotGridMove 20s linear infinite',
          }}
        />
        
        {/* Animated Dot Grid Pattern - Secondary Layer (offset) */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)',
            backgroundSize: '56px 56px',
            animation: 'dotGridMove 25s linear infinite reverse',
          }}
        />
        
        {/* Animated Dot Grid Pattern - Tertiary Layer */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)',
            backgroundSize: '72px 72px',
            animation: 'dotGridMove 30s linear infinite',
          }}
        />
        
        {/* Floating gradient orbs with animation */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/6 via-primary/2 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '12s'}} />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-primary/5 via-slate-100/30 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '15s', animationDelay: '3s'}} />
        
        {/* Animated connecting lines between dots */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'gridPulse 8s ease-in-out infinite',
          }}
        />
        
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary/3 via-primary/1 to-transparent rounded-full blur-3xl opacity-50 animate-pulse" style={{animationDuration: '20s'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Professional Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
            <div className={`mt-2 h-1 bg-primary mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'w-20' : 'w-0'}`} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: '#000000' }}>
            Why Families Trust Ark Care AFH
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#000000' }}>
            Licensed, professional care in a warm, home-like setting. Experience the peace of mind that comes with expert care for your loved ones.
          </p>
        </div>

        {/* Professional Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-12 sm:mb-14 md:mb-16">
          {/* Feature 1 */}
          <div className={`bg-gradient-to-br from-white via-slate-50 to-primary/5 border border-white/20 rounded-xl p-8 shadow-2xl backdrop-blur-sm transition-all duration-700 delay-100 hover:shadow-primary/20 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-4 mb-6 group">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <svg className="w-7 h-7 text-primary transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">24/7 Care</div>
                <div className="text-sm text-slate-500">Always Available</div>
              </div>
            </div>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Round-the-clock support from licensed professionals ensuring safety and comfort at all times.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Licensed nursing professionals</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Emergency response systems</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Medication management</span>
              </li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className={`bg-gradient-to-br from-white via-slate-50 to-primary/5 border border-white/20 rounded-xl p-8 shadow-2xl backdrop-blur-sm transition-all duration-700 delay-200 hover:shadow-primary/20 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-4 mb-6 group">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <svg className="w-7 h-7 text-primary transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">Home-Like</div>
                <div className="text-sm text-slate-500">Comfortable Setting</div>
              </div>
            </div>
            <p className="text-slate-700 mb-6 leading-relaxed">
              A warm, welcoming setting designed to feel like home while providing professional care.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Comfortable private rooms</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Community gathering spaces</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Beautiful outdoor areas</span>
              </li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className={`bg-gradient-to-br from-white via-slate-50 to-primary/5 border border-white/20 rounded-xl p-8 shadow-2xl backdrop-blur-sm transition-all duration-700 delay-300 hover:shadow-primary/20 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-4 mb-6 group">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <svg className="w-7 h-7 text-primary transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">Engagement</div>
                <div className="text-sm text-slate-500">Active Lifestyle</div>
              </div>
            </div>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Meaningful activities and social engagement to support physical and mental well-being.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Daily social activities</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Recreational programs</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Mental wellness support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`grid md:grid-cols-4 gap-6 mb-16 pt-12 border-t border-white/20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center group">
            <div className="text-3xl font-bold text-primary mb-2 transition-all duration-300 group-hover:scale-110">Licensed</div>
            <div className="text-sm" style={{ color: '#000000' }}>State Certified Facility</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-primary mb-2 transition-all duration-300 group-hover:scale-110">24/7</div>
            <div className="text-sm" style={{ color: '#000000' }}>Professional Care</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-primary mb-2 transition-all duration-300 group-hover:scale-110">Personalized</div>
            <div className="text-sm" style={{ color: '#000000' }}>Individual Care Plans</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-primary mb-2 transition-all duration-300 group-hover:scale-110">Experienced</div>
            <div className="text-sm" style={{ color: '#000000' }}>Trained Staff</div>
          </div>
        </div>

      </div>
    </section>
  )
}

