<script setup>
import axios from "axios";
import { ref } from 'vue'

const userInfo =  await axios.get("http://localhost:3000/getUserInfo")

let macros = ref(null)

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
    <h1 class="flex justify-center pt-10 text-4xl">Dashboard</h1>
    <div class="text-2xl pt-10 flex justify-center flex-wrap indent-2">
        For a 
        <b class=" text-black">{{ userInfo.data.gender }}</b>
        of size 
        <b class="text-black"> {{ userInfo.data.height }}</b> 
        weight of 
        <b class="text-black">{{ userInfo.data.weight }}</b>
        and a fitness goal of 
        <b class="text-black">{{ userInfo.data.goal }}</b> 
    </div> 
    <div class="flex flex-col items-center text-2xl pt-10">
        <b class="text-black">{{  macros.calories }} Calories</b>
        <b class="text-black">{{ macros.protein }} g of protein</b>
        <b class="text-black">{{ macros.fat}} g of fat</b>
        <b class="text-black">{{ macros.carbs}} g of carbs</b>

    </div>
</template>