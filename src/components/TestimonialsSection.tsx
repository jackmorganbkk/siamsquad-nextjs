'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { 
  StarIcon,
  UserCircleIcon,
  BuildingOfficeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SparklesIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    position: 'CEO',
    company: 'TechStart Bangkok',
    avatar: '/api/placeholder/80/80',
    rating: 5,
    text: 'SiamSquad transformed our digital presence completely. Their innovative approach and technical expertise delivered results beyond our expectations. The team is professional, responsive, and truly understands modern business needs.',
    project: 'E-commerce Platform',
    color: 'neon-blue',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    position: 'Marketing Director',
    company: 'Global Ventures Ltd',
    avatar: '/api/placeholder/80/80',
    rating: 5,
    text: 'Working with SiamSquad was a game-changer for our company. They delivered a stunning mobile app that increased our customer engagement by 300%. Their attention to detail and user experience is exceptional.',
    project: 'Mobile Application',
    color: 'neon-green',
    gradient: 'from-green-500 to-emerald-400',
  },
  {
    id: 3,
    name: 'Dr. Priya Sharma',
    position: 'Founder',
    company: 'HealthTech Solutions',
    avatar: '/api/placeholder/80/80',
    rating: 5,
    text: 'The analytics dashboard SiamSquad built for us revolutionized how we handle data. Real-time insights, beautiful visualizations, and seamless integration. They exceeded every expectation we had.',
    project: 'Analytics Dashboard',
    color: 'neon-purple',
    gradient: 'from-purple-500 to-violet-400',
  },
  {
    id: 4,
    name: 'James Thompson',
    position: 'CTO',
    company: 'FinanceFlow Inc',
    avatar: '/api/placeholder/80/80',
    rating: 5,
    text: 'Security, performance, and scalability - SiamSquad delivered on all fronts. Our cloud infrastructure handles 10x more traffic now with better performance. Truly impressive technical capabilities.',
    project: 'Cloud Infrastructure',
    color: 'neon-pink',
    gradient: 'from-pink-500 to-rose-400',
  },
  {
    id: 5,
    name: 'Lisa Wang',
    position: 'Product Manager',
    company: 'InnovateLab',
    avatar: '/api/placeholder/80/80',
    rating: 5,
    text: 'From concept to deployment, SiamSquad was with us every step. Their agile approach, clear communication, and technical excellence made our project a huge success. Highly recommended!',
    project: 'Web Platform',
    color: 'neon-orange',
    gradient: 'from-orange-500 to-amber-400',
  },
]

