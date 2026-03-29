import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  // Use root paths for local dev, project subpath for production deploy.
  base: command === 'serve' ? '/' : '/General-Championship-IITGN/',
  plugins: [react()],
}));
