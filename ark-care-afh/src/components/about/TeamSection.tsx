'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const teamMembers = [
    {
      name: "Sarah Johnson",
      title: "Owner & Care Coordinator",
      image: null,
      alt: "Sarah Johnson - Owner & Care Coordinator",
      qualifications: ["RN License", "10+ years AFH experience", "CPR/First Aid Certified"],
      bio: "Sarah founded Ark Care AFH with a passion for providing quality, compassionate care in a home setting. Her nursing background and dedication to excellence ensure the highest standards of care."
    },
    {
      name: "Michelle Chen",
      title: "Lead Caregiver",
      image: null,
      alt: "Michelle Chen - Lead Caregiver",
      qualifications: ["HCA Certification", "Dementia Care Specialist", "CPR/First Aid"],
      bio: "Michelle brings 8 years of professional caregiving experience and a genuine commitment to supporting residents with compassion and respect. She specializes in person-centered care."
    },
    {
      name: "David Martinez",
      title: "Caregiver",
      image: null,
      alt: "David Martinez - Caregiver",
      qualifications: ["HCA Certification", "Physical Therapy Assistant", "CPR/First Aid"],
      bio: "David is dedicated to helping residents maintain independence and mobility. His background in rehabilitation support enables him to provide specialized care for residents with mobility needs."
    },
    {
      name: "Jennifer Williams",
      title: "Caregiver",
      image: null,
      alt: "Jennifer Williams - Caregiver",
      qualifications: ["HCA Certification", "Activity Coordinator", "CPR/First Aid"],
      bio: "Jennifer creates meaningful activities and social opportunities for residents. Her enthusiasm for engaging activities helps residents enjoy enriching experiences at our home."
    },
    {
      name: "Robert Taylor",
      title: "Caregiver",
      image: null,
      alt: "Robert Taylor - Caregiver",
      qualifications: ["HCA Certification", "Nutrition Support", "CPR/First Aid"],
      bio: "Robert ensures residents receive nutritious, delicious meals prepared with care. His background in nutrition helps support the health and wellness of all residents."
    },
    {
      name: "Lisa Anderson",
      title: "Administrative Coordinator",
      image: null,
      alt: "Lisa Anderson - Administrative Coordinator",
      qualifications: ["Healthcare Administration Certification", "HIPAA Training"],
      bio: "Lisa manages administrative operations and ensures smooth communication with families and healthcare providers. She maintains detailed records and coordinates care planning."
    }
  ]

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Futuristic Animated Dot Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base white gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/25 to-white" />
        
        {/* Animated Dot Grid - Multiple Layers */}
        <div 
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 1.5px, transparent 0)',
            backgroundSize: '48px 48px',
            animation: 'dotGridTeam 18s ease-in-out infinite',
          }}
        />
        
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.18) 1px, transparent 0)',
            backgroundSize: '65px 65px',
            animation: 'dotGridTeam 22s ease-in-out infinite reverse',
          }}
        />
        
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.16) 1px, transparent 0)',
            backgroundSize: '82px 82px',
            animation: 'dotGridTeam 26s ease-in-out infinite',
          }}
        />
        
        {/* Animated connecting grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            animation: 'gridTeam 12s ease-in-out infinite',
          }}
        />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 via-primary/2 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '21s'}} />
        <div className="absolute bottom-0 left-0 w-[650px] h-[650px] bg-gradient-to-tr from-slate-100/30 via-primary/3 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '25s', animationDelay: '7s'}} />
        
        {/* Light radial glow */}
        <div className="absolute top-1/3 right-1/3 w-[800px] h-[800px] bg-gradient-radial from-primary/3 via-primary/1 to-transparent rounded-full blur-3xl opacity-40 animate-pulse" style={{animationDuration: '28s'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Team</span>
            <div className={`mt-2 h-1 bg-primary mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'w-20' : 'w-0'}`} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Our Care Team
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Our team consists of trained, certified professionals who are passionate about providing quality care. Every staff member is committed to treating residents with dignity, respect, and compassion. All staff members maintain current CPR/First Aid certification and participate in ongoing professional development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-white via-white to-primary/5 rounded-2xl shadow-xl border-2 border-primary/20 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{transitionDelay: `${(index + 1) * 100}ms`}}
            >
              {/* Team Member Photo */}
              <div className="h-64 bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <svg
                        className="w-12 h-12 text-primary/40 group-hover:text-primary/60 transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold text-sm mb-4">
                  {member.title}
                </p>
                <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">Qualifications:</p>
                  <ul className="text-xs text-slate-700 space-y-1">
                    {member.qualifications.map((qual, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {qual}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

