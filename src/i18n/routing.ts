import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['th', 'en', 'ja'],
 
  // Used when no locale matches
  defaultLocale: 'th',
  
  // Always use locale prefix to prevent 404 errors
  localePrefix: 'always',
  
  // Localized pathnames
  pathnames: {
    '/': '/',
    '/services': {
      th: '/บริการ',
      en: '/services',
      ja: '/サービス'
    },
    '/contact': {
      th: '/ติดต่อ',
      en: '/contact', 
      ja: '/お問い合わせ'
    },
    '/portfolio': {
      th: '/ผลงาน',
      en: '/portfolio',
      ja: '/ポートフォリオ'
    }
  }
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
