<template>
    <div class="life">

    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        
    },
    created() {
        // this.$store.dispatch('home/headShowChange', false)
        this.$store.dispatch('home/footShowChange', false)
    },
    mounted() {
        window.scrollTo(0,0)
    },
    beforeDestroy(){
        this.$store.dispatch('home/footShowChange', true)
    },
    methods: {

    },

}
</script>
<style lang="less" scoped>
.life{
    height: 100vh;
    // padding: 3vh 5vw;
}
</style>

