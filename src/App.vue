<template>
  <div id="app">
    <Head v-show="headShow" />
    <router-view/>
  </div>
</template>

<script>
import Head from './components/head'
export default {
  name: 'App',
  components:{ Head },
  data() {
    return {
      
    }
  },
  computed: {
    headShow(){
        return this.$store.getters.headShow
    }
  },
}
</script>

<style lang="stylus">
@import '//at.alicdn.com/t/font_1889850_ptl7c8952nk.css'
</style>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  /* opacity: 0.9; */
}
</style>
