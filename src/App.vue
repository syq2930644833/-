<template>
  <div id="app">
    <Head v-show="headShow" />
    <router-view/>
    <Foot v-if="footShow" class="foot"/>
  </div>
</template>

<script>
import Head from './components/head'
import Foot from './components/footer'
export default {
  name: 'App',
  components:{ Head, Foot },
  data() {
    return {
      
    }
  },
  computed: {
    headShow(){
        return this.$store.getters.headShow
    },
    footShow(){
        return this.$store.getters.footShow
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
  .foot{
    position: absolute;
    bottom: 0;
  }
}
</style>

