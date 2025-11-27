'use client'

import React, { useState, useEffect } from 'react'
import { TestimonialCard } from '@/components/cards/testimonial-card'

interface Testimonial {
  quote: string
  author: string
  role?: string
  rating?: number
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoPlayDelay?: number
}

export function TestimonialCarousel({ testimonials, autoPlayDelay = 5000 }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, autoPlayDelay)

    return () => clearInterval(interval)
  }, [isAutoPlaying, autoPlayDelay, testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), autoPlayDelay)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), autoPlayDelay)
  }

  const firstTestimonial = testimonials[currentIndex]
  const secondTestimonial = testimonials[(currentIndex + 1) % testimonials.length]

  return (
    <div className="w-full">
      {/* Carousel Container - 2 Testimonials */}
      <div className="relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 animate-slideIn">
          {/* First Testimonial */}
          <TestimonialCard
            quote={firstTestimonial.quote}
            author={firstTestimonial.author}
            role={firstTestimonial.role}
            rating={firstTestimonial.rating}
          />

          {/* Second Testimonial */}
          <TestimonialCard
            quote={secondTestimonial.quote}
            author={secondTestimonial.author}
            role={secondTestimonial.role}
            rating={secondTestimonial.rating}
          />
        </div>
      </div>

      {/* Previous/Next Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
          aria-label="Previous testimonials"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="p-2 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
          aria-label="Next testimonials"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Auto-play indicator */}
      <div className="flex justify-center mt-4 text-sm text-slate-600">
        <span>
          {currentIndex + 1} - {((currentIndex + 1) % testimonials.length) + 1} of {testimonials.length}
        </span>
      </div>
    </div>
  )
}
