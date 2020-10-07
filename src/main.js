import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import request from './utils/request'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Vant from 'vant';
import 'vant/lib/index.css';

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Vant);
Vue.use(ElementUI);
Vue.use(MintUI)

Vue.prototype.$http = request
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')