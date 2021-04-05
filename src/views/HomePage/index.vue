<template>
  <div class="homePage">
    这里是主页
    <el-upload
      action="/api/v1/test/upload"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <i class="el-icon-plus"></i>
    </el-upload>
  </div>
</template>

<script>
import { upload } from "../../api/test/index";
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
    // this.getdata();
  },
  methods: {
    getdata() {

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
    },
    handlePictureCardPreview(file){
      console.log('file: ', file);
    },
    handleRemove(){
      console.log('file, fileList: ', file, fileList);
    },
    handleAvatarSuccess(response, file, fileList){
      console.log('response, file, fileList: ', response, file, fileList);
    },
    beforeAvatarUpload(file){
      console.log('file: ', file);
    }
  }
};
</script>

<style lang="less" scoped>
.homePage {
  min-height: 100vh;
}
</style>
