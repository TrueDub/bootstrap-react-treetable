/// <reference types="vite/client" />
import {resolve} from 'node:path'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.js'),
            name: 'BootstrapTreeTable',
            fileName: 'BootstrapTreeTable',
            // formats: ['es'],
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'bootstrap'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'React-dom',
                    'bootstrap': 'Bootstrap',
                },
            },
        },
    },
})