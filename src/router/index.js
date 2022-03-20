import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header.vue'
import Body from '../components/Body.vue'
import error404 from '../components/error/404.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Body },
    { path: '/Header', component: Header },
    { path: '/Body', component: Body },
    { path: '/Product', component: () => import('@/views/Product'), },
    { path: '/Product/usrProdAdd', component: () => import('@/views/usrProdAdd'), },
    { path: '*', component: error404 }
  ]
})
