import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            vue: '@vue/compat',
        }
    },
    server: {
        port: 8080,
        hot: true
    },
    scripts: {
        build: "vite build",
        preview: "vite preview"
    }
})