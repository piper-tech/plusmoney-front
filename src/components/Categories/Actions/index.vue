<template>
	<v-card class="card">
		<v-card-actions class="card__actions">
			<v-btn
				outlined
				depressed
				color="#508991"
				width="100%"
				height="45px"
				class="mb-5"
				:to="{ name: 'categorias-cadastrar' }"
			>
				<v-icon class="mr-2">add</v-icon>
				Adicionar categoria
			</v-btn>

			<v-btn
				outlined
				depressed
				color="#E30000"
				width="100%"
				height="45px"
				class="ml-0 mt-3"
				:to="{ name: 'categorias-editar' }"
			>
				<v-icon class="mr-2">delete</v-icon>
				Excluir categoria
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<style lang="scss" scoped>
.card {
	padding: 20px;
	&__actions {
		display: flex;
		flex-direction: column;
	}
}
</style>
