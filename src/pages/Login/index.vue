<template>
	<div class="login">
		<div class="login__wrapper">
			<figure class="login__wrapper__figure">
				<img
					src="@/assets/ilustration-login.svg"
					class="login__wrapper__figure__img"
				/>
			</figure>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.login {
	display: flex;
	height: 100%;
	&__wrapper {
		background-color: #508991;
		clip-path: polygon(0 0, 100% 0, 83% 100%, 0% 100%);
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-right: 45px;
		&__figure {
			width: 60%;
			&__img {
				width: 100%;
			}
		}
	}
}
</style>
