import Vue from 'vue'
import 'amfe-flexible'
import fastClick from 'fastclick'

import Vant from 'vant'
import 'vant/lib/index.css'
import App from './login.vue'
// 300ms延迟
fastClick.attach(document.body);
Vue.use(Vant);

Vue.config.productionTip = false
new Vue({
    render: h => h(App)
}).$mount('#app')
