import {
    get,
    post_json
} from '@/http/axios'
export default {
    namespaced: true,
    state: {
        // 已完成的订单数据
        endOrderData: []
    },
    mutations: {
        SET_ENDORDERDATA(state, payload) {
            state.endOrderData = payload
        }
    },
    actions: {
        // 获取已完成的订单数据
        async getAllEndOrderData({
            commit
        }, payload) {
            let res = await get('/order/pageQuery', payload)
            // console.log(res);
            commit('SET_ENDORDERDATA', res.data.data.list)
        },
    }
}