<template>
	<v-card>
		<v-navigation-drawer app color="#fff">
			<v-list>
				<v-list-item three-line>
					<v-img max-width="195" src="@/assets/+money.svg" />
				</v-list-item>

				<v-list-item link to="/listagem">
					<v-list-item-icon>
						<v-icon>reorder</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>Listagem</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				<v-list-item link>
					<v-list-item-icon>
						<v-icon>attach_money</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>Inserir valores</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				<v-list-item link>
					<v-list-item-icon>
						<v-icon>category</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>Categorias</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</v-card>
</template>

<script>
export default {
	data: () => ({
		drawer: true,
	}),
}
</script>
