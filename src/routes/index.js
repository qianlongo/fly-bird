import Router from 'vue-router'

import Test from '../views/test.vue'

const routes = [
  {
    path: '/test',
    name: 'test',
    component: Test
  }
]

const router = new Router({
  mode: 'hash',
  scrollBehavier: () => ({ y: 0 }),
  routes
})

export default router