<template>
	<div class="register">
		<section class="register__wrapper">
			<h1 class="register__wrapper__title">
				Gerencie suas finanças de forma simples!
			</h1>
			<figure class="register__wrapper__figure">
				<img
					src="@/assets/ilustration-register.svg"
					class="register__wrapper__figure__img"
				/>
			</figure>
		</section>
		<section class="register__formulary">
			<figure class="register__formulary__figure">
				<img
					src="@/assets/+money.svg"
					class="register__formulary__figure__logo"
				/>
			</figure>
			<v-form
				class="register__formulary__form"
				ref="form"
				v-model="valid"
				lazy-validation
				@submit.prevent="registerUser"
			>
				<v-row class="d-flex justify-center">
					<v-col md="10" class="pb-0 pt-0">
						<v-text-field
							v-model="form.name"
							label="Nome completo"
							outlined
							clearable
							:rules="nameRules"
							required
							prepend-inner-icon="person"
							color="#508991"
						/>
					</v-col>
				</v-row>
				<v-row class="d-flex justify-center">
					<v-col md="10" class="pb-0 pt-0">
						<v-text-field
							v-model="form.email"
							label="Email"
							type="email"
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
				<v-row class="d-flex justify-center">
					<v-col md="10" class="pb-0 pt-0">
						<v-text-field
							v-model="form.confirmPassword"
							label="Confirmar senha"
							outlined
							clearable
							:rules="passwordConfirmRules"
							required
							color="#508991"
							prepend-inner-icon="mdi-lock"
							:append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
							:type="showConfirm ? 'text' : 'password'"
							@click:append="showConfirm = !showConfirm"
						/>
					</v-col>
				</v-row>
				<v-row class="d-flex justify-center mt-0">
					<v-col md="3">
						<v-btn color="#508991" large outlined class="button" to="/login"
							>Fazer login</v-btn
						>
					</v-col>
					<v-col md="3">
						<v-btn type="submit" color="#508991" large class="button"
							>Cadastrar</v-btn
						>
					</v-col>
				</v-row>
			</v-form>
		</section>
	</div>
</template>

<script>
export default {
	transition: 'slide-fade',
	data: () => ({
		show: false,
		showConfirm: false,
		valid: true,
		form: {
			name: '',
			email: '',
			password: '',
			confirmPasswrod: '',
		},
		nameRules: [(v) => !!v || 'Nome é obrigatório'],
		emailRules: [
			(v) => !!v || 'E-mail  obrigatório',
			(v) => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
		],
		passwordRules: [(v) => !!v || 'Senha é obrigatório'],
		passwordConfirmRules: [(v) => !!v || 'Confirmar senha é obrigatório'],
	}),
	methods: {
		validate() {
			this.$refs.form.validate()
		},
		resetValidation() {
			this.$refs.form.resetValidation()
		},
		async registerUser() {
			try {
				const obj = {
					name: this.form.name,
					email: this.form.email,
					password: this.form.password,
				}
				await this.$store.dispatch('registerUser', obj)
				this.$router.push({ name: 'Login' })

				this.validate()
				setTimeout(this.resetValidation, 3000)
			} catch (e) {
				console.log(e)
			}
		},
		clearFields() {
			this.form.name = ''
			this.form.email = ''
			this.form.password = ''
			this.form.confirmPassword = ''
		},
	},
}
</script>

<style lang="scss" scoped>
.register {
	display: flex;
	height: 100%;
	&__wrapper {
		clip-path: polygon(0 0, 100% 0, 83% 100%, 0% 100%);
		background: url('../../assets/ellipse.svg') no-repeat bottom left, #508991;
		background-size: 84%;
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding-right: 45px;
		&__title {
			color: #fff;
			font-size: 24px;
			font-weight: 600;
			font-family: 'Rubik', sans-serif;
			margin-bottom: 20px;
			width: 470px;
		}
		&__figure {
			width: 400px;
			height: 300px;
			margin-bottom: 200px;
			&__img {
				width: 100%;
			}
		}
	}
	&__formulary {
		width: 50%;
		display: flex;
		height: 80%;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		&__figure {
			width: 400px;
			height: 100px;
		}
		&__form {
			width: 80%;
			height: 100%;
			display: flex;
			flex-direction: column;
			height: 210px;
			padding-top: 15px;
			.button {
				color: #fff;
				width: 130px;
				text-transform: capitalize;
				font-size: 16px;
			}
		}
	}
}
</style>
