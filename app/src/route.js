/**
 * Created by zhangzhan on 2017/1/3.
 */
/************************
 * 测试
 * ***********************/
import Test from './components/user/index.vue'
/************************
 * 单独页面
 * ***********************/
import Login from './components/Login.vue'
import System from './components/System.vue'
import Error from './components/error.vue'

/************************
 * 页面布局
 * ***********************/

/************************
* 客户管理
* ***********************/
import Customer from './components/customer/index.vue'//客户列表
import CustomerNew from './components/customer/new.vue'//新建客户
import CustomerEdit from './components/customer/edit.vue'//编辑客户
import Maintenance from './components/customer/maintenance.vue'//客户维护列表
import MainNew from './components/customer/mainNew.vue'//新增客户维护
import MainRecord from './components/customer/mainRecord.vue'//客户维护记录
import CusTransfer from './components/customer/cusTransfer.vue'//客户移交
import CusAccpet from './components/customer/accept.vue'//客户接收
import CusShow from './components/customer/show.vue'//客户信息展示

/************************
 * 客户经理管理
 * ***********************/
import ManagerBasic from './components/manager/basic/index.vue'//客户经理基本信息列表
import ManagerBasicEdit from './components/manager/basic/edit.vue'//编辑客户经理基本信息
import ManagerLevelNew from './components/manager/level/new.vue'//编辑客户经理级别信息
import ManagerLevel from './components/manager/level/index.vue'//客户经理级别列表
import ManagerLevelEdit from './components/manager/level/edit.vue'//编辑客户经理级别信息

/************************
 * 系统管理
 * ***********************/
import UserChangePass from './components/user/changePass.vue'//修改密码
import ForgetPass from './components/user/forgetPass.vue'//忘记密码


/************************
 * 用户管理
 * ***********************/
import User from './components/user/index.vue'//用户列表
import UserNew from './components/user/new.vue'//新建用户
import UserEdit from './components/user/edit.vue'//新建用户

/************************
 * 权限管理
 * ***********************/
import Role from './components/role/index.vue'//权限列表
import RoleNew from './components/role/new.vue'//权限新建
import RoleEdit from './components/role/edit.vue'//权限编辑

/************************
 * 数据字典管理
 * ***********************/
import Dictionary from './components/dictionary/index.vue'//数据字典列表
import DictionaryEdit from './components/dictionary/edit.vue'//编辑数据字典
/************************
 *
 * 系统参数
 * ***********************/
import Parameter from './components/system/index.vue'//系统参数列表
import ParaEdit from './components/system/edit.vue'//系统参数编辑


/************************
 * 日志管理
 * ***********************/
import LogList from './components/log/loginLog.vue'//登录日志管理列表

/************************
 * 机构管理
 * ***********************/
import OrgList from './components/organization/index.vue'//机构列表
import OrgEdit from './components/organization/edit.vue'//编辑机构
import OrgNew from './components/organization/new.vue'//新建机构


/************************
 * 产品管理
 * ***********************/
import ProNew1 from './components/product/new1.vue'//新建产品1
import ProNew2 from './components/product/new2.vue'//新建产品2
import ProNew3 from './components/product/new3.vue'//新建产品3
import ProNew4 from './components/product/new4.vue'//新建产品3
import ProNew5 from './components/product/new5.vue'//新建产品5
import ProList from './components/product/index.vue'//产品列表
/************************
 * 菜单管理
 * ***********************/
import MenuManage from './components/system/menuManage.vue'//菜单管理

/************************
 * 个人中心
 * ***********************/
import personal from './components/user/personal.vue'//个人中心
import UserMessage from './components/user/message.vue'//消息列表

