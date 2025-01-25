<script setup>
import HelloWorld from '../components/HelloWorld.vue'

</script>

<template>
    <div class="container">
        <HelloWorld style="flex-grow: 6;" msg="The Web's new fitness app!" />
      <div style="flex-grow: 6;">
        <img src="../assets/wiifit.png" alt="frickin wii fit girl" width="450" style="padding-top: 50px;">
      </div>
    </div>
    <button class="new-but dm-serif-text-regular" @click="$router.push('/form')">Figure out your macros</button>

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
      background-color: white;
      color: lightblue;
      border-color: white;
      border-radius: 5px;
    }    
</style>