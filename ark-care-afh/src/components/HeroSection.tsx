'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative overflow-hidden text-white min-h-screen flex items-center"
      style={{
        backgroundImage: 'url(/elderly-care-facilities.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/elderly-care-facilities.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        aria-hidden="true"
      />

      {/* Rich Gradient Overlay Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-primary/50 to-slate-800/75" />
        
        {/* Secondary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
        
        {/* Animated Background Orbs */}
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-gradient-to-br from-primary/40 to-primary/20 rounded-full blur-3xl animate-pulse-glow pointer-events-none" style={{animationDuration: '4s'}} />
        <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-gradient-to-tr from-primary/35 to-slate-700/60 rounded-full blur-3xl animate-pulse-glow pointer-events-none" style={{animationDuration: '5s', animationDelay: '1s'}} />
        <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 to-slate-700/50 rounded-full blur-3xl animate-pulse-glow pointer-events-none" style={{animationDuration: '6s', animationDelay: '2s'}} />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/25 to-transparent rounded-full blur-3xl animate-pulse-glow pointer-events-none" style={{animationDuration: '7s', animationDelay: '1.5s'}} />
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        
        {/* Radial gradient accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_70%)] opacity-30" />
        
        {/* Diagonal pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 40px)',
        }} />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className={`inline-flex items-center gap-3 px-6 py-3 bg-white/15 backdrop-blur-lg rounded-full mb-10 border-2 border-white/30 shadow-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50" />
            <span className="text-sm font-bold uppercase tracking-wider">Licensed Adult Family Home</span>
            <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50" style={{animationDelay: '0.5s'}} />
          </div>

          {/* Main Heading */}
          <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-10 leading-tight tracking-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="block drop-shadow-2xl">Compassionate</span>
            <span className="block bg-gradient-to-r from-white via-primary/30 to-white bg-clip-text text-transparent drop-shadow-lg">
              Care
            </span>
            <span className="block drop-shadow-2xl">in a Home Environment</span>
          </h1>

          {/* Subheading */}
          <p className={`text-xl md:text-2xl lg:text-3xl mb-14 text-white/95 mx-auto leading-relaxed max-w-4xl font-medium transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Ark Care AFH provides personalized adult family home care services in Algona, WA with specialized support for mental health, dementia, and developmental disabilities.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link
              href="/contact"
              className="group relative px-10 py-5 bg-primary text-white font-bold rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-primary/50 hover:scale-110 text-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Schedule a Tour
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary to-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/services"
              className="group px-10 py-5 bg-white/15 backdrop-blur-lg border-2 border-white/40 text-white font-bold rounded-2xl transition-all duration-300 hover:bg-white/25 hover:border-white/60 hover:scale-110 shadow-xl text-lg"
            >
              <span className="flex items-center gap-2">
                Learn More
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className={`mt-20 flex flex-wrap justify-center gap-10 text-base transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold">Licensed Facility</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold">24/7 Professional Care</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold">Personalized Care Plans</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">Scroll</span>
          <div className="w-10 h-16 border-2 border-white/40 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-4 bg-white/60 rounded-full animate-bounce" style={{animationDuration: '1.5s'}} />
          </div>
        </div>
      </div>
    </section>
  )
}

