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
        // ACCENT COLORS - Professional with subtle variety
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
        // SUBTLE SECONDARY COLORS
        secondary: {
          blue: '#3b82f6',
          purple: '#8b5cf6', 
          teal: '#14b8a6',
          emerald: '#10b981',
          orange: '#f97316',
          pink: '#ec4899',
        },
        // DARK BACKGROUNDS
        bg: {
          primary: '#0a0a0a',     // Very dark background
          secondary: '#111111',   // Dark gray
          tertiary: '#1a1a1a',    // Medium dark gray
          dark: '#1e293b',        // Dark sections
        },
        // TEXT COLORS
        text: {
          primary: '#ffffff',     // White for main text
          secondary: '#e2e8f0',   // Light gray for secondary text
          muted: '#cbd5e1',       // Medium gray for muted text
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
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px rgba(59, 130, 246, 0.3)' },
          '100%': { textShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.4)' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(0, 212, 255, 0.5), 0 0 10px rgba(0, 212, 255, 0.3), 0 0 15px rgba(0, 212, 255, 0.2)' 
          },
          '50%': { 
            boxShadow: '0 0 10px rgba(0, 212, 255, 0.8), 0 0 20px rgba(0, 212, 255, 0.6), 0 0 30px rgba(0, 212, 255, 0.4)' 
          },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleBounce: {
          '0%': { transform: 'scale(0.3)' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        gradientX: {
          '0%, 100%': { transform: 'translateX(-50%)', backgroundPosition: '0% 50%' },
          '50%': { transform: 'translateX(50%)', backgroundPosition: '100% 50%' },
        },
        gradientY: {
          '0%, 100%': { transform: 'translateY(-50%)', backgroundPosition: '50% 0%' },
          '50%': { transform: 'translateY(50%)', backgroundPosition: '50% 100%' },
        },
        gradientXY: {
          '0%, 100%': { transform: 'translate(-50%, -50%)', backgroundPosition: '0% 0%' },
          '25%': { transform: 'translate(50%, -50%)', backgroundPosition: '100% 0%' },
          '50%': { transform: 'translate(50%, 50%)', backgroundPosition: '100% 100%' },
          '75%': { transform: 'translate(-50%, 50%)', backgroundPosition: '0% 100%' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '0.99' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' },
        },
        neonFlicker: {
          '0%, 100%': { 
            textShadow: '0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff, 0 0 20px #00d4ff' 
          },
          '50%': { 
            textShadow: '0 0 2px #00d4ff, 0 0 5px #00d4ff, 0 0 8px #00d4ff, 0 0 12px #00d4ff' 
          },
        },
        textShimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        borderBeam: {
          '100%': { 'offset-distance': '100%' },
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'rotate(215deg) translateX(-500px)', opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #1a1a1a 100%)',
        'dark-gradient': 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)',
        'neon-gradient': 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)',
        'accent-gradient': 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, #00d4ff 0px, transparent 50%), radial-gradient(at 80% 0%, #8b5cf6 0px, transparent 50%), radial-gradient(at 0% 50%, #f472b6 0px, transparent 50%)',
        'shimmer': 'linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 0.5) 50%, transparent 60%)',
        'text-shimmer': 'linear-gradient(110deg, #00d4ff 45%, #ffffff 55%, #00d4ff 65%)',
        'aurora': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'cyber': 'linear-gradient(135deg, #3b82f6 0%, #6366f1 25%, #8b5cf6 50%, #f97316 75%, #10b981 100%)',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'neon': '0 0 5px rgba(0, 212, 255, 0.5), 0 0 10px rgba(0, 212, 255, 0.3), 0 0 15px rgba(0, 212, 255, 0.2)',
        'neon-strong': '0 0 10px rgba(0, 212, 255, 0.8), 0 0 20px rgba(0, 212, 255, 0.6), 0 0 30px rgba(0, 212, 255, 0.4)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-green': '0 0 20px rgba(34, 197, 94, 0.3)',
        'glow-pink': '0 0 20px rgba(244, 114, 182, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
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
