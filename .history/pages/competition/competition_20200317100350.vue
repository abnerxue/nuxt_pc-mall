<!--
 * @Description: vue
 * @Version: 2.0.1.003
 * @Author: 薛松田
 * @Date: 2020-03-17 09:26:34
 * @LastEditors: 薛松田
 * @LastEditTime: 2020-03-17 10:03:50
 -->
<!--
 * @Description: vue
 * @Version: 2.0.1.003
 * @Author: 薛松田
 * @Date: 2020-01-18 10:41:04
 * @LastEditors: 薛松田
 * @LastEditTime: 2020-03-09 14:00:00
 -->
<template>
    <div>
        <div class="content">



    <div class="banner">
        <img src="../../static/img/seckill_banner.jpg" alt="">
    </div>
  
   <!-- <div class='bg'></div> -->
   <div id="el-tabs-con" style="width:100%;position:relative;">
       
                  <div style="position:absolute;top:0;left:0;width:100%;height:50px;background-color:#575757;"></div>
              <el-tabs v-model="activeName" @tab-click="handleClick"  :stretch=true  style='width:1200px;margin:0 auto;position:relative;' class='el-tabs' >
    <el-tab-pane  label="已结束" name="first" >
           <div class="content_box"  v-if="isFirst">
        <ul class="goods_list">

          
                <li  v-for="(item,i) in datalists" :key='i'  >
                <div v-if='item.timeOn>0'>
                        <a href="" >
                        <img :src="item.thumb" alt="">
                    </a>
                    <div class="information">
                        <p class="buyText">{{item.title}}</p>
                        <div>
                            <p><span>¥ {{item.price}}</span></p>
                            <!-- <del><span>¥</span></del> -->
                            <a href="#"><button class="gobuy"  @click="gobuy(item.id)">去抢购</button></a>
                        </div>
                    </div>
                    <div class="appraise">

                        <!--    <p>已售<span></span></p> -->
                    </div>
                </div>
                
                </li>
          




        </ul>
        <div class="pages">
           
        </div>
    </div>
    </el-tab-pane>
    <el-tab-pane label="抢购中" name="second">
            <div class="content_box"  v-if="isSecond">
        <ul class="goods_list">

          
                <li  v-for="(item,i) in datalist" :key='i'   >
                    <a href="" >
                        <img :src="item.thumb" alt="">
                    </a>
                    <div class="information">
                     <p class="buyText">{{item.title}}</p>
                        <div>
                            <p><span>¥ {{item.price}}</span></p>
                            <!-- <del><span>¥</span></del> -->
                            <a href="#"><button class="gobuy"  @click="gobuy(item.id,item.gid)">去抢购</button></a>
                        </div>
                    </div>
                    <div class="appraise">

                        <!--    <p>已售<span></span></p> -->
                    </div>
                </li>
          




        </ul>
        <div class="pages">
           
        </div>
    </div>
    </el-tab-pane>
    <el-tab-pane label="未开始" name="third">
            <div class="content_box" v-if="isThird">
        <ul class="goods_list">

          
                <li  v-for="(item,i) in datalistf" :key='i'  >
                    <a href="" >
                        <img :src="item.thumb" alt="">
                    </a>
                    <div class="information">
                        <p class="buyText">{{item.title}}</p>
                        <div>
                            <p><span>¥ {{item.price}}</span></p>
                            <!-- <del><span>¥</span></del> -->
                            <a href="#"><button class="gobuy"   @click="gobuy(item.gid)">去抢购</button></a>
                        </div>
                    </div>
                    <div class="appraise">

                        <!--    <p>已售<span></span></p> -->
                    </div>
                </li>
          




        </ul>
        <div class="pages">
           
        </div>
    </div>
    </el-tab-pane>
   
  </el-tabs>
    </div>
  

</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isFirst:false,
            isThird:false,
            isSecond:true,
            activeName:'second',
          
            datalist:'',
            datalists:'',
            datalistf:''
        }
    },
    mounted(){
   this.getlist()
    },
    methods:{
           handleClick(tab) {
      if (tab.name === 'first') {
        this.isFirst = true
        this.isSecond = false
        this.isThird=false
        this.getlist()
      } else if (tab.name === 'second') {
          this.isThird=false
        this.isFirst = false
        this.isSecond = true
          this.getlist()
      }else if(tab.name === 'third'){
            this.isThird=true
        this.isFirst = false
        this.isSecond = false
          this.getlist()
      }
    },
              gobuy(id,gid){
                  console.log(id)
                this.$router.push({
                    name:'goods-goodsdetail',
                    query:{
                        tag:2,
                        id:id,
                        gid:gid
                    }
                })
        },
   
        getlist(){
             let _this=this 

            if(this.activeName=='first'){
                    //   let params = new URLSearchParams();
                    // //  params.append("page",1);
                 this.$axios.get('/api/auction/goods_list?type='+1).then((res)=>{
                     this.datalist=res.data.list
                   console.log(res.data.list)
                 })
            }else if(this.activeName=='second'){
                   this.$axios.get('/api/auction/goods_list?type='+2).then((res)=>{
                     this.datalist=res.data.list
                   console.log(res.data.list)
                 })
            }else{
                   this.$axios.get('/api/auction/goods_list?type='+3).then((res)=>{
                     this.datalist=res.data.list
                   console.log(res.data.list)
                 })
            }
            
             
               },
    }
}
</script>
<style scoped>

@import url('../../static/css/seckill.css');
.el-tabs{
  
}
div[role=tablist]{
}
.el-tabs__nav{

    background: red!important;;
}
.el-tabs__item:hover {
    background: #575757 !important;
    color: rgb(116, 24, 27);
    cursor: pointer;
}
.el-tabs__item.is-active {
     background: #575757 !important;
    color: rgb(116, 24, 27);
}
.el-tabs__active-bar{
      background-color: rgb(116, 24, 27);
}
.el-tabs__item {
   font-weight: 100 !important;
    font-size:2px !important;
    background: red!important;
}
.bg{
     background: #575757;
     width:100%;
     height:40px;
}
.c_nav{
    width:1200px;
    margin: 0 auto;
    height: 100%;
}
.el-tabs__header {
    margin-bottom:0;
}
el-tabs__item is-top{
    background: #575757;
}
</style>