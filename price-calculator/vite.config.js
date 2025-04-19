import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/index.jsx'),
      output: {
        entryFileNames: 'assets/index.js',
        assetFileNames: 'assets/index.css',
      },
    },
  },
});
