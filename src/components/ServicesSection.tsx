'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: '🌐',
    title: 'Professional Website Development',
    description: 'Beautiful, fast-loading websites that work perfectly on all devices. We build modern websites that help your business grow online with reliable hosting and ongoing support.',
    tech: ['Modern Design', 'Mobile-Friendly', 'Fast Loading', 'Secure'],
    metrics: 'Super Fast',
  },
  {
    icon: '💻',
    title: 'Custom Business Software',
    description: 'Tailored software solutions designed specifically for your business needs. From inventory management to customer systems, we create tools that make your work easier and more efficient.',
    tech: ['Custom Built', 'User-Friendly', 'Reliable', 'Scalable'],
    metrics: 'Always Online',
  },
  {
    icon: '📱',
    title: 'Mobile Apps & Online Stores',
    description: 'Mobile apps and e-commerce websites that your customers will love. Easy to use, secure payment processing, and works seamlessly across all devices and platforms.',
    tech: ['iOS & Android', 'E-commerce', 'Secure Payments', 'Easy to Use'],
    metrics: 'Loved by Users',
  },
  {
    icon: '📈',
    title: 'Digital Marketing & SEO',
    description: 'Get found online and grow your business with our digital marketing services. We help improve your website\'s visibility on Google and create effective social media campaigns.',
    tech: ['Google SEO', 'Social Media', 'Online Ads', 'Analytics'],
    metrics: 'More Customers',
  },
  {
    icon: '⚡',
    title: 'Website Speed & Performance',
    description: 'Make your website lightning fast and improve customer experience. Faster websites rank better on Google, keep visitors happy, and convert more customers.',
    tech: ['Speed Boost', 'Better Rankings', 'Happy Visitors', 'More Sales'],
    metrics: 'Lightning Fast',
  },
  {
    icon: '🔧',
    title: 'System Integration & Support',
    description: 'Connect your different business systems together and get ongoing technical support. We help your tools work together smoothly and provide reliable maintenance.',
    tech: ['System Connect', 'Data Sync', '24/7 Support', 'Regular Updates'],
    metrics: 'Always Supported',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-800 mb-4">
            What We Can Do For You
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto">
            Complete digital services to help your business thrive in today&apos;s online world
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-soft card-hover border border-gray-100 h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Performance Metric Badge */}
                <div className="absolute top-4 right-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {service.metrics}
                </div>
                
                <div className="relative z-10">
                  {/* Service Icon */}
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-heading font-semibold text-secondary-800 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-secondary-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded border border-primary-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
