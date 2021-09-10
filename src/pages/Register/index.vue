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
		<section class="register__formulary"></section>
	</div>
</template>

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
}
</style>
