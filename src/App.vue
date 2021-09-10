<template>
	<v-app>
		<transition name="page" mode="out-in">
			<router-view />
		</transition>
	</v-app>
</template>

<script>
export default {
	name: 'App',

	data: () => ({
		//
	}),
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
