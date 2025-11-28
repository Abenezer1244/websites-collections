'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Announcement, AnnouncementTag, AnnouncementTitle } from '@/components/kibo-ui/announcement'
import { Button } from '@/components/ui/button'

export function GalleryCTASection() {
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
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-gradient-to-br from-primary via-primary/95 to-primary overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className={`bg-white/10 backdrop-blur-md border-white/20 shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <CardContent className="pt-8 pb-8 text-center">
            <Announcement className="mx-auto max-w-fit mb-6 bg-white/20 backdrop-blur-md border-white/30" themed>
              <AnnouncementTag className="bg-white/30 text-white">Tour</AnnouncementTag>
              <AnnouncementTitle className="text-white">
                Schedule a Tour
              </AnnouncementTitle>
            </Announcement>
            
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            
            <CardTitle className="text-3xl md:text-4xl font-bold text-white mb-6">
              Schedule a Tour
            </CardTitle>
            <CardDescription className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              We'd love to show you around Ark Care AFH! Contact us to schedule a personalized tour of our facility and meet our caring staff.
            </CardDescription>
            
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-2xl">
              <Link href="/contact" className="inline-flex items-center gap-2">
                <span>Schedule Your Tour</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

