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
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-primary/10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/12 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary)_0%,_transparent_50%)] opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
            <div className={`mt-2 h-1 bg-primary mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'w-20' : 'w-0'}`} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Our Care Services
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
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

