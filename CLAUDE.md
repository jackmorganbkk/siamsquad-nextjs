# SiamSquad Next.js Website - Development Guidelines

## Project Overview

SiamSquad is a modern, multilingual digital solutions website built with Next.js 15, featuring internationalization support for 7 languages and a modern, Framer-inspired design system.

## Technical Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Internationalization**: next-intl with static generation
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Fonts**: Inter (body), Poppins (headings)
- **Deployment**: Static export ready

## Internationalization Configuration

### Supported Locales
- `ja` (Japanese) - Default locale
- `en` (English)
- `th` (Thai)
- `id` (Indonesian)
- `vi` (Vietnamese)
- `ms` (Malaysian)
- `tl` (Filipino)

### Key Configuration Files
- `src/i18n/routing.ts` - Routing configuration
- `middleware.ts` - Locale handling middleware
- `src/messages/` - Translation files for each locale

### Important Rules
1. **Always use locale prefix**: `localePrefix: 'always'` to prevent 404 errors
2. **Default locale**: Japanese (`ja`) as specified in requirements
3. **Static generation**: Uses `generateStaticParams()` for all locales
4. **Locale detection disabled**: For static export compatibility

## Design System

### Color Palette (Framer-inspired)
- **Primary**: Modern blue gradient (`#0c4a6e` to `#0ea5e9`)
- **Secondary**: Neutral grays (`#fafafa` to `#18181b`)
- **Accent**: Purple/magenta (`#d946ef` to `#701a75`)
- **Electric**: Teal accent (`#14b8a6` to `#134e4a`)
- **Sunset**: Orange accent (`#f97316` to `#7c2d12`)

### Typography
- **Body**: Inter font family
- **Headings**: Poppins font family
- **Responsive scaling**: `text-lg md:text-xl lg:text-2xl`

### Modern Effects
- **Glass morphism**: `.glass-card` utility class
- **Backdrop blur**: Enhanced with saturation
- **Gradient backgrounds**: Multiple gradient options
- **Glow effects**: Electric and sunset glow utilities
- **Modern shadows**: Layered shadow system