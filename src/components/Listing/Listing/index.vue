<template>
	<v-card class="card" width="530px">
		<v-row>
			<v-col md="12" class="py-6 px-6">
				<v-menu
					v-model="menu"
					:close-on-content-click="false"
					:close-on-click="false"
					transition="scale-transition"
					offset-y
					max-width="290px"
					min-width="auto"
				>
					<template v-slot:activator="{ on, attrs }">
						<v-text-field
							color="#508991"
							v-model="dateRangeText"
							label="Filtre pela data"
							persistent-hint
							hide-details
							outlined
							clearable
							@click:clear="clearDates"
							prepend-inner-icon="mdi-calendar"
							readonly
							v-bind="attrs"
							v-on="on"
						/>
					</template>
					<v-date-picker
						selected-items-text="2 Selecionados"
						v-model="dates"
						color="#508991"
						locale="pt"
						range
					>
						<v-spacer />
						<v-btn text color="#508991" @click="close"> Cancelar </v-btn>
						<v-btn text color="#508991" @click="saveDate"> Salvar </v-btn>
					</v-date-picker>
				</v-menu>
			</v-col>
		</v-row>
		<v-list class="card__list" v-if="getValuesList.entries.length > 0">
			<v-list-item
				v-for="(item, index) in items"
				:key="index"
				class="card__list__item"
				@click="editItem(item)"
			>
				<div class="card__list__item__date">
					<span class="card__list__item__date__text">{{
						formatDate(item.date)
					}}</span>
				</div>
				<div class="card__list__item__content">
					<div class="card__list__item__content__box">
						<figure class="card__list__item__content__box__figure">
							<v-icon :color="item.type === 'entry' ? '#1BC200' : '#E30000'">{{
								item.type === 'entry' ? 'add' : 'remove'
							}}</v-icon>
						</figure>
						<div class="card__list__item__content__box__text">
							<span class="card__list__item__content__box__text__description">{{
								item.category.description
							}}</span>
							<span class="card__list__item__content__box__text__category">{{
								item.description
							}}</span>
						</div>
					</div>
					<span class="card__list__item__content__price"
						>R$
						{{
							item.value.toLocaleString('pt-br', { minimumFractionDigits: 2 })
						}}</span
					>
				</div>
			</v-list-item>
		</v-list>
		<div class="card__lottie" v-else>
			<lottie-animation
				:loop="true"
				ref="anim"
				:animationData="require('@/assets/no-entries.json')"
			/>
			<span class="card__lottie__text">Ainda não possui registros.</span>
		</div>
	</v-card>
</template>

<script>
import { format, parseISO } from 'date-fns'
import LottieAnimation from 'lottie-web-vue'
import { mapGetters } from 'vuex'
export default {
	data: () => ({
		format,
		parseISO,
		item: {},
		dates: [],
		menu: false,
	}),
	components: {
		LottieAnimation,
	},
	computed: {
		...mapGetters({
			getValuesList: 'getValuesList',
			getMe: 'getMe',
		}),
		items() {
			if (!this.getValuesList.entries) return []
			return this.getValuesList.entries
		},
		dateRangeText() {
			return this.dates
				.map((item) => {
					item = format(parseISO(item), 'dd/MM/yyyy')
					return item
				})
				.join('~')
		},
	},
	mounted() {
		if (this.getMe.id) {
			this.$store.dispatch('handleValuesList', { userId: this.getMe.id })
		}
	},
	watch: {
		getMe() {
			if (this.getMe.id) {
				this.$store.dispatch('handleValuesList', { userId: this.getMe.id })
			}
		},
	},
	methods: {
		editItem(item) {
			this.item = item
			this.$router.push({
				name: 'listagem-editar',
				params: {
					id: this.item.id,
					item: this.item,
				},
			})
		},
		close() {
			this.dates = []
			this.menu = false
		},
		saveDate() {
			try {
				if (this.dates[1] > this.dates[0]) {
					this.menu = false
					this.$store.dispatch('handleValuesList', {
						userId: this.getMe.id,
						startDate: this.dates[0],
						endDate: this.dates[1],
					})
				} else {
					this.$store.dispatch('setSnackbar', {
						status: true,
						message: 'Data inicial precisa ser maior que a data final.',
					})
					this.dates = null
				}
			} catch (e) {
				console.error(e)
			}
		},
		clearDates() {
			this.dates = []
			this.$store.dispatch('handleValuesList', {
				userId: this.getMe.id,
			})
		},
		formatDate(date) {
			let newDate = date
			if (!date) return null

			if (date.includes('T')) newDate = date.split('T')[0]

			return format(parseISO(newDate), 'dd/MM/yyyy')
		},
	},
}
</script>

<style lang="scss" scoped>
.card {
	padding: 15px;
	max-height: 500px;
	overflow-y: scroll;
	&__lottie {
		width: 300px;
		margin: auto;
		padding: 30px 0;
		height: 100%;
		text-align: center;
		&__text {
			font-size: 18px;
			color: #868686;
		}
	}
	&__list {
		width: 100%;
		/* margin-top: 10px; */
		&__item {
			width: 100%;
			display: flex;
			flex-direction: column;
			height: 110px;
			&__date {
				width: 100%;
				border-bottom: 1px solid #d9dcdd;
				padding-bottom: 5px;
				&__text {
					font-size: 15px;
					color: #646464;
				}
			}
			&__content {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				padding-top: 10px;
				&__box {
					display: flex;
					justify-content: space-between;
					align-items: center;
					&__figure {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 40px;
						height: 40px;
						border-radius: 5px;
						box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
					}
					&__text {
						display: flex;
						flex-direction: column;
						margin-left: 15px;
						&__description {
							color: #777777;
						}
						&__category {
							font-weight: 600;
							font-size: 15px;
						}
					}
				}
				&__price {
					font-weight: 600;
				}
			}
		}
	}
}
</style>
