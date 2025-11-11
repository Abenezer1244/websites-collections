'use client'

import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number | number[]
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options

  const elementRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        if (triggerOnce) {
          setHasTriggered(true)
          observer.unobserve(entry.target)
        }
      } else if (!triggerOnce) {
        setIsVisible(false)
      }
    }, {
      threshold,
      rootMargin
    })

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  return {
    elementRef,
    isVisible: triggerOnce ? hasTriggered : isVisible
  }
}

interface UseStaggerAnimationOptions {
  itemCount: number
  baseDelay?: number
  delayIncrement?: number
}

export function useStaggerAnimation({ itemCount, baseDelay = 0, delayIncrement = 100 }: UseStaggerAnimationOptions) {
  const getItemDelay = (index: number) => {
    return baseDelay + index * delayIncrement
  }

  return { getItemDelay }
}
