'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface ImageLightboxProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string | null
  imageAlt: string
  title?: string
}

export function ImageLightbox({ isOpen, onClose, imageSrc, imageAlt, title }: ImageLightboxProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
      // Prevent body scroll when lightbox is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen || !imageSrc) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'lightbox-title' : undefined}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isAnimating ? 'opacity-90' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* Lightbox Content */}
      <div
        className={`relative z-10 max-w-7xl w-full max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Header */}
        {(title || imageAlt) && (
          <div className="flex items-center justify-between p-4 border-b border-slate-200">
            <div className="flex-1 min-w-0 pr-4">
              {title && (
                <h2 id="lightbox-title" className="text-lg font-semibold text-slate-900 truncate">
                  {title}
                </h2>
              )}
              <p className="text-sm text-slate-600 truncate">{imageAlt}</p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Close lightbox"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Image Container */}
        <div className="relative w-full h-[calc(90vh-80px)] min-h-[400px] bg-slate-100">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
            sizes="90vw"
            priority
          />
        </div>
      </div>
    </div>
  )
}

