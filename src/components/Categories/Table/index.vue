<template>
	<v-card class="card">
		<v-card-title>
			Casa
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
			:items="desserts"
			:search="search"
		></v-data-table>
	</v-card>
</template>

<script>
export default {
	data() {
		return {
			search: '',
			headers: [
				{
					text: 'Descrição',
					align: 'start',
					sortable: false,
					value: 'description',
				},
				{ text: 'Data', value: 'date' },
				{ text: 'Valor', value: 'amount' },
			],
			desserts: [
				{
					description: 'Aluguel',
					date: '05/09/2021',
					amount: 'R$2.350,00',
				},
				{
					description: 'Conta de água',
					date: '08/09/2021',
					amount: 'R$76,00',
				},
				{
					description: 'Conta de água',
					date: '08/09/2021',
					amount: 'R$76,00',
				},
				{
					description: 'Compras do mês',
					date: '01/09/2021',
					amount: 'R$730,00',
				},
			],
		}
	},
}
</script>

<style lang="scss" scoped>
.card {
	margin-top: 20px;
}
</style>
