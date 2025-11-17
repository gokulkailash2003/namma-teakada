import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures the app is served correctly on Vercel
  server: {
    port: 3000,
    strictPort: false,
    open: true
  },
  preview: {
    port: 3000,
    strictPort: false,
    open: true
  }
})
