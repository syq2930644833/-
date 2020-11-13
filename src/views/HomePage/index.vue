<template>
    <div class="homePage">
        这里是主页
    </div>
</template>

<script>
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
            this.axios.get(`/user`).then(res => {
                    const {data} = res
                    alert(data + '接口终于通了')
                }
            )
        }
    },
}
</script>

<style lang="less" scoped>
.homePage{
    min-height: 100vh;
}
</style>