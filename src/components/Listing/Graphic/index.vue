<template>
	<v-card class="card" width="500px">
		<Chart :chart-data="chartData" :options="options" />
	</v-card>
</template>

<script>
import Chart from '@/components/common/LineChart.vue'

const options = {
	responsive: true,
	maintainAspectRatio: false,
	animation: {
		animateRotate: false,
	},
}

export default {
	components: {
		Chart,
	},
	data() {
		return {
			options,
			chartData: {
				labels: ['Casa', 'Vendas'],
				datasets: [
					{
						backgroundColor: ['#508991', '#004346'],
						data: [12, 6],
					},
				],
			},
		}
	},
}
</script>

<style lang="scss" scoped>
.card {
	padding: 20px;
	margin-right: 20px;
}
</style>
