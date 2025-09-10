/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // PROFESSIONAL PALETTE - Digital Silk Inspired
        primary: {
          50: '#f8fafc',   // Very light gray
          100: '#f1f5f9',  // Light gray
          200: '#e2e8f0',  // Medium light gray
          300: '#cbd5e1',  // Medium gray
          400: '#94a3b8',  // Gray
          500: '#64748b',  // Dark gray
          600: '#475569',  // Darker gray
          700: '#334155',  // Very dark gray
          800: '#1e293b',  // Charcoal
          900: '#0f172a',  // Near black
        },
        // SINGLE ACCENT COLOR - Professional Blue
        accent: {
          50: '#eff6ff',
          100: '#dbeafe', 
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',  // Main accent blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // CLEAN BACKGROUNDS
        bg: {
          primary: '#ffffff',     // Pure white
          secondary: '#f8fafc',   // Very light gray
          tertiary: '#f1f5f9',    // Light gray
          dark: '#1e293b',        // Dark sections
        },
        // TEXT COLORS
        text: {
          primary: '#1a202c',     // Dark gray for main text
          secondary: '#4a5568',   // Medium gray for secondary text
          muted: '#718096',       // Light gray for muted text
          white: '#ffffff',       // White text for dark backgrounds
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Inter', 'system-ui', 'sans-serif'], // Consistent font family
      },
      animation: {
        // MINIMAL ANIMATIONS ONLY
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'gentle-bounce': 'gentleBounce 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      backgroundImage: {
        // CLEAN GRADIENTS ONLY
        'subtle-gradient': 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        'accent-gradient': 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
        'dark-gradient': 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      },
      boxShadow: {
        // PROFESSIONAL SHADOWS
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'large': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}
