<template>
<div>
  <left/>
  <div class="content_box">
    <div class="content">
      <div class="shop_right">
        <div class="list">
          <ul>
            <li :class="{active:redText==1}" @click="showDiv(1)">全部订单</li>
            <li :class="{active:redText==2}" @click="showDiv(2)">待付款</li>
            <li :class="{active:redText==3}" @click="showDiv(3)">待收货</li>
            <li :class="{active:redText==4}" @click="showDiv(4)">待评价</li>
          </ul>
        </div>
        <!-- <div class="shop_search">
          <div class="search">
            <form action="/search" name="search_form" method="get" id="search_form">
              <input type="text" name="keyword" autocomplete="off" placeholder="输入商品名称或订单号搜索" />
              <div class="btn" rel="search_btn">
                <span onclick>搜索</span>
              </div>
            </form>
          </div>
        </div> -->
        <div class="shop_table">
          <ul>
            <li>商品信息</li>
            <li>单价</li>
            <li>数量</li>
            <li>商品状态</li>
            <li>商品操作</li>
            <li>交易操作</li>
          </ul>
          <div class="orderlist" v-for="(item,i) in orderlist" :key="i">
            <p>
              <span>{{item.orderTime}}</span>
              <span>订单号：{{item.serialNumber}}</span>
            </p>
            <div>
              <ul v-for="(it,k) in item.goods" :key="k">
                <li>
                  <div class="show">
                    <span>
                      <img :src="it.thumb" />
                    </span>
                    <span>{{it.title}}</span>
                  </div>
                </li>
                <li>¥{{it.price}}</li>
                <li>{{it.number}}</li>
                <li><button class="afterSale">申请售后</button></li>
              </ul>
              <div>
                <p
                  v-if="item.logisticsStatus!=2&&item.payStatus==3&&!(item.affirmReceiptTime==0&&item.logisticsStatus==3)"
                >{{item.logisticsStatus==1?'待发货':item.logisticsStatus==3?'快件已签收':''}}</p>
                <p v-if="item.affirmReceiptTime==0&&item.logisticsStatus==3">交易完成</p>
                <p v-if="item.payStatus==1&&item.affirmPayTime">交易关闭</p>
                <p v-if="item.payStatus==2">等待兑换</p>
                <p
                  class="overText"
                  v-if="item.logisticsStatus!=1&&item.payStatus==3"
                  @click="$router.push({ name: 'orderLogistics',query: { 'expressId': item.expressId,'logisticCode':item.tracking}})"
                >查看物流</p>
                <p
                  class="overText"
                  @click="$router.push({ name: 'orderDetail',query: { 'id': item.id}})"
                >订单详情</p>
              </div>
              <div>
                <span
                  v-if="item.logisticsStatus!=1&&item.affirmReceiptTime!=0"
                  class="surplus"
                >剩余{{item.affirmReceiptTime}}</span>
                <span
                  v-if="item.logisticsStatus!=1&&item.affirmReceiptTime!=0"
                  class="btn_receipt"
                  @click="confirmOrder(item.id)"
                >确认收货</span>
                <span v-if="item.payStatus==1||item.payStatus==2" class="gopay"><a :href="'/user/pay_now/index.html?gid=' + item.gid + '&number=' + item.number + '&activity=4&activityId=' + item.activityId">立即兑换</a></span>
                <!-- <span v-if="item.payStatus==2" @click="canaelOrder()">取消订单</span> -->
                <span
                  v-if="item.affirmReceiptTime==0&&item.logisticsStatus==3"
                  @click="$router.push({ name: 'orderEvaluate',query: { 'id': item.id}})"
                  class="overText"
                >评价</span>
                <span v-if="item.payStatus==0">已失效</span>
              </div>
            </div>
          </div>
          <div v-if="!orderlist" class="noOrder">
            <img src="../../../static/img/noOrder.jpg" alt />
            <p>您当前没有任何订单哦！</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="totalPage>1" class="pages">
      <p @click="Topage((--tag)==0?1:tag)">&lt;</p>
      <p v-for="i in totalPage" :key="i" :class="{changebg:tag==i}" @click="Topage(i)">{{i}}</p>
      <p @click="Topage((++tag)>=totalPage?totalPage:tag)">&gt;</p>
      <p @click="Topage(totalPage)">尾页</p>
    </div>
  </div>
  </div>
</template>

