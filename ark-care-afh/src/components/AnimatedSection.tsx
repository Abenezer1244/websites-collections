'use client'

import { ReactNode } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animationType?: 'fade' | 'slide-left' | 'slide-right' | 'clip-columns'
  delay?: number
  threshold?: number
}

export function AnimatedSection({ 
  children, 
  className = '',
  animationType = 'fade',
  delay = 0,
  threshold = 0.1
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold, triggerOnce: true })

  const animationClasses = {
    fade: 'animate-on-scroll',
    'slide-left': 'animate-slide-in-left',
    'slide-right': 'animate-slide-in-right',
    'clip-columns': 'animate-clip-columns'
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${className} ${isVisible ? animationClasses[animationType] : ''}`}
      style={{
        animationDelay: `${delay}s`,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  )
}

