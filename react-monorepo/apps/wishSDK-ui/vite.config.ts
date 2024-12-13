import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'), // The entry point for your library
      name: 'WishSDKUI', // Global variable name for UMD build
      fileName: (format) => `wish-sdk-ui.${format}.js`, // Output filenames
    },
    outDir: '../../dist/apps/wishSDK-ui', // Output directory
    emptyOutDir: true, // Clear output directory before each build
    rollupOptions: {
      external: ['react', 'react-dom'], // Do not bundle React or ReactDOM
      output: {
        globals: {
          react: 'React', // Global variable name for React in UMD build
          'react-dom': 'ReactDOM', // Global variable name for ReactDOM in UMD build
        },
      },
    },
  },
  plugins: [react()],
});
