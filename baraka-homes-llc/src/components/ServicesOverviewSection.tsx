'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Pill, UserCheck, Brain, Sparkles, ArrowRight } from 'lucide-react'

export function ServicesOverviewSection() {
  const services = [
    {
      icon: Pill,
      title: "Medication Management",
      description: "Precise pharmacy oversight and administration."
    },
    {
      icon: UserCheck,
      title: "Daily Living Assistance",
      description: "Dignified support with hygiene and personal care."
    },
    {
      icon: Brain,
      title: "Specialized Support",
      description: "Expert care for mental health and dementia."
    },
    {
      icon: Sparkles,
      title: "Meaningful Day Programs",
      description: "Engaging activities tailored to individual interests."
    }
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Comprehensive Care
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Baraka Homes offers a complete range of services to support health, safety, and quality of life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 rounded-xl text-center group hover:border-primary/50"
            >
              <div className="w-12 h-12 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 bg-secondary/10 border border-secondary/20 text-secondary hover:bg-secondary/20 rounded-full transition-colors font-medium"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

