import react from '@vitejs/plugin-react-swc'
import jsonImporter from 'node-sass-json-importer'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/colors.json";`,
        importer: jsonImporter()
      }
    }
  },
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  }
})
