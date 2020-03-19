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
            <!-- <a href="<?php echo userUrl($this->user, '/index.html'); ?>" title="首页">首页</a> -->
          
        </p>
    </div>
    <div class="g_top">
        <div class="component_left f_l gt_left">
            <div class="big_pic">

				<div class="tags">
					<!-- <h2 class="tag<?php echo $activity;?>"></h2> -->
				</div>

                <img id="big_pic" width="444" height="484" :src="datalist.thumb">
                 <!-- <img id="big_pic" width="484" height="484" :src="datalist.imgs"> -->
                <a  class='video'><img src="../../static/img/player.png" alt=""></a>
            </div>

            <div class='video_' style="display:none;">
                <video  autoplay="autoplay"  controls="controls" height='100%' width='100%' :src='datalist.video'></video>
            </div>

            <div class="pic_hidden" style='width:400px;height:71px;margin-top:500px;'>
                <div class="small_pic word" id="small_pic" style="width:400px;height: 58px;">
                    <ul class="pic_move">

						<li class="ware_pic_hover" style="float: left;width: 75px;height: 75px;" v-for='(item,i) in datalist.imgs' :key='i'>
							<img style="width: 58px;height: 58px;" data="" :src="item" /> 
                        
						</li>

                    </ul>
                </div>
            </div>
        </div>
        <div class="gt_right">
            <p></p>
          <div v-if='tag==1'>
              <div v-if='datalist!=""'>
                       <div class="teambuy">
                    <p><i></i>限时团购</p>
                    <p>距该商品结束还剩：
                        <span id="timebox0">   <span id="timebox0">{{days}}天{{hrs}}小时{{mins}}分{{secs}}秒</span></span>
                    </p>
                </div>


                   <div class="pt_list">
                    <div class='no_order' v-if='datagroup==""'> 
                        <img src="../../static/img/noOrder.jpg" alt />
            <p>当前还没有人发起拼团哦，<br>从我开始吧！</p></div>
                    <ul class="ull">

						<li v-for='(item,i) in datagroup' :key='i'> 用户：<span><img :src="item.avatar"/>{{item.userName}}</span><i>&nbsp;&nbsp;&nbsp;</i>发起团购，距离结束还有
                        <span >{{item.time}}</span> ,还差{{item.goodsNum-item.joinNum}}人拼成。 <span @click='join(item.id)'>参与拼团</span></li>

                    </ul>
					<div class="team_w">
                    </div>
                </div>


                     <div class="g_buy">
                    <button class="buy" click="buy(<?php echo $gid;?>, $('#quantity').text())">购买</button>
                    <button class="joincart" @click='add_group()'>拼团</button>
                  
                </div>
                 <p> {{datalist.title}}</p>
                <div class="g_detail">
                    <p>
                        <span>价格</span>
                <span><i>¥</i>{{dataactive.price}}</span>
                        <del><i>{{datalist.price}}</i></del>
                    </p>
                    <p>
                        <span>运费</span>
                        <span><i>满免</i>满 元免运费</span>
                    </p>
                    <p>
                        <span>配送</span>
                        <span>预计1-3个工作日内发货</span>
                    </p>
                    <p>
                        <span>服务</span>
                        <span>支持七天无理由退换</span>
                    </p>
                    <div class="team_w">
                   
                    </div>
                </div>
                 
              </div>
                  
              </div>

    <div v-if='tag==2'>
          <div class="teambuy">
                    <p><i></i>限时秒杀</p>
                    <p>距该商品结束还剩：
                        <span id="timebox0">{{day}}天{{hr}}小时{{min}}分{{sec}}秒</span>
                    </p>
                </div>
          <div class="g_detail">
                 
                    <p>
                        <span>价格</span>
                        <span><i>¥</i>{{dataseckill.price}}</span>
                        <del><i>¥</i>{{datalist.price}}</del>
                    </p>
                    <p>
                        <span>运费</span>¥{{datalist.postage}}
                        <span><i>满免</i>满 元免运费</span>
                    </p>
                    <p>
                        <span>配送</span>
                        <span>预计1-3个工作日内发货</span>
                    </p>
                    <p>
                        <span>服务</span>
                        <span>支持七天无理由退换</span>
                    </p>
                    <div class="team_w">
                   
                    </div>
                </div>
        <div class="g_number">
                <p>数量</p>
                <el-input-number v-model="num" @change="handleChange" :min="1" :max="1000" label="描述文字"></el-input-number>
			
            </div>
                <div class="g_buy">
                    <button class="buy"  @click="buyseckill()">立即秒杀</button>
                  
                </div>
    </div>
   
     <div v-if='tag==3'>
              <div v-if='datalist!=""'>
                       <div class="teambuy">
                    <p><i></i>限时竞价</p>
                    <p>距该商品结束还剩：
                        <span id="timebox0">   <span id="timebox0">{{dayj}}天{{hrj}}小时{{minj}}分{{secj}}秒</span></span>
                    </p>
                </div>


                   <div class="pt_list">
                    <div class='no_order' v-if='datalista==null'> 
                        <img src="../../static/img/noOrder.jpg" alt />
            <p>当前还没有人发起拼团哦，<br>从我开始吧！</p></div>
                    <ul class="ull">

						<li v-for='(item,i) in datalista' :key='i'> 用户：<span><img :src="item.avatar"/>{{item.userName}}</span><i>&nbsp;&nbsp;&nbsp;</i>发起团购，距离结束还有
                        <span >{{item.time}}</span> ,还差{{item.goodsNum-item.joinNum}}人拼成。 <span @click='join(item.id)'>参与拼团</span></li>

                    </ul>
					<div class="team_w">
                    </div>
                </div>


                     <div class="g_buy">
                    <button class="buy" click="buy(<?php echo $gid;?>, $('#quantity').text())">购买</button>
                    <button class="joincart" @click='add_group()'>拼团</button>
                  
                </div>
                 <p> {{datalist.title}}</p>
                <div class="g_detail">
                    <p>
                        <span>价格</span>
                <span><i>¥</i>{{dataactive.price}}</span>
                        <del><i>{{datalist.price}}</i></del>
                    </p>
                    <p>
                        <span>运费</span>
                        <span><i>满免</i>满 元免运费</span>
                    </p>
                    <p>
                        <span>配送</span>
                        <span>预计1-3个工作日内发货</span>
                    </p>
                    <p>
                        <span>服务</span>
                        <span>支持七天无理由退换</span>
                    </p>
                    <div class="team_w">
                   
                    </div>
                </div>
                 
              </div>
                  
              </div>
   
      <!-- <div v-if='tag==3'>
            <div class="g_detail">
                    <p>
                        <span>价格</span>
                        <span><i>¥</i></span>
                        <del><i>¥</i></del>
                    </p>
                    <p>
                        <span>运费</span>
                        <span><i>满免</i>满 元免运费</span>
                    </p>
                    <p>
                        <span>配送</span>
                        <span>预计1-3个工作日内发货</span>
                    </p>
                    <p>
                        <span>服务</span>
                        <span>支持七天无理由退换</span>
                    </p>
                    <div class="team_w">
                   
                    </div>
                </div>
            <div class="g_number">
                <p>数量</p>
                <p>
                    <span class="reduce">-</span>
                    <span class="num" id="quantity">1</span>
                    <span class="plus">+</span>
                </p>
				<p>库存： ? '' : '&nbsp;&nbsp;&nbsp;&nbsp;待付款的数量：'</p>
            </div>
                <div class="g_buy">
                    <button class="buy" onclick="add_bargain()">分享获得(￥)</button>
                  
                </div>
      </div> -->


 <div v-if='tag==4'>
     <p> {{datalist.title}}</p>
        <div class="g_detail">
                    <p>
                        <span>价格</span>
                        <span><i>¥</i> {{datalist.price}}</span>
                        <!-- <del><i>¥</i></del> -->
                    </p>
                    <p>
                        <span>运费</span>
                        <span><i>满免</i>满 元免运费</span>
                    </p>
                    <p>
                        <span>配送</span>
                        <span>预计1-3个工作日内发货</span>
                    </p>
                    <p>
                        <span>服务</span>
                        <span>支持七天无理由退换</span>
                    </p>
                    <div class="team_w">
                   
                    </div>
                </div>
        <div class="g_number">
                <p>数量</p>&nbsp;&nbsp;&nbsp;
              
                 <el-input-number v-model="num" @change="handleChange" :min="1" :max="1000" label="描述文字"></el-input-number>
				
            </div>
               
                </div> 

                <div class="g_buy" v-if='tag==4'>
                   
                      <button class="buy" @click="buy(datalist.gid)">立即购买</button>
                    <button class="joincart"  @click="add_cart(datalist.gid)">加入购物车</button>
                </div>
 </div>

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
        <detail :datalist="datalist" @to-parent="getData"  :recommend='recommend' @goodf="goodf" :data='data' />
    </div>
   
   
      

   



    <div class="report">
        <p>
            <i></i>
            <span>千年古刹&nbsp;高僧加持</span>
            <i></i>
        </p>
        <div>
            <a href="/article/2206.html"><img src="../../static/img/report.jpg" alt=""></a>
        </div>
    </div>
    <div class="report">
        <p>
            <i></i>
            <span>中国人保&nbsp;品质保证</span>
            <i></i>
        </p>
        <div>
        <a href="/article/2249.html"><img src="../../static/img/insure.jpg" alt=""></a>
        </div>
    </div>

