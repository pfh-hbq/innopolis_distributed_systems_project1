<template>
	<div class="phone">

		<img src="../assets/img/iphone-11-pro_full_2.jpg" draggable="false" class="iphone_image">

	</div>
</template>

<script>
	export default {
		name: 'Phone'
	}
</script>

<style scoped lang="scss">

	.iphone_image {
		width: 600px;
		position: absolute;
		top: 0;
		right: 150px;
		transition: width .2s, right ,2s;
	}

	@media only screen and (max-width: 1440px) {
		.iphone_image {
			width: 500px;
			right: 50px;
			transition: width .2s, right ,2s;
		}
	}

	@media only screen and (max-width: 1150px) {
		.iphone_image {
			width: 500px;
			right: 0px;
			transition: width .2s, right ,2s;
		}
	}


</style>
