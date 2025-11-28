'use client'

import { useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  animationType?: 'clip-slide' | 'fade' | 'slide-up'
}

export function AnimatedText({ 
  text, 
  className = '', 
  delay = 0,
  animationType = 'clip-slide'
}: AnimatedTextProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimated(true)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [isVisible, delay])

  if (animationType === 'clip-slide') {
    return (
      <span ref={ref as React.RefObject<HTMLSpanElement>} className={className}>
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={`inline-block text-clip-slide`}
            style={{
              animationDelay: `${delay + index * 0.05}s`,
              animationFillMode: 'both'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    )
  }

  return (
    <span
      ref={ref as React.RefObject<HTMLSpanElement>}
      className={`${className} ${isVisible ? `animate-${animationType === 'fade' ? 'on-scroll' : animationType === 'slide-up' ? 'slide-in-left' : 'on-scroll'}` : ''}`}
      style={{ animationDelay: `${delay}s`, animationFillMode: 'both' }}
    >
      {text}
    </span>
  )
}

