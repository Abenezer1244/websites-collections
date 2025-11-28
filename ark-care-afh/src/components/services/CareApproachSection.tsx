'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Announcement, AnnouncementTag, AnnouncementTitle } from '@/components/kibo-ui/announcement'
import { Badge } from '@/components/ui/badge'

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
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Announcement className="mx-auto max-w-fit mb-4" themed>
            <AnnouncementTag>Approach</AnnouncementTag>
            <AnnouncementTitle>Our Care Approach</AnnouncementTitle>
          </Announcement>
          <div className={`mt-2 h-1 bg-primary mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'w-20' : 'w-0'}`} />
        </div>

        <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card className="bg-gradient-to-br from-white via-slate-50 to-primary/5 border-primary/20 shadow-xl flashlight-card animate-on-scroll" style={{ animationFillMode: 'both' }}>
            <CardContent className="pt-6 space-y-6">
              <p className="text-lg text-slate-800 leading-relaxed">
                At Ark Care AFH, we believe in a person-centered care approach that respects individuality and promotes independence. Our services are designed around each resident's unique needs, preferences, and goals.
              </p>
              <p className="text-lg text-slate-800 leading-relaxed">
                We work closely with families, healthcare providers, and residents to develop comprehensive care plans that ensure the highest quality of life possible. We accept multiple programs including HCS (Home and Community Services), DDA Meaningful Day Services, Expanded Community Services, and Specialized Behavior Support.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white via-slate-50 to-primary/10 border-2 border-primary/20 shadow-xl backdrop-blur-sm flashlight-card animate-on-scroll" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2">Care Planning</Badge>
              <CardTitle className="text-2xl font-bold text-slate-900">
                Personalized Care Plans
              </CardTitle>
              <CardDescription>
                Each resident receives an individualized care plan developed in consultation with family members and healthcare providers. Our plans include:
              </CardDescription>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

