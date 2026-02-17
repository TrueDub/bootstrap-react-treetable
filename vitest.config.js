import {defineConfig, mergeConfig} from 'vitest/config'
import react from '@vitejs/plugin-react'
import viteConfig from './vite.config.js'

export default mergeConfig(viteConfig, defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true, // Optional, for Jest compatibility
        //setupFiles: './src/setupTests.js', // For jest-dom matchers
    },
}));