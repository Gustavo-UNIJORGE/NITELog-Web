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
      '@':  path.resolve(__dirname, 'src/'),
      '@modules':  path.resolve(__dirname,  'src/modules/'),
      '@component': path.resolve(__dirname, 'src/components'),
      '@public': path.resolve(__dirname, 'public')
    }
  }
})
