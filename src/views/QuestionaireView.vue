<script>
export default {
  data() {
    return {
    };
  },
  methods: {

    async submit(gender,weight,height) {

      try {
        const response = await fetch("localhost:3000/addUserInfo");
        
      }
      catch {

      }

    }
  }
};
</script>

<template>
  <div class="box">
    <h1>Please input your Height</h1>
    <input v-model="height" type="text">
    <button>Next</button>
  </div>
</template>

<style scoped>

.box {
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  top: 40%;
  flex-direction: column;
  width: 99%;
}

button {
  font-size: larger;
  width: 25%;
  margin-top: 20px;
}

h1 {
  margin-bottom: 20px;
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