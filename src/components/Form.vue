<template>
  <div class="form">

    <!--    <form action="" method="post">-->
    <InputForm @formGetValueChild="formValue" form_id="name_surname" text="Name Surname"/>
    <InputForm @formGetValueChild="formValuePhone" form_id="phone" text="Mobile number"/>
    <InputForm @formGetValueChild="formValueMail" form_id="mail" text="Mail"/>
    <InputForm @formGetValueChild="formValueFriendMail" form_id="friend_mail" text="Friends mail"/>
    <!--    <SubmitBtn submit_id="submitbtn" value="Get new iPhone!" @name_surname="name_surname" @phone="phone" @mail="mail" @friend_mail="friend_mail"/>-->

    <button class="submit" @click="submit" v-bind:class="{'anim': isClicked}">{{ value }}</button>

    <!--    temporary paragraph-->
    <p style="color: red">name: {{ name_surname }} <br> phone: {{ phone }} <br> mail: {{ mail }} <br> fmail
      {{ friend_mail }}</p>

  </div>
</template>

<script>

import InputForm from "./InputForm";
import axios from "axios"

export default {
  name: 'Form',
  components: {
    InputForm
  },
  data() {
    return {
      value: 'Get new iPhone!',
      isClicked: false,
      name_surname: '',
      phone: '',
      mail: '',
      friend_mail: ''
    }
  },
  methods: {
    // Gets the checkbox information from the child component
    formValue(value) {
      this.name_surname = value;
    },
    formValuePhone(value) {
      this.phone = value;
    },
    formValueMail(value) {
      this.mail = value;
    },
    formValueFriendMail(value) {
      this.friend_mail = value;
    },
    submit() {

      // post request
      axios.post('postgres://lqhemylrwnsrrd:42dbf849a9c962f1f185577cfe6da2bce64b839b0adbc8c6bd143ab5178c3f5c@ec2-54-172-173-58.compute-1.amazonaws.com:5432/d986irerdmkf6', {
        name_surname: this.name_surname,
        phone: this.phone,
        mail: this.mail,
        friend_mail: this.friend_mail
      })
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });


      // just for development
      alert(this.name_surname);
      // console.log(this.name_surname);


      // animation of button
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
