<template>
	<div class="dashboard">
		<Appbar />
		<Drawer />
		<!-- <router-view name="dialog" /> -->
		<v-main>
			<router-view />
		</v-main>
	</div>
</template>

<script>
import Appbar from '@/components/common/Appbar'
import Drawer from '@/components/common/Drawer'
export default {
	components: {
		Appbar,
		Drawer,
	},
}
</script>

<style lang="scss" scoped>
.dashboard {
	background: #f5f5f5;
	height: 100%;
}
</style>
