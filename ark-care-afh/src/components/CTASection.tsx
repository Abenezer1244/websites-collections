'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Marquee, MarqueeContent, MarqueeItem, MarqueeFade } from '@/components/kibo-ui/marquee'
import { Announcement, AnnouncementTag, AnnouncementTitle } from '@/components/kibo-ui/announcement'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { AnimatedText } from '@/components/AnimatedText'

export function CTASection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  const trustIndicators = [
    { icon: '✓', text: 'Free Consultation' },
    { icon: '✓', text: 'No Obligation' },
    { icon: '✓', text: 'Expert Guidance' },
    { icon: '✓', text: 'Licensed Facility' },
    { icon: '✓', text: '24/7 Care' },
    { icon: '✓', text: 'Personalized Plans' },
  ]

  return (
    <section ref={sectionRef} className="relative py-10 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-br from-primary via-primary/95 to-primary overflow-hidden" data-section="cta">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Card className={`bg-transparent border-white/20 shadow-2xl backdrop-blur-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <CardContent className="pt-8 pb-8">
            {/* Badge with Kibo UI Announcement */}
            <Announcement className="mx-auto max-w-fit mb-6 bg-white/20 backdrop-blur-md border-white/30" themed>
              <AnnouncementTag className="bg-white/30">Action</AnnouncementTag>
              <AnnouncementTitle className="text-white">
                Take Action Today
              </AnnouncementTitle>
            </Announcement>

            {/* Heading with Text Animation */}
            <AnimatedText
              text="Ready to Get Started?"
              className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 leading-tight text-white block"
              delay={0.3}
              animationType="clip-slide"
            />
            <p className="text-base md:text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Schedule a tour to see our facility and meet our team. We're here to answer your questions and help you make the best decision for your loved one.
            </p>

            {/* CTA Buttons with Border Beam Animation */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl button-border-beam rounded-full">
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Schedule a Tour
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm button-border-beam rounded-full">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>

            {/* Trust Indicators Marquee with Enhanced Kibo UI */}
            <div className="mt-8">
              <Marquee className="[--duration:30s]">
                <MarqueeContent>
                  {trustIndicators.map((item, index) => (
                    <MarqueeItem key={index} className="px-6">
                      <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs font-medium whitespace-nowrap">{item.text}</span>
                      </div>
                    </MarqueeItem>
                  ))}
                </MarqueeContent>
                <MarqueeFade side="left" className="from-primary" />
                <MarqueeFade side="right" className="from-primary" />
              </Marquee>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

