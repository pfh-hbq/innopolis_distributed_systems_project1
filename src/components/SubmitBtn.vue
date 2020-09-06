<template>
	<div class="submitbtn">

		<input type="submit" :id="submit_id" :name="submit_id" class="submit" value="Get new iPhone!">

	</div>
</template>

<script>
	export default {
		name: 'InputForm',
		props: ['submit_id']
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

</style>
