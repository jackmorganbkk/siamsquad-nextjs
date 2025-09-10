'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  GlobeAltIcon, 
  ChartBarIcon,
  BoltIcon,
  CogIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    icon: GlobeAltIcon,
    key: 'web_development',
    title: 'Web Development',
    description: 'Modern, responsive websites built with the latest technologies for optimal performance and user experience.',
  },
  {
    icon: DevicePhoneMobileIcon,
    key: 'mobile_apps',
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps that engage users and drive business growth.',
  },
  {
    icon: CodeBracketIcon,
    key: 'custom_software',
    title: 'Custom Software',
    description: 'Tailored software solutions designed to meet your specific business requirements and workflows.',
  },
  {
    icon: ChartBarIcon,
    key: 'digital_marketing',
    title: 'Digital Marketing',
    description: 'Strategic digital marketing campaigns that increase visibility and drive qualified leads.',
  },
  {
    icon: BoltIcon,
    key: 'performance',
    title: 'Performance Optimization',
    description: 'Speed and performance improvements that enhance user experience and search rankings.',
  },
  {
    icon: CogIcon,
    key: 'integration',
    title: 'System Integration',
    description: 'Seamless integration of systems and platforms to streamline your business operations.',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const t = useTranslations('services')

  return (
    <section id="services" className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            We provide comprehensive digital solutions to help your business thrive in the modern marketplace.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full border border-primary-100 hover:border-accent-200">
                  
                  {/* Clean Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-accent-50 rounded-lg flex items-center justify-center group-hover:bg-accent-100 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-accent-500" />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-heading font-semibold text-text-primary mb-4 group-hover:text-accent-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>

                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
