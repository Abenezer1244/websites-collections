'use client'

import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from '@/components/kibo-ui/marquee'

interface Logo {
  name: string
  image?: string
  alt?: string
}

interface MarqueeLogosProps {
  logos: Logo[]
  speed?: 'slow' | 'normal' | 'fast'
  className?: string
}

export function MarqueeLogos({ logos, speed = 'slow', className = '' }: MarqueeLogosProps) {
  const speedClasses = {
    slow: 'duration-[60s]',
    normal: 'duration-[40s]',
    fast: 'duration-[20s]'
  }

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos]

  return (
    <div className={`marquee-container ${className}`}>
      <Marquee className={`marquee-content ${speedClasses[speed]}`}>
        <MarqueeContent>
          {duplicatedLogos.map((logo, index) => (
            <MarqueeItem key={index} className="px-8">
              {logo.image ? (
                <img
                  src={logo.image}
                  alt={logo.alt || logo.name}
                  className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              ) : (
                <div className="h-12 flex items-center justify-center text-slate-400 font-semibold">
                  {logo.name}
                </div>
              )}
            </MarqueeItem>
          ))}
        </MarqueeContent>
        <MarqueeFade />
      </Marquee>
    </div>
  )
}

