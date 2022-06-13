import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
const modules = import.meta.globEager('./modules/*.ts')

console.log(modules, Object.values(modules))
// install modules under folder `modules/`
Object.values(modules).forEach((module) => {
  console.log(9, module)
  module.install?.(app)
})

app.mount('#app')
