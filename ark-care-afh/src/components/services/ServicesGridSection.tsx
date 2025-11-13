'use client'

import { useEffect, useRef, useState } from 'react'
import { ServiceCard } from '@/components/cards/service-card'

export function ServicesGridSection() {
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
      title: "24/7 Professional Care",
      description: "Round-the-clock care and support from trained staff members available at all times.",
      features: ["Medication management", "Health monitoring", "Assistance as needed", "Emergency response"]
    },
    {
      title: "Medication Management",
      description: "Professional medication administration and management to ensure proper care.",
      features: ["Medication reminders", "Prescription coordination", "Health records tracking", "Communication with healthcare providers"]
    },
    {
      title: "Personal Care & Hygiene",
      description: "Personalized assistance with daily living activities and personal hygiene.",
      features: ["Bathing assistance", "Dressing help", "Grooming support", "Incontinence management"]
    },
    {
      title: "Meal Preparation & Nutrition",
      description: "Balanced, nutritious meals prepared daily with dietary preferences considered.",
      features: ["Menu planning", "Meal preparation", "Dietary accommodations", "Nutrition monitoring"]
    },
    {
      title: "Recreational Activities",
      description: "Engaging activities designed to promote physical and mental well-being.",
      features: ["Indoor activities", "Outdoor outings", "Hobbies and interests", "Social engagement"]
    },
    {
      title: "Transportation Services",
      description: "Assistance with transportation to medical appointments and community activities.",
      features: ["Medical appointments", "Community outings", "Grocery shopping", "Safe transport"]
    },
    {
      title: "Laundry & Housekeeping",
      description: "Regular laundry and housekeeping services maintain a clean, comfortable home.",
      features: ["Laundry service", "Room cleaning", "Housekeeping", "Linen management"]
    },
    {
      title: "Social & Emotional Support",
      description: "Compassionate support and encouragement for emotional well-being and social connection.",
      features: ["Companionship", "Family coordination", "Community connection", "Emotional support"]
    }
  ]

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-gradient-to-br from-slate-900 via-primary/20 to-slate-800 overflow-hidden">
      {/* Rich Dark Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary/25 to-slate-800" />
        
        {/* Animated orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary/25 to-slate-700/50 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-primary/15 via-slate-700/30 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}} />
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        {/* Mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
            <div className={`mt-2 h-1 bg-primary mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'w-20' : 'w-0'}`} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Our Care Services
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive services designed to support health, safety, and quality of life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{transitionDelay: `${(index + 1) * 100}ms`}}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                features={service.features}
                badge={index < 2 ? "Essential" : undefined}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

