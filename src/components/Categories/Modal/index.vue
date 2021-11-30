<template>
	<v-dialog v-model="modal" width="500px" class="dialog">
		<v-card class="dialog__card">
			<div class="dialog__card__close">
				<v-btn icon @click="close">
					<v-icon>close</v-icon>
				</v-btn>
			</div>

			<div class="dialog__card__form">
				<v-row class="mt-3">
					<v-col md="12">
						<v-text-field
							label="Descrição"
							outlined
							clearable
							required
							prepend-inner-icon="add"
							color="#508991"
							hide-details
							v-model="form.description"
						/>
					</v-col>
				</v-row>
			</div>
			<v-card-actions
				class="form__actions pr-0 mt-3"
				style="display: flex; justify-content: flex-end"
			>
				<v-btn
					color="#E30000"
					dark
					depressed
					height="45px"
					width="125px"
					@click="deleteCategory"
					>Deletar</v-btn
				>
				<v-btn
					color="#508991"
					dark
					depressed
					height="45px"
					width="125px"
					@click="updateCategory"
					>Editar</v-btn
				>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	data: () => ({
		form: {
			description: '',
		},
	}),
	props: {
		modal: {
			type: Boolean,
		},
		close: {
			type: Function,
		},
	},

	computed: {
		...mapGetters({ getMe: 'getMe', category: 'getCategory' }),
	},
	watch: {
		category: {
			deep: true,
			handler() {
				this.populateFields()
			},
		},
	},
	methods: {
		populateFields() {
			const arr = Object.keys(this.form)
			arr.map((item) => {
				this.form[item] = this.category[item]
			})
		},
		async updateCategory() {
			try {
				const payload = {
					userId: this.getMe.id,
					description: this.form.description,
				}

				await this.$store.dispatch('updateCategory', {
					id: this.category.id,
					payload,
				})

				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Categoria atualizada com sucesso!',
				})
				this.close()
				this.$store.dispatch('categoryList', this.getMe.id)
			} catch (e) {
				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Algo deu errado, tente novamente',
				})
				console.log(e)
			}
		},
		async deleteCategory() {
			try {
				await this.$store.dispatch('deleteCategory', this.category.id)

				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Categoria excluída com sucesso!',
				})
				this.close()
				this.$store.dispatch('categoryList', this.getMe.id)
			} catch (e) {
				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Algo deu errado, tente novamente',
				})
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.dialog {
	&__card {
		padding: 10px 30px 30px 30px;
		display: flex;
		flex-direction: column;
		&__close {
			display: flex;
			justify-content: flex-end;
		}
	}
}
</style>
