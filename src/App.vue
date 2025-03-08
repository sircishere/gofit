<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/NavBar.vue'
import { ref,onMounted } from 'vue'
import axios from 'axios';


const name = ref(null);

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
  <Navbar  :name="name"/>
  <RouterView />
</template>

<style scoped>



</style>
