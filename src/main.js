import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
import router from './routes'
import Bus from './plugins/Bus'

import Bird from './components/Bird'

Vue.use(Router)
Vue.use(Bus)

Vue.component('Bird', Bird)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
