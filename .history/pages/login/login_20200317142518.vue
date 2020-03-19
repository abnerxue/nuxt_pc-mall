<!--
 * @Description: vue
 * @Version: 2.0.1.003
 * @Author: 薛松田
 * @Date: 2020-01-16 16:09:12
 * @LastEditors: 薛松田
 * @LastEditTime: 2020-03-17 14:25:17
 -->
<template>
    <div>
        
    <div class="content">
        <div class="content_pic"><img style='height:100%;width:100%;' src='../../static/img/login_banner.png'/></div>
        <div class="content_login">
            <ul>
                <li id="name_l">账户登录</li>
                <span></span>
                <li id="phone_l" v-if="tag==1">手机登录</li>
                 <li id="phone_l" v-else>手机登录</li>
            </ul>
            <div class="phone_login">
                <div class="phone">
                    <p>手机号码</p>
                    <input type="number" placeholder="请输入手机号码" v-model='tel'>
                </div>
                <div class="test_num">
                    <input type="number" name="" placeholder="请输入手机验证码" v-model='code'>
                    <button @click="setcode()"  class="mm-btn-active">
                        <span class="word-time"></span>
                    <a class="resend">获取验证码</a> </button>
                </div>
                <button class="login_btn" @click='loginm'>登&nbsp;&nbsp;录</button>
                <!-- <div class="c_other">
                    <p><i>○</i>微信登录</p>
                    <p><i>></i>免费注册</p>
                </div> -->
            </div>
            <div class="name_login">
                <div class="phone">
                    <p>用&nbsp;户&nbsp;名</p>
                    <input placeholder="请输入手机号" v-model="name">
                </div>
                <div class="phone" style="margin-bottom: 0;">
                    <p>登录密码</p>
                    <input type="password" placeholder="请输入密码" v-model="password">
                </div>
                <button class="login_btn" @click='log'>登&nbsp;&nbsp;录</button>
                <!-- <div class="c_other">
                    <p><i>○</i>微信登录</p>
                    <p><i>></i>免费注册</p>
                </div> -->
            </div>
        </div>
    </div>
    
  
    </div>
</template>
<script>
import md5 from 'js-md5';
 import eventBus from'~/pages/layout/eventBus'
