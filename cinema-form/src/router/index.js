import Vue from 'vue'
import Router from 'vue-router'

import mainScreen from '@/views/main-screen'
import page404 from '@/views/page404'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            name: 'page404',
            component: page404
        },
        {
            path: '/',
            name: 'mainScreen',
            component: mainScreen
        },
    ],
    scrollBehavior: function (to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
})