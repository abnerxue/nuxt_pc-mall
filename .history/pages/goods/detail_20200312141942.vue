<template>
    <div>
		
         <div class="g_ad">
        <a href="javascript:;" @click="go_inv"></a>
    </div>
             <div><div class="clearfix">
		<div class="wrap_m2 f_l" style="width:894px;overflow:hidden;float:left">
			<div id="rel_nav" style="margin-bottom:20px;">
				<ul class="g_nav">
					<li>本单详情</li>
					<li>识玉轩</li>
					<li>消费评价</li>
					<li>我们的保障</li>
					<li>购买方式 </li>
				</ul>
			</div>
			<div class="show-content" >
				<div class="content_box" id="content" style='background-color:#f5f5f5'>
					<!-- <?php if(!empty($norms)):?> -->
						<div class="btitle">商品规格</div>
						<div class="box_content">
					
                        <div class='good_name' v-for='(item,i) in datalist.norms' :key='i'> <span>{{i}}:</span><div class='good_detail' style="">{{item}}</div></div>
						
							<div style="clear:both;"></div>
						</div>
					<!-- <?php endif;?> -->
					<div class="btitle">商品详情</div>
					<div class="box_content">
						<!-- <?php echo $content;?> -->
                        <img v-for='(item,i) in datalist.imgs' :key='i' :src='item'/>
					</div>
				</div>
				<style>
					.warp{width: 150px;float:left;}
					.warp .warp-img{margin: 5px;}
					.warp .warp-text{margin: 10px;font-size: 14px;}
					.warp .warp-text h3{margin-bottom: 10px;}
					.warp .warp-img img{width: 140px;height: 76px;}
				</style>
				<div class="gn_know" style="display: none;">
					<div>
						<p>翡翠透明度 </p>
						<div class="know_d know1">
							<div>
								<img src="../../static/img/008.jpg" alt="">
								<ul>
									<li>玻璃种</li>
									<li>特征：透明</li>
									<li>肉眼观测：反光观察 / 内部汇聚光较强<br>透光观察 / 多数光线可透过，内部特征清晰可见</li>
								</ul>
							</div>
							<div>
								<img src="../../static/img/009.jpg" alt="">
								<ul>
									<li>冰玻种</li>
									<li>特征：半透明</li>
									<li>反射观察： 内部汇聚光强</li>
									<li>透光观察： 大部分光线可透过，内部特征可见</li>
								</ul>
							</div>
							<div>
								<img src="../../static/img/010.jpg" alt="">
								<ul>
									<li>冰种</li>
									<li>特征：尚透明</li>
									<li>反射观察： 内部汇聚光弱</li>
									<li>透光观察： 部分光线可透过，内部特征尚可见</li>
								</ul>
							</div>
							<div>
								<img src="../../static/img/012.jpg" alt="">
								<ul>
									<li>糯冰种</li>
									<li>特征：微透明</li>
									<li>肉眼观测：反射观察 / 内部有微量汇聚光<br>透光观察 / 部分光线可透过，内部特征模糊可见</li>
								</ul>
							</div>
							<div>
								<img src="../../static/img/013.jpg" alt="">
								<ul>
									<li>细糯种</li>
									<li>特征：不透明</li>
									<li>反射观察： 内部无汇聚光</li>
									<li>透光观察： 基本无光线透过， 内部特征不可见</li>
								</ul>
							</div>
						</div>
					</div>
					<div>
						<p>翡翠的质地</p>
						<div class="know_d know2">
							<div>
								<img src="../../static/img/sy6.jpg" alt="">
								<ul>
									<li>极细/极纯净</li>
									<li>内部构造：矿物颗粒小于0.01mm</li>
									<li>肉眼观测： 内部构造非常紧密细腻，粒度均匀，高倍放大镜下不见颗粒及次生矿物填充痕隙。 外部仅有极不显眼的几处絮状物，不影响整体美观。</li>
								</ul>
							</div>
							<div>
								<img src="../../static/img/sy7.jpg" alt="">
								<ul>
									<li>细/纯净</li>
									<li>特征：透明</li>
									<li>肉眼观测：反光观察 / 内部汇聚光较强<br>透光观察 / 多数光线可透过，内部特征清晰可见</li>
								</ul>
							</div>
							<div>
								<img src="../../static/img/sy8.jpg" alt="">
								<ul>
									<li>较细/较纯净</li>
									<li>内部构造：矿物颗粒小于0.05～0.1.mm</li>
									<li>肉眼观测： 结构致密，粒度尚均匀，高倍放大镜下见少量颗粒及次生矿物填充痕隙。明显的内、外特征，肉眼可见，对整体美观有轻微影响。</li>
								</ul>
							</div>
							<div>
								<img src="../../static/img/sy9.jpg" alt="">
								<ul>
									<li>粗/尚纯净</li>
									<li>内部构造：矿物颗粒小于0.1～0.5mm</li>
									<li>肉眼观测： 结构不够致密，粒度不均匀。高倍放大镜下见细小矿物填充痕隙， 细微的内、外特征，肉眼可见，对整体美观有些影响。</li>
								</ul>
							</div>
							<div>
								<img src="../../static/img/sy10.jpg" alt="">
								<ul>
									<li>较粗/不纯净</li>
									<li>内部构造：矿物颗粒大于0.5mm</li>
									<li>肉眼观测： 结构疏松，粒度大小不均。肉眼可见颗粒及次生矿物填充痕隙等， 内、外特征很明显，肉眼可辨，对整体美观有较明显影响。</li>
								</ul>
							</div>
						</div>
					</div>
					<div>
						<p>和田玉分类</p>
						<div class="know_d know3">
							<div>
								<img src="../../static/img/hty_baiyu.jpg" alt="">
								<ul>
									<li>白玉</li>
									<li>颜色洁白，细腻，滋润，微透明，宛如羊脂者称羊脂白玉；不透明，光泽较差者为白玉。</li>
								</ul>
							</div>
							<div>
								<img src="../../static/img/hty_qingyu.jpg" alt="">
								<ul>
									<li>青玉和青白玉</li>
									<li>色呈深灰绿至蓝绿色，不透明；青白玉是青玉与白玉之间的过渡类型，呈灰绿色。</li>
								</ul>
							</div>
							<div>
								<img src="../../static/img/hty_biyu.jpg" alt="">
								<ul>
									<li>碧玉</li>
									<li>深绿色(菠菜绿色)，质地较粗。碧玉除新疆所产外，我国玉器工艺界把和国外所产的软玉也统称为碧玉。</li>
								</ul>
							</div>
							<div>
								<img src="../../static/img/hty_moyu.jpg" alt="">
								<ul>
									<li>黑玉</li>
									<li>主要含分散的碳质或石墨而呈灰黑色或灰黑与白色相间的条带。如果完全是黑色的，称墨玉。</li>
								</ul>
							</div>
							<div>
								<img src="../../static/img/hty_huangyu.jpg" alt="">
								<ul>
									<li>黄玉</li>
									<li>是地表水中褐铁矿渗入白玉中造成的，米黄至黄色。</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="content_box" id="appraise" style="display:none;">
					<div class="box_title">
						<div class="box_title_text">消费评价</div>
						<div class="box_title_more">我买过本单，<a href="javascript:appraise()" target="_blank">我要评价</a></div>
					</div>
					<div class="box_content">
						<div id="review_list">
							<div class="evaluation">
								<div class="rating clearfix">
									<table>
										<tbody><tr>
												<td class="rate_box noborder">
													<div class="total_group total_num" style='margin:10px 40px;'>
														<b></b><span>{{datalist.grade}}分</span>
													</div>
													<div class="total_group">
														<span class="ui-starbar"><span style="width: <?php echo $praiseRate;?>%;"><input class="ui-starbar" value="0" disabled="true" init="init" style="display: none;"></span></span>
													</div>
													<div class="total_group total_count" style='margin:0 40px;'>
														共<strong>{{data.totalNum}}</strong>人评价
													</div>
												</td>
												<td class="rate_box noborder">
													<div class="count-group" style='width:300px;'>
                                                                  <el-rate
															v-model="value5"
															disabled
															show-score
															text-color="#ff9900"
															score-template="{value}">
															</el-rate>
														<p class='star' style=''><span >5分</span>
																				
													<span class="people f_l">{{datalist.grade_5}}人</span></p>
													</div>
													<div class="count-group">
                                                         <el-rate
													v-model="value4"
													disabled
													show-score
													text-color="#ff9900"
													score-template="{value}">
													</el-rate>
														<p class='star' style=''><span >4分</span>
																				
														<span class="people f_l">{{datalist.grade_4}}人</span></p>
													</div>
													<div class="count-group">
																	<el-rate
														v-model="value3"
														disabled
														show-score
														text-color="#ff9900"
														score-template="{value}">
														</el-rate>
													<p class='star' style=''><span >3分</span>
																				
														<span class="people f_l">{{datalist.grade_3}}人</span></p>
													</div>
													<div class="count-group">
                                                         <el-rate
													v-model="value2"
													disabled
													show-score
													text-color="#ff9900"
													score-template="{value}">
													</el-rate>
														<p class='star' style=''><span >2分</span>
																				
														<span class="people f_l">{{datalist.grade_2}}人</span></p>
													</div>
													<div class="count-group">
                                                         <el-rate
													v-model="value1"
													disabled
													show-score
													text-color="#ff9900"
													score-template="{value}">
													</el-rate>
														<p class='star' style=''><span >1分</span>
																				
														<span class="people f_l">{{datalist.grade_1}}人</span></p>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<!-- <div class="attitude over clearfix">
									<span class="title f_l">:</span>
									<div class="labels f_l active_parent">
									</div>			
								</div> -->
								<div class="blank"></div>
								<div class="clearfix">
									<div class="sort_row" >
									                
