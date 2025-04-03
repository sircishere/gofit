<script setup>
import axios from "axios";
import { ref } from 'vue'
import MuscleCard from "@/components/MuscleCard.vue";

const userInfo =  await axios.get(`http://${import.meta.env.VITE_BACKEND_HOST}/getUserInfo`)

let macros = ref(null)

const upper = ref(['Lats','Triceps','Biceps','Hamstrings','Upper Back','Abs'])

const lower = ref(['Glutes','Hamstrings','Biceps','Triceps','Upper Back','Abs'])

const response = await axios.get(`http://${import.meta.env.VITE_BACKEND_HOST}/suggestion`)

const suggestions = response.data


const calculateMacros = () => {
        // Mifflin-St Jeor formula: BMR (Basal Metabolic Rate)
        let bmr;
        if (userInfo.data.gender === "male") {
          bmr = 10 * userInfo.data.weight + 6.25 * userInfo.data.height - 5 * userInfo.data.age + 5; // Male
        } else {
          bmr = 10 * userInfo.data.weight + 6.25 * userInfo.data.height - 5 * userInfo.data.age - 161; // Female
        }

        /* 
        1.2 Sedentary 
        1.375 Lightly Active
        1.55 Moderately Active
        1.725 Very Actice 
        1.9 Extremely Active
        */
        const tdee = bmr * 1.2; // Total Daily Energy Expenditure
  
        // Macronutrient distribution (example: 40% carbs, 30% protein, 30% fat)
        const proteinCalories = tdee * 0.3;
        const fatCalories = tdee * 0.3;
        const carbCalories = tdee * 0.4;
  
        macros = {
          calories: Math.round(tdee),
          protein: Math.round(proteinCalories / 4), // Protein: 4 kcal/g
          fat: Math.round(fatCalories / 9), // Fat: 9 kcal/g
          carbs: Math.round(carbCalories / 4), // Carbs: 4 kcal/g
        };
      }

      calculateMacros()

</script>
<template>
  <div class=" flex flex-col justify-center text-center h-fit">
    <h1 class="pt-10 text-4xl">Daily Workout</h1>

    <div v-if="suggestions" class="flex flex-row justify-center pt-5">
      <div v-for="(muscle, index) in suggestions" :key="index">
        <button class="m-3 p-3 text-2xl min-w-20">{{ muscle[0].target }}</button>
      </div>
    </div>

      <div class="text-2xl justify-center flex-wrap indent-2 pt-10 text-center w-3/4 self-center">
          For a
          <b class="">{{ userInfo.data.gender }}</b>
          of size 
          <b> {{ userInfo.data.height }}</b> 
          cm weight of 
          <b>{{ userInfo.data.weight }}</b>
          g and a fitness goal of 
          <b>{{ userInfo.data.goal }}</b> 
      </div>
      <div class="flex flex-col items-center text-2xl pt-10">
          <b>{{  macros.calories }} Calories</b>
          <b>{{ macros.protein }} g of protein</b>
          <b>{{ macros.fat}} g of fat</b>
          <b>{{ macros.carbs}} g of carbs</b>
      </div>


      <h1 class="flex justify-center text-4xl m-4">Exercises</h1>

      <div v-if="userInfo.data.gender == 'male'">
        <div class="flex flex-col" v-for="item in upper">
        <MuscleCard :muscle="item"></MuscleCard>
        </div>
      </div>

      <div v-else>
        <div class="flex flex-col" v-for="item in lower">
          <MuscleCard :muscle="item"></MuscleCard>
        </div>
      </div>
  </div>
</template>