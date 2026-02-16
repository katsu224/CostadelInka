// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node'; // Add this line
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  vite: {
    plugins: [tailwindcss()]
  },
});