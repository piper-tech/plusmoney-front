<template>
	<div class="content">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.content {
	width: 100%;
	justify-content: center;
	display: flex;
	margin: 0 auto;
	padding-top: 30px;
	padding-left: 30px;
	padding-right: 30px;
	/* @media (min-width: 1400px) {
		width: 97%;
		margin: 0 auto;
	} */
}
</style>
