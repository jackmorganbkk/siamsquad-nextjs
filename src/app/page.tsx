'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { routing } from '@/i18n/routing'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    // Immediate redirect to default locale
    router.replace(`/${routing.defaultLocale}`)
  }, [router])

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-neon-blue mx-auto mb-4"></div>
        <p className="text-white/80">Loading SiamSquad...</p>
      </div>
    </div>
  )
}
