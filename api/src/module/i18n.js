const messages = Object.fromEntries(
  Object.entries(import.meta.globEager('../../locales/*.y(a)?ml')).map(([key, value]) => {
    const yaml = key.endsWith('.yaml')
    console.log(5, yaml)
    return [key.slice(14, yaml ? -5 : -4), value.default]
  })
)
export default messages
