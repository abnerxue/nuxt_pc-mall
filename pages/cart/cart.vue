<!--
 * @Description: vue
 * @Version: 2.0.1.003
 * @Author: 薛松田
 * @Date: 2020-01-17 18:02:52
 * @LastEditors: 薛松田
 * @LastEditTime: 2020-03-14 17:18:50
 -->
<template>
    <div>
        <div class="blank20"></div>
<div class="wrap_full main_layout" style="margin:0px auto">
	<div class="info-bar">
		<p>商品信息</p>
    </div>
	<div id="cart_list">

		<div class="cart_empty" v-if='datalist==""'>
            <img src="../../static/img/cart_empty.jpg" alt="">
			<span>
				购物车内暂时没有商品<br>
				马上去 [ <a @click='go(1)'>首页</a> ] 挑选商品<br>
				或者 [<a @click='go(2)'>登录</a>]。
			</span>
		</div>
            <div>
    <el-table
    show-summary
    :summary-method="getSummaries"
    ref="multipleTable"
    :data="datalist"
    tooltip-effect="dark"
    style="width: 100%"
    >
   
  </el-table>


    <el-table
    
     
        ref="multipleTable"
        :data="datalist"
        tooltip-effect="dark"
        
        @selection-change="handleSelectionChange"
      >
       <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <el-table-column
      
      label="单价"
      width="120">
      <template slot-scope="scope"><img style="height:50px;" :src='scope.row.thumb'/></template>
    </el-table-column>
    <el-table-column
      label="商品信息"
       prop="title"
      width="520">
      <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
    </el-table-column>
    <el-table-column
      prop="price"
      label="单价(元)"
       align="center"
      width="120">
    </el-table-column>
    <el-table-column
     
       align="center"
      label="数量"
      width='200'
      show-overflow-tooltip>
      <template slot-scope="scope">
           <el-input-number class='numb'  v-model="scope.row.number"
            @change="handleChange(scope.$index, scope.row)" :min="1" label="描述文字" style=''> </el-input-number>
      </template>
    </el-table-column>
    <el-table-column
      prop="price"
      align="center"
      label="总计(元)"
      show-overflow-tooltip>
      <template slot-scope="scope">{{scope.row.number*scope.row.price}}</template>
    </el-table-column>
    <el-table-column
      prop="address"
       align="center"
      label="操作"
      show-overflow-tooltip>
       <template slot-scope="scope">
        
        <el-button
          size="mini"
         
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
      </el-table>
      <div class="cart-list-bd">
				<ul class="cart-list-bd active">
				
					<li class="check-select-num">已选中 <span class="select-num" id="total_goods_num">{{this.num_}}</span> 件商品</li>
					<li class="check-all-count">总计（不含运费）：¥<em class="count" id="total_goods_money">{{this.price_}}</em></li>
					<li class="check-bd-sub">
						<a href="javascript:;"  @click="cart_settle_accounts()"     class="check-sub">结算</a>
					</li>
				</ul>
			</div>
            <!-- <el-input-number class='numb'  v-model="sssss"
            @change="handleChange(value)" :min="1" label="描述文字" style=''> </el-input-number> -->
            </div>
		<!-- <div else>
            <form name="cart_form" action="/user/pay_now/cart.html" method="post" id="cart_form">
			<ul class="cart-list-hd">
				<li class="check-box-wrap">
					<input type="checkbox" name="cbo1" value="1" class="checkAll" checked>
				</li>
				<li class="check-goods-img">全选</li>
				<li class="check-goods-info">商品信息</li>
				<li class="check-price">单价</li>
				<li class="check-num">数量</li>
				<li class="check-count">总计</li>
				<li class="check-edit">操作</li>
			</ul>
			<div class="shop-list">
				<div class="goods-list">



					<ul class="goods-item " id="goods-item" price="" gid="" v-for='(item,i) in datalist' :key='i'>
						<li class="check-box-wrap">
							<input type="checkbox" name="" value=""   @click='sss(item.gid)' class="oneCheck">
						</li>
						<li class="check-goods-img">
							<a href="">
								<img width="80" height="80" :src="item.thumb" alt="">
							</a>
						</li>
						<li class="check-goods-info">
							<p class="goods-name"><a href="">{{item.title}}</a></p>
						</li>
						<li class="check-price">¥ <span class="s_price">{{item.price}}</span></li>
						<li class="check-num">
						
                              <el-input-number class='numb' :key="i" v-model="item.number" @change="handleChange" :min="1" label="描述文字" style='width:140px;position:relative;left:-20px;top:35px;'> </el-input-number>
						</li>
						<li class="check-count">¥<span class="total_li" :data_='item.price*item.number'>{{item.price*item.number}}</span></li>
						<li class="check-edit">
							<a href="javascript:;" @click="del_cart(item.gid)">删除</a>
						</li>
					</ul>

				</div>
			</div>
			<div class="cart-list-bd">
				<ul class="cart-list-bd active">
					<li class="check-box-wrap">
						<input type="checkbox" checked name="cbo1" value="0"  class="checkAll">
					</li>
					<li class="check-goods-img">全选</li>
					<li class="check-goods-info"><a class="remove-select" href="javascript:del_all();">删除已选中商品</a></li>
					<li class="check-select-num">已选中 <span class="select-num" id="total_goods_num">{{totaln}}</span> 件商品</li>
					<li class="check-all-count">总计（不含运费）：¥<em class="count" id="total_goods_money">{{total_price}}</em></li>
					<li class="check-bd-sub">
						<a href="javascript:;"  @click="cart_settle_accounts()"     class="check-sub">结算</a>
					</li>
				</ul>
			</div>
		</form>
        </div> -->

	</div>
