/*
 * @Description: vue
 * @Version: 2.0.1.003
 * @Author: 薛松田
 * @Date: 2020-01-06 15:58:32
 * @LastEditors: 薛松田
 * @LastEditTime: 2020-03-16 13:56:41
 */
import axios from 'axios';

const webpack=require('webpack');
const s=require('lru-cache');
axios.get("/api/app/home/get?ajax=true").then(res => {
  console.log(res);
});
// const lruCache = LRU({
//   // 缓存队列长度
//   max: 2000,
//   // 缓存有效期
//   maxAge: 60000
// })
// export const cache = {
//   get: function (key) {
//     let result = lruCache.get(key)

//     if (result) {
//       return JSON.parse(result)
//     }

//     return null
//   },
//   set: function (key, value) {
//     if (value) {
//       lruCache.set(key, JSON.stringify(value))

//       return true
//     }

//     return false
//   }
// }
const lru = new s({
  max: 1000,
  maxAge: 1000 * 60 * 15
});
export default {
  server: {
    port: 8080, // default: 3000
    host: 'localhost', // default: localhost
  },

  get: function (key) {
    let result = lru.get(key)

    if (result) {
      return JSON.parse(result)
    }

    return null
  },
  set: function (key, value) {
    if (value) {
      lru.set(key, JSON.stringify(value))

      return true
    }

    return false},
get_:async (url) => {
  let data = lru.get(url);
  if (data) {
    return JSON.parse(data);
  }
  const res = await axios.get(url);
  data = res.data;
  lru.set(url, JSON.stringify(data));
  return data;
},
  render: {
    bundleRenderer: {
      cache:lru
    }
  },

  cache:true,
  cache: {
    max:1000,
    maxAge:900000
  },

  

  
    modules: [
      
    '@nuxtjs/toast',
    ['@nuxtjs/dotenv', { filename: '.env.prod' }] // 指定打包时使用的dotenv
  ],
  // toast: {// toast模块的配置
  //   offset:200,
  //   position: 'top-center', 
  //   duration: 2000
  // },

  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title:' 琥珀蜜蜡_文玩核桃_缅甸冰种翡翠_星月金刚菩提子_新疆和田玉籽料_吊坠手镯_宜兴紫砂壶_黄花梨小叶紫檀_金丝楠木手串_项链鉴定_独山岫玉_沉香南红_彩宝-怀南会',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {
        name: 'keywords',
        content:
          '琥珀蜜蜡_文玩核桃_缅甸冰种翡翠_星月金刚菩提子_新疆和田玉籽料_吊坠手镯_宜兴紫砂壶_黄花梨小叶紫檀_金丝楠木手串_项链鉴定_独山岫玉_沉香南红_彩宝-怀南会'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  // buildModules: [
  //   // Doc: https://github.com/nuxt-community/eslint-module
  //   '@nuxtjs/eslint-module'
  // ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    prefix: '/index.php',        
      proxy: true ,
      // credentials: false // 表示跨域请求时是否需要使用凭证
  },
  proxy: {
   
    '/index.php': {
      
      target:'http://tapp.huainanhui.com',
      // secure: false,
      
      pathRewrite: { '^/index.php' : '',changeOrigin: true, }
    },
   
  },

  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
   plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery:'jquery',
      'window.jQuery':'jquery'
    })
  ],
    extend (config, ctx) {
    },
    // vendor:[axios]//为防止重复打包
  }
}
