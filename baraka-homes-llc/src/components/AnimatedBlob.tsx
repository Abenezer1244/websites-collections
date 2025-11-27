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
    sm: 'w-40 h-40',
    md: 'w-72 h-72',
    lg: 'w-96 h-96'
  }

  const opacityClasses = {
    light: 'opacity-15',
    medium: 'opacity-25',
    heavy: 'opacity-35'
  }

  const positionClasses = {
    'top-left': 'top-10 left-10',
    'top-right': 'top-10 right-10',
    'bottom-left': 'bottom-10 left-10',
    'bottom-right': 'bottom-10 right-10',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  }

  return (
    <div
      className={`absolute pointer-events-none ${positionClasses[position]} ${opacityClasses[opacity]} ${sizeClasses[size]} ${className}`}
      style={{
        background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
        filter: 'blur(50px)',
        animation: 'float 6s ease-in-out infinite'
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
    sm: 'w-40 h-40',
    md: 'w-72 h-72',
    lg: 'w-96 h-96'
  }

  const opacityClasses = {
    light: 'opacity-15',
    medium: 'opacity-25',
    heavy: 'opacity-35'
  }

  const positionClasses = {
    'top-left': 'top-10 left-10',
    'top-right': 'top-10 right-10',
    'bottom-left': 'bottom-10 left-10',
    'bottom-right': 'bottom-10 right-10',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  }

  return (
    <div
      className={`absolute pointer-events-none ${positionClasses[position]} ${opacityClasses[opacity]} ${sizeClasses[size]} ${className}`}
      style={{
        background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)',
        filter: 'blur(50px)',
        animation: 'float 8s ease-in-out infinite reverse'
      }}
      aria-hidden="true"
    />
  )
}
