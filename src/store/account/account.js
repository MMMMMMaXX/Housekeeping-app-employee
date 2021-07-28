import {
    get,
    post_json
} from '@/http/axios'
export default {
    namespaced: true,
    state: {
        // 账户数据
        accountData: []
    },
    mutations: {
        SET_ACCOUNTDATA(state, payload) {
            state.accountData = payload
        }
    },
    actions: {
        // 获取账户数据
        async getAllAccountData({
            commit
        }, payload) {
            let res = await get('/accountApply/pageQueryAccountApply', payload)
            commit('SET_ACCOUNTDATA', res.data.data.list)
        }
    }
}