'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const processSteps = [
  {
    title: 'DISCOVERY',
    heading: 'Understanding Your Business Needs',
    description: 'We start by listening to your goals and understanding exactly what your business needs. We discuss your requirements, budget, and timeline to create the perfect plan for your project.',
    icon: '🔍',
    duration: '1-2 weeks',
  },
  {
    title: 'DESIGN',
    heading: 'Creating Beautiful & User-Friendly Designs',
    description: 'Our designers create beautiful, modern layouts that your customers will love. We focus on making everything easy to use and visually appealing across all devices.',
    icon: '🎨',
    duration: '2-3 weeks',
  },
  {
    title: 'DEVELOPMENT',
    heading: 'Building Your Solution with Modern Technology',
    description: 'Our experienced developers bring the designs to life using the latest, reliable technology. We build everything step-by-step and keep you updated on our progress.',
    icon: '⚡',
    duration: '4-8 weeks',
  },
  {
    title: 'TESTING',
    heading: 'Ensuring Everything Works Perfectly',
    description: 'We thoroughly test everything to make sure it works flawlessly on all devices and browsers. We check for speed, security, and user experience to ensure top quality.',
    icon: '🧪',
    duration: '1-2 weeks',
  },
  {
    title: 'DEPLOYMENT',
    heading: 'Launching Your Project Live',
    description: 'We handle all the technical setup to get your website or app live and running smoothly. We make sure everything is secure, fast, and ready for your customers.',
    icon: '🚀',
    duration: '3-5 days',
  },
  {
    title: 'SUPPORT',
    heading: 'Ongoing Care & Maintenance',
    description: 'We provide continuous support to keep everything running smoothly. Regular updates, security monitoring, and technical assistance whenever you need it.',
    icon: '📊',
    duration: 'Ongoing',
  },
]

export default function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-800 mb-4">
            How We Work With You
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto">
            Our simple 6-step process to bring your digital vision to life
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-card-gradient rounded-2xl p-8 shadow-soft card-hover border border-gray-100 h-full relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                  <div className="text-6xl">{step.icon}</div>
                </div>

                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {step.duration}
                </div>

                {/* Step Header */}
                <div className="mb-6 mt-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{step.icon}</div>
                    <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                      {step.title}
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-secondary-800 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                    {step.heading}
                  </h3>
                </div>

                {/* Step Description */}
                <p className="text-secondary-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Progress Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 group-hover:w-full transition-all duration-700" />

                {/* Connecting Line (except for last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-300 to-primary-500 transform -translate-y-1/2" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
