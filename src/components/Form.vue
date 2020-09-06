<template>
	<div class="form">

		<InputForm text="Name Surname"/>
		<InputForm text="Mobile number"/>
		<InputForm text="Mail"/>
		<InputForm text="Promocode"/>
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
