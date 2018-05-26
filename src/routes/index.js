import Router from 'vue-router'

import Init from '../views/Init'
import Ready from '../views/Ready'

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
  }
]

const router = new Router({
  mode: 'hash',
  scrollBehavier: () => ({ y: 0 }),
  routes
})

export default router
