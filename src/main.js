import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fontAwesome from './plugins/fontawesome'

// [Main CSS]
import './style/main.css'

const app = createApp(App)

app.use(fontAwesome)
app.use(store)
app.use(router)

app.mount('#app')
