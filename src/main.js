import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import router from './routes'

Vue.use(Router)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
