import { createApp } from 'vue'
import App from './app.vue'
import router from './router'

/*const app = createApp({})
app.config.productionTip=false;*/

// createApp(App).mount('#app')
createApp(App).use(router).mount('#app')






