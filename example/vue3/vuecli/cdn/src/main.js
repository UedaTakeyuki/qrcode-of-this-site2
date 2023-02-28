import { createApp } from 'vue'
import App from './App.vue'

const { createVuetify } = window.Vuetify
const vuetify = createVuetify()
const app = createApp(App)
app.use(vuetify).mount('#app')

//createApp(App).mount('#app')
