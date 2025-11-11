import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20',
        secondary: 'bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20',
        success: 'bg-green-100 text-green-800 border border-green-300 hover:bg-green-200',
        warning: 'bg-yellow-100 text-yellow-800 border border-yellow-300 hover:bg-yellow-200',
        danger: 'bg-red-100 text-red-800 border border-red-300 hover:bg-red-200',
        accent: 'bg-purple-100 text-purple-800 border border-purple-300 hover:bg-purple-200',
        outline: 'border border-slate-300 text-slate-700 hover:bg-slate-50',
      },
      size: {
        sm: 'text-xs px-2 py-0.5',
        md: 'text-xs px-3 py-1',
        lg: 'text-sm px-4 py-1.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
