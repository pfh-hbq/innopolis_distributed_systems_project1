<template>
	<div class="description">

		<p>How to get discount?</p>
		<ul>
			<li>Buy iPhone with full price
				<ul class="ul_sub">
					<li class="li_sub">original price is 1300$</li>
				</ul>
			</li>
			<li>Invite up to 3 friends to our service
				<ul class="ul_sub">
					<li class="li_sub">each friend should buy the device</li>
				</ul>
			</li>
			<li>Receive <span>300$</span> cashback on your credit card for <span>each</span> friend</li>
		</ul>


	</div>
</template>

<script>
	export default {
		name: 'Description'
	}
</script>


<style scoped lang="scss">

	p {
		font-size: 20px;
	}

	ul {
		list-style-type: "👍🏻";
		padding-left: 30px;
	}

	li {
		padding: 0;
		margin: 0 0 20px;
	}

	.li_sub {

	}

	.ul_sub {
		list-style-type: circle;
		font-size: 12px;
	}

	span {
		font-weight: bold;
	}

</style>
