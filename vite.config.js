import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': '/assets',
      '@src': '/src',
      '@pages': '/src/pages',
      '@components': '/src/components',
    },
  },
})

