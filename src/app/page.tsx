'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { routing } from '@/i18n/routing'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to default locale
    router.replace(`/${routing.defaultLocale}`)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p>Redirecting...</p>
      </div>
    </div>
  )
}
