'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import FeaturesSection from '@/components/FeaturesSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import LoadingOverlay from '@/components/LoadingOverlay'

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
      <Header />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}