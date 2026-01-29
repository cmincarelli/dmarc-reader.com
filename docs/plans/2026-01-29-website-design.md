# DMARC Reader Website Design

**Date:** 2026-01-29
**Type:** Product Showcase Website
**Tech Stack:** Astro JS (Static Generation)

## Overview

A single-page static website for DMARC Reader that mirrors the desktop app's clean, modern aesthetic. The site focuses on showcasing features, displaying screenshots, and providing download links for the macOS application.

## Design Principles

- **Visual Consistency:** Match the app's blue color scheme (#1d4ed8) and modern interface
- **Dark Mode Capable:** Support both light and dark themes
- **Performance First:** Static generation with minimal JavaScript
- **Subtle Polish:** Scroll-triggered animations, smooth transitions, hover effects
- **Clear CTAs:** Prominent download button and GitHub links

## Site Structure

Single-page layout with smooth scroll navigation:
1. Navigation Header (sticky)
2. Hero Section
3. Features Grid
4. Screenshots Gallery
5. Download Section
6. Footer

---

## Section Details

### 1. Navigation Header

**Layout:**
- Fixed/sticky top navigation with blur backdrop effect
- Left side: DMARC Reader logo + name
- Right side: Navigation links (Features, Screenshots, Download, GitHub)
- Theme toggle button (light/dark mode)
- Mobile: Hamburger menu with slide-in drawer

**Behavior:**
- Smooth scroll to sections on link click
- Show/hide on scroll (hide when scrolling down, show when scrolling up)
- Blur backdrop using CSS backdrop-filter

---

### 2. Hero Section

**Content:**
- **Headline:** "Analyze DMARC Reports with Confidence"
- **Subheadline:** "A powerful desktop app that makes email security simple. Privacy-first, fast, and beautifully designed."
- **Primary CTA:** "Download for macOS" (blue button)
- **Secondary CTA:** "View on GitHub" (outlined button)
- **Visual:** App icon (shield logo) displayed prominently

**Visual Design:**
- Full-height section (100vh)
- Gradient background: `from-slate-900 via-blue-950 to-slate-900`
- Centered content layout
- Optional: Blurred app screenshot in background
- Subtle fade-in animation on load

**Tone:** Professional but approachable, emphasizing privacy and ease of use.

---

### 3. Features Grid

**Layout:**
- Section title: "Why DMARC Reader?"
- 3×2 grid (6 features)
- Responsive: 3 cols desktop, 2 cols tablet, 1 col mobile

**Feature Cards:**

1. **Privacy First** (Lock icon)
   - "All data stays local on your machine. No cloud services, no data sharing, complete control."

2. **Lightning Fast** (Zap icon)
   - "Built with Electron and SQLite for instant report processing and analysis."

3. **Visual Insights** (BarChart3 icon)
   - "Interactive charts, geographic maps, and health scores at a glance."

4. **Beautiful Interface** (Moon icon)
   - "Native dark mode support with a polished, modern design."

5. **Smart Detection** (Search icon)
   - "Automatic issue detection with severity analysis and remediation guidance."

6. **Auto Import** (Cog icon)
   - "Watch folders and automatically import new reports as they arrive."

**Visual Design:**
- Each card: Icon + Title + Description
- Subtle hover effects (lift, border glow)
- Background: slate-900/slate-800
- Scroll-triggered fade-in animation
- Use Lucide icons to match the app

---

### 4. Screenshots Gallery

**Layout:**
- Section title: "See It In Action"
- Tabbed interface or carousel showing key app screens
- Large, centered screenshots with shadow/border
- Optional: macOS window chrome frame

**Screenshots (in order):**
1. **Home/Dashboard** - "Quick overview with health scores and recent reports"
2. **Reports View** - "Manage all imported DMARC reports in one place"
3. **Issues Detection** - "Automatic detection with severity levels"
4. **Settings** - "Configure auto-import and preferences"

**Interaction:**
- Tab navigation or arrow controls
- Fade transition between screenshots
- Optional: Click to enlarge in modal
- Lazy loading for performance

**Visual Design:**
- Gradient background (similar to hero)
- Realistic screenshot sizing
- Subtle parallax effect (optional)

---

### 5. Download Section

**Content:**
- Section title: "Download DMARC Reader"
- Version badge: "v0.1.0"

**macOS Download (Primary):**
- Large blue button: "Download for macOS"
- Subtext: "Universal Binary (Apple Silicon & Intel)"
- System requirements: "macOS 10.15 (Catalina) or later"
- Direct download link: `https://github.com/cmincarelli/dmarc-reader/releases/latest/download/DMARC-Reader-universal.dmg`

**Coming Soon Platforms:**
- Windows - Grayed card with "Coming Soon" label
- Linux - Grayed card with "Coming Soon" label
- Reduced opacity, "Notify me" links to GitHub releases

