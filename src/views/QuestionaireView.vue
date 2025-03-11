<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

const gender = ref(null);
const weight = ref(null);
const height = ref(null);
const goal = ref(null);

const submit = () => {
  axios.post("http://localhost:3000/addUserInfo", {
      height: height.value,
      weight: weight.value,
      gender: gender.value,
      goal: goal.value
  }).then((response) => {
    console.log(response);
    router.push("/form");
  }).catch((error) => {
    console.log(error);
  });
};
</script>


<template>
  <div class="flex flex-col place-items-center h-screen justify-center">
    <h1>Please input your Height</h1>
    <input class="bg-white" v-model="height" type="text">
    <h1>Weight</h1>
    <input class="bg-white" v-model="weight" type="text">
    <h1>Gender</h1>
    <input class="bg-white" v-model="gender" type="text">
    <h1>Fitness Goal</h1>
    <input class="bg-white" v-model="goal" type="text">    
    <button @click="submit(height,weight,gender,goal)">Next</button>
  </div>
</template>

<style scoped>

button {
  font-size: larger;
  width: 25%;
}

input {
  width: 50%;
  border-radius: 5px;
  text-align: center;
  height: 25px;
  border: 0;
  outline: 0;
  font-size: larger;
  color: skyblue;
}
</style>