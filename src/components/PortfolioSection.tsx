'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const portfolioItems = [
  {
    category: 'Enterprise E-commerce Platform',
    title: 'Multi-Chain Restaurant Management System',
    description: 'Comprehensive e-commerce platform with inventory management, multi-location support, advanced analytics, and integrated payment processing for a leading Bangkok restaurant chain.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
  },
  {
    category: 'Corporate Web Portal',
    title: 'Manufacturing Company Digital Hub',
    description: 'Professional corporate website featuring multilingual support, product catalog management, client portal integration, and lead generation system for a major Thai manufacturer.',
    technologies: ['React', 'TypeScript', 'MongoDB', 'AWS'],
  },
  {
    category: 'Mobile Application Suite',
    title: 'Tourism & Hospitality Platform',
    description: 'Custom mobile application with GPS integration, real-time booking system, payment gateway integration, and customer management for Thailand\'s premium tourism sector.',
    technologies: ['React Native', 'Firebase', 'Google Maps', 'PayPal'],
  },
]

export default function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-800 mb-4">
            Recent Projects
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto">
            Showcasing our latest enterprise solutions and successful implementations
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-card-gradient rounded-2xl overflow-hidden shadow-soft card-hover border border-gray-100 h-full">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center relative overflow-hidden">
                  <div className="text-primary-600 font-heading font-semibold text-lg text-center px-4">
                    {item.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-xl font-heading font-semibold text-secondary-800 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-secondary-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            className="btn-primary px-8 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
