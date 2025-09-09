'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  GlobeAltIcon, 
  ChartBarIcon,
  BoltIcon,
  CogIcon,
  CloudIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    icon: GlobeAltIcon,
    key: 'web_development',
    color: 'neon-blue',
  },
  {
    icon: CodeBracketIcon,
    key: 'custom_software',
    color: 'neon-green',
  },
  {
    icon: DevicePhoneMobileIcon,
    key: 'mobile_apps',
    color: 'neon-purple',
  },
  {
    icon: ChartBarIcon,
    key: 'digital_marketing',
    color: 'neon-pink',
  },
  {
    icon: BoltIcon,
    key: 'performance',
    color: 'neon-orange',
  },
  {
    icon: CogIcon,
    key: 'integration',
    color: 'neon-blue',
  },
  {
    icon: CloudIcon,
    key: 'cloud_solutions',
    color: 'neon-green',
  },
  {
    icon: ShieldCheckIcon,
    key: 'security',
    color: 'neon-purple',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const t = useTranslations('services')

  return (
    <section id="services" className="section-padding bg-bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold gradient-text mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Digital solutions that drive results
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="dark-card rounded-xl p-4 sm:p-6 h-full flex flex-col items-center text-center hover:border-neon-blue/50 transition-all duration-300 group-hover:neon-glow min-h-[180px] sm:min-h-[200px]">
                  {/* Service Icon */}
                  <div className={`mb-4 p-3 rounded-lg bg-${service.color}/10 group-hover:bg-${service.color}/20 transition-all duration-300`}>
                    <IconComponent className={`w-8 h-8 text-${service.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
                    {t(`items.${service.key}.title`)}
                  </h3>

                  {/* Simple description or tech stack */}
                  <div className="flex flex-wrap gap-1 justify-center">
                    {t(`items.${service.key}.tech`).split(',').slice(0, 2).map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded border border-white/10 text-center"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}