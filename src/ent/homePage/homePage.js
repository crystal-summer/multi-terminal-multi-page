import Vue from 'vue'

// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './homePage.vue'

Vue.use(ElementUI)

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app')
