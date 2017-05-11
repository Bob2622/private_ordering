// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import html2canvas from 'html2canvas'

// css
import normalize from 'normalize.css'
import fontAwesome from 'font-awesome-webpack'
Vue.use(normalize)
Vue.use(fontAwesome)

// vue setting
Vue.config.productionTip = false


setTimeout(function(){
    let demo = document.getElementById('test')
    html2canvas(demo, {
        onrendered: function(canvas) {
            // document.body.appendChild(canvas)
            let url = canvas.toDataURL('image/jpeg', 1.0)
            let $img = document.createElement('img')
            $img.setAttribute('src', url)
            $img.setAttribute('width', '100%')
            document.body.appendChild($img)
        }
    })
}, 2000)


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
