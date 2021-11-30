<template>
	<v-card class="card" width="700px">
		<v-card-title class="card__title">
			<span class="card__title__title">Pesquise por categoria</span>
		</v-card-title>
		<v-card-text class="card__text">
			<v-row>
				<v-col md="12">
					<v-text-field
						label="Categoria"
						outlined
						clearable
						required
						prepend-inner-icon="category"
						color="#508991"
						hide-details
						v-model="value"
					/>
				</v-col>
			</v-row>
			<v-btn
				depressed
				color="#508991"
				dark
				class="mt-5"
				width="150px"
				height="40px"
			>
				Pesquisar
			</v-btn>
		</v-card-text>
	</v-card>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.card {
	margin-right: 20px;
	&__title {
		&__title {
			font-family: 'Rubik', sans-serif;
			font-size: 20px;
		}
	}
}
</style>
