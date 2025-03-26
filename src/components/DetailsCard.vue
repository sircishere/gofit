<script setup>
    import { ref } from 'vue'
    
    const props = defineProps(['bodyPart','equipment','gifUrl','id','name','target','secondaryMuscles','instructions','index'])

    const isActive = ref(true)
</script>

<template>
    <div  class="flex flex-col justify-center text-center rounded-xl sm:m-10">
        <h1 class=" text-2xl m-3">{{ props.name }}</h1>
        <div class="flex flex-row justify-center mt-3">
            <img v-bind:src="props.gifUrl" v-bind:width="300">
        </div>

        <button class="w-3/4 self-center m-5" @click="isActive = !isActive">Learn more...</button>

        <div class="mt-3"></div>

        <!-- instructions -->
        <!-- <div v-for="(instruction, index) in props.instructions" :key="index"> 
            {{ instruction }}
        </div> -->
    </div>

    <div :class="{'hidden': isActive}"  class="flex flex-col justify-center text-center rounded-xl m-3 sm:m-10 w-3/4 self-center">
        <div class="flex flex-row justify-between">
            <div class="text-2xl self-center h-1/2 m-3">{{ props.target }}</div>
            <button class=" w-1/12 m-3 text-center justify-center" @click="isActive=true">X</button>
        </div>
        <div v-for="(instruction, index) in props.instructions" :key="index"> 
            {{ instruction }}
        </div>
    </div>
 
</template>