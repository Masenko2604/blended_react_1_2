import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/blended_react_1_2/',
  build: { sourcemap: true },
  resolve: {
    alias: {
      components: '/src/components',
      data: '/src/data',
      helpers: '/src/helpers',
      styles: '/src/styles',
      // pages: '/src/pages',
    },
  },
});
