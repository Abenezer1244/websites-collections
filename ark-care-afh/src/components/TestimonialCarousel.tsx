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

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), autoPlayDelay)
  }

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

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="w-full">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        {/* Slide */}
        <div className="animate-slideIn">
          <TestimonialCard
            quote={currentTestimonial.quote}
            author={currentTestimonial.author}
            role={currentTestimonial.role}
            rating={currentTestimonial.rating}
          />
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary w-8'
                : 'bg-primary/40 hover:bg-primary/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Previous/Next Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="p-2 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Auto-play indicator */}
      <div className="flex justify-center mt-4 text-sm text-slate-600">
        <span>
          {currentIndex + 1} / {testimonials.length}
        </span>
      </div>
    </div>
  )
}
