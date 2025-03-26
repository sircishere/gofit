<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/NavBar.vue'
import { ref,onMounted } from 'vue'
import axios from 'axios';


const name = ref(null);

onMounted( async () => {
  //send if authenticated
  try {
    const response = await axios.get(`http://${import.meta.env.VITE_BACKEND_HOST}/getName`);
    name.value = response.data.name; // Assign the fetched name
  } catch (error) {
    console.error("Error fetching name:", error);
  }
})
</script>

<template>
  <div class="h-screen bg-[#b6a999]">
    <Navbar  :name="name"/>
    <Suspense>
      <RouterView />
    </Suspense>
  </div>

</template>

<style scoped>
</style>
