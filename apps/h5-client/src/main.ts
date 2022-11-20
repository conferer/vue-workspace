import { createApp } from 'vue'

import App from './App.vue'
import 'uno.css'
import 'vant/lib/popup/index.less'
import 'vant/lib/notify/index.less'

const app = createApp(App)
const modules = import.meta.globEager('./modules/*.ts')

// install modules under folder 'modules/'
Object.values(modules).forEach((module) => {
  module?.install(app)
})

app.mount('#app')
