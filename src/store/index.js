import Vue from 'vue'
import Vuex from 'vuex'
import loadFields from '@/services/loadFields'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		snackbar: false,
		snackbarMsg: '',
		users: {},
		valuesList: [],
		user: {},
		categoriesList: [],
	},

	mutations: {
		setSnackbar: (state, { status, message }) => {
			state.snackbar = status
			state.snackbarMsg = message
		},
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
	},

	getters: {
		getSnackbar: (state) => state.snackbar,
		getSnackbarMsg: (state) => state.snackbarMsg,
		getLoadUsers: (state) => state.users,
		getValuesList: (state) => state.valuesList,
		getMe: (state) => state.user,
		getCategoriesList: (state) => state.categoriesList,
	},

	actions: {
		setSnackbar({ commit }, data) {
			commit('setSnackbar', data)
		},

		async login(_, params) {
			try {
				const { data } = await loadFields.login(params)
				window.localStorage.setItem('Authorization', data.accessToken)
				return data
			} catch (e) {
				console.log(e)
			}
		},

		async registerUser({ dispatch }, params) {
			try {
				const { data } = await loadFields
					.registerUser(params)
					.then((response) => {
						if (response.status === 200 || response.status === 201) {
							dispatch(
								'setSnackbar',
								{
									status: true,
									message: 'Usuário cadastrado com sucesso!',
								},
								{ root: true }
							)
						}
					})
				console.log(data)
				return data
			} catch (e) {
				console.log(e)
			}
		},

		async me({ commit }) {
			try {
				const { data } = await loadFields.me()
				commit('setMe', data)
			} catch (e) {
				console.log(e)
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
			try {
				await loadFields.registerValue(params)
			} catch (e) {
				console.log(e)
			}
		},

		async handleValuesList({ commit }, userId) {
			try {
				const { data } = await loadFields.entriesList(userId)
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
			try {
				await loadFields.registerCategory(params)
			} catch (e) {
				console.log(e)
			}
		},
	},
})
