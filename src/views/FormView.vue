<template>
    <div id="app" class="calculator">
      <h1>Macro Calculator</h1>
      <form @submit.prevent="calculateMacros">
        <div>
          <label for="weight">Weight (kg):</label>
          <input type="number" id="weight" v-model.number="weight" required />
        </div>
        <div>
          <label for="height">Height (cm):</label>
          <input type="number" id="height" v-model.number="height" required />
        </div>
        <div>
          <label for="age">Age (years):</label>
          <input type="number" id="age" v-model.number="age" required />
        </div>
        <div>
          <label for="gender">Gender:</label>
          <select id="gender" v-model="gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label for="activityLevel">Activity Level:</label>
          <select id="activityLevel" v-model="activityLevel" required>
            <option value="1.2">Sedentary</option>
            <option value="1.375">Lightly Active</option>
            <option value="1.55">Moderately Active</option>
            <option value="1.725">Very Active</option>
            <option value="1.9">Extra Active</option>
          </select>
        </div>
        <button type="submit">Calculate</button>
      </form>
  
      <div v-if="macros">
        <h2>Results</h2>
        <p><strong>Total Calories:</strong> {{ macros.calories }} kcal</p>
        <p><strong>Protein:</strong> {{ macros.protein }} g</p>
        <p><strong>Fat:</strong> {{ macros.fat }} g</p>
        <p><strong>Carbs:</strong> {{ macros.carbs }} g</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        weight: null,
        height: null,
        age: null,
        gender: "male",
        activityLevel: 1.2,
        macros: null,
      };
    },
    methods: {
      calculateMacros() {
        // Mifflin-St Jeor formula: BMR (Basal Metabolic Rate)
        let bmr;
        if (this.gender === "male") {
          bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5; // Male
        } else {
          bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161; // Female
        }
  
        const tdee = bmr * this.activityLevel; // Total Daily Energy Expenditure
  
        // Macronutrient distribution (example: 40% carbs, 30% protein, 30% fat)
        const proteinCalories = tdee * 0.3;
        const fatCalories = tdee * 0.3;
        const carbCalories = tdee * 0.4;
  
        this.macros = {
          calories: Math.round(tdee),
          protein: Math.round(proteinCalories / 4), // Protein: 4 kcal/g
          fat: Math.round(fatCalories / 9), // Fat: 9 kcal/g
          carbs: Math.round(carbCalories / 4), // Carbs: 4 kcal/g
        };
      },
    },
  };
  </script>
  
  <style>
  .calculator {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  form div {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input, select {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  h2 {
    margin-top: 20px;
    text-align: center;
  }
  
  p {
    margin: 5px 0;
  }
  </style>
  