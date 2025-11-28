'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CardData {
  title: string
  description: string
  content: React.ReactNode
}

interface CardRotatorProps {
  cards: CardData[]
  autoRotate?: boolean
  rotationInterval?: number
  className?: string
}

export function CardRotator({ 
  cards, 
  autoRotate = true, 
  rotationInterval = 5000,
  className = ''
}: CardRotatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (!autoRotate || cards.length <= 1) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length)
        setIsTransitioning(false)
      }, 300)
    }, rotationInterval)

    return () => clearInterval(interval)
  }, [autoRotate, rotationInterval, cards.length])

  const goToNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length)
      setIsTransitioning(false)
    }, 300)
  }

  const goToPrev = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
      setIsTransitioning(false)
    }, 300)
  }

  const currentCard = cards[currentIndex]

  return (
    <div className={`relative ${className}`}>
      <div className="card-rotate-container">
        <Card 
          className={`card-rotate flashlight-card transition-all duration-500 ${
            isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          <CardHeader>
            <CardTitle>{currentCard.title}</CardTitle>
            <CardDescription>{currentCard.description}</CardDescription>
          </CardHeader>
          <CardContent>
            {currentCard.content}
          </CardContent>
        </Card>
      </div>

      {cards.length > 1 && (
        <div className="flex justify-between items-center mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrev}
            className="rounded-full"
            aria-label="Previous card"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex gap-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true)
                  setTimeout(() => {
                    setCurrentIndex(index)
                    setIsTransitioning(false)
                  }, 300)
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-primary/30'
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="rounded-full"
            aria-label="Next card"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
