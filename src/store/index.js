import Vue from 'vue'
import Vuex from 'vuex'
import loadFields from '@/services/loadFields'
import { createQueryString } from '@/utils/queryString'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		snackbar: false,
		snackbarMsg: '',
		overlay: false,
		users: {},
		valuesList: {},
		user: {},
		categoriesList: [],
		category: {},
	},

	mutations: {
		setSnackbar: (state, { status, message }) => {
			state.snackbar = status
			state.snackbarMsg = message
		},
		setOverlay: (state, status) => set((state.overlay = status)),
		loadUsers(state, data) {
			state.users = data
		},
		setValuesList(state, data) {
			state.valuesList = data
		},
		setMe(state, data) {
			state.user = data
		},
		setCategoriesList(state, data) {
			state.categoriesList = data
		},
		setClearValuesList(state) {
			state.valuesList = {}
		},
		setClearUser(state) {
			state.user = {}
		},
		setCategory(state, data) {
			state.category = data
		},
	},

	getters: {
		getSnackbar: (state) => state.snackbar,
		getSnackbarMsg: (state) => state.snackbarMsg,
		getLoadUsers: (state) => state.users,
		getValuesList: (state) => state.valuesList,
		getMe: (state) => state.user,
		getCategoriesList: (state) => state.categoriesList,
		getCategory: (state) => state.category,
		getOverlay: (state) => state.overlay,
	},

	actions: {
		setSnackbar({ commit }, data) {
			commit('setSnackbar', data)
		},

		setOverlay({ commit }, status) {
			commit('setOverlay', status)
		},

		async login({ dispatch }, params) {
			dispatch('setOverlay', true, { root: true })
			try {
				dispatch('clearValuesList', { root: true })
				const { data } = await loadFields.login(params)
				window.localStorage.setItem('Authorization', data.accessToken)
				return data
			} catch (e) {
				console.log(e)
			} finally {
				dispatch('setOverlay', true, { root: false })
			}
		},

		async registerUser(_, params) {
			dispatch('setOverlay', true, { root: true })
			try {
				const { data } = await loadFields.registerUser(params)
				window.localStorage.setItem('Authorization', data.accessToken)
				return data
			} catch (e) {
				console.log(e)
			} finally {
				dispatch('setOverlay', true, { root: false })
			}
		},

		async me({ commit }) {
			dispatch('setOverlay', true, { root: true })
			try {
				const { data } = await loadFields.me()
				commit('setMe', data)
			} catch (e) {
				console.log(e)
			} finally {
				dispatch('setOverlay', true, { root: false })
			}
		},

		async loadUsers({ commit }, email) {
			try {
				const { data } = await loadFields.loadUsers(email)
				commit('loadUsers', data)
			} catch (e) {
				console.log(e)
			}
		},

		async registerValue(_, params) {
			dispatch('setOverlay', true, { root: true })
			try {
				await loadFields.registerValue(params)
			} catch (e) {
				console.log(e)
			} finally {
				dispatch('setOverlay', true, { root: false })
			}
		},

		async updateValue(_, { id, payload }) {
			dispatch('setOverlay', true, { root: true })
			try {
				console.log(id, payload, 'action')
				await loadFields.updateValue(id, payload)
			} catch (e) {
				console.log(e)
			} finally {
				dispatch('setOverlay', true, { root: false })
			}
		},

		async deleteValue(_, id) {
			dispatch('setOverlay', true, { root: true })
			try {
				await loadFields.deleteValue(id)
			} catch (e) {
				console.log(e)
			} finally {
				dispatch('setOverlay', true, { root: false })
			}
		},

		async handleValuesList({ commit }, query) {
			try {
				const { data } = await loadFields.entriesList(
					createQueryString({ query })
				)
				commit('setValuesList', data)
			} catch (e) {
				console.log(e)
			}
		},

		async categoryList({ commit }, userId) {
			try {
				const { data } = await loadFields.categoriesList(userId)
				commit('setCategoriesList', data)
			} catch (e) {
				console.log(e)
			}
		},

		async registerCategory(_, params) {
			dispatch('setOverlay', true, { root: true })
			try {
				await loadFields.registerCategory(params)
			} catch (e) {
				console.log(e)
			} finally {
				dispatch('setOverlay', true, { root: false })
			}
		},

		async updateCategory(_, { id, payload }) {
			dispatch('setOverlay', true, { root: true })
			try {
				await loadFields.updateCategory(id, payload)
			} catch (e) {
				console.log(e)
			} finally {
				dispatch('setOverlay', true, { root: false })
			}
		},

		async deleteCategory(_, id) {
			dispatch('setOverlay', true, { root: true })
			try {
				await loadFields.deleteCategory(id)
			} catch (e) {
				console.log(e)
			} finally {
				dispatch('setOverlay', true, { root: false })
			}
		},

		getCategory({ commit }, category) {
			commit('setCategory', category)
		},

		clearValuesList({ commit }) {
			commit('setClearValuesList')
		},

		clearUser({ commit }) {
			commit('setClearUser')
		},
	},
})
