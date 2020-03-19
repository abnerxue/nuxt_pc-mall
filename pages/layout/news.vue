<template>
  <div class="news">
    <div class="news_box">
      <div class="new_l">
        <div class="new_title">
          <p>媒体报道</p>
          <p>更多></p>
        </div>
        <div class="new_content">
          <el-carousel :interval="3000" height="200px" arrow="always">
    <el-carousel-item >
      
      <img src='../../static/img/yushi.jpg' style='height:100%;width:100%;'>
    </el-carousel-item>
       <el-carousel-item >
      
      <img src='../../static/img/feicui.jpg' style='height:100%;width:100%;'>
    </el-carousel-item>
  </el-carousel>
          <!-- <div class="layui-carousel" id="test1" style="background:none">
            <div carousel-item style="background:none">
              <div style="background:none">
                <a href="/article_list.html">
                  <img src="../../static/img/feicui.jpg" class="news_img" />
                </a>
              </div>
              <div style="background:none">
                <a href="/article_list.html">
                  <img src="../../static/img/yushi.jpg" class="news_img" />
                </a>
              </div>
            </div>
          </div> -->
        
        </div>
      </div>
      <div class="new_r">
        <div class="new_title">
          <p>怀南会资讯</p>
          <p>更多></p>
        </div>
        <div class="new_content">
          <ul>
            <li>百科资讯</li>
           <li v-for='(item,i) in  this.bk' :key='i' @click='goarticle(item.id)'><a>{{item.title}}</a></li>
          </ul>
          <ul>
            <li>珠宝知识</li>
           
            <li v-for='(item,i) in  this.zb' :key='i' @click='goarticle(item.id)'><a>{{item.title}}</a></li>
         
          </ul>
          <ul>
            <li>问答</li>
            <li v-for='(item,i) in  this.answer' :key='i' @click='goarticle(item.id)'><a>{{item.title}}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from '~/pages/layout/eventBus'
export default {
  name: "news",
  data() {
    return {
     data:'',
     zb:'',
     bk:'',
     answer:''
    };
  },
  methods:{
     goarticle(id){
     this.$router.push({
       path:'/information/information',
       query:{
         id:id
       }
     })
     }
  },
  mounted() {
     eventBus.$on('data',(message=>{
       this.data=message
       this.bk=this.data['86']
       this.zb=this.data['72']
       this.answer=this.data['75']
       console.log(this.data)
     }))
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.news {
  height: 393px;
  width: 100%;
  background: rgb(245, 245, 245);
  margin-bottom: 23px;
  overflow: hidden;
  box-sizing: border-box;
  min-width: 1200px;
}
.news .news_box {
  width: 1200px;
  margin: 42px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: rgb(245, 245, 245);
}
.news_box .new_l {
  width: 384px;
  height: 310px;
  background: white;
  padding: 7px 14px 0 14px;
  box-sizing: border-box;
}
.new_l .new_title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 44px;
  line-height: 44px;
  border-bottom: 1px #f5f5f5 solid;
  font-weight: 800;
}
.new_l .new_title p:nth-child(1) {
  color: rgb(116, 24, 27);
  font-size: 18px;
}
.new_l .new_title p:nth-child(2) {
  color: rgb(116, 24, 27);
  font-size: 12px;
}
.new_l .new_content {
  width: 100%;
  padding: 25px 0;
  height: 256px;
  box-sizing: border-box;
}
.new_l .new_content p:nth-child(1) {
  width: 180px;
  height: 136px;
  float: left;
  margin-right: 14px;
  background: burlywood;
}
.new_l .new_content p:nth-child(2) {
  width: 158px;
  height: 136px;
  float: left;
}
.new_l .new_content p:nth-child(2) span:nth-child(1) {
  font-size: 14px;
  color: rgb(19, 3, 3);
  display: inline-block;
  margin-bottom: 8px;
}
.new_l .new_content p:nth-child(2) span:nth-child(2) {
  font-size: 12px;
  color: #8d8d8d;
}
.new_l .new_bottom {
  width: 100%;
  height: 16px;
  float: left;
  text-align: center;
  margin-top: 42px;
}
.news_img {
  width: 100%;
  height: 100%;
}
#test1 .layui-carousel-ind ul {
  background: none;
}
#test1 .layui-carousel-ind ul:hover {
  background: none;
}
#test1 .layui-carousel-ind li {
  width: 16px;
  height: 16px;
  display: inline-block;
  background: #eaeaea;
  border-radius: 50%;
}
#test1 .layui-carousel-ind li.layui-this {
  background: rgb(116, 24, 25);
}
#test1 .layui-carousel-ind li:hover {
  background: rgb(116, 24, 25);
}
.new_r {
  width: 805px;
  height: 310px;
  background: white;
  padding: 7px 25px 0 25px;
  box-sizing: border-box;
}
.new_r .new_title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 44px;
  line-height: 44px;
  border-bottom: 1px #f5f5f5 solid;
  font-weight: 800;
}
.new_r .new_title p:nth-child(1) {
  color: rgb(116, 24, 25);
  font-size: 18px;
}
.new_r .new_title p:nth-child(2) {
  color: rgb(116, 24, 25);
  font-size: 12px;
}
.new_r .new_content {
  width: 100%;
  padding: 25px 0;
  height: 256px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.new_r .new_content ul {
  width: 220px;
}
.new_r .new_content ul li {
  cursor: pointer;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  line-height: 27px;
}
.new_r .new_content ul li a {
  color: #8d8d8d;
}
.new_r .new_content ul li a:hover {
  color: rgb(116, 24, 27);
}
.new_r .new_content ul li:nth-child(1) {
  color: rgb(27, 5, 6);
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 7px;
}
.layui-carousel > [carousel-item]:before {
  display: none;
}
</style>
