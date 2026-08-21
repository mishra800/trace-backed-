import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Build optimizations
  build: {
    // Increase chunk size warning limit to 1000kb (we'll fix with code splitting)
    chunkSizeWarningLimit: 1000,
    
    // Enable rollup optimizations
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router-dom')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/swiper') || id.includes('node_modules/aos') || id.includes('node_modules/odometer')) {
            return 'ui-vendor';
          }
          // Admin pages in separate chunk
          if (id.includes('/pages/admin/')) {
            return 'admin';
          }
        },
      },
    },
    
    // Minification options (Vite 8 uses Oxc by default)
    minify: true,
  },
  
  // CSS configuration
  css: {
    lightningcss: {
      errorRecovery: true,
      drafts: {
        customMedia: true,
      }
    }
  },
  
  // Server configuration
  server: {
    port: 3000,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
      '/uploads': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  
  // Preview configuration
  preview: {
    port: 4173,
    open: true,
  },
})
