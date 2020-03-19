<!--
 * @Description: vue
 * @Version: 2.0.1.003
 * @Author: 薛松田
 * @Date: 2020-01-06 15:58:32
 * @LastEditors: 薛松田
 * @LastEditTime: 2020-03-16 09:25:52
 -->
<template>
  <div>
    <el-carousel
      :interval="3000"
      height="500px"
      arrow="always"
      style="margin-top:2px;"
    >
      <el-carousel-item  v-for="(item,i) in carousel" :key='i'>
       
        <img  style='width:100%;height:100%;' :src='item.img'/>
      </el-carousel-item>
    </el-carousel>

    <ul class="list">
      <li @click="golist(item.id)" v-for="(item, i) in data" :key="i">
        <span
          ><a href="#key1">{{ item.name }}</a></span
        >
        <!-- //这是右边竖栏 -->
        <div
          style="width:60%;border-bottom: 1px solid #d0d0d0;margin:0 auto;"
        ></div>
      </li>

      <div
        style="width:60%;border-bottom: 1px solid #d0d0d0;margin:0 auto;"
      ></div>
      <li @click="gpserve()">
        <img src="../static/img/listen.jpg" alt="" /><span>在线客服</span>
      </li>
      <li>
        <img
          src="../static/img/up_arrow.png"
          alt=""
          style="margin:2px auto;"
        /><span class="topp">返回顶部</span>
      </li>
    </ul>
    <div class="content_box">
      <div class="content">
        <div class="team_kill">
          <h1>团购秒杀</h1>
          <div>
            <div>
              <img :src="datagroup.thumb" alt="" />

              <p>
                <span><i></i>限时团购</span>
                <span
                  >距本次团购结束 <i>{{ day }}</i
                  >天 <i>{{ hr }}</i
                  >时 <i>{{ min }}</i
                  >分 <i>{{ sec }}</i
                  >秒
                </span>
                
              </p>

              <a @click="go(1)"><button class="right_off">开团</button></a>
            </div>
            <div>
            
              <img :src="dataseckill.thumb" alt="" />

              <p>
                <span><i></i>限时秒杀</span>
                <span
                  >距本次秒杀结束 <i>{{days}}</i
                  >天 <i>{{ hrs }}</i
                  >时 <i>{{ mins }}</i
                  >分 <i>{{secs}}</i
                  >秒
                </span>
              </p>

              <a @click="go(2)"><button class="right_off">马上抢</button></a>
            </div>
          </div>
        </div>

        <!-- <div class="fz-30 fc-666">距离距截止购买时间{{day}}天{{hr}}:{{min}}:{{sec}}</div> -->
        <!-- <div style="width: 100%;height:auto;position:relative;">
                <ul class="goods_listf">
                    <li>
                        <p>
                            <img src="../static/img/home_1.jpg" alt="">
                        </p>
                    </li>
                    <li>
                        <p>
                            <img src="../static/img/home_1.jpg" alt="">
                        </p>
                    </li>
                    <li>
                        <p>
                            <img src="../static/img/home_1.jpg" alt=""> 
                        </p>
                    </li>
                </ul>
            </div> -->

        <!-- <div class="team_kill">
                <h1>团购秒杀</h1>
                <div>
                    <div>
                        <p>
                            <span><i></i>限时团购</span>
                            <span>距本次团购结束
                                <i>09</i>时
                                <i>09</i>分
                                <i>09</i>秒
                            </span>
                        </p>
                        <button class="right_off">马上抢</button>
                    </div>
                    <div>
                        <p>
                            <span><i></i>限时秒杀</span>
                            <span>距本次团购结束
                                <i>09</i>时
                                <i>09</i>分
                                <i>09</i>秒
                            </span>
                        </p>
                        <button class="right_off">马上抢</button>
                    </div>
                </div>
            </div> -->

        <div>
          <div
            class="content_c"
            id="key"
            v-for="(item, index) in data"
            :key="index"
          >
            <p @click="getlists(item.name, item.id, 1)">{{ item.name }}</p>
            <li class="prices">
              <span><a href="#">综合排序</a></span
              >&nbsp;&nbsp;

              <span
                ><a href="javascript:" @click="getlists(item.name, item.id, 1)"
                  >价格从低到高</a
                ></span
              >&nbsp;&nbsp;
              <span>
                <a href="javascript:" @click="getlists(item.name, item.id, 2)"
                  >价格从高到低</a
                ></span
              >
            </li>

            <div class="price_">
              <p><span>¥</span><input type="number" v-model="value1" /></p>
              <p>-</p>
              <p><span>¥</span><input type="number" v-model="value2" /></p>
              <!-- <div @click="getlistN()">确定</div> -->
              <div @click="getlists(item.name, item.id)">确定</div>
            </div>

            <p class="content_cp">
              <span
                v-for="(it, k) in datasceond[index]"
                :key="k"
                style="margin-left:20px;"
                @click="go_list(it.id, item.name, it.name)"
                >{{ it.name }}</span
              >&nbsp;&nbsp;&nbsp;<span>更多</span><span>></span>
            </p>
            <ul class="goods_list" style="width:1200px;overflow:hidden;">
              <li v-for="(im, f) in item.goodsList" :key="f">
                <p @click="godetail(im.gid, item.name)">
                  <img :src="im.thumb" alt="" />
                </p>

                <div class="information">
                  <p>{{ im.title }}</p>
                  <p><span>¥</span>{{ im.price }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="banner_h">
      <img class="show" src="../static/img/home_gift.jpg" alt="" />
    </div>

    <div class="banner_b">
      <img src="../static/img/close.png" class="hide" />
      <div class="getredbag" @click="goregist()">
        <img src="../static/img/banneropen.jpg" alt="" />
      </div>
      <!-- <a class='getredbag' href='javascript:'  @click='goregist()' >
                <img src="../static/img/banneropen.jpg" alt="">
            </a> -->
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import moment from "moment";
import axios from "axios";
import $ from "jquery";
export default {
  asyncData({params}) {
    //请求
    return axios({
      method: "get",
      url: "/api/pc/index"
    }).then(function(res) {
      console.log(res.data);
      // return { info: response.data };
      return{ dataseckill : res.data.seckill,
        datagroup : res.data.group,
       
        carousel:res.data.slide,
        data : res.data.category.first,
        datasceond :Object.values(res.data.category.second),
        // countdown();
        // countdowns()
        }
      error(params);
    });
  },

  name: "date",
  serverCacheKey() {
    // Will change every 10 secondes

    return Math.floor(Date.now() / 10000);
  },
  //   data () {
  //     return { date: Date.now() }
  //   },
  //  asyncData (context) {
  //     // debugger;
  //     // let parms = {
  //     //     page: 1,
  //     //     blogCatgId: '1'
  //     // }
  //     let[res1,res2] = await Promise.all([
  //         // 获取博客文章数据
  //         context.$axios.get('"/api/pc/index"')
  //         .then((res) => {
  //             return res
  //         }),
  //         // 获取友情连接数据
  //         // context.$axios.get('')
  //         // .then((res) => {
  //         //     return res
  //         // }),
  //     ])

  //     return{
  //         // blogList : res1.data,
  //         // blogTotal : res1.total * 1,
  //         // friendList : res2.data,
  //     }
  // },

  //       name: 'cache',
  //   serverCacheKey () {
  //     // Will change every 10 secondes
  //     return Math.floor(Date.now() / 1000)
  //   },

  // serverCacheKey: props => props.id,
  mounted() {
    this.test();
    //  this.countdown();
    //  this.countdowns();
  
    $(function() {
      var pcontent_right_height = $(".list").offset().top;
      $(window).scroll(function() {
        if ($(window).scrollTop() < 500) {
          $(".list").attr("style", "visibility:hidden;");
        } else if (
          $(window).scrollTop() > pcontent_right_height ||
          pcontent_right_height >= 500
        ) {
          $(".list").attr("style", "visibility:visible;");
        } else {
          $(".list").attr("style", "visibility:hidden;");
        }
      });
      $(".topp").click(function() {
        $("body,html").animate({ scrollTop: 0 }, 800);
        return false;
      });

      $(".hide").click(function() {
        $(".banner_b").animate({ right: 1920 }, 800);
      });
      $(".show").click(function() {
        $(".banner_h").animate({ left: -8 }, 100);
        $(".banner_b").animate({ right: 0 }, 800);
      });
    });
  },
  data() {
    return {
      m:'',
      day: 0, //天
      hr: 0, //时
      min: 0, //分
      sec: 0, //秒
      days: 0, //天
      hrs: 0, //时
      mins: 0, //分
      secs: 0, //秒
     
      dataseckill: "",
      datagroup: "",
      datasceond: "",
      carousel:[],
      data: "",
      value1: "",
      value2: "",
      datalistt: "",
      date: Date.now(),
      goods: "",
      id: [],
      datalist: {},
      datalistf: {},

      cache: Date.now(),
      // 博客列表数据
      blogList: [],
      // 博客总条数
      blogTotal: 0,
      // 友情链接数据
      friendList: []
    };
  },

  beforeDestroy() {
    clearInterval(this._interval);
    clearInterval(this.interval);
  },
 
  methods: {
    //倒计时
    countdown() {
      const end = Date.parse(new Date(this.datagroup.endTime));
      const now = Date.parse(new Date());
      const msec = end - now;
      //  console.log(this.datagroup.endTime)
      let day = parseInt(msec / 1000 / 60 / 60 / 24);
      let hr = parseInt((msec / 1000 / 60 / 60) % 24);
      let min = parseInt((msec / 1000 / 60) % 60);
      let sec = parseInt((msec / 1000) % 60);
      this.day = day;
      this.hr = hr > 9 ? hr : "0" + hr;
      this.min = min > 9 ? min : "0" + min;
      this.sec = sec > 9 ? sec : "0" + sec;
      const that = this;
      this._interval = setTimeout(function() {
        that.countdown();
      }, 1000);
    },
    countdowns() {
   
      const endf = Date.parse(new Date(this.dataseckill.endTime));
      const nowf = Date.parse(new Date());
      const msecf = endf - nowf;
      // console.log(this.dataseckill.endTime)
      let day = parseInt(msecf / 1000 / 60 / 60 / 24);
      let hr = parseInt((msecf / 1000 / 60 / 60) % 24);
      let min = parseInt((msecf / 1000 / 60) % 60);
      let sec = parseInt((msecf / 1000) % 60);
      this.days = day;
      this.hrs = hr > 9 ? hr : "0" + hr;
      this.mins = min > 9 ? min : "0" + min;
      this.secs = sec > 9 ? sec : "0" + sec;
      const that = this;
      this.interval = setTimeout(function() {
        that.countdowns();
      }, 1000);
      
      
    },

    goregist() {
      console.log(localStorage.getItem("token") + "777777777");
      console.log("14444444");
      if (localStorage.getItem("logins") != 1) {
        console.log("4444..........");
        this.$router.push("/login/login");
      }
    },

    gpserve() {
      let a = window.location.href;
      console.log(window.location.href);
      let tmp = '{"ww":"' + encodeURIComponent(a) + '"}';
      window.location =
        "https://chat.sobot.com/chat/pc/v2/index.html?sysnum=e772a07377c14e239174ee712efa2647&params=" +
        tmp;
    },
    getStyle(item, i) {
      console.log(i);
    },
    godetail(gid, name) {
      console.log(name + "9999999999999");
      this.$router.push({
        name: "goods-goodsdetail",
        query: {
          tag: 4,
          gid: gid,
          name: name
        }
      });
    },
    go(a) {
      if (a == 1) {
        this.$router.push({ path: "/group/grouplist" });
      }
      if (a == 2) {
        this.$router.push({ path: "/seckill/seckill" });
      }
    },
    go_list(id, name, s) {
      this.$router.push({
        path: "/goods/goodslist",
        query: {
          categoryId: id,
          name: name,
          names: s
        }
      });
    },
    golist(id) {
      this.$router.push({
        path: "/goods/goodslist",
        query: {
          categoryId: id,
          sort: "",
          priceRange: ""
        }
      });
    },

    getlists(name, id, sort) {
      let temp = this.value1 + "_" + this.value2;
      this.$router.push({
        path: "/goods/goodslist",
        query: {
          name: name,
          categoryId: id,
          sort: sort,
          priceRange: temp
        }
      });
    },

    test() {
      let _this = this;
      let params = new URLSearchParams();
      //  params.append("page",1);
      this.$axios.get("/api/pc/index").then(res => {
        this.dataseckill = res.data.seckill;
        this.datagroup = res.data.group;
       
        this.carousel=res.data.slide
        this.data = res.data.category.first;
        this.datasceond = Object.values(res.data.category.second);
        this.countdown();
        this.countdowns();
      });
    }
  },
  components: {
    Logo
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
img {
  vertical-align: top;
  border: none;
}
a {
  text-decoration: none;
  outline: none;
  color: #8d8d8d;
}
i {
  font-style: normal;
}
input {
  outline: 0;
  border: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
/* 内容 */
.content {
  min-height: 600px;
  width: 1200px;
  margin: 0 auto;
}
.content-l {
  width: 100%;
  height: auto;
  overflow: hidden;
}
.content-l p {
  font-size: 12px;
  margin-top: 20px;
  color: #8d8d8d;
  margin-bottom: 24px;
}
.content-l p a:hover {
  color: #74171b;
}

.price {
  height: 40px;
  float: left;
  display: flex;
  flex-direction: row;
}
.price p:nth-child(1),
.price p:nth-child(3) {
  width: 50px;
  height: 20px;
  border: 1px #e9e9e9 solid;
  background: #fff;
  padding: 0 1px;
  box-sizing: border-box;
  display: block;
  margin-top: 10px;
}
.price p:nth-child(2) {
  font-size: 10px;
  margin: 0 2px;
  color: #8d8d8d;
}
.price p span {
  float: left;
  height: 18px;
  line-height: 18px;
  font-size: 10px;
  color: #8d8d8d;
  margin: 0 2px;
}
.price p input {
  width: 32px;
  padding: 0 2px;
  box-sizing: border-box;
  height: 18px;
  font-size: 12px;
  float: left;
  color: #8d8d8d;
}
/* 物品列表 */
.goods_list {
  width: 100%;
  height: auto;
  margin-top: 30px;
  margin-bottom: 104px;
  overflow: hidden;
}
.goods_list li {
  width: 234px;
  height: 344px;
  margin: 0 7px 16px 0;
  border: 1px #e9e9e9 solid;
  box-sizing: border-box;
  float: left;
}
.goods_list li:nth-child(5n) {
  margin-right: 0;
}
.goods_list li > p:nth-child(1) {
  width: 232px;
  height: 232px;
  background: cadetblue;
  background-size: 100% 100%;
}
.goods_list li .information {
  height: 80px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px #e9e9e9 solid;
}
.information p:nth-child(1) {
  font-size: 12px;
  margin-bottom: 15px;
}
.information p:nth-child(2) {
  font-size: 18px;
  color: #de0812;
  font-weight: 600;
  margin-top: -20px;
}
.information p:nth-child(2) span {
  font-size: 8px;
}
.appraise {
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  box-sizing: border-box;
}
.appraise p {
  color: #8d8d8d;
  font-size: 12px;
  float: left;
}
.appraise p:nth-child(2) {
  float: right;
}
.appraise p > span {
  color: #de0812;
}
.pages {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 120px;
}
.pages p {
  width: 33px;
  height: 33px;
  border: 1px #e9e9e9 solid;
  line-height: 33px;
  text-align: center;
  margin-right: 4px;
  color: rgb(121, 121, 121);
  float: left;
}
.pages p:nth-child(2),
.pages p:hover {
  background: rgb(116, 24, 27);
  color: white;
}
.pages p:last-child {
  margin: 0;
  width: 58px;
}
</style>
<style>
li {
  list-style: none;
}
.list {
  width: 120px;
  height: auto;
  position: fixed;
  right: 90px;
  top: 30%;
  background: white;
  text-align: center;
  z-index: 100;
  padding: 0;
}
/* .list li:first-child{height:30px;} */
.list li {
  line-height: 28px;
  text-align: center;
  cursor: pointer;
}
.list li:hover {
  background: rgb(116, 24, 27);
  color: white;
}
.list li:hover a {
  color: white;
}
.list li span {
  font-size: 14px;
  line-height: 28px;
}
.list li img:nth-child(1) {
  margin: 5px 5px 0px -19px;
}
.list li img:nth-child(2) {
  margin: 0 auto;
}
.list li:last-child {
  display: flex;
  flex-direction: column;
  height: 45px;
  line-height: 20px;
  padding-bottom: 10px;
}
.hide {
  position: absolute;
  top: 10px;
  left: 20px;
}
.banner_h {
  z-index: 1000;
  position: fixed;
  bottom: -8px;
}
.banner_b {
  z-index: 1000;
  position: fixed;
  bottom: -8px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 800px;
  margin: 20px 0 0 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
<style scoped>
@import url("../static/css/base.css");
</style>
<style scoped>
.goods_list li .information {
  border-bottom: 0;
}
.goods_list {
  height: 360px !important;
}
</style>
