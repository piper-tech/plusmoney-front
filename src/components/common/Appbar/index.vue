<template>
	<v-app-bar app flat height="96" color="#fff">
		<Content>
			<div class="content">
				<v-menu
					v-model="menu"
					:close-on-content-click="false"
					offset-y
					transition="scale-transition"
				>
					<template v-slot:activator="{ on, attrs }">
						<div class="content__profile">
							<v-avatar
								color="#508991"
								size="60"
								class="content__profile__avatar"
							>
								<v-icon color="#fff"> person </v-icon>
							</v-avatar>
							<v-btn v-bind="attrs" v-on="on" depressed text>
								<span class="content__profile__name">{{ getMe.name }}</span>
								<v-icon color="#868686" class="ml-2"> expand_more </v-icon>
							</v-btn>
						</div>
					</template>
					<v-list>
						<v-list-item link @click="modal = true">
							<v-list-item-content>
								<v-list-item-title> Perfil </v-list-item-title>
							</v-list-item-content>
							<v-list-item-icon>
								<v-avatar color="#eaedf0" size="25">
									<v-icon>chevron_right</v-icon>
								</v-avatar>
							</v-list-item-icon>
						</v-list-item>
					</v-list>
				</v-menu>
				<v-btn icon class="ml-5" @click="logout">
					<v-icon color="#E30000">logout</v-icon>
				</v-btn>
			</div>
			<Profile :modal="modal" :close="close" />
		</Content>
	</v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import Content from '@/components/common/Content'
import Profile from '@/components/common/Profile'
export default {
	data: () => ({
		menu: false,
		modal: false,
	}),
	computed: {
		...mapGetters({ getMe: 'getMe', getValuesList: 'getValuesList' }),
	},
	components: {
		Content,
		Profile,
	},
	methods: {
		async logout() {
			window.localStorage.clear()
			await this.$store.dispatch('clearValuesList')
			await this.$store.dispatch('clearUser')
			this.$router.push({ name: 'Login' })
		},
		close() {
			this.modal = false
		},
	},
}
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	max-width: 1050px;
	padding: 0 !important;
	&__profile {
		/* padding-bottom: 20px; */
		&__avatar {
			color: #fff;
		}
		&__name {
			color: #868686;
			font-family: 'Poppins', sans-serif;
			font-size: 15px;
			font-weight: 500;
			text-transform: capitalize;
		}
	}
}
</style>
