import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'
// If you want to use ElMessage, import it.
import 'element-plus/es/components/message/style/css'

const app = createApp(App)
const modules = import.meta.globEager('./modules/*.ts')

// install modules under folder `modules/`
Object.values(modules).forEach((module) => {
  module.install?.(app)
})

app.mount('#app')
