'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface StatCounterProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  duration?: number
  format?: (value: number) => string
  suffix?: string
  prefix?: string
  decimals?: number
}

export function StatCounter({
  value,
  duration = 2000,
  format,
  suffix = '',
  prefix = '',
  decimals = 0,
  className,
  ...props
}: StatCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationId: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const currentValue = Math.floor(progress * value * Math.pow(10, decimals)) / Math.pow(10, decimals)
      setCount(currentValue)

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [value, duration, decimals])

  const displayValue = format ? format(count) : `${prefix}${count.toFixed(decimals)}${suffix}`

  return (
    <div className={cn('font-bold text-slate-900', className)} {...props}>
      {displayValue}
    </div>
  )
}
