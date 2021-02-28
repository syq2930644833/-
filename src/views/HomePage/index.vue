<template>
  <div class="homePage">
    这里是主页
  </div>
</template>

<script>
import { fetchList, createArticle } from "../../api/test/index";
export default {
  data() {
    return {
      analysis1:[],
      analysis2:[],
      analysis3:[],
      analysis4:[],
      analysis5:[],
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      fetchList().then(res => {
        console.log(res);
      });
    },
    test(){
      let index = 1
      let data = {
        0: this.analysis1,
        1: this.analysis2,
        2: this.analysis3,
        3: this.analysis4,
        4: this.analysis5,
      }
      data[index] && data[index].push('1111')
    }
  }
};
</script>

<style lang="less" scoped>
.homePage {
  min-height: 100vh;
}
</style>
