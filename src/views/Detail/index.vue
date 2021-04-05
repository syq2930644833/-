<template>
    <div class="detail" :class="{'mobileDetail':clientWidth != 1}">
            <div class="message" :class="{'mobileMsg':clientWidth != 1}">
                <h1>
                    {{articleDetail.title}}
                </h1>
                <div class="author">
                    <i class="el-icon-user"></i>{{articleDetail.author}}
                </div>
                <div class="introduction">
                    {{articleDetail.introduction}}
                </div>
            </div>
            <mavon-editor
                class="md"
                :class="{'mobileMd':clientWidth != 1}"
                :value="commentHtml"
                :subfield="false"
                :defaultOpen="'preview'"
                :toolbarsFlag="false"
                :editable="false"
                :scrollStyle="true"
                :ishljs="true"
            />
    </div>
</template>

<script>
import { findArticlebyId } from "../../api/test/index";
export default {
    data() {
        return {
           articleDetail: {} ,
           commentHtml: '',
        }
    },
    created() {
        const {id} = this.$route.query
        this.getDetail(id)
    },
    computed: {
        clientWidth(){
            return this.$store.getters.clientWidth
        }
    },
    mounted() {
        window.scrollTo(0,0)
    },
    methods: {
        getDetail(id){
            findArticlebyId(id).then(({code, data}) => {
                if(code == 2000){
                    this.articleDetail = data
                    this.commentHtml = data.comments.commentHtml
                }
            })
        }
    },
}
</script>

<style lang="less" scoped>
.mobileDetail{
    width: 100vw;
}
.detail{
    min-height: 100vh;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    box-sizing: border-box;
    padding: 20px 0;
    overflow: auto;
    .message{
        width: 1200px;
        // width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
        text-align: start;
        background: rgb(251, 251, 251);
        .author{
            font-size: 30px;
            margin-bottom: 20px;
            .el-icon-user{
                margin-right: 20px;
            }
        }
        .introduction{
            font-size: 22px;
            line-height: 60px;
            font-family: -apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Helvetica Neue","PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial;
            color: #333;
            margin-bottom: 20px;
        }
    }
    .mobileMsg{
        width: 100vw;
    }
    .md{
        width: 1200px;
        box-shadow: none !important;
    }
    .mobileMd{
        width: 100%;
    }
}
</style>

