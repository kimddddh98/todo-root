import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: '../todo-backend/public'
  },
  resolve:{
    alias:[
      { find: '@src', replacement: resolve(__dirname, 'src') },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src/components'),
      },
    ]
  },
  plugins: [react(),tsconfigPaths()],
  server: {
    proxy: {
      '/api': {  //#1. axios라이브러리 등으로 http 요청인데 api로 시작하면,
        target: 'http://localhost:3030',  //#2. 이쪽 주소로 매핑하여 백그라운드로 보내라.
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        ws: true
      }
    }
  }  
})
