import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../components/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    children: [{
      path: '/shop',
      name: 'shop',
      component: () => import('../components/shop/shop.vue')
    }, {
      path: '/evaluation',
      name: 'evaluation',
      component: () => import('../components/evaluation/evaluation.vue')
    }, {
      path: '/merchants',
      name: 'merchants',
      component: () => import('../components/merchants/merchants.vue')

    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
