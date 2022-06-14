import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import { presetIcons, presetWind } from 'unocss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueI18n({
    //   include: path.resolve(__dirname, 'locales/**'),
    // }),
    Unocss({
      presets: [presetWind(), presetIcons()],
    }),
    Components({
      dts: false,
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '/src': fileURLToPath(new URL('./src', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    https: false,
    port: 3010,
    proxy: {
      '/api': {
        target: 'http://localhost:8600',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/v2/api': {
        target: 'http://localhost:9000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/v2\/api/, ''),
      },
      '/v3/api': {
        target: 'http://localhost:8090',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/v3\/api/, ''),
      },
    },
  },
})
