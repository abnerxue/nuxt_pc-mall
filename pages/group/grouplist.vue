<!--
 * @Description: vue
 * @Version: 2.0.1.003
 * @Author: 薛松田
 * @Date: 2020-01-18 10:13:44
 * @LastEditors: 薛松田
 * @LastEditTime: 2020-03-10 09:29:05
 -->
<template>
    <div>
        <div class="content">
    <div class="banner">
        <img src="../../static/img/groupbuy_banner.jpg" alt="">
    </div>

    <div class="c_nav">
        <span></span>
        <p>本次拼团</p>
        <span></span>
    </div>

  

    <div class="content_box">
        <ul class="goods_listpt">
          
            <!-- <li v-for="(item,i) in datalist" :key='i'>
                <a href="<?php echo $url; ?>"><img :src="<?php echo $group->thumb;?>" alt=""></a>
                <div class="information">
                    <p></p>
                    <div>
                        <p class="buyText"><span>¥</span></p>
                        <a href="<?php echo $url; ?>"><button class="gobuy">去拼团</button></a>
                    </div>
                </div>
                <div class="group_num">
                    <p></p>

                </div>
            </li> -->
             <li v-for="(item,i) in datalist" :key='i'>
                <a href="javascript:" @click="gobuy(item.id)"><img :src="item.thumb" alt="" class='img'></a>
                <div class="information">
                    <p>{{item.title}}</p>
                    <div>
                        <p class="buyText"><span>¥{{item.price}}</span></p>
                        <a href="#"><button class="gobuy" @click="gobuy(item.id)">去拼团</button></a>
                    </div>
                </div>
                <div class="group_num">
                    <p></p>

                </div>
            </li>
        



        </ul>
        <div class="pages">
         
        </div>
    </div>

</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
                datalist:''
        }
    },
    mounted(){
        this.getlist()
    },
    methods:{
        gobuy(id){
               let _this=this
                 
                 this.$axios.get('/api/group/group_goods_detail?groupGoodsId='+id).then((res)=>{
                    if(res.data.message==='团购已经结束'){
                      this.$message({
                        message: '本商品团购活动已经结束喽，快去看看其他宝贝吧',
                        type: 'success',
                        offset:'300'
                        });
                      return;
                    }
                       this.$router.push({
                    name:'goods-goodsdetail',
                    query:{
                        tag:1,
                        id:id
                    }
                }) 
                 })
               
        },
        getlist(){
             let _this=this
                  let params = new URLSearchParams();
                    //  params.append("page",1);
                 this.$axios.get('/api/group/goods_list').then((res)=>{
                     this.datalist=res.data.list
                   console.log(res.data.list)
                 })
               },
    }
}
</script>
<style scoped>
/* .goods_listpt>li{
    height:480px;
} */
@import url(../../static/css/group.css);
</style>