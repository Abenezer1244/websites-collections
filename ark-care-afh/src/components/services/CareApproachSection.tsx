'use client'

import { useEffect, useRef, useState } from 'react'

export function CareApproachSection() {
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
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 via-slate-100 to-primary/20 overflow-hidden">
      {/* Rich Colorful Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-slate-100 to-primary/25" />
        
        {/* Animated orbs */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-br from-primary/25 to-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 to-slate-200/60 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />
        <div className="absolute top-1/3 right-1/3 w-[450px] h-[450px] bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}} />
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-8" style={{
          backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(0,0,0,0.03) 50%, transparent 70%), linear-gradient(-45deg, transparent 30%, rgba(0,0,0,0.03) 50%, transparent 70%)',
          backgroundSize: '50px 50px'
        }} />
        
        {/* Radial accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_70%)] opacity-15" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Approach</span>
            <div className={`mt-2 h-1 bg-primary mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'w-20' : 'w-0'}`} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            Our Care Approach
          </h2>
        </div>

        <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg text-slate-800 leading-relaxed">
            At Ark Care AFH, we believe in a person-centered care approach that respects individuality and promotes independence. Our services are designed around each resident's unique needs, preferences, and goals.
          </p>
          <p className="text-lg text-slate-800 leading-relaxed">
            We work closely with families, healthcare providers, and residents to develop comprehensive care plans that ensure the highest quality of life possible. We accept multiple programs including HCS (Home and Community Services), DDA Meaningful Day Services, Expanded Community Services, and Specialized Behavior Support.
          </p>

          <div className="bg-gradient-to-br from-white via-slate-50 to-primary/10 rounded-2xl border-2 border-primary/20 p-8 md:p-10 shadow-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Personalized Care Plans
            </h3>
            <p className="text-slate-800 mb-6 leading-relaxed">
              Each resident receives an individualized care plan developed in consultation with family members and healthcare providers. Our plans include:
            </p>
            <ul className="space-y-4">
              {[
                "Health and wellness goals",
                "Personal preferences and interests",
                "Medication and health needs",
                "Social and recreational activities"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-900 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

