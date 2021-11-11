<template>
	<v-card class="card" width="500px">
		<Chart
			v-if="!loading && getValuesList.abstract_by_category.length > 0"
			:chart-data="chartData"
			:options="options"
		/>
		<div class="card__lottie" v-else>
			<lottie-animation
				:loop="true"
				ref="anim"
				:animationData="require('@/assets/no-entries.json')"
			/>
			<span class="card__lottie__text"
				>Ainda não possui categorias registradas.</span
			>
		</div>
	</v-card>
</template>

<script>
import Chart from '@/components/common/LineChart.vue'
import LottieAnimation from 'lottie-web-vue'
import { mapGetters } from 'vuex'
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
		LottieAnimation,
	},
	mounted() {
		this.renderChart()
	},
	watch: {
		getValuesList() {
			this.loading = true
			this.renderChart()
		},
	},
	data() {
		return {
			loading: true,
			options,
			chartData: {
				labels: [],
				datasets: [
					{
						backgroundColor: [
							'#508991',
							'#004346',
							'#008B8B',
							'#48D1CC',
							'#008080',
						],
						data: [],
					},
				],
			},
			descriptions: [],
		}
	},
	methods: {
		async renderChart() {
			await this.getLabels()
			await this.getData()
			this.loading = false
		},
		getLabels() {
			const arr = []
			this.getValuesList.abstract_by_category.filter((item) => {
				arr.push(item.description)
			})

			this.chartData.labels = arr
		},
		getData() {
			const arr = []
			this.getValuesList.abstract_by_category.filter((item) => {
				arr.push(item.value)
			})

			this.chartData.datasets[0].data = arr
		},
	},
	computed: {
		...mapGetters({
			getValuesList: 'getValuesList',
		}),
	},
}
</script>

<style lang="scss" scoped>
.card {
	padding: 20px;
	margin-right: 20px;
	&__lottie {
		width: 300px;
		margin: auto;
		padding: 30px 0;
		height: 100%;
		text-align: center;
		&__text {
			font-size: 18px;
			color: #868686;
		}
	}
}
</style>
