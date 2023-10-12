import { createApp } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './index.css'
import App from './App.vue'
import  Message  from './plugin/message'
import { createPinia } from 'pinia'
import i18n from './i18n'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

app.use(i18n)
app.use(pinia)
app.use(Message)
app.mount('#app')
