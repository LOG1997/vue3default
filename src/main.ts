/*
 * @Author: LOG
 * @FilePath: \vue3default\src\main.ts
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-02 09:10:02
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-09 15:37:51
 */
import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import "./assets/css/reset.css"
// element-plus
import 'element-plus/dist/index.css'
import router from "./router/index";
import store from "./store/index";
createApp(App).use(router).use(store).mount('#app')
