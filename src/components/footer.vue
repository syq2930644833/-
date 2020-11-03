<template>
    <div class="footer">
        <div>
            Copyright © 2020 - {{ date }} 壹朵小花吖
        </div>
        <div>
            京ICP备2020036183号
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            date:new Date().getFullYear()
        }
    },
}
</script>

<style lang="less" scoped>
.footer{
    height: 8vh;
    font-size: 18px;
    width: 100%;
    text-align: center;
    >div:first-child{
        margin-bottom: 26px;
    }
}
</style>

