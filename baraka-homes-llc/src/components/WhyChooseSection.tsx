'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, Heart, Users, Activity, Home } from 'lucide-react'

export function WhyChooseSection() {
  const features = [
    {
      icon: Clock,
      title: "24/7 Professional Care",
      desc: "Round-the-clock support from licensed professionals ensuring safety and comfort at all times.",
      items: ["Licensed nursing staff", "Emergency response", "Medication management"]
    },
    {
      icon: Home,
      title: "Modern Living",
      desc: "A futuristic yet warm setting designed to feel like home while providing professional care.",
      items: ["Smart room controls", "Community spaces", "Beautiful gardens"]
    },
    {
      icon: Activity,
      title: "Active Engagement",
      desc: "Meaningful activities and social engagement to support physical and mental well-being.",
      items: ["Social events", "Wellness programs", "Mental health support"]
    }
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Why Choose Baraka Homes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of advanced care technology and compassionate human connection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="glass-card p-8 rounded-2xl group hover:bg-white/5"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground mb-6">{feature.desc}</p>

              <ul className="space-y-3">
                {feature.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

