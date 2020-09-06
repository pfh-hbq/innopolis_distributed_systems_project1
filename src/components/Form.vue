<template>
	<div class="form">

		<InputForm form_id="name" text="Name Surname"/>
		<InputForm form_id="phone" text="Mobile number"/>
		<InputForm form_id="mail" text="Mail"/>
		<InputForm form_id="f_mail" text="Friends mail"/>
		<SubmitBtn submit_id="submitbtn" value="Get new iPhone!"/>

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
