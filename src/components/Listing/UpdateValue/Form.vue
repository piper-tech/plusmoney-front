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
						:class="entry === true && output === false ? 'active-entry' : ''"
						@click="entry = !entry"
					>
						<v-icon class="mr-2">arrow_circle_up</v-icon>
						Entrada
					</v-btn>
					{{ entry }}
				</v-col>
				<v-col md="6">
					<v-btn
						color="#E30000"
						outlined
						depressed
						width="100%"
						height="50px"
						:class="output === true && entry === false ? 'active-output' : ''"
						@click="output = !output"
					>
						<v-icon class="mr-2">arrow_circle_down</v-icon>
						Saída
					</v-btn>
					{{ output }}
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
							></v-text-field>
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
				{{ date }}
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
				>Editar</v-btn
			>
		</v-card-actions>
	</v-form>
</template>

<script>
import { format } from 'date-fns'
export default {
	data: () => ({
		menu: false,
		date: null,
		description: '',
		value: '',
		category: '',
		entry: false,
		output: false,
	}),
	computed: {
		computedDateFormatted() {
			return this.formatDate(this.date)
		},
	},
	methods: {
		formatDate(date) {
			if (!date) return null

			const [year, month, day] = date.split('-')
			return `${day}/${month}/${year}`
		},
		async registerValue() {
			const obj = {
				description: this.description,
				value: this.entry === true ? this.value : '-' + this.value,
				dateEntry:
					format(new Date(this.date)) || format(new Date(), 'dd/MM/yyyy'),
			}
			await this.$store.dispatch('registerValue', obj)
		},
	},
}
</script>

<style lang="scss" scoped>
.form {
	display: flex;
	flex-direction: column;
}

.active-entry {
	background-color: rgba(9, 188, 138, 0.3);
}

.active-output {
	background-color: rgba(227, 0, 0, 0.3);
}
</style>
