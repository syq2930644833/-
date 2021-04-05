<template>
    <div class="homePage">
        这里是关于
    </div>
</template>

<script>
export default {
    data() {
        return {
            obj : {
                a: [1,2,3,4,5,6],
                1: [7,8,9],
                7: [10,11]
                // b: [12,14,15,13],
                // 12: [16,17],
                // 17: [18,19]
            },
            targetArr: []
            // arr : [a,1,7]

        }
    },
    mounted() {
        console.log(this.changeType(this.obj,'a'));
    },
    methods: {
        changeType(obj,k){
            if(this.getType(k) === 'string'){
                for (let key in obj){
                    if(key == k){
                        this.targetArr.push(key)
                        let temp = obj[key]
                        delete obj[key]
                        this.changeType(obj,temp)
                    }
                }
            }else{
                for (let key in obj){
                    //          数字类型                字符串类型
                    if(k.includes(Number(key)) || k.includes(key)){
                        this.targetArr.push(key)
                        this.targetArr = [...this.targetArr,...obj[key]]
                    }
                }
            }
            return this.targetArr
        },
        getType(obj){
            let type  = typeof obj;
            if (type !== "object") {    // 先进行typeof判断，如果是基础数据类型，直接返回
                return type;
            }
            // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
            return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');  // 注意正则中间有个空格
            }
        },
}
</script>

<style lang="less" scoped>
.homePage{
    min-height: 100vh;
}
</style>


