<template>
	<v-app>
		<transition name="page" mode="out-in">
			<router-view />
		</transition>
		<v-snackbar bottom v-model="snackbar">{{ getSnackbarMsg }}</v-snackbar>
	</v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'App',
	data: () => ({
		snackbar: false,
	}),
	computed: {
		...mapGetters(['getSnackbar', 'getSnackbarMsg']),
	},
	watch: {
		getSnackbar() {
			this.snackbar = this.getSnackbar
		},
		snackbar() {
			if (!this.snackbar) {
				this.$store.dispatch('setSnackbar', {
					status: false,
					msg: '',
				})
			}
		},
	},
}
</script>

<style lang="scss" scoped>
#app {
	height: 100%;
}
.page-enter-active,
.page-leave-active {
	transition: opacity 0.5s, transform 0.5s;
}
.page-enter,
.page-leave-to {
	opacity: 0;
	transform: translateX(30%);
}
</style>
