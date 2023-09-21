export const routes = [
    {
        path: '/login',
        component: () => import("@/views/login/index.vue"),
        name: 'login'
    },
    {
        path: '/',
        component: () => import("@/layout/index.vue"),
        name: 'home',
        children:[
            {
                path: '/home/desktop',
                component: () => import("@/views/home/desktop/index.vue"),
                name: 'desktop'
            },
            {
                path: '/user/list',
                component: () => import("@/views/user/list/index.vue"),
                name: 'userList'
            },
            {
                path: '/role/list',
                component: () => import("@/views/role/list/index.vue"),
                name: 'roleList'
            },
            {
                path: '/screen/list',
                component: () => import("@/views/screen/list/index.vue"),
                name: 'screenList'
            },
        ]
    },
    {
        path: '/404',
        component: () => import("@/views/404/index.vue"),
        name: '404'
    },
    {
        path:'/:pathMatch(.*)*',
        redirect:'/404'
    }
]