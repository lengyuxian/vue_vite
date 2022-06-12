import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 是否自动在浏览器打开
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
   /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: './',
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: 'dist',
  resolve: {
    alias: {
      '@': resolve(__dirname, '.', 'src'),
    },
  },
  hostname: '0.0.0.0',
  port: 8080,
  plugins: [vue()],
  server: {
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost.8000/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
