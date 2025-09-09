'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'

const features = [
  {
    title: 'Fast Development',
    description: 'Rapid prototyping and deployment',
    icon: '⚡',
  },
  {
    title: 'Modern Tech Stack',
    description: 'Latest technologies and frameworks',
    icon: '🚀',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical assistance',
    icon: '🛠️',
  },
  {
    title: 'Scalable Solutions',
    description: 'Built to grow with your business',
    icon: '📈',
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We deliver results that matter to your business
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
