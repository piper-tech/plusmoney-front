<template>
	<div class="listing">
		<div class="listing__cards">
			<Cards />
		</div>
		<div class="listing__content">
			<Graphic />
			<Listing />
		</div>
	</div>
</template>

<script>
import Cards from '@/components/Listing/Cards'
import Graphic from '@/components/Listing/Graphic'
import Listing from '@/components/Listing/Listing'
export default {
	components: {
		Cards,
		Listing,
		Graphic,
	},
}
</script>

<style lang="scss" scoped>
.listing {
	&__content {
		padding-top: 30px;
		display: flex;
		justify-content: space-between;
	}
}
</style>
