<!--
 * @Description: vue
 * @Version: 2.0.1.003
 * @Author: 薛松田
 * @Date: 2020-03-05 16:20:04
 * @LastEditors: 薛松田
 * @LastEditTime: 2020-03-16 16:34:15
 -->
<template>
    <div class='box'>
      <div>  <p>抱歉，服务器繁忙，请稍后重新支付。</p>
          <el-button  @click="gohome">返回首页</el-button>
      </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
         gohome(){
             this.$router.push('/')
         }
    }
}
</script>
<style scoped>
.box{height:300px;}
.box div{text-align: center;margin-top:200px; font-size:28px;color:rgb(116, 24, 27);;}
.box div button{margin-top:50px;}
</style>
