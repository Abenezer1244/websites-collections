'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Announcement, AnnouncementTag, AnnouncementTitle } from '@/components/kibo-ui/announcement'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { AnimatedText } from '@/components/AnimatedText'

export function WhyChooseSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  const features = [
    {
      icon: (
        <svg className="w-7 h-7 text-primary transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24/7 Care",
      subtitle: "Always Available",
      description: "Round-the-clock support from licensed professionals ensuring safety and comfort at all times.",
      badge: "Professional",
      items: [
        "Licensed nursing professionals",
        "Emergency response systems",
        "Medication management"
      ]
    },
    {
      icon: (
        <svg className="w-7 h-7 text-primary transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Home-Like",
      subtitle: "Comfortable Setting",
      description: "A warm, welcoming setting designed to feel like home while providing professional care.",
      badge: "Comfortable",
      items: [
        "Comfortable private rooms",
        "Community gathering spaces",
        "Beautiful outdoor areas"
      ]
    },
    {
      icon: (
        <svg className="w-7 h-7 text-primary transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Engagement",
      subtitle: "Active Lifestyle",
      description: "Meaningful activities and social engagement to support physical and mental well-being.",
      badge: "Active",
      items: [
        "Daily social activities",
        "Recreational programs",
        "Mental wellness support"
      ]
    }
  ]

  const trustIndicators = [
    { value: "Licensed", label: "State Certified Facility" },
    { value: "24/7", label: "Professional Care" },
    { value: "Personalized", label: "Individual Care Plans" },
    { value: "Experienced", label: "Trained Staff" }
  ]

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden bg-white" data-section="why-choose">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Professional Header with Kibo UI Announcement */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-6">
            <Announcement className="mx-auto max-w-fit mb-4" themed>
              <AnnouncementTag>Trusted</AnnouncementTag>
              <AnnouncementTitle>Why Choose Us</AnnouncementTitle>
            </Announcement>
            <div className={`mt-2 h-1 bg-primary mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'w-20' : 'w-0'}`} />
          </div>
          <AnimatedText
            text="Why Families Trust Ark Care AFH"
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-slate-900 block"
            delay={0.2}
            animationType="clip-slide"
          />
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-slate-700">
            Licensed, professional care in a warm, home-like setting. Experience the peace of mind that comes with expert care for your loved ones.
          </p>
        </div>

        {/* Professional Features Grid with Kibo UI Card Components */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-12 sm:mb-14 md:mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group h-full bg-gradient-to-br from-white via-slate-50 to-primary/5 border-primary/20 shadow-xl backdrop-blur-sm transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 hover:border-primary/40 flashlight-card animate-on-scroll ${isVisible ? 'opacity-100 translate-y-0' : ''}`}
              style={{
                transitionDelay: `${(index + 1) * 100}ms`,
                animationDelay: `${(index + 1) * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-slate-900 mb-1">{feature.title}</CardTitle>
                    <CardDescription className="text-sm text-slate-500">{feature.subtitle}</CardDescription>
                  </div>
                </div>
                {feature.badge && (
                  <Badge variant="secondary" className="w-fit">{feature.badge}</Badge>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators with Kibo UI Card Components */}
        <div className={`grid md:grid-cols-4 gap-6 mb-16 pt-12 border-t border-primary/20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {trustIndicators.map((indicator, index) => (
            <Card
              key={index}
              className="text-center group bg-gradient-to-br from-white via-slate-50 to-primary/5 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2 transition-all duration-300 group-hover:scale-110">
                  {indicator.value}
                </div>
                <div className="text-sm text-slate-700 font-medium">
                  {indicator.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}

