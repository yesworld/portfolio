import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './plugins/registerServiceWorker'
import './plugins/primevue'

import '@/assets/global.css'

// Plugins
import VueDeferredContent from 'vue3-deferred-content'

// @ts-ignore
const app = createApp(App)

app.use(VueDeferredContent, {
  name: 'lazyContent',
})
app.use(router)

app.mount('#app')
