<template>
	<div class="phone">

		<img src="../assets/img/iphone-11-pro_full_2.jpg" draggable="false" class="iphone_image">

		<!--		<video autoplay loop src="../assets/video/bg_iphone_wo_sound.mp4" id="video_bg" type="video/mp4"></video>-->

	</div>
</template>

<script>
	export default {
		name: 'Phone'
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

	.iphone_image {
		width: 600px;
		position: absolute;
		top: 0;
		right: 150px;
	}


	/*#video_bg {*/
	/*	background: red;*/
	/*	z-index: 10;*/
	/*}*/
</style>
