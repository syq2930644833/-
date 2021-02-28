<template>
    <div class="homePage">
        <div class="listBox" :class="{'pcBox': clientWidth == 1, 'mobileBox' : clientWidth != 1}">
            <div class="post" v-for="item in list" :key="item._id">
                <div class="title">
                    {{item.title}}
                </div>
                <div class="introduction">
                    {{item.introduction}}
                </div>
                <div class="Features">
                    <div class="FeaturesLeft">
                        <div>
                            <i class="el-icon-time"></i>{{item.date}}
                        </div>
                        <div>
                            <i class="el-icon-user"></i>{{item.author}}
                        </div>
                    </div>
                    <div class="FeaturesRight" @click="goDetail(item._id)">
                        查看详情
                    </div>
                </div>
            </div>
                <!-- 分页器 -->
            <pagination class="pagination" :hidden="listQuery.total > 0 ? false : true" :total="listQuery.total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getdata" />
        </div>
    </div>
</template>

<script>
import { fetchList } from "../../api/test/index";
import Pagination from "@/components/Pagination/index";
export default {
    components: { Pagination },
    data() {
        return {
            list:[],
            // 分页信息
            listQuery: {
                page: 1,
                limit: 10,
                total: 0
            },
        }
    },
    computed: {
        clientWidth(){
            return this.$store.getters.clientWidth
        }
    },
    mounted() {
        this.getdata();
        console.log(this.clientWidth);
    },
    methods: {
        getdata() {
            fetchList(this.listQuery).then(({code, data, message, total}) => {
                if(code == 2000){
                    data.forEach(item => { item.date = this.dayjs(item.date).format('YYYY-MM-DD HH:mm:ss') });
                    this.list = data
                    this.listQuery.total = total
                }else{
                    throw new Error(message)
                }
            });
        },
        goDetail(id){
            this.$router.push({path:'/detail',query:{id:id}})
        }
    },
    beforeRouteEnter (to, from, next) {
        if(from.path == '/detail'){
            to.meta.keepAlive = true
        }else{
            to.meta.keepAlive = false
        }
        next()
    },
    beforeRouteLeave (to, from, next) {
        if(to.path == '/detail'){
            from.meta.keepAlive = true
        }else{
            from.meta.keepAlive = false
        }
        next()
    }
}
</script>

<style lang="less" scoped>
.homePage{
    min-height: calc(100vh - 100px);
    // max-height: 100vh;
    display: flex;
    justify-content: center;
    // overflow: auto;
    padding: 50px 0 50px;
    position: relative;
    .pcBox{
        width: 1200px;
    }
    .mobileBox{
        width: 90vw;
    }
    .listBox{
        // width: 90vw;
        // min-width: 700px;
        .post{
            width: 100%;
            box-sizing: border-box;
            // min-height: 140px;
            border-radius: 10px;
            background: #fff;
            padding: 20px 40px;
            text-align: start;
            margin-bottom: 20px;
            .title{
                font-size: 26px;
                font-weight: bold;
            }
            .introduction{
                padding: 20px 0;
                font-size: 20px;
                // font-family: 'SimSun',
            }   
            .Features{
                width: 100%;
                height: 40px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .FeaturesLeft{
                    height: 100%;
                    display: flex;
                    align-content: center;
                    >div{
                        font-size: 20px;
                        font-weight: bold;
                        color: #444;
                        display: flex;
                        align-items: center;
                        margin-right: 20px;
                        i{
                            margin-right: 10px;
                        }
                    }
                }
                .FeaturesRight{
                    cursor: pointer;
                    font-size: 20px;
                    color: #444;
                }
            }
        }
        // .pagination {
        //     height: 60px;
        //     position: absolute;
        //     bottom: 30px;
        // }
    }
}
</style>


