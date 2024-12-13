import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';

export default defineConfig({
  plugins: [react(), legacy()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'app/static',
    emptyOutDir: false, // Додаємо цю опцію, щоб не очищувати вихідну директорію
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/base.ts'),
        user: path.resolve(__dirname, 'src/user.ts'),
      },
      output: {
        entryFileNames: 'js/[name].js',
      },
    },
  },
});
