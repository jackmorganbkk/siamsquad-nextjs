import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'SiamSquad - Professional Digital Solutions',
  description: 'Delivering enterprise-grade websites, software development, and digital transformation services for businesses across Thailand',
  keywords: 'web development, software development, digital marketing, SEO, Thailand, Bangkok, enterprise solutions',
  authors: [{ name: 'SiamSquad' }],
  openGraph: {
    title: 'SiamSquad - Professional Digital Solutions',
    description: 'Delivering enterprise-grade websites, software development, and digital transformation services for businesses across Thailand',
    type: 'website',
    url: 'https://www.siamsquad.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SiamSquad - Professional Digital Solutions',
    description: 'Delivering enterprise-grade websites, software development, and digital transformation services for businesses across Thailand',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
