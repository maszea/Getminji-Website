import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://www.getminji.app',
  plugins: [react()],
  build: {
    assetsDir: 'assets',
  },
})
