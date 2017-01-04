/**
 * Created by zhangzhan on 2017/1/3.
 */
/************************
 * 单独页面
 * ***********************/
import Login from './components/Login.vue'
import System from './components/System.vue'

/************************
 * 页面布局
 * ***********************/

/************************
* 客户管理
* ***********************/

/************************
 * 客户经理管理
 * ***********************/

/************************
 * 系统管理
 * ***********************/

/************************
 * 用户管理
 * ***********************/

/************************
 * 角色管理
 * ***********************/

/************************
 * 数据字典管理
 * ***********************/

/************************
 * 日志管理
 * ***********************/

/************************
 * 机构管理
 * ***********************/


export default {
  '/index': {
    component: Login
  },
  '/login': {
    component: Login
  },
  '/system': {
    component: System,
    subRoutes: {
      '/admin': {
        component: System
      }
    }
  }
}
