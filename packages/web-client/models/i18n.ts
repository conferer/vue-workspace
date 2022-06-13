import {createI18n} from "vue-i18n";

const messages = Object.fromEntries(
    Object.entries(import.meta.globEager('/src/locales/*.y(a)?ml'))
        .map(([key, value]) => {
            const yaml = key.endsWith('.yaml')
            return [key.slice(14, yaml ? -5 : -4), value.default]
        })
)

export const install = (app: any) => {
    const i18n = createI18n({
        locale: 'en',
        messages,
    })
    app.use(i18n)
}
