<template>
    <div class="head">
        <div class="menuBox">
            <div v-for="(item,index) in navData" :key="item.id" @click="checkNav(index)" :class="checkedIndex == index ? 'activedNav' : '' ">
                {{item.title}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checkedIndex:0,
            navData:[
                {
                    id:0,
                    title:'首页'
                },
                {
                    id:1,
                    title:'随笔' 
                },
                {
                    id:2,
                    title:'生活'
                }
            ]
        }
    },
    methods: {
        checkNav(index){
            this.checkedIndex = index
        }
    },
}
</script>

<style lang="less" scoped>
.head{
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    background-color: #fff;
    z-index: 10;
    font-size: 40px;
    border: 700;
    font-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif;
    display: flex;
    justify-content: center;
    .menuBox{
        display: flex;
        justify-content: space-around;
        align-items: center;
        >div{
            width: 120px;
            cursor: pointer;
        }
        .activedNav{
            color: rgb(80, 23, 235);
        }
    }
}
</style>

