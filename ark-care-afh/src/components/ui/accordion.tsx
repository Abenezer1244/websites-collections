'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
  icon?: React.ReactNode
}

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[]
  defaultOpen?: string[]
  allowMultiple?: boolean
}

export function Accordion({
  items,
  defaultOpen = [],
  allowMultiple = false,
  className,
  ...props
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultOpen))

  const toggleItem = (id: string) => {
    const newOpen = new Set(openItems)

    if (newOpen.has(id)) {
      newOpen.delete(id)
    } else {
      if (!allowMultiple) {
        newOpen.clear()
      }
      newOpen.add(id)
    }

    setOpenItems(newOpen)
  }

  return (
    <div className={cn('space-y-3', className)} {...props}>
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/30 shadow-md hover:shadow-lg"
        >
          {/* Header */}
          <button
            onClick={() => toggleItem(item.id)}
            className={cn(
              'w-full px-6 py-4 flex items-center justify-between gap-4 transition-all duration-300',
              'hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/20',
              openItems.has(item.id) && 'bg-primary/5 border-b border-slate-200'
            )}
            aria-expanded={openItems.has(item.id)}
            aria-controls={`panel-${item.id}`}
          >
            <div className="flex items-center gap-3 text-left">
              {item.icon && (
                <div className="flex-shrink-0 text-lg text-primary">
                  {item.icon}
                </div>
              )}
              <span className="font-semibold text-slate-900">{item.title}</span>
            </div>

            {/* Chevron Icon */}
            <div
              className={cn(
                'flex-shrink-0 transition-transform duration-300',
                openItems.has(item.id) && 'rotate-180'
              )}
            >
              <svg
                className="w-5 h-5 text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </button>

          {/* Content */}
          {openItems.has(item.id) && (
            <div
              id={`panel-${item.id}`}
              className="px-6 py-4 text-slate-600 leading-relaxed animate-fade-in-down"
              role="region"
              aria-labelledby={`button-${item.id}`}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
