'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

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
    <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden" data-section="testimonials" style={{
      backgroundImage: 'url(/white_background_4.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/white_background_4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        aria-hidden="true"
      />

      {/* Rich Textured Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-primary/10 to-slate-100/80" />
        
        {/* Animated orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-gradient-to-tr from-primary/15 to-slate-100/50 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}} />
        
        {/* Diagonal pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(0,0,0,0.05) 50%, transparent 70%), linear-gradient(-45deg, transparent 30%, rgba(0,0,0,0.05) 50%, transparent 70%)',
          backgroundSize: '50px 50px'
        }} />
        
        {/* Radial accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_70%)] opacity-10" />
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
          <div className="relative max-w-5xl mx-auto">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl">
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
                    className="min-w-full flex-shrink-0 px-4 py-2"
                  >
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-primary/20 p-8 md:p-12 min-h-[300px] md:min-h-[250px]">
                      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                        {/* Image */}
                        <div className="flex-shrink-0 mx-auto md:mx-0">
                          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-lg">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 128px, 160px"
                            />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 w-full text-center md:text-left min-w-0">
                          {/* Quote Icon */}
                          <div className="mb-4 flex justify-center md:justify-start">
                            <svg className="w-12 h-12 text-primary/30 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.985zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                          </div>
                          
                          {/* Quote */}
                          <p className="text-base md:text-lg lg:text-xl text-slate-700 mb-6 leading-relaxed italic break-words overflow-wrap-anywhere">
                            "{testimonial.quote}"
                          </p>
                          
                          {/* Author Info */}
                          <div className="mt-auto">
                            <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-1">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-slate-600">
                              {testimonial.designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-8 h-3 bg-primary'
                      : 'w-3 h-3 bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