// import eventBus from '~/pages/layout/eventBus';
export default {
    
    data(){
        return{
            tag:1,
            tel:'',
            code:'',
            name:'',
            password:''

        }
    },
    methods:{
        show(){
          this.tag=this.$route.query.tag
        },
              setcode(){
                  let self = this;
            let telreg=/^[1][0-9]{10}$/;
        //    !(/^1[3456789]\d{9}$/.test(phone))
        console.log(self.code)
            if( !(/^1[3456789]\d{9}$/.test(self.tel))){
                           this.$message({
                message: '请输入正确的手机号',
                type: "success",
                center: "true",
                offset: "300",
                duration: "1000"
              });
                return
            }
            
         var countdown=60; 
        function sendemail(){
            var obj = $(".mm-btn-active");
            settime(obj);
        }
        function settime(obj) { //发送验证码倒计时
            if (countdown == 0) { 
                obj.attr('disabled',false); 
                //obj.removeattr("disabled"); 
                obj.text(" 重新发送 ");
                 obj.css("border-color","#00a2ff");
                  obj.css("color","#00a2ff");
                $(".resend").text("    重新发送");
                countdown = 60; 
                return;
            } else { 
                obj.attr('disabled',true);
               obj.css("border-color","#bcbcbc");
                  obj.css("color","#bcbcbc");
                obj.text("重新发送(" + countdown + ")");
                 $(".resend").text("");
              
                countdown--; 
                
            } 
            setTimeout(function() { 
                settime(obj);
            },1000); 
        }
        sendemail();
        $(".next-btn").prop("disabled",true);//禁用
                   let _this=this
                  let params = new URLSearchParams();
                     params.append("phone",this.tel);
                 this.$axios.post('/api/login/login_captcha_sms',params).then((res)=>{
                                      this.$message({
          message: res.data.message,
          type: 'success',
          offset:'300'
        });
                   console.log(res)
                 })
              },
                 loginm(){
                    
                       let _this=this
                  let params = new URLSearchParams();
                     params.append("phone",this.tel);
                      params.append("captcha",this.code);
                 this.$axios.post('/api/login/login_captcha',params).then((res)=>{
                if(res.data.code==1){
                      this.$message({
          message: '登录成功',
          type: 'success',
          offset: "400",
         duration: "1000"
        });
      
        localStorage.setItem('login',1)
         localStorage.setItem('token',res.data.token)
          eventBus.$emit('login',1)
          console.log(this.$route.query.route+'777777777777777777777777777777777')
          if(this.$route.query.route!=undefined){
             this.$router.push({
                 path:this.$route.query.route,
                 query:{
                     gid:this.$route.query.gid?this.$route.query.gid:'',
                      id:this.$route.query.id?this.$route.query.id:this.$route.query.auctionId?this.$route.query.auctionId:'',
                     tag:this.$route.query.tag?this.$route.query.tag:'',
                     
                 }

             })
          }else{
          this.$router.push('/user/user')
          }
                    
                }else{
                    this.$message({
          message: res.data.message,
          type: 'warning'
        });
                }
                 })
             
              
              },
              log(){
                       let _this=this
                  let params = new URLSearchParams();
                     params.append("name",this.name);
                      params.append("password",md5(this.password));
                 this.$axios.post('/api/login/login',params).then((res)=>{
                     console.log(res.data.code)
                if(res.data.code==1){
                      this.$message({
          message: '登录成功',
          type: 'success',
          offset:'300'
        });
         localStorage.setItem('login',1)
         localStorage.setItem('token',res.data.token)
          eventBus.$emit('logins',1)
          console.log(this.$route.query.route+'777777777777777777777777777777777')
          if(this.$route.query.route!=undefined){
             this.$router.push({
                 path:this.$route.query.route,
                 query:{
                     gid:this.$route.query.gid?this.$route.query.gid:'',
                     id:this.$route.query.id?this.$route.query.id:this.$route.query.auctionId?this.$route.query.auctionId:'',
                     tag:this.$route.query.tag?this.$route.query.tag:'',
                     
                 }

             })
          }else{
          this.$router.push('/user/user')



                }}else{
                    this.$message({
          message: res.data.message,
          type: 'warning',
          offset:'400'
        });
                }
                 })
              }
    },
    mounted(){
          console.log(JSON.stringify(this.$route.query))
         
        this.show()
            var a = document.getElementsByClassName('phone_login')[0]; //手机登录
    var b = document.getElementsByClassName('name_login')[0]; //账号登录
    $('#phone_l').click(function(){
        a.style.display = 'block';
        b.style.display = 'none';
        document.getElementById('name_l').style = 'color: rgb(128,128,128);font-weight: 600;';
        document.getElementById('phone_l').style = 'color: rgb(119,36,38);font-weight: 600;';
    })
    $('#name_l').click(function(){
        a.style.display = 'none';
        b.style.display = 'block';
        document.getElementById('name_l').style = 'color: rgb(119,36,38);font-weight: 600;';
        document.getElementById('phone_l').style = 'color: rgb(128,128,128);font-weight: 600;';

    }) 
    }
}
</script>
<style>
    *{margin:0;padding:0;}
    li{list-style:none }
    img{vertical-align:top;border:none}
    i{font-style: normal;}
    button{border: 0;outline: none; }
    .content{min-height: 600px;width: 1200px;margin: 0 auto;padding-top: 116px;}
    .content .content_pic{width: 520px;margin: 0 120px 65px 20px;background: rosybrown;height: 400px;float: left;box-sizing: border-box;}
    .content .content_login{float: left;width: 446px;height: 400px;border: 2px #e9e9e9 solid;}
    .content_login ul{width: 100%;height: 62px;border-bottom: 1px #e9e9e9 solid;padding: 0 60px;line-height: 62px;;box-sizing: border-box;}
    .content_login ul li{float: left;padding: 0 40px;font-size: 20px;color: rgb(128,128,128);font-weight: 800;cursor: pointer;}
    .content_login ul span{float: left;width: 1px;border-left: 2px #e9e9e9 solid;line-height: 62px;height: 20px;margin-top: 22px;}
    .content_login ul li:hover,.content_login ul li:first-child{color: rgb(119,36,38);font-weight: 600;}
    .content_login>div{padding: 40px 33px 36px 33px;}
    .content_login>div .phone{margin-bottom: 24px;}
    .content_login>div .phone,.content_login>div .test_num{width: 378px;height: 48px;border: 2px #e9e9e9 solid;}
    .content_login .phone p{width: 106px;height: 48px;line-height:48px;border-right: 2px #e9e9e9 solid;font-size: 18px;text-align: center;color: #575776;float: left;}
    .content_login .phone input{border: 0;float: left;outline: none;height:30px;line-height: 30px;font-size: 15px;padding: 0 16px;box-sizing: border-box;}
    input[type=number] {-moz-appearance:textfield;}
    input[type=number]::-webkit-inner-spin-button,  input[type=number]::-webkit-outer-spin-button {-webkit-appearance: none;}
    .phone_login{display: none;}
    .content_login .test_num input{border: 0;float: left;outline: none;width: 270px;height: 40px;line-height: 40px;font-size: 15px;padding: 0 18px;box-sizing: border-box;}
    .content_login .test_num button{width: 104px;height: 44px;font-size: 15px;text-align: center;line-height: 48px;background: #e9e9e9;color: rgb(123,123,123);}
    .content_login .login_btn{width: 378px;height: 48px;border: 2px #542628 solid;background: rgb(116,24,27);color: white;font-size: 20px;margin-top: 60px;}
    .content_login .c_other{width: 100%;margin-top: 60px;height: 20px;line-height: 20px;}
    .content_login .c_other p:nth-child(1){float: left;color: #767676;cursor: pointer;}
    .content_login .c_other p:nth-child(1) i,.content_login .c_other p:nth-child(2) i{display: inline-block;width: 20px;height: 20px;background: yellowgreen;text-align: center;margin-right: 5px;}
    .content_login .c_other p:nth-child(2){float: right;font-size: 15px;color: rgb(119,36,38);cursor: pointer;}
</style>
<style scoped>
.content_login .phone input{
    margin-top:8px;
}
</style>