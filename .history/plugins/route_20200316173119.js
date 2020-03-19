/*
 * @Description: vue
 * @Version: 2.0.1.003
 * @Author: 薛松田
 * @Date: 2020-03-16 17:26:31
 * @LastEditors: 薛松田
 * @LastEditTime: 2020-03-16 17:31:19
 */
export default ({ app }) => {
    app.router.beforeEach((to, from, next) => {
        console.log('app.router.beforeEach')
      if (process.client) {
        const token = localStorage.getItem('token');
        if (!token && to.path !== '/login/login') {
          next('/login/login');
        } else if (to.path !== '/login/login') {
            next();
        } else {
          next();
        }
      }
    });
  };