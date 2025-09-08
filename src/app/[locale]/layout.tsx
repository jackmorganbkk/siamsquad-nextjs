import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Inter, Poppins } from 'next/font/google';
import '../globals.css';
import Analytics from '@/components/Analytics';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';
import AccessibilityEnhancer from '@/components/AccessibilityEnhancer';
import type { Metadata } from "next";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const messages = await getMessages();
  
  const titles = {
    th: "SiamSquad - โซลูชันดิจิทัลมืออาชีพ | บางกอก ประเทศไทย",
    en: "SiamSquad - Professional Digital Solutions | Bangkok Thailand", 
    ja: "SiamSquad - プロフェッショナルデジタルソリューション | バンコク タイ"
  };

  const descriptions = {
    th: "บริษัทโซลูชันดิจิทัลชั้นนำในกรุงเทพฯ ประเทศไทย เราสร้างเว็บไซต์ที่สวยงาม แอปมือถือ และแคมเปญการตลาดดิจิทัลที่ช่วยให้ธุรกิจไทยเติบโตออนไลน์",
    en: "Leading digital solutions company in Bangkok, Thailand. We create beautiful websites, mobile apps, and digital marketing campaigns that help Thai businesses grow online.",
    ja: "バンコク、タイの主要なデジタルソリューション会社。タイの企業がオンラインで成長するための美しいウェブサイト、モバイルアプリ、デジタルマーケティングキャンペーンを作成します。"
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: [
      'web development Bangkok', 'digital marketing Thailand', 'mobile app development',
      'SEO services Bangkok', 'custom software Thailand', 'website design Bangkok',
      'การพัฒนาเว็บไซต์ กรุงเทพ', 'การตลาดดิจิทัล ประเทศไทย', 'พัฒนาแอปมือถือ',
      'ウェブ開発 バンコク', 'デジタルマーケティング タイ', 'モバイルアプリ開発'
    ].join(', '),
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
      locale: locale === 'th' ? 'th_TH' : locale === 'ja' ? 'ja_JP' : 'en_US',
      alternateLocale: ['th_TH', 'en_US', 'ja_JP'],
      url: `https://siamsquad.com/${locale}`,
      siteName: 'SiamSquad Digital Solutions',
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
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
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      images: ['/twitter-image.jpg'],
    },
    alternates: {
      canonical: `https://siamsquad.com/${locale}`,
      languages: {
        'th': 'https://siamsquad.com/th',
        'en': 'https://siamsquad.com/en',
        'ja': 'https://siamsquad.com/ja',
        'x-default': 'https://siamsquad.com/en'
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <div id="main-content" tabIndex={-1}>
            {children}
          </div>
          <Analytics googleAnalyticsId="G-XXXXXXXXXX" />
          <PerformanceOptimizer />
          <AccessibilityEnhancer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
