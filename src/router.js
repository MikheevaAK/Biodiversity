import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '@/pages/MainPage'
import PyasinoPage from '@/pages/PyasinoPage'
import ExpeditionPage from '@/pages/ExpeditionPage'


Vue.use(VueRouter)

const routes = [
    {
        name: 'main',
        component: MainPage,
        path: '/'
    },
    {
        name: 'pyasino',
        component: PyasinoPage,
        path: '/pyasino'
    },
    {
        name: 'expedition',
        component: ExpeditionPage,
        path: '/expedition'
    },
    {
        name: 'expedition',
        component: ExpeditionPage,
        path: '/expedition'
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

export default router