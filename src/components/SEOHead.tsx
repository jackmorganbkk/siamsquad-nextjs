import { useLocale } from 'next-intl';
import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export default function SEOHead({
  title = "SiamSquad - Professional Digital Solutions Bangkok Thailand",
  description = "Leading digital solutions company in Bangkok, Thailand. We create beautiful websites, mobile apps, and digital marketing campaigns that help Thai businesses grow online.",
  keywords = "web development Bangkok, digital marketing Thailand, mobile app development, SEO services Bangkok, custom software Thailand, website design Bangkok",
  ogImage = "/og-image.jpg",
  canonicalUrl = "https://siamsquad.com"
}: SEOHeadProps) {
  const locale = useLocale();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SiamSquad Digital Solutions",
    "description": description,
    "url": canonicalUrl,
    "logo": `${canonicalUrl}/logo.png`,
    "foundingDate": "2017",
    "founders": [
      {
        "@type": "Person",
        "name": "SiamSquad Team"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangkok",
      "addressCountry": "Thailand"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+66-XX-XXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["Thai", "English", "Japanese"]
    },
    "sameAs": [
      "https://facebook.com/siamsquad",
      "https://twitter.com/siamsquad",
      "https://linkedin.com/company/siamsquad"
    ],
    "offers": {
      "@type": "Offer",
      "itemOffered": [
        {
          "@type": "Service",
          "name": "Website Development",
          "description": "Professional website development services"
        },
        {
          "@type": "Service", 
          "name": "Mobile App Development",
          "description": "Custom mobile application development"
        },
        {
          "@type": "Service",
          "name": "Digital Marketing",
          "description": "Comprehensive digital marketing solutions"
        },
        {
          "@type": "Service",
          "name": "SEO Services",
          "description": "Search engine optimization services"
        }
      ]
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": canonicalUrl
      }
    ]
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="SiamSquad Digital Solutions" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Language and Locale */}
      <meta httpEquiv="content-language" content={locale} />
      <link rel="canonical" href={`${canonicalUrl}/${locale}`} />
      
      {/* Alternate Language Links */}
      <link rel="alternate" hrefLang="th" href={`${canonicalUrl}/th`} />
      <link rel="alternate" hrefLang="en" href={`${canonicalUrl}/en`} />
      <link rel="alternate" hrefLang="ja" href={`${canonicalUrl}/ja`} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${canonicalUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={`${canonicalUrl}/${locale}`} />
      <meta property="og:site_name" content="SiamSquad Digital Solutions" />
      <meta property="og:locale" content={locale === 'th' ? 'th_TH' : locale === 'ja' ? 'ja_JP' : 'en_US'} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${canonicalUrl}${ogImage}`} />
      <meta name="twitter:site" content="@siamsquad" />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData)
        }}
      />
    </Head>
  );
}
