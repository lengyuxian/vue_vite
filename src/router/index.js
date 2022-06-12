import { def } from "@vue/shared";
import { createRouter, createWebHistory } from "vue-router";
import routes from './routes';
// 开启历史模式
const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes
})
export default router