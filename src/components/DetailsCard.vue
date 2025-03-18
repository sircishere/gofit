<script setup>
    const props = defineProps(['bodyPart','equipment','gifUrl','id','name','target','secondaryMuscles','instructions','index'])
</script>

<template>
    <div class="flex flex-col justify-center text-center bg-green-400 rounded-xl m-4 sm:m-10">
        <h1 class=" text-2xl mt-5">{{ props.name }}</h1>
        <div class="flex flex-row justify-center mt-3">
            <img v-bind:src="props.gifUrl" v-bind:width="300">
        </div>

        <button class="w-1/2 self-center mt-3">Learn more...</button>

        <div class="mt-3"></div>

        <!-- instructions -->
        <!-- <div v-for="(instruction, index) in props.instructions" :key="index"> 
            {{ instruction }}
        </div> -->
    </div>

</template>