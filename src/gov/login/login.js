import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './login.vue'

Vue.config.productionTip = false;

Vue.use(ElementUI)
new Vue({
    render: h => h(App)
}).$mount('#app')
