<template>
	<v-app-bar app flat height="96" color="#fff">
		<Content>
			<div class="content">
				<div class="content__profile">
					<v-avatar color="#508991" size="60" class="mr-3"> </v-avatar>
					<span class="content__profile__name">{{ getMe.name }}</span>
				</div>

				<v-btn icon class="ml-10" @click="logout">
					<v-icon color="#E30000">logout</v-icon>
				</v-btn>
			</div>
		</Content>
	</v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import Content from '@/components/common/Content'
export default {
	computed: {
		...mapGetters({ getMe: 'getMe', getValuesList: 'getValuesList' }),
	},
	components: {
		Content,
	},
	methods: {
		async logout() {
			window.localStorage.clear()
			await this.$store.dispatch('clearValuesList')
			await this.$store.dispatch('clearUser')
			this.$router.push({ name: 'Login' })
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
		&__name {
			color: #868686;
			font-family: 'Poppins', sans-serif;
			font-size: 15px;
			font-weight: 500;
		}
	}
}
</style>
