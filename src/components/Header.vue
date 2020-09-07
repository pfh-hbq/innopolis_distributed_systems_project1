<template>
	<div class="header">

		<h1 class="h1">Get your iPhone 11 Pro right now!</h1>

		<p>Fill the form bellow:</p>

		<!--		<form action="https://vuejs.org/" method="post" @submit.prevent="submit">-->
		<form action="https://vuejs.org/" method="post">
			<Form/>
		</form>

		<Description/>

	</div>
</template>

<script>

	import Form from "./Form";
	import Description from '@/components/Description'
	import {IRoute as axios} from "express-serve-static-core";

	export default {
		name: 'Header',
		components: {
			Form, Description
		},
		// methods: {
		// 	submit() {
		// 		axios.post('https://vuejs.org/', {name: this.name})
		// 			.then(res => {
		// 				// do something with res
		// 			})
		// 			.catch(err => {
		// 				// catch error
		// 			})
		// 	}
		// }
	}
</script>


<style scoped lang="scss">

	.h1 {
		/*text-align: center;*/
		padding-top: 100px;
		font-size: 45px;
		margin-bottom: 60px;
	}

	p {
		font-size: 15px;
	}

	.header {
		margin-bottom: 100px;
		width: 500px;
	}

	@media only screen and (max-width: 1250px) {
		.header {
			width: 400px;
		}
	}

	@media only screen and (max-width: 1100px) {
		.header {
			width: 300px;
		}
	}

	@media only screen and (max-width: 768px) {
		.header {
			width: 80%;
		}
	}

</style>
