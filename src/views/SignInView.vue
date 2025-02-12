<template>

<div class="center">

  <h1>
    Sign in to your account
  </h1>

  <button 
      @click="redirectToLogin"    >
      Login with OAuth
    </button>  </div>




</template>

<script setup>
const redirectToLogin = () => {
  window.location.href = "http://localhost:3000/login";
};
</script>

<style scoped>

button {
  color: lightblue;
  background-color: white;
  border-radius: 5px;
  border: none;
  font-size: larger;
  font-family: "DM Serif Text", serif;

}

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