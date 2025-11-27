import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface TeamMemberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  role: string
  image?: string
  bio?: string
  qualifications?: string[]
  social?: Array<{ icon: string; href: string; label: string }>
}

export function TeamMemberCard({
  name,
  role,
  image,
  bio,
  qualifications,
  social,
  className,
  ...props
}: TeamMemberCardProps) {
  return (
    <div
      className={cn(
        'group relative rounded-xl overflow-hidden bg-white border border-slate-200 shadow-md',
        'transition-all duration-300 ease-out hover:shadow-xl hover:border-primary/30',
        'animate-slideup',
        className
      )}
      {...props}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
        {image ? (
          <Image
            src={image}
            alt={`${name} - ${role}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" aria-label={`${name} - ${role}`}>
            <div className="text-6xl font-bold text-primary/20">{name.charAt(0)}</div>
          </div>
        )}

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info Section */}
      <div className="p-6">
        {/* Name and Role */}
        <h3 className="text-lg font-semibold text-slate-900 mb-1">{name}</h3>
        <p className="text-primary font-medium text-sm mb-3">{role}</p>

        {/* Bio */}
        {bio && (
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">{bio}</p>
        )}

        {/* Qualifications */}
        {qualifications && qualifications.length > 0 && (
          <div className="border-t border-slate-200 pt-4 mb-4">
            <p className="text-xs font-semibold text-slate-900 mb-2">Qualifications</p>
            <ul className="space-y-1">
              {qualifications.map((qual, idx) => (
                <li key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {qual}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Social Links */}
        {social && social.length > 0 && (
          <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
            {social.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                title={link.label}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center text-sm font-bold"
              >
                {link.icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
