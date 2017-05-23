import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Template from '@/views/template'
import chooseTemplate from '@/views/choose_template'
import editInfo from '@/views/edit_info'
import preview from '@/views/preview'
import test from '@/views/test'
import tmp1 from '@/components/tmp1'

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
        {
            path: '/tmp1',
            name: 'tmp1',
            component: tmp1
        },
        {
            path: '/preview',
            name: 'preview',
            component: preview
        },
        {
            path: '/test',
            name: 'test',
            component: test
        },
    ]
})
