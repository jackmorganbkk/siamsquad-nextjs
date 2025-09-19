'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    beTracker: {
      t: (config: { hash: string }) => void;
    };
  }
}

interface AnalyticsProps {
  googleAnalyticsId?: string;
  metricoolHash?: string;
}

export default function Analytics({ 
  googleAnalyticsId = 'G-XXXXXXXXXX',
  metricoolHash = '274726a82d3e8eabeefb8631bc24ae9'
}: AnalyticsProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const scriptsToCleanup: HTMLScriptElement[] = [];

    // Load Google Analytics
    if (googleAnalyticsId) {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      document.head.appendChild(script1);
      scriptsToCleanup.push(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${googleAnalyticsId}', {
          page_title: document.title,
          page_location: window.location.href,
          anonymize_ip: true,
          allow_google_signals: false,
          allow_ad_personalization_signals: false
        });
      `;
      document.head.appendChild(script2);
      scriptsToCleanup.push(script2);
    }

    // Load Metricool Analytics
    if (metricoolHash) {
      const metricoolScript = document.createElement('script');
      metricoolScript.innerHTML = `
        function loadScript(a){
          var b=document.getElementsByTagName("head")[0],c=document.createElement("script");
          c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",
          c.onreadystatechange=a,c.onload=a,b.appendChild(c)
        }
        loadScript(function(){
          beTracker.t({hash:"${metricoolHash}"})
        });
      `;
      document.head.appendChild(metricoolScript);
      scriptsToCleanup.push(metricoolScript);
    }

    return () => {
      scriptsToCleanup.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, [googleAnalyticsId, metricoolHash]);

  // Track page views on route changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', googleAnalyticsId, {
        page_path: pathname,
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, [pathname, googleAnalyticsId]);

  return null;
}

// Custom event tracking functions
export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackConversion = (conversionId: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: 'THB'
    });
  }
};

export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', {
    form_name: formName,
    event_category: 'engagement',
    event_label: 'contact_form'
  });
};

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('click', {
    event_category: 'engagement',
    event_label: buttonName,
    custom_parameter: location
  });
};
