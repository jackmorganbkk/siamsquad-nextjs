'use client'

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  GlobeAltIcon, 
  ChartBarIcon,
  BoltIcon,
  CogIcon,
  CloudIcon,
  ShieldCheckIcon,
  SparklesIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    icon: GlobeAltIcon,
    key: 'web_development',
    color: 'neon-blue',
    gradient: 'from-blue-500 to-cyan-400',
    bgGlow: 'bg-blue-500/10',
  },
  {
    icon: CodeBracketIcon,
    key: 'custom_software',
    color: 'neon-green',
    gradient: 'from-green-500 to-emerald-400',
    bgGlow: 'bg-green-500/10',
  },
  {
    icon: DevicePhoneMobileIcon,
    key: 'mobile_apps',
    color: 'neon-purple',
    gradient: 'from-purple-500 to-violet-400',
    bgGlow: 'bg-purple-500/10',
  },
  {
    icon: ChartBarIcon,
    key: 'digital_marketing',
    color: 'neon-pink',
    gradient: 'from-pink-500 to-rose-400',
    bgGlow: 'bg-pink-500/10',
  },
  {
    icon: BoltIcon,
    key: 'performance',
    color: 'neon-orange',
    gradient: 'from-orange-500 to-amber-400',
    bgGlow: 'bg-orange-500/10',
  },
  {
    icon: CogIcon,
    key: 'integration',
    color: 'neon-cyan',
    gradient: 'from-cyan-500 to-teal-400',
    bgGlow: 'bg-cyan-500/10',
  },
  {
    icon: CloudIcon,
    key: 'cloud_solutions',
    color: 'neon-violet',
    gradient: 'from-violet-500 to-indigo-400',
    bgGlow: 'bg-violet-500/10',
  },
  {
    icon: ShieldCheckIcon,
    key: 'security',
    color: 'neon-emerald',
    gradient: 'from-emerald-500 to-green-400',
    bgGlow: 'bg-emerald-500/10',
  },
]

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]))
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]))
  const t = useTranslations('services')
  
  const IconComponent = service.icon

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      className="group cursor-pointer perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div 
        className={`relative dark-card rounded-2xl p-6 sm:p-8 h-full flex flex-col items-center text-center border-2 border-transparent hover:border-${service.color}/50 transition-all duration-500 min-h-[280px] sm:min-h-[320px] overflow-hidden backdrop-blur-sm`}
        animate={{
          borderColor: isHovered ? `var(--${service.color})` : 'transparent',
          boxShadow: isHovered 
            ? `0 0 30px rgba(0, 212, 255, 0.3), 0 0 60px rgba(139, 92, 246, 0.2)` 
            : '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 180 : 0,
          }}
          transition={{ duration: 0.8 }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 bg-${service.color} rounded-full opacity-0 group-hover:opacity-60`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: isHovered ? [0, -20, 0] : 0,
                opacity: isHovered ? [0, 0.6, 0] : 0,
                scale: isHovered ? [0, 1, 0] : 0,
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 bg-shimmer opacity-0 group-hover:opacity-100"
          animate={{
            x: isHovered ? ['-100%', '100%'] : '-100%',
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            repeatDelay: 2,
          }}
        />

        {/* Service Icon with Enhanced Animation */}
        <motion.div 
          className={`relative mb-6 p-4 rounded-2xl ${service.bgGlow} group-hover:${service.bgGlow.replace('/10', '/20')} transition-all duration-500`}
          animate={{
            rotateY: isHovered ? 360 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ 
            rotateY: { duration: 0.8 },
            scale: { duration: 0.3 },
          }}
        >
          <motion.div
            animate={{
              boxShadow: isHovered 
                ? `0 0 30px rgba(0, 212, 255, 0.5)` 
                : '0 0 0px rgba(0, 212, 255, 0)',
            }}
            className="relative"
          >
            <IconComponent 
              className={`w-10 h-10 sm:w-12 sm:h-12 text-${service.color} group-hover:scale-110 transition-all duration-300 relative z-10`} 
            />
            
            {/* Icon Glow Effect */}
            <motion.div
              className={`absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 bg-${service.color} rounded-full blur-xl opacity-0 group-hover:opacity-30`}
              animate={{
                scale: isHovered ? [1, 1.5, 1] : 1,
                opacity: isHovered ? [0, 0.3, 0] : 0,
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
              }}
            />
          </motion.div>
        </motion.div>

        {/* Service Title with Typewriter Effect */}
        <motion.h3 
          className={`text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-${service.color} transition-colors duration-300 relative z-10`}
          animate={{
            textShadow: isHovered 
              ? `0 0 20px rgba(0, 212, 255, 0.8)` 
              : '0 0 0px rgba(0, 212, 255, 0)',
          }}
        >
          {t(`items.${service.key}.title`)}
        </motion.h3>

        {/* Service Description */}
        <motion.p
          className="text-sm text-white/70 mb-6 group-hover:text-white/90 transition-colors duration-300 flex-grow relative z-10"
          animate={{
            y: isHovered ? -5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {t(`items.${service.key}.description`)}
        </motion.p>

        {/* Tech Stack Tags with Stagger Animation */}
        <motion.div 
          className="flex flex-wrap gap-2 justify-center relative z-10"
          animate={{
            y: isHovered ? -10 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {t(`items.${service.key}.tech`).split(',').slice(0, 3).map((tech: string, i: number) => (
            <motion.span
              key={i}
              className={`px-3 py-1 bg-white/5 text-white/60 text-xs rounded-full border border-white/10 group-hover:border-${service.color}/30 group-hover:text-${service.color}/80 transition-all duration-300`}
              animate={{
                scale: isHovered ? 1.05 : 1,
                backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
              }}
              transition={{ 
                duration: 0.3,
                delay: i * 0.1,
              }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
              }}
            >
              {tech.trim()}
            </motion.span>
          ))}
        </motion.div>


        {/* Corner Accent */}
        <motion.div
          className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${service.gradient} opacity-0 group-hover:opacity-20 rounded-bl-full`}
          animate={{
            scale: isHovered ? 1 : 0,
            rotate: isHovered ? 180 : 0,
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const t = useTranslations('services')

  return (
    <section id="services" className="section-padding bg-bg-primary relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <RocketLaunchIcon className="w-8 h-8 text-neon-blue animate-bounce-slow" />
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold bg-cyber bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Our Services
            </motion.h2>
            <CpuChipIcon className="w-8 h-8 text-neon-purple animate-spin-slow" />
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
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
            Digital solutions that drive results and transform businesses
          </motion.p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.key} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}