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
    <div class="container">
        <HelloWorld style="flex-grow: 6;" msg="The Web's new fitness app!" />
      <div style="flex-grow: 6;">
        <img src="../assets/wiifit.png" alt="frickin wii fit girl" width="450" style="padding-top: 50px;">
      </div>
    </div>
    
    <button v-if="name" class="new-but dm-serif-text-regular" @click="$router.push('/form')">Figure out your macros</button>
    <div v-else></div>

</template>

<style scoped>
    .container {
      display: flex;
      justify-content: space-evenly;
    }

    .new-but{
      width: 50%;
      font-size: 1.5rem;
      margin-left: 25%;
    }    
</style>