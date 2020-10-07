import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/homepage'
        }, {
            path: '/homepage',
            component: () =>
                import ('../views/Homepage/homepage.vue')
        },
        {
            path: '/classify',
            component: () =>
                import ('../views/Classify/classify.vue')
        },
        {
            path: '/cart',
            component: () =>
                import ('../views/Cart/cart.vue')
        },
        {
            path: '/mine',
            component: () =>
                import ('../views/Mine/mine.vue')
        },
    ]
})
export default router