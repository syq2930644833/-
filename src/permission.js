import router from './router'
import store from './store'
import { Message } from 'element-ui'
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style

// NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach((to, from, next) => {
    // start progress bar
    // NProgress.start()

    // set page title
    if (to.meta.title) {
        document.title = to.meta.title
    }

    if(to.path == '/'){
        this.$store.dispatch('home/headIndexChange', 0)
    }else if(to.path == '/life'){
        this.$store.dispatch('home/headIndexChange', 1)
    }

    next()
})

router.afterEach(() => {
    // finish progress bar
    // NProgress.done()
})