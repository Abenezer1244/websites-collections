import React from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  title: string
  description: string
  badge?: string
  features?: string[]
  href?: string
}

export function ServiceCard({
  icon,
  title,
  description,
  badge,
  features,
  href,
  className,
  ...props
}: ServiceCardProps) {
  const CardContent = (
    <>
      {icon && <div className="mb-4 text-4xl">{icon}</div>}
      {badge && (
        <div className="mb-4">
          <Badge variant="secondary">{badge}</Badge>
        </div>
      )}
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-700 mb-4 leading-relaxed">{description}</p>
      {features && (
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-slate-600 text-sm">
              <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={cn(
          'group block h-full p-6 rounded-xl border border-slate-200 bg-white shadow-md',
          'transition-all duration-300 ease-out',
          'hover:shadow-xl hover:border-primary/30 hover:scale-105',
          'active:scale-95',
          className
        )}
      >
        {CardContent}
      </a>
    )
  }

  return (
    <div
      className={cn(
        'group h-full p-6 rounded-xl border border-slate-200 bg-white shadow-md',
        'transition-all duration-300 ease-out',
        'hover:shadow-xl hover:border-primary/30 hover:scale-105',
        className
      )}
      {...props}
    >
      {CardContent}
    </div>
  )
}
