# CLAUDE.md
This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js 14 single-page marketing application for SiamSquad, a professional digital solutions company in Bangkok, Thailand. The business provides comprehensive digital services including website development, mobile apps, digital marketing, and SEO services to Thai businesses seeking modern online presence.

### Site Architecture:
- **Single-page marketing site**: Optimized for lead generation with hero, process, services, portfolio, and contact sections
- **SEO-optimized**: Structured for search visibility and conversion optimization
- **Mobile-first design**: Primary focus on mobile users with responsive design across all devices
- **Marketing funnel design**: Hero → Process → Services → Stats → Portfolio → Quotation → Contact flow

### Business Context:
- **Location**: Professional digital agency in Bangkok, Thailand
- **Target Audience**: Thai business owners and entrepreneurs seeking digital solutions
- **Services**: Website development, mobile apps, custom software, digital marketing, SEO, system integration
- **Experience Focus**: Customer-friendly technical expertise that builds trust without intimidation

### Technical Features:
- **Modern stack**: Next.js 14 with TypeScript, React 18, and Tailwind CSS
- **Animation-rich**: Framer Motion for professional animations and micro-interactions
- **Form handling**: React Hook Form with validation for quotation requests
- **Performance optimized**: < 2s load times, 90+ Lighthouse scores
- **Customer-friendly content**: Technical credibility through visual design, approachable language for non-technical clients

## Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting (uses ESLint 8 with Next.js config)
npm run lint
```

## Architecture Overview

### Component-First Development
**CRITICAL REQUIREMENT**: All new components must follow the established pattern of customer-friendly content with technical visual credibility. Never create overly technical content that intimidates potential clients.

#### Implementation Rules:
- **Customer-friendly language**: Always prioritize business benefits over technical jargon
- **Visual technical elements**: Maintain professional animations, gradients, and modern design
- **Performance focus**: Emphasize results (speed, uptime, user satisfaction) over technical specifications
- **Mobile-first approach**: Design for mobile devices first, then scale up
- **Animation consistency**: Use Framer Motion for all animations with consistent timing and easing
- **Form validation**: Implement proper validation with helpful error messages
- **Responsive design**: Ensure all components work across all device sizes

#### Component Creation Workflow:
1. **Design for customer understanding**: Write content that non-technical business owners can understand
2. **Add visual technical elements**: Include animations, gradients, icons that show expertise
3. **Implement responsive design**: Test on mobile, tablet, and desktop
4. **Add proper animations**: Use Framer Motion with consistent patterns
5. **Test performance**: Ensure fast loading and smooth interactions

### Content Strategy Rules:
- **Business-focused headings**: "What We Can Do For You" not "Our Technical Expertise"
- **Benefit-driven descriptions**: Focus on outcomes, not processes
- **Approachable process explanations**: "Understanding Your Business Needs" not "Technical Requirements Analysis"
- **Customer-friendly metrics**: "Super Fast" not "< 2s load time"
- **Trust-building language**: Professional but warm and accessible tone

## File Structure
```
src/
├── app/
│   ├── globals.css        # Global styles with Tailwind imports
│   ├── layout.tsx         # Root layout with metadata and fonts
│   └── page.tsx           # Main page orchestrating all sections
├── components/
│   ├── Header.tsx         # Navigation with smooth scrolling
│   ├── HeroSection.tsx    # Hero with animated technical elements
│   ├── ProcessSection.tsx # 6-step customer-friendly process
│   ├── ServicesSection.tsx # 6 services with business benefits
│   ├── StatsSection.tsx   # Company achievements and metrics
│   ├── PortfolioSection.tsx # Project showcase
│   ├── QuotationSection.tsx # Contact form with validation
│   ├── ContactSection.tsx # Business contact information
│   ├── Footer.tsx         # Footer with links and info
│   └── LoadingOverlay.tsx # Professional loading animation
├── lib/                   # Utility functions (if any)
└── public/               # Static assets
```

## Styling Guidelines

### Tailwind CSS Configuration:
- **Design system**: Consistent color palette with primary blue (#3b82f6), secondary gray (#64748b)
- **Typography**: Inter for body text, custom font for headings
- **Responsive breakpoints**: Mobile-first approach with sm, md, lg, xl breakpoints
- **Animation classes**: Custom Tailwind animations for consistent motion
- **Component patterns**: Reusable card styles, button variants, gradient backgrounds

### Animation Standards:
- **Framer Motion**: Primary animation library for complex interactions
- **Entrance animations**: Fade in with slide up (opacity: 0, y: 50 → opacity: 1, y: 0)
- **Hover effects**: Scale (1.05), color transitions, shadow changes
- **Scroll animations**: useInView hook for viewport-triggered animations
- **Loading states**: Smooth transitions with proper loading indicators

### Color Psychology:
- **Primary Blue (#3b82f6)**: Trust, professionalism, reliability
- **Secondary Gray (#64748b)**: Modern, clean, sophisticated
- **Success Green**: Positive actions, completed states
- **Gradient backgrounds**: Professional depth and visual interest

## Key Patterns

### Component Structure:
```typescript
// Standard component pattern
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ComponentName() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Component content */}
        </motion.div>
      </div>
    </section>
  )
}
```

### Animation Patterns:
```typescript
// Entrance animation
initial={{ opacity: 0, y: 50 }}
animate={isInView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.6, delay: index * 0.1 }}

