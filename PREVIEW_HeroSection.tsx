'use client'

import { motion } from 'framer-motion'
import { ChevronDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'

export default function HeroSection() {
  const t = useTranslations('hero')

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-bg-primary">
      {/* Clean Background with Subtle Pattern */}
      <div className="absolute inset-0 bg-subtle-gradient opacity-50"></div>
      
      {/* Minimal Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 text-center max-w-6xl">
        
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-text-primary mb-6 leading-tight">
            Digital Solutions That
            <span className="text-accent-500 block">Drive Results</span>
          </h1>
        </motion.div>

        {/* Clean Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            We create modern websites, mobile apps, and digital experiences that help your business grow and succeed in the digital world.
          </p>
        </motion.div>

        {/* Single Clean CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <motion.button
            onClick={() => scrollToSection('#contact')}
            className="group bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 inline-flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Project
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>

        {/* Clean Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
        >
          {[
            { number: '200+', label: 'Projects Completed' },
            { number: '99%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' },
            { number: '7+', label: 'Years Experience' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent-500 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Clean Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.button
          className="p-3 rounded-full bg-white shadow-card hover:shadow-card-hover transition-all duration-300 text-text-secondary hover:text-accent-500"
          onClick={() => scrollToSection('#services')}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDownIcon className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  )
}
