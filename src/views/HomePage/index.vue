<template>
    <div class="homePage">
        这里是主页
    </div>
</template>

<script>
import {fetchList} from '../../api/test/index'
export default {
    data() {
        return {
            
        }
    },
    mounted() {
        this.getdata()
    },
    methods: {
        getdata(){
            fetchList().then(res => {
                console.log(res);
            })
        }
    },
}
</script>

<style lang="less" scoped>
.homePage{
    min-height: 100vh;
}
</style>