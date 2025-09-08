import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Analytics from '@/components/Analytics';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';
import AccessibilityEnhancer from '@/components/AccessibilityEnhancer';

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
  title: {
    default: "SiamSquad - Professional Digital Solutions | Bangkok Thailand",
    template: "%s | SiamSquad Digital Solutions"
  },
  description: "Leading digital solutions company in Bangkok, Thailand. We create beautiful websites, mobile apps, and digital marketing campaigns that help Thai businesses grow online. Professional web development, SEO, and custom software solutions.",
  keywords: ["web development Bangkok", "digital marketing Thailand", "mobile app development", "SEO services Bangkok", "custom software Thailand", "website design Bangkok"],
  authors: [{ name: "SiamSquad Digital Solutions" }],
  creator: "SiamSquad",
  publisher: "SiamSquad",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    alternateLocale: ['en_US', 'ja_JP'],
    url: 'https://siamsquad.com',
    siteName: 'SiamSquad Digital Solutions',
    title: 'SiamSquad - Professional Digital Solutions Bangkok',
    description: 'Leading digital solutions company in Bangkok. Professional web development, mobile apps, and digital marketing for Thai businesses.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SiamSquad Digital Solutions Bangkok',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SiamSquad - Professional Digital Solutions Bangkok',
    description: 'Leading digital solutions company in Bangkok. Professional web development and digital marketing.',
    images: ['/twitter-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://siamsquad.com',
    languages: {
      'th': 'https://siamsquad.com/th',
      'en': 'https://siamsquad.com/en',
      'ja': 'https://siamsquad.com/ja',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <Analytics googleAnalyticsId="G-XXXXXXXXXX" />
        <PerformanceOptimizer />
        <AccessibilityEnhancer />
      </body>
    </html>
  );
}