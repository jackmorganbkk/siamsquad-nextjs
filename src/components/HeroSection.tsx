'use client'

import { motion } from 'framer-motion'
import { ChevronDownIcon, CodeBracketIcon, CpuChipIcon, CloudIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
// import { useTranslations } from 'next-intl'

const techStack = [
  'Modern Web', 'Mobile Apps', 'E-commerce', 'Cloud Solutions', 'Digital Marketing', 'SEO'
]

const codeSnippets = [
  '{ "status": "online" }',
  'website.launch()',
  'business.grow()',
  'success.achieved()'
]

export default function HeroSection() {
  const [currentTech, setCurrentTech] = useState(0)
  const [currentCode, setCurrentCode] = useState(0)
  // const t = useTranslations('hero')

  useEffect(() => {
    const techInterval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length)
    }, 2000)

    const codeInterval = setInterval(() => {
      setCurrentCode((prev) => (prev + 1) % codeSnippets.length)
    }, 3000)

    return () => {
      clearInterval(techInterval)
      clearInterval(codeInterval)
    }
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Code Blocks */}
        <motion.div
          className="absolute top-20 left-10 bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-primary-400/30"
          animate={{
            y: [0, -15, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="text-green-300 font-mono text-sm">
            {codeSnippets[currentCode]}
          </div>
        </motion.div>

        {/* Tech Stack Indicator */}
        <motion.div
          className="absolute top-40 right-20 bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-primary-400/30"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          <div className="flex items-center gap-2">
            <CpuChipIcon className="w-5 h-5 text-primary-300" />
            <span className="text-white font-mono text-sm">
              {techStack[currentTech]}
            </span>
          </div>
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          className="absolute bottom-40 left-20 text-primary-300"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <CloudIcon className="w-16 h-16" />
        </motion.div>

        <motion.div
          className="absolute top-32 right-32 text-primary-300"
          animate={{
            y: [0, -20, 0],
            rotate: [0, -180, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        >
          <CodeBracketIcon className="w-12 h-12" />
        </motion.div>

        {/* Binary Rain Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-primary-400/20 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px',
              }}
              animate={{
                y: ['0vh', '110vh'],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10">
        <div className="text-center text-white">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Professional Digital Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
              <span className="text-gradient bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent animate-gradient-shift">
                Professional Digital Solutions
              </span>
            </h1>
          </motion.div>

          {/* Enhanced Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-lg md:text-xl lg:text-2xl mb-6 max-w-4xl mx-auto text-white/90 leading-relaxed">
              Creating beautiful websites, mobile apps, and digital marketing solutions that help Thai businesses grow and succeed online
            </p>
            
            {/* Tech Highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['Website Development', 'Mobile Apps', 'Digital Marketing', 'SEO Services'].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20"
                >
                  <span className="text-sm font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <motion.button
              onClick={() => scrollToSection('#quotation')}
              className="group relative bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold px-10 py-4 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <CpuChipIcon className="w-5 h-5" />
                Get Free Quote
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('#portfolio')}
              className="group relative border-2 border-white text-white font-semibold px-10 py-4 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <CodeBracketIcon className="w-5 h-5" />
                View Portfolio
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </motion.button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            {[
              { number: '200+', label: 'Projects' },
              { number: '99%', label: 'Uptime' },
              { number: '24/7', label: 'Support' },
              { number: '7+', label: 'Years' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-300 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection('#process')}
      >
        <div className="flex flex-col items-center">
          <div className="text-white/70 text-xs mb-2 group-hover:text-white transition-colors">
            Explore Solutions
          </div>
          <ChevronDownIcon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
        </div>
      </motion.div>
    </section>
  )
}
