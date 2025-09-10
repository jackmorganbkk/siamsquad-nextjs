'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  MagnifyingGlassIcon,
  PencilSquareIcon,
  CodeBracketIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const processSteps = [
  {
    title: 'Discovery',
    description: 'We start by understanding your business goals, target audience, and project requirements through detailed consultation.',
    icon: MagnifyingGlassIcon,
    duration: '1-2 weeks',
  },
  {
    title: 'Design',
    description: 'Our design team creates beautiful, user-friendly interfaces that align with your brand and engage your audience.',
    icon: PencilSquareIcon,
    duration: '2-3 weeks',
  },
  {
    title: 'Development',
    description: 'We build your solution using modern technologies and best practices, ensuring scalability and performance.',
    icon: CodeBracketIcon,
    duration: '4-8 weeks',
  },
  {
    title: 'Testing',
    description: 'Comprehensive testing across all devices and browsers to ensure everything works perfectly before launch.',
    icon: CheckCircleIcon,
    duration: '1-2 weeks',
  },
  {
    title: 'Launch',
    description: 'We handle the deployment and go-live process, ensuring a smooth transition to your new digital solution.',
    icon: RocketLaunchIcon,
    duration: '3-5 days',
  },
  {
    title: 'Support',
    description: 'Ongoing maintenance, updates, and support to keep your solution running smoothly and securely.',
    icon: HeartIcon,
    duration: 'Ongoing',
  },
]

export default function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="process" className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            How We Work
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Our proven 6-step process ensures successful project delivery from concept to launch.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
              >
                
                {/* Timeline Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-1/2 top-16 w-0.5 h-16 bg-primary-200 transform -translate-x-1/2 hidden md:block"></div>
                )}
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-primary-100">
                    
                    {/* Step Number & Duration */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-accent-500 bg-accent-50 px-3 py-1 rounded-full">
                        Step {index + 1}
                      </span>
                      <span className="text-sm text-text-muted">
                        {step.duration}
                      </span>
                    </div>
                    
                    {/* Step Title */}
                    <h3 className="text-xl font-heading font-semibold text-text-primary mb-3">
                      {step.title}
                    </h3>
                    
                    {/* Step Description */}
                    <p className="text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-accent-500 rounded-full items-center justify-center shadow-large">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Mobile Icon */}
                <div className="md:hidden flex w-12 h-12 bg-accent-500 rounded-full items-center justify-center mr-4 flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
