<template>
	<div class="inputForm">

		<input type="text" :id="form_id" :name="form_id" class="form_d" :placeholder="text">

	</div>
</template>

<script>
	export default {
		name: 'InputForm',
		props: ['text', 'form_id']
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

	@media only screen and (max-width: 1250px) {
		.form_d {
			width: 400px;
			transition: width 0.5s;
		}
	}

	@media only screen and (max-width: 1100px) {
		.form_d {
			width: 300px;
			transition: width 0.5s;
		}
	}

	@media only screen and (max-width: 768px) {
		.form_d {
			width: 80%;
			transition: width 0.5s;
		}
	}

</style>
