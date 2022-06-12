import { createApp } from 'vue'
import App from './App.vue'
import  '../node_modules/@element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import router from './router/index'

createApp(App).use(router).use(ElementPlus).mount('#app')
