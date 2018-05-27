import Router from 'vue-router'

import Init from '../views/Init'
import Ready from '../views/Ready'
import Playing from '../views/Playing.vue'

const routes = [
  {
    path: '/',
    name: 'init',
    component: Init
  },
  {
    path: '/ready',
    name: 'ready',
    component: Ready
  },
  {
    path: '/playing',
    name: 'playing',
    component: Playing
  }
]

const router = new Router({
  mode: 'hash',
  scrollBehavier: () => ({ y: 0 }),
  routes
})

export default router
