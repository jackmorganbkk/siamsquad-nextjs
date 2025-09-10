'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { 
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline'

const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Modern e-commerce solution with seamless user experience and secure payment processing.',
    image: '/api/placeholder/600/400',
    tech: ['Next.js', 'TypeScript', 'Stripe'],
    link: '#',
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Secure banking application with intuitive interface and advanced security features.',
    image: '/api/placeholder/600/400',
    tech: ['React Native', 'Node.js', 'Security'],
    link: '#',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    category: 'Data Visualization',
    description: 'Real-time analytics platform with interactive charts and comprehensive reporting.',
    image: '/api/placeholder/600/400',
    tech: ['React', 'D3.js', 'Python'],
    link: '#',
  },
  {
    id: 4,
    title: 'Corporate Website',
    category: 'Web Development',
    description: 'Professional corporate website with modern design and content management system.',
    image: '/api/placeholder/600/400',
    tech: ['WordPress', 'PHP', 'MySQL'],
    link: '#',
  },
  {
    id: 5,
    title: 'Logistics Platform',
    category: 'Custom Software',
    description: 'Comprehensive logistics management system with real-time tracking and optimization.',
    image: '/api/placeholder/600/400',
    tech: ['Vue.js', 'Laravel', 'PostgreSQL'],
    link: '#',
  },
  {
    id: 6,
    title: 'Marketing Campaign',
    category: 'Digital Marketing',
    description: 'Successful digital marketing campaign that increased brand awareness by 300%.',
    image: '/api/placeholder/600/400',
    tech: ['Google Ads', 'Facebook', 'Analytics'],
    link: '#',
  },
]

export default function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const t = useTranslations('portfolio')

  return (
    <section id="portfolio" className="py-20 bg-bg-primary">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            Our Work
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Discover some of our recent projects and the results we've achieved for our clients.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-primary-100">
                
                {/* Project Image */}
                <div className="relative h-48 bg-primary-100 overflow-hidden">
                  <div className="absolute inset-0 bg-accent-gradient opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-lg font-medium">{item.category}</div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button
                      className="p-3 bg-white rounded-full text-accent-500 hover:text-accent-600 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                    </motion.button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 text-xs font-medium text-accent-600 bg-accent-50 rounded-full mb-3">
                    {item.category}
                  </span>

                  {/* Project Title */}
                  <h3 className="text-xl font-heading font-semibold text-text-primary mb-3 group-hover:text-accent-600 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-100 text-text-muted text-xs rounded border"
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
      </div>
    </section>
  )
}
