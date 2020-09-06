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

</style>