'use client'

import { motion } from 'framer-motion'
import { ChevronDownIcon, CodeBracketIcon, CpuChipIcon, CloudIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

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
  const [isClient, setIsClient] = useState(false)
  const t = useTranslations('hero')

  useEffect(() => {
    setIsClient(true)
    
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary pt-16 sm:pt-20 md:pt-24 pb-16" suppressHydrationWarning>
      {/* Animated mesh background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
      {/* Modern Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Code Blocks - Hidden on mobile to prevent overlap */}
        <motion.div
          className="absolute top-20 left-10 dark-card rounded-lg p-4 border border-neon-blue/30 hidden lg:block"
          animate={{
            y: [0, -15, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="text-neon-green font-mono text-sm">
            {isClient ? codeSnippets[currentCode] : codeSnippets[0]}
          </div>
        </motion.div>

        {/* Tech Stack Indicator - Hidden on mobile to prevent overlap */}
        <motion.div
          className="absolute top-40 right-20 dark-card rounded-lg p-4 border border-neon-purple/30 hidden lg:block"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          <div className="flex items-center gap-2">
            <CpuChipIcon className="w-5 h-5 text-neon-blue" />
            <span className="text-white font-mono text-sm">
              {isClient ? techStack[currentTech] : techStack[0]}
            </span>
          </div>
        </motion.div>

        {/* Floating Icons - Hidden on mobile to prevent overlap */}
        <motion.div
          className="absolute bottom-40 left-20 text-neon-blue neon-glow hidden lg:block"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <CloudIcon className="w-16 h-16" />
        </motion.div>

        <motion.div
          className="absolute top-32 right-32 text-neon-purple hidden lg:block"
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
              className="absolute text-neon-blue/30 font-mono text-xs"
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
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-6 leading-tight">
              <span className="gradient-text neon-text">
                {t('title')}
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
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto text-white/80 leading-relaxed px-4">
              {t('subtitle')}
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 px-4"
          >
            <motion.button
              onClick={() => scrollToSection('#quotation')}
              className="group relative bg-neon-gradient text-white font-semibold px-6 sm:px-10 py-3 sm:py-4 rounded-lg neon-glow overflow-hidden w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <CpuChipIcon className="w-5 h-5" />
                {t('cta_quote')}
              </span>
              <div className="absolute inset-0 bg-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('#portfolio')}
              className="group relative border-2 border-neon-blue text-neon-blue font-semibold px-6 sm:px-10 py-3 sm:py-4 rounded-lg overflow-hidden hover:bg-neon-blue/10 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <CodeBracketIcon className="w-5 h-5" />
                {t('cta_portfolio')}
              </span>
              <div className="absolute inset-0 bg-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto px-4"
          >
            {[
              { number: '200+', label: t('stats.projects') },
              { number: '99%', label: t('stats.uptime') },
              { number: '24/7', label: t('stats.support') },
              { number: '7+', label: t('stats.years') },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neon-blue mb-1 neon-text">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Perfectly Centered */}
      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center z-20">
        <motion.div
          className="cursor-pointer group px-4 py-2 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-black/30 transition-all duration-300"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('#process')}
        >
          <div className="flex flex-col items-center">
            <div className="text-white/70 text-xs sm:text-sm mb-2 group-hover:text-white transition-colors text-center whitespace-nowrap font-medium">
              {t('scroll_text')}
            </div>
            <ChevronDownIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 group-hover:text-white transition-colors mx-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
