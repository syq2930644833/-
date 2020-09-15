<template>
    <div class="head">
        <div class="menuBox">
            <div>
                首页
            </div>
            <div>
                随笔
            </div>
            <div>
                生活
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
    }
}
</style>

