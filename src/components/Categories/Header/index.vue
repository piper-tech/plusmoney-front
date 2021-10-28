<template>
	<div class="header">
		<h1 class="header__title">Categorias</h1>
		<div class="header__actions">
			<v-btn
				outlined
				depressed
				color="#508991"
				height="45px"
				:to="{ name: 'categorias-cadastrar' }"
			>
				<v-icon class="mr-2">add</v-icon>
				Adicionar categoria
			</v-btn>

			<v-btn
				outlined
				depressed
				color="#E30000"
				height="45px"
				class="ml-3"
				:to="{ name: 'categorias-editar' }"
			>
				<v-icon class="mr-2">delete</v-icon>
				Excluir categoria
			</v-btn>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.header {
	padding: 0 0 30px;
	display: flex;
	justify-content: space-between;
	&__title {
		font-family: 'Poppins', sans-serif;
		font-size: 26px;
		display: flex;
		align-items: start;
	}
	&__actions {
		display: flex;
		align-items: center;
	}
}
</style>
