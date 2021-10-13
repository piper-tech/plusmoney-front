<template>
	<v-form class="form">
		<div class="form__content">
			<v-row>
				<v-col md="12">
					<v-autocomplete
						label="Categorias"
						outlined
						clearable
						prepend-inner-icon="category"
						color="#508991"
						hide-details
						v-model="category"
					/>
				</v-col>
			</v-row>
		</div>
		<v-card-actions
			class="form__actions pr-0 mt-3"
			style="display: flex; justify-content: flex-end"
		>
			<v-btn color="#E30000" dark depressed height="45px" width="125px"
				>Excluir</v-btn
			>
		</v-card-actions>
	</v-form>
</template>

<script>
export default {
	data: () => ({
		description: '',
		category: '',
	}),
}
</script>

<style lang="scss" scoped>
.form {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
</style>
