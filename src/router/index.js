import Vue from 'vue'
import VueRouter from 'vue-router'
// import AppBar from '@/components/organisms/AppBar'
import Drawer from '@/components/common/Drawer'

Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		name: 'Login',
		component: () => import(/* webpackChunkName: "login" */ '@/pages/Login'),
	},
	{
		path: '/cadastro',
		name: 'register',
		component: () =>
			import(/* webpackChunkName: "register" */ '@/pages/Register'),
	},
	{
		path: '/',
		component: () =>
			import(/* webpackChunkName: "dashboard_index" */ '@/pages/Dashboard'),
		children: [
			{
				path: '/listagem',
				name: 'dashboard-listagem',
				component: () =>
					import(
						/* webpackChunkName: "dashboard-listagem" */ '@/pages/Dashboard/Listing'
					),
				// appbar: AppBar,
				drawer: Drawer,
			},
		],
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
