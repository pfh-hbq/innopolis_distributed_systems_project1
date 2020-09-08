<template>
	<div class="submitbtn">

<!--		<input type="submit" :id="submit_id" :name="submit_id" class="submit" :value="value"-->
<!--					 v-on:click="isClicked = true; value = 'You will get it!'; aler"-->
<!--					 v-bind:class="{'anim': isClicked}">-->

    <button class="submit" @click="submit" v-bind:class="{'anim': isClicked}" >{{value}}</button>


	</div>
</template>

<script>
	export default {
		name: 'InputForm',
		// props: ['submit_id', 'value', 'name_surname', 'phone', 'mail', 'friend_mail'],
    props: {
      submit_id: String,
      value: String,
      name_surname: {
        type: String,
        required: true
      },
      phone: Object,
      mail: Object,
      friend_mail: Object
    },
		data: function () {
			return {
				isClicked: false
			}
		},
    methods: {
      submit() {
        // axios.post('ec2-54-172-173-58.compute-1.amazonaws.com', {
        //   name_surname: this.name_surname,
        //   phone: this.phone,
        //   mail: this.mail,
        //   friend_mail: this.friend_mail
        // })
        //     .then((response) => {
        //       console.log(response);
        //     }, (error) => {
        //       console.log(error);
        //     });


        alert(this.name_surname);
        console.log(this.name_surname);
        this.isClicked = true;
        this.value = 'You will get it!'
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

	@media only screen and (max-width: 1250px) {
		.submit {
			width: 400px;
			transition: width 0.5s;
		}
	}

	@media only screen and (max-width: 1100px) {
		.submit {
			width: 300px;
			transition: width 0.5s;
		}
	}

	@media only screen and (max-width: 768px) {
		.submit {
			width: 80%;
			transition: width 0.5s;
		}
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
