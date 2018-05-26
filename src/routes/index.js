import Router from 'vue-router'

import Init from '../views/Init.vue'

const routes = [
  {
    path: '/',
    name: 'init',
    component: Init
  }
]

const router = new Router({
  mode: 'hash',
  scrollBehavier: () => ({ y: 0 }),
  routes
})

export default router
