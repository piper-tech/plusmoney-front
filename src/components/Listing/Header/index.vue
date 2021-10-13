<template>
	<div class="header">
		<h1 class="header__title">Listagem</h1>
		<v-btn
			depressed
			outlined
			height="45px"
			color="#508991"
			:to="{ name: 'listagem-cadastrar' }"
		>
			<v-icon class="mr-2">attach_money</v-icon>
			Cadastrar valor
		</v-btn>
	</div>
</template>

<style lang="scss" scoped>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0 30px;
	&__title {
		font-family: 'Poppins', sans-serif;
		font-size: 26px;
	}
}
</style>
