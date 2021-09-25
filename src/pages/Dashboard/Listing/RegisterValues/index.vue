<template>
	<v-navigation-drawer v-model="dialog" absolute temporary right width="600px">
		<v-card flat class="create">
			<v-card-title>
				<h1 class="page-title">Cadastrar Valores</h1>
				<v-btn icon>
					<v-icon>close</v-icon>
				</v-btn>
			</v-card-title>

			<v-card-text>
				<Form />
			</v-card-text>

			<v-card-actions style="display: flex; justify-content: flex-end">
				<v-btn color="#F40F46" outlined depressed>Cadastrar</v-btn>
			</v-card-actions>
		</v-card>
	</v-navigation-drawer>
</template>

<script>
import Form from '@/components/Listing/RegisterValues/Form'
export default {
	components: {
		Form,
	},
}
</script>
