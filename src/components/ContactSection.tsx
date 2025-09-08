'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline'

const contactInfo = [
  {
    icon: MapPinIcon,
    title: 'Office Location',
    details: ['Bangkok, Thailand', 'Serving clients nationwide'],
  },
  {
    icon: PhoneIcon,
    title: 'Phone & WhatsApp',
    details: ['+66 XX XXX XXXX', 'Available 24/7'],
  },
  {
    icon: EnvelopeIcon,
    title: 'Email Address',
    details: ['info@siamsquad.com', 'support@siamsquad.com'],
  },
  {
    icon: ClockIcon,
    title: 'Business Hours',
    details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
  },
  {
    icon: GlobeAltIcon,
    title: 'Languages',
    details: ['Thai', 'English'],
  },
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto">
            Ready to start your digital transformation? Contact us today for a free consultation.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card-gradient rounded-2xl p-8 shadow-soft card-hover border border-gray-100 text-center h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-semibold text-secondary-800 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Details */}
                <div className="space-y-2">
                  {item.details.map((detail, detailIndex) => (
                    <p
                      key={detailIndex}
                      className={`${
                        detailIndex === 0 
                          ? 'text-secondary-800 font-semibold' 
                          : 'text-secondary-600'
                      }`}
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Let&apos;s discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.button>
              <motion.button
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
