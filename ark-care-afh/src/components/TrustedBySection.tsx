'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { MarqueeLogos } from '@/components/MarqueeLogos'
import { Announcement, AnnouncementTag, AnnouncementTitle } from '@/components/kibo-ui/announcement'

interface Logo {
  name: string
  image?: string
  alt?: string
}

interface TrustedBySectionProps {
  logos?: Logo[]
  className?: string
}

const defaultLogos: Logo[] = [
  { name: 'Washington State Department of Health', alt: 'WA DOH Licensed' },
  { name: 'HIPAA Compliant', alt: 'HIPAA Compliant' },
  { name: 'Medicaid Certified', alt: 'Medicaid Certified' },
  { name: 'HCS Provider', alt: 'Home and Community Services' },
  { name: 'DDA Provider', alt: 'Developmental Disabilities Administration' },
  { name: 'Licensed AFH', alt: 'Licensed Adult Family Home' }
]

export function TrustedBySection({ logos = defaultLogos, className = '' }: TrustedBySectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`relative py-12 sm:py-16 md:py-20 bg-white overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Announcement className="mx-auto max-w-fit mb-4" themed>
            <AnnouncementTag>Trusted</AnnouncementTag>
            <AnnouncementTitle>Trusted By</AnnouncementTitle>
          </Announcement>
        </div>

        {/* Marquee Logos with Alpha Mask */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <MarqueeLogos logos={logos} speed="slow" />
        </div>
      </div>
    </section>
  )
}

