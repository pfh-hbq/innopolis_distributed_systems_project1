<template>
  <div class="header">

    <h1 class="h1">Get your iPhone 11 Pro right now!</h1>

    <p>Fill the form bellow:</p>

    <!--		<form action="https://vuejs.org/" method="post" @submit.prevent="submit">-->
    <Form/>

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
  }
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
