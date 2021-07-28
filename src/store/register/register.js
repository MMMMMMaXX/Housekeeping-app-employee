import { post, post_json } from '@/http/axios'
export default {
  namespaced: true,
  state: {
  },
  mutations: {

  },
  actions: {
    // 注册
    async toRegister(content, params) {
      let res = await post('/user/registerEmployee', params)
      // console.log(res);
    }
  }
}