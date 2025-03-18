<script setup>
    import axios from 'axios';
    import { useRoute } from 'vue-router';
    import DetailsCard from '@/components/DetailsCard.vue';

    const route = useRoute()

    const exercises = await axios.get(`http://localhost:3000/api/exercises/muscles/${route.params.muscle.toLowerCase()}`)


</script>

<template>

    <h1 class="flex justify-center text-4xl text-center">This is my new {{ $route.params.muscle }} page</h1>

    <div class="h-fit bg-[#add8e6]">
        <div class="" v-for="(exercise, index) in exercises.data" :key="index">
            <DetailsCard v-bind="exercise" index="index"></DetailsCard>
        </div>
    </div>

</template>