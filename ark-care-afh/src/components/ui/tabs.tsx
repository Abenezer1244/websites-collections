'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface TabItem {
  id: string
  label: string
  content: React.ReactNode
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: TabItem[]
  defaultTab?: string
  variant?: 'pills' | 'underline' | 'cards'
}

export function Tabs({
  items,
  defaultTab,
  variant = 'underline',
  className,
  ...props
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id)

  const tabsClasses = {
    pills: 'inline-flex items-center gap-2 p-1 bg-slate-100 rounded-lg',
    underline: 'flex items-center gap-6 border-b border-slate-200',
    cards: 'flex flex-wrap items-center gap-3'
  }

  const buttonClasses = {
    pills: (isActive: boolean) =>
      cn(
        'px-4 py-2 rounded-md text-sm font-medium transition-all duration-200',
        isActive
          ? 'bg-white text-primary shadow-sm'
          : 'text-slate-600 hover:text-slate-900'
      ),
    underline: (isActive: boolean) =>
      cn(
        'pb-3 px-1 text-sm font-medium transition-all duration-200 relative',
        isActive
          ? 'text-primary'
          : 'text-slate-600 hover:text-slate-900'
      ),
    cards: (isActive: boolean) =>
      cn(
        'px-4 py-2 rounded-lg border-2 transition-all duration-200 text-sm font-medium',
        isActive
          ? 'border-primary bg-primary/5 text-primary'
          : 'border-slate-200 text-slate-600 hover:border-primary/30'
      )
  }

  return (
    <div className={cn('w-full', className)} {...props}>
      {/* Tab Buttons */}
      <div className={cn(
        'mb-4',
        variant === 'underline' && 'mb-0'
      )}>
        <div className={tabsClasses[variant]}>
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={buttonClasses[variant](activeTab === item.id)}
              aria-selected={activeTab === item.id}
              role="tab"
            >
              {item.label}
              {variant === 'underline' && activeTab === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="animate-fade-in-up">
        {items.map((item) =>
          activeTab === item.id ? (
            <div
              key={item.id}
              className="pt-4"
              role="tabpanel"
              aria-labelledby={item.id}
            >
              {item.content}
            </div>
          ) : null
        )}
      </div>
    </div>
  )
}
