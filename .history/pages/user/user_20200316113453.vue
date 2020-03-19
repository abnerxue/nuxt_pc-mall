<template>
<div>
    <left/>
  <div class="content_box">
    <div class="content" style='padding-top:0;'>
      <div class="shop_right">
        <div class="list" style='display:block !important;'>
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
            <li>申请售后</li>
            <li>订单状态</li>
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
                  <div class="show" @click='particular (it.gid)'>
                    <span>
                      <img :src="it.thumb" />
                    </span>
                    <span>{{it.title}}</span>
                  </div>
                </li>
                <li>¥{{it.price}}</li>
                <li>{{it.number}}</li>
                <li><button v-if="item.payStatus==3" class="afterSale" @click="refund(item.id,it.gid)" >申请售后</button>
                <!-- <button v-else class="afterSale"></button> -->
                </li>
              </ul>
              <div>
                <p
                  v-if="item.logisticsStatus!=2&&item.payStatus==3&&!(item.affirmReceiptTime==0&&item.logisticsStatus==3)"
                >{{item.logisticsStatus==1?'待发货':item.logisticsStatus==3?'快件已签收':''}}</p>
                <p v-if="item.affirmReceiptTime==0&&item.logisticsStatus==3">交易完成</p>
                <p v-if="item.payStatus==1&&item.affirmPayTime">交易关闭</p>
                <p v-if="item.payStatus==2">等待付款</p>
                <p
                  class="overText"
                  v-if="item.logisticsStatus!=1&&item.payStatus==3"
                  @click="$router.push({ name: 'user-order-order_logistics',query: { 'id': item.id}})"
                >查看物流</p>
                <p
                  class="overText"
                  @click="$router.push({ name: 'user-order-order_detail',query: { 'id': item.id}})"
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
                <span v-if="item.payStatus==1" class="gopay" @click="gopay(item.serialNumber,item.payment)">立即购买</span>
                <span v-if="item.payStatus==2" class="gopay" @click="gopay(item.serialNumber,item.payment)">立即付款</span>
                <span v-if="item.payStatus==2" class="giveup" @click="canaelOrder(item.id)">取消订单</span>
                <span
                  v-if="item.logisticsStatus==3&&item.appraise==0"
                  @click="$router.push({ name: 'user-order-order_evaluate',query: { 'id': item.id}})"
                  class="overText"
                >评价</span>
                <span v-if="item.payStatus==0">已失效</span>
              </div>
            </div>
          </div>
          <el-dialog
            title="退换货申请"
            :visible.sync="dialogVisible"
            width="500px"
            :before-close="handleClose"
          >
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="退换方式">
                <el-select v-model="form.region" placeholder="请选择退货方式">
                  <el-option label="退货退款" value="1"></el-option>
                  <el-option label="换货" value="2"></el-option>
                  <el-option label="只退款" value="3"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="退换理由">
                <el-select v-model="form.regions" placeholder="请选择退换理由">
                  <el-option label="7天无理由退换货" value="7天无理由退换货"></el-option>
                  <el-option label="商品描述不符" value="商品描述不符"></el-option>
                  <el-option label="质量问题" value="质量问题"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="上传图片">
                <el-upload
                  action="/index.php/api/upload/image"
                  ref="upload"
                  name="userfile"
                  list-type="picture-card"
                  :data="datas"
                  :on-preview=" handlePreview"
                  :on-success="handleAvatarSuccess"
                  :on-remove="handleRemove"
                >
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisibleimg">
                  <img width="100%" :src="form.dialogImageUrl" alt />
                </el-dialog>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="cancel()">取 消</el-button>
              <el-button style="background:#74181b;color: #fff;" @click="confirm">确 定</el-button>
            </span>
          </el-dialog>
          <div v-if="!orderlist" class="noOrder">
            <img src="../../static/img/noOrder.jpg" alt />
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
import nh from '~/pages/layout/header.vue'
import left from '~/pages/user/content_left'
export default {
  name: "index",
  data() {
    return {
      totalPage:'',
      payment: "",
      form: {
        file: "",
        name: "",
        regions: "",
        region: "",
        dialogImageUrl: ""
      },
      datas: {
        token: localStorage.getItem('token'),
        type: "returned"
      },
      imgarr: [],
      dialogVisible: false,
      dialogVisibleimg: false,
      redText: 1,
      redColor: 1,
      detail: null,
      orderlist: true,
      token: null,
      totalPage: null,
      tag: 1
    };
  },
  components:{
      left,
      nh
  },
  mounted() {
    this.getorderlist(0);
  },
  methods: {
    handleClose(){

    },
    cancel(){
      this.dialogVisible = false;
      this.form = {
        file: "",
        name: "",
        regions: "",
        region: "",
        dialogImageUrl: ""
      }
    },
	  particular(gid){
      // console.log(gid)
      window.location.href='/goods/'+gid
    },
    handleAvatarSuccess(res, file) {
      // console.log("666888456");
      // console.log(file);
      this.form.file = file;
      // console.log(this.form.file);
      console.log(res);
      this.imgarr.push(res.img_path);
      console.log(this.imgarr);
    },
    handleRemove(file) {
      // console.log(file);
    },
    handlePreview(file) {
      // console.log(file);
      // console.log("888456");

      this.dialogVisibleimg = true;
      this.dialogVisibleimg = true;
    },
    handleDownload(file) {
      // console.log(file);
    },
     
        confirm(){
            let _this=this
                  let params = new URLSearchParams();
                     params.append("token",localStorage.getItem('token'));
                       params.append("orderId",this.orderId);
                          params.append("gid",this.gid);
                           params.append("cause",this.form.regions);
                          params.append("type",this.form.region);
                          params.append("images",this.imgarr);

                 this.$axios.post('/api/post_sale/returned',params).then((res)=>{
                    //  this.uesrinfo=res.data.list
                   
                   console.log(res)
                         this.$message({
              message: res.data.message,
              type: "success",
              offset:'400'
            });
                 })
            
                 this.dialogVisible = false
        },
   
    refund(id, gid) {
      (this.dialogVisible = true), (this.orderId = id), (this.gid = gid);
    },
    gopay(serialNumber, payment) {
      // console.log(payment);
      if (payment != 2 && payment != 4) {
        this.payment = 2;
      } else {
        this.payment = payment;
      }
      // console.log(this.payment);
      window.location.href =
        "/index.php/user/order/pay?ajax=true&serialNumber=" +
        serialNumber +
        "&payment=" +
        this.payment;
    },
  
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
      this.tag = 1;
      this.redText = i;
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
      getorderlist(status,page){
        
            let _this=this
                  let params = new URLSearchParams();
                     params.append("token",localStorage.getItem('token'));
                       params.append("status",status);
                          params.append("page",page);

                 this.$axios.post('/api/order/get_list',params).then((res)=>{
                    //  this.uesrinfo=res.data.list
                    this.orderlist=res.data.list
                    this.totalPage=res.data.totalPage
                   console.log( res+' this.orderlist')
                 })
        },
         canaelOrder(id) {
          console.log(id+'555555')
            let _this=this
                  let params = new URLSearchParams();
                     params.append("token",localStorage.getItem('token'));
                       params.append("orderId",id);
                     

                 this.$axios.post('/api/order/trash',params).then((res)=>{
                           if (res.data.code == 1) {
            this.$message({
              message: res.data.message,
              type: "success",
              offset:'400'
            });
          } else {
            this.$message({
              message: res.data.message,
              type: "error",
              offset:'400'
            });
          }
                 })
        },
    // canaelOrder(id) {
    //   let data = {
    //     token: this.c.getCookie(),
    //     orderId: id
    //   };
    //   let self = this;
    //   self.$ajax
    //     .post(
    //       "/index.php/user/order/trash?ajax=true",
    //       self.$qs.stringify(data),
    //       {}
    //     )
    //     .then(res => {
    //       if (res.data.code == 1) {
    //         this.$message({
    //           message: "取消成功",
    //           type: "success"
    //         });
    //       } else {
    //         this.$message({
    //           message: res.data.message,
    //           type: "error"
    //         });
    //       }
    //     });
    // },
  
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .orderlist > div > div{
  right:80px !important;
} */
.orderlist > div ul{
  width:900px !important;
}
.content_box {
  overflow: hidden;
  width: 1000px;
  background: #fff;
  padding-bottom: 120px;
  margin-top: 15px;
  float: left;
}
.content {
  min-height: 600px;
  width: 1200px;
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
.giveup {
  width: 65px;
  height: 20px;
  font-size: 12px;
  margin-top: 10px;
  line-height: 20px;
  display: block;
  border-radius: 5px;
  cursor: pointer;
  border: 1px #999 solid;
  box-sizing: border-box;
}
.gopay {
  color: white;
  width: 65px;
  height: 20px;
  font-size: 12px;
  background: #74181b;
  line-height: 20px;
  display: block;
  border-radius: 5px;
  cursor: pointer;
  border: 1px #74181b solid;
  box-sizing: border-box;
}

.afterSale:hover {
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
  min-height: 1000px;
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
  text-align: left;
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
.shop_table > ul {
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
.shop_table > ul > li:nth-child(1) {
  width: 370px;
  text-align: left;
  padding-left: 100px;
  box-sizing: border-box;
}
.shop_table .orderlist {
  margin-top: 10px;
  border: 1px #e9e9e9 solid;
}
.orderlist > div {
  overflow: hidden;
  text-align: center;
  color: #666666;
  width: 100%;
  position: relative;
}
.orderlist > p {
  height: 30px;
  background-color: #f6f6f6;
  text-align: left;
  line-height: 30px;
  padding-left: 15px;
  color: #666666;
}
.orderlist p span {
  margin-right: 10px;
}
.orderlist > div ul {
  width: 730px;
  height: 85px;
}
.orderlist > div ul li:nth-child(1) {
  width: 370px;
  justify-content: flex-start;
  padding: 0 15px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.orderlist > div ul li,
.orderlist > div > div {
  width: 120px;
  float: left;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
.orderlist > div > div {
  flex-direction: column;
}
.orderlist > div > div:nth-of-type(1) {
  width: 119px;
  position: absolute;
  top: 0;
  right: 120px;
}
.orderlist > div > div:nth-of-type(2) {
  right: 0;
  position: absolute;
  top: 0;
  width: 119px;
}
.overText:hover {
  cursor: pointer;
  color: #74171b;
}
.list {position:relative;
left:40px;
/* display:block; */
visibility: visible!important;
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #eee;
}
.list ul li {
  cursor: pointer;
  width: 100px;
   height:60px;
  float: left;
  text-align: center;
  line-height: 60px;
  font-size: 18px;
}
.list li:last-child{
   height:60px;
}
.active {
   line-height: 60px;
  border-bottom: 2px solid #74171b;
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
.afterSale{
  background: #fff;
}
</style>
<style>
  .el-button:focus, .el-button:hover{
    color: #fff;
    border-color: #74181b;
  }
</style>
