<template>
	<div class="cards">
		<v-card class="cards__card" width="320px">
			<div class="cards__card__header">
				<v-card-title class="cards__card__header__text">
					<span class="cards__card__header__text__title">Entradas</span>
				</v-card-title>
				<v-icon color="#09BC8A" size="35">arrow_circle_up</v-icon>
			</div>
			<v-card-title>
				<span
					>R$
					{{
						getValuesList.abstract.total_entries.toLocaleString('pt-br', {
							minimumFractionDigits: 2,
						})
					}}</span
				>
			</v-card-title>
		</v-card>

		<v-card class="cards__card" width="320px">
			<div class="cards__card__header">
				<v-card-title class="cards__card__header__text">
					<span class="cards__card__header__text__title">Saídas</span>
				</v-card-title>
				<v-icon color="#E30000" size="35">arrow_circle_down</v-icon>
			</div>
			<v-card-title>
				<span
					>R$
					{{
						getValuesList.abstract.total_outputs.toLocaleString('pt-br', {
							minimumFractionDigits: 2,
						})
					}}</span
				>
			</v-card-title>
		</v-card>

		<v-card class="cards__card" width="320px" color="#74B3CE">
			<div class="cards__card__header">
				<v-card-title class="cards__card__header__text">
					<span
						class="cards__card__header__text__title"
						:style="{ color: '#fff' }"
						>Total</span
					>
				</v-card-title>
				<v-icon color="#fff" size="35" class="material-icons-outlined"
					>monetization_on</v-icon
				>
			</div>
			<v-card-title>
				<span :style="{ color: '#fff' }"
					>R$
					{{
						getValuesList.abstract.total.toLocaleString('pt-br', {
							minimumFractionDigits: 2,
						})
					}}</span
				>
			</v-card-title>
		</v-card>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters({
			getValuesList: 'getValuesList',
			getMe: 'getMe',
		}),
	},
}
</script>

<style lang="scss" scoped>
.cards {
	display: flex;
	justify-content: space-between;
	&__card {
		padding: 10px;
		&__header {
			display: flex;
			justify-content: space-between;
			&__text {
				&__title {
					color: #777777;
					font-size: 20px;
				}
			}
		}
	}
}
</style>
