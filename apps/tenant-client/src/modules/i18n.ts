import { createI18n } from 'vue-i18n'

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
const messages = Object.fromEntries(
  Object.entries(import.meta.globEager('../../locales/*.ts')).map(([key, value]) => {
    return [key.slice(14, -3), value.default]
  })
)

console.log(messages)
export const install = (app: any) => {
  const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('locale') || 'en',
    messages,
  })

  app.use(i18n)
}
