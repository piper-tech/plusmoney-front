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
						v-model="value"
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
						:class="type === 'entry' ? 'active-entry' : ''"
						@click="type = 'entry'"
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
						:class="type === 'output' ? 'active-output' : ''"
						@click="type = 'output'"
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
						v-model="category"
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
								v-model="computedDateFormatted"
								label="Data"
								persistent-hint
								outlined
								clearable
								@click:clear="date = null"
								prepend-inner-icon="mdi-calendar"
								readonly
								v-bind="attrs"
								v-on="on"
							/>
						</template>
						<v-date-picker
							v-model="date"
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
				@click="registerValue"
				color="#508991"
				dark
				depressed
				height="45px"
				width="125px"
				>Cadastrar</v-btn
			>
		</v-card-actions>
	</v-form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	data: () => ({
		menu: false,
		date: null,
		description: '',
		value: '',
		category: '',
		type: 'entry',
	}),
	computed: {
		...mapGetters({
			getMe: 'getMe',
			getCategoriesList: 'getCategoriesList',
		}),
		computedDateFormatted() {
			return this.formatDate(this.date)
		},
		currentDate() {
			const date = new Date()
			const day = String(date.getDate()).padStart(2, '0')
			const mounth = String(date.getMonth() + 1).padStart(2, '0')
			const year = date.getFullYear()
			const currentDate = day + '/' + mounth + '/' + year
			return currentDate
		},
	},
	mounted() {
		this.$store.dispatch('categoryList', this.getMe.id)
	},
	methods: {
		formatDate(date) {
			if (!date) return null

			const [year, month, day] = date.split('-')
			return `${day}/${month}/${year}`
		},
		async registerValue() {
			try {
				const obj = {
					userId: this.getMe.id,
					description: this.description,
					value: this.type === 'entry' ? this.value : '-' + this.value,
					categoryId: this.category,
					date: this.date || this.currentDate,
				}
				await this.$store.dispatch('registerValue', obj)
				this.$store.dispatch('setSnackbar', {
					status: true,
					message: 'Valor cadastrado com sucesso!',
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
