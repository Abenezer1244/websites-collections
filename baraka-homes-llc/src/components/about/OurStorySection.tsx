'use client'

import { useEffect, useRef, useState } from 'react'

export function OurStorySection() {
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
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Modern Whitish Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Clean white base */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/40 to-white" />
        
        {/* Modern geometric pattern */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: `
            repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(0,0,0,0.08) 40px, rgba(0,0,0,0.08) 41px, transparent 41px, transparent 80px),
            repeating-linear-gradient(-60deg, transparent, transparent 40px, rgba(0,0,0,0.08) 40px, rgba(0,0,0,0.08) 41px, transparent 41px, transparent 80px)
          `,
        }} />
        
        {/* Soft gradient orbs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/6 via-primary/2 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '14s'}} />
        <div className="absolute bottom-0 right-0 w-[650px] h-[650px] bg-gradient-to-tr from-slate-100/35 via-primary/3 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '17s', animationDelay: '3s'}} />
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)',
          backgroundSize: '44px 44px'
        }} />
        
        {/* Light mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/1.5 to-transparent" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Story</span>
            <div className={`mt-2 h-1 bg-primary mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'w-20' : 'w-0'}`} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Our Story
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Learn about our journey and commitment to providing exceptional care
          </p>
        </div>

        <div className={`bg-gradient-to-br from-white via-slate-50 to-primary/10 rounded-2xl shadow-2xl border-2 border-primary/20 p-8 md:p-12 backdrop-blur-sm transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            Ark Care AFH is a licensed adult family home located in Algona, Washington, dedicated to providing compassionate, personalized care in a home-like environment. We specialize in caring for individuals with diverse needs, including seniors, adults with developmental disabilities, and those requiring specialized behavioral health support.
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            Our facility at 127 4th Ave N, Algona, WA 98001 was designed from the ground up to provide a safe, comfortable, and welcoming home. We carefully selected our location and designed our spaces to promote independence, dignity, and quality of life for our residents.
          </p>
          <p className="text-lg text-slate-800 mb-6 leading-relaxed">
            We offer comprehensive services under multiple programs including HCS (Home and Community Services), DDA Meaningful Day programs, and Expanded Community Services. Our specialized support includes care for individuals with mental health needs, dementia support, and developmental disability services.
          </p>
          <p className="text-lg text-slate-800 leading-relaxed">
            Today, we are proud to serve residents in our community, providing comprehensive care services that allow individuals to maintain their independence while receiving the support they need. Our team is committed to exceeding expectations and making a positive difference in the lives of those we serve. For more information or to schedule a tour, please call us at (206) 455-3644.
          </p>
        </div>
      </div>
    </section>
  )
}

