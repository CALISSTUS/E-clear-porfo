# E-clear-porfo — GABRIEL TABLET Portfolio

A premium, futuristic full-stack developer portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP, and Swiper.js.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize Your Content

Edit these files to personalize the portfolio:

| File | What to edit |
|------|-------------|
| `src/data/content.ts` | Name, bio, email, social links, services, SEO |
| `src/data/projects.ts` | Project cards, tech stacks, links |
| `src/data/skills.ts` | Skills and proficiency levels |
| `public/images/` | Profile photo, project screenshots |
| `public/cv/` | Your resume PDF |

## Contact Form Email Setup

1. Get a free access key at [web3forms.com](https://web3forms.com) using `gabrielgabriel9727@gmail.com`
2. Create `.env.local` with `WEB3FORMS_ACCESS_KEY=your_key`
3. Add the same variable in Vercel project settings when deploying

## Tech Stack

- **Next.js 15+** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — page transitions, scroll reveals
- **GSAP** — skill bars, parallax
- **Swiper.js** — featured projects carousel

## Features

- Dark mode glassmorphism UI
- Custom cursor & mouse glow (desktop)
- Floating particle background
- Animated loading screen
- Sticky navbar with active section tracking
- Hero with autoplay coding video
- Typing effect animation
- Project category filters
- Contact form with Gmail delivery
- SEO optimized (metadata, sitemap, JSON-LD)
- Accessibility compliant (skip link, ARIA, focus states)
- Fully responsive

## Deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com) for optimal performance.

## Performance

- Lazy-loaded images
- Optimized fonts with `display: swap`
- Reduced motion support
- Compressed assets

Replace SVG placeholders in `public/images/` with your own WebP/AVIF images for best Lighthouse scores.