const TestimonialCard = ({ testimonial, isActive }: { testimonial: typeof testimonials[0], isActive: boolean }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
      animate={{ 
        opacity: isActive ? 1 : 0.7, 
        scale: isActive ? 1 : 0.9,
        rotateY: 0,
        z: isActive ? 10 : 0,
      }}
      transition={{ 
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <motion.div 
        className="relative dark-card rounded-3xl p-8 border-2 border-transparent overflow-hidden backdrop-blur-sm"
        animate={{
          borderColor: isActive && isHovered ? `rgba(0, 212, 255, 0.5)` : 'transparent',
          boxShadow: isActive && isHovered 
            ? `0 0 40px rgba(0, 212, 255, 0.3), 0 0 80px rgba(139, 92, 246, 0.2)` 
            : '0 8px 32px rgba(0, 0, 0, 0.3)',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0`}
          animate={{
            opacity: isActive && isHovered ? 0.1 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Floating Quote Icon */}
        <motion.div
          className="absolute top-6 right-6 opacity-20"
          animate={{
            rotate: isHovered ? 15 : 0,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <ChatBubbleLeftRightIcon className={`w-16 h-16 text-${testimonial.color}`} />
        </motion.div>

        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 bg-shimmer opacity-0"
          animate={{
            opacity: isActive && isHovered ? 1 : 0,
            x: isHovered ? ['-100%', '100%'] : '-100%',
          }}
          transition={{
            opacity: { duration: 0.3 },
            x: { duration: 1.5, repeat: isHovered ? Infinity : 0, repeatDelay: 2 },
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Rating Stars */}
          <motion.div 
            className="flex gap-1 mb-6"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  rotate: isHovered ? [0, 360] : 0,
                  scale: isHovered ? [1, 1.3, 1] : 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  repeat: isHovered ? Infinity : 0,
                  repeatDelay: 2,
                }}
              >
                <StarSolidIcon className={`w-6 h-6 text-${testimonial.color}`} />
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial Text */}
          <motion.blockquote 
            className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 relative"
            animate={{
              textShadow: isActive && isHovered 
                ? `0 0 20px rgba(0, 212, 255, 0.3)` 
                : '0 0 0px rgba(0, 212, 255, 0)',
            }}
            >
            &ldquo;{testimonial.text}&rdquo;
          </motion.blockquote>

          {/* Author Info */}
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <motion.div
              className="relative"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.gradient} p-0.5`}>
                <div className="w-full h-full rounded-full bg-bg-primary flex items-center justify-center">
                  <UserCircleIcon className="w-12 h-12 text-white/70" />
                </div>
              </div>
              
              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 w-16 h-16 rounded-full bg-${testimonial.color} blur-xl opacity-0`}
                animate={{
                  opacity: isHovered ? 0.3 : 0,
                  scale: isHovered ? 1.5 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Author Details */}
            <div className="flex-1">
              <motion.h4 
                className="text-lg font-semibold text-white mb-1"
                animate={{
                  color: isHovered ? `rgb(0, 212, 255)` : 'rgb(255, 255, 255)',
                }}
              >
                {testimonial.name}
              </motion.h4>
              <p className="text-white/70 text-sm mb-1">
                {testimonial.position}
              </p>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <BuildingOfficeIcon className="w-4 h-4" />
                {testimonial.company}
              </div>
            </div>

            {/* Project Badge */}
            <motion.div
              className={`px-4 py-2 bg-${testimonial.color}/10 border border-${testimonial.color}/30 rounded-full`}
              animate={{
                backgroundColor: isHovered ? `rgba(0, 212, 255, 0.2)` : `rgba(0, 212, 255, 0.1)`,
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <span className={`text-${testimonial.color} text-sm font-medium`}>
                {testimonial.project}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Corner Accent */}
        <motion.div
          className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${testimonial.gradient} opacity-0 rounded-tr-full`}
          animate={{
            opacity: isActive && isHovered ? 0.3 : 0,
            scale: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const t = useTranslations('testimonials')

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section id="testimonials" className="section-padding bg-bg-primary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-10 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 30, -50, 0],
            scale: [1, 0.8, 1.3, 1],
          }}
          transition={{
            duration: 25,
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
            <HeartIcon className="w-8 h-8 text-neon-pink animate-pulse" />
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
              Client Success Stories
            </motion.h2>
            <SparklesIcon className="w-8 h-8 text-neon-blue animate-bounce" />
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
            Hear from our satisfied clients about their transformative experiences
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div ref={ref} className="relative">
          {/* Main Testimonial Display */}
          <div className="relative min-h-[400px] flex items-center justify-center mb-12">
            <AnimatePresence mode="wait">
              <TestimonialCard 
                key={currentIndex}
                testimonial={testimonials[currentIndex]} 
                isActive={true}
              />
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 212, 255, 0.2)' }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeftIcon className="w-6 h-6 text-white" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-neon-blue shadow-neon' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  animate={{
                    scale: index === currentIndex ? 1.2 : 1,
                    boxShadow: index === currentIndex 
                      ? '0 0 15px rgba(0, 212, 255, 0.8)' 
                      : '0 0 0px rgba(0, 212, 255, 0)',
                  }}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 212, 255, 0.2)' }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRightIcon className="w-6 h-6 text-white" />
            </motion.button>
          </div>

          {/* Auto-play Toggle */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                isAutoPlaying
                  ? 'bg-neon-gradient text-white border-transparent shadow-neon'
                  : 'bg-white/5 text-white/70 border-white/20 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
            </motion.button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10"
        >
          {[
            { number: '500+', label: 'Happy Clients', icon: HeartIcon },
            { number: '98%', label: 'Satisfaction Rate', icon: StarSolidIcon },
            { number: '24/7', label: 'Support Available', icon: SparklesIcon },
            { number: '5★', label: 'Average Rating', icon: StarSolidIcon },
          ].map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div 
                key={stat.label} 
                className="text-center group"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="flex items-center justify-center mb-3"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <IconComponent className="w-8 h-8 text-neon-blue" />
                </motion.div>
                <motion.div 
                  className="text-2xl md:text-3xl font-bold text-neon-blue mb-2"
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
                <div className="text-sm text-white/70 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
