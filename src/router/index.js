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
      path: '/life',
      name: 'Life',
      component: () => import(/* webpackChunkName: "Home" */ '../views/Life.vue'),
      meta:{title:'生活'}
    },
  ]
})

// router.beforeEach((to, from, next) => {
//   /* 路由发生变化修改页面title */
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }

//   if(to.path == '/'){
//     this.$store.dispatch('home/headIndexChange', 0)
//   }else if(to.path == '/life'){
//     this.$store.dispatch('home/headIndexChange', 1)
//   }
//   next()
// })

export default router
