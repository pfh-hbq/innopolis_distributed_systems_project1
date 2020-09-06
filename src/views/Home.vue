<template>
	<div class="home">

		<Header class="left_side"/>

		<Phone class="right_side"/>

		<router-link to="/about" class="link">Terms and conditions</router-link>

	</div>
</template>

<script>
	import Phone from '@/components/Phone'
	import Header from '@/components/Header'

	export default {
		name: 'Home',
		components: {
			Phone, Header
		}
	}

</script>

<style>
	.home {
		position: relative;
		padding-left: 150px;
		padding-right: 150px;
	}

	.left_side {
		width: 50%;
	}

	.right_side {
		width: 50%;
		position: absolute;
		right: 0;
		top: 0;
	}

	.link {
		text-decoration: none;
		font-size: 15px;
	}

	@media only screen and (max-width: 768px) {
		.left_side {
			width: 100%;
		}

		.right_side {
			display: none;
		}

		.home {
			padding: 0 0 0 30px;
		}
	}

</style>