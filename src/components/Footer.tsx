'use client'

import { motion } from 'framer-motion'

const services = [
  'Website Development',
  'Custom Software',
  'Mobile Applications',
  'Digital Marketing',
  'SEO Optimization',
  'Technical Consulting',
]

const company = [
  'About Us',
  'Our Team',
  'Careers',
  'Portfolio',
  'Blog',
  'Contact',
]

const resources = [
  'Documentation',
  'Support Center',
  'Privacy Policy',
  'Terms of Service',
  'FAQ',
  'Sitemap',
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-heading font-bold glow-text mb-4">
                SiamSquad
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Delivering enterprise-grade digital solutions for businesses across Thailand. 
                We transform ideas into powerful digital experiences.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { name: 'Facebook', icon: '📘' },
                  { name: 'Twitter', icon: '🐦' },
                  { name: 'LinkedIn', icon: '💼' },
                  { name: 'Instagram', icon: '📷' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-heading font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection('#services')
                      }}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Company */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-heading font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-heading font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                    >
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-heading font-semibold mb-2">
                Stay Updated
              </h4>
              <p className="text-gray-300">
                Get the latest news and updates about digital trends in Thailand.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <motion.button
                className="btn-primary px-6 py-3 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-700 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 SiamSquad. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
