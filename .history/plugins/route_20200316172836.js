/*
 * @Description: vue
 * @Version: 2.0.1.003
 * @Author: 薛松田
 * @Date: 2020-03-16 17:26:31
 * @LastEditors: 薛松田
 * @LastEditTime: 2020-03-16 17:28:36
 */
export default ({ app }) => {
    app.router.afterEach((to, from) => {
      console.log(to.path+'topath44444444444')
    })
  }