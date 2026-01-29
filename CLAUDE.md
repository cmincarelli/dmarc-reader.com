# DMARC Reader Website

## Project Overview

This is the marketing/product showcase website for **DMARC Reader** - a privacy-first desktop application for analyzing DMARC email security reports. The website is built with Astro JS and deployed as a static site to GitHub Pages.

**Main Repository:** https://github.com/cmincarelli/dmarc-reader
**Website Domain:** dmarc-reader.com

## Tech Stack

- **Framework:** Astro 4.x (Static Site Generation)
- **Styling:** TailwindCSS 3.x
- **Icons:** Lucide (tree-shakeable)
- **Deployment:** GitHub Pages
- **Node Version:** 18+
- **Package Manager:** pnpm

## Design Guidelines

### Visual Identity

- **Color Scheme:** Match the desktop app's blue theme (#1d4ed8)
- **Style:** Clean, modern, professional
- **Dark Mode:** Support both light and dark themes
- **Typography:** System font stack (Inter fallback) for native macOS feel

### Key Principles

1. **Visual Consistency:** Mirror the desktop app's aesthetic
2. **Performance First:** Minimize JavaScript, optimize images, fast load times
3. **Subtle Polish:** Scroll animations, smooth transitions, hover effects
4. **Clear CTAs:** Prominent download buttons and GitHub links
5. **Privacy Focus:** Emphasize local-first, no cloud data collection

## Site Structure

Single-page layout with sections:
1. **Hero** - Main headline, CTA buttons, app icon
2. **Features Grid** - 6 key features with icons
3. **Screenshots Gallery** - Tabbed/carousel view of app screens
4. **Download Section** - macOS download + Windows/Linux coming soon
5. **Footer** - Links, legal, credits

See `docs/plans/2026-01-29-website-design.md` for complete design specification.

## Content Guidelines

### Tone & Voice
- Professional but approachable
- Technical accuracy without jargon
- Emphasize privacy and simplicity

### Key Messages
1. **Privacy-first** - All data stays local on your machine
2. **Fast & efficient** - Built with Electron and SQLite
3. **Beautiful UI** - Native dark mode, polished interface
4. **Smart detection** - Automatic issue detection and remediation guidance

## Available Resources

- **Screenshots:** Located in project root (5 screenshots from the app)
- **App Icon:** Available at `build/icons/512x512.png` in main repo
- **README:** Comprehensive documentation of features and capabilities
- **Download Link:** https://github.com/cmincarelli/dmarc-reader/releases/latest/download/DMARC-Reader-universal.dmg

## Development Commands

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Deployment

Site is deployed to GitHub Pages. Build output goes to `dist/` directory.

## Important Notes

- **macOS Version Available:** v0.1.0 is released and downloadable
- **Windows/Linux:** Coming soon (show as disabled/grayed in download section)
- **Open Source:** MIT licensed, emphasize this in footer and trust signals
- **Local-First:** Key selling point - no cloud services, no data sharing

## Code Style

- Use Astro components by default (zero JS where possible)
- TailwindCSS for all styling
- Semantic HTML with proper accessibility
- Respect `prefers-reduced-motion` for animations
- Mobile-first responsive design

## Assets

Screenshots to include:
1. Home/Dashboard view
2. Reports management view
3. Issues detection view
4. Settings panel
5. (Optional) Additional settings view

All screenshots available in project root directory.
