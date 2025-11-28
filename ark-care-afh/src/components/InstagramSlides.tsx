'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { AnimatedText } from '@/components/AnimatedText'

interface Slide {
  number: number
  title: string
  content: string
  badge?: string
}

interface InstagramSlidesProps {
  slides: Slide[]
  authorName?: string
  className?: string
}

export function InstagramSlides({ slides, authorName = 'Ark Care AFH', className = '' }: InstagramSlidesProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && currentSlide < slides.length - 1) {
        goToNext()
      } else if (e.key === 'ArrowUp' && currentSlide > 0) {
        goToPrev()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide, slides.length])

  const goToNext = () => {
    if (currentSlide < slides.length - 1) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => prev + 1)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const goToPrev = () => {
    if (currentSlide > 0) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => prev - 1)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div className={`relative h-screen overflow-hidden bg-gradient-to-br from-white via-slate-50 to-primary/5 ${className}`}>
      {/* Slide Content */}
      <div className="h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <Card 
          className={`w-full max-w-4xl aspect-[3/4] bg-gradient-to-br from-white via-slate-50 to-primary/5 border-2 border-primary/20 shadow-2xl flashlight-card transition-all duration-500 ${
            isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          <CardHeader className="text-center pb-4">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="outline" className="text-xs">
                {currentSlide + 1} / {slides.length}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {authorName}
              </Badge>
            </div>
            {currentSlideData.badge && (
              <Badge variant="secondary" className="mb-2">
                {currentSlideData.badge}
              </Badge>
            )}
            <CardTitle className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              <AnimatedText
                text={currentSlideData.title}
                animationType="clip-slide"
                delay={0.1}
              />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-6">
              <AnimatedText
                text={currentSlideData.content}
                className="text-lg md:text-xl text-slate-700 leading-relaxed"
                animationType="clip-slide"
                delay={0.3}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrev}
          disabled={currentSlide === 0}
          className="rounded-full button-border-beam"
          aria-label="Previous slide"
        >
          <ChevronUp className="h-4 w-4" />
        </Button>

        {/* Slide Indicators */}
        <div className="flex flex-col gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true)
                setTimeout(() => {
                  setCurrentSlide(index)
                  setIsTransitioning(false)
                }, 300)
              }}
              className={`w-2 h-8 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-primary w-3'
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          disabled={currentSlide === slides.length - 1}
          className="rounded-full button-border-beam"
          aria-label="Next slide"
        >
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary/20">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  )
}

