// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rahmanwolied.github.io',
  base: '/arma-group-landing-page',
  vite: {
    plugins: [tailwindcss()]
  }
});