import React from 'react'
import { cn } from '@/lib/utils'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps extends React.HTMLAttributes<HTMLOListElement> {
  items: BreadcrumbItem[]
  maxItems?: number
}

export function Breadcrumb({ items, maxItems = 5, className, ...props }: BreadcrumbProps) {
  const displayItems = maxItems && items.length > maxItems ? items.slice(-maxItems) : items

  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center gap-2', className)} {...props}>
      <ol className="flex items-center gap-2 text-sm">
        {displayItems.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            {item.href ? (
              <a
                href={item.href}
                className="text-primary hover:text-primary/80 transition-colors duration-200 underline"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-slate-600">{item.label}</span>
            )}
            {idx < displayItems.length - 1 && (
              <span className="text-slate-400">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
