<template>
	<div class="dashboard">
		<router-view name="appbar" />
		<router-view name="drawer" />
		<router-view name="dialog" />
		<v-main>
			<router-view />
		</v-main>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.dashboard {
	background: #f5f5f5;
	height: 100%;
}
</style>
