import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/General-Championship-IITGN/',  // Use relative paths
  plugins: [react()],
});
