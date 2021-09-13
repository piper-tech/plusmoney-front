<template>
	<div class="content">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.content {
	width: 80%;
	margin: 0 auto;
	padding-top: 30px;
	@media (min-width: 1250px) {
		width: 90%;
		margin: 0 auto;
	}
	@media (min-width: 961px) {
		width: 95%;
	}
	@media (max-width: $sm) {
		width: 95%;
	}
}
</style>
