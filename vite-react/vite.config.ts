import { defineConfig, loadEnv  } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import {resolve} from 'path'
import { env } from 'process'

// console.log(process.cwd())
// console.log(loadEnv('sa',process.cwd()))
export default defineConfig({
  // process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  
  build: {
    outDir: '../todo-backend/public',
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
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3030',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //       secure: false,
  //       ws: true
  //     }
  //   }
  // }  
})

