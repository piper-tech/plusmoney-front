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
						v-model="form.description"
					/>
				</v-col>
			</v-row>
			<v-row>
				<v-col md="12">
					<v-text-field
						label="Valor"
						outlined
						clearable
						required
						prepend-inner-icon="attach_money"
						color="#508991"
						hide-details
						v-model="form.value"
					/>
				</v-col>
			</v-row>
			<v-row>
				<v-col md="6">
					<v-btn
						color="#09BC8A"
						outlined
						depressed
						width="100%"
						height="50px"
						:class="form.type === 'entry' ? 'active-entry' : ''"
						@click="entryValue"
					>
						<v-icon class="mr-2">arrow_circle_up</v-icon>
						Entrada
					</v-btn>
				</v-col>
				<v-col md="6">
					<v-btn
						color="#E30000"
						outlined
						depressed
						width="100%"
						height="50px"
						:class="form.type === 'output' ? 'active-output' : ''"
						@click="outputValue"
					>
						<v-icon class="mr-2">arrow_circle_down</v-icon>
						Saída
					</v-btn>
				</v-col>
			</v-row>
			<v-row>
				<v-col md="6">
					<v-autocomplete
						label="Categorias"
						outlined
						clearable
						prepend-inner-icon="category"
						color="#508991"
						hide-details
						v-model="form.category"
						:items="getCategoriesList"
						item-value="id"
						item-text="description"
					/>
				</v-col>
				<v-col md="6">
					<v-menu
						v-model="menu"
						:close-on-content-click="false"
						transition="scale-transition"
						offset-y
						max-width="290px"
						min-width="auto"
					>
						<template v-slot:activator="{ on, attrs }">
							<v-text-field
								color="#508991"
								:value="computedDateFormatted"
								label="Data"
								persistent-hint
								outlined
								clearable
								@click:clear="form.date = null"
								prepend-inner-icon="mdi-calendar"
								readonly
								v-bind="attrs"
								v-on="on"
							/>
						</template>
						<v-date-picker
							v-model="form.date"
							color="#508991"
							locale="pt"
							no-title
							@input="menu = false"
						/>
					</v-menu>
				</v-col>
			</v-row>
		</div>
		<v-card-actions
			class="form__actions pr-0"
			style="display: flex; justify-content: flex-end"
		>
			<v-btn
				color="#E30000"
				dark
				depressed
				height="45px"
				width="125px"
				@click="deleteValue"
				>Deletar</v-btn
			>
			<v-btn
				color="#508991"
				dark
				depressed
				height="45px"
				width="125px"
				@click="updateValue"
				>Editar</v-btn
			>
		</v-card-actions>
	</v-form>
</template>

<script>
import { format, parseISO } from 'date-fns'
import { mapGetters } from 'vuex'
export default {
	data: () => ({
		menu: false,
		form: {
			date: format(new Date(), 'yyyy-MM-dd'),
			description: '',
			value: '',
			category: '',
			type: 'entry',
		},
	}),
	props: {
		item: {
			type: Object,
		},
	},
	computed: {
		...mapGetters({
			getMe: 'getMe',
			getCategoriesList: 'getCategoriesList',
		}),
		computedDateFormatted() {
			return this.formatDate(this.form.date)
		},
	},
	mounted() {
		this.$store.dispatch('categoryList', this.getMe.id)
		this.populateFields()
	},
	watch: {
		item: {
			deep: true,
			handler() {
				this.populateFields()
			},
		},
	},
	methods: {
		formatDate(date) {
			let newDate = date
			if (!date) return null

			if (date.includes('T')) newDate = date.split('T')[0]

			return format(parseISO(newDate), 'dd/MM/yyyy')
		},
		populateFields() {
			if (Object.keys(this.item).length === 0) return
			const arr = Object.keys(this.form)
			arr.map((item) => {
				this.form[item] = this.item[item]
			})
		},
		entryValue() {
			this.form.type = 'entry'
			if (this.form.value < 0) this.form.value = this.form.value * -1
		},
		outputValue() {
			this.form.type = 'output'
			if (this.form.value > 0) this.form.value = this.form.value * -1
		},
		async updateValue() {
			try {
				const payload = {
					userId: this.getMe.id,
					description: this.form.description,
					value: this.form.value,
					categoryId: this.form.category.id || this.form.category,
					date: this.form.date,
				}

				await this.$store.dispatch('updateValue', {
					id: this.item.id,
					payload,
				})

				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Valor atualizado com sucesso!',
				})
				this.clear()
				this.$store.dispatch('handleValuesList', { userId: this.getMe.id })
				this.$router.go('-1')
			} catch (e) {
				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Algo deu errado, tente novamente',
				})
			}
		},
		async deleteValue() {
			try {
				await this.$store.dispatch('deleteValue', this.item.id)

				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Valor excluído com sucesso!',
				})
				this.$store.dispatch('handleValuesList', { userId: this.getMe.id })
				this.$router.go('-1')
			} catch (e) {
				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Algo deu errado, tente novamente',
				})
			}
		},
		clear() {
			this.date = null
			this.description = ''
			this.value = ''
			this.category = ''
			this.entry = false
			this.output = false
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

.active-entry {
	background-color: rgba(9, 188, 138, 0.3);
}

.active-output {
	background-color: rgba(227, 0, 0, 0.3);
}
</style>
