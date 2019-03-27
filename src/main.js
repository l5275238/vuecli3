import Vue from 'vue'
import App from './App.vue'
import {router} from './router/index'
import store from './store/index'
import '@/style/reset.less'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  '@/icons/index'
import '@/styles/index.scss'
import components from './components'
import {lang} from '@/utils/lodash'
import '@/permission'

Vue.use(ElementUI)

Vue.use(components)
Vue.config.productionTip = false
Vue.prototype.$cloneDeep=lang.cloneDeep
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
