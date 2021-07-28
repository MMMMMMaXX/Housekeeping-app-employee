// @ts-ignore
import { get, post, post_json } from '@/http/axios'
export default {
    namespaced: true,
    state: {
        // 栏目数据
        orderData: []
    },
    mutations: {
        SET_ORDERDATA(state, payload) {
            state.orderData = payload

        }
    },
    actions: {
        //    获取全部栏目的数据
        async getAllOrderDateMx({ commit }, payload) {
            let res = await get('/order/pageQuery', payload)
            // console.log(res);
            return res
            // commit('SET_ORDERDATA', res.data.data.list)
        },
        async getAllOrderDate({ commit }, payload) {
            let res = await get('/order/pageQuery', payload)
            // console.log(res);
            // return res
            commit('SET_ORDERDATA', res.data.data.list)
        }
    }
}
