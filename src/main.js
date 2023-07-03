import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/index.scss'
import { Plugin } from 'vue-responsive-video-background-player'

const app = createApp(App)
app.use(Plugin)
app.mount('#app')
