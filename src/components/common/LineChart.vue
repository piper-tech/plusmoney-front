<script>
import { Doughnut } from 'vue-chartjs'

export default {
	extends: Doughnut,
	props: ['chartData', 'options'],
	methods: {
		update() {
			this.$_data.$_chart.update()
		},
	},
	watch: {
		'chartData.datasets[0].data': {
			deep: true,
			handler() {
				console.log('mudou')
			},
		},
	},
	mounted() {
		this.renderChart(this.chartData, this.options)
	},
}
</script>
