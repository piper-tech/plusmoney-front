import Http from '@/utils/request'

export default {
	login: (params) => Http.post('login', params),
	registerUser: (params) => Http.post('logup', params),
	me: () => Http.get('me'),
	loadUsers: (email) =>
		Http.get(`users`, {
			params: {
				email: email,
			},
		}),
	registerValue: (params) => Http.post('entries', params),
	updateValue: (params, id) => Http.put(`entries/${id}`, params),
	entriesList: (userId) => Http.get(`entries?userId=${userId}`),
	categoriesList: (userId) => Http.get(`categories?userId=${userId}`),
	registerCategory: (params) => Http.post('categories', params),
}
