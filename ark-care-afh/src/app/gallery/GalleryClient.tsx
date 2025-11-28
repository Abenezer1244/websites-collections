'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ImageLightbox } from '@/components/ImageLightbox'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

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
          <Card
            key={item.id}
            className="group relative overflow-hidden border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-xl transition-all cursor-pointer h-full flashlight-card animate-on-scroll"
            style={{ animationFillMode: 'both' }}
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
                    <Badge className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-primary">
                      Click to View
                    </Badge>
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
                  <Badge variant="outline" className="text-xs">Photo Coming Soon</Badge>
                </div>
              )}
            </div>
            <CardHeader className="p-4 group-hover:bg-primary/5 transition-colors">
              <CardTitle className="text-base font-semibold text-slate-900">{item.title}</CardTitle>
            </CardHeader>
          </Card>
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