</div>
    </div>
</template>
<script>
export default {
    data(){
      return{
          sssss:5,
          price_:'',
          num_:"",
          cartIds:"",
          ddd:true,
          totalm:'',
          totaln:'',
              num: [],
              total_price:'',
          datalist:'',
          tag:1,
      }
    },
    created(){
            let len=3
             for (var i = 0; i < len; i++) {
          var item = {value1: ''};
          this.num.push(item);
        }
    },
    methods:{
    //              handleChange(value) {
    //         console.log(value)
    //   },
           handleChange(index,row) {
                let _this=this
                  let params = new URLSearchParams();
                     params.append("token",localStorage.getItem('token'));
                 this.$axios.post('/api/cart/goods_list',params).then((res)=>{
                       
                       let t=res.data.goods;
               let temp=0
               console.log(this.datalist)
               t.forEach(i=>{
                   if(i.gid==row.gid){
                       temp=i.number
                   }
               })
                 
                 let f=row.number-temp
                  params.append("token",localStorage.getItem('token'));
                      params.append("gid",row.gid);
                       params.append("number",f);
                 this.$axios.post('/api/cart/alter',params).then((res)=>{
                    //  this.datalist=res.data.goods
                   console.log(res)
                    _this.getlist();
               console.log(temp)
                 })
                 })
    
      },
         handleDelete(index,row){
                let _this=this
                  let params = new URLSearchParams();
                     params.append("token",localStorage.getItem('token'));
                      params.append("gid",row.gid);
                 this.$axios.post('/api/cart/del',params).then((res)=>{
                    //  this.datalist=res.data.goods
                   console.log(res)
                    _this.getlist();
                 })
         },
         handleSelectionChange(val) {
             console.log(JSON.stringify(val)+'.........')
             let a=new Array(),b=new Array()
             this.cartIds=new Array()
         val.forEach(i=>{
             this.cartIds.push(i.id)
            a.push(i.number),
            b.push(i.number*i.price)
         })
           
            this.num_ = 0;
        a.forEach((val, index, a) => {
        this.num_ +=  parseFloat(val)
    })
    this.price_=0
       b.forEach((val, index, b) => {
        this.price_ +=  parseFloat(val)
    })
    console.log( this.cartIds +'uuuuuuuu')
    },
       
      getSummaries(param) {
     
      const { columns, data } = param;
       console.log(data+"753");
      const sums = [];
      columns.forEach((column, index) => {
        if (index == 2) {
          return;
        }
       
        if (index == 1) {
          sums[index] = "合计";
          return;
        }
        const values = data.map(item => Number(item[column.property]));

        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);

            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] = sums[index].toFixed(2);
          sums[index] += " 元";
        } else {
          sums[index] = "";
        }
      });

      return sums;
    },
  
        cart_settle_accounts(){
             this.$router.push({
                 path:'/order/order',
                 query:{
                     gmoney:this.price_,
                     gnumber:this.num_,
                     tag:5,
                     cartIds:this.cartIds
                 }
             })
        },
     
        del_cart(gid){
                  let _this=this
                  let params = new URLSearchParams();
                     params.append("token",localStorage.getItem('token'));
                      params.append("gid",gid);
                 this.$axios.post('/api/cart/del',params).then((res)=>{
                    //  this.datalist=res.data.goods
                   console.log(res)
                    _this.getlist();
                 })
        },
         change_cart(gid, num){
    var price = this.datalist.price * 100;
    var number = parseInt($('#goods-item-' + gid + " input[name='number']").val());
    $.post(
        "/index.php/user/cart/add.html?t=" + Math.random(0),
        {'gid':gid,'number':num},
        function (result) {
            if(result.code==1){
                var total_money = cent2dollar(price * (number + num));
                $('#goods-item-' + gid + " li.check-count span").html(total_money);
                $('#goods-item-' + gid + " input[name='number']").val(number + num);
                $('#top_nav_cart_num').html(result.cart_num);
            } else {
                layer.msg(result.message, {icon: 5, time: 2000});
            }
            total(_this);
        },
        "json"
    );
},
        getlist(){
            let _this=this
                  let params = new URLSearchParams();
                     params.append("token",localStorage.getItem('token'));
                 this.$axios.post('/api/cart/goods_list',params).then((res)=>{
                     if(res.data.goods){

                         this.datalist=res.data.goods;
                      
                         this.totaln = this.datalist.length;
                         let this_ = this;
                         this.total_price = '';
                         let t_num = 0;
                         let t_count = 0;
                     this.datalist.forEach(element => {
                         t_num+=parseInt(element.number)*parseFloat(element.price);
                         t_count+= parseInt(element.number);
                     });
                     this.total_price = t_num;
                      this.totaln = t_count;
                     parseFloat(this.total_price).toFixed(2);
                   console.log(res)
                     }else{
                         
                         this.datalist=[];
                         this.totaln = '';
                         let this_ = this;
                         this.total_price = '';
                     }
                 })
        },
         go(i){
             if(i==1){
                 this.$router.push({path:'/'})
             }
              if(i==2){
                 this.$router.push({path:'/login/login'})
             }
         },
         total(e){
  
    var total_num = 0;
    var total_money = 0;
    var total_num2=0;
    $('.goods-list ul.goods-item').each(function(){
        if($(this).find("input[type='checkbox']").is(':checked')){
        //     console.log($(this).find("input[type='checkbox']").is(':checked'));
        //     total_num = parseInt($(this).find("input[name='number']").val());
        // //   this.totaln += parseInt($(this).find(".numb").val());
        // this.totaln = this.datalist.length;
        //     total_money += total_num * parseInt($(this).attr('price') * 100);

        
            e.totaln += 1
            // console.log($(this).find("input[type='checkbox']").is(':checked'));
            // total_num = parseInt($(this).find("input[name='number']").val());
            // total_num2 += parseInt($(this).find("input[name='number']").val());
            // // total_money += total_num * parseInt($(this).attr('price') * 100);
            // e.total_price += total_num * parseInt($(this).attr('price') * 100);
            e.total_price += parseFloat($(this).find("span[class='total_li']").text());
        }
    });
      console.log( total_num2)
    // $('#total_goods_num').html(total_num2);
    // $('#total_goods_money').html(cent2dollar(total_money));
}
    },
    mounted(){
        let _this = this;
        this.total(_this)
        this.getlist()
        //更改购物车数据
function change_cart(gid, num){
    let _this = this;
    var price = $('#goods-item-' + gid).attr('price') * 100;
    var number = parseInt($('#goods-item-' + gid + " input[name='number']").val());
    $.post(
        "/index.php/user/cart/add.html?t=" + Math.random(0),
        {'gid':gid,'number':num},
        function (result) {
            if(result.code==1){
                var total_money = cent2dollar(price * (number + num));
                $('#goods-item-' + gid + " li.check-count span").html(total_money);
                $('#goods-item-' + gid + " input[name='number']").val(number + num);
                $('#top_nav_cart_num').html(result.cart_num);
            } else {
                layer.msg(result.message, {icon: 5, time: 2000});
            }
            total(_this);
        },
        "json"
    );
}

//做总计算，统计当前所选商品的信息：总价、个数等
function total(e){
    
    console.log('777777777777777777777')
    var total_num = 0;
    var total_money = 0;
    var total_num2=0;
    let this_ = e;
    e.total_price=0,e.totaln = 0;
    $('.goods-list ul.goods-item').each(function(el,i){
        if($(this).find("input[type='checkbox']").is(':checked')){
            e.totaln += parseFloat($(this).find("input[class='el-input__inner']").val());
            console.log(JSON.stringify($(".input[class='el-input__inner']"))+'111111')
            // console.log($(this).find("input[type='checkbox']").is(':checked'));
            // total_num = parseInt($(this).find("input[name='number']").val());
            // total_num2 += parseInt($(this).find("input[name='number']").val());
            // // total_money += total_num * parseInt($(this).attr('price') * 100);
            // e.total_price += total_num * parseInt($(this).attr('price') * 100);
            e.total_price += parseFloat($(this).find("span[class='total_li']").text());
        }
    });
    console.log(e.total_price+'===='+e.totaln);
    // $('#total_goods_num').html(total_num2);
    // $('#total_goods_money').html(cent2dollar(total_money));
    // $('#total_goods_money').html(e.total_price);
}

//删除商品
function del_cart(gid){
    let _this = this;
    $.post(
        "/index.php/user/cart/del.html?t=" + Math.random(0),
        {'gid':gid},
        function (result) {
            if(result.code==1){
                $('#goods-item-' + gid).remove();
                layer.msg(result.message, {icon: 1, time: 2000});
            } else {
                layer.msg(result.message, {icon: 5, time: 2000});
            }
            total(_this);
        },
        "json"
    );
}

//删除选中的商品
function del_all(){
    let _this = this;
    $('.goods-list ul.goods-item').each(function(){
        if($(this).find("input[type='checkbox']").is(':checked')){
            var gid = parseInt($(this).attr('gid'));
            $.post(
                "/index.php/user/cart/del.html?t=" + Math.random(0),
                {'gid':gid},
                function (result) {
                    if(result.code==1){
                        $('#goods-item-' + gid).remove();
                    }
                    total(_this);
                },
                "json"
            );
        }
    });
}



/*商品选择*/
let this__ = this;
$(".goods-list").on('click',"span[role='button']",function(){
    // alert();
    
        total(_this);
    // debugger;
});
$("input[type='checkbox']").on('click',function(){
    // debugger;
     
    let _this = this__;
    var sf = $(this).is(":checked");
    var sc= $(this).hasClass("checkAll");
    
    if(sf){
        if(sc){
            $("input[type='checkbox']").each(function(){  
                this.checked=true;
            });
        }else{
            console.log(JSON.stringify($("input[type='checkbox']:checked"))+'0000000000')
            $(this).checked=true; 
            var len = $("input[type='checkbox']:checked").length;
            var len1 = $(".oneCheck").length;
            if(len==len1){
                $("input[type='checkbox']").each(function(){  
                    this.checked=true;  
                }); 
            }
        }
        total(_this);
    }else{
        if(sc){
            $("input[type='checkbox']").each(function(){  
                this.checked=false;  
            });
        }else{
            $(this).checked=false;
            var len = $("input[type='checkbox']:checked").length;
            var len1 = $("input[type='checkbox']").length;
            if(len<len1){
                $('.checkAll').each(function(){
                    this.checked=false;
                })
            }
        }
        total(_this);
    }
});

$(".goods-list").on('click',"input[type='checkbox']",function(){
    // debugger;
    let _this = this__;
    var sf = $(this).is(":checked");
    var sc= $(this).hasClass("checkAll");
    if(sf){
        if(sc){
            $("input[type='checkbox']").each(function(){  
                this.checked=true;
            });
        }else{
            $(this).checked=true; 
            var len = $("input[type='checkbox']:checked").length;
            var len1 = $(".oneCheck").length;
            if(len==len1){
                $("input[type='checkbox']").each(function(){  
                    this.checked=true;  
                }); 
            }
        }
        total(_this);
    }else{
        if(sc){
            $("input[type='checkbox']").each(function(){  
                this.checked=false;  
            });
        }else{
            $(this).checked=false;
            var len = $("input[type='checkbox']:checked").length;
            var len1 = $("input[type='checkbox']").length;
            if(len<len1){
                $('.checkAll').each(function(){
                    this.checked=false;
                })
            }
        }
        total(_this);
    }
});
//结算
function cart_settle_accounts(){
    var gids = new Array();
    var i = 0;
    $('#cart_list .shop-list .goods-list .goods-item').each(function(){
        if($(this).find("input[type='checkbox']").is(':checked')){
            gids[i] = $(this).attr('gid');
            i++;
        }
    });
    if(gids.length < 1){
        layer.alert('请选择要结算的商品！', {icon: 5});
        return false;
    }
    console.log(gids+'744444444')
	// $('#cart_form').submit();
}
    }
}
</script>
<style scoped>
@import url('../../static/css/cart.css');
</style>