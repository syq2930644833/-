import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
    },
    {
      path: '/exhibition',
      name: 'Exhibition',
      component: () => import(/* webpackChunkName: "Home" */ '../views/HomePage')
    },
    {
      path: '/list',
      name: 'List',
      component: () => import(/* webpackChunkName: "Home" */ '../views/List')
    },
    {
      path: '/life',
      name: 'Life',
      component: () => import(/* webpackChunkName: "Home" */ '../views/Life'),
      meta:{title:'生活'}
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "Home" */ '../views/About'),
      meta:{title:'生活'}
    },
  ]
})

export default router