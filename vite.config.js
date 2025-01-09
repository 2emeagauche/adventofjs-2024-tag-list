import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/adventofjs-2024-tag-list",
  plugins: [react()],
})
