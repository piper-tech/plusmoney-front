import Http from '@/utils/request'

export default {
	registerUser: (params) => Http.post('users', params),
	login: (params) => Http.post('login', params),
}
