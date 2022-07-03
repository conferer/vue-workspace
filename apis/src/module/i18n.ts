const messages = Object.fromEntries(
  Object.entries(import.meta.globEager('../../locales/*.ts')).map(([key, value]) => {
    return [key.slice(14, -3), value.default]
  })
)
export default messages
