<template>
	<div class="listing">
		<Header />
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
import { mapGetters } from 'vuex'

import Header from '@/components/Listing/Header'
import Cards from '@/components/Listing/Cards'
import Graphic from '@/components/Listing/Graphic'
import Listing from '@/components/Listing/Listing'
export default {
	created() {
		this.$store.dispatch('loadUsers', this.getEmail)
	},
	mounted() {
		this.$store.dispatch('handleValuesList', this.getLoadUsers.id)
	},
	computed: {
		...mapGetters({
			getEmail: 'getEmail',
			getLoadUsers: 'getLoadUsers',
			getValuesList: 'getValuesList',
		}),
	},
	components: {
		Header,
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
