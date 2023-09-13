import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import  Message  from './plugin/message/index'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(Message)
app.mount('#app')
