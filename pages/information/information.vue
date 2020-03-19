<!--
 * @Description: vue
 * @Version: 2.0.1.003
 * @Author: 薛松田
 * @Date: 2020-01-16 11:46:39
 * @LastEditors: 薛松田
 * @LastEditTime: 2020-03-12 14:20:19
 -->
<template>
    <div>
     
    <div class="content">
        <div class="content-l">
         
        <ul >
            <li v-for='(item,i) in this.datalistf' :key='i' @click='goart(item.id,item.name)' ><p>{{item.name}} </p> </li>
           
           
        </ul>
        </div>
        <div class='content-r'> 
            <ul  v-if='article==""'>
                <li>
                    {{this.artname?this.artname:'帮助中心'}}
                </li>
                <li v-for='(item,i) in list.list' :key='i' @click='getarticle(item.id)'><span>{{item.title}}</span><span>{{item.putTime}}</span></li>
              <!-- <li><span>[媒体报道]孝道园将成为萤火虫夜公园【常州日报】</span><span>2019-11-8</span></li> -->
               
                
                
                 <div v-if="list.totalPage>1" class="pages">
      <p @click="Topage((--tag)==0?1:tag)">&lt;</p>
      <p v-for="i in list.totalPage" :key="i" :class="{changebg:tag==i}" @click="Topage(i)">{{i}}</p>
      <p @click="Topage((++tag)>=totalPage?totalPage:tag)">&gt;</p>
      <p @click="Topage(totalPage)">尾页</p>
    </div>
            
            </ul>
            <div v-else class='article_title'>
              <p style=''>{{article.title}}</p>
              <p><span>{{article.putTime}}</span><span>{{article.author}}</span></p>
              <div v-html='article.content'></div>
              </div>
        </div>
        
    </div>



   
    </div>
</template>
<script>
export default {
    data(){
        return{
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
    mounted(){
       this.getlist()
       this.goart()
       this.fromhome()
    },
    methods:{
      goart(id,name){
              this.article=''
              let _this=this
              this.id=id
              this.artname=name
                  let params = new URLSearchParams();
                     params.append("categoryId",id?id:66);
                   
                  
              
                  
                     this.$axios.post('/index.php/api/article/get_list',params).then((res)=>{
                       this.list=res.data
                      console.log(res.data)
                      
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
           console.log(this.$route.query.id)
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
                         this.datalistf=Object.values(res.data)[0]
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
                 })
          
               },
    }
}
</script>
<style scoped>
@import url('../../static/css/base.css');
.article_title p:nth-child(1){text-align:center;font-size:25px;margin-bottom:20px;}

.article_title p span{margin-right:30px;float:right;}
.content-l ul li{font-size:20px ;}
.content-l ul li :hover,.content-l ul li:active{color: #74171b;}

 *{margin:0;padding:0;}
    li{list-style:none }
    img{vertical-align:top;border:none}
    a{text-decoration:none;outline: none;color: #8D8D8D;}


    .content{min-height: 1200px;width: 1200px;margin: 0 auto;}
    .content-l{width: 220px;height: auto;float: left;overflow: hidden;}
    /* .content-l{width: 290px;height: auto;float: left;overflow: hidden;} */
    .content-l p{font-size: 16px;margin-top: 20px;color: #8D8D8D;margin-bottom: 38px;}
    .content-l p a:hover{color: #74171b;}
    .content-l ul{width:100%;margin-top:80px;margin-left:40px;}
    .content-l ul li{height:20px;font-size: 14px;color: rgb(86,86,86); cursor: pointer;}
      /* .content-l ul li{font-size: 14px;color: rgb(86,86,86);} */
    .content-l ul li:nth-child(1){color:rgb(116,24,27);}
    .content-r{float:left;margin-top:70px;width:902px;}
    .content-r ul li{height: 44px;line-height: 44px;border-bottom: 1px #e9e9e9 solid;font-size: 12px;color: rgb(86,86,86); cursor: pointer;}
    .content-r ul li:nth-child(1){height:32px;line-height: 32px;font-size: 16px;font-weight: 800;color:rgb(116,24,27);}
    .content-r ul li span:nth-child(1){float: left;}
    .content-r ul li span:nth-child(2){float: right;}
    /* .content-r ul li:last-child{border: 0;display: flex;flex-direction: row;justify-content: center;padding: 40px 0;} */
    .content-r ul li:last-child{display: flex;flex-direction: row;}
    /* .content-r ul li p{text-align: center;} */
    .content-r ul li:last-child p{width:33px;height:33px;border: 1px #e9e9e9 solid;line-height: 33px;text-align: center;margin-right: 4px;color: rgb(121,121,121);}
    .content-r ul li:last-child p:nth-child(2),.content-r ul li:last-child p:hover{background: rgb(116,24,27);color: white;}
    .content-r ul li:last-child p:last-child{margin: 0;}
</style>