<template>
	<div class="category">
		<Header />
		<div class="category__content">
			<Search />
			<Actions />
		</div>
	</div>
</template>

<script>
import Header from '@/components/Categories/Header'
import Search from '@/components/Categories/Search'
import Actions from '@/components/Categories/Actions'
export default {
	data: () => ({}),
	components: {
		Header,
		Search,
		Actions,
	},
}
</script>

<style lang="scss" scoped>
.category {
	&__content {
		display: flex;
	}
}
</style>