<el-tabs v-model="activeName" type="card" @tab-click="handleClick" >
    <el-tab-pane label="全部评价" name="first">
		<ul v-if='data.list!=""'><li  v-for='(item,i) in data.list' :key='i'   style='margin-bottom:20px;'>
		<el-rate
		v-model="item.grade"
		disabled
		show-score
		text-color="#ff9900"
		score-template="{value}">
		</el-rate>
		<img :src='item.images'/> <span>{{item.content}}</span>     <img :src='item.avatar'   style='height:25px;width:25px;float:right;margin:20px 28px 0 0;'/>
		<p  style='float:right;margin:20px 10px 0 60px;'>{{item.userName}}</p><p style='margin:25px 0 20px 75%;'>{{item.postTime}}</p>
		 <el-divider><i class=""></i></el-divider>
		 </li>
		 </ul>
		 <h3 v-else>暂无商品评价</h3>
	</el-tab-pane>
    <el-tab-pane label="好评优先" name="second" >
			<ul><li  v-for='(item,i) in data.list' :key='i'   style='margin-bottom:20px;'>
		<el-rate
		v-model="item.grade"
		disabled
		show-score
		text-color="#ff9900"
		score-template="{value}">
		</el-rate>
		<img :src='item.images'/> <span>{{item.content}}</span>     <img :src='item.avatar'   style='height:25px;width:25px;float:right;margin:20px 28px 0 0;'/>
		<p  style='float:right;margin:20px 10px 0 60px;'>{{item.userName}}</p><p style='margin:25px 0 20px 75%;'>{{item.postTime}}</p>
		 <el-divider><i class=""></i></el-divider></li></ul>
	</el-tab-pane>
    <el-tab-pane label="有图优先" name="third">
			<ul><li  v-for='(item,i) in data.list' :key='i'   style='margin-bottom:20px;'>
		<div  v-if='item.images!=""'>
			<el-rate
		v-model="item.grade"
		disabled
		show-score
		text-color="#ff9900"
		score-template="{value}">
		</el-rate>
		<img :src='item.images'/> <span>{{item.content}}</span>     <img :src='item.avatar'   style='height:25px;width:25px;float:right;margin:20px 28px 0 0;'/>
		<p  style='float:right;margin:20px 10px 0 60px;'>{{item.userName}}</p><p style='margin:25px 0 20px 75%;'>{{item.postTime}}</p>
		 <el-divider><i class=""></i></el-divider>
		</div>
		 </li>
		 </ul>
	</el-tab-pane>
  
  </el-tabs>
     <div v-if="this.data.totalPage>1" class="pages">
      <p @click="Topage((--tag)==0?1:tag)">&lt;</p>
      <p v-for="i in data.totalPage" :key="i" :class="{changebg:tag==i}" @click="Topage(i)">{{i}}</p>
      <p @click="Topage((++tag)>=data.totalPage?data.totalPage:tag)">&gt;</p>
      <p @click="Topage(totalPage)">尾页</p>
    </div>
													<div class="line"></div>
									</div>
								</div>
								
									
							
							
							
							</div>
						</div>
					</div>
				</div>
				<div class="gn_ensure" style="display: none;">
					<div>
						<p>我们的标准</p>
						<div class="ensure_box">
							<div>
								<p>
									<img src="/static/new/img/headstream.png" alt="">
									源头直供
								</p>
								<span>怀南会致力于打造一家值得 信赖的知名企业，我们愿把天然玉石的祥瑞带给每一位消费者。怀南会所有出售的宝贝均来自产业源头一手货源。</span>
								<i>01</i>
							</div>
							<div>
								<p>
									<img src="/static/new/img/handcarved.png" alt="">
									手工雕琢
								</p>
								<span>怀南会致力于发掘玉石之大美为目标，以弘扬中华玉石文化为己任，融合古典和现代风，每一件玉石都传递着幸福美满的祝福，是佩戴和收藏的上佳之选。</span>
								<i>02</i>
							</div>
							<div>
								<p>
									<img src="/static/new/img/saving.png" alt="">
									省心省钱
								</p>
								<span>怀南会立足玉石源头，恪守“怀七分仁义，存三分名利”的古训，追求长久共赢。通过互联网+珠宝的新零售模式，省去中间环节直接为终端消费者提供优质玉石，大大降低了销售成本，用以回馈消费者，怀南会怀南会将秉承“专业省心超值”一贯经营理念，虔诚为广大玉石爱好者用心服务。</span>
								<i>03</i>
							</div>
							<div>
								<p>
									<img src="/static/new/img/recheck.png" alt="">
									接受正规复检
								</p>
								<span>怀南会的玉石100%通过国家权威珠宝检测部门检测。毛料检测-雕刻抛光后的产品把关-摄影中心单品拍照时检测-国家权威珠宝部门检测-物流中心发货前的检查，五大关口层层把守，保证消费者买到心仪的天然玉石，做值得消费者信赖的玉石供应商。</span>
								<i>04</i>
							</div>
							<div>
								<p>
									<img src="/static/new/img/purchase.png" alt="">
									七天无理由退换
								</p>
								<span>怀南会坚持精耕细作，做到专心、专注、专业，力求让顾客买得放心，退换舒心。怀南会出售的所有玉石，自签收之日起，在不影响二次销售的情况下，七日内均可自由发起退换要求，确保您买到最称心的玉石并带给您最优质的购物体验。</span>
								<i>05</i>
							</div>
						</div>
					</div>
					<div>
						<div>
							<img src="/static/new/img/gn_ensure06.jpg" alt="">
							<p>关于图片</p>
							<p>怀南会的每一件玉石的图片都是实物多角度拍摄而成，但由于手机相机不能做到100%的色彩还原，且肉眼与手机的色彩还原也存在差异，所以图片与实物在感官上会存在细微差异，多年来我们和所有同行一样，一直努力将这个差异降到最低。</p>
						</div>
						<div>
							<img src="/static/new/img/gn_ensure07.jpg" alt="">
							<p>关于显示</p>
							<p>世界上没有完全相同的玉石，也没有完全相同显示效果的两台显示器，所以同一图片在不同显示器会有不同的显示效果。我们只能以我们的显示器显示作为描述标准，无法决定在您的显示器上看到的是同一效果，故整个交易最终只能以实物为准。</p>
						</div>
						<div>
							<img src="/static/new/img/gn_ensure08.jpg" alt="">
							<p>关于尺寸</p>
							<p>为了让消费者最清晰观察玉石细节，我们对部分图片做了放大处理(图片看起来比实物大)，我们所标注的尺寸误差不超过1毫米。</p>
						</div>
						<div>
							<img src="/static/new/img/gn_ensure09.jpg" alt="">
							<p>关于品质</p>
							<p>我们的玉石都是经过国家权威珠宝检测中心检测，怀南会所提供的每一件玉石都是天然的，我们在出售时都会附带国家权威检测机构出具的检测证书，欢迎任何形式的正规复检，愿承担一切法律责任。</p>
						</div>
					</div>
				</div>
				<div class="gn_way" style="display: none;">
					<p>购买方式</p>
					<div>
						<div>
							<p><i style="background: url(/static/new/img/wechat.jpg) no-repeat;"></i>微信支付</p>
							<span>您在怀南会上看到心仪的宝贝后，可微信支付下单。</span>
						</div>
						<div>
							<p><i style="background: url(/static/new/img/phone.jpg) no-repeat;"></i>APP客户端购买</p>
							<span>下载APP随时随地挑选满意宝贝，联系APP内客服购买。</span>
						</div>
						<div>
							<p><i style="background: url(/static/new/img/zfb.jpg) no-repeat;"></i>支付宝支付</p>
							<span>您在怀南会上看到心仪的宝贝后，可在支付宝支付下单。</span>
						</div>
						<div>
							<p><i style="background: url(/static/new/img/listen.jpg) no-repeat;"></i>在线咨询购买</p>
							<span>选择满意宝贝后，点击页面右侧在线咨询客服，告知宝贝货号咨询购买。</span>
						</div>
						<div>
							<p><i style="background: url(/static/new/img/card.jpg) no-repeat;"></i>银行卡汇款/转账</p>
							<span>您在怀南会上看到心仪宝贝后，可银行卡汇款/转账支付下单。</span>
						</div>
						<div>
							<p><i style="background: url(/static/new/img/tel.jpg) no-repeat;"></i>电话订购</p>
							<span>您在怀南会上看到心仪的宝贝后，可电话联系下单。</span>
							<span>全国免费电话：<i>0519-86888690</i></span>
						</div>
					</div>
				</div>
				<!-- <div class="content_box"></div> -->
			</div>
		</div>
		<div class="wrap_s2 f_r" style="width:284px;overflow:hidden;float:right">
			<div class="g_right">
				<div class="title_row">
					<span>您可能喜欢的</span>
					<a href="javascript:;" @click="recommend_goods(datalist.gid)" class="change_favdeal"><i class="iconfont"></i>换一批</a>
				</div>
				<div class="content_row">
					<ul class="side_deal_list" id="favdeal_list">
						<!-- <?php if (!empty($this->recommend_goods)): foreach ($this->recommend_goods as $v): ?> -->
						<li v-for='(item,i) in recommend' :key='i'>
							<a href="javascript:;"  @click="gorecommend( item.gid)" class="deal_img">
								<img :src="item.thumb" />
							</a>
							<!-- <a href="" class="deal_title"> -->
								<!-- <?php echo $v->title;?> -->
                                {{item.title}}
								<!-- </a> -->
							<div class="deal_info">
								<span class="deal_price f_l">
									<span class="current_price"><i>¥</i>
                                    {{item.price}}
									<!-- <?php echo cent2dollar($v->price);?> -->
									</span>
								</span>

							</div>
						</li>
                        <!-- <?php endforeach; endif; ?> -->
					</ul>
				</div>
			</div>
			<div class="blank"></div>
	
	
		</div>
	</div>
    </div>	
    </div>
