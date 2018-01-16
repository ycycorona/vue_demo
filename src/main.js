/*引入根组件*/
import Vue from 'vue'
/*移动端click优化组件*/
import FastClick from 'fastclick'

/*全局toast插件*/
import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

/*根组件*/
import App from './App'

/*引入路由配置*/
import router from './router'

/*引入Vuex配置*/
import store from './store'

FastClick.attach(document.body);

Vue.config.productionTip = false;

/*根组件挂载*/
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app-box');
