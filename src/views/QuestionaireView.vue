<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

const gender = ref(null);
const weight = ref(null);
const height = ref(null);
const goal = ref('');
const age = ref(null);

const submit = () => {
  axios.post("http://localhost:3000/addUserInfo", {
      height: height.value,
      weight: weight.value,
      gender: gender.value,
      goal: goal.value,
      age: age.value
  }).then((response) => {
    console.log(response);
    router.push("/dashboard");
  }).catch((error) => {
    console.log(error);
  });
};
</script>


<template>
  <div class="flex flex-col place-items-center h-screen justify-center w-full">
    <h1>Please input your Height</h1>
    <input class="bg-white" v-model="height" type="text">
    <h1>Weight</h1>
    <input class="bg-white" v-model="weight" type="text">
    <form class="flex flex-row gap-10 h-20 items-center justify-center w-1/2">
      <div class="flex flex-col gap-3 items-center max-w-7">
        <label>Male</label>
        <input name="gender" value="male" class="bg-white w-7" v-model="gender" type="radio">
      </div>
      <div class="flex flex-col gap-3 items-center max-w-7">
        <label>Female</label>
        <input name="gender" value="female" class="bg-white" v-model="gender" type="radio">
      </div>
    </form>

    <h1>Fitness Goal</h1>
    <div class="flex flex-row w-1/2">
      <select class="bg-white text-blue-200 w-full rounded-[5px] " v-model="goal">  
        <option disabled value="">Please select one</option>
        <option value="surplus">Surplus</option>
        <option value="maintenence">maintenence</option>
        <option value="deficit">deficit</option>
      </select>  
    </div>
    <h1>Age</h1>
    <input class="bg-white" v-model="age" type="text">
    <button class="mt-5" @click="submit()">Next</button>
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