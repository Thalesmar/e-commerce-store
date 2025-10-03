import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/e-commerce-store/',   // GitHub Pages base path for repo
  plugins: [react(), tailwindcss()],
})
