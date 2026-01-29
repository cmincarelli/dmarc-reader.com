# DMARC Reader Website

Product showcase website for [DMARC Reader](https://github.com/cmincarelli/dmarc-reader) - a privacy-first desktop application for analyzing DMARC email security reports.

## Tech Stack

- **Framework**: Astro 5.x (Static Site Generation)
- **Styling**: TailwindCSS 4.x
- **Icons**: Lucide
- **Fonts**: Manrope (headings), JetBrains Mono (technical elements)
- **Deployment**: GitHub Pages

## Development

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

## Design

The site features a "Technical Elegance" aesthetic:
- Deep navy foundations with electric blue accents (#1d4ed8)
- Custom typography pairing (Manrope + JetBrains Mono)
- Geometric grid pattern background
- Orchestrated page-load animations
- Asymmetric layouts with generous whitespace

See `docs/plans/2026-01-29-website-design.md` for complete design specification.

## Sections

1. **Hero** - Headline, CTAs, app icon with animated entry
2. **Features** - 3x2 grid showcasing key capabilities
3. **Screenshots** - Tabbed gallery of app interface
4. **Download** - macOS download + Windows/Linux coming soon
5. **Footer** - Links, resources, legal

## Deployment

The site is statically generated and deployed to GitHub Pages:

```bash
pnpm build
# Upload dist/ to GitHub Pages
```

## License

MIT - See parent repository for details.
