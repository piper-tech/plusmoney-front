import Vue from 'vue'
import Vuex from 'vuex'
import loadFields from '@/services/loadFields'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		snackbar: false,
		snackbarMsg: '',
		users: {},
		email: '',
	},

	mutations: {
		setSnackbar: (state, { status, message }) => {
			state.snackbar = status
			state.snackbarMsg = message
		},
		loadUsers(state, data) {
			state.users = data
		},
		setEmail(state, date) {
			state.email = date
		},
	},

	getters: {
		getSnackbar: (state) => state.snackbar,
		getSnackbarMsg: (state) => state.snackbarMsg,
		getLoadUsers: (state) => state.users,
		getEmail: (state) => state.email,
	},

	actions: {
		setSnackbar({ commit }, data) {
			commit('setSnackbar', data)
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

		async loadUsers({ commit }, email) {
			try {
				const { data } = await loadFields.loadUsers(email)
				commit('loadUsers', data)
			} catch (e) {
				console.log(e)
			}
		},

		async login({ commit }, email) {
			try {
				const { data } = await loadFields.login(email)
				window.localStorage.setItem('Authorization', data.accessToken)
				commit('setEmail', email.email)
				return data
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
	},
})
