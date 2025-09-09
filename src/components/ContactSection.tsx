'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  EnvelopeIcon, 
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="section-padding bg-bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Ready to start your project? Let's discuss how we can help your business grow.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-neon-blue/10 rounded-lg mb-4">
                <EnvelopeIcon className="w-6 h-6 text-neon-blue" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-white/70">hello@siamsquad.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-neon-green/10 rounded-lg mb-4">
                <PhoneIcon className="w-6 h-6 text-neon-green" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-white/70">+66 XX XXX XXXX</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-neon-purple/10 rounded-lg mb-4">
                <MapPinIcon className="w-6 h-6 text-neon-purple" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
              <p className="text-white/70">Bangkok, Thailand</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <motion.button
              className="bg-neon-gradient text-white font-semibold px-8 py-4 rounded-lg neon-glow hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}