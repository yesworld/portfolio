import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './plugins/registerServiceWorker'

// @ts-ignore
createApp(App)
  .use(router)
  .mount('#app')
