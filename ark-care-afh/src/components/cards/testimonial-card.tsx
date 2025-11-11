import React from 'react'
import { Rating } from '@/components/ui/rating'
import { cn } from '@/lib/utils'

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string
  author: string
  role?: string
  avatar?: string
  rating?: number
  gradient?: boolean
}

export function TestimonialCard({
  quote,
  author,
  role,
  avatar,
  rating = 5,
  gradient = true,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'group relative p-6 rounded-xl border transition-all duration-300 ease-out',
        gradient
          ? 'bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:border-primary/40'
          : 'bg-white border-slate-200 hover:border-primary/30',
        'hover:shadow-xl hover:scale-105 animate-slideup',
        className
      )}
      {...props}
    >
      {/* Quote Mark */}
      <div className="absolute top-4 right-6 text-4xl text-primary/20 font-serif">
        "
      </div>

      {/* Quote Text */}
      <p className="text-slate-700 mb-6 leading-relaxed italic">{quote}</p>

      {/* Rating */}
      {rating > 0 && (
        <div className="mb-6">
          <Rating rating={rating} maxRating={5} size="sm" />
        </div>
      )}

      {/* Author Section */}
      <div className="flex items-center gap-4">
        {avatar && (
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
          />
        )}
        {!avatar && (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-white font-semibold">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-slate-900">{author}</p>
          {role && <p className="text-sm text-slate-600">{role}</p>}
        </div>
      </div>
    </div>
  )
}
