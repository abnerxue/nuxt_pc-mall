<template>
  <div class="head">
    <div class="head-t">
      <div class="top">
        <ul>
          <li>欢迎来到怀南会,翡翠和田玉彩宝文玩零售批发平台</li>
          <li>0519-86888690</li>
          <li>客服在线时间9:00-23:00</li>
        </ul>
        <ul class='headtag'>
          
          <!-- <li>翡翠和田玉彩宝文玩零售批发平台</li> -->
          <li>
           <span class='qr'> 手机版怀南会</span>
              <ul class="qr_phone">
        <li>
          <i></i>
          <span>
            <i></i>iPhone
          </span>
        </li>
        <li>
          <i></i>
          <span>
            <i></i>Android
          </span>
        </li>
      </ul> 
          <!--  <span>
              <i></i>会员中心
            </span> -->
          </li> 
          <!-- <li><a href="/login/logout.html">退出</a></li> -->
          <li  v-if="this.login!=1">请先<a herf='javascript:;' @click="log()">[登录]</a>/<a herf='javascript:;' @click="log()">[注册]</a></li>
          <!-- <li  >请先<a herf='javascript:;' @click="log()">[登录]</a>/<a herf='javascript:;' @click="reg()">[注册]</a></li> -->
          <li  v-if='this.logins==1' style='cursor:pointer;'><span @click="logout">退出</span></li>
          <li @click="gouser()">用户中心</li>
          <li @click="cart"><a >购物车</a></li>
        </ul>
       
      </div>
    </div>
    <div class="head-c">
      <div id="logo">
        <p>怀南会</p>
        <span><a href="/"></a></span>
      </div>
      <div class="search">
        <form action="/search" name="search_form" method="get" id="search_form">
          <input type="text" v-model="inputWord" name="keyword" autocomplete="off" placeholder="请输入您要搜索的关键词" />
          <div class="btn" rel="search_btn">
            <div>
              <span @click="search()">搜索</span>
            </div>
          </div>
        </form>
      </div>
      <!-- <div class="qrcode"></div> -->
    </div>
	<div class="nav">
      <ul>
           <li class="all" @mouseover="mouseOver()" @mouseleave="mouseLeave()">
          <i></i>
          <a herf>所有商品分类</a>
          <ul v-show="navShow">
            <li @mouseover="navList=1">
              <a href="/goods_list/66.html">翡翠</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>></span>
              <ul class="allList" v-if="navList == 1" @mouseleave="navList=0">
                <li>
                  <p><a href="javascript:;" @click="godddd(66)" >>&nbsp;&nbsp;翡翠</a></p>
                  <div>
                    <a href="javascript:;" @click="godddd(66,76)">吊坠吊牌</a>
                    <a href="javascript:;" @click="godddd(66,77)">手镯项链</a>
                    <a href="javascript:;" @click="godddd(66,78)">镶嵌翡翠</a>
                    <a href="javascript:;" @click="godddd(66,79)">把玩件</a>
                  </div>
                </li>
              </ul>
            </li>
            <li @mouseover="navList=2">
              <a href="/goods_list/67.html">和田玉</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>></span>
              <ul class="allList" v-if="navList == 2" @mouseleave="navList=0">
                <li>
                  <p><a href="javascript:;" @click="godddd(67)">>&nbsp;&nbsp;和田玉</a></p>
                  <div>
                    <a href="javascript:;" @click="godddd(67,80)">手镯</a>
                    <a href="javascript:;" @click="godddd(67,81)">吊坠吊牌</a>
                    <a href="javascript:;" @click="godddd(67,82)">籽料碧玉</a>
                    <a href="javascript:;" @click="godddd(67,83)">镶嵌玉</a>
                  </div>
                </li>
              </ul>
            </li>
            <li @mouseover="navList=3">
              <a href="/goods_list/68.html">文玩收藏</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>></span>
              <ul class="allList" v-if="navList == 3" @mouseleave="navList=0">
                <li>
                  <p><a href="javascript:;" @click="godddd(68)">>&nbsp;&nbsp;文玩收藏</a></p>
                  <div>
                    <a href="javascript:;" @click="godddd(68,84)">菩提子</a>
                    <a href="javascript:;" @click="godddd(68,85)">紫檀</a>
                    <a href="javascript:;" @click="godddd(68,86)">黄花梨</a>
                    <a href="javascript:;" @click="godddd(68,87)">金丝楠木</a>
                    <a href="javascript:;" @click="godddd(68,131)">沉香</a>
                    <!-- <a href="javascript:;" @click="godddd(68,89)">其他木质</a> -->
                  </div>
                </li>
              </ul>
            </li>
            <li @mouseover="navList=4">
              <a href="/goods_list/69.html">玉石陶瓷</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>></span>
              <ul class="allList" v-if="navList == 4" @mouseleave="navList=0">
                <li>
                  <p><a href="javascript:;" @click="godddd(69)">>&nbsp;&nbsp;玉石陶瓷</a></p>
                  <div>
                    <a href="javascript:;" @click="godddd(69,90)">绿松石</a>
                    <a  href="javascript:;" @click="godddd(69,91)">岫玉</a>
                    <a href="javascript:;" @click="godddd(69,120)">杜珊奇</a>
                    <a href="javascript:;" @click="godddd(69,124)">瓷器</a>
                  </div>
                </li>
              </ul>
            </li>
            <li @mouseover="navList=5">
              <a href="javascript:;" @click="godddd(70)">文房篆刻</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>></span>
              <ul class="allList" v-if="navList == 5" @mouseleave="navList=0">
                <li>
                  <p><a href="javascript:;" @click="godddd(70)">>&nbsp;&nbsp;文房篆刻</a></p>
                  <div>
                    <a href="javascript:;" @click="godddd(70,94)">文房四宝</a>
                    <a href="javascript:;" @click="godddd(70,130)">印章篆刻</a>
                  </div>
                </li>
              </ul>
            </li>
            <li @mouseover="navList=6">
              <a href="/goods_list/71.html">天然宝石</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>></span>
              <ul class="allList" v-if="navList == 6" @mouseleave="navList=0">
                <li>
                  <p><a href="javascript:;" @click="godddd(71)">>&nbsp;&nbsp;天然宝石</a></p>
                  <div>
                    <a  href="javascript:;" @click="godddd(71,96)">南红</a>
                    <a href="javascript:;" @click="godddd(71,97)">蜜蜡</a>
                    <a href="javascript:;" @click="godddd(71,121)">琥珀</a>
                    <a href="javascript:;" @click="godddd(71,122)">珊瑚</a>
                    <a href="javascript:;" @click="godddd(71,132)">天珠</a>
                  </div>
                </li>
              </ul>
            </li>
            <li @mouseover="navList=7">
              <a href="/goods_list/72.html">洋酒红酒</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>></span>
              <ul class="allList" v-if="navList == 7" @mouseleave="navList=0">
                <li>
                  <p><a href="javascript:;" @click="godddd(72,100)">>&nbsp;&nbsp;洋酒红酒</a></p>
                  <div>
                    <a href="javascript:;" @click="godddd(72,100)">葡萄酒</a>
                    <a href="javascript:;" @click="godddd(72,101)">威士忌</a>
                    <a href="javascript:;" @click="godddd(72,102)">白兰地</a>
                    <a href="javascript:;" @click="godddd(72,103)">XO</a>
                  </div>
                </li>
              </ul>
            </li>
            <li @mouseover="navList=8">
              <a href="/goods_list/74.html">宝石收藏</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>></span>
              <ul class="allList" v-if="navList == 8" @mouseleave="navList=0">
                <li>
                  <p><a href="javascript:;" @click="godddd(74)">>&nbsp;&nbsp;宝石收藏</a></p>
                  <div>
                    <a href="javascript:;" @click="godddd(74,108)">珍珠朱砂</a>
                    <a href="javascript:;" @click="godddd(74,111)">水晶</a>
                    <a href="javascript:;" @click="godddd(74,125)">黑曜石</a>
                    <a href="javascript:;" @click="godddd(74,133)">彩宝</a>
                  </div>
                </li>
              </ul>
            </li>
            <li @mouseover="navList=9">
              <a href="/goods_list/75.html">健康养生</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>></span>
              <ul class="allList" v-if="navList == 9" @mouseleave="navList=0">
                <li>
                  <p><a href="javascript:;" @click="godddd(75)">>&nbsp;&nbsp;健康养生</a></p>
                  <div>
                    <a href="javascript:;" @click="godddd(75,112)">不锈钢磁石</a>
                    <a href="javascript:;" @click="godddd(74,114)">食品</a>
                    <a href="javascript:;" @click="godddd(74,115)">太钢磁石</a>
                  </div>
                </li>
              </ul>
            </li>
            <li @mouseover="navList=10">
              <a href="/goods_list/116.html">茶叶紫砂</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>></span>
              <ul class="allList" v-if="navList == 10" @mouseleave="navList=0">
                <li>
                  <p><a href="javascript:;" @click="godddd(116)">>&nbsp;&nbsp;茶叶紫砂</a></p>
                  <div>
                    <a href="javascript:;" @click="godddd(116,117)">紫砂壶</a>
                    <a href="javascript:;" @click="godddd(116,118)">红茶绿茶</a>
                    <a href="javascript:;" @click="godddd(116,127)">普洱养生茶</a>
                    <a href="javascript:;" @click="godddd(116,128)">紫砂用品</a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      
        <li>
             <el-tabs v-model="activeName" @tab-click="handleClick" class='el-tabs'>
    <el-tab-pane label="首页" name="first"></el-tab-pane>
    <el-tab-pane label="新人专享" name="second"></el-tab-pane>
    <el-tab-pane label="团购" name="third"></el-tab-pane>
    <el-tab-pane label="秒杀" name="fourth"></el-tab-pane>
    <el-tab-pane label="关于我们" name="fifth"></el-tab-pane>
    <el-tab-pane label="百科资讯" name="sixth"></el-tab-pane>
    <el-tab-pane label="竞价" name="senven"></el-tab-pane>
  </el-tabs>
        </li>
      
    
      </ul>
      
    </div>
  </div>
  
