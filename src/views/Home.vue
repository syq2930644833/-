<template>
    <div class="home">
        <div class="homeHead">
            <div class="mask"></div>
            <!-- <i class="iconfont icon-caidan" @click="clickMenu" v-show="Yoffset < 100" :class="className ? 'animate__hinge' : ''"></i> -->
            <img class="img" v-show="clientWidth == 1" :src="bgImg" alt="一张图">
            <img class="img" v-show="clientWidth == 2" :src="bgImg" alt="一张图">
            <img class="img" v-show="clientWidth == 3" :src="bgImg2" alt="一张图">
            <div class="information">
                <!-- <h1>蒿小茜,</h1> -->
                <h1>壹朵小花吖,</h1>
                <h2>淡淡生活，慢慢变老。</h2>
            </div>
            <div class="arrow" @click="clickArrow"></div>
        </div>
        <div class="body">
            <home-menu/>
            <Foot class="foot"/>
        </div>
    </div>
</template>

<script>
// const Jodit = require('jodit').Jodit
import { scrollTo } from '../utils/scroll-to'
import utils from '@/utils/utils'
import HomeMenu from '@/components/home.vue'
import Foot from '@/components/footer'
export default {
    components:{
        HomeMenu, Foot
    },
    data() {
        return {
            bgImg:require('@/assets/img/bg3.jpg'),
            bgImg1:require('@/assets/img/bg5.jpg'),
            bgImg2:require('@/assets/img/bg6.jpg'),
            viewWidth:0,
            viewHeight:0,
            className:false,
            Yoffset:0
        }
    },
    computed: {
        clientWidth(){
            return this.$store.getters.clientWidth
        }
    },
    created() {

    },
    mounted() {
        const body = document.getElementsByClassName('body')[0]
        this.viewWidth = document.body.clientWidth
        this.viewHeight = body.clientHeight
    },

    methods: {
        /**
         * 点击显示菜单
         */
        clickMenu(){
            this.className = true
            setTimeout(()=>{this.className = false,this.clickArrow()},2000)
        },
        /**
         * 监听滚动条高度
         */
        handleScroll(){
            // this.Yoffset = document.documentElement.scrollTop||document.body.scrollTop
            // if(this.Yoffset < 100){
            //     this.$store.dispatch('home/headShowChange', false)
            // }else{
            //     this.$store.dispatch('home/headShowChange', true)
            // }
        },
        /**
         * 点击箭头向上滑动
         */
        clickArrow(){
            scrollTo(this.viewHeight,1800)
        }
    }
}
</script>

<style lang="less" scoped>
.home{
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    .icon-caidan{
        font-size: 60px;
        position: absolute;
        top: 24px;
        right: 4%;
        color: white;
        cursor: pointer;
    }
    .mask{
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5)
    }
    .img{
        display: block;
        width: 100%;
        height: 100vh;
        z-index: -2;
    }
    h1,h2{
        padding: 0;
        margin: 0;
        font-family: 'Ubuntu', sans-serif;
    }
    .homeHead{
        position: relative;
        .information{
            cursor: pointer;
            position: absolute;
            width: 700px;
            height: 500px;
            top: calc(50% - 350px);
            left: calc(50% - 350px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            h1{
                margin-bottom: 50px;
                font-size: 80px;
            }
        }
        .arrow{
            cursor: pointer;
            width: 40px;
            height: 40px;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
            border-bottom: 8px solid rgb(255,255,255);
            border-right: 8px solid rgb(255,255,255);
            position: absolute;
            top: 86vh;
            left: calc(50% - 20px);
            -webkit-animation: opener 1s ease-in-out alternate infinite;
            animation: opener 1s ease-in-out alternate infinite;
            cursor: pointer;
            opacity: 0.3;
            -webkit-transition: opacity 1s ease-in-out, transform 1s ease-in-out 1s;
            transition: opacity 1s ease-in-out, transform 1s ease-in-out 1s;
        }
        .arrow:hover {
            -webkit-transition-delay: 0;
            transition-delay: 0;
            opacity: 1;
        }
        @-webkit-keyframes opener {
            100% {
                top: calc(90% - 20px);
            }
        }
        @keyframes opener {
            100% {
                top: calc(90% - 20px);
            }
        }
    }
    .body{
        height: 100vh;
        position: relative;
        .foot{
            position: absolute;
            bottom: 10px;
        }
    }
}
</style>



