import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue({
        template: {
            compilerOptions: {
                isCustomElement: (tag) => ['swiper-slide', 'swiper-container'].includes(tag)
            }
        }
    })],
    server: {
        port: 8080,
        hot: true
    },
})