**Additional CTAs:**
- "View Source on GitHub" (secondary button)
- "Read the Docs" link
- "Star on GitHub" button with counter

**Visual Design:**
- Dark background (slate-950) for contrast
- Centered layout
- Trust signals: MIT license badge, GitHub stars, "Open Source" label

---

### 6. Footer

**Three-Column Layout:**

**Product**
- Download
- GitHub
- Documentation
- Releases

**Resources**
- README
- Contributing
- Report Issues
- Roadmap

**Legal**
- MIT License
- Privacy (local-only)
- Security

**Bottom Bar:**
- "Made with ❤️ by Chris M"
- GitHub profile link
- "Built with Astro"

**Visual Design:**
- Darkest section (slate-950/black)
- Subtle top border
- Responsive: Stack columns on mobile

---

## Color Palette

**Primary Colors:**
- Blue: `#1d4ed8` (blue-700)
- Navy: `#1e293b` (slate-800)
- Dark: `#0f172a` (slate-900)
- Darker: `#020617` (slate-950)

**Accents:**
- Success: `#10b981` (green-500) for "Excellent" badges
- Warning: `#f59e0b` (amber-500) for "Coming Soon"
- Text: `#f1f5f9` (slate-100) on dark backgrounds

**Gradients:**
- Hero: `from-slate-900 via-blue-950 to-slate-900`
- Screenshots: Similar gradient for visual continuity

---

## Typography

- **Headings:** Inter or System Font Stack (to match macOS native feel)
- **Body:** Inter or System Font Stack
- **Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

**Hierarchy:**
- H1 (Hero): 3.5rem / 56px
- H2 (Section Titles): 2.5rem / 40px
- H3 (Feature Titles): 1.5rem / 24px
- Body: 1rem / 16px
- Small: 0.875rem / 14px

---

## Animations & Interactions

**Scroll Animations:**
- Fade-in on scroll using Intersection Observer
- Slight slide-up effect (20px translate)
- Stagger timing for grid items

**Hover Effects:**
- Feature cards: Lift (4px) + subtle glow
- Buttons: Scale (1.02) + brightness increase
- Links: Color change + underline animation

**Transitions:**
- Duration: 200-300ms
- Easing: ease-out for entrances, ease-in-out for interactive elements

**View Transitions API:**
- Use Astro's View Transitions for smooth theme toggle
- Fade between light/dark modes

---

## Responsive Breakpoints

- **Mobile:** < 640px (1 column)
- **Tablet:** 640px - 1024px (2 columns)
- **Desktop:** > 1024px (3 columns)

**Mobile Considerations:**
- Hamburger menu for navigation
- Stack feature grid to single column
- Reduce hero font sizes (2.5rem for H1)
- Touch-friendly button sizes (min 44px height)

---

## Performance Targets

- **Lighthouse Score:** 95+ on all metrics
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Bundle Size:** < 100KB (gzipped)

**Optimization Strategies:**
- Static generation (no server-side rendering)
- Lazy load images below the fold
- Inline critical CSS
- Minimize JavaScript (Astro islands architecture)
- Optimize images (WebP format, responsive sizes)

---

## Technical Stack

**Framework:**
- Astro 4.x (Static Site Generation)

**Styling:**
- TailwindCSS 3.x
- CSS custom properties for theme switching

**Components:**
- Astro components (zero JS by default)
- Light JavaScript for interactions (theme toggle, scroll animations)

**Icons:**
- Lucide React (tree-shakeable)

**Deployment:**
- GitHub Pages (static hosting)
- Custom domain: dmarc-reader.com

---

## Accessibility

- **Semantic HTML:** Proper heading hierarchy, nav elements
- **ARIA Labels:** For icon buttons and interactive elements
- **Keyboard Navigation:** Full keyboard support for all interactions
- **Focus Indicators:** Visible focus rings on interactive elements
- **Color Contrast:** WCAG AA compliance (4.5:1 for text)
- **Reduced Motion:** Respect `prefers-reduced-motion` preference
- **Alt Text:** Descriptive alt text for all screenshots and images

---

## Content Strategy

**Tone & Voice:**
- Professional but approachable
- Technical accuracy without jargon
- Emphasize privacy and simplicity

**Key Messages:**
1. Privacy-first (data stays local)
2. Fast and efficient
3. Beautiful and easy to use
4. Open source and transparent

**SEO Keywords:**
- DMARC reader
- DMARC report analyzer
- Email authentication tool
- Desktop DMARC viewer
- Email security app

---

## Future Enhancements (Post-Launch)

- Blog/changelog section
- Video demo/walkthrough
- Testimonials or case studies
- Comparison table with alternatives
- Interactive feature demos
- Windows/Linux download pages when available
