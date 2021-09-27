<template>
	<v-card class="card" width="530px">
		<v-list class="card__list">
			<v-list-item
				v-for="(item, index) in list"
				:key="index"
				class="card__list__item"
				@click="editListItem"
			>
				<div class="card__list__item__date">
					<span class="card__list__item__date__text">{{ item.date }}</span>
				</div>
				<div class="card__list__item__content">
					<div class="card__list__item__content__box">
						<figure class="card__list__item__content__box__figure">
							<v-icon :color="item.icon === 'add' ? '#1BC200' : '#E30000'">{{
								item.icon
							}}</v-icon>
						</figure>
						<div class="card__list__item__content__box__text">
							<span class="card__list__item__content__box__text__description">{{
								item.description
							}}</span>
							<span class="card__list__item__content__box__text__category">{{
								item.category
							}}</span>
						</div>
					</div>
					<span class="card__list__item__content__price"
						>R$ {{ item.price }}</span
					>
				</div>
			</v-list-item>
		</v-list>
	</v-card>
</template>

<script>
export default {
	data: () => ({
		list: [
			{
				id: 1,
				date: '5 de setembro',
				icon: 'add',
				description: 'Salário Signa',
				category: 'Vendas',
				price: '2.000,00',
			},
			{
				id: 2,
				date: '11 de setembro',
				icon: 'add',
				description: 'Aluguel casa Paraíso',
				category: 'Vendas',
				price: '1.500,00',
			},
			{
				id: 3,
				date: '18 de setembro',
				icon: 'remove',
				description: 'Conta de água',
				category: 'Casa',
				price: '84,65',
			},
		],
	}),
	methods: {
		editListItem() {
			this.$router.push({
				name: 'listagem-editar',
				params: {
					id: this.list.id,
				},
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.card {
	padding: 15px;
	&__list {
		width: 100%;
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
