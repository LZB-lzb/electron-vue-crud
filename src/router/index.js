import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:() => import('../views/home/home.vue')
  },
  {
    path:'/shop',
    component: () => import('../views/shop/shop.vue')
  },
  {
    path:'/user',
    component:() => import('@/views/user/user.vue')
  },
  {
    path:'/addshop',
    component:() => import('@/views/other/addshop.vue')
  },
  {
    path:'/editshop',
    component:() => import('@/views/other/editshop.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
