/*
 * @Description: vue
 * @Version: 2.0.1.003
 * @Author: 薛松田
 * @Date: 2020-03-16 17:26:31
 * @LastEditors: 薛松田
 * @LastEditTime: 2020-03-16 17:29:41
 */
export default ({ app }) => {
    app.router.beforeEach((to, from, next) => {
      if (process.client) {
        const token = sessionStorage.getItem('token');
        if (!token && to.path !== '/login') {
          next('/login');
        } else if (to.path !== '/login') {
            next();
        } else {
          next();
        }
      }
    });
  };