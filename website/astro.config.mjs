// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cmincarelli.github.io',
  base: '/dmarc-reader.com',
  vite: {
    plugins: [tailwindcss()]
  }
});