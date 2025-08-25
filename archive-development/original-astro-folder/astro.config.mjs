import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fltreeshop.com',
  output: 'static',
  build: {
    assets: 'assets'
  },
  compressHTML: true,
  vite: {
    build: {
      cssCodeSplit: false
    }
  }
});