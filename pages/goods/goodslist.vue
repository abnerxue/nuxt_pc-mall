<template>
    <div>
    
    <div class="content">
        <div class="content-l">
            <p>
                <a href="">全部商品</a>
                <i>></i>
                <a>{{this.$route.query.name}}</a>
                <i v-if='this.$route.query.name!=null'>></i>
                <a>{{this.$route.query.names}}</a>
            </p>
        </div>
       <div>
           
           
                 <ul class="list_r" >
         <li @click=golist(item.id)  v-for='(item,i) in datalista' :key='i'><span><a href="#key1">{{item.name}}</a></span>
         <!-- //这是右边竖栏 -->
          <div style="width:60%;border-bottom: 1px solid #d0d0d0;margin:0 auto;"></div></li>
        
       
        <div style="width:60%;border-bottom: 1px solid #d0d0d0;margin:0 auto;"></div>
        <li @click="gpserve()"><img src="../../static/img/listen.jpg" alt="" ><span>在线客服</span></li>
        <li ><img src="../../static/img/up_arrow.png" alt="" style="margin:2px auto;"><span class="topp">返回顶部</span></li>
    </ul>
       </div>
        <div class='content_cf'>
            <p>综合排序</p>
          
            <p><span><a href="javascript:"  @click="getlists(1)">价格从低到高</a></span>&nbsp;&nbsp;
                          <span> <a href="javascript:" @click="getlists(2)">价格从高到低</a></span></p>
                            <div class="price_">
                       
                        <p><span>¥</span><input type= "number" v-model='value1'></p>
                        <p>-</p>
                        <p><span>¥</span><input type="number" v-model='value2'></p>
                        <div @click='getlistn()'>确定</div>
                        
                    </div>
            <!-- <div class="price">
                <p><span>¥</span><input type= "number"></p>
                <p>-</p>
                <p><span>¥</span><input type="number"></p>
            </div> -->
             
        </div>
      
        <ul class="goods_list" >
            <li v-for='(item,i) in datalist' :key='i'>
                <p  @click="go(item.gid)"><img :src='item.thumb'/></p>
                <div class="information">
                    <p>{{item.title}}</p>
                    <p><span>¥</span>{{item.price}}</p>
                </div>
                <!-- <div class="appraise">
                    <p>★★★☆☆</p>
                    <p><span>0</span>人点评</p>
                </div> -->
            </li>
            <!-- <li>
                <p>图片</p>
                <div class="information">
                    <p>冰锐清水翡翠平安镯</p>
                    <p><span>¥</span>36000.00</p>
                </div>
                <div class="appraise">
                    <p>★★★☆☆</p>
                    <p><span>0</span>人点评</p>
                </div>
            </li>
          
          
            <li>
                <p>图片</p>
                <div class="information">
                    <p>冰锐清水翡翠平安镯</p>
                    <p><span>¥</span>36000.00</p>
                </div>
                <div class="appraise">
                    <p>★★★☆☆</p>
                    <p><span>0</span>人点评</p>
                </div>
            </li> -->
        </ul>
        <!-- <div class="pages">
            <p>&lt;</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>&gt;</p>
            <p>尾页</p>
        </div> -->
          <div v-if="this.totalPage.totalPage>1" class="pages">
      <p @click="Topage((--tag)==0?1:tag)">&lt;</p>
      <p v-for="i in totalPage.totalPage" :key="i" :class="{changebg:tag==i}" @click="Topage(i)">{{i}}</p>
      <p @click="Topage((++tag)>=totalPage.totalPage?totalPage.totalPage:tag)">&gt;</p>
      <p @click="Topage(totalPage)">尾页</p>
    </div>
    </div>

   
    </div>
