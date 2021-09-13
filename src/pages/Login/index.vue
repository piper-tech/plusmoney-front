<template>
	<div class="login">
		<section class="login__wrapper">
			<figure class="login__wrapper__figure">
				<img
					src="@/assets/ilustration-login.svg"
					class="login__wrapper__figure__img"
				/>
			</figure>
		</section>
		<section class="login__formulary">
			<figure class="login__formulary__figure">
				<img src="@/assets/+money.svg" class="login__formulary__figure__logo" />
			</figure>
			<v-form
				class="login__formulary__form"
				ref="form"
				v-model="valid"
				lazy-validation
				@submit.prevent="login"
			>
				<v-row class="d-flex justify-center">
					<v-col md="10" class="pb-0">
						<v-text-field
							v-model="form.email"
							label="Email"
							outlined
							clearable
							:rules="emailRules"
							required
							prepend-inner-icon="mail_outline"
							color="#508991"
						/>
					</v-col>
				</v-row>
				<v-row class="d-flex justify-center">
					<v-col md="10" class="pb-0 pt-0">
						<v-text-field
							v-model="form.password"
							label="Senha"
							outlined
							clearable
							:rules="passwordRules"
							required
							color="#508991"
							prepend-inner-icon="mdi-lock"
							:append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
							:type="show ? 'text' : 'password'"
							@click:append="show = !show"
						/>
					</v-col>
				</v-row>
				<v-row class="d-flex justify-end mr-13">
					<v-btn type="submit" color="#508991" large class="button"
						>Fazer login</v-btn
					>
				</v-row>
			</v-form>
			<div class="login__formulary__description">
				<p class="login__formulary__description__text">
					Você ainda não tem uma conta?
					<router-link
						to="/cadastro"
						class="login__formulary__description__text__link"
						>Cadastre-se</router-link
					>
				</p>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data: () => ({
		show: false,
		valid: true,
		form: {
			email: '',
			password: '',
		},
		emailRules: [
			(v) => !!v || 'E-mail  obrigatório',
			(v) => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
		],
		passwordRules: [(v) => !!v || 'Senha é obrigatório'],
	}),
	transition: 'slide-fade',
	methods: {
		validate() {
			this.$refs.form.validate()
		},

		async login() {
			try {
				const obj = {
					email: this.form.email,
					password: this.form.password,
				}
				this.validate()
				if (this.form.email !== '' && this.form.password !== '') {
					this.$store.dispatch('login', obj)
					this.$router.push('/listagem')
				} else {
					this.$store.dispatch('setSnackbar', {
						status: true,
						message: 'Usuário ou senha incorretos',
					})
				}
			} catch (e) {
				console.log(e)
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.login {
	display: flex;
	height: 100%;
	overflow-y: hidden;
	&__wrapper {
		clip-path: polygon(0 0, 100% 0, 83% 100%, 0% 100%);
		background: url('../../assets/ellipse.svg') no-repeat bottom left, #508991;
		background-size: 84%;
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-right: 45px;
		&__figure {
			width: 60%;
			padding-bottom: 85px;
			&__img {
				width: 100%;
			}
		}
	}
	&__formulary {
		width: 50%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		&__figure {
			width: 400px;
			height: 100px;
		}
		&__form {
			width: 80%;
			display: flex;
			flex-direction: column;
			height: 210px;
			padding-top: 15px;
			.button {
				color: #fff;
				width: 180px;
				text-transform: capitalize;
				font-size: 16px;
			}
		}
		&__description {
			display: flex;
			justify-content: flex-end;
			width: 70%;
			padding-top: 25px;
			&__text {
				font-size: 16px;
				padding-right: 18px;
				color: #949494;
				&__link {
					color: #508991;
				}
			}
		}
	}
}
</style>