export default {
  // '/index': {
  //   component: Login
  // },
  '/login': {
    component: Login
  },
  '/forgetPass': { //忘记密码
    component: ForgetPass
  },
  '/error/:errcode':{
    component: Error
  },
  '/system': {
    component: System,
    subRoutes: {
      '/admin': {
        component: System
      },
      '/user/changePass': { //修改密码
        component: UserChangePass
      },
      /*start---用户---start*/
      '/user/list': { //用户列表
        component: User
      },
      '/user/new': { //新建用户
        component: UserNew
      },
      '/user/edit/:id': { //编辑用户
        component: UserEdit
      },
      /*end---用户---end*/

      /*start---客户经理基本信息---start*/
      '/managerBasic/list': { //客户经理基本信息列表
        component: ManagerBasic
      },
      '/managerBasic/edit/:id': { //编辑客户经理基本信息
        component: ManagerBasicEdit
      },
      /*end---客户经理基本信息---end*/
      /*start---客户经理级别信息---start*/
      '/managerLevel/list': { //客户经理级别列表
        component: ManagerLevel
      },
      '/managerLevel/edit/:id': { //客户经理级别编辑
        component: ManagerLevelEdit
      },
      '/managerLevel/new': { //客户经理级别编辑
        component: ManagerLevelNew
      },
      /*end---客户经理级别信息---end*/

      /*start---客户---start*/
      '/customer/list': {//客户列表
        component: Customer
      },
      '/customer/new': {//新建客户
        component: CustomerNew
      },
      '/customer/edit/:id': {//编辑客户
        component: CustomerEdit
      },
      '/customer/mainList':{//客户维护列表
        component: Maintenance
      },
      '/customer/mainNew/:id': {//新增客户维护
        component: MainNew
      },
      '/customer/mainRecord/:id': {//客户维护记录
        component: MainRecord
      },
      '/customer/transfer': {//移交客户
        component: CusTransfer
      },
      '/customer/accept': {//客户接收
        component: CusAccpet
      },
      '/customer/show/:id': {//客户信息展示
        component: CusShow
      },
      /*end---客户---end*/


      /*start---机构---start*/
      '/organization/list': {//机构列表
        component: OrgList
      },
      '/organization/edit/:id': {//编辑机构
        component: OrgEdit
      },
      '/organization/new': {//新建机构
        component: OrgNew
      },
      /*end---机构---end*/


      /*start---权限---start*/
      '/role/list': {//权限列表
        component: Role
      },
      '/role/new': {//权限新建
        component: RoleNew
      },
      '/role/edit/:id': {//权限编辑
        component: RoleEdit
      },
      /*end---权限---end*/


      /*start---系统参数---start*/
      '/parameter/list': {//系统参数列表
        component: Parameter
      },
      '/parameter/edit/:id': {//系统参数编辑
        component: ParaEdit
      },
      /*end---系统参数---end*/


      /*start---数据字典---start*/
       '/dictionary/list': {//数据字典列表
         component: Dictionary
       },
       '/dictionary/edit/:id': {
         component: DictionaryEdit
       },
      /*end---数据字典---end*/


      /*start---产品---start*/
        '/product/new1':{//新建产品1
          component:ProNew1
        },
        '/product/new2':{//新建产品2
          component:ProNew2
        },
        '/product/new3':{//新建产品3
          component:ProNew3
        },
        '/product/new4':{//新建产品4
          component:ProNew4
        },
        '/product/new5':{//新建产品5
          component:ProNew5
        },
        '/product/list':{//产品列表
          component:ProList
        },
        /*end---产品---end*/
        /*start---菜单管理---start*/
        '/menu/manage': {
          component: MenuManage
        },
        /*end---菜单管理---end*/

      /*start---登录日志管理---start*/
      '/log/list': {//登陆日志列表
        component: LogList
      },
      /*start---登录日志管理---start*/

      /*start---个人中心---start*/
      '/user/personal': {
        component: personal
      },
      /*start---个人中心---start*/

        /*start---消息---start*/
        '/message/list':{//消息列表
          component: UserMessage
        }

        /*start---消息---start*/
      }
  }
}