</template>
<script>
export default {
    head: {
    title:' 琥珀蜜蜡_文玩核桃_缅甸冰种翡翠_星月金刚菩提子_新疆和田玉籽料_吊坠手镯_宜兴紫砂壶_黄花梨小叶紫檀_金丝楠木手串_项链鉴定_独山岫玉_沉香南红_彩宝-怀南会',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {
        name: 'keywords',
        content:
          '琥珀蜜蜡_文玩核桃_缅甸冰种翡翠_星月金刚菩提子_新疆和田玉籽料_吊坠手镯_宜兴紫砂壶_黄花梨小叶紫檀_金丝楠木手串_项链鉴定_独山岫玉_沉香南红_彩宝-怀南会'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
    data(){
        return{
            page:'',
            priceRange:'',
            sort:'',
           keyword:'',
            totalPage:'',
            categoryId:'',
            value1:'',
            value2:'',
            tag:1,
         datalist:{},
           datalista:{}
        }
    },
    mounted(){
        this.getlist(),
        this.test()
    },
    methods:{
            golist(id){
                       this.$router.push({
                 path:'/goods/goodslist',
                 query:{
                     categoryId:id,
                     sort:'',
                     priceRange:''
                 }
             })
               },
             test(){
             let _this=this
                  let params = new URLSearchParams();
                    //  params.append("page",1);
                 this.$axios.get('/api/goods/category').then((res)=>{
                     this.datalista=res.data.first
                     let a=res.data.second
                     this.datalistt=Object.values(a)
                    console.log(res+'....//')
                     this.id=new Array
                    res.data.first.forEach(i => {
                         
                         this.id.push(i.id)
                         console.log(this.id)
                     });
                    //  this.getlist(this.id)
                   console.log(res)
                 })
               },

           Topage(i) {
               console.log(this.tag+'777777777777777')
       this.tag = i;
        console.log(this.tag+'77777777777777799999999')
        this.$axios.get('/api/goods/get_list?categoryId='+this.categoryId+'&&sort='+this.sort+'&&priceRange='+this.priceRanges+'&&page='+i).then((res)=>{
            this.datalist=res.data.list
              this.totalPage=res.data
        })
    },
        go(gid){
           this.$router.push({
               name:'goods-goodsdetail',
               query:{
                   tag:4,
                   gid:gid
               }
           })
        },
            getlistn(){
                this.priceRange=this.value1+'_'+this.value2
           let temp=this.value1+'_'+this.value2
           if(this.$route.query.categoryId==undefined){
               this.categoryId=this.$route.query.categoryId
                
                         this.$axios.get('/api/goods/get_list').then((res)=>{
                     this.datalist=res.data.list
                   console.log(res.data.list)
                   this.totalPage=res.data
                 })
           }else{
                     this.$axios.get('/api/goods/get_list?categoryId='+this.$route.query.categoryId+'&&priceRange='+temp).then((res)=>{
                     this.datalist=res.data.list
                   console.log(res.data.list)
                   this.totalPage=res.data
                 })
           }
           
       },
          getlists(a){
               this.priceRange=this.value1+'_'+this.value2
           console.log(this.$route.query.categoryId)
           if(this.$route.query.categoryId==undefined){
                // this.$axios.get('/api/goods/get?categoryId='+'137&&categoryId='+'138&&categoryId='+'139').then((res)=>{
                    // this.$axios.get('/api/goods/get?categoryId='+'137').then((res)=>{
                         this.$axios.get('/api/goods/get_list').then((res)=>{
                     this.datalist=res.data.list
                   console.log(res.data.list)
                   this.totalPage=res.data
                 })
           }else{
               this.sort=a
                     this.$axios.get('/api/goods/get_list?categoryId='+this.$route.query.categoryId+'&&sort='+a+'&&priceRange='+this.$route.query.priceRange).then((res)=>{
                     this.datalist=res.data.list
                   console.log(res.data.list)
                   this.totalPage=res.data
                 })
           }
           
       },
       getlist(){
           console.log(this.$route.query)
           this.categoryId=this.$route.query.categoryId
           console.log(this.$route.query.categoryId)
           if(this.$route.query.keyword!=null||this.$route.query.keyword!=undefined){
                         this.$axios.get('/api/goods/get_list?keyword='+this.$route.query.keyword).then((res)=>{
                     this.datalist=res.data.list
                   console.log(res.data.list)
                   this.totalPage=res.data
                 })
           }
           if(this.$route.query.categoryId==undefined){
                // this.$axios.get('/api/goods/get?categoryId='+'137&&categoryId='+'138&&categoryId='+'139').then((res)=>{
                    // this.$axios.get('/api/goods/get?categoryId='+'137').then((res)=>{
                         this.$axios.get('/api/goods/get_list').then((res)=>{
                     this.datalist=res.data.list
                   console.log(res.data.list)
                   this.totalPage=res.data
                 })
           }else{
               this.sort=this.$route.query.sort
               this.priceRange=this.value1+'_'+this.value2
                     this.$axios.get('/api/goods/get_list?categoryId='+this.$route.query.categoryId+'&&sort='+this.$route.query.sort+'&&priceRange='+this.$route.query.priceRange).then((res)=>{
                     this.datalist=res.data.list
                     this.totalPage=res.data
                   console.log(res.data.list)
                 })
           }
           
       }
    }
}
</script>
<style scoped>
 *{margin:0;padding:0;}
    li{list-style:none }
    img{vertical-align:top;border:none}
    a{text-decoration:none;outline: none;color: #8D8D8D;}
    i{font-style: normal;}
    input{outline: 0;border: 0;}
    input[type=number] {-moz-appearance:textfield;}
    input[type=number]::-webkit-inner-spin-button,  input[type=number]::-webkit-outer-spin-button{-webkit-appearance: none;}
    /* 内容 */
    .content{min-height: 600px;width: 1200px;margin: 0 auto;}
    .content-l{width: 100%;height: auto;overflow: hidden;}
    .content-l p{font-size: 12px;margin-top: 20px;color: #8D8D8D;margin-bottom: 24px;}
    .content-l p a:hover{color: #74171b;}
    /* 排序 */
    .content_c{height: 40px;background: #f5f5f5;padding: 0 16px;line-height: 40px;font-size:12px;}
    .content_c>p{float: left;margin-right: 32px;color: #8d8d8d;cursor: pointer;}
    .content_c>p:nth-child(1){color:rgb(116,24,27);}
    .price{height: 40px;float: left;display: flex;flex-direction: row;}
    .price p:nth-child(1),.price p:nth-child(3){width: 50px;height: 20px;border: 1px #e9e9e9 solid;background: #fff;padding: 0 1px;box-sizing: border-box;display: block;margin-top: 10px;}
    .price p:nth-child(2){font-size: 10px;margin: 0 2px;color: #8d8d8d;}
    .price p span{float: left;height: 18px;line-height: 18px;font-size: 10px;color: #8d8d8d;margin: 0 2px;}
    .price p input{width: 32px;padding: 0 2px;box-sizing: border-box;height: 18px;font-size: 12px;float: left;color: #8d8d8d;}
    /* 物品列表 */
    .goods_list{width: 100%;height: auto;margin-top: 30px;margin-bottom: 104px;overflow: hidden;}
    .goods_list li{width: 234px;height: 344px;margin: 0 7px 16px 0;border: 1px #e9e9e9 solid;box-sizing: border-box;float: left;}
    .goods_list li:nth-child(5n){margin-right: 0;}
    .goods_list li>p:nth-child(1){width: 232px;height: 232px;background: cadetblue;background-size: 100% 100%;}
    .goods_list li .information{height: 80px;width: 100%;padding: 10px;box-sizing: border-box;border-bottom: 1px #e9e9e9 solid;}
    .information p:nth-child(1){font-size: 12px;margin-bottom: 15px;}
    .information p:nth-child(2){font-size: 18px;color: #DE0812;font-weight: 600;}
    .information p:nth-child(2) span{font-size: 8px;}
    .appraise{height: 30px;line-height: 30px;padding: 0 10px;box-sizing: border-box;}
    .appraise p{color: #8d8d8d;font-size: 12px;float: left;}
    .appraise p:nth-child(2){float: right;}
    .appraise p>span{color: #DE0812;}
    .pages{display: flex;flex-direction: row;justify-content: center;padding-bottom: 120px;}
    .pages p{width:33px;height:33px;border: 1px #e9e9e9 solid;line-height: 33px;text-align: center;margin-right: 4px;color: rgb(121,121,121);float: left;}
    /* .pages p:nth-child(2),.pages p:hover{background: rgb(116,24,27);color: white;} */
    .pages p:last-child{margin: 0;width: 58px;}
</style>
<style scoped >
@import url('../../static/css/base.css');

.list_r{width:120px;height:auto;position: fixed;right:90px;top:30%;background: white;text-align: center;z-index: 100;padding: 0;}
/* .list li:first-child{height:30px;} */
.list_r li{line-height: 28px;text-align: center; cursor: pointer;}
.list_r li:hover{background:rgb(116,24,27);color:white;}
.list_r li:hover a{color:white;}
.list_r li span{font-size: 14px;line-height: 28px;}
.list_r li img:nth-child(1){margin:5px 5px 0px -19px;}
.list_r li img:nth-child(2){ margin:0 auto;}
.list_r li:last-child{display: flex;flex-direction: column;height:45px;line-height: 20px;padding-bottom:10px;}
</style>