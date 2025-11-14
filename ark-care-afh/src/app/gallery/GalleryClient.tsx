'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ImageLightbox } from '@/components/ImageLightbox'

interface GalleryItem {
  id: number
  title: string
  image: string | null
  alt: string
}

interface GalleryClientProps {
  items: GalleryItem[]
}

export function GalleryClient({ items }: GalleryClientProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null)

  const handleImageClick = (item: GalleryItem) => {
    if (item.image) {
      setSelectedImage({
        src: item.image,
        alt: item.alt,
        title: item.title,
      })
    }
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-lg transition-all cursor-pointer"
            onClick={() => handleImageClick(item)}
            role={item.image ? 'button' : undefined}
            tabIndex={item.image ? 0 : undefined}
            onKeyDown={(e) => {
              if (item.image && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault()
                handleImageClick(item)
              }
            }}
            aria-label={item.image ? `View ${item.title} in lightbox` : undefined}
          >
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
              {item.image ? (
                <>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Click indicator overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-12 h-12 text-white drop-shadow-lg"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <svg
                      className="w-10 h-10 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-slate-600 text-center font-medium">Photo Coming Soon</p>
                </div>
              )}
            </div>
            <div className="p-4 group-hover:bg-primary/5 transition-colors">
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <ImageLightbox
          isOpen={!!selectedImage}
          onClose={closeLightbox}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          title={selectedImage.title}
        />
      )}
    </>
  )
}

