import Vue from 'vue'
import Vuex from 'vuex'
import loadFields from '@/services/loadFields'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {},

	mutations: {},

	actions: {
		async registerUser({ commit }, params) {
			try {
				const { data } = await loadFields.registerUser(params)
				commit('setRegisterUser', data)
			} catch (e) {
				console.log(e)
			}
		},
		async login({ commit }, params) {
			try {
				const { data } = await loadFields.login(params)
				commit('setLogin', data)
				window.localStorage.setItem('token', JSON.stringify(data))
				return data
			} catch (e) {
				console.log(e)
			}
		},
	},
})
