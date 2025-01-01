import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: {
      usePolling: true,      // 在 Docker 中需要启用轮询
    },
    strictPort: true,
  },
  plugins: [react()],
})
