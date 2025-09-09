import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'th', 'ja', 'zh'],

  // Used when no locale matches
  defaultLocale: 'en',
  
  // Always use locale prefix to prevent 404 errors
  localePrefix: 'always',
  
  // Disable locale detection for static export
  localeDetection: false,
  
  // Localized pathnames
  pathnames: {
    '/': '/',
    '/services': {
      th: '/บริการ',
      en: '/services',
      ja: '/サービス',
      zh: '/服务'
    },
    '/contact': {
      th: '/ติดต่อ',
      en: '/contact', 
      ja: '/お問い合わせ',
      zh: '/联系我们'
    },
    '/portfolio': {
      th: '/ผลงาน',
      en: '/portfolio',
      ja: '/ポートフォリオ',
      zh: '/作品集'
    }
  }
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
