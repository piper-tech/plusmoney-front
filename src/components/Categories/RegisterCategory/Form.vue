<template>
	<v-form class="form">
		<div class="form__content">
			<v-row>
				<v-col md="12">
					<v-text-field
						label="Descrição"
						outlined
						clearable
						required
						prepend-inner-icon="add"
						color="#508991"
						hide-details
						v-model="description"
					/>
				</v-col>
			</v-row>
		</div>
		<v-card-actions
			class="form__actions pr-0 mt-3"
			style="display: flex; justify-content: flex-end"
		>
			<v-btn
				color="#508991"
				dark
				depressed
				height="45px"
				width="125px"
				@click="registerCategory"
				>Cadastrar</v-btn
			>
		</v-card-actions>
	</v-form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	data: () => ({
		description: '',
	}),
	computed: {
		...mapGetters({
			getMe: 'getMe',
		}),
	},
	methods: {
		async registerCategory() {
			try {
				const obj = {
					userId: this.getMe.id,
					description: this.description,
				}
				await this.$store.dispatch('registerCategory', obj)
				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Categoria cadastrada com sucesso!',
				})
				await this.$store.dispatch('categoryList', this.getMe.id)
				this.$router.go('-1')
			} catch (e) {
				console.log(e)
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.form {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
</style>
