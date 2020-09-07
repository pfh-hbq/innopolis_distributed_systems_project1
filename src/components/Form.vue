<template>
  <div class="form">

    <!--    <form action="" method="post">-->
    <InputForm @formGetValueChild="formValue" form_id="name_surname" text="Name Surname"/>
    <InputForm @formGetValueChild="formValuePhone" form_id="phone" text="Mobile number"/>
    <InputForm @formGetValueChild="formValueMail" form_id="mail" text="Mail"/>
    <InputForm @formGetValueChild="formValueFriendMail" form_id="friend_mail" text="Friends mail"/>
    <SubmitBtn @click="submit" submit_id="submitbtn" value="Get new iPhone!"/>

    <!--    temporary paragraph-->
    <p style="color: red">name: {{ name_surname }} <br> phone: {{ phone }} <br> mail: {{ mail }} <br> fmail
      {{ friend_mail }}</p>

  </div>
</template>

<script>

import InputForm from "./InputForm";
import SubmitBtn from "./SubmitBtn";
import {IRoute as axios} from "express-serve-static-core";

export default {
  name: 'Form',
  components: {
    InputForm, SubmitBtn
  },
  data() {
    return {
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
    // PAST URL HERE
    submit() {
      axios.post('ec2-54-172-173-58.compute-1.amazonaws.com', {
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
    }
  }

}
</script>


<style scoped lang="scss">


</style>
