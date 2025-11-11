import React from 'react'
import { cn } from '@/lib/utils'

interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  maxButtons?: number
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  maxButtons = 7,
  className,
  ...props
}: PaginationProps) {
  // Calculate page range to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    let startPage = 1
    let endPage = totalPages

    if (totalPages > maxButtons) {
      const halfWindow = Math.floor(maxButtons / 2)
      startPage = Math.max(1, currentPage - halfWindow)
      endPage = Math.min(totalPages, currentPage + halfWindow)

      if (startPage === 1) {
        endPage = Math.min(totalPages, maxButtons)
      } else if (endPage === totalPages) {
        startPage = Math.max(1, totalPages - maxButtons + 1)
      }
    }

    // Add first page and ellipsis
    if (startPage > 1) {
      pages.push(1)
      if (startPage > 2) {
        pages.push('...')
      }
    }

    // Add page range
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    // Add ellipsis and last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push('...')
      }
      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  const buttonClasses = (isActive: boolean) =>
    cn(
      'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
      isActive
        ? 'bg-primary text-white shadow-lg'
        : 'bg-white border border-slate-200 text-slate-700 hover:border-primary/30 hover:text-primary'
    )

  return (
    <nav
      aria-label="Pagination"
      className={cn('flex items-center justify-center gap-2', className)}
      {...props}
    >
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={cn(
          'px-4 py-2 rounded-lg transition-all duration-200',
          'border border-slate-200 hover:border-primary/30',
          currentPage === 1
            ? 'text-slate-400 cursor-not-allowed opacity-50'
            : 'text-slate-700 hover:text-primary'
        )}
        aria-label="Previous page"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {pageNumbers.map((page, idx) =>
          page === '...' ? (
            <span key={`ellipsis-${idx}`} className="px-2 py-2 text-slate-400">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page as number)}
              className={buttonClasses(currentPage === page)}
              aria-label={`Go to page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          )
        )}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={cn(
          'px-4 py-2 rounded-lg transition-all duration-200',
          'border border-slate-200 hover:border-primary/30',
          currentPage === totalPages
            ? 'text-slate-400 cursor-not-allowed opacity-50'
            : 'text-slate-700 hover:text-primary'
        )}
        aria-label="Next page"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </nav>
  )
}
