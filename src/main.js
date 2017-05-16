// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import html2canvas from 'html2canvas'
import html2canvas from 'libs/html2canvas'
import canvas2image from 'libs/canvas2image'
import domtoimage from 'dom-to-image'

// css
import normalize from 'normalize.css'
import fontAwesome from 'font-awesome-webpack'



Vue.use(normalize)
Vue.use(fontAwesome)

// vue setting
Vue.config.productionTip = false



// setTimeout(function(){
//     var node = document.getElementById('test')
//     domtoimage.toPng(node)
//         .then(function (dataUrl) {
//             var img = new Image()
//             img.src = dataUrl
//             document.body.appendChild(img)
//         })
//         .catch(function (error) {
//             console.error('oops, something went wrong!', error)
//         })
// }, 2000)

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
    // html2canvas(demo, {
    //     // width: 640,
    //     // height: 1080,
    //     onrendered: function(canvas) {
    //         // document.body.appendChild(canvas)
    //         let url = canvas.toDataURL('image/jpeg', 1.0)
    //         let $img = document.createElement('img')
    //         $img.setAttribute('src', url)
    //         $img.setAttribute('width', '100%')
    //         document.body.appendChild($img)
    //     }
    // })

    html2canvas(demo, opts).then(function (canvas) {
        // 如果想要生成图片 引入canvas2Image.js 下载地址：
        // https://github.com/hongru/canvas2image/blob/master/canvas2image.js
        // var img = Canvas2Image.convertToImage(canvas, canvas.width, canvas.height);
        // console.log(img);
        let $img = canvas2image.convertToImage(canvas, canvas.width, canvas.height)
        // let url = canvas.toDataURL('image/jpeg', 1.0)
        // let $img = document.createElement('img')
        // $img.setAttribute('src', url)
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
