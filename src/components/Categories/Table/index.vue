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
		>
			<template v-slot:item.description="{ item }">
				<span>{{ item.description }}</span>
			</template>
			<template v-slot:item.actions="{ item }">
				<v-btn icon @click="updateCategory(item)">
					<v-icon size="25" class="icon-table" color="#B3C0CE"
						>more_horiz</v-icon
					>
				</v-btn>
			</template>
		</v-data-table>
		<Modal :modal="modal" :close="close" />
	</v-card>
</template>

<script>
import Modal from '@/components/Categories/Modal'
import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			modal: false,
			search: '',
			headers: [
				{
					text: 'Nome',
					value: 'description',
				},
				{
					text: '',
					value: 'actions',
					width: 100,
				},
			],
		}
	},
	components: {
		Modal,
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
		// computedDateFormatted() {
		// 	return this.formatDate(this.date)
		// },
	},
	methods: {
		updateCategory(item) {
			this.modal = true
			this.$store.dispatch('getCategory', item)
			console.log(item)
		},
		close() {
			this.modal = false
		},
	},
}
</script>

<style lang="scss" scoped>
.card {
	margin-top: 20px;
	width: 1050px;
}
</style>
