import Vue from 'vue'
import Vuex from 'vuex'
import loadFields from '@/services/loadFields'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		snackbar: false,
		snackbarMsg: '',
	},

	mutations: {
		setSnackbar: (state, { status, message }) => {
			state.snackbar = status
			state.snackbarMsg = message
		},
	},

	getters: {
		getSnackbar: (state) => state.snackbar,
		getSnackbarMsg: (state) => state.snackbarMsg,
	},

	actions: {
		setSnackbar({ commit }, data) {
			commit('setSnackbar', data)
		},

		async registerUser({ dispatch, commit }, params) {
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

				commit('setRegisterUser', data)
				console.log(data)
				return data
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
