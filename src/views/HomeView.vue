<script setup>
import { ref,onMounted } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
import axios from 'axios';

let name = ref(null);

onMounted( async () => {
  //send if authenticated
  try {
    const response = await axios.get('http://localhost:3000/getName');
    name.value = response.data.name; // Assign the fetched name
  } catch (error) {
    console.error("Error fetching name:", error);
  }
})
</script>

<template>
    <div class="">
        <HelloWorld class="" msg="The Web's new fitness app!" />
        <img src="../assets/wiifit.png" alt="frickin wii fit girl" class="" >
    </div>
    <div class="flex justify-center mt-10">
      <button class="w-1/2 text-2xl dm-serif-text-regular" @click="$router.push('/signin')">Start</button>
    </div>
</template>

<style scoped>
</style>