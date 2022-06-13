import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueI18n({
    //   // include: path.resolve(__dirname, './path/to/src/locales/**'),
    //   include: [path.resolve(__dirname, 'locales/**')],
    // }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '/src': fileURLToPath(new URL('./src', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