</template>

<script>
import eventBus from'~/pages/layout/eventBus'
import  md5 from 'js-md5';
export default {
  
  name: "Header",
  data() {
    return {
      activeName:'',
        value: [],
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }],
          }],
        }],
      logins:0,
      navShow: false,
      navList: false,
      inputWord: '',
  }
  },
  watch:{
    //       event.$on('login',(message)=>{
    //     //一些操作，message就是从top组件传过来的值
    //     this.logins=message
    //     console.log(this.logins+'7700000000000000')
    // })
  },
  // created(){
  //        event.$on('login',(message)=>{
  //       //一些操作，message就是从top组件传过来的值
  //       this.logins=message
  //       console.log(this.logins+'7700000000000000')
  //   })
  // },
  mounted() {
        eventBus.$on('logins',(message)=>{
          console.log(message+'message')
        //一些操作，message就是从top组件传过来的值
        this.logins=message
        console.log(this.logins+'7700000000000000')
    })
 
    this.status()
    this.mouseOver();
    this.mouseLeave();
  },
  methods: {
    gouser(){
         if(this.login==1){
           this.$router.push({name: 'user-user'});
         }else{
               this.$router.push('/login/login')
         }
    },
    log(){
           this.$router.push({
           name:'login-login',
             query:{
             tag:1
           }
         })
    },
    reg(){
            this.$router.push({
           name:'goods-goodslist',
           query:{
        tag:2
           }
         })
    },
    godddd(a,b){
         this.$router.push({
           name:'goods-goodslist',
           query:{
             categoryId:a
           }
         })
    },
  
    cart(){
      if(this.login==1){
         this.$router.push({path:'/cart/cart'})
      }else{
           this.$router.push('/login/login')
      }
            
    },
      handleClick(tab, event) {
        if(tab.name=='fifth'){
          this.$router.push('/about_us/about_us')
        }
         if(tab.name=='second'){
          this.$router.push('/goods/goodslist')
        }
          if(tab.name=='third'){
          this.$router.push('/group/grouplist')
        }
           if(tab.name=='fourth'){
          this.$router.push('/seckill/seckill')
        }
         if(tab.name=='first'){
          this.$router.push({
          path: "/"
          })
        }
          if(tab.name=='sixth'){
          this.$router.push('/information/information')
        }
          if(tab.name=='senven'){
          this.$router.push('/competition/competition')
        }
        console.log(tab, event);
      },
    handleItemChange:function (){
       console.log("777788")
    },
    handleChange(value) {
        console.log(value);
      },
    search(){
      // window.location.href = '/search?keyword=' + this.inputWord;
      //  let _this=this
      //             let params = new URLSearchParams();
      //               //  params.append("page",1);
      //            this.$axios.get('/index.php/api/goods/search?keyword='+this.inputWord).then((res)=>{
      //                this.datalist=res.data.first
      //                let a=res.data.second
      //                this.datalistt=Object.values(a)
      //               console.log(res+'....//')
      //                this.id=new Array
      //               res.data.first.forEach(i => {
                         
      //                    this.id.push(i.id)
      //                    console.log(this.id)
      //                });
      //                this.getlist(this.id)
      //              console.log(res)
      //            })
      this.$router.push({
         path:'/goods/goodslist',
         query:{
           keyword:this.inputWord
         }
      })
    },
    status(){
      if(localStorage.getItem('token')==null){
        this.logins=1
      }else{
        this.logins=0
      }
      console.log(localStorage.getItem('token'))
      console.log(this.logins)
    },
    logout(){
     this.$router.push("/login/login")
     localStorage.setItem('token',null)
      localStorage.setItem('login',0)
     eventBus.$emit('logins',0)
    },
    mouseOver() {
      this.navShow = true;
     
    },
    mouseLeave() {
      this.navShow = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

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
    .pages p:nth-child(2),.pages p:hover{background: rgb(116,24,27);color: white;}
    .pages p:last-child{margin: 0;width: 58px;}
</style>
<style >
.headtag a{
  cursor: pointer;
}
.qr{
  cursor: pointer;
  color:#8d8d8d !important;
}

.qr_phone{
  display:none;
  float:right;
}
.qr:hover +.qr_phone{
    display:block;z-index:1000;position:absolute;border-right:0px !important;
}
 .qr_phone li {
  float:right;
  margin-right: 47px;
  text-align: center;
}
.qr_phone li:last-child {
  margin: 0;
}
.qr_phone li > i {
  width: 123px;
  height: 123px;
  display: block;
  background:  url(../../static/img/android.png) no-repeat;
  background-size: 100% 100%;
}
 .qr_phone li span {
  color: rgb(201, 201, 201);
  font-size: 10px;
  display: block;
  line-height: 18px;
}
.qr_phone li span i {
  display: inline-block;
  width: 16px;
  height: 18px;
  background: url(../../static/img/iphone.jpg) no-repeat;
  background-size: 100% 100%;
  margin-top: 1px;
}
 .qr_phone li:nth-child(2) span i {
  background: url(../../static/img/android.jpg) no-repeat;
}
.el-tabs{
  
}
.el-tabs__item:hover {
    color: rgb(116, 24, 27);
    cursor: pointer;
}
.el-tabs__item.is-active {
    color: rgb(116, 24, 27);
}
.el-tabs__active-bar{
      background-color: rgb(116, 24, 27);
}
.el-tabs__item {
   font-weight: 900;
    font-size:20px;
}
.head {
  width: 100%;
  height: 179px;
  box-shadow: 0 1px 10px #f5f5f5;
  min-width: 1200px;
}
.head-t {
  width: 100%;
  height: 40px;
  background: rgb(245, 245, 245);
}
.top {
  
  height: 40px;
  width: 1200px;
  margin: 0 auto;
  background: rgb(245, 245, 245);
}
.top ul:nth-child(1) {
  float: left;
  margin: 12px 0;
}
.top ul li {
  list-style: none;
  float: left;
  padding: 0 8px;
  font-size: 11px;
  border-right: 1px #8d8d8d solid;
  color: #8d8d8d;
  height: 12px;
  line-height: 12px;
}
.top ul li:nth-child(1) {
  padding-left: 0;
}
.top ul li:last-child {
  padding-right: 0;
  border: 0;
}
.top ul:nth-child(2) {
  float: right;
  margin: 12px 0;
  font-size: 12px;
}
.top ul:nth-child(2) li:nth-child(2) span {
  margin-left: 15px;
  color: rgb(242, 208, 134);
}
.top ul:nth-child(2) li:nth-child(2) span i {
  display: inline-block;
  width: 14px;
  height: 10px;
  background: url(../../static/img/menber_icon_03.jpg) no-repeat;
  background-size: 100% 100%;
}

.head-c {
  width: 1200px;
  height: 99px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  position: relative;
}
.head-c .qrcode {
  position: absolute;
  top: 18px;
  right: 52px;
  width: 83px;
  height: 83px;
  background: blanchedalmond;
}
.head-c #logo {
  margin: 15px 0 0 50px;
  height: 64px;
  width: 198px;
  position: relative;
}
.head-c #logo p {
  position: absolute;
  top: -999px;
}
.head-c #logo span {
  width: 198px;
  height: 65px;
  float: left;
  position: absolute;
  background: url(../../static/img/logo_index.png) no-repeat;
  top: 0;
  left: 0;
  background-size: 100% 100%;
}
.head-c #logo span a{
  width: 100%;
  height: 100%;
  display: inline-block;
}
.head-c .search {
  width: 476px;
  height: 40px;
  margin-left: 136px;
  float: left;
  margin-top: 30px;
  border: 1px rgb(116, 24, 27) solid;
  box-sizing: border-box;
}
.head-c .search input {
  width: 394px;
  height: 37px;
  float: left;
  border: none;
  outline: none;
  padding: 0 12px;
  box-sizing: border-box;
  font-size: 12px;
  margin-top: 1px;
  margin-left: 1px;
}
.head-c .search .btn {
  width: 79px;
  height: 38px;
  background: rgb(116, 24, 27);
  float: right;
  line-height: 38px;
  text-align: center;
  color: white;
  font-size: 12px;
}
.all{

  /* width:200px;
  float:left; */
  cursor:pointer;
  z-index:1008;
}
.all ul li span {
  float: right;
  margin-right: 30px;
  color: #000;
}
.all > ul > li:hover > span {
  color: rgb(116, 24, 27);
}
.all > ul > li:hover > a {
  color: rgb(116, 24, 27);
}
.nav {
  width: 1200px;
  margin: 0 auto;
  height: 40px;
}
.nav > ul {
  list-style: none;
  width: 100%;
  height: 100%;
  font-size: 16px;
}

