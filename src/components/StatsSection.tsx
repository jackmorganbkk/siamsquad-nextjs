'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const stats = [
  { number: 200, suffix: '+', label: 'Projects Delivered' },
  { number: 99, suffix: '%', label: 'Client Satisfaction' },
  { number: 7, suffix: '+', label: 'Years Experience' },
  { number: 24, suffix: '/7', label: 'Technical Support' },
]

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isInView || !isClient) return

    let startTime: number
    const startCount = 0

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      setCount(Math.floor(progress * (end - startCount) + startCount))
      
      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }

    requestAnimationFrame(updateCount)
  }, [isInView, end, duration, isClient])

  return <span ref={ref} suppressHydrationWarning>{isClient ? count : 0}</span>
}

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-2">
                <CountUp end={stat.number} />
                {stat.suffix}
              </div>
              <p className="text-white/90 text-lg font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
