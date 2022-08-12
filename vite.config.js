import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // string shorthand
      // '/api': 'http://localhost:8080',
      // with options
      '/api': {
        target: 'https://starlit-swan-172e45.netlify.app',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // Using the proxy instance
      // '/api': {
      //   target: 'http://localhost:8080',
      //   changeOrigin: true,
      //   configure: (proxy, options) => {
      //     // proxy will be an instance of 'http-proxy'
      //   }
      // },
    }
  }
});
