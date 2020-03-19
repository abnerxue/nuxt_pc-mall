<template>
  <div class="footer">
    <div class="foot-t">
      <ul>
        <li>
          <i><img src="../../static/img/source.png" alt=""></i>
          <p>
            <span>源头直供</span>
            <span>无中间商 确保低价</span>
          </p>
        </li>
        <li>
          <i><img src="../../static/img/quality.png" alt=""></i>
          <p>
            <span>品质保障</span>
            <span>品质护航 购物无忧</span>
          </p>
        </li>
        <li>
          <i><img src="../../static/img/replacement.png" alt=""></i>
          <p>
            <span>七天无理由退换</span>
            <span>为您提供售后无忧保障</span>
          </p>
        </li>
        <li>
          <i><img src="../../static/img/delivery.png" alt=""></i>
          <p>
            <span>保价配送</span>
            <span>支持退换 安全便捷</span>
          </p>
        </li>
        <li>
          <i><img src="../../static/img/supervise.png" alt=""></i>
          <p>
            <span>质检监督</span>
            <span>正品保障 支持复检</span>
          </p>
        </li>
        <li>
          <i><img src="../../static/img/shot.png" alt=""></i>
          <p>
            <span>实物拍摄</span>
            <span>相机拍摄 真实还原</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="foot-b">
      <ul>
        <li><a href="/about_us.html">关于我们</a></li>
     <li v-for='(item,i) in  this.aboutus' :key='i' @click='goarticle(item.id)'><a>{{item.title}}</a></li>
      </ul>
      <span></span>
      <ul>
        <li><a href="/help_list/66.html">帮助中心</a></li>
       <li v-for='(item,i) in  this.help' :key='i' @click='goarticle(item.id)'><a>{{item.title}}</a></li>
      </ul>
      <span></span>
      <ul class="media">
       <li v-for='(item,i) in  this.news' :key='i' @click='goarticle(item.id)'><a>{{item.title}}</a></li>
      </ul>
   <span></span>
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
    </div>
    <div class="foot">
      <p>友情链接：<span>怀南会商务股份有限公司</span>&nbsp;&nbsp;&nbsp;<span>中华孝道股份有限公司</span>&nbsp;&nbsp;&nbsp;</p>
      <p>电话：0519-86888690&nbsp;周一到周六&nbsp;09:00-22:00&nbsp;&nbsp;苏ICP备19046182号-1</p>
      <p>版权所有©2016-2019&nbsp;常州怀南汇商务服务有限公司</p>
    </div>
  </div>
</template>

<script>
import eventBus from '~/pages/layout/eventBus'
export default {
  name: 'Footer',
  data () {
    return {
      data:'',
      aboutus:'',
      help:'',
      news:''
    }
  },
  mounted(){
     this.test()
  },
  methods:{
       goarticle(id){
     this.$router.push({
       path:'/information/information',
       query:{
         id:id
       }
     })
     },
      test(){
             let _this=this
                  let params = new URLSearchParams();
                    //  params.append("page",1);
                 this.$axios.get('/api/pc/index').then((res)=>{
                   
                   
                        this.aboutus=res.data.article['80']
                        this.help=res.data.article['66']
                        this.news=res.data.article['70']
                         eventBus.$emit('data',res.data.article)
                      
                  
                 })
               },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  width: 100%;
  height: 438px;
  overflow: hidden;
  min-width: 1200px;
  list-style:none ;
}
.footer ul li a{
  color: #8d8d8d;
;
}
.foot-t {
  width: 100%;
  height: 100px;
  background: rgb(245, 245, 245);
}
.foot-t ul {
  list-style:none ;
  width: 1200px;
  height: 100px;
  background: rgb(245,245,245);
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.foot-t ul li {
  float: left;
  height: 40px;
  margin-right: 42px;
}
.foot-t ul li:last-child {
  margin: 0;
}

.foot-t ul li i {
  float: left;
  width: 40px;
  height: 40px;
  margin-right: 9px;
}
.foot-t ul li p {
  float: right;
  width: auto;
  height: 40px;
  display: flex;
  flex-direction: column;
}
.foot-t ul li p span:nth-child(1) {
  font-size: 15px;
  color: rgb(116, 24, 27);
  font-weight: 800;
}
.foot-t ul li p span:nth-child(2) {
  font-size: 12px;
  color: #8d8d8d;
}
.foot-b {
  
  /* border-bottom: 1px rgb(245,245,245) solid; */
  box-sizing: border-box;
  /* padding: 30px 60px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 1200px;
  margin: 0 auto;
}
.foot-b ul {
  list-style:none ;
  float: left;
  padding: 0 71px;
  font-size: 10px;
  margin-top: 14px;
}
.foot-b ul:nth-child(1) {
  float: left;
  padding-left: 0;
}
.foot-b ul:last-child {
  float: right;
  padding: 0;
}
 .qr_phone {
   display: block;
   
   height: 100px;;
  /* float: right; */
  padding: 0;
  /* padding-left: 70px; */
  margin: 0;
}
  .qr_phone li{
  width: 150px;
}
.media li{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 150px;
}
.foot-b ul li {
  cursor: pointer;
  margin-bottom: 5px;
  font-size: 12px;
  color: #8d8d8d;
}
.foot-b ul li:first-child a{
  text-decoration:none;
  font-size: 15px;
  color: rgb(116, 24, 27);
  margin-bottom: 10px;
}
.foot-b ul li:hover a{
  color:rgb(116, 24, 27);
}
.foot-b ul li:last-child a{
  margin: 0;
}
.foot-b > span {
  width: 1px;
  height: 86px;
  content: "";
  border-right: 1px rgb(201, 201, 201) solid;
  float: left;
  margin-top: 17px;
}
 .qr_phone li {
  float:right;
  /* margin-right: 47px; */
   margin-left: 47px;
  text-align: center;
}
.qr_phone li:last-child {
  margin: 0;
}
.qr_phone li > i {
  margin-left: 60px;
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
   margin-left: 90px;
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
/* .foot-b .qr_phone li {
  float: left;
  margin-right: 47px;
  text-align: center;
}
.foot-b .qr_phone li:last-child {
  margin: 0;
}
.foot-b .qr_phone li > i {
 
  height: 123px;
  width: 40px;
  height: 40px;
  display: block;
  background:  url(../../static/img/android.png) no-repeat;
  background-size: 100% 100%;
}
.foot-b .qr_phone li span {
  color: rgb(201, 201, 201);
  font-size: 10px;
  display: block;
  line-height: 18px;
}
.foot-b .qr_phone li span i {
  display: inline-block;
  width: 16px;
  height: 18px;
  background: url(../../static/img/iphone.jpg) no-repeat;
  background-size: 100% 100%;
  margin-top: 1px;
}
.foot-b .qr_phone li:nth-child(2) span i {
  background: url(../../static/img/android.jpg) no-repeat;
}
.foot-b .qr {
  width: 126px;
  height: 126px;
  background: blanchedalmond;
  float: left;
} */
.foot {
  width: 100%;
  height: 100px;
  text-align: center;
  color: #8d8d8d;
  font-size: 11px;
  margin-top: 43px;
  box-sizing: border-box;
}
.foot p span{
  cursor: pointer;
}
.foot p span:hover{
 color: rgb(116, 24, 27)
}
</style>
<style scoped >
@import url('../../static/css/base.css');

</style>