</template>
<script>
export default {
	props:["datalist","recommend","data"],
	inject:["reload"],
	   data(){
        return{
			tab:1,
			tag:1,
			activeName:'first',
			data:'',
			//   recommend:'',
			 value5:5,
            value4:4,
            value3:3,
            value2:2,
            value1:1,
			// datalist:'',
			activeIndex:"1",
        }
    },
    mounted(){
		console.log(datalist.norms+'11111111');
   this.getlist();
   	 getcomment()
    },
	methods:{
		go_inv(){
               this.$router.push({
				   path:'/information/information',
				   query:{
					   id:2215
				   }
			   })
		},
		Topage(i){
			this.tag=i 
			
			this.$emit('goodf',this.tab,i)  
		},
		handleClick(tab, event){
			console.log(tab.index)
			this.tab=tab.index
			this.$emit('goodf',tab.index)
		},
		gorecommend(gid){
			console.log(gid+'74441111')
                //   this.$axios.get('/api/goods/detail?gid='+gid).then((res)=>{
                //      this.datalist=res.data.goods
                //    console.log(res.goods)
				//  })
				// alert(gid);
			
				this.$emit('to-parent',gid);
				this.$router.push({
					  name:'goods-goodsdetail',
					  query:{
						  gid:gid,
						//   d:new Date(),
						  tag:4
					  }

				})//页面没跳转
				this.reload();
            },
		     recommend_goods(gid){
				 console.log(gid);
              let _this=this
                  let params = new URLSearchParams();
                     params.append("gid",datalist.gid);
                 this.$axios.post('/api/goods/recommend').then((res)=>{
                     _this.recommend=res.data 
                  
    })
    },
		handleSelect(){},
		
          getlist(){
			  alert(1111);
             let _this=this
                  let params = new URLSearchParams();
                     params.append("gid",this.gid);//这里需要父元素的gid,我取不到
                 this.$axios.get('/api/goods/detail').then((res)=>{
                     this.datalist=res.data.goods
                   console.log( this.datalist+'888841')//这个方法调用会打印的，好像没调用
                 })
               },
	},
    mounted(){
  
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
	//定时函数
	function time_remaining (id) {
		var target_time = $('#'+id).attr('target_time');//结束时间，
		var current_time = $('#'+id).attr('current_time');//当前时间
		var str = '距离结束: ';
		if(target_time <= current_time) {
			var htmls = '已结束';
			$('#'+id).html(htmls);
			return false;
		}
		var t = target_time - current_time;
		var d = parseInt(t/86400);
		if(d>0){
			t = t - 86400*d;
			if (d.toString().length == 1) {
				d = '0' + d;
			}
			str += d + '天';
		}
		var h = parseInt(t/3600);
		if(h>0){
			t = t - 3600*h;
		}
		if (h.toString().length == 1) {
			h = '0' + h;
		}
		var minute = parseInt(t/60);
		if(minute>0){
			t = t - 60*minute;
		}
		if (minute.toString().length == 1) {
			minute = '0' + minute;
		}
		if (t.toString().length == 1) {
			t = '0' + t;
		}
		str += h + '时';
		str += minute + '分';
		str += t + '秒';
		$('#'+id).html(str);
		current_time++;
		$('#'+id).attr('current_time', current_time);
		setTimeout(time_remaining,1000,id);
	}
    }
}
</script>
<style scoped>
@import url('../../static/css/base.css');
@import url('../../static/css/goodsdetail.css');
.count-group{width:300px;}
 .el-menu--horizontal>.el-menu-item.is-active {
	 /* padding-left:40px; */
	 border-bottom: 2px solid #74181b;
 }
</style>
