import Http from '@/utils/request'

export default {
	login: (params) => Http.post('login', params),
	registerUser: (params) => Http.post('logup', params),
	loadUsers: (email) =>
		Http.get(`users`, {
			params: {
				email: email,
			},
		}),
	registerValue: (params) => Http.post('Entry', params),
	valuesList: (userId) => Http.get(`entry?userId=${userId}`),
}
