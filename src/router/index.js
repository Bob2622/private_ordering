import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Template from '@/views/template'
import chooseTemplate from '@/views/choose_template'
import editInfo from '@/views/edit_info'

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
        {
            path: '/chooseTemplate',
            name: 'chooseTemplate',
            component: chooseTemplate
        },
        {
            path: '/editInfo',
            name: 'editInfo',
            component: editInfo
        },
    ]
})
