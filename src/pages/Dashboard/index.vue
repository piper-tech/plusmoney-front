<template>
	<div class="dashboard">
		<Appbar />
		<Drawer />
		<router-view name="dialog" />
		<v-main>
			<Content>
				<router-view />
			</Content>
		</v-main>
	</div>
</template>

<script>
import Appbar from '@/components/common/Appbar'
import Drawer from '@/components/common/Drawer'
import Content from '@/components/common/Content'
export default {
	components: {
		Appbar,
		Drawer,
		Content,
	},
	async mounted() {
		await this.$store.dispatch('me')
	},
}
</script>

<style lang="scss" scoped>
.dashboard {
	background: #f5f5f5;
	height: 100%;
}
</style>
