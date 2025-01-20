<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="yup">
    <header>
      <h1 class="mainText">{{ msg }}</h1>
    </header>
    <button class="new-button">start now</button>
  </div>

</template>

<style scoped>
  .yup {
    height: 400px;
    text-align: center;
    padding-top: 200px;
  }
  
  .new-button{
    max-width: 50%;
    border-radius: 10px;
    font-size: 1.5rem;
    font-family: "DM Serif Text", serif;
    color: lightblue;
    background-color: white;
  }

  .mainText {
    font-size: 66px;
  }
</style>
