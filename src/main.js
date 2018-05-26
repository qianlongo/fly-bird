import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
import router from './routes'
import Bus from './plugins/Bus'

Vue.use(Router)
Vue.use(Bus)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
