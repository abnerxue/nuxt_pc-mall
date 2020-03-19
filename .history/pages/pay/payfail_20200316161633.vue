<!--
 * @Description: vue
 * @Version: 2.0.1.003
 * @Author: 薛松田
 * @Date: 2020-03-05 16:20:04
 * @LastEditors: 薛松田
 * @LastEditTime: 2020-03-16 16:16:33
 -->
<template>
    <div>
        抱歉，服务器繁忙，请稍后重新支付。
        <el-button  @click="gohome">返回首页</el-button>
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
             this.$route.push('/')
         }
    }
}
</script>
