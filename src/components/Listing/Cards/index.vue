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
				<span>R$ 12.345,98</span>
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
				<span>R$ 5.983,74</span>
			</v-card-title>
		</v-card>

		<v-card class="cards__card" width="320px" color="#74B3CE">
			<div class="cards__card__header">
				<v-card-title class="cards__card__header__text">
					<span
						class="cards__card__header__text__title"
						:style="{ color: '#fff' }"
						>Saídas</span
					>
				</v-card-title>
				<v-icon color="#fff" size="35" class="material-icons-outlined"
					>monetization_on</v-icon
				>
			</div>
			<v-card-title>
				<span :style="{ color: '#fff' }">R$ 5.983,74</span>
			</v-card-title>
		</v-card>
	</div>
</template>

<style lang="scss" scoped>
.cards {
	display: flex;
	justify-content: space-evenly;
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
