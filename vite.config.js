import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import analyze from "rollup-plugin-analyzer";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: '/src/components/build-entry.js',
      name: 'vuetify-nav',
      fileName: (format) => `vuetify-nav.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: 'Vue',
        },
        plugins: [analyze()],
      },
    },
  },
  plugins: [vue()],
})
