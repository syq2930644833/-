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
      component: () => import(/* webpackChunkName: "Exhibition" */ '../views/HomePage')
    },
    {
      path: '/list',
      name: 'List',
      component: () => import(/* webpackChunkName: "List" */ '../views/List'),
      meta:{title:'列表',keepAlive:false}
    },
    {
      path: '/life',
      name: 'Life',
      component: () => import(/* webpackChunkName: "Life" */ '../views/Life'),
      meta:{title:'生活'}
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "About" */ '../views/About'),
      meta:{title:'关于我'}
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import(/* webpackChunkName: "Detail" */ '../views/Detail'),
      meta:{title:'生活'}
    },
  ]
})

export default router