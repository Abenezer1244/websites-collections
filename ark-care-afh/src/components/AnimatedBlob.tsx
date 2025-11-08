'use client'

interface AnimatedBlobProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
  size?: 'sm' | 'md' | 'lg'
  opacity?: 'light' | 'medium' | 'heavy'
  className?: string
}

export function AnimatedBlob({
  position = 'top-right',
  size = 'lg',
  opacity = 'medium',
  className = ''
}: AnimatedBlobProps) {
  const sizeClasses = {
    sm: 'w-48 h-48',
    md: 'w-96 h-96',
    lg: 'w-full h-full max-w-[600px] max-h-[600px]'
  }

  const opacityClasses = {
    light: 'opacity-10',
    medium: 'opacity-20',
    heavy: 'opacity-30'
  }

  const positionClasses = {
    'top-left': 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
    'top-right': 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
    'bottom-left': 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
    'bottom-right': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  }

  return (
    <div
      className={`absolute pointer-events-none ${positionClasses[position]} ${opacityClasses[opacity]} ${sizeClasses[size]} ${className}`}
      style={{
        background: 'radial-gradient(circle at 30% 70%, hsl(var(--primary)) 0%, transparent 50%)',
        filter: 'blur(40px)',
        animation: 'blob 7s infinite'
      }}
      aria-hidden="true"
    />
  )
}

export function AnimatedBlobSecondary({
  position = 'bottom-left',
  size = 'md',
  opacity = 'light',
  className = ''
}: AnimatedBlobProps) {
  const sizeClasses = {
    sm: 'w-48 h-48',
    md: 'w-96 h-96',
    lg: 'w-full h-full max-w-[600px] max-h-[600px]'
  }

  const opacityClasses = {
    light: 'opacity-10',
    medium: 'opacity-20',
    heavy: 'opacity-30'
  }

  const positionClasses = {
    'top-left': 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
    'top-right': 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
    'bottom-left': 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
    'bottom-right': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  }

  return (
    <div
      className={`absolute pointer-events-none ${positionClasses[position]} ${opacityClasses[opacity]} ${sizeClasses[size]} ${className}`}
      style={{
        background: 'radial-gradient(circle at 70% 30%, hsl(var(--secondary)) 0%, transparent 50%)',
        filter: 'blur(40px)',
        animation: 'blob 9s infinite reverse'
      }}
      aria-hidden="true"
    />
  )
}
