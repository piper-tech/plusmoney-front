<template>
	<v-dialog v-model="modal" width="500px" class="dialog">
		<v-card class="dialog__card">
			<div class="dialog__card__close">
				<v-btn icon @click="close">
					<v-icon>close</v-icon>
				</v-btn>
			</div>
			<div class="dialog__card__avatar">
				<v-avatar color="#508991" size="80">
					<span class="name">{{ getInitial(getMe.name) }}</span>
				</v-avatar>
			</div>
			<div class="dialog__card__form">
				<v-row>
					<v-col md="12">
						<v-text-field
							label="Nome completo"
							outlined
							clearable
							required
							prepend-inner-icon="person"
							color="#508991"
							hide-details
							v-model="getMe.name"
							disabled
						/>
					</v-col>
				</v-row>
				<v-row>
					<v-col md="12">
						<v-text-field
							label="Email"
							outlined
							clearable
							required
							prepend-inner-icon="mail"
							color="#508991"
							hide-details
							v-model="getMe.email"
							disabled
						/>
					</v-col>
				</v-row>
			</div>
		</v-card>
	</v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	data: () => ({
		// form: {
		// 	name: '',
		// 	email: '',
		// },
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
		...mapGetters({ getMe: 'getMe' }),
	},
	methods: {
		getInitial(name) {
			const [firstName, lastName] = name.split(' ')
			if (firstName && lastName) {
				return firstName.charAt(0) + lastName.charAt(0)
			} else {
				return `${firstName.charAt(0)}`
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
		&__avatar {
			display: flex;
			justify-content: center;
			padding-bottom: 20px;
		}
		.name {
			color: #fff;
		}
	}
}
</style>
