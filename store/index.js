/*
* @Description vuex
* @auth LHD
* @Date 2020-09-05
*/

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		historyLists: [] // // 搜索历史记录
	},
	mutations: {
		SET_HISTORY_LISTS (state, payload) {
			state.historyLists = payload
		}
	},
	actions: {
		SET_HISTORY ({commit, state}, payload) {
			const list = state.historyLists
			list.unshift(payload)
			commit('SET_HISTORY_LISTS', list)
		}
	}
})

export default store