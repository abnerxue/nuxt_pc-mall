<!--
 * @Description: vue
 * @Version: 2.0.1.003
 * @Author: 薛松田
 * @Date: 2020-01-15 18:00:00
 * @LastEditors: 薛松田
 * @LastEditTime: 2020-03-07 17:14:31
 -->
<template>
    <div>
    
    <div class="content">
        <div class="content_box">
            <div class="content-l">
              
                <ul>
                    <li @click="reload()">关于我们</li>
                    <li v-for='(item,i) in datalistf' :key='i'  @click='goart(item.id,item.name)'>{{item.name}}</li>
                     <li v-for='(item,h) in datalist' :key='h'  @click='goart(item.id,item.name)'>{{item.name}}</li>
                       <li v-for='(item,k) in datalists' :key='k'  @click='goart(item.id,item.name)'>{{item.name}}</li>
                 
                </ul>
            </div>
                <div v-if='show==true'>   
                      <div class='content-r_'  > 
            <ul  v-if='article==""'>
                <li>
                    {{artname}}
                </li>
                <li v-for='(item,j) in list.list' :key='j' @click='getarticle(item.id)'><span>{{item.title}}</span><span>{{item.putTime}}</span></li>

            <div v-if="list.totalPage>1" class="pages">
      <p @click="Topage((--tag)==0?1:tag)">&lt;</p>
      <p v-for="i in list.totalPage" :key="i" :class="{changebg:tag==i}" @click="Topage(i)">{{i}}</p>
      <p @click="Topage((++tag)>=totalPage?totalPage:tag)">&gt;</p>
      <p @click="Topage(totalPage)">尾页</p>
    </div>
            
            </ul>
            <div class='article_title'>
              <p style='text-align:center;'>{{article.title}}</p>
              <p><span>{{article.putTime}}</span><span>{{article.author}}</span></p>
              <div  style='backgroud:#f5f5f5 !important;' v-html='article.content'></div>
              </div>
        </div>
        </div>
            <div class='content-r' v-else>
                <div>
                <a @click='type=8' >常孝股份集团高管团队</a>
                <a @click='type=9' >常孝股份集团子公司高管团队</a>
            </div>
                 <ul>
                <!-- <li><a href="?type=1" >中华孝道园</a></li> -->
                 <li><a @click='type=1' >中华孝道园</a></li>
                <li><a @click='type=2' >怀南会</a></li>
                <li><a @click='type=3' >常州孝行文化传播有限公司</a></li>
                <li><a @click='type=4' >南京分公司</a></li>
                <li><a @click='type=5'>无锡分公司</a></li>
                <li><a @click='type=6' >常州分公司</a></li>
                <li><a @click='type=7' >嘉兴分公司</a></li>
            </ul>
                <div class="business_card">
                <!-- <?php if($this->input->get('type')==1 || $this->input->get('type')=='' || $this->input->get('type')==8 || $this->input->get('type')==9 || $this->input->get('type')==3){?> -->
                <div v-if='type==1||type==3||type==8||type==9'>
                    <img src="../../static/img/jiangjianming.jpg" alt="">
                    <div>
                        <h1>蒋建名</h1>
                        <h5>董事长</h5>
                        <div class="text_box">
                            <p class="c_text">中共党员，经济师。“常孝股份”和中华孝道园的创始人，中华孝道园董事长，“常孝股份”董事局主席，国家华夏文化纽带工程组委会执委会常委，常州市孔子思想研究会会长，常州大学中华孝道文化研究院理事长、研究员，常州市姓氏文化研究会名誉会长，常州市地方文化研究会名誉会长。曾任武进区供销合作总社副主任，龙宇商业集团公司总经理，武进太湖旅游度假区专职副主任。有着多年成功的企业管理和经营经验，又有着多年当地旅游业发展规划和管理的经验。在公司主要负责公司战略发展规划和风险管理工作，并主持董事局日常工作。</p>
                            <span></span>
                            <div class="open_text">展开</div>
                        </div>
                    </div>
                </div>
                   
                <!-- <?php if($this->input->get('type')==1 || $this->input->get('type')=='' || $this->input->get('type')==8 || $this->input->get('type')==9 || $this->input->get('type')==3 ){?> -->
               <div v-if='type==1||type==3||type==8||type==9'>
                    <div>
                    <img src="../../static/img/wenningli.jpg" alt="">
                    <div>
                        <h1>温宁力</h1>
                        <h5>总 裁</h5>
                        <div class="text_box">
                            <p class="c_text">中共党员，工程师。“常孝股份”和中华孝道园的联席创始人，中华孝道园总经理，“常孝股份”总裁，常州孝行天下文化传播有限公司总经理。曾任武进大众钢铁有限公司的助理工程师和太平洋保险常州分公司组训。有着现代化的管理理念、丰富的市场运作经验及企业管理经验。在公司全面负责项目的前期规划、开发建设及经营管理，并主持总裁办日常工作。</p>
                            <span></span>
                            <div class="open_text">展开</div>
                        </div>
                    </div>
                </div>
               </div>
                 <!-- <?php if($this->input->get('type')==1 || $this->input->get('type')=='' || $this->input->get('type')==8 ){?> -->
             <div v-if='type==1||type==8'>
                    <div>
                    <img src="../../static/img/jiangchao.png" alt="">
                    <div>
                        <h1>蒋超</h1>
                        <h5>中华孝道园执行长</h5>
                        <div class="text_box">
                            <p class="c_text">中共党员。中华孝道园执行长，“常孝股份”副总裁，常州一心大健康产业有限公司董事长，常州普光文化传播有限公司总经理。曾任常州市国亚纺织品有限公司商务经理，具备优秀市场营销及品牌推广能力。在公司协助总裁主持整体经营管理，主要负责中华孝道园的业务运营、综合协调、品牌推广以及风险管理工作。</p>
                            <span></span>
                            <div class="open_text">展开</div>
                        </div>
                    </div>
                </div>
             </div>

                <!-- <?php if($this->input->get('type')==1 || $this->input->get('type')=='' || $this->input->get('type')==8 || $this->input->get('type')==9){?> -->
              <div v-if='type==1||type==8||type==9'>
                    <div>
                    <img src="../../static/img/chenbixia.jpg" alt="">
                    <div>
                        <h1>陈碧霞</h1>
                        <h5>首席行政官</h5>
                        <div class="text_box">
                            <p class="c_text">中共党员。中华孝道园副总经理，中华孝道园党支部书记，“常孝股份”首席行政官。曾任常州和平大洋百货有限公司人事主管，具备优秀的组织协调和行政管理能力。在公司主要负责日常事务、品牌管理和业务发展工作。</p>
                            <span></span>
                            <div class="open_text">展开</div>
                        </div>
                    </div>
                </div>
              </div>
                   
                <!-- <?php if($this->input->get('type')==1 || $this->input->get('type')=='' || $this->input->get('type')==8 || $this->input->get('type')==9){?> -->
                  <div v-if='type==1||type==3||type==8||type==9'>
                        <div>
                        <img src="../../static/img/luqinzhong.jpg" alt="">
                        <div>
                            <h1>陆勤中</h1>
                            <h5>首席财务官</h5>
                            <div class="text_box">
                                <p class="c_text">“常孝股份”财务总监。曾任常州雷利电器有限公司财务部经理，江苏先电机械有限公司财务总监，在财务管理及税务筹划方面拥有丰富从业经验。在公司全权负责企业财务管理工作。</p>
                                <span></span>
                                <div class="open_text">展开</div>
                            </div>
                        </div>
                    </div>
                  </div>
                    

                     <!-- <?php if($this->input->get('type')==2  || $this->input->get('type')=='' || $this->input->get('type')==9 ){?> -->
               <div  v-if='type==2||type==9'>
                    <div>
                    <img src="../../static/img/wangsong.jpg" alt="">
                    <div>
                        <h1>王松</h1>
                        <h5>网络运营部总监</h5>
                        <div class="text_box">
                            <p class="c_text">首席运营官。2001年参加工作,中大型企业上市公司从业18年，先后从事运营副总裁、总经理职务。从业期间，兢兢业业，恪尽职守，熟悉互联网行业营销管理和风险防控全流程管理。2019年加入常孝股份，现时协助主持怀南会平台整体经营管理，主要负责怀南会平台业务运营、综合协调、战略发展以及风险管理工作。</p>
                            <span></span>
                            <div class="open_text">展开</div>
                        </div>
                    </div>
                </div>
               </div>

                <!-- <?php if($this->input->get('type')==6  || $this->input->get('type')=='' || $this->input->get('type')==9 ){?> -->
              <div  v-if='type==6||type==9'>
                    <div>
                    <img src="../../static/img/hehongshen.jpg" alt="">
                    <div>
                        <h1>何鸿燊</h1>
                        <h5>常州分公司总经理</h5>
                        <div class="text_box">
                            <p class="c_text">“常孝股份”常州分公司总经理，农工党常州市委新北区基层委员会副主委，常州市新北区第四届政协委员。曾任太平洋寿险戚区经理，永安保险新北支公司总经理，常州常泰园林绿化有限公司董事长。在销售技能团队建设管理方面拥有丰富的实战经验。现负责常州分公司日常管理工作。</p>
                            <span></span>
                            <div class="open_text">展开</div>
                        </div>
                    </div>
                </div>
              </div>
            
                <!-- <?php if($this->input->get('type')==2  || $this->input->get('type')==''){?> -->
              <div v-if='type==2'>
                    <div>
                    <img src="../../static/img/hezuyou.jpg" alt="">
                    <div>
                        <h1>何祖友</h1>
                        <h5>技术主管</h5>
                        <div class="text_box">
                            <p class="c_text">专注软件开发，有6年电商行业开发经验，3年互联网金融行业开发经验，5年企业内部ERP开发经验。经历高并发项目，熟悉高可用、高性能架构的开发。经历电商秒杀高并发项目，对高并发高可用有自己的经验和见解。</p>
                            <span></span>
                            <div class="open_text">展开</div>
                        </div>
                    </div>
                </div>
              </div>
            
                <!-- <?php if($this->input->get('type')==2  || $this->input->get('type')==''){?> -->
             <div  v-if='type==2'>
                    <div>
                    <img src="../../static/img/xubingbing.jpg" alt="">
                    <div>
                        <h1>许兵兵</h1>
                        <h5>运营主管</h5>
                        <div class="text_box">
                            <p class="c_text">许兵兵，南京理工大学本科学历。2007年参加工作至今，8年金融信托基金行业、4年互联网金融及区块链行业经历，先后担任知名外企保险公司银行关系经理及国内私募基金产品总监岗位，在金融产品研发及互金行业运营方面拥有丰富经验。2019年加入常孝股份，现协助主持怀南会平台整体经营管理，主要负责怀南会平台业务运营、综合协调、战略发展以及风险管理工作。</p>
                            <span></span>
                            <div class="open_text">展开</div>
                        </div>
                    </div>
                </div>
             </div>


      <!-- <?php if($this->input->get('type')==4  || $this->input->get('type')==''){?> -->

                  <div  v-if='type==4'>
                        <div>
                        <img src="../../static/img/fangxin.jpg" alt="">
                        <div>
                            <h1>房歆</h1>
                            <h5>南京分公司</h5>
                            <div class="text_box">
                                <p class="c_text">“常孝股份”南京分公司业务总监。曾任上海堂福电子有限公司主管。创办过贸易公司，担任总经理，带过百人团队，在营销管理和团队建设方面有丰富的实战经验。</p>
                                <span></span>
                                <div class="open_text">展开</div>
                            </div>
                        </div>
                    </div>
                  </div>

             
                <!-- <?php if($this->input->get('type')==5  || $this->input->get('type')==''){?> -->
                    <div  v-if='type==5'>
                        <div>
                        <img src="../../static/img/xujian.jpg" alt="">
                        <div>
                            <h1>徐建</h1>
                            <h5>无锡分公司总经理</h5>
                            <div class="text_box">
                                <p class="c_text">“常孝股份”无锡分公司总经理。曾任华洋宏大集团常州和无锡分公司总经理，全面负责常州无锡五个事业部业务；上海润洋医疗器械有限公司销售总监，负责十一个店的销售管理工作。拥有十九年的销售管理经验。</p>
                                <span></span>
                                <div class="open_text">展开</div>
                            </div>
                        </div>
                    </div>
                    </div>
    
                <!-- <?php if($this->input->get('type')==7  || $this->input->get('type')==''){?> -->
                  <div v-if='type==7'>
                        <div>
                        <img src="../../static/img/huangxiaofeng.jpg" alt="">
                        <div>
                            <h1>黄孝峰</h1>
                            <h5>嘉兴分公司总经理</h5>
                            <div class="text_box">
                                <p class="c_text">“常孝股份”嘉兴分公司总经理。曾任新华人寿保险公司业务主任，业务经理，泰康人寿保险公司组训讲师，培训部经理，嘉兴湘家荡颐和园和银发太阳岛销售总监，嘉兴泰尔汽车市场经理岗位，对销售和销售管理有独到见解。现主要负责嘉兴分公司的日常管理和业务推动工作。</p>
                                <span></span>
                                <div class="open_text">展开</div>
                            </div>
                        </div>
                    </div>
                  </div>
   

                <!-- <?php if($this->input->get('type')==9  || $this->input->get('type')==''){?> -->
             <div v-if='type==9'>
                    <div>
                    <img src="../../static/img/liumeiling.jpg" alt="">
                    <div>
                        <h1>刘美玲</h1>
                        <h5>总经理助理</h5>
                        <div class="text_box">
                            <p class="c_text">中共党员，曾任上海灯芯绒总厂团支部书记。2002年加入中华孝道园，先后担任上海直属联络处副总经理、上海宝山联络处创始人、上海分公司康养业务经理、创建美不胜收团队、上海常孝分公司总经理助理，长期从事销售工作，具有丰富的团队组建和销售经验。</p>
                            <span></span>
                            <div class="open_text">展开</div>
                        </div>
                    </div>
                </div>
             </div>
               
                <!-- <?php if($this->input->get('type')==9  || $this->input->get('type')==''){?> -->
              <div  v-if='type==9'>
                    <div>
                    <img src="../../static/img/lihaohao.jpg" alt="">
                    <div>
                        <h1>李浩浩</h1>
                        <h5>上海连根公司总经理</h5>
                        <div class="text_box">
                            <p class="c_text">中共党员，中华孝道园“孝道使者”。大学毕业后就加入中华孝道园，是和常孝股份、常州孝行天下公司、中华孝道园成长起来的年轻一代，一路初心不改，追随至今。现任上海连根文化传播有限公司总经理。</p>
                            <span></span>
                            <div class="open_text">展开</div>
                        </div>
                    </div>
                </div>
              </div>
             
                <!-- <?php if($this->input->get('type')==6  || $this->input->get('type')==''){?> -->
               <div v-if='type==6'>
                    <div>
                    <img src="../../static/img/jianghongyan.jpg" alt="">
                    <div>
                        <h1>蒋红艳</h1>
                        <h5>总经理助理</h5>
                        <div class="text_box">
                            <p class="c_text">曾任连云港天時网络技术服务有限公司总经理，在行政管理及团队建设等方面拥有丰富的经验，具有较强统筹管理能力和亲和力。现协助常州分公司总经理做好经营服务及各项管理工作，并督促、检查落实贯彻执行情况。</p>
                            <span></span>
                            <div class="open_text">展开</div>
                        </div>
                    </div>
                </div>
               </div>
               
                <!-- <?php if($this->input->get('type')==9  || $this->input->get('type')==''){?> -->
             <div v-if='type==9'>
                    <div>
                    <img src="../../static/img/wangbo.jpg" alt="">
                    <div>
                        <h1>王泊</h1>
                        <h5>上海常孝公司总经理</h5>
                        <div class="text_box">
                            <p class="c_text">7年酒店管理经验，在团队建设和管理方面有着丰富的实战经验，能制定出适合酒店发展的战略规划和创建品牌知名度的推广进程，全面掌握酒店的经营管理、整体策化、开业筹备、营销推广，善于制定酒店的阶段性工作目标和竞争策略，能有效地控制成本和费用，具有敏锐的市场洞察力很强的组织协调能力、商务谈判能力。现任职于上海常孝分公司总经理。</p>
                            <span></span>
                            <div class="open_text">展开</div>
                        </div>
                    </div>
                </div>
             </div>


                  <!-- <?php if($this->input->get('type')==1 || $this->input->get('type')=='' || $this->input->get('type')==8 || $this->input->get('type')==9 || $this->input->get('type')==2 || $this->input->get('type')==3 ){?> -->
                <div v-if='type==1||type==8||type==9||type==2||type==3'>
                        <div>
                        <img src="../../static/img/shijinjin.jpg" alt="">
                        <div>
                            <h1>施静瑾</h1>
                            <h5>行政人事部副部长兼风控部部长</h5>
                            <div class="text_box">
                                <p class="c_text">中共党员。2012年加入中华孝道园，现任“常孝股份”行政人事副部长，常州孝行天下文化传播有限公司风控部部长，常州怀南汇商务服务有限公司综合部部长。精通行政管理，熟悉企业运作流程及标准化管理。</p>
                                <span></span>
                                <div class="open_text">展开</div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- <?php if($this->input->get('type')==1 || $this->input->get('type')=='' || $this->input->get('type')==8 || $this->input->get('type')==9 ){?> -->
                    <div v-if='type==1||type==8||type==9'>
                        <img src="../../static/img/wangming.jpg" alt="">
                        <div>
                            <h1>王铭</h1>
                            <h5>财务部副部长</h5>
                            <div class="text_box">
                                <p class="c_text">中级会计师。“常孝股份”财务副部长。曾任常州市汇丽活动地板有限公司主办会计，常州威宇汽车销售服务有限公司财务经理，常州市长兴集团有限公司财务经理。擅长财务分析，了解财务税务制度，主要负责对外融资，银行、税务、审计及其它相关政府部门关系维护。</p>
                                <span></span>
                                <div class="open_text">展开</div>
                            </div>
                        </div>
                    </div>
       


                <!-- <?php if($this->input->get('type')==3  || $this->input->get('type')==''){?> -->
                  <div v-if='type==3'>
                           <div>
                        <img src="../../static/img/wujie.jpg" alt="">
                        <div>
                            <h1>吴杰</h1>
                            <h5>行政人事部副部长兼宣导部部长</h5>
                            <div class="text_box">
                                <p class="c_text">毕业于四川大学法学院，高级人力资源管理师、人力资源法务师，现担任中华孝道园、“常孝股份”人事行政部副部长兼宣导部部。曾在上市企业及著名连锁服务企业担任人力资源管理工作及运营管理工作。对于现代人力资源管理、企业管理拥有着丰富的理论及实践经验。</p>
                                <span></span>
                                <div class="open_text">展开</div>
                            </div>
                        </div>
                    </div>
                  </div>

                <!-- <?php if($this->input->get('type')==3  || $this->input->get('type')==''){?> -->
                    <div  v-if='type==3'>
                        <div>
                        <img src="../../static/img/qixiaona.jpg" alt="">
                        <div>
                            <h1>戚晓娜</h1>
                            <h5>会员服务部部长兼执行长助理</h5>
                            <div class="text_box">
                                <p class="c_text">2012年加入中华孝道园，现任“常孝股份”会员服务部部长，常州市武进太湖蓼莪山旅游发展有限公司执行长助理。主要负责国家4A级旅游景区中华孝道园日常运营管理工作，常孝股份、蓼莪山公司、孝行天下平台会员体系的管理工作及会员康养、康旅等服务工作。</p>
                                <span></span>
                                <div class="open_text">展开</div>
                            </div>
                        </div>
                    </div>
                    </div>
    
                <!-- <?php if($this->input->get('type')==3  || $this->input->get('type')==''){?> -->
                   <div  v-if='type==3'>
                        <div>
                        <img src="../../static/img/zhuxueming.jpg" alt="">
                        <div>
                            <h1>朱学明</h1>
                            <h5>文旅副部长</h5>
                            <div class="text_box">
                                <p class="c_text">中华孝道园文旅事业部副总监、研学部负责人。现主要负责文旅事业部研学旅行板块及相关文旅板块的工作，协助规划文旅板块的策略制订，配合完善文旅事业部日常制度的制订并落实执行；全面负责文化旅游产品的策划设计、宣传推广工作；带领团队开拓文旅市场，拓展渠道，确保业绩稳定。</p>
                                <span></span>
                                <div class="open_text">展开</div>
                            </div>
                        </div>
                    </div>
                   </div>
      

            </div>
        </div>
    </div>
 
  </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            show:false,
            type:1,
            datalist:'',
            datalistf:'',
             datalists:'',
               tags:1,
          id:'',
          datalistf:'',
          list:'',
          artname:'',
            article:'',
            tag:1,
            data:''
        }
    },
    methods:{
        reload(){
         this.show=false
         this.$router.go(0);
        },
         goart(id,name){
             this.show=true
              this.article=''
              let _this=this
              this.id=id
              this.artname=name
                  let params = new URLSearchParams();
                     params.append("categoryId",id?id:66);
                   this.$axios.post('/index.php/api/article/get_list',params).then((res)=>{
                       this.list=res.data
                      console.log( this.artname+'88888888888')
                      
                 })
      },
            handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
               Topage(i) {
      this.tag = i;
         let params = new URLSearchParams();
                     params.append("categoryId",this.id);
                   
                     params.append("page",i);
              
                  
                     this.$axios.post('/index.php/api/article/get_list',params).then((res)=>{
                       this.list=res.data
                      console.log(res.data)
                      
                 })
      },
         fromhome(){
            if(this.$route.query.id!=null){
               this.getarticle(this.$route.query.id)
            }
         },
    
        getarticle(id){
                let _this=this
                  let params = new URLSearchParams();
                     params.append("id",id);
                   
                 
              
                  
                     this.$axios.post('index.php/api/article/detail',params).then((res)=>{
                   this.article=res.data
                      
                 })
        },
                getlist(){ 
             let _this=this
                  let params = new URLSearchParams();
                     params.append("categoryId",70);
                   
                  this.datalistf=new Array()
              
                  
                     this.$axios.post('/index.php/api/article/category').then((res)=>{
                       console.log( res.data)
                         this.datalistf=Object.values(res.data[2])['0']
                         this.datalist=Object.values(res.data[3])['0']
                         this.datalists=Object.values(res.data[3])['1']
                        // let b=Object.values(a)
                        // let s=b[0]
                        // console.log(b)
                        // let c=Object.values(b[1])
                        // let d=Object.values(b[2])
                        // this.datalistf=s.concat(c).concat(d)
                        // // b.forEach(i => {
                        // //   console.log(i)
                        // //    let c=Object.values(i[])
                        // // });

                        console.log( this.datalistf)
                        console.log( this.datalist)
                 })
          
               },
    },
    mounted(){
        this.getlist()
         var initFontNum = 103;    //初始化字数限制
    var initTextHeight = 75; // 初始化高度px
    var ctext = $(".c_text");
    $(".c_text").each(function(i){
        var didiText = $(this).text(); //获取完整内容
        var didiHeight = $(this).height(); //获取完整内容时容器高度
        if(didiText.length >= initFontNum && didiHeight > initTextHeight){
            $(this).text($(this).text().substring(0,initFontNum)); //将内容截取到限制长度
            $(this).html($(this).html()+'......'); //截取后的内容以省略号结尾
            $('.text_box').css({  //显示最外层容器
                'opacity' : '1'
            });
            $(this).css({ 
                'height':initTextHeight + 'px',
            });
            $(this).next().next().click(function(){
                var curText = ctext.eq(i).text(); //截取后的内容
                if(curText.length == 109){
                    ctext.eq(i).css({
                        'height' : didiHeight + 'px' ,
                        '-moz-transition' : '0.6s',
                        '-webkit-transition' : '0.6s',
                        'transition' : '0.6s'
                    });
                    $(this).html('收起<i class="top"></i>');
                    // $(btn).text('收起');
                    ctext.eq(i).text(didiText); 
                }else{
                    ctext.eq(i).css({
                        'height': initTextHeight + 'px',
                        '-moz-transition' : '0.6s',
                        '-webkit-transition' : '0.6s',
                        'transition' : '0.6s'
                    });
                    // $(btn).text('展开');
                    $(this).html('展开<i></i>');
                    setTimeout(function(){
                        ctext.eq(i).text(ctext.eq(i).text().substring(0,initFontNum));
                        ctext.eq(i).html(ctext.eq(i).html()+'......');
                    },500)
                }
                return false;
            })
        }
    })
    
    
    }
}
</script>
<style scoped>
  @import url('../../static/css/aboutus.css');
  @import url('../../static/css/base.css');
</style>
<style scoped>
    *{margin:0;padding:0;}
    li{list-style:none }
    img{vertical-align:top;border:none}
    a {text-decoration:none;outline: none;color: #000;}
    a:hover{color: #74171b;}
    .nav ul li:nth-child(8){color:rgb(116,24,27);}
    /* 内容 */
    .content{min-width: 1200px;width: 100%;background: #f5f5f5;overflow: hidden;}
    .content_box{min-height: 600px;width: 1200px;margin: 0 auto;overflow: hidden;}
    .content-l{width: 220px;height: auto;float: left;overflow: hidden;}
    .content-l p a:hover{color: #74171b;}
    .content-l p{font-size: 12px;margin-top: 20px;color: #8D8D8D;margin-bottom: 38px;}
    .content-l ul{width:100%;margin-left: 40px;margin-top:90px;}
    .content-l ul li{height:30px;font-size: 16px;color: rgb(86,86,86);cursor: pointer;}
    .content-l ul li:nth-child(1){color:rgb(116,24,27);}
    .content-r{float:left;margin-top:70px;width:902px;color: #000;}
    .content-r>div:nth-child(1){height: 40px;box-sizing: border-box;border-bottom: 2px #efefef solid;}
    .content-r>div:nth-child(1) a{height: 40px;float: left;font-size: 14px;padding: 0 10px;line-height: 40px;}
    .content-r ul{height: 45px;overflow: hidden;display: flex;flex-direction: row;justify-content: flex-end;}
    .content-r ul li{height: 45px;line-height: 45px;font-size: 12px;padding: 0 10px;color: #8D8D8D;}
    .business_card{overflow: hidden;width: 100%;display: flex;flex-direction: row;flex-wrap: wrap;}
    .business_card>div{width: 295px;overflow: hidden;position: relative;padding-top: 42px;margin-top: 24px;box-sizing: border-box;margin-right: 8px;margin-bottom: 40px;}
    .business_card>div:nth-child(3n){margin-right: 0;}
    .business_card>div img{width: 85px;height: 85px;border-radius: 50%;position: absolute;top: 0;left: 108px;}
    .business_card>div>div{overflow: hidden;width: 100%;background: #fff;border-radius: 5px;padding-top: 59px;box-sizing: border-box;}
    .business_card>div>div h1{text-align: center;font-size: 15px;height: 15px;line-height: 15px;}
    .business_card>div>div h5{font-size: 10px;height: 10px;line-height: 10px;margin-top: 9px;text-align: center;margin-bottom: 14px;}
    .text_box{overflow: hidden;padding: 0 32px;}
    .c_text{overflow: hidden;font-size: 11px;}
    .text_box span:nth-of-type(1){background: #e9e9e9;margin: 10px 0px;display: block;height: 1px;}
    .open_text i{background: url(../../static/img/arrow_b1.jpg) no-repeat;width: 9px;height: 5px;display: inline-block;background-size: 100% 100%;}
    .open_text{display: block;  color: #8D8D8D;font-size: 10px;text-align: center;cursor: pointer;margin-bottom: 14px;}
    .open_text .top{background: url(../../static/img/arrow_t.jpg) no-repeat;}










     .article_title p:nth-child(1){text-align:center;font-size:25px;margin-bottom:20px;}

.article_title p span{margin-right:30px;float:right;}
    .content-r_{float:left;margin-top:70px;width:902px;}
    .content-r_ ul li{height: 44px;line-height: 44px;border-bottom: 1px #e9e9e9 solid;font-size: 12px;color: rgb(86,86,86); cursor: pointer;}
    .content-r_ ul li:nth-child(1){height:32px;line-height: 32px;font-size: 16px;font-weight: 800;color:rgb(116,24,27);}
    .content-r_ ul li span:nth-child(1){float: left;}
    .content-r_ ul li span:nth-child(2){float: right;}
    /* .content-r ul li:last-child{border: 0;display: flex;flex-direction: row;justify-content: center;padding: 40px 0;} */
    /* .content-r ul li:last-child{display: flex;flex-direction: row;} */
    /* .content-r ul li p{text-align: center;} */
    .content-r_ ul li:last-child p{width:33px;height:33px;border: 1px #e9e9e9 solid;line-height: 33px;text-align: center;margin-right: 4px;color: rgb(121,121,121);}
    .content-r_ ul li:last-child p:nth-child(2),.content-r ul li:last-child p:hover{background: rgb(116,24,27);color: white;}
    .content-r_ ul li:last-child p:last-child{margin: 0;}
</style> 