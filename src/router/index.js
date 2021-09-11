import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/pages/Public/Login'
import Register from '@/pages/Public//Register'

Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		name: 'login',
		component: Login,
	},
	{
		path: '/cadastro',
		name: 'register',
		component: Register,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
