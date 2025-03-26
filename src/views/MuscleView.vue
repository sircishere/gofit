<script setup>
    import axios from 'axios';
    import { useRoute } from 'vue-router';
    import DetailsCard from '@/components/DetailsCard.vue';

    const route = useRoute()

    const exercises = await axios.get(`http://${import.meta.env.VITE_BACKEND_HOST}/api/exercises/muscles/${route.params.muscle.toLowerCase()}`)


</script>

<template>

    <h1 class="flex justify-center text-4xl text-center p-5">This is my new {{ $route.params.muscle }} page</h1>

    <div class="h-fit bg-[#b6a999]">
        <div class="flex flex-col" v-for="(exercise, index) in exercises.data" :key="index">
            <DetailsCard v-bind="exercise" index="index"></DetailsCard>
        </div>
    </div>

</template>