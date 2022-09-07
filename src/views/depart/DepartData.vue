<template>
  <div>
    <el-card class="mt">
      <el-row :gutter="24">
        <el-col :span="18">
          <el-row :gutter="24">
            <el-col :span="8">
              <el-input></el-input>
            </el-col>
            <el-col :span="8">
              <el-input></el-input>
            </el-col>
            <el-col :span="8">
              <el-input></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="24" class="mt" v-show="show">
            <el-col :span="8">
              <el-input></el-input>
            </el-col>
            <el-col :span="8">
              <el-input></el-input>
            </el-col>
            <el-col :span="8">
              <el-input></el-input>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="2">
          <el-dropdown>
            <span class="el-dropdown-link" @click="expand">
              {{show?"收起":"展开"}}<i :class="`el-icon-arrow-${show?'up':'down'} el-icon--right`" ></i>
            </span>
          </el-dropdown>
        </el-col>
        <el-col :span="4" class="tr">
          <el-button type="primary">查询</el-button>
          <el-button type="primary">重置</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
    data(){
        return{
            show:false
        }
    },
    methods:{
        expand(){
            this.show=!this.show
        }
    }
};
</script>

<style lang="less" scoped>
 .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 18px;
  }
</style>