.nav > ul > li {
  font-weight: 600;
  float: left;
  height: 40px;
  line-height: 40px;
  padding: 0 17px;
  cursor: pointer;
}
.nav > ul > li:hover {
  color: rgb(104, 29, 33);
}
.nav > ul > li:nth-child(1) {
  padding: 0;
  width: 200px;
  height: 40px;
  background: rgb(116, 24, 27);
  color: white;
  line-height: 40px;
  text-align: center;
}
.nav > ul > li:nth-child(1) > ul {
  padding: 0;
  width: 200px;
  height: auto;
  margin: 0 auto;
  box-sizing: border-box;
}
.nav > ul > li:nth-child(1) > ul > li {
  padding: 0;
  width: 200px;
  height: auto;
  font-size: 16px;
  text-align: center;
  background: white;
  margin: 0 auto;
  position: relative;
  color: #8d8d8d;
  border: 1px solid rgb(116, 24, 27);
  border-top: none;
  border-bottom: none;
  position: relative;
  z-index: 1000;
  position: relative;
  box-sizing: border-box;
  font-size: 16px;
}
.nav > ul > li:nth-child(1) > ul > li:last-child {
  border-bottom: 1px solid rgb(116, 24, 27);
}
.nav > ul > li:nth-child(1) > ul > a {
  text-decoration: none;
  color: rgb(116, 24, 27);
}

.nav > ul > li:nth-child(2) {
  margin-left: 34px;
}
.nav > ul > li:nth-child(1) > a {
  color: #fff;
}

.allList {
  width: 200px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 198px;
  background: #fff;
  border: 1px #74181b solid;
  box-sizing: border-box;
  padding: 10px 10px;
}
.allList p {
  text-align: left;
  color: #74181b;
  font-size: 16px;
  line-height: 25px;
  height: 25px;
}
.allList div {
  width: 100%;
  overflow: hidden;
}
.allList div a {
  float: left;
  padding-right: 10px;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
}
.allList div a:hover {
  color: #74181b;
}
</style>


