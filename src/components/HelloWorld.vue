<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="text-center">
    <header>
      <h1 class="text-6xl">{{ msg }}</h1>
    </header>
    <button class="new-button" @click="$router.push('/signin')">start now</button>
  </div>
</template>

<style scoped>
  
  .new-button{
    width: 50%;
    border-radius: 10px;
    font-size: 1.5rem;
    font-family: "DM Serif Text", serif;
    color: lightblue;
    background-color: white;
    border-color: white;
  }
</style>
