import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import "./assets/css/reset.css"
// element-plus
import 'element-plus/dist/index.css'
import router from "./router/index";
createApp(App).use(router).mount('#app')
