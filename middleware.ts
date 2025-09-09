import createMiddleware from 'next-intl/middleware';
import {routing} from './src/i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|th|ja|zh)/:path*'],
  // Skip middleware during static export
  runtime: 'nodejs'
};
