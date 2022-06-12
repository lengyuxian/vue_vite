const routes = [
    {
        path: '/',
        redirect: '/home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/home',
        component: () => import('@/views/Home.vue')
    }
]
export default routes;