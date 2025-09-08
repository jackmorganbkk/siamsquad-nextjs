'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  projectType: string
  budget: string
  timeline: string
  description: string
}

const projectTypes = [
  'Website Development',
  'Custom Software',
  'Mobile Application',
  'E-commerce Platform',
  'Digital Marketing',
  'SEO Optimization',
  'System Integration',
  'Technical Consulting',
]

const budgetRanges = [
  'Under ฿50,000',
  '฿50,000 - ฿100,000',
  '฿100,000 - ฿250,000',
  '฿250,000 - ฿500,000',
  '฿500,000 - ฿1,000,000',
  'Over ฿1,000,000',
]

const timelineOptions = [
  '1-2 weeks',
  '3-4 weeks',
  '1-2 months',
  '3-6 months',
  '6+ months',
  'Flexible',
]

export default function QuotationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    setIsSubmitting(false)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="quotation" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-800 mb-4">
            Request for a Quotation
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto">
            Please fill in the information, and our team will prepare a quotation tailored to your project.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto">
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 text-center"
            >
              <div className="text-green-600 text-2xl mb-2">✓</div>
              <h3 className="text-green-800 font-semibold text-lg mb-2">Thank you for your inquiry!</h3>
              <p className="text-green-700">We'll get back to you within 24 hours with a detailed quotation.</p>
            </motion.div>
          )}

          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-secondary-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-secondary-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-secondary-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="+66 XX XXX XXXX"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-secondary-700 font-medium mb-2">
                  Company Name
                </label>
                <input
                  {...register('company')}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your company name"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-secondary-700 font-medium mb-2">
                  Project Type *
                </label>
                <select
                  {...register('projectType', { required: 'Please select a project type' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>
                )}
              </div>

              {/* Budget */}
              <div>
                <label className="block text-secondary-700 font-medium mb-2">
                  Budget Range
                </label>
                <select
                  {...register('budget')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Timeline */}
              <div className="md:col-span-2">
                <label className="block text-secondary-700 font-medium mb-2">
                  Timeline
                </label>
                <select
                  {...register('timeline')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select timeline</option>
                  {timelineOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-secondary-700 font-medium mb-2">
                  Project Description *
                </label>
                <textarea
                  {...register('description', { required: 'Please describe your project' })}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Please describe your project requirements, goals, and any specific features you need..."
                />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary px-12 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </div>
                ) : (
                  'Get Free Quotation'
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
