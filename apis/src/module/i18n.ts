const messages = Object.fromEntries(
  Object.entries(import.meta.glob('../../locales/*.ts', { eager: true })).map(([key, value]) => {
    return [key.slice(14, -3), value.default]
  })
)
export default messages
