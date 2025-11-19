import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@skybox-logo.png': fileURLToPath(new URL('./src/img/skybox-logo.png', import.meta.url)),
      '@head_1.png': fileURLToPath(new URL('./public/imgs/head_1.png', import.meta.url)),
      '@head_2.png': fileURLToPath(new URL('./public/imgs/head_2.png', import.meta.url)),
      '@head_3.png': fileURLToPath(new URL('./public/imgs/head_3.png', import.meta.url)),
      '@head_4.png': fileURLToPath(new URL('./public/imgs/head_4.png', import.meta.url)),
      '@head_5.png': fileURLToPath(new URL('./public/imgs/head_5.png', import.meta.url))
    }
  },
  server: {
    port: 3000,
    open: true
  }
})

