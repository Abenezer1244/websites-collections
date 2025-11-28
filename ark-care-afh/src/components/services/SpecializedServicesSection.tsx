'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Announcement, AnnouncementTag, AnnouncementTitle } from '@/components/kibo-ui/announcement'
import { Badge } from '@/components/ui/badge'

export function SpecializedServicesSection() {
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

  const specialties = [
    {
      title: "Mental Health Support",
      description: "Specialized behavioral health support and mental health services for individuals with psychiatric or emotional health needs.",
      features: ["Behavior support services", "Mental health monitoring"]
    },
    {
      title: "Dementia Care",
      description: "Specialized care and support for individuals living with dementia and cognitive decline.",
      features: ["Memory care support", "Safe, supportive environment"]
    },
    {
      title: "Developmental Disabilities",
      description: "Comprehensive support for adults with intellectual and developmental disabilities.",
      features: ["Life skills support", "Community integration activities"]
    }
  ]

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Announcement className="mx-auto max-w-fit mb-4" themed>
            <AnnouncementTag>Specialized</AnnouncementTag>
            <AnnouncementTitle>Our Specialties</AnnouncementTitle>
          </Announcement>
          <div className={`mt-2 h-1 bg-primary mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'w-20' : 'w-0'}`} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <Card
              key={index}
              className={`group h-full bg-gradient-to-br from-white via-slate-50 to-primary/5 border-2 border-primary/20 shadow-xl transition-all duration-700 hover:shadow-2xl hover:scale-105 hover:border-primary/40 flashlight-card animate-on-scroll ${isVisible ? 'opacity-100 translate-y-0' : ''}`}
              style={{
                transitionDelay: `${(index + 1) * 100}ms`,
                animationDelay: `${(index + 1) * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Specialized</Badge>
                <CardTitle className="text-2xl font-bold text-slate-900">{specialty.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  {specialty.description}
                </p>
                <ul className="space-y-3">
                  {specialty.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-slate-900 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

