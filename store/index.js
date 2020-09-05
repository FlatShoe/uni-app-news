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
		historyLists: uni.getStorageSync('__historyList') || [] // 每次进入从本地存储获取搜索历史记录
	},
	mutations: {
		SET_HISTORY_LISTS (state, payload) {
			state.historyLists = payload
		},
		CLEAR_HISTORY_LISTS (state) {
			uni.removeStorageSync('__historyList')
			state.historyLists = []
		}
	},
	actions: {
		SET_HISTORY ({commit, state}, payload) {
			const list = state.historyLists
			list.unshift(payload)
			uni.setStorageSync('__historyList', list)
			commit('SET_HISTORY_LISTS', list)
		}
	}
})

export default store