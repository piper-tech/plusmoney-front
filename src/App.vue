<template>
	<v-app>
		<v-main id="app">
			<router-view />
		</v-main>
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
</style>
