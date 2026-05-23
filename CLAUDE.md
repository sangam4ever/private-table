# The Private Table by Sanjay - Project Documentation

## Project Overview
A luxury private chef website for Sanjay's bespoke culinary service. The site showcases Michelin-calibre private dining experiences with cinematic aesthetic, dark luxury styling, and premium interactivity.

## Tech Stack
- **Framework:** Next.js 15.3.9 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 with custom @theme tokens
- **Animation:** Framer Motion + GSAP ScrollTrigger + Lenis smooth scroll
- **Forms:** React Hook Form + Zod validation
- **Fonts:** Cormorant Garamond (serif) + Jost (sans-serif) via next/font

## Design System
- **Primary Background:** Matte Black #0A0A0A
- **Primary Text:** Ivory #F5F0E8
- **Accent Color:** Champagne Gold #C9A84C
- **Vibe:** Editorial, minimal, cinematic, Michelin-inspired, not corporate

## Sections Implemented
1. **Hero** - Fullscreen video background with parallax text and animated reveal
2. **About** - Two-column editorial layout with chef story and Ken Burns effect
3. **Experiences** - Three signature dining experiences with hover animations
4. **Process Timeline** - Four-step journey with GSAP-drawn line animation
5. **Gallery** - Masonry image grid with cinematic hover overlays
6. **Testimonials** - Auto-advancing carousel with manual controls
7. **Inquiry Form** - Full form validation and error handling
8. **Navigation** - Sticky navbar with scroll-triggered background transition
9. **Footer** - Minimal footer with contact and social links

## Component Architecture
- `/components/layout/` - Navbar, Footer
- `/components/sections/` - All major page sections
- `/components/ui/` - Reusable: VideoBackground, SectionHeader, GoldDivider, MagneticButton
- `/hooks/` - useScrollProgress, useReducedMotion
- `/lib/` - fonts.ts, lenis.tsx, gsap.ts, animations.ts (shared Framer Motion variants)
- `/data/` - experiences.ts, testimonials.ts, process.ts (modular content)

## Key Features
✓ Lenis smooth scroll integration with GSAP ScrollTrigger sync
✓ Parallax text and image effects on scroll
✓ Auto-advancing testimonial carousel (6s interval)
✓ Form validation with real-time error feedback
✓ Mobile-responsive design with hamburger menu
✓ Video background with mobile poster fallback
✓ Magnetic button hover effects via GSAP
✓ SEO-complete (metadata, robots.txt, sitemap.xml, JSON-LD ready)
✓ Film grain texture overlay for luxury feel
✓ Responsive image optimization (AVIF/WebP)

## Running the Project
```bash
npm run dev      # Development server at localhost:3000
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint check
```

## Content Files to Customize
- `/src/data/experiences.ts` - Edit the 3 dining experiences
- `/src/data/testimonials.ts` - Add real client testimonials
- `/src/data/process.ts` - Customize the 4-step process
- `/src/components/layout/Footer.tsx` - Add real contact info

## Asset Management
- Logo & images in `/public/images/`
- Videos in `/public/videos/`
- Current assets are placeholders - replace with real media

## Production Checklist
- [ ] Update all content in `/src/data/`
- [ ] Replace media assets in `/public/`
- [ ] Add real contact email in Footer
- [ ] Setup form submission endpoint (Resend, SendGrid, etc.)
- [ ] Test on all devices and browsers
- [ ] Run Lighthouse audit
- [ ] Deploy to Vercel, Netlify, or self-hosted
- [ ] Setup analytics and monitoring
- [ ] Configure custom domain

## Critical Technical Notes
- **Lenis + GSAP Integration:** The sync between Lenis smooth scroll and GSAP ScrollTrigger is in `src/lib/lenis.tsx`. This prevents parallax animations from firing at wrong scroll positions.
- **Tailwind v4:** Uses CSS @theme tokens instead of tailwind.config.js. All design tokens are in `src/app/globals.css`.
- **No Custom Easing:** Framer Motion animations use default easing to avoid TypeScript type conflicts. Visual polish comes from duration and stagger.
- **Video Performance:** Hero video uses `preload=”metadata”` to avoid auto-loading 16MB files. Mobile gets poster image fallback instead of video.

## Browser Support
Modern browsers with ES2020+ support:
- Chrome/Edge 88+
- Firefox 78+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## Performance Metrics
- First Load JS: 252 kB (production build)
- Static prerendering: Yes (all content static)
- Image optimization: AVIF + WebP formats
- Font loading: Swap strategy (zero layout shift)

## Team Notes
- All animations are non-blocking and respect `prefers-reduced-motion`
- Form submission requires backend endpoint configuration
- Ready for one-click Vercel deployment
- Design system is maintainable via CSS variables in globals.css
