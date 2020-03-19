<!--
 * @Description: vue
 * @Version: 2.0.1.003
 * @Author: 薛松田
 * @Date: 2020-01-06 15:58:32
 * @LastEditors: 薛松田
 * @LastEditTime: 2020-03-05 11:11:37
 -->
<template>
  <div>
  <nh/>
    <nuxt />
    <news/>
   <nf/>
  </div>
</template>
   <script>
   import nh from '~/pages/layout/header.vue'
   import nf from '~/pages/layout/footer.vue'
    import news from '~/pages/layout/news.vue'
   export default{
     
      components:{
       nh,
     nf,
     news
     } 
   }
   </script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
#el-tabs-con>div .el-tabs__nav-wrap::after{
  height:0px!important;
}
#el-tabs-con>div .el-tabs__active-bar {
    background-color: inherit!important;
}
#el-tabs-con>div .el-tabs__item.is-active{
  color:rgb(116, 24, 27);
}
#el-tabs-con>div .el-tabs__item{
  color:#8D8D8D;
}
#el-tabs-con>div .el-tabs__item:hover{
  color:rgb(116, 24, 27);
}
</style>