<script>
import left from '~/pages/user/content_left'
export default {
  name: "orderIntegral",
  data() {
    return {
      redText: 1,
      tag: 1,
      detail: null,
      orderlist: true,
      token: "",
      totalPage: null //页数
    };
  },
  components:{
    left
  },
//   mounted() {
//     this.getorderlist()
//     this.getorderlist();
//   },
  methods: {
    // confirmOrder(id){
    //   let data = {
    //     token: this.c.getCookie(),
    //     orderId: id
    //   };
    //   let self = this;
    //   self.$ajax
    //     .post("/index.php/user/order/confirm_receive?ajax=true", self.$qs.stringify(data), {})
    //     .then(res => {
    //       if(res.data.code == 1){
    //         this.$message({
    //           message: '收货成功',
    //           type: 'success'
    //         });
    //       } else {
    //         this.$message({
    //           message: res.data.message,
    //           type: 'error'
    //         });
    //       }
    //     });
    // },
    Topage(i) {
      this.tag = i;
      if (this.redText == 1) {
        this.getorderlist("", i);
      } else if (this.redText == 2) {
        this.getorderlist("un_payment", i);
      } else if (this.redText == 3) {
        this.getorderlist("un_received", i);
      } else {
        this.getorderlist("un_evaluated", i);
      }
    },
    showDiv(i) {
      this.redText = i;
      this.tag = 1;
      if (i == 1) {
        this.getorderlist();
      } else if (i == 2) {
        this.getorderlist("un_payment");
      } else if (i == 3) {
        this.getorderlist("un_received");
      } else {
        this.getorderlist("un_evaluated");
      }
    },
    canaelOrder() {},
    // getorderlist(status, page) {
    //   let self = this;
    //   self.$ajax
    //     .get(
    //       "/index.php/api/user/order_list?ajax=true",
    //       {
    //         params: {
    //           token: this.c.getCookie(),
    //           status: status,
    //           activity: "4",
    //           span: "10",
    //           page: page ? page : 1
    //         }
    //       }
    //     )
    //     .then(res => {
    //       self.orderlist = res.data.list;
    //       self.totalPage = res.data.totalPage;
    //     });
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content_box {
  overflow: hidden;
  width: 1000px;
  background: #fff;
  padding-bottom: 50px;
  margin-top: 15px;
  float: left;
}
.content {
  min-height: 600px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
}
.noOrder {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
.noOrder p {
  font-size: 18px;
  color: #666666;
  margin-left: 10px;
}
.surplus {
  color: #de0812;
  font-size: 8px;
}
.gopay {
  width: 65px;
  height: 20px;
  font-size: 12px;
  background: #de0812;
  color: #fff;
  line-height: 20px;
  display: block;
  border-radius: 5px;
  cursor: pointer;
  border: 1px #de0812 solid;
  box-sizing: border-box;
}
.gopay a{
  color: #fff;
}
.gopay:hover a{
  color: #de0812;
}
.gopay:hover {
  border: 1px #de0812 solid;
  color: #de0812;
  background: #fff;
  line-height: 18px;
  display: block;
  border-radius: 5px;
}
.afterSale{
  background: none;
}
.afterSale:hover{
  cursor: pointer;
  color: #74181b;
}
.btn_receipt {
  width: 65px;
  height: 20px;
  font-size: 12px;
  background: #74171b;
  color: white;
  line-height: 20px;
  display: block;
  border-radius: 5px;
}
.shop_right {
  width: 1000px;
  overflow: hidden;
  float: left;
  padding-left: 30px;
  box-sizing: border-box;
}
.show {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.show span {
  display: block;
  float: left;
}
.show span:nth-child(1) {
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  border: 1px #e9e9e9 solid;
  margin-right: 16px;
}
.show span:nth-child(2) {
  width: 200px;
}
.show span img {
  width: 58px;
  height: 58px;
  float: left;
}
.show p {
  float: left;
}
.shop_search {
  overflow: hidden;
  margin-top: 20px;
}
.shop_search .search {
  width: 250px;
  height: 30px;
  margin-left: 6px;
  float: left;
  margin-top: 30px;
  margin-bottom: 20px;
  border: 1px #cecece solid;
  box-sizing: border-box;
}
.shop_search .search input {
  width: 200px;
  height: 26px;
  float: left;
  border: none;
  outline: none;
  padding: 0 12px;
  box-sizing: border-box;
  font-size: 12px;
  margin-top: 1px;
  margin-left: 1px;
}
.shop_search .search .btn {
  width: 45px;
  height: 28px;
  background: #888;
  float: right;
  line-height: 38px;
  text-align: center;
  color: white;
  font-size: 12px;
}
.shop_search .search .btn span {
  height: 28px;
  line-height: 28px;
  display: block;
  text-align: center;
  background: #ededed;
  color: #575757;
}
.shop_table {
  overflow: hidden;
  margin-top: 20px;
}
.shop_table ul {
  width: 100%;
}
.shop_table>ul {
  background: #e9e9e9;
  font-size: 12px;
  height: 40px;
  line-height: 40px;
}
.shop_table ul li {
  width: 120px;
  float: left;
  text-align: center;
}
.shop_table>ul>li:nth-child(1) {
  width: 370px;
  text-align: left;
  padding-left: 100px;
  box-sizing: border-box;
}
.shop_table .orderlist{
  margin-top: 10px;
  border: 1px #e9e9e9 solid;
}
.orderlist>div{
  overflow: hidden;
  text-align: center;
  color: #666666;
  width: 100%;
  position: relative;
}
.orderlist>p {
  height:30px;
  background-color: #f6f6f6;
  text-align: left;
  line-height: 30px;
  padding-left: 15px;
  color: #666666;
}
.orderlist p span {
  margin-right: 10px;
}
.orderlist>div ul{
  width: 730px;
  height: 85px;
}
.orderlist>div ul li:nth-child(1){
  width: 370px;
  justify-content: flex-start;
  padding: 0 15px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.orderlist>div ul li,.orderlist>div>div{
  width: 120px;
  float: left;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
.orderlist>div>div{
  flex-direction: column;
}
.orderlist>div>div:nth-of-type(1){
  width: 119px;
  position: absolute;
  top: 0;
  right: 120px;
}
.orderlist>div>div:nth-of-type(2){
  right: 0;
  position: absolute;
  top: 0;
  width: 119px;
}
.overText:hover{
  cursor:pointer;
  color: #74171b;
}
.list {
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #eee;
}
.list ul li {
  width: 100px;
  float: left;
  text-align: center;
  line-height: 60px;
  font-size: 18px;
}
.active {
  border-bottom: 2px solid #74171b;
  color: #74171b;
}
.shop_list ul .changeColor {
  color: #74171b;
}
.pages {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 50px;
  margin-top: 20px;
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
.pages .changebg,
.pages p:hover {
  background: rgb(116, 24, 27);
  color: white;
}
.pages p:last-child {
  margin: 0;
  width: 58px;
}
</style>
