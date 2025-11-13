'use client'

import { useEffect, useRef, useState } from 'react'

export function MissionVisionSection() {
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
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-gradient-to-br from-slate-800 via-primary/30 to-slate-900 overflow-hidden">
      {/* Rich Dark Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-primary/25 to-slate-900" />
        
        {/* Animated orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary/25 to-slate-700/50 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}} />
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
        
        {/* Radial accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary)_0%,_transparent_60%)] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-200/50 h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                At Ark Care AFH, we are dedicated to providing compassionate, high-quality adult family home care that honors the dignity, independence, and individual needs of each resident.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                We create a warm, supportive home environment where residents receive personalized care and meaningful engagement, supported by trained, caring staff.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-200/50 h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                We envision a future where every individual receives care that promotes their well-being, respects their choices, and enables them to live with dignity and purpose.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Our home is a place where quality care, professional expertise, and genuine compassion come together to create the best possible outcomes for our residents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

