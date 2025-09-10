'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import PortfolioSection from '@/components/PortfolioSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ProcessSection from '@/components/ProcessSection'
import FeaturesSection from '@/components/FeaturesSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import LoadingOverlay from '@/components/LoadingOverlay'
import PerformanceOptimizer from '@/components/PerformanceOptimizer'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Quick loading optimization - remove artificial delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300) // Reduced from 2000ms to 300ms

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingOverlay />
  }

  return (
    <main className="relative">
      <PerformanceOptimizer />
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}