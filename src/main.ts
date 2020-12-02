import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './plugins/registerServiceWorker'
import './plugins/primevue'

// @ts-ignore
createApp(App).use(router).mount('#app')
