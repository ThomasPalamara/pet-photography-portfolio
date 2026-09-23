import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { BRAND_NAME } from './src/config';

const htmlBrandName = (): Plugin => ({
  name: 'html-brand-name',
  transformIndexHtml: (html) => html.replace(/__BRAND_NAME__/g, BRAND_NAME),
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), htmlBrandName()],
  build: {
    outDir: 'dist',
  },
});
