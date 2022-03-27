import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'

const app = createApp(App)
app.use(store).use(router).mount('#app')
// app.use(router).mount('#app')

// createApp(App).mount('#app')
