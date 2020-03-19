<template>
<div>
  <left/>
  <div class="order_logistics">
    <div class="logistics">
      <div class="info">
        <h1>物流信息</h1>
        <ul class="steps1">
          <li :class="{stepColor:this.step>=1}">
            <i class="el-icon-box icon"></i>
            <p>待揽件</p>
          </li>
          <span :class="{stepColor:this.step>1}"></span>
          <li :class="{stepColor:this.step>=2}">
            <i class="el-icon-truck icon"></i>
            <p>运输</p>
          </li>
          <span :class="{stepColor:this.step>2}"></span>
          <li :class="{stepColor:this.step>=3}">
            <i class="el-icon-bicycle icon"></i>
            <p>派送</p>
          </li>
          <span :class="{stepColor:this.step>3}"></span>
          <li :class="{stepColor:this.step>=4}">
            <i class="el-icon-s-claim icon"></i>
            <p>签收</p>
          </li>
        </ul>
        <div class="package-status">
          <span
            class="step_arrow"
            :style="step==1?'left: 50px;':step==2?'left: 364px;':step==3?'left: 674px;':'left: 988px;'"
          ></span>
          <div class="status-box">
            <ul class="status-list">
              <li v-for="(item,i) in list.Traces" :key="i">
                <!-- <p>{{item.AcceptStation}}</p> -->
             <span :class="hidden(i,'day')">{{(item.AcceptTime||'').split(' ')[0]}}</span>
                <!-- <span :class="hidden(i,'星期')">{{(item.AcceptTime||'').split(' ')[0] | dateDate}}</span> -->
                <span :class="hidden(i,'week')">{{(item.AcceptTime||'').split(' ')[0] | dateDate}}</span>
                <span class="time">{{(item.AcceptTime||'').split(' ')[1]}}</span>
                <span class="tet">{{item.AcceptStation}}</span> 
              </li>
            </ul>
            <!-- <div class="package_shop">
              <p>常州世纪明珠园17-7号店</p>
              <p>代收站点：常州世纪明珠园17-7号店</p>
              <p>取货密码：1-3-7401</p>
              <p>营业时间：周一至周日09点00分到20点00分</p>
              <p>站点电话：15312399123</p>
              <p>详细地址：江苏省常州市钟楼区南大街街道世纪明珠园16栋7号商铺</p>
            </div> -->
          </div>
        </div>
        <div class="goodsInfo">
          <p>
            运单号码：
            <span>{{list.LogisticCode}}</span>
            物流公司：
            <span>{{list.ShipperCode=='STO'?'申通快递':list.ShipperCode=='YTO'?'圆通快递':list.ShipperCode=='ZTO'?'中通快递':list.ShipperCode=='HTKY'?'汇通快递':list.ShipperCode=='YUNDA'?'韵达快递':'普通快递'}}</span>
          </p>
          <!-- <p>
            发货地址：广东省中山市 横栏镇 三沙远洋启宸 045卡商铺
            <span class="ml">000000</span>
            <span>熊鹏</span>
            <span>18482931660</span>
          </p>
          <p>
            收货地址：江苏省常州市钟楼区
            <span class="ml">000000</span>
            <span>dkid</span>
            <span>18455656645</span>
          </p>
          <img src="../../../static/img/goods.jpg" />
          <p style="font-size:11px;">5222.00&nbsp;x&nbsp;1</p> -->
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import left from '~/pages/user/content_left'
export default {
  data() {
    return {
      step: '',
      list: '',
      traces: null,
    };
  },
  components:{
    left
  },
  filters: {
    dateDate(value){
      let dateT = new Date(value);
      // console.log(dateT+'3666999')
      let string = dateT.getDay()==0?'日':dateT.getDay()==1?'一':dateT.getDay()==2?'二':dateT.getDay()==3?'三':dateT.getDay()==4?'四':dateT.getDay()==5?'五':'六';
        // console.log(string+'3666999')
        return '周' + string;
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    hidden(i,type){
      console.log((this.traces[3].AcceptTime||'').split(' ')[0]+'4...........')
      if(i!=0){
        if ((this.traces[i].AcceptTime||'').split(' ')[0] == (this.traces[i-1].AcceptTime||'').split(' ')[0]){
          return type + ' hidden';
        } else {
          return type;
        }
      } else {
        return type;
      }
      
    },
    getList(){
        let _this=this
                  let params = new URLSearchParams();
                     params.append("token",localStorage.getItem('token'));
                       params.append("orderId",this.$route.query.id);
                        

                 this.$axios.post('/api/order/detail',params).then((res)=>{
                   this.list=res.data.logisticsInf
                   this.traces=res.data.logisticsInf.Traces
                   this.step=res.data.logisticsStatus
                  
                 })
         
  
    }
  }
};
</script>

<style>
.steps1 .stepColor {
  color: #74181b;
  background: #74181b;
}
.steps1 .stepColor p {
  color: #74181b;
}
.step_arrow {
  display: block;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid #f6f6f6;
  position: absolute;
  top: -20px;
}
.goodsInfo {
  margin: 10px 60px;
  border-top: 1px #e2e2e2 solid;
  padding: 20px 10px;
}
.goodsInfo p {
  font-size: 13px;
  line-height: 20px;
  height: 20px;
}
.goodsInfo p span {
  margin-right: 15px;
  font-weight: 600;
}
.goodsInfo img {
  height: 60px;
  width: 60px;
  margin-top: 20px;
  margin-bottom: 5px;
}
.ml {
  margin-left: 15px;
}
.content {
  min-height: 1200px;
}
.order_logistics {
  position: absolute;
  top: 180px;
  left: 0;
  width: 100%;
  min-height: 900px;
  min-width: 1200px;
  background: #fff;
  padding-bottom: 120px;
  margin-top: 15px;
  box-sizing: border-box;
  background: #fff;
}
.logistics {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.info {
  border: 1px #e2e2e2 solid;
}
.info > h1 {
  padding: 10px 80px;
  font-size: 18px;
  border-bottom: 1px #e2e2e2 solid;
  font-weight: normal;
  background: #f6f6f6;
}
.steps1 {
  width: 100%;
  box-sizing: border-box;
  padding: 0 90px;
  height: 150px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
}
.icon {
  font-size: 50px;
  width: 80px;
  line-height: 80px;
  height: 80px;
  display: block;
  color: #fff;
  text-align: center;
  padding: 14px 0;
  box-sizing: border-box;
}
.steps1 > li {
  position: relative;
  width: 80px;
  height: 80px;
  background: #c0c4cc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-self: center;
}
.steps1 > li > p {
  color: #c0c4cc;
  text-align: center;
  font-size: 16px;
  position: absolute;
  width: 80px;
  top: 85px;
  left: 0px;
}
.steps1 > span {
  height: 1px;
  width: 240px;
  background: #c0c4cc;
}
/* 物流信息 */
.package-status {
  background: #f6f6f6;
  margin: 20px 60px;
  padding: 18px 0;
  position: relative;
}
.package-status .status-box {
  position: relative;
  overflow: hidden;
}
.package-status .status-box:before {
  content: " ";
  background-color: #f3f3f3;
  display: block;
  position: absolute;
  top: -2px;
  left: 20px;
  width: 10px;
  height: 4px;
}
.package-status .status-list {
  margin-top: 0;
  padding: 0;
  margin-left: 12px;
  padding-left: 10px;
  list-style: none;
  font-size: 12px;
}
.package-status .status-list li {
  height: auto;
  min-height: 30px;
  margin-bottom: -2px;
  border-left: 1px solid #d9d9d9;
}
.package-status .status-list li:before {
  content: "";
  border: 3px solid #f3f3f3;
  background-color: #d9d9d9;
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  margin-left: -6px;
  margin-right: 10px;
}
.package-status .status-list .date,
.package-status .status-list .week,
.package-status .status-list .time {
  display: inline-block;
}
.package-status .status-list .date {
  width: 78px;
  font-weight: 700;
  margin-right: 8px;
  font-family: Arial;
}
.package-status .status-list .week {
  width: 32px;
  font-weight: 700;
  margin-right: 8px;
  font-family: Arial;
}
.package-status .status-list .time {
  width: 48px;
  margin-right: 28px;
  margin-left: 5px;
}
.package-status .status-list .hidden {
  visibility: hidden;
}
.package-status .status-list .tet {
  width: 635px;
  display: inline-block;
  vertical-align: text-top;
}
.package-status .status-list li:last-of-type:before {
  background-color: #74181b;
  border-color: #f8e9e4;
}
.package-status .status-list li:last-of-type {
  border: none;
}
.package_shop {
  margin: 20px 12px 0 40px;
  padding-bottom: 16px;
  padding-top: 16px;
  padding-left: 20px;
  border-top: 1px solid #e7e7e7;
  line-height: 24px;
  font-size: 14px;
  color: #333;
}
</style>
