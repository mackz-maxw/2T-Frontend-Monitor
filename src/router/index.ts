import { createRouter, createWebHistory } from 'vue-router'
import JsView from '../views/test/js.vue'
import NetworkView from '../views/test/network.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/test/js',
            name: 'JsView',
            component: JsView
        }, {
            path: '/test/network',
            name: 'NetworkView',
            component: NetworkView
        }, 
        {
            path: '/',
            //redirect 是重新定向
            redirect: '/test/network'
        },
    ]
})

export default router