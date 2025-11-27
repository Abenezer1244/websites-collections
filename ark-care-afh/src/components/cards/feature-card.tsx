import React from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  number?: string | number
  icon: React.ReactNode
  title: string
  description: string
  badge?: string
  highlighted?: boolean
}

export function FeatureCard({
  number,
  icon,
  title,
  description,
  badge,
  highlighted = false,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        'relative p-6 rounded-xl border transition-all duration-300 ease-out shadow-md',
        highlighted
          ? 'border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 ring-2 ring-primary/20'
          : 'border-slate-200 bg-white hover:border-primary/20',
        'hover:shadow-lg hover:scale-105 group',
        'animate-slideup',
        className
      )}
      {...props}
    >
      {/* Number Badge */}
      {number !== undefined && (
        <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg">
          {number}
        </div>
      )}

      {/* Icon */}
      <div className={cn(
        'inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4',
        'transition-all duration-300 group-hover:scale-110',
        highlighted
          ? 'bg-primary/20 text-primary'
          : 'bg-slate-100 text-slate-700 group-hover:bg-primary/10 group-hover:text-primary'
      )}>
        {icon}
      </div>

      {/* Badge */}
      {badge && (
        <div className="mb-3">
          <Badge variant="secondary">{badge}</Badge>
        </div>
      )}

      {/* Title */}
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>

      {/* Decorative Line */}
      <div className={cn(
        'absolute bottom-0 left-0 h-1 rounded-full transition-all duration-300',
        'bg-gradient-to-r from-primary to-transparent',
        'group-hover:w-full w-8'
      )} />
    </div>
  )
}
