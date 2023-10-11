import { createApp } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './index.css'
import App from './App.vue'
import  Message  from './plugin/message'
import { createPinia } from 'pinia'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

app.use(pinia)
app.use(Message)
app.mount('#app')
