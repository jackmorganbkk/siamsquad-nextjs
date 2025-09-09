import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Cloudflare Pages (disabled for development)
  // output: 'export',
  trailingSlash: true,
  
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', '@heroicons/react'],
    missingSuspenseWithCSRBailout: false,
  },
  
  
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Compression
  compress: true
};

export default withNextIntl(nextConfig);
