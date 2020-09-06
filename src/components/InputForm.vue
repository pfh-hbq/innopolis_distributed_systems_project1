<template>
	<div class="inputForm">

		<input type="text" id="fname" name="fname" class="form_d" placeholder="Name Surname">

	</div>
</template>

<script>
	export default {
		name: 'InputForm'
	}
</script>


<style scoped lang="scss">

	.inputForm {
		margin-bottom: 20px;
	}

	.form_d {
		border: solid 1px white;
		border-radius: 5px;
		height: 50px;
		width: 500px;
		padding: 0 15px;
	}

</style>
