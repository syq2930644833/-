<template>
  <div id="app">
    <Head v-show="headShow" />
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
import Head from './components/head'
export default {
  name: 'App',
  components:{ Head },
  data() {
    return {
      viewWidth:0,
      viewHeight:0,
    }
  },
  computed: {
    headShow(){
        return this.$store.getters.headShow
    },
    footShow(){
        return this.$store.getters.footShow
    },
    clientWidth(){
        return this.$store.getters.clientWidth
    }
  },
  mounted() {
    this.viewWidth = document.body.clientWidth
    this.viewHeight = document.body.clientHeight
    window.onresize = () => {
        return (() => {
            this.viewWidth = document.body.clientWidth
        })()
    }
    // this.$on('hook:beforeDestroy',()=>{
    //     window.removeEventListener('scroll',this.handleScroll)
    // })
  },
  watch: {
    viewWidth(newVal){
      console.log('newVal: ', newVal);
      if(newVal <= 500){
          this.$store.dispatch('home/clientWidthChange', 3)
      }else if( newVal > 1000 ){
          this.$store.dispatch('home/clientWidthChange', 1)
      }else{
          this.$store.dispatch('home/clientWidthChange', 2)
      }
    }
  },
}
</script>

<style lang="stylus">
@import '//at.alicdn.com/t/font_1889850_ptl7c8952nk.css'
</style>

<style lang="less" scoped>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  background-color:#eef0f1;
  // opacity: 0.2;
}
</style>

