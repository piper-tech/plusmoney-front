import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
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
		path: '/listagem',
		component: () =>
			import(/* webpackChunkName: "dashboard_index" */ '@/pages/Dashboard'),
		children: [
			{
				path: '',
				name: 'listagem',
				component: () =>
					import(
						/* webpackChunkName: "listagem" */ '@/pages/Dashboard/Listing'
					),
			},
			{
				path: '/listagem/cadastrar/',
				name: 'listagem-cadastrar',
				components: {
					default: () =>
						import(
							/* webpackChunkName: "listagem" */ '@/pages/Dashboard/Listing'
						),
					dialog: () =>
						import(
							/* webpackChunkName: "listagem-cadastrar" */ '@/pages/Dashboard/Listing/RegisterValues'
						),
				},
			},
			{
				path: '/listagem/editar/',
				name: 'listagem-editar',
				components: {
					default: () =>
						import(
							/* webpackChunkName: "listagem" */ '@/pages/Dashboard/Listing'
						),
					dialog: () =>
						import(
							/* webpackChunkName: "listagem-editar" */ '@/pages/Dashboard/Listing/UpdateValues'
						),
				},
			},

			{
				path: '/categorias',
				name: 'categorias',
				component: () =>
					import(
						/* webpackChunkName: "categorias" */ '@/pages/Dashboard/Categories'
					),
			},
			{
				path: '/categorias/cadastrar/',
				name: 'categorias-cadastrar',
				components: {
					default: () =>
						import(
							/* webpackChunkName: "categorias" */ '@/pages/Dashboard/Categories'
						),
					dialog: () =>
						import(
							/* webpackChunkName: "categorias-cadastrar" */ '@/pages/Dashboard/Categories/RegisterCategory'
						),
				},
			},
			{
				path: '/categorias/editar/',
				name: 'categorias-editar',
				components: {
					default: () =>
						import(
							/* webpackChunkName: "categorias" */ '@/pages/Dashboard/Categories'
						),
					dialog: () =>
						import(
							/* webpackChunkName: "categorias-editar" */ '@/pages/Dashboard/Categories/UpdateCategory'
						),
				},
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
