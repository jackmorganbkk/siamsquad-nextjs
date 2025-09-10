'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { 
  EyeIcon, 
  CodeBracketIcon, 
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ShoppingCartIcon,
  ChartBarIcon,
  SparklesIcon,
  ArrowTopRightOnSquareIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Modern e-commerce solution with AI-powered recommendations and real-time analytics',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'AI/ML'],
    color: 'neon-blue',
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
    icon: ShoppingCartIcon,
    featured: true,
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    description: 'Secure banking application with biometric authentication and real-time transactions',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'Security'],
    color: 'neon-green',
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    icon: DevicePhoneMobileIcon,
    featured: false,
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    category: 'Data Visualization',
    description: 'Real-time analytics platform with interactive charts and business intelligence',
    tech: ['React', 'D3.js', 'Python', 'AWS'],
    color: 'neon-purple',
    gradient: 'from-purple-500 via-violet-500 to-indigo-500',
    icon: ChartBarIcon,
    featured: true,
  },
  {
    id: 4,
    title: 'Cloud Infrastructure',
    category: 'DevOps & Cloud',
    description: 'Scalable cloud architecture with auto-scaling and cost optimization',
    tech: ['AWS', 'Kubernetes', 'Terraform', 'Docker'],
    color: 'neon-orange',
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    icon: GlobeAltIcon,
    featured: false,
  },
]

const categories = ['All', 'Web Development', 'Mobile Development', 'Data Visualization', 'DevOps & Cloud']

const PortfolioCard = ({ item, index }: { item: typeof portfolioItems[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const IconComponent = item.icon

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      className={`group relative cursor-pointer ${item.featured ? 'md:col-span-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      <motion.div 
        className="relative dark-card rounded-2xl overflow-hidden border-2 border-transparent hover:border-white/20 transition-all duration-500 h-full"
        animate={{
          boxShadow: isHovered 
            ? `0 0 40px rgba(0, 212, 255, 0.3), 0 0 80px rgba(139, 92, 246, 0.2)` 
            : '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Featured Badge */}
        {item.featured && (
          <motion.div
            className="absolute top-4 left-4 z-20 bg-neon-gradient text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                '0 0 10px rgba(0, 212, 255, 0.5)',
                '0 0 20px rgba(0, 212, 255, 0.8)',
                '0 0 10px rgba(0, 212, 255, 0.5)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <StarIcon className="w-3 h-3" />
            FEATURED
          </motion.div>
        )}

        {/* Image Container */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          {/* Animated Background Gradient */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80`}
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.8 }}
          />

          {/* Main Icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? 360 : 0,
            }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="p-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              animate={{
                boxShadow: isHovered 
                  ? '0 0 30px rgba(255, 255, 255, 0.3)' 
                  : '0 0 10px rgba(255, 255, 255, 0.1)',
              }}
            >
              <IconComponent className="w-12 h-12 text-white" />
            </motion.div>
          </motion.div>

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
          >
            <motion.div
              className="flex gap-4"
              initial={{ scale: 0 }}
              animate={{ scale: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <motion.button
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <EyeIcon className="w-6 h-6 text-white" />
              </motion.button>
              <motion.button
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowTopRightOnSquareIcon className="w-6 h-6 text-white" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          <motion.span
            className={`inline-block px-3 py-1 text-xs font-semibold text-${item.color} bg-${item.color}/10 rounded-full mb-3`}
            animate={{
              backgroundColor: isHovered ? `rgba(0, 212, 255, 0.2)` : `rgba(0, 212, 255, 0.1)`,
            }}
          >
            {item.category}
          </motion.span>

          {/* Title */}
          <motion.h3
            className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300"
            animate={{
              textShadow: isHovered 
                ? '0 0 20px rgba(0, 212, 255, 0.8)' 
                : '0 0 0px rgba(0, 212, 255, 0)',
            }}
          >
            {item.title}
          </motion.h3>

          {/* Description */}
          <p className="text-white/70 text-sm mb-4 group-hover:text-white/90 transition-colors duration-300">
            {item.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {item.tech.map((tech, i) => (
              <motion.span
                key={tech}
                className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded border border-white/10 group-hover:border-neon-blue/30 group-hover:text-neon-blue/80 transition-all duration-300"
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  backgroundColor: isHovered ? 'rgba(0, 212, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const t = useTranslations('portfolio')

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <section id="portfolio" className="section-padding bg-bg-secondary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold bg-cyber bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Our Portfolio
          </motion.h2>
          
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
            Showcasing our latest projects and innovative solutions
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                selectedCategory === category
                  ? 'bg-neon-gradient text-white border-transparent shadow-neon'
                  : 'bg-white/5 text-white/70 border-white/20 hover:bg-white/10 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          ref={ref}
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
