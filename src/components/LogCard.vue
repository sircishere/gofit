<script setup>
import { ref } from 'vue';
import Set from './Set.vue';
import axios from "axios";

const props = defineProps(['bodyPart','equipment','gifUrl','id','name','target','secondaryMuscles','instructions','index'])
const sets = ref([{
    weight: '',
    rep: ''
}])


const submit =  async () => {

    let workout = '';

    for (let i = 0; i < sets.length; i++) {
        workout += sets[i].rep
        workout += ','
        workout += sets[i].weight
        workout += ','
    }

    const options = {
        method: 'POST',
        url: `${import.meta.env.VITE_BACKEND_HOST}/logWorkout`,
        data: {
            workoutName: props.name,
            sets: sets.value
        }
    }

    sets.value = [{
        weight: '',
        rep: ''
    }]

    const response = await axios.request(options)

}



const isActive = ref(true)
</script>
<template>
        <button class="m-3 p-3 text-2xl">{{ props.name }}</button>
        <img class="m-3" :src="props.gifUrl"></img>

        <button class="m-3 text-2xl p-2 w-1/2 self-center" @click="isActive = !isActive"> Log </button>

        <div :class="{'hidden' : isActive}" class="flex flex-col m-3">
            <div v-for="set in sets">
                <Set :equipment="props.equipment" :set="set"></Set>
            </div>
            <button class="m-3" @click="sets.push({
                weight: '',
                rep: ''
            })">+</button>
            <button class="m-3" @click="submit">submit
            </button>
        </div>
        <div class="m-5"> ______________________</div>

</template>