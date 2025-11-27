'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Shield, Heart } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-[url('/elderly-care-facilities.jpg')] bg-cover bg-center bg-fixed opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
      </div>

      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary-foreground/80">Now Accepting New Residents</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="block text-foreground">Future of</span>
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Compassionate Care
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Baraka Homes LLC provides state-of-the-art adult family home services.
          Experience personalized support in a modern, comfortable environment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Schedule a Tour <ArrowRight className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>

          <Link
            href="/services"
            className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md text-foreground font-bold rounded-xl hover:bg-white/10 transition-colors"
          >
            Our Services
          </Link>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        >
          {[
            { icon: Shield, title: "24/7 Security", desc: "Advanced safety monitoring" },
            { icon: Heart, title: "Personalized Care", desc: "Tailored support plans" },
            { icon: Star, title: "Premium Living", desc: "Modern amenities" },
          ].map((feature, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl text-left hover:-translate-y-2 transition-transform">
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

