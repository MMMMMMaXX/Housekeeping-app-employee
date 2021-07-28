import Vue from 'vue'
import Vuex from 'vuex'
// 引入注册模块
import register from './register/register'
// 引入用户模块
import user from './user/user'
// 引入账户管理模块
import account from './account/account'
// 引入已完成的订单模块
import endOrder from './endOrder/endOrder'
// 引入订单模块
import order from './Order/order'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    // 注册模块
    register,
    // 用户模块
    user,
    // 订单模块
    order,
    // 账户模块
    account,
    // 已完成的订单
    endOrder,
  }
})