# dmarc-reader.com

Official website for [DMARC Reader](https://github.com/cmincarelli/dmarc-reader) - a privacy-first desktop application for analyzing DMARC reports.

## Project Structure

```
dmarc-reader.com/
├── website/          # Astro website source
│   ├── src/         # Pages, layouts, components
│   ├── public/      # Static assets (screenshots, images)
│   └── dist/        # Build output (generated)
├── docs/            # Design docs and planning
└── CLAUDE.md        # Project context for Claude
```

## Quick Start

```bash
cd website
pnpm install
pnpm dev
```

Visit http://localhost:4321

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

Manual deployment:
```bash
cd website
pnpm build
# dist/ folder ready for deployment
```

## Tech Stack

- **Framework**: Astro 5.x
- **Styling**: TailwindCSS 4.x
- **Hosting**: GitHub Pages
- **Domain**: dmarc-reader.com

## License

MIT - See main [DMARC Reader repository](https://github.com/cmincarelli/dmarc-reader) for details.
