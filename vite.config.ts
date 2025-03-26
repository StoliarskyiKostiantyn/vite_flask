import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'app/static',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        base: path.resolve(__dirname, 'src/base.ts'),
        user: path.resolve(__dirname, 'src/user.ts'),
        reactApp: path.resolve(__dirname, 'src/react-app.tsx'),
      },
      output: {
        entryFileNames: 'js/[name].js',
      },
    },
  },
});
