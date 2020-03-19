<template>
  <div>
    <div class="content">
      <p>
        <span>配送地址</span>
        <span><a href="javascript:" @click="add_address()">新增地址</a></span>
      </p>
      <div class="logistics-info">
        <!-- <?php if (!empty($this->address)): ?> -->
        <ul class="address-list" style="height:auto;">
          <!-- <?php foreach ($this->address as $k=>$address): ?> -->
          <li>
            <!-- <div class="user-name" addressid="<?php echo $address->id;?>"> -->
            <div class="user-name" v-if="address != ''">
              <p>
                <i style="background:url(../../static/img/address.jpg)"></i
                >寄送至
              </p>
              <div class="address-info">
                <span class="j-address">
                  {{
                    address[this.index].province +
                      address[this.index].city +
                      address[this.index].county +
                      address[this.index].address
                  }}
                  <!-- <?php echo $address->province.$address->city.$address->county.$address->address;?> -->
                </span>
                <span class="name">
                  <!-- （<?php echo $address->name;?>收） -->
                  {{ address[this.index].name }}
                </span>
                <span class="j-user-info">
                  <!-- <?php echo $address->phone;?>  -->
                  {{ address[this.index].phone }}
                </span>
              </div>
              <!-- <div class="select-ico"></div> -->
            </div>
            <!-- <a class="delAdd" href="javascript:del_address();" class="del">删除</a> -->
            <a class="delAdd" href="javascript:" @click="del_address()">删除</a>

            <a class="changeAdd" href="javascript:;" @click="edit_address()"
              >修改</a
            >
            <!-- <?php if($address->default):?> -->
            <input type="hidden" name="addressId" id="address_id" value="" />
            <span class="defualt f_l" @click="dfadd()">默认地址</span>
            <!-- <?php endif;?> -->
          </li>
          <!-- <?php endforeach; ?> -->
        </ul>
        <div class="more-info">
          <!-- <a href="javascript:show_address();" class="more-address">更多地址<i class="iconfont"  style="background:url(/static/new/img/arrow_b.jpg)"></i></a>
				<a href="javascript:hide_address();" class="close-address">收起地址<i class="iconfont" style="background:url(/static/new/img/up_arrow.png) no-repeat"></i></i></a> -->
          <el-dropdown>
            <el-button type="primary" style="height:30px;">
              更多地址<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(item, i) in address"
                :key="i"
                v-model="choose"
                @click.native="chooseadd(i)"
                >{{
                  item.province +
                    item.city +
                    item.county +
                    item.address +
                    item.name +
                    item.phone
                }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <!-- <?php else: ?> -->
        <div
          style="text-align:center;font-size:28px;margin-top:-29px;color:rgb(116, 24, 27)"
          v-if="address == ''"
        >
          暂无收获地址，请添加收货地址
        </div>
        <!-- <?php endif; ?> -->
      </div>
      <el-dialog
        left
        class="msg"
        :title="title"
        :visible.sync="dialogVisible"
        width="600px"
        height="800px"
        :before-close="handleClose"
      >
        <el-form :model="form" :rules="rules" ref="form">
          <el-form-item
            label="所属省份"
            :label-width="formLabelWidth"
            prop="province_act"
            style="margin-bottom:20px;"
          >
            <el-select
              @change="provinceChange"
              v-model="form.province_act"
              placeholder="请选择省份"
              value-key="code"
            >
              <el-option
                v-for="item in provinces"
                :key="item.code"
                :label="item.name"
                :value="item"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="所属城市"
            :label-width="formLabelWidth"
            prop="city_act"
            style="margin-bottom:20px;"
          >
            <el-select
              v-model="form.city_act"
              value-key="code"
              placeholder="请选择城市"
              @change="citysChange"
            >
              <el-option
                v-for="item in citys"
                :key="item.code"
                :label="item.name"
                :value="item"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="区/县"
            :label-width="formLabelWidth"
            prop="county_act"
            style="margin-bottom:20px;"
          >
            <el-select
              v-model="form.county_act"
              value-key="code"
              placeholder="请选择区/县"
              @change="countysChange"
            >
              <el-option
                v-for="item in countys"
                :key="item.code"
                :label="item.name"
                :value="item"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="详细地址"
            :label-width="formLabelWidth"
            prop="add"
          >
            <el-input v-model="form.add" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="收货人姓名"
            :label-width="formLabelWidth"
            prop="name"
          >
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="手机号码"
            :label-width="formLabelWidth"
            prop="tel"
          >
            <el-input v-model="form.tel" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div class="sss">
          <el-button class="buttonf" @click="confirm">确定</el-button>
        </div>
      </el-dialog>
      <table class="info" cellpadding="0" cellspacing="0">
        <tr>
          <th>商品信息</th>
          <th>单价</th>
          <th>数量</th>
          <th>总计</th>
        </tr>
        <!-- <?php $totalPrice=0; $goodsNum=0; $i=0; foreach($this->goodsList as $goods):?> -->
        <!-- <tr class="order-item" gid="<?php echo $goods->gid ;?>" number="<?php echo $goods->number ;?>"> -->
        <tr class="order-item" v-if="this.$route.query.tag != 5">
          <td>
            <div>
              <a href="#"> <img :src="data.thumb" alt=""/></a>
              <p><!-- <?php echo $goods->title;?> -->{{ data.title }}</p>
            </div>
          </td>
          <td>
            <span>¥ </span>
            {{ data.price }}
            <!-- <?php echo $goods->price;?> -->
          </td>
          <td>
            <!-- <?php echo $goods->number;?> -->
            {{ this.$route.query.num }}
          </td>
          <td>
            <span>¥{{ data.price * this.$route.query.num }}</span>
            <!-- <?php echo formatMoney($goods->price * $goods->number);?> -->
          </td>
        </tr>
        <tr class="order-item" v-else v-for="(item, i) in data" :key="i">
          <td>
            <div>
              <a href="#"> <img :src="item.thumb" alt=""/></a>
              <p><!-- <?php echo $goods->title;?> -->{{ item.title }}</p>
            </div>
          </td>
          <td>
            <span>¥ </span>
            {{ item.price }}
            <!-- <?php echo $goods->price;?> -->
          </td>
          <td>
            <!-- <?php echo $goods->number;?> -->
            {{ item.number }}
          </td>
          <td>
            <span>¥{{ item.price * item.number }}</span>
            <!-- <?php echo formatMoney($goods->price * $goods->number);?> -->
          </td>
        </tr>
        <!-- <?php $totalPrice += $goods->price * $goods->number * 100; $goodsNum += $goods->number?>
            <?php $i++; endforeach;?> -->
        <tr>
          <td colspan="4">
            <input type="text" v-model="memo" placeholder="请输入您的备注" />
          </td>
        </tr>
      </table>

      <div class="pay_way" id="cart_payment">
        <p>支付方式</p>
        <!-- <input type="hidden" name="payment" id="payment" value="">
        <div>
            <label class="ui-radiobox payment_rdo" name="payment" checked="false" style="display: inline-block;">
                <input type="radio" name="payment1" value="2" style="display: none;"><img src="../../static/img/zfb_pay.jpg">
            </label>
            <label class="ui-radiobox payment_rdo" name="payment" checked="false" style="display: inline-block;">
                <input type="radio" name="payment1" value="4" style="display: none;"><img src="../../static/img/pay_wechat.jpg">
            </label>
        </div> -->

        <el-form ref="forms" :model="forms" label-width="80px">
          <el-form-item label="">
            <el-radio-group v-model="forms.resource">
              <el-radio label="2" value="2" style="width:180px;height:50px;"
                ><img
                  style="width:130px;height:50px;margin-top:-20px;"
                  src="../../static/img/zhifubao.png"
              /></el-radio>
              <el-radio label="4" value="4" style="width:80px;height:50px;"
                ><img
                  style="margin-top:-15px;"
                  src="../../static/img/weixin.jpg"
              /></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
      <div class="red_packet">
        <el-form v-model="formred" label-width="120px">
          <el-form-item label="红包支付：">
            <el-select
              v-model="formred.region"
              value-key="id"
              placeholder="请选择红包"
            >
              <el-option
                v-for="item in redpaper"
                :key="item.id"
                :label="item.redPaper"
                :value="item"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <!-- <p>红包支付：</p>
        <select id="red_paper" onchange="change_red_paper()">
            <option value="0">不使用红包</option> -->
        <!-- <?php if(!empty($this->redPaper)): foreach($this->redPaper as $redPaper):?> -->
        <!-- <option value="<?php echo $redPaper->id;?>" data="<?php echo intval($redPaper->redPaper);?>"> -->
        <!-- <?php echo cent2dollar($redPaper->redPaper);?> -->
        <!-- 元</option> -->
        <!-- <?php endforeach; endif?> -->
        <!-- </select> -->
      </div>
      <div class="total" v-if="this.$route.query.tag == 5">
        <p>
          <span>
            <!-- <?php echo $goodsNum;?> --> </span
          >{{ this.$route.query.gnumber }}件商品&nbsp;&nbsp;&nbsp;&nbsp;运费：{{
            data.postage
          }}
          <!-- <?php echo $postage;?> -->
          元
        </p>
        <p>
          总计：<i>¥</i>
          <!-- {{data.price*this.$route.query.num+data.postage-formred.region}} -->
          <!-- {{formred.region.redPaper}} -->
          {{ this.$route.query.gmoney }}
          <span>
            <!-- <?php echo formatMoney($totalPrice/100);?> -->
          </span>
        </p>
      </div>
      <div class="total" v-else>
        <p>
          <span>
            <!-- <?php echo $goodsNum;?> --> </span
          >{{ this.$route.query.num }}件商品&nbsp;&nbsp;&nbsp;&nbsp;运费：{{
            data.postage
          }}
          <!-- <?php echo $postage;?> -->
          元
        </p>
        <p>
          总计：<i>¥</i>
          <!-- {{data.price*this.$route.query.num+data.postage-formred.region}} -->
          <!-- {{formred.region.redPaper}} -->
          {{
            data.price * this.$route.query.num +
              parseInt(data.postage) -
              formred.region.redPaper
          }}
          <span>
            <!-- <?php echo formatMoney($totalPrice/100);?> -->
          </span>
        </p>
      </div>
      <div class="total_o">
        <div v-if="this.$route.query.tag == 5">
          <p>
            返积分：<span>
              <!-- <?php echo intval($this->setting->shoppingScore * formatMoney($totalPrice/100));?> --> </span
            >{{ cartlist.score }}分
          </p>
          <!-- <?php $totalPrice += $postage*100;?> -->
          <p>
            应付金额：<i>¥</i
            ><span>
              {{
                this.$route.query.gmoney +
                  parseInt(cartlist.postage) -
                  formred.region.redPaper
              }}
            </span>
          </p>
        </div>
        <div v-else>
          <p>
            返积分：<span>
              <!-- <?php echo intval($this->setting->shoppingScore * formatMoney($totalPrice/100));?> --> </span
            >分
          </p>
          <!-- <?php $totalPrice += $postage*100;?> -->
          <p>
            应付金额：<i>¥</i
            ><span>
              {{
                data.price * this.$route.query.num +
                  parseInt(data.postage) -
                  formred.region.redPaper
              }}
            </span>
          </p>
        </div>
        <div></div>
      </div>
      <el-dialog
        title="请您打打开微信扫码支付"
        :visible.sync="dialog"
        width="30%"
        :before-close="handleClose"
      >
        <!-- <span>这是一段信息</span> -->
        <img :src="imgcode" style="margin-left:30%;" />
        <span slot="footer" class="dialog-footer">
          <el-button
            @click="dialogVisible = false"
            class="button_t"
            style=" width:100px;height:40px;"
            >取 消</el-button
          >
          <el-button
            type="primary"
            @click="sure()"
            class="button_t"
            style=" width:100px;height:40px;"
            >已支付</el-button
          >
        </span>
      </el-dialog>
      <div class="order_btn">
        <button @click="confirmPay">提交订单</button>
      </div>
    </div>
  </div>
</template>
<script>
// import QRCode from 'qrcodejs2'
import addressData_ from "~/pages/user/account/addressdata.js";
import {
  getProvince,
  getCity,
  getCounty
} from "~/pages/user/account/address.js"; //
export default {
  data() {
    return {
      cartlist: "",
      payStatus: 1,
      serialNumber: "",
      dialog: false,
      imgcode: "",
      dialogVisibles: false,
      index: 0,
      res: "",
      memo: "",
      total: 6,
      formred: {
        region: {
          id: "",
          redPaper: 0
        }
      },
      redpaper: "",
      choose: "",
      address: "",
      forms: {
        resource: ""
      },
      data: "",
      addressData_: addressData_,
      formLabelWidth: "120px",
      dialogVisible: false,
      form: {
        tel: "",
        province_act: {
          code: "",
          name: ""
        }, // 当前省
        city_act: {
          code: "",
          name: ""
        }, // 当前省
        county_act: {
          code: "",
          name: ""
        }, // 当前省
        name: "",
        add: ""
      },
      rules: {
        county_act: [
          { required: true, message: "请选择所在区县", trigger: "blur" }
        ],
        city_act: [
          {
            required: true,
            message: "",
            message: "请选择所在市",
            trigger: "blur"
          }
        ],
        province_act: [
          { required: true, message: "请选择所在省", trigger: "blur" }
        ],
        tel: [
          {
            required: true,
            pattern: /^1[3456789]\d{9}$/,
            message: "请输入正确的电话号码",
            trigger: "blur"
          }
        ],
        name: [
          {
            required: true,
            min: 10,
            max: 11,
            message: "请输入姓名",
            trigger: "blur"
          }
        ],
        add: [{ required: true, message: "请输入详细地址", trigger: "blur" }]
      }
    };
  },
  watch: {
    weixin(sss) {},

    address(val) {
      this.analysisDefaultAddress();
    }
  },
  computed: {
    selfType() {
      return this.type === "default";
    }
  },
  created() {},

  methods: {
    handleClose(done) {
      this.$confirm("只差一步完成支付，确认离开？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },

    sure() {
      let _this = this;
      this.dialog = true;

      let params = new URLSearchParams();
      params.append("token", localStorage.getItem("token"));

      params.append("orderId", this.serialNumber);

      this.$axios.post("/api/order/detail", params).then(res => {
        console.log(res.data.payStatus + "111111118");
        if (res.data.payStatus == 3) {
          this.$message({
            message: "支付成功，感谢您的惠顾",
            type: "success",
            center: "true",
            offset: "300",
            duration: "1800"
          });
          this.dialog = false;
        } else {
          this.$message({
            message: "订单未支付，请检查检查网络重新支付",
            type: "warning",
            center: "true",
            offset: "300",
            duration: "2800"
          });
        }
      });
    },
    qrCode(url) {
      let qrcode = new QRCode("qrcode", {
        width: 150, //图像宽度
        height: 150, //图像高度
        colorDark: "#000000", //前景色
        colorLight: "#ffffff", //背景色
        typeNumber: 4,
        correctLevel: QRCode.CorrectLevel.H //容错级别 容错级别有：（1）QRCode.CorrectLevel.L （2）QRCode.CorrectLevel.M （3）QRCode.CorrectLevel.Q （4）QRCode.CorrectLevel.H
      });
      qrcode.clear(); //清除二维码
      qrcode.makeCode(url); //生成另一个新的二维码
    },
    dfadd() {
      let _this = this;
      let params = new URLSearchParams();
      params.append("token", localStorage.getItem("token"));
      params.append("id", this.address[this.index].id);
      this.$axios.post("/api/address/set_default  ", params).then(res => {
        this.$message({
          message: res.data.message,
          type: "success",
          center: "true",
          offset: "300",
          duration: "800"
        });
        console.log(res);
      });
    },
    del_address() {
      let _this = this;
      let params = new URLSearchParams();
      params.append("token", localStorage.getItem("token"));
      params.append("id", this.address[this.index].id);
      this.$axios.post("/api/address/del ", params).then(res => {
        this.$message({
          message: res.data.message,
          type: "success",
          center: "true",
          offset: "300",
          duration: "800"
        });
        console.log(res);
      });
    },
    totalprice() {
      console.log(this.formred.region);
      console.log(this.data.postage);
    },
    chooseadd(i) {
      console.log(i + "4155555555555555555");
      this.index = i;
    },
    handleClick() {},
    confirmPay() {
      if (this.address[0] == undefined) {
        this.$message({
          message: "您还没有收货地址，请先添加收货地址",
          type: "success",
          center: "true",
          offset: "300",
          duration: "1000"
        });
        return;
      }
      if (this.forms.resource == "") {
        this.$message({
          message: "您选择您的支付方式",
          type: "success",
          center: "true",
          offset: "300",
          duration: "1000"
        });
        return;
      }

      if (this.$route.query.tag == 4) {
        let _this = this;

        let params = new URLSearchParams();
        params.append("token", localStorage.getItem("token"));
        params.append("gid", this.$route.query.gid);
        params.append("number", this.$route.query.num);
        // params.append("payment",this.forms.resource);
        params.append("redPaperId", this.formred.region.id);
        params.append("addressId", this.address[0].id);
        params.append("memo", this.memo);
        // params.append("activity",'');
        // params.append("activityLaunchId",'');

        this.$axios.post("/api/goods/buy", params).then(res => {
          if (res.data.login != 1) {
            this.$router.push("/login/login");
          } else {
            if (this.forms.resource == 2) {
              let temp = window.location.href;

              window.location =
                "http://tapp.huainanhui.com/index.php/order_pay/index?token=" +
                localStorage.getItem("token") +
                "&successUrl=" +
                "http://test.huainanhui.com" +
                "&errorUrl=" +
                "http://test.huainanhui.com/pay/payfail" +
                "&&payment=" +
                this.forms.resource +
                "&&serialNumber=" +
                res.data.serialNumber;
            } else if (this.forms.resource == 4) {
              let _this = this;
              this.serialNumber = res.data.serialNumber;
              this.dialog = true;

              let params = new URLSearchParams();
              params.append("token", localStorage.getItem("token"));
              params.append("payment", 4);
              params.append("serialNumber", res.data.serialNumber);

              this.$axios.post("/order_pay/index", params).then(res => {
                this.imgcode = res.data.qrcode;
              });
            }
          }
        });
      } else if (this.$route.query.tag == 5) {
        let _this = this;

        let params = new URLSearchParams();
        params.append("token", localStorage.getItem("token"));
        params.append("cartIds", this.$route.query.cartIds);

        params.append("redPaperId", this.formred.region.id);
        params.append("addressId", this.address[0].id);
        params.append("memo", this.memo);

        this.$axios.post("/api/cart/buy", params).then(res => {
          if (res.data.login != 1) {
            this.$router.push("/login/login");
          } else {
            if (this.forms.resource == 2) {
              let temp = window.location.href;

              window.location =
                "http://tapp.huainanhui.com/index.php/order_pay/index?token=" +
                localStorage.getItem("token") +
                "&successUrl=" +
                "http://test.huainanhui.com" +
                "&errorUrl=" +
                "http://test.huainanhui.com/pay/payfail" +
                "&&payment=" +
                this.forms.resource +
                "&&serialNumber=" +
                res.data.serialNumber;
            } else if (this.forms.resource == 4) {
              let _this = this;
              this.serialNumber = res.data.serialNumber;
              this.dialog = true;

              let params = new URLSearchParams();
              params.append("token", localStorage.getItem("token"));
              params.append("payment", 4);
              params.append("serialNumber", res.data.serialNumber);

              this.$axios.post("/order_pay/index", params).then(res => {
                this.imgcode = res.data.qrcode;
              });
            }
          }
        });
      } else if (this.$route.query.tag == 2) {
        let _this = this;

        let params = new URLSearchParams();
        params.append("token", localStorage.getItem("token"));
        params.append("seckillId", this.$route.query.id);

        params.append("redPaperId", this.formred.region.id);
        params.append("addressId", this.address[0].id);
        params.append("memo", this.memo);

        this.$axios.post("/api/seckill/buy", params).then(res => {
          console.log(res.data);

          if (res.data.login != 1) {
            this.$router.push("/login/login");
          } else {
            if (this.forms.resource == 2) {
              let temp = window.location.href;

              console.log(this.temp);
              window.location =
                "http://tapp.huainanhui.com/index.php/order_pay/index?token=" +
                localStorage.getItem("token") +
                "&successUrl=" +
                "http://test.huainanhui.com" +
                "&errorUrl=" +
                "http://test.huainanhui.com/pay/payfail" +
                "&&payment=" +
                this.forms.resource +
                "&&serialNumber=" +
                res.data.serialNumber;
            } else if (this.forms.resource == 4) {
              let _this = this;
              this.serialNumber = res.data.serialNumber;
              this.dialog = true;

              let params = new URLSearchParams();
              params.append("token", localStorage.getItem("token"));
              params.append("payment", 4);
              params.append("serialNumber", res.data.serialNumber);

              this.$axios.post("/order_pay/index", params).then(res => {
                this.imgcode = res.data.qrcode;
              });
            }
          }
        });
      } else if (this.$route.query.tag == 1) {
        let _this = this;

        if (this.$route.query.tags == 0) {
          let params = new URLSearchParams();
          params.append("token", localStorage.getItem("token"));
          params.append("groupInitiateId", this.$route.query.groupGoodsId);

          params.append("redPaperId", this.formred.region.id);
          params.append("addressId", this.address[0].id);
          params.append("memo", this.memo);
          this.$axios.post("/api/group/enroll", params).then(res => {
            console.log(res.data);

            if (this.forms.resource == 2) {
                let params={'token':localStorage.getItem('token'),
                'successUrl':'http://test.huainanhui.com',
                'errorUrl':'https://www.huainanhui.com/pay/payfail',
                'payment':2,
                'serialNumber':'res.data.serialNumber'}
          // 创建form元素
    var temp_form = document.createElement("form");
    // 设置form属性
    temp_form .action = 'http://tapp.huainanhui.com/index.php/order_pay/index'      
    temp_form .target = "_self";
    temp_form .method = "post";      
    temp_form .style.display = "none";
    // 处理需要传递的参数 
    console.log(params)
    for (var x in params) { 
        console.log('=========')  
        var opt = document.createElement("textarea");      
        opt.name = x;      
        opt.value = params[x];    
        console.log(opt+'=========')   
        temp_form .appendChild(opt);      
    }    
  
    console.log(temp_form) 
  
    document.body.appendChild(temp_form);
    // 提交表单      
    temp_form .submit();

              // let temp = window.location.href;

              // console.log(this.temp);
              // window.location =
                // "http://tapp.huainanhui.com/index.php/order_pay/index?token=" +
                // localStorage.getItem("token") +
                // "&successUrl=" +
                // "http://test.huainanhui.com" +
                // "&errorUrl=" +
                // "https://www.huainanhui.com/pay/payfail" +
                // "&&payment=" +
                // this.forms.resource +
                // "&&serialNumber=" +
                // res.data.serialNumber;
            } else if (this.forms.resource == 4) {
              let _this = this;
              this.serialNumber = res.data.serialNumber;
              this.dialog = true;

              let params = new URLSearchParams();
              params.append("token", localStorage.getItem("token"));
              params.append("payment", 4);
              params.append("serialNumber", res.data.serialNumber);

              this.$axios.post("/order_pay/index", params).then(res => {
                this.imgcode = res.data.qrcode;
              });
            }
          });
        } else {
          let params = new URLSearchParams();
          params.append("token", localStorage.getItem("token"));
          params.append("groupGoodsId", this.$route.query.groupGoodsId);

          params.append("redPaperId", this.formred.region.id);
          params.append("addressId", this.address[0].id);
          params.append("memo", this.memo);
          this.$axios.post("/api/group/initiate", params).then(res => {
            console.log(res.data);

            if (this.forms.resource == 2) {
              let temp = window.location.href;

              console.log(this.temp);
              window.location =
                "http://tapp.huainanhui.com/index.php/order_pay/index?token=" +
                localStorage.getItem("token") +
                "&successUrl=" +
                "http://test.huainanhui.com" +
                "&errorUrl=" +
                "https://www.huainanhui.com/pay/payfail" +
                "&&payment=" +
                this.forms.resource +
                "&&serialNumber=" +
                res.data.serialNumber;
            } else if (this.forms.resource == 4) {
              let _this = this;
              this.serialNumber = res.data.serialNumber;
              this.dialog = true;

              let params = new URLSearchParams();
              params.append("token", localStorage.getItem("token"));
              params.append("payment", 4);
              params.append("serialNumber", res.data.serialNumber);

              this.$axios.post("/order_pay/index", params).then(res => {
                this.imgcode = res.data.qrcode;
              });
            }
          });
        }
      }
    },
    getlist() {
      let _this = this;
      if (this.$route.query.tag == 2) {
        let params = new URLSearchParams();
        params.append("token", localStorage.getItem("token"));
        params.append("seckillId", this.$route.query.id);
        //  params.append("number",this.$route.query.num);

        this.$axios.post("/api/seckill/settlement", params).then(res => {
          this.redpaper = res.data.redPaper;
          this.data = res.data.goods[0];
          this.address = res.data.address ? res.data.address : "";
        });
      } else if (this.$route.query.tag == 4) {
        let params = new URLSearchParams();
        params.append("token", localStorage.getItem("token"));
        params.append("gid", this.$route.query.gid);
        params.append("number", this.$route.query.num);

        this.$axios.post("/api/goods/settlement", params).then(res => {
          this.redpaper = res.data.redPaper;
          this.data = res.data.goods[0];
          this.address = res.data.address;
        });
      } else if (this.$route.query.tag == 5) {
        let params = new URLSearchParams();
        params.append("token", localStorage.getItem("token"));
        params.append("cartIds", this.$route.query.cartIds);

        this.$axios.post("/api/cart/settlement", params).then(res => {
          this.cartlist = res.data;
          this.redpaper = res.data.redPaper;
          this.data = res.data.goods;
          this.address = res.data.address;
        });
      } else if (this.$route.query.tag == 1) {
        // console.log('pppppppppppppppppppppppppp')

        console.log();
        if (this.$route.query.tags == 0) {
          let params = new URLSearchParams();
          params.append("token", localStorage.getItem("token"));
          params.append("groupInitiateId", this.$route.query.groupGoodsId);
          this.$axios.post("/api/group/enroll_settlement", params).then(res => {
            //  console.log(JSON.stringify(res.data)+'yyyyyyyyyyyyyyyyy')

            this.redpaper = res.data.redPaper;
            this.data = res.data.goods[0];
            // console.log(this.data+'22222222222222')
            this.address = res.data.address;
          });
        } else {
          let params = new URLSearchParams();
          params.append("token", localStorage.getItem("token"));
          params.append("groupGoodsId", this.$route.query.groupGoodsId);
          this.$axios
            .post("/api/group/initiate_settlement", params)
            .then(res => {
              console.log(JSON.stringify(res.data) + "yyyyyyyyyyyyyyyyy");

              this.redpaper = res.data.redPaper;
              this.data = res.data.goods[0];
              console.log(this.data + "22222222222222");
              this.address = res.data.address;
            });
        }
      }
    },
    getaddress() {
      let _this = this;
      let params = new URLSearchParams();
      params.append("token", localStorage.getItem("token"));
      this.$axios.post("/api/address/get_list", params).then(res => {
        console.log(res);
      });
    },
    confirm() {
      this.dialogVisible = false;
      let this_ = this;
      let p_id = null;
      let c_id = null;
      let con_id = null;
      console.log(this.addressData_);
      this.addressData_.provinceList.forEach((v, i) => {
        let flag = false;
        let temp_p = null;
        if (this_.form.province_act.name.indexOf("市") > -1) {
          // temp_p = this_.form.province_act.name.split("市").join("");
          temp_p = (this_.form.province_act.name || "").split("市").join("");
          flag = true;
        } else {
          temp_p = this_.form.province_act.name;
        }
        if (v.name === temp_p) {
          p_id = v.id;
          this_.addressData_.cityList[v.id].forEach((vs, i) => {
            if (vs.name === this_.form.city_act.name) {
              c_id = vs.id;
              this_.addressData_.countyList[vs.id].forEach((vd, i) => {
                if (vd.name === this_.form.county_act.name) {
                  con_id = vd.id;
                }
              });
            }
          });
        }
      });
      // let data = {
      //   token: this.c.getCookie(),
      //   name: this.form.name,
      //   phone: this.form.tel,
      //   /*  proviceId:p_id,
      //  cityId:c_id, */
      //   countyId: con_id,
      //   address: this.form.add,
      //   addressid: this.detailid
      // };
      //   if(this.list.length < 20 || this.sign == 2){
      //     let self = this;
      //     self.$ajax
      //       .post(
      //         "/index.php/user/address/add_edit",
      //         self.$qs.stringify(data),
      //         {}
      //       )
      //       .then(res => {
      //         if (res.data.code === 1) {
      //           this.$message({
      //             message: res.data.message,
      //             type: "success",
      //             center: "true",
      //             offset: "300",
      //             duration: "800"
      //           });
      //         } else if (res.data.code === 0) {
      //           this.$message({
      //             message: res.data.message,
      //             type: "warning",
      //             center: "true",
      //             offset: "300",
      //             duration: "800"
      //           });
      //         }
      //         this.getlist();
      //         // self.list
      //       });
      //   } else {
      //     this.$message({
      //       message: "添加地址已到达上限，请删除后再添加！",
      //       type: "warning",
      //       center: "true",
      //       offset: "300",
      //       showClose: true
      //     });
      //   }
      let self = this;
      let params = new URLSearchParams();
      params.append("token", localStorage.getItem("token"));
      params.append("name", this.form.name);
      params.append("phone", this.form.tel);
      params.append("countyId", con_id);
      params.append("address", this.form.add);

      self.$axios.post("/api/address/add", params).then(res => {
        if (res.data.code === 1) {
          this.$message({
            message: res.data.message,
            type: "success",
            center: "true",
            offset: "300",
            duration: "800"
          });
        } else if (res.data.code === 0) {
          this.$message({
            message: res.data.message,
            type: "warning",
            center: "true",
            offset: "300",
            duration: "800"
          });
        }
        this.getlist();
        // self.list
      });
    },
    add_address() {
      this.dialogVisible = true;
      this.form = {
        tel: "",
        province_act: {
          code: "",
          name: ""
        }, // 当前省
        city_act: {
          code: "",
          name: ""
        }, // 当前省
        county_act: {
          code: "",
          name: ""
        }, // 当前省
        name: "",
        add: ""
      };
    },
    handleItemChange(val) {
      let [p_code, c_code] = val;
      if (c_code) {
        let act_city = this.citys.find(item => item.code === c_code);
        if (act_city.children.length > 0) return;
        this.countys = getCounty(act_city);
        act_city.children = this.countys;
      } else {
        let act_province = this.provinces.find(item => item.code === p_code);
        if (act_province.children.length > 0) return;
        this.citys = getCity(act_province, true);
        act_province.children = this.citys;
      }
    },
    // 选择完毕数据组装
    getCascaderVal(val) {
      let [pro, cit, con] = val;
      this.province_act = this.provinces.find(item => item.code === pro);
      if (con) {
        this.city_act = this.province_act.children.find(
          item => item.code === cit
        );
        this.county_act = this.city_act.children.find(
          item => item.code === con
        );
      } else {
        this.city_act = this.province_act;
        this.county_act = this.city_act.children.find(
          item => item.code === cit
        );
      }

      let { code: pro_code, name: pro_name } = this.province_act;
      let { code: cit_code, name: cit_name } = this.city_act;
      let { code: cou_code, name: cou_name } = this.county_act;
      let string_address = JSON.stringify([
        { code: pro_code, name: pro_name },
        { code: cit_code, name: cit_name },
        { code: cou_code, name: cou_name }
      ]);
      this.$emit("update:address", string_address);
    },
    // 省份更改
    provinceChange(val) {
      this.city_act = {
        code: "",
        name: ""
      };
      this.county_act = {
        code: "",
        name: ""
      };
      this.countys = [];
      this.citys = getCity(val);
    },
    // 城市更改
    citysChange(val) {
      this.county_act = {
        code: "",
        name: ""
      };
      this.countys = getCounty(val);
    },
    // 县更改
    countysChange(val) {
      let string_address = JSON.stringify([
        this.province_act,
        this.city_act,
        this.county_act
      ]);
      this.$emit("update:address", string_address);
    },
    // 解析默认地址
    analysisDefaultAddress() {
      if (!this.address) return;
      let address = "";
      try {
        address = JSON.parse(this.address) || [];
      } catch (error) {
        console.log("地址信息不合规范:" + error);
      }
      let data_format = address instanceof Array;
      if (!data_format) return;
      if (this.type === "default") {
        [
          this.province_act = {},
          this.city_act = {},
          this.county_act = {}
        ] = address;

        if (this.province_act.code) {
          this.citys = getCity(this.province_act);
        }

        if (this.city_act.code) {
          this.countys = getCounty(this.city_act);
        }
      } else {
        let [pro, cit, con] = address;
        this.cascader_val =
          pro.code !== cit.code
            ? address.map(item => item.code)
            : [pro.code, con.code];
        this.cascaderData(this.cascader_val);
      }
    },
    // 处理默认地址时级联数据
    cascaderData(val) {
      let [p_code, c_code, n_code] = val;
      let act_province = this.provinces.find(item => item.code === p_code);
      this.citys = getCity(act_province, true);
      act_province.children = this.citys;
      if (n_code) {
        let act_city = this.citys.find(item => item.code === c_code);
        this.countys = getCounty(act_city);
        act_city.children = this.countys;
      }
    }
  },
  mounted() {
    this.provinces = getProvince();
    this.analysisDefaultAddress();
    console.log(localStorage.getItem("login") + "local");
    console.log(JSON.stringify(this.$route.query) + 10000000000000022222222);
    this.getlist();
    this.getaddress();

    //          function change_red_paper(){
    //     var red_paper = $("#red_paper").find("option:selected").attr('data');
    //     var price = $("#total_price").attr('data');
    //     if(typeof(red_paper) == 'undefined' || red_paper == 'undefined' || red_paper < 1){
    //         $("#total_price").html(cent2dollar(price));
    //         return false;
    //     }
    //     $("#total_price").html(cent2dollar(price - red_paper));
    // }
    // $(document).ready(function () {
    //     //选择某项收货地址
    //     $('.logistics-info .address-list .user-name').on('click', '', function(){
    //         $('.logistics-info ul.address-list li').each(function () {
    //             $(this).removeClass('selected');
    //         });
    //         $(this).parent().addClass('selected');
    //         $('#address_id').val($(this).attr('addressid'));//收获地址id
    //         hide_address();
    //         shipping_address($(this).attr('addressid'));
    //     });
    //     //选择支付方式
    //     $('#cart_payment .ui-radiobox').on('click', '', function(){
    //         $('#cart_payment .ui-radiobox').removeClass('payment_rdo_checked');
    //         $('#cart_payment .ui-radiobox').addClass('payment_rdo');
    //         $(this).removeClass('payment_rdo');
    //         $(this).addClass('payment_rdo_checked');
    //         $('#payment').val($(this).find('input').val());
    //     });
    //     shipping_address();//显示默认收获地址
    //     //确认支付表单
    //     $('#confirm_pay').on('click','',function(){
    //         submit_from();
    //     })
    // });
    // function show_address(){
    //     $('.logistics-info ul.address-list li').show();
    //     $('.logistics-info .more-info a.more-address').hide();
    //     $('.logistics-info .more-info a.close-address').show();
    // }
    // function hide_address(){
    //     $('.logistics-info ul.address-list li').each(function () {
    //         if(!$(this).hasClass('selected')){
    //             $(this).hide();
    //         }
    //     });
    //     $('.logistics-info .more-info a.more-address').show();
    //     $('.logistics-info .more-info a.close-address').hide();
    // }
    // function shipping_address(id=0){
    //     if(addressList.length < 1){
    //         layer.msg('暂时没有配置收货地址，不能支付', {icon: 5, time: 2000,offset:['800']});
    //     }
    //     if(id > 0){
    //         for (var i = 0; i < addressList.length; i++) {
    //             if(addressList[i].id == id){
    //                 var temp = addressList[i];
    //             }
    //         }
    //         $('#cart_buy_total span.address').html(temp.province + temp.city + temp.county + temp.address);//收货地址
    //         $('#cart_buy_total span.user-info').html(temp.name +'&nbsp;'+ temp.phone);//收货人
    //     } else {
    //         for (var i = 0; i < addressList.length; i++) {
    //             if(addressList[i].default == 1){
    //                 var temp = addressList[i];
    //             }
    //         }
    //         // <?php if(!empty($this->address)):?>
    //         // $('#cart_buy_total span.address').html(temp.province + temp.city + temp.county + temp.address);//收货地址
    //         // $('#cart_buy_total span.user-info').html(temp.name +'&nbsp;'+ temp.phone);//收货人
    //         // <?php endif;?>
    //     }
    // }
    //删除地址
    // function del_address(id){
    //     if(id == $('#address_id').val()){
    //         layer.msg('您不能删除默认收货地址', {icon: 5, time: 2000,offset: ['800']});
    //         return false;
    //     }
    //     layer.confirm('确认要删除改地址吗？',{
    //         offset: ['100'],
    //         btn: ['确认'],
    //         title: '删除地址',
    //         btn1: function (index) {
    //             $.post(
    //                 "/user/address/del.html?t" + Math.random(0),
    //                 {'id':id},
    //                 function (result) {
    //                     if (result.code == 1) {
    //                         layer.msg(result.message, {icon: 1, time: 20000,offset: ['800']});
    //                         $('#address_' + id).remove();
    //                     } else {
    //                         layer.msg(result.message, {icon: 5, time: 20000,offset: ['800']});
    //                     }
    //                 },
    //                 "json"
    //             );
    //         }
    //     });
    // }
    // function submit_from(){

    //     var address_id = $('#address_id').val();
    //     var payment = $('#payment').val();

    //     if(address_id <  1){
    //         layer.msg('请选择收获地址', {icon: 5, time: 2000,offset:['800']});
    //         return false;
    //     }
    //     if(payment <  1){
    //         layer.open({
    //             offset: ['100'],
    //             title: '请选择支付方式',
    //             content: '您还没有选择支付方式，请选择您的支付方式'
    //         });
    //         return false;
    //     }

    // <?php if($this->uri->rsegment(2)=='index'):?>
    //商品直接购买结算
    // var gid= $(".order-item").attr('gid');
    // var number=$(".order-item").attr('number');;
    // console.log(1);
    // $.post(
    //     "/index.php/api/goods/buy.html?t" + Math.random(0),
    //     {'gid':gid, 'number': number,'redPaperId':$('#red_paper').val(), 'addressId':address_id, 'memo':$('#memo').val(),
    //     //  'activity':'<?php echo $this->input->get('activity')?>','activityId':'<?php echo $this->input->get('activityId')?>', 'activityLaunchId': '<?php echo $this->input->get('activityLaunchId'); ?>'
    //      },
    //     function (result) {
    //         if (result.code == 1) {
    //             layer.msg(result.message, {icon: 1, time: 2000,offset:['800']});
    //             window.location.href="/index.php/user/order/pay/" + result.orderId + "/" + payment;
    //         } else {
    //             layer.msg(result.message, {icon: 5, time: 2000,offset:['800']});
    //         }
    //     },
    //     "json"
    // );
    // <?php elseif($this->uri->rsegment(2)=='cart'):?>
    // <?php $i=0; foreach($this->goodsList as $goods):?>
    // cart[<?php echo $i;?>] = <?php echo $goods->cartId;?>;
    // <?php $i++; endforeach;?>
    //购物车结算
    // $.post(
    //     "/index.php/api/cart/settle_accounts_ajax?ajax=true&t" + Math.random(0),
    //     {'payment': payment, 'redPaperId':$('#red_paper').val(), 'addressId':address_id, 'memo':$('#memo').val(),'cart' : cart},
    //     function (result) {
    //         if (result.code == 1) {
    //             layer.msg(result.message, {icon: 1, time: 2000,offset:['800']});
    //             window.location.href="/index.php/user/order/pay/" + result.orderId + "/" + payment;
    //         } else {
    //             layer.msg(result.message, {icon: 5, time: 2000,offset:['800']});
    //         }
    //     },
    //     "json"
    // );
    // <?php endif;?>
    // }
  }
};
</script>
<style scoped>
/* .button_t{
  width:100px;
  height:40px;
} */
@import url("../../static/css/cart.css");
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
i {
  font-style: normal;
}
input:disabled {
  background: white;
}
.content {
  min-height: 600px;
  width: 1200px;
  margin: 0 auto;
  padding: 0 45px;
  box-sizing: border-box;
}
.content > p {
  height: 95px;
  line-height: 95px;
  font-size: 18px;
}
.content > p span {
  float: left;
  color: #542628;
}
.content > p span:last-child {
  font-size: 14px;
  color: #74181b;
  float: right;
}
.info {
  border: 1px #e9e9e9 solid;
  overflow: hidden;
  width: 100%;
}
.info tr,
.info tr td {
  height: 90px;
}
.info tr:nth-child(1) {
  height: 39px;
  line-height: 39px;
  background: #f5f5f5;
  font-size: 14px;
}
.info tr:nth-child(1) th {
  font-weight: normal;
}
.info tr td {
  text-align: center;
}
.info tr th:nth-child(1) {
  width: 780px;
  text-align: left;
  padding-left: 100px;
  box-sizing: border-box;
}
.info tr td:nth-child(1) {
  text-align: left;
  padding-left: 15px;
}
.info tr td:nth-child(1) div {
  display: flex;
  flex-direction: row;
}
.info tr td:nth-child(1) div img {
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  border: 1px #c9c9c9 solid;
  margin-right: 16px;
}
.info tr td:nth-child(1) div p {
  margin-top: 16px;
  color: #8d8d8d;
  font-size: 12px;
}
.info tr td input {
  width: 442px;
  height: 30px;
  background: #f5f5f5;
  outline: none;
  border: 0;
  font-size: 14px;
  padding: 0 14px;
}
.info tr td span {
  font-size: 7px;
}
.info tr td:nth-child(2),
.info tr td:nth-child(4) {
  font-size: 10px;
}
.info tr td:nth-child(4) {
  color: #de0812;
}
.info tr:last-child,
.info tr:last-child td {
  height: 58px;
}
.pay_way {
  margin-top: 35px;
  overflow: hidden;
}
.pay_way p {
  font-size: 18px;
  color: #542628;
  margin-bottom: 20px;
}
.pay_way div {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  padding: 0 35px;
}
.red_packet {
  height: 30px;
  margin-top: 30px;
  font-size: 18px;
  color: #542628;
  display: flex;
  flex-direction: row;
  margin-bottom: 44px;
}
.red_packet select {
  width: 348px;
  height: 28px;
  outline: none;
}
.total {
  height: 60px;
  line-height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 18px;
  color: #542628;
}
.total p {
  font-size: 18px;
  margin-left: 28px;
}
.total p i {
  font-size: 12px;
}
.total_o {
  height: auto;
  background: #f5f5f5;
  width: 100%;
  margin-bottom: 30px;
}
.total_o div {
  overflow: hidden;
  width: 100%;
}
.total_o div:nth-child(1) p {
  color: #5f2124;
  padding: 0 16px;
  font-size: 16px;
  float: left;
  height: 65px;
  line-height: 65px;
}
.total_o div:nth-child(1) p:last-child {
  font-size: 20px;
  float: right;
  padding: 0 16px;
}
.total_o div:nth-child(1) p:last-child i {
  font-size: 16px;
  color: #de0812;
}
.total_o div:nth-child(1) p:last-child span {
  color: #de0812;
}
.total_o div:nth-child(2) p {
  color: #5f2124;
  font-size: 16px;
  margin-right: 15px;
}
.total_o div:nth-child(2) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.order_btn {
  height: 60px;
  width: 100%;
  margin-bottom: 300px;
}
.order_btn button {
  height: 60px;
  width: 180px;
  float: right;
  background: #74181b;
  color: #fff;
  border-radius: 5px;
  outline: none;
  border: 0;
  font-size: 20px;
}
</style>
<style scoped>
.logistics-info .defualt {
  cursor: pointer !important;
}
.logistics-info li p {
  float: left;
  margin-right: 10px;
  display: block;
}
.logistics-info li .address-info {
  font-size: 24px;
}
.user-name {
  font-size: 25px !important;
}
.el-input {
  margin-bottom: 20px;
}
.sss {
  text-align: center;
  margin-top: 20px;
}
.shop_right table {
  text-align: center;
  margin-top: 0.5rem;
  width: 100%;
  border: 1px#ececec solid;
}
.shop_right table tr {
  width: 100%;
  height: 50px;
}
.shop_right table th {
  height: 4.8rem;
  background: rgb(228, 223, 223);
  font-size: 16px;
  color: #74171b;
}
.el-select {
  width: 100% !important;
}
.shop_right table td:last-of-type span {
  cursor: pointer;
}
.shop_right table td {
  height: 2.8rem;
  font-size: 14px;
  border-bottom: 1px#ececec solid;
  margin-top: 1px;
}
.shop_right table tr:last-child td {
  border: 0;
}
.shop_right table tr th:nth-child(1) {
  width: 10%;
}
.shop_right table tr th:nth-child(2) {
  width: 20%;
}
.shop_right table tr th:nth-child(3) {
  width: 20%;
}
.shop_right table tr th:nth-child(4) {
  width: 25%;
}
.shop_right table tr th:nth-child(5) {
  width: 15%;
}
.increased {
  display: flex;
  flex-direction: row;
}
.increased p {
  line-height: 40px;
  margin-left: 10px;
}

.button {
  background: rgb(116, 24, 27);
  width: 15%;
  color: #fff;
}
/* .el-button:hover{
  color: #74181b;
  border-color: rgb(255, 167, 170);
  background-color: rgb(255, 234, 235);
} */
.el-button--primary {
  background: rgb(116, 24, 27);
  border-color: #74181b;
}
.buttonf {
  margin-left: 800px;
  width: 80px;
  height: 40px;
  background: rgb(116, 24, 27);
  color: #fff;
  margin: 0 auto;
  text-align: center;
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

.shop_right {
  width: 1000px;
  height: 1000px;
  float: left;
  padding-left: 30px;
  margin-top: 16px;
  box-sizing: border-box;
}
.shop_right h1 {
  font-size: 26px;
  height: 55px;
  line-height: 55px;
  font-weight: normal;
  padding: 0 20px;
  margin-bottom: 20px;
  border-bottom: 1px #ececec solid;
}
.message {
  padding-left: 20px;
}
.message > div {
  height: 132px;
  margin-bottom: 16px;
  background: #f6f6f6;
  padding: 16px 80px 16px 24px;
  box-sizing: border-box;
  color: #666666;
}
.message div img {
  height: 100px;
  width: 100px;
  border: 1px #edecea solid;
  box-sizing: border-box;
  float: left;
}
.message > div > div {
  margin-left: 38px;
  float: left;
  padding-top: 5px;
  box-sizing: border-box;
  height: 100px;
}
.message > div > div p:nth-child(1) {
  font-size: 18px;
  line-height: 18px;
  height: 18px;
  margin-bottom: 20px;
}
.message > div > div p:nth-child(2) {
  font-size: 12px;
  height: 12px;
  line-height: 12px;
  margin-bottom: 32px;
}
.message > div > div p:nth-child(3) {
  font-size: 8px;
}
.message div > button {
  width: 185px;
  height: 50px;
  font-size: 20px;
  color: #74171b;
  border: 1px #74171b solid;
  background: #f6f6f6;
  float: right;
  margin-top: 25px;
}
.message div > button:hover {
  background: #74171b;
  color: #fff;
}
.shop_list ul .changeColor {
  color: #74171b;
}
</style>
