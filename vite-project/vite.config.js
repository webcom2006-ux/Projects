import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    //host: 'myapp.local',   // custom domain
    port: 3000,            // your desired port
    open: true             // auto open browser
  }
})