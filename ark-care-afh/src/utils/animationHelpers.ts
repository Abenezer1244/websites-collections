/**
 * Animation helper utilities for consistent animations across the site
 */

export const animationDelays = {
  fast: 100,
  normal: 200,
  slow: 300
}

export function getStaggerDelay(index: number, baseDelay: number = 100): string {
  return `${index * baseDelay}ms`
}

export function getAnimationClass(animationType: 'fade' | 'slide-left' | 'slide-right' | 'clip-columns'): string {
  const classes = {
    fade: 'animate-on-scroll',
    'slide-left': 'animate-slide-in-left',
    'slide-right': 'animate-slide-in-right',
    'clip-columns': 'animate-clip-columns'
  }
  return classes[animationType]
}

