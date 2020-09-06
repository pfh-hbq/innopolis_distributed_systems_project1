<template>
	<div class="form">

		<InputForm/>
		<InputForm/>
		<InputForm/>
		<InputForm/>
		<SubmitBtn/>

	</div>
</template>

<script>

	import InputForm from "./InputForm";
	import SubmitBtn from "./SubmitBtn";

	export default {
		name: 'Form',
		components: {
			InputForm, SubmitBtn
		}
	}
</script>


<style scoped lang="scss">


</style>
