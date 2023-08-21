import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import windiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), windiCSS()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
