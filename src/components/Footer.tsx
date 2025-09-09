'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-white/10">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-heading font-bold gradient-text mb-4">
                SiamSquad
              </h3>
              <p className="text-white/70 max-w-md">
                Professional digital solutions for modern businesses. We build the future, one project at a time.
              </p>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-white/70">
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>Digital Marketing</li>
                <li>Cloud Solutions</li>
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-white/70">
                <li>Bangkok, Thailand</li>
                <li>hello@siamsquad.com</li>
                <li>+66 XX XXX XXXX</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 mt-12 pt-8 text-center"
        >
          <p className="text-white/60">
            © 2024 SiamSquad. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}