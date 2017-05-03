import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Template from '@/views/template'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/template',
            name: 'template',
            component: Template
        },
    ]
})
