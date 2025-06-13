import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 8080,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@':  path.resolve(__dirname, 'src/modules'),
      '@root':  path.resolve(__dirname,  'src'),
      '@routes': path.resolve(__dirname, 'src/routes.ts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@component': path.resolve(__dirname, 'component'),
      '@public': path.resolve(__dirname, 'public'),
      '@styles': path.resolve(__dirname, 'src', 'assets/styles')
    }
  }
})