// Hover animation
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}

// Continuous animation
animate={{
  y: [0, -15, 0],
  opacity: [0.7, 1, 0.7],
}}
transition={{ duration: 4, repeat: Infinity }}
```

### Form Handling:
```typescript
// React Hook Form pattern
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  // ... other fields
}

const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

const onSubmit = (data: FormData) => {
  // Handle form submission
}
```

## Content Guidelines

### Customer-Friendly Language Rules:
- **Avoid technical jargon**: "Beautiful websites" not "Enterprise-grade applications"
- **Focus on benefits**: "Help your business grow" not "Scalable architecture"
- **Use simple terms**: "Fast loading" not "Optimized performance metrics"
- **Emphasize outcomes**: "More customers" not "Conversion optimization"
- **Build trust**: "Always supported" not "SLA guarantees"

### Section Content Strategy:
- **Hero Section**: Professional tagline with animated technical graphics
- **Process Section**: Simple 6-step explanation of how you work with clients
- **Services Section**: Business benefits with approachable descriptions
- **Stats Section**: Achievement metrics that build credibility
- **Portfolio Section**: Project examples that demonstrate capability
- **Contact Section**: Multiple ways to get in touch with clear calls-to-action

## Adding New Features

### New Component:
1. Create in `src/components/` directory
2. Follow established animation patterns with Framer Motion
3. Use customer-friendly language and business-focused content
4. Implement responsive design with Tailwind CSS
5. Add proper TypeScript interfaces
6. Test across all device sizes
7. Ensure accessibility compliance

### New Section:
1. Add to main page component (`src/app/page.tsx`)
2. Create section component with consistent styling
3. Implement scroll-triggered animations
4. Add navigation link in Header component
5. Update any relevant documentation

### Content Updates:
1. Maintain customer-friendly tone
2. Focus on business benefits over technical details
3. Keep visual technical elements for credibility
4. Test readability with non-technical users
5. Ensure mobile-friendly text sizing and spacing

## Performance Requirements

### Core Web Vitals:
- **LCP (Largest Contentful Paint)**: < 2.5 seconds
- **FID (First Input Delay)**: < 100 milliseconds
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Lighthouse Score**: 90+ across all categories

### Optimization Strategies:
- **Image optimization**: Next.js Image component with proper sizing
- **Code splitting**: Automatic with Next.js App Router
- **Animation performance**: Use transform and opacity for smooth 60fps
- **Bundle analysis**: Regular checks for unnecessary dependencies
- **Caching strategies**: Proper cache headers and static generation

## TypeScript Configuration
- **Strict mode**: Enabled with proper type checking
- **Path aliases**: `@/*` maps to `./src/*`
- **Component props**: Always define proper interfaces
- **Form types**: Strict typing for form data and validation
- **Animation types**: Proper typing for Framer Motion variants

## Troubleshooting Common Issues

### Animation Performance:
- Use `transform` and `opacity` properties for smooth animations
- Avoid animating `width`, `height`, or layout properties
- Use `will-change` CSS property sparingly
- Test on lower-end devices for performance validation

### Responsive Design Issues:
- Test on actual devices, not just browser dev tools
- Check text readability on small screens
- Ensure touch targets are minimum 44px
- Verify horizontal scrolling doesn't occur

### Form Validation Problems:
- Provide clear, helpful error messages
- Validate on both client and server side
- Show loading states during submission
- Handle network errors gracefully

### Content Strategy Issues:
- If content feels too technical, simplify language
- If lacking credibility, add more visual technical elements
- Balance approachability with professional competence
- Test with actual target audience (business owners)

## SEO and Marketing Optimization

### Meta Tags:
- Descriptive titles focusing on business benefits
- Meta descriptions emphasizing customer value
- Open Graph tags for social sharing
- Structured data for better search visibility

### Content Strategy:
- Focus on local SEO for Bangkok/Thailand market
- Use business-friendly keywords
- Emphasize customer success and satisfaction
- Include clear calls-to-action throughout

### Conversion Optimization:
- Multiple contact methods and forms
- Clear value propositions in each section
- Trust signals (testimonials, process transparency)
- Mobile-optimized contact forms and buttons

## Deployment and Maintenance

### Production Checklist:
- Performance audit with Lighthouse
- Cross-browser testing (Chrome, Safari, Firefox, Edge)
- Mobile device testing on actual devices
- Form submission testing
- Contact information accuracy
- Analytics and tracking implementation

### Regular Maintenance:
- Dependency updates (monthly)
- Performance monitoring
- Content freshness (portfolio updates)
- Contact form functionality testing
- SEO performance tracking

---

**© 2024 SiamSquad - Professional Digital Solutions**  
**Built with customer-friendly expertise and technical excellence**
