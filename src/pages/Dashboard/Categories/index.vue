<template>
	<div class="category">
		<Header />
		<!-- <div class="category__content">
			<Search />
			<Actions />
		</div> -->
		<Table />
	</div>
</template>

<script>
import Header from '@/components/Categories/Header'
// import Search from '@/components/Categories/Search'
// import Actions from '@/components/Categories/Actions'
import Table from '@/components/Categories/Table'
export default {
	data: () => ({}),
	components: {
		Header,
		// Search,
		// Actions,
		Table,
	},
}
</script>

<style lang="scss" scoped>
.category {
	width: 100%;
	&__content {
		display: flex;
	}
}
</style>
