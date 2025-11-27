'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from '@/components/kibo-ui/marquee'

interface Testimonial {
  quote: string
  name: string
  designation: string
  image: string
}

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const testimonials: Testimonial[] = [
    {
      quote: "Ark Care AFH has been wonderful for my mother. She feels at home here, the staff treats her with genuine care and respect.",
      name: "Margaret S.",
      designation: "Daughter",
      image: "/elderly-care-facilities.jpg"
    },
    {
      quote: "I moved here 6 months ago and it's been the best decision. The caregivers are patient and kind, and I feel like part of a family.",
      name: "Henry P.",
      designation: "Resident",
      image: "/homy.webp"
    },
    {
      quote: "The level of personalized attention my father receives is exceptional. They communicate regularly and truly care about his well-being.",
      name: "Jennifer K.",
      designation: "Daughter",
      image: "/activity-engagement.png"
    },
    {
      quote: "Professional, compassionate, and attentive. My wife receives excellent care for her specific needs. Very grateful for the support.",
      name: "Robert M.",
      designation: "Spouse",
      image: "/comprehensive-care.png"
    },
    {
      quote: "The staff goes above and beyond. They listen to our concerns and always have time to chat. It's truly like a home.",
      name: "Patricia L.",
      designation: "Family Member",
      image: "/care-247.png"
    },
    {
      quote: "Best decision we made for our father's care. Safe, loving environment with activities and excellent medical management.",
      name: "David T.",
      designation: "Son",
      image: "/elderly-care-facilities.jpg"
    }
  ]

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

  // Auto-glide functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change every 5 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    // Reset auto-play timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
  }

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden bg-white" data-section="testimonials">
      {/* Futuristic Animated Dot Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base white gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/25 to-white" />
        
        {/* Animated Dot Grid - Primary Layer */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.4) 2px, transparent 0)',
            backgroundSize: '48px 48px',
            opacity: 0.4,
            animation: 'dotGridFloat 16s ease-in-out infinite',
          }}
        />
        
        {/* Animated Dot Grid - Secondary Layer */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.35) 1.5px, transparent 0)',
            backgroundSize: '64px 64px',
            opacity: 0.3,
            animation: 'dotGridFloat 20s ease-in-out infinite reverse',
          }}
        />
        
        {/* Animated Dot Grid - Tertiary Layer */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 1px, transparent 0)',
            backgroundSize: '80px 80px',
            opacity: 0.2,
            animation: 'dotGridFloat 24s ease-in-out infinite',
          }}
        />
        
        {/* Animated grid lines connecting dots */}
        <div 
          className="absolute inset-0"
          style={{
            opacity: 0.15,
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            animation: 'gridPulse2 9s ease-in-out infinite',
          }}
        />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-gradient-to-br from-primary/6 via-primary/2 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '16s'}} />
        <div className="absolute bottom-10 left-10 w-[650px] h-[650px] bg-gradient-to-tr from-slate-100/35 via-primary/3 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '20s', animationDelay: '5s'}} />
        
        {/* Light mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/1.5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Stories From Our Community
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Hear directly from residents and families about their experiences at Ark Care AFH
          </p>
        </div>

        {/* Auto-Gliding Testimonials Carousel */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative max-w-6xl mx-auto">
            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              {/* Testimonials Track */}
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="min-w-full flex-shrink-0 px-4"
                  >
                    <div className="relative bg-gradient-to-br from-white via-slate-50 to-primary/5 rounded-3xl shadow-2xl border border-primary/10 p-10 md:p-14 overflow-hidden">
                      {/* Decorative Background Elements */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
                      
                      <div className="relative z-10">
                        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                          {/* Star Rating */}
                          <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-6 h-6 text-yellow-400 fill-current"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>

                          {/* Quote */}
                          <div className="mb-8">
                            <svg className="w-16 h-16 text-primary/20 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.985zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="text-lg md:text-xl lg:text-2xl text-slate-800 leading-relaxed font-medium break-words overflow-wrap-anywhere">
                              {testimonial.quote}
                            </p>
                          </div>

                          {/* Author Section */}
                          <div className="flex flex-col md:flex-row items-center gap-6 pt-8 border-t border-primary/10 w-full">
                            {/* Image */}
                            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden shadow-lg ring-2 ring-primary/20">
                              <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 80px, 96px"
                              />
                            </div>
                            
                            {/* Author Info */}
                            <div className="flex-1">
                              <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                                {testimonial.name}
                              </h4>
                              <p className="text-base text-slate-600 font-medium">
                                {testimonial.designation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center items-center gap-3 mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-10 h-3 bg-primary shadow-lg shadow-primary/30'
                      : 'w-3 h-3 bg-primary/20 hover:bg-primary/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scrolling Testimonials Marquee */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Marquee className="[--duration:40s]">
            <MarqueeContent>
              {testimonials.map((testimonial, index) => (
                <MarqueeItem key={index} className="w-[300px] sm:w-[400px]">
                  <div className="bg-gradient-to-br from-white via-slate-50 to-primary/5 rounded-xl border border-primary/10 p-6 shadow-lg mx-2">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-slate-700 mb-3 line-clamp-3">{testimonial.quote}</p>
                    <p className="text-xs font-semibold text-slate-900">{testimonial.name}</p>
                  </div>
                </MarqueeItem>
              ))}
            </MarqueeContent>
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />
          </Marquee>
        </div>
      </div>
    </section>
  )
}

