<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/NavBar.vue'
import FormView from './views/FormView.vue'
</script>

<template>
        <Navbar/>
    <div class="container">
      <HelloWorld style="flex-grow: 6;" msg="The Web's new fitness app!" />

      <!-- <nav style="flex-grow: 4;">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/form">Macros</RouterLink>
      </nav> -->
      <div style="flex-grow: 6;">
        <img src="./assets/wiifit.png" alt="frickin wii fit girl" width="450" style="padding-top: 50px;">

    </div>


    </div>

  <RouterView />
</template>

<style scoped>

    .container {
      display: flex;
      justify-content: space-evenly;
    }


</style>
