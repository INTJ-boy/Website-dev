import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [sveltekit()],
  base: '/Website-dev/',  // GitHub Pages base path
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});