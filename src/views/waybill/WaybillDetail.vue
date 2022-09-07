<template>
  <div>
     <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="card">
      <el-row>
        <el-col :span="12" class="info" style="text-align: left">
          <span>运单编号:YGC20170110000001</span>
          <span>创建时间:2022-08-24</span>
          <span>审核员:张三丰</span>
        </el-col>
        <el-col :span="12" style="text-align: right">
          <el-button type="primary" @click="back">返回</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="mt">
      <el-steps :active="2" align-center>
        <el-step
          title="未发货"
       
        ></el-step>
        <el-step
          title="运输中"
         
        ></el-step>
        <el-step
          title="已收货"
          
        ></el-step>
        <el-step
          title="已完成"
         
        ></el-step>
      </el-steps>
    </el-card>
    <el-card class="card">
      <h1>基础信息</h1>
      <el-row class="product-detail">
        <el-col :span="6">
          <p>客户名称:诺来科技有限公司</p>
          <p>货物名称:口罩</p>
          <p>数量:8(吨)</p>
        </el-col>
        <el-col :span="6">
          <p>是否是易燃易爆物品:不是</p>
          <p>结算方式:现付</p>
          <p>运费:12000元</p>
        </el-col>
        <el-col :span="6">
          <p>发货单据:暂未上传</p>
          <p>接货单据:暂未上传</p>
          <p>所属业务员:苏澄海</p>
        </el-col>
        <el-col :span="6">
          <p>客户下单时间:2000-08-20</p>
          <p>是否需要接货:不需要</p>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <h1>运输信息</h1>
      <el-row class="product-detail">
        <el-col :span="6">
          <p>车牌号:京A12345</p>
          <p>司机姓名:王五</p>
        </el-col>
        <el-col :span="6">
          <p>司机电话:18888888888</p>
          <p>司机地址:北京市朝阳区</p>
        </el-col>
        <el-col :span="6">
          <p>司机身份证号:257896547854123698</p>
          <p>所属公司:天博运输公司</p>
        </el-col>
        <el-col :span="6">
          <p>预计运输时间:8天</p>
          <p>违约金:5000</p>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <h1>经办人员信息</h1>
      <el-row class="product-detail">
        <el-col :span="5">
          <p>业务员:张三</p>
        </el-col>
        <el-col :span="6">
          <p>审核员:李四</p>
        </el-col>
        <el-col :span="6">
          <p>制单员:王五</p>
        </el-col>
        <el-col :span="6">
          <p>备注：无备注</p>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
/*
include：包含
exclude：排除
  <keep-alive :include="['a','b']"  exclude="组件名">
     <router-view></router-view>
     <component />
  </keep-alive>
*/ 

import breadCrumb from "@/mixins/breadCrumb";
import { mapMutations } from "vuex";
export default {
 mixins: [breadCrumb],
  beforeRouteLeave(to, from, next) {
    if(to.path=="/waybill/list"){
      //做一个标记
      this.changeIsFromDetail(true)
    }else{
      this.changeIsFromDetail(false)
    }
    next()
  },
  methods: {
    ...mapMutations(["changeIsFromDetail"]),
    back() {
      this.$router.push("/waybill/list");
    },
  },
};
</script>

<style  scoped>
.info span {
  line-height: 40px;
  text-align: left;
  margin: 0 8px;
}
.product-detail p {
  text-align: left;
  line-height: 40px;
}
h1 {
  text-align: left;
  margin: 20px 0;
}
.card {
  margin-top: 20px;
}
</style>