</div>
   
</template>
<script>

import $ from'jquery'
import detail from '~/pages/goods/detail'
export default {
    	inject:["reload"],
    components:{
        detail
    },
    data(){
        return{
              day: 0, //天
      hr: 0, //时
      min: 0, //分
      sec: 0, //秒
      days: 0, //天
      hrs: 0, //时
      mins: 0, //分
      secs: 0, //秒
       dayj: 0, //天
      hrj: 0, //时
      minj: 0, //分
      secj: 0, //秒
            cut:'',
           data:'',
          recommend:'',//这个也要传子组件
            gid:'',
            num:'',
            datagroup:'',
            dataactive:'',
            datalist:'',
             datalista:'',
             datalists:'',
             datalistj:'',
             dataseckill:'',
        tag:2
        }
    },
      beforeDestroy() {
    clearInterval(this._interval);
    clearInterval(this.interval);
  },
    methods:{
           countdowns() {
    if(this.dataseckill.endTime!=''){
        // console.log(this.dataactive.endTime)
          const endf = Date.parse(new Date(this.dataactive.endTime));
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
    }
    },
           countdown() {
      if(this.dataseckill.endTime!=''){
             const end = Date.parse(new Date(this.dataactive.endTime));
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
      }
    },
      countdownj() {
           console.log(this.datalistj.endTime+'52222222222222222222220')
      if(this.datalists.endTime!=undefined){
          console.log(this.datalistj.endTime+'2222222222222222222220')
             const end = Date.parse(new Date(this.datalistj.endTime));
      const now = Date.parse(new Date());
      const msec = end - now;
      //  console.log(this.datagroup.endTime)
      let day = parseInt(msec / 1000 / 60 / 60 / 24);
      let hr = parseInt((msec / 1000 / 60 / 60) % 24);
      let min = parseInt((msec / 1000 / 60) % 60);
      let sec = parseInt((msec / 1000) % 60);
      this.dayj = day;
      this.hrj = hr > 9 ? hr : "0" + hr;
      this.minj = min > 9 ? min : "0" + min;
      this.secj = sec > 9 ? sec : "0" + sec;
      const that = this;
      this._interval = setTimeout(function() {
        that.countdownj();
      }, 1000);
      }
    },
        join(id){
                let _this=this
                      console.log(localStorage.getItem('token'))
               if(localStorage.getItem('login')==1){
                  this.$router.push({
                          path:'/order/order',
                          query:{
                            //   serialNumber:res.data.serialNumber,
                              num:this.num,
                              groupGoodsId:id,
                              tag:1,
                              tags:0
                          }
                      })
               }else{
                    this.$router.push({
                        path:'/login/login',
                        query:{
                             route:'/goods/goodsdetail',
                             id:this.dataactive.id,
                             tag:1,
                             
                        }
                    })
                              this.$message({
          message: '您还没有登录，请您先登录',
          type: 'warning',
          offset:'400'
        });
               }
        },
        add_group(){
           
                 let _this=this
                      console.log(localStorage.getItem('token'))
               if(localStorage.getItem('login')==1){
                  this.$router.push({
                          path:'/order/order',
                          query:{
                            //   serialNumber:res.data.serialNumber,
                              num:this.num,
                              groupGoodsId:this.dataactive.id,
                              tag:1
                          }
                      })
               }else{
                    this.$router.push({
                        path:'/login/login',
                        query:{
                             route:'/goods/goodsdetail',
                             id:this.dataactive.id,
                             tag:1
                        }
                    })
                              this.$message({
          message: '您还没有登录，请您先登录',
          type: 'warning',
          offset:'400'
        });
               }
        },
        // 	handleClick(tab, event){
        //         console.log(tab, event+'5555555555555')
		// 	// if(tab.index==2){
        //     //        let _this=this
               
        //     //      this.$axios.get('/index.php/api/goods/comment_list?gid='+this.gid+'&&sort='+2).then((res)=>{
        //     //          this.data=res.data
                      
        //     //      })
        //     // }
		// },
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
               goodf(value,value2){
                   console.log(value,value2+'7777777777777777777777')
			 
             let _this=this
                
               	if(value==1){
                   let _this=this
               
                 this.$axios.get('/index.php/api/goods/comment_list?gid='+this.gid+'&&sort='+2+'&&page='+value2+'&&span='+'5').then((res)=>{
                     this.data=res.data
                      
                 })
            }
               },
         getcomment(){
			 
             let _this=this
               
                 this.$axios.get('/index.php/api/goods/comment_list?gid='+this.gid+'&&span='+'5').then((res)=>{
                     this.data=res.data
                      
                 })
               },
        getData(value){//value从哪来啊
            console.log(value);
            this.$router.push({
					  name:'goods-goodsdetail',
					  query:{
						  gid:value,
						//   d:new Date(),
						  tag:4
					  }

				})//页面没跳转
				// this.reload();
        },
        handleChange(){},
        gorecommend(gid){
                  this.$axios.get('/api/goods/detail?gid='+gid).then((res)=>{
                     this.datalist=res.data.goods
                   console.log(res.goods)
                 })
            },
        
         
                 test() {
      let _this = this;
      let params = new URLSearchParams();
      //  params.append("page",1);
      this.$axios.get("/api/pc/index").then(res => {
        // this.dataseckill = res.data.seckill;
        // this.datagroup = res.data.group;
        // console.log(this.dataseckill + "000000000000");
        let carousel = new Array();
        this.datalista = res.data.category.first;
        // this.datasceond = Object.values(res.data.category.second);
        // console.log(this.datasceond+'77000000000000')
      
      });
    },
        add_cart(gid){
                     let _this=this
                  let params = new URLSearchParams();
                     params.append("token",localStorage.getItem('token'));
                     params.append("gid",gid);
                      params.append("number",this.num);
                 this.$axios.post('/api/cart/alter',params).then((res)=>{
                   console.log(res)
                      this.$message({
          message: res.data.message,
          type: 'warning',
          offset:'400'
        });
                         if(res.data.login==0){
                             this.$router.push({                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                                 path:'/login/login'
                             })
                         }

                 })
        },
             buyseckill(){
                      let _this=this
                      console.log(localStorage.getItem('login')+111111111111111)
               if(localStorage.getItem('login')==1){
                  this.$router.push({
                          path:'/order/order',
                          query:{
                             tag:2,
                              num:this.num,
                             id:this.$route.query.id
                          }
                      })
               }else{
                   this.$router.push({
                        path:'/login/login',
                        query:{
                         route:'/goods/goodsdetail',
                         id:this.$route.query.id,
                         tag:2
                        }
                    })
                              this.$message({
          message: '您还没有登录，请您先登录',
          type: 'warning',
          offset:'400'
        });
               }
        },
        buy(gid){
                      let _this=this
                      console.log(localStorage.getItem('token'))
               if(localStorage.getItem('token')!=null){
                  this.$router.push({
                          path:'/order/order',
                          query:{
                            //   serialNumber:res.data.serialNumber,
                              num:this.num,
                              gid:this.datalist.gid,
                              tag:4
                          }
                      })
               }else{
                    this.$router.push({
                        path:'/login/login',
                        query:{
                             route:'/goods/goodsdetail',
                             gid:this.datalist.gid,
                             tag:4
                        }
                    })
                              this.$message({
          message: '您还没有登录，请您先登录',
          type: 'warning',
          offset:'400'
        });
               }
        },
          private (mss) {
              console.log(mss+"=======================")
    let days = Math.floor(mss / (60 * 60 * 24));
    let hours = Math.floor((mss % ( 60 * 60 * 24)) / ( 60 * 60));
    let minutes = Math.floor((mss % (60 * 60)) / ( 60));
    let seconds = Math.round((mss % ( 60)));
    return days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒";
          },

  
        show(){
            this.gid=this.$route.query.gid//所以这个赋值不能在父的mouted,应该早点
             this.tag=this.$route.query.tag
            if(this.$route.query.tag==1){
                 this.$axios.get('/api/group/group_goods_detail?groupGoodsId='+this.$route.query.id+'&token='+localStorage.getItem('token')).then((res)=>{
                     this.datalist=res.data.goods;
                     this.dataactive=res.data.groupGoods;
                    //  this.datagroup=Object.values(res.data.initiateList[0]);
                    res.data.initiateList.forEach(i => {
                          i.time=this.private(i.timeRemaining)
                    });
                        this.datagroup=Object.values(res.data.initiateList);
                    //  res.data.initiateList[0].timeRemaining=this.private(res.data.initiateList[0].timeRemaining)
                    //  console.log(res.data.initiateList[0].timeRemaining+"==============");
                //    console.log(JSON.stringify(this.datalist)+'............')
                 })
                  this.$axios.get('/api/group/initiate_details?initiateId='+this.$route.query.id).then((res)=>{
                    //  this.datalist=res.data.goods
                    //  this.dataactive=res.data.groupGoods

                    
                //    console.log(JSON.stringify(res.data)+'...22222........')
                 })
                     

            } else if(this.$route.query.tag==2){
                this.gid=this.$route.query.gid
                       this.$axios.get('/api/seckill/detail?seckillId='+this.$route.query.id+'&token='+localStorage.getItem('token')).then((res)=>{
                     this.datalist=res.data.goods
                     this.dataseckill=res.data.seckillGoods
                   console.log(res.goods)
                 })
            } else if(this.$route.query.tag==3){
                       this.$axios.get('/api/auction/detail?auctionId='+this.$route.query.id+'&token='+localStorage.getItem('token')).then((res)=>{
                     this.datalist=res.data.goods
                     this.datalistj=res.data.auctionGoods
                   console.log(this.datalistj.endTime+'this.datalists')
                 })

                      this.$axios.get('/api/auction/bidding_list?aid='+this.$route.query.id+'&token='+localStorage.getItem('token')+'&page='+1+'&span='+20).then((res)=>{
                     this.datalista=res.data.list
                   console.log(res.goods)
                 })
            }else if(this.$route.query.tag==4){
                       this.$axios.get('/api/goods/detail?gid='+this.$route.query.gid+'&token='+localStorage.getItem('token')).then((res)=>{
                     this.datalist=res.data.goods
                   console.log(res.goods)
                 })
            }
        },
      
        getlist(){
            if(this.$route.query.tag==1){
                       this.$axios.get('/api/group/initiate_details?initiateId='+this.$route.query.gid).then((res)=>{
                     this.datalist=res
                   console.log(res.goods)
                 })
            }
            
        },
        recommend_goods(gid){
              let _this=this
                  let params = new URLSearchParams();
                     params.append("gid",gid);
                 this.$axios.post('/api/goods/recommend').then((res)=>{
                     _this.recommend=res.data 
                  
    })
    }
    },
        
 mounted(){
     this.countdown()
       this.countdowns()
        this.countdownj()
     console.log(JSON.stringify(this.$route.query))
     this.test()
     this.recommend_goods()
 
     this.show(),
     this. getcomment()
            //    recommend_goods(<?php echo $gid;?>);
	//获取推荐商品的函数
	// function recommend_goods(gid){
	// 	$.post(
	// 		"/index.php/goods/recommend_goods/" + gid + '.html?t=' + Math.random(0),
	// 		{},
	// 		function (result) {
	// 			var html_str = '';
	// 			for (i = 0; i < result.length; i++) { 
	// 				html_str += '<li>';
	// 				html_str += '<a href="' + result[i].url + '" class="deal_img">';
	// 				html_str += '<img src="' + result[i].thumb + '">';
	// 				html_str += '</a>';
	// 				html_str += '<a href="' + result[i].url + '" class="deal_title">' + result[i].title + '</a>';
	// 				html_str += '<div class="deal_info">';
	// 				html_str += '<span class="deal_price f_l">';
	// 				html_str += '<span class="current_price"><i>¥</i>' + result[i].price + '</span>';
	// 				html_str += '</span>';
	// 				html_str += '<span class="sale_count f_r">';

	// 				html_str += '</span>';
	// 				html_str += '</div>';
	// 				html_str += '</li>';
	// 			}
	// 			$('#favdeal_list').html(html_str);
	// 		},
	// 		"json"
	// 	);
	// }
	//获取评论列表的函数
	function comment_list(gid){
		$.post(
			"/index.php/goods/comment_list/" + gid + '.html?t=' + Math.random(0),
			{},
			function (result) {
				var html_str = '';
				for (i = 0; i < result.length; i++) { 
					html_str += '<li>';
					html_str += '<a href="' + result[i].url + '" class="deal_img">';
					html_str += '<img src="' + result[i].thumb + '">';
					html_str += '</a>';
					html_str += '<a href="' + result[i].url + '" class="deal_title">' + result[i].title + '</a>';
					html_str += '<div class="deal_info">';
					html_str += '<span class="deal_price f_l">';
					html_str += '<span class="current_price"><i>¥</i>' + result[i].price + '</span>';
					html_str += '</span>';
					html_str += '<span class="sale_count f_r">';

					html_str += '</span>';
					html_str += '</div>';
					html_str += '</li>';
				}
				$('#favdeal_list').html(html_str);
			},
			"json"
		);
	}
	
      $(function () {
    var num=$(".ull").find("li").length;
    if(num<1){
        $('.no_order').css('display','block')
    }else{
        $('.no_order').css('display','none')
    }
    if (num>3) {
        setInterval(function(){
            $('.ull').animate({
                marginTop:"-300px"
            },1000,function(){
               if(num<6){
                $(this).css({marginTop : "0"}).find("li:first").appendTo(this);
               }else{
                $(this).css({marginTop : "0"}).find("li:nth-child(-n+3)").appendTo(this);
               }
                
            });
        }, 5000);
    }
})
    $(function(){
        // $('.change_ div').css('margin-top','-24px')
		$('.big_pic').css('display','block')
        $('.pic_hidden').css('display','block');
        $('.pic_hidden').css('margin-top','500px!important');
        
        // $('.video_  video').attr('src', $(this).attr('data'));
    })
			
    $(function () {// 初始化内容
    //  $('.ware_pic_hover').mouseover(function(){
    //      debugger;
    //         $('.video_').css('display','block');
    //         $('.big_pic').css('display','none')
    //      })
        $('.video').click(function(){
        //  debugger;这里原项目是mouseover的
            $('.big_pic').css('z-index','-1');
            $('.video_').css({'display':'block','margin-top':'0px'});
            // $('.big_pic').css('display','none')
         })
		$('#small_pic').on('mouseover','img',function () {
        //  debugger;
        //  alert(1);
            console.log($(this).attr('src') )
            // $('#big_pic').attr('src', $(this).attr('data'));
            $('#big_pic').attr('src', $(this).attr('src'));
            $('.video_').css('display','none');
		});
		//获取推荐商品
		// recommend_goods();
	});
	$(document).scroll(function() {
		var scroH = $(document).scrollTop();
		var h = 850;
		if(scroH > h){
			$('#detail_nav').show();
		} else if(scroH < h) {
			$('#detail_nav').hide();
		}
	});
      //评价星星
    //  layui.use('rate', function(){
    //     var rate = layui.rate;
    //     //自定义文本
    //     rate.render({
    //         elem: '.appraise_star',
    //         value: 4.5,
    //         half: true,
    //         text: false,
    //         readonly: true,
    //         theme: '#74181b',
    //     })
    // });
    // 增加、减少商品数量
    $(".reduce").click(function(){
        var num = $(this).next().text();
        if(num<=1){
            $(this).next().attr("disabled","disabled");
        }else{
            num--;
            $(this).next().text(num);
        }
    });
    $(".plus").click(function(){
        var num = $(this).prev().text();
        num++;
        $(this).prev().text(num);
    });

    var a = $(".content_box") //本单详情
    var b = $(".gn_know") //识玉轩
    var c = $("#appraise") //消费评价
    var d = $(".gn_ensure") //我们的保障
    var e = $(".gn_way") //购买方式
    $(".g_nav li:nth-child(1)").click(function(){
        a.show();
        b.hide();
        c.hide();
        d.hide();
        e.hide();
        $(".report").show();
        $(".g_nav li").css("color","#000");
        $(".g_nav li:nth-child(1)").css("color","#74181b");
    });
    $(".g_nav li:nth-child(2)").click(function(){
        a.hide();
        b.show();
        c.hide();
        d.hide();
        e.hide();
        $(".report").hide();
        $(".g_nav li").css("color","#000");
        $(".g_nav li:nth-child(2)").css("color","#74181b");
    });
    $(".g_nav li:nth-child(3)").click(function(){
        a.hide();
        b.hide();
        c.show();
        d.hide();
        e.hide();
        $(".report").hide();
        $(".g_nav li").css("color","#000");
        $(".g_nav li:nth-child(3)").css("color","#74181b");
    });
    $(".g_nav li:nth-child(4)").click(function(){
        a.hide();
        b.hide();
        c.hide();
        d.show();
        e.hide();
        $(".report").hide();
        $(".g_nav li").css("color","#000");
        $(".g_nav li:nth-child(4)").css("color","#74181b");
    });
    $(".g_nav li:nth-child(5)").click(function(){
        a.hide();
        b.hide();
        c.hide();
        d.hide();
        e.show();
        $(".report").hide();
        $(".g_nav li").css("color","#000");
        $(".g_nav li:nth-child(5)").css("color","#74181b");
    });
    // 图片放大
    $(".img_list img").click(function(){
        $(".img_plus").show();
        $(".img_plus img").attr('src',$(this)[0].src);
    });
    $(".img_plus img").click(function(){
        $(".img_plus").hide();
    })
    //尺码表g_size
    $('.g_size p:nth-child(2)').click(function() {
        $('#mask').css({
            display: 'block',
            height: $(document).height()
        })
        var $Popup = $('.popup');
        $Popup.css({
            left: ($('body').width() - $Popup.width()) / 2+ 'px',
            top: ($(window).height() - $Popup.height()) / 2 + $(window).scrollTop() + 'px',
            display: 'block'
        })
    })
    $('.btn_close').click(function() {
        $('#mask,.popup').css('display', 'none');
    })
    $(".bangle_t").click(function(){
        $(".bangle").show();
        $(".ring").hide();
        $(".bangle_t").css('color','#74181B');
        $(".ring_t").css('color','#000');
    })
    $(".ring_t").click(function(){
        $(".ring").show();
        $(".bangle").hide();
        $(".ring_t").css('color','#74181B');
        $(".bangle_t").css('color','#000');
    })

    // function buy(gid, number) {
    //     window.location.href = "/user/pay_now/index.html?gid=" + gid + '&number=' + number;
    // }

    //添加购物车
    // function add_cart(gid, number){
    //     $.post(
    //         "/index.php/user/cart/add.html?t=" + Math.random(0),
    //         {'gid':gid,'number':number},
    //         function (result) {
    //             if(result.code==1){
    //                 $('#top_nav_cart_num').html(result.cart_num);
    //                 layer.msg(result.message, {icon: 1, time: 2000,offset: ['300']});
    //             } else if(result.login==0) {
    //                 window.location.href = "/login.html";
    //             } else {
    //                 layer.open({
    //                     offset:['100'],
    //                     content: result.message
    //                 });
    //             }
    //         },
    //         "json"
    //     );
    // }
 }   
}
</script>
<style scoped>

@import url('../../static/css/goodsdetail.css');
.content{padding: 0px;}
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