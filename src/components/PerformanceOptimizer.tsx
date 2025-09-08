'use client';

import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLinks = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap'
      ];

      fontLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        link.onload = () => {
          link.rel = 'stylesheet';
        };
        document.head.appendChild(link);
      });
    };

    // Optimize images with Intersection Observer
    const optimizeImages = () => {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    };

    // Reduce layout shifts
    const preventLayoutShifts = () => {
      // Add aspect ratio containers for images
      document.querySelectorAll('img').forEach(img => {
        if (!img.style.aspectRatio && img.width && img.height) {
          img.style.aspectRatio = `${img.width} / ${img.height}`;
        }
      });
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Delay non-critical scripts
      const delayedScripts = document.querySelectorAll('script[data-delay]');
      
      const loadDelayedScripts = () => {
        delayedScripts.forEach(script => {
          const newScript = document.createElement('script');
          Array.from(script.attributes).forEach(attr => {
            if (attr.name !== 'data-delay') {
              newScript.setAttribute(attr.name, attr.value);
            }
          });
          newScript.innerHTML = script.innerHTML;
          script.parentNode?.replaceChild(newScript, script);
        });
      };

      // Load after user interaction or after 3 seconds
      const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
      const loadScripts = () => {
        loadDelayedScripts();
        events.forEach(event => {
          document.removeEventListener(event, loadScripts);
        });
      };

      events.forEach(event => {
        document.addEventListener(event, loadScripts, { once: true });
      });

      setTimeout(loadScripts, 3000);
    };

    // Web Vitals optimization
    const optimizeWebVitals = () => {
      // Optimize LCP (Largest Contentful Paint)
      const lcpElements = document.querySelectorAll('h1, .hero-image, .main-banner');
      lcpElements.forEach(element => {
        (element as HTMLElement).style.contentVisibility = 'auto';
      });

      // Optimize CLS (Cumulative Layout Shift)
      const observer = new ResizeObserver(entries => {
        for (const entry of entries) {
          // Handle layout shifts
          if (entry.contentRect.height > 0) {
            entry.target.setAttribute('data-loaded', 'true');
          }
        }
      });

      document.querySelectorAll('img, iframe, video').forEach(element => {
        observer.observe(element);
      });
    };

    // Service Worker for caching
    const registerServiceWorker = () => {
      if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      }
    };

    // Run optimizations
    preloadCriticalResources();
    optimizeImages();
    preventLayoutShifts();
    optimizeThirdPartyScripts();
    optimizeWebVitals();
    registerServiceWorker();

    // Performance monitoring
    if ('PerformanceObserver' in window) {
      // Monitor LCP
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor FID
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry: any) => {
          if (entry.processingStart && entry.startTime) {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Monitor CLS
      const clsObserver = new PerformanceObserver((entryList) => {
        let clsValue = 0;
        const entries = entryList.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

  }, []);

  return null;
}
