<script>
import { ref } from 'vue';
import axios from "axios";

export default {
  data() {
    return {
      gender: ref(null),
      weight: ref(null),
      height: ref(null),
      goal: ref(null)
    };
  },
  methods: {

    submit(height,weight,gender,goal) {

      axios.post("http://localhost:3000/addUserInfo",{
          height: height,
          weight: weight,
          gender: gender,
          goal: goal
      }).then(function (response) {
        console.log(response);
      }).catch(function (error){
        console.log(error);
      });

    }
  }
};
</script>

<template>
  <div class="flex flex-col place-items-center h-screen justify-center">
    <h1>Please input your Height</h1>
    <input class="bg-white" v-model="height" type="text">
    <input class="bg-white" v-model="weight" type="text">
    <input class="bg-white" v-model="gender" type="text">
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