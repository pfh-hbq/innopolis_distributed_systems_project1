<template>
  <div class="form">

    <InputForm @formGetValueChild="formValue" form_id="name_surname" text="Name Surname"/>
    <InputForm @formGetValueChild="formValuePhone" form_id="phone" text="Mobile number"/>
    <InputForm @formGetValueChild="formValueMail" form_id="mail" text="Mail"/>
    <InputForm @formGetValueChild="formValueFriendMail" form_id="friend_mail" text="Friends mail"/>

    <button class="submit" @click="fireSubmit" v-bind:class="{'anim': isClicked}">{{ value }}</button>

    <!--    temporary paragraph-->
    <p style="color: red">name: {{ name_surname }} <br> phone: {{ phone }} <br> mail: {{ mail }} <br> fmail
      {{ friend_mail }}</p>


    start

<!--    should display each user in users array-->
    <p v-for="user in users"> {{user}} </p>

<!--    should display array itself-->
    <p>{{users}}</p>


    end


  </div>
</template>

<script>

import InputForm from "./InputForm";
import {db} from "@/main";

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
      friend_mail: '',
      users: []
    }
  },
  firestore () {
    return {
      users: db.collection('users')
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

    fireSubmit() {
      let name_surname = this.name_surname;
      let phone = this.phone;
      let email = this.mail;
      let friend_mail = this.friend_mail;

      // check if let is NULL

      if (name_surname === '' || phone === '' || email === '' || friend_mail === '') {
        alert("You have not completed all the fields!");
        return;
      }

      db.collection('users').add({name_surname, phone, email, friend_mail});

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
  pointer-events: none;
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
