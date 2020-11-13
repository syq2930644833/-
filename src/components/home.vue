<template>
    <div class="homeMenu">
        <div class="menu">
            <div @click="$router.push({path:'/exhibition'})">
                <i class="el-icon-s-promotion"></i>
                <div>主页</div>
            </div>
            <div @click="$router.push({path:'/list'})">
                <i class="el-icon-notebook-2"></i>
                <div>列表</div>
            </div>
            <div @click="$router.push({path:'/life'})">
                <i class="el-icon-mobile-phone"></i>
                <div>生活</div>
            </div>
            <div @click="$router.push({path:'/about'})">
                <i class="el-icon-guide"></i>
                <div>关于我</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    mounted() {

    },
}
</script>

<style lang="less" scoped>
.homeMenu{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .menu{
        display: flex;
        flex-wrap: wrap;
    }
    .menu > div{
        display: flex;
        align-items: center;
        font-size: 26px;
        color: rgb(27, 16, 41);
        margin-right: 30px;
        cursor: pointer;
        i{
            margin-right: 10px;
            color: rgb(107, 145, 196);
        }
    }
}
</style>

