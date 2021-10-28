<template>
	<v-card class="card">
		<v-card-title>
			Todas as categorias
			<v-spacer />
			<v-spacer />
			<v-text-field
				v-model="search"
				append-icon="mdi-magnify"
				label="Search"
				single-line
				hide-details
			/>
		</v-card-title>
		<v-data-table
			:headers="headers"
			:items="getCategoriesList"
			:search="search"
		/>
	</v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			search: '',
			headers: [
				{
					text: 'Nome',
					value: 'description',
				},
			],
		}
	},
	watch: {
		getMe() {
			if (this.getMe.id) {
				this.$store.dispatch('categoryList', this.getMe.id)
			}
		},
	},
	mounted() {
		if (this.getMe.id) {
			this.$store.dispatch('categoryList', this.getMe.id)
		}
	},
	computed: {
		...mapGetters({
			getMe: 'getMe',
			getCategoriesList: 'getCategoriesList',
		}),
		computedDateFormatted() {
			return this.formatDate(this.date)
		},
	},
}
</script>

<style lang="scss" scoped>
.card {
	margin-top: 20px;
	width: 1100px;
}
</style>
