'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon, CodeBracketIcon, CpuChipIcon, CloudIcon, SparklesIcon, RocketLaunchIcon, BoltIcon } from '@heroicons/react/24/outline'
import { useEffect, useState, useRef } from 'react'
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

const floatingElements = [
  { icon: CodeBracketIcon, color: 'neon-blue', delay: 0 },
  { icon: CpuChipIcon, color: 'neon-purple', delay: 1 },
  { icon: CloudIcon, color: 'neon-green', delay: 2 },
  { icon: SparklesIcon, color: 'neon-pink', delay: 3 },
  { icon: RocketLaunchIcon, color: 'neon-orange', delay: 4 },
  { icon: BoltIcon, color: 'neon-cyan', delay: 5 },
]

export default function HeroSection() {
  const [currentTech, setCurrentTech] = useState(0)
  const [currentCode, setCurrentCode] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const t = useTranslations('hero')

  useEffect(() => {
    setIsClient(true)
    
    const techInterval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length)
    }, 2000)

    const codeInterval = setInterval(() => {
      setCurrentCode((prev) => (prev + 1) % codeSnippets.length)
    }, 3000)

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearInterval(techInterval)
      clearInterval(codeInterval)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary pt-16 sm:pt-20 md:pt-24 pb-16" 
      suppressHydrationWarning
    >
      {/* Enhanced Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-mesh-gradient opacity-30"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      
      {/* Interactive Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: mousePosition.x * 20 - 10,
              y: mousePosition.y * 20 - 10,
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Enhanced Grid Background with Parallax */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </motion.div>

      {/* Floating Tech Elements with Enhanced Animations */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element, index) => {
          const IconComponent = element.icon
          return (
            <motion.div
              key={index}
              className={`absolute text-${element.color} hidden lg:block`}
              style={{
                left: `${15 + (index % 3) * 30}%`,
                top: `${20 + Math.floor(index / 3) * 40}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
                scale: [1, 1.3, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 6 + index,
                repeat: Infinity,
                delay: element.delay,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.5, rotate: 180 }}
            >
              <IconComponent className="w-12 h-12 drop-shadow-lg" />
            </motion.div>
          )
        })}

        {/* Enhanced Code Blocks */}
        <motion.div
          className="absolute top-20 left-10 dark-card rounded-lg p-6 border border-neon-blue/30 hidden lg:block backdrop-blur-sm"
          animate={{
            y: [0, -15, 0],
            opacity: [0.7, 1, 0.7],
            boxShadow: [
              '0 0 20px rgba(0, 212, 255, 0.3)',
              '0 0 40px rgba(0, 212, 255, 0.6)',
              '0 0 20px rgba(0, 212, 255, 0.3)'
            ],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <div className="text-neon-green font-mono text-lg animate-text-shimmer bg-text-shimmer bg-clip-text">
            {isClient ? codeSnippets[currentCode] : codeSnippets[0]}
          </div>
        </motion.div>

        {/* Enhanced Tech Stack Indicator */}
        <motion.div
          className="absolute top-40 right-20 dark-card rounded-lg p-6 border border-neon-purple/30 hidden lg:block backdrop-blur-sm"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.05, 1],
            boxShadow: [
              '0 0 20px rgba(139, 92, 246, 0.3)',
              '0 0 40px rgba(139, 92, 246, 0.6)',
              '0 0 20px rgba(139, 92, 246, 0.3)'
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          whileHover={{ scale: 1.1, rotate: -2 }}
        >
          <div className="flex items-center gap-3">
            <CpuChipIcon className="w-6 h-6 text-neon-blue animate-spin-slow" />
            <span className="text-white font-mono text-lg animate-glow-pulse">
              {isClient ? techStack[currentTech] : techStack[0]}
            </span>
          </div>
        </motion.div>

        {/* Enhanced Binary Rain Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-neon-blue/40 font-mono text-sm font-bold"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px',
              }}
              animate={{
                y: ['0vh', '110vh'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear",
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.div>
          ))}
        </div>

        {/* Meteor Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-neon-blue rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}%`,
              }}
              animate={{
                x: [0, 300],
                y: [0, 200],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 3,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content with Enhanced Animations */}
      <motion.div 
        className="container-custom relative z-10"
        style={{ opacity }}
      >
        <div className="text-center text-white">
          {/* Enhanced Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="mb-8"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-6 leading-tight"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span className="bg-cyber bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                {t('title')}
              </span>
            </motion.h1>
          </motion.div>

          {/* Enhanced Description with Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed px-4"
              animate={{
                textShadow: [
                  '0 0 10px rgba(255, 255, 255, 0.3)',
                  '0 0 20px rgba(0, 212, 255, 0.4)',
                  '0 0 10px rgba(255, 255, 255, 0.3)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              {t('subtitle')}
            </motion.p>
          </motion.div>

          {/* Enhanced CTA Buttons with Magnetic Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 px-4"
          >
            <motion.button
              onClick={() => scrollToSection('#quotation')}
              className="group relative bg-cyber text-white font-semibold px-8 sm:px-12 py-4 sm:py-5 rounded-xl overflow-hidden w-full sm:w-auto shadow-neon-strong"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(0, 212, 255, 0.8), 0 0 60px rgba(139, 92, 246, 0.6)',
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(0, 212, 255, 0.5)',
                  '0 0 40px rgba(139, 92, 246, 0.7)',
                  '0 0 20px rgba(0, 212, 255, 0.5)',
                ],
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity },
              }}
            >
              <motion.span 
                className="relative z-10 flex items-center gap-3"
                animate={{
                  textShadow: [
                    '0 0 10px rgba(255, 255, 255, 0.8)',
                    '0 0 20px rgba(0, 212, 255, 1)',
                    '0 0 10px rgba(255, 255, 255, 0.8)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <RocketLaunchIcon className="w-6 h-6 animate-bounce-slow" />
                {t('cta_quote')}
              </motion.span>
              <motion.div 
                className="absolute inset-0 bg-shimmer opacity-0 group-hover:opacity-100"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('#portfolio')}
              className="group relative border-2 border-neon-blue text-neon-blue font-semibold px-8 sm:px-12 py-4 sm:py-5 rounded-xl overflow-hidden hover:bg-neon-blue/10 w-full sm:w-auto backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05,
                borderColor: '#00ff88',
                color: '#00ff88',
                boxShadow: '0 0 30px rgba(0, 255, 136, 0.6)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <SparklesIcon className="w-6 h-6 animate-pulse" />
                {t('cta_portfolio')}
              </span>
              <motion.div 
                className="absolute inset-0 bg-neon-blue/10 opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [0, 1.2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </motion.button>
          </motion.div>

          {/* Enhanced Stats Bar with Counter Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto px-4"
          >
            {[
              { number: '200+', label: t('stats.projects') },
              { number: '99%', label: t('stats.uptime') },
              { number: '24/7', label: t('stats.support') },
              { number: '7+', label: t('stats.years') },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.1 }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  y: { duration: 2, repeat: Infinity, delay: index * 0.2 },
                }}
              >
                <motion.div 
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-neon-blue mb-1"
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(0, 212, 255, 0.8)',
                      '0 0 20px rgba(0, 212, 255, 1)',
                      '0 0 10px rgba(0, 212, 255, 0.8)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-xs sm:text-sm text-white/70 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator with Magnetic Effect */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center z-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="cursor-pointer group px-6 py-3 rounded-xl bg-black/30 backdrop-blur-md border border-white/20 hover:bg-black/50 transition-all duration-300"
          onClick={() => scrollToSection('#process')}
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
          }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="flex flex-col items-center">
            <motion.div 
              className="text-white/80 text-xs sm:text-sm mb-2 group-hover:text-white transition-colors text-center whitespace-nowrap font-medium"
              animate={{
                textShadow: [
                  '0 0 5px rgba(255, 255, 255, 0.5)',
                  '0 0 15px rgba(0, 212, 255, 0.8)',
                  '0 0 5px rgba(255, 255, 255, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {t('scroll_text')}
            </motion.div>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDownIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 group-hover:text-neon-blue transition-colors mx-auto" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}