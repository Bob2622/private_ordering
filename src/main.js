// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import html2canvas from 'libs/html2canvas'
import canvas2image from 'libs/canvas2image'

// css
import normalize from 'normalize.css'
import fontAwesome from 'font-awesome-webpack'



Vue.use(normalize)
Vue.use(fontAwesome)

// vue setting
Vue.config.productionTip = false



setTimeout(function(){
    let demo = document.getElementById('test')
    let width = demo.offsetWidth
    let height = demo.offsetHeight
    let canvas = document.createElement('canvas')
    let scale = 6
    canvas.width = width * 6
    canvas.height = height * 6
    canvas.getContext('2d').scale(scale, scale)
    let opts = {
        scale: scale, // 添加的scale 参数
        canvas: canvas, //自定义 canvas
        logging: true, //日志开关
    }

    html2canvas(demo, opts).then(function (canvas) {
        let $img = canvas2image.convertToImage(canvas, canvas.width, canvas.height)
        $img.setAttribute('width', '100%')
        document.body.appendChild($img)
        
    })
}, 2000)


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
