<template>
	<div class="submitbtn">

		<input type="submit" :id="submit_id" :name="submit_id" class="submit" :value="value"
					 v-on:click="isClicked = true; value = 'You will get it!'"
					 v-bind:class="{'anim': isClicked}">

	</div>
</template>

<script>
	export default {
		name: 'InputForm',
		props: ['submit_id', 'value'],
		data: function () {
			return {
				isClicked: false
			}
		}

	}
</script>


<style scoped lang="scss">

	.submit {
		background: white;
		color: black;
		font-size: 20px;

		margin-bottom: 20px;

		border: solid 4px white;
		border-radius: 5px;
		height: 44px;
		width: 250px;
		padding: 0 15px;

		cursor: pointer;
	}

	.submit:hover {
		border-right: solid 4px gray;
		border-bottom: solid 4px gray;
	}

	.anim {
		animation: colorchange 1s linear infinite;
		color: white;
		cursor: default;
	}

	@keyframes colorchange {
		0% {
			background: gold;
			border-color: gold;
			border-radius: 5px;
		}
		33% {
			background: silver;
			border-color: silver;
			border-radius: 25px;
		}
		66% {
			background: violet;
			border-color: violet;
			border-radius: 25px;
		}
		100% {
			background: gold;
			border-color: gold;
			border-radius: 5px;
		}
	}

</style>
