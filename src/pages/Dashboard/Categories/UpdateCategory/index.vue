<template>
	<v-navigation-drawer
		v-model="dialog"
		@input="watch"
		absolute
		temporary
		right
		width="550px"
	>
		<v-card flat class="card" height="100%">
			<v-card-title class="card__header">
				<span class="card__header__title">Excluir categorias</span>

				<v-btn color="#fff" fab icon @click="set" class="button">
					<v-icon>close</v-icon>
				</v-btn>
			</v-card-title>
			<v-card-text class="card__text">
				<Form />
			</v-card-text>
		</v-card>
	</v-navigation-drawer>
</template>

<script>
import Form from '@/components/Categories/UpdateCategory/Form'
import drawer from '@/mixins/drawer'
export default {
	mixins: [drawer],
	components: {
		Form,
	},
}
</script>

<style lang="scss" scoped>
.card {
	border-radius: 0;
	&__header {
		background-color: #508991;
		width: 100%;
		display: flex;
		justify-content: space-between;
		&__title {
			font-weight: 600;
			font-size: 22px;
			color: #fff;
		}
	}
	&__text {
		height: 90%;
		padding: 30px 25px;
	}
	&__actions {
		padding: 0 25px;
	}
}
</style>
