<template>
  <div class="form">

    <InputForm @formGetValueChild="formValue" form_id="name_surname" text="Name Surname"/>
    <InputForm @formGetValueChild="formValuePhone" form_id="phone" text="Mobile number"/>
    <InputForm @formGetValueChild="formValueMail" form_id="mail" text="Mail"/>
    <InputForm @formGetValueChild="formValueFriendMail" form_id="friend_mail" text="Friends mail"/>

    <button class="submit" @click="fireSubmit" v-bind:class="{'anim': isClicked}">{{ value }}</button>

    <p class="withus_h">Already with us {{ userCounter }} people:</p>

    <p class="withus_p" v-for="(user, idx) in users"> {{ idx + 1 }}. {{ user.name_surname }} <span
        v-if="countUsers(idx + 1)"></span></p>

    <br>

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
      users: [],
      userCounter: 0,
      canRegister: true
    }
  },
  mounted() {
    db.collection('users').onSnapshot(snapshot => {
      snapshot.forEach(user => {
        this.users.push(user.data());
      })
    });
  },
  methods: {
    countUsers(index) {
      this.userCounter = index;

      if (index >= 20) {
        this.canRegister = false
      }

      return true;
    },

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

      if (name_surname === '' || phone === '' || email === '' || friend_mail === '') {
        alert("You have not completed all the fields!");
        return;
      }

      if (!this.canRegister) {
        alert("Only 20 people can register!");
        return;
      }

      db.collection('users').add({name_surname, phone, email, friend_mail});

      // animation of button
      this.isClicked = true;
      this.value = 'You will get it!';

      this.users = [];
    }
  }
}
</script>


<style scoped lang="scss">

.withus_h {
  font-size: 20px;
}

.withus_p {
  margin-left: 15px;
}


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
