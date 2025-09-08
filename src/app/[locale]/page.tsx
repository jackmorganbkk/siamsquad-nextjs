'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProcessSection from '@/components/ProcessSection'
import ServicesSection from '@/components/ServicesSection'
import StatsSection from '@/components/StatsSection'
import PortfolioSection from '@/components/PortfolioSection'
import QuotationSection from '@/components/QuotationSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import LoadingOverlay from '@/components/LoadingOverlay'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingOverlay />
  }

  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <ProcessSection />
      <ServicesSection />
      <StatsSection />
      <PortfolioSection />
      <QuotationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
