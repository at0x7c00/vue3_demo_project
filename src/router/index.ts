import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'

let router = createRouter({
    history: createWebHashHistory(),
    routes:routes,
    //滚动行为
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
    }
})

export default router