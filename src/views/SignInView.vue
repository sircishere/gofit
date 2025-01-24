<template>

<div class="center">

  <h1>
    Sign in to your account
  </h1>

    <h3 class="tag">username</h3>
    <input class="sign_in_input">
    <h3 class="tag">password</h3>
    <input class="sign_in_input">
  </div>




</template>

<script>
</script>

<style>

.center{
  margin-left: 28%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12%;
  max-width: 40%;
}

.tag{
  align-self: flex-start; 
  margin-left: 15%;
}

.sign_in_input{
  width: 75%;
  text-align: center;
  border-radius: 5px;
  border-color: white;
}

</style>