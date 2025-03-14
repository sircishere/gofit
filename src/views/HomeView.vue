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
    <div class="flex flex-col justify-center items-center mt-5">
        <HelloWorld class="" msg="The Web's new fitness app!" />
        <img src="../assets/wiifit.png" alt="frickin wii fit girl" class="mt-10 w-1/2 md:w-1/4 mr-12" >
      
    </div>
    <div class="flex justify-center">
      <button class="w-1/2 mt-15 text-2xl dm-serif-text-regular" @click="$router.push('/signin')">Start</button>

    </div>

</template>

<style scoped>
</style>