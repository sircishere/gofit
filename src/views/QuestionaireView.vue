<script>
export default {
  data() {
    return {
      isFading: false
    };
  },
  methods: {
    fadeOut() {
      this.isFading = true;
    }
  }
};
</script>

<template>
  <div :class="['box', { 'fade-out': isFading }]">
    <h1>Please input your Height</h1>
    <input type="text">
    <button @click="fadeOut">Next</button>
  </div>
</template>

<style scoped>


.fade-out {
    opacity : 0;
    transition: opacity 1s ease-out
}

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