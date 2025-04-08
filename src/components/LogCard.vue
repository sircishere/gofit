<script setup>
import { ref } from 'vue';

const props = defineProps(['bodyPart','equipment','gifUrl','id','name','target','secondaryMuscles','instructions','index'])


const isActive = ref(true)
</script>
<template>
        <button class="m-3 p-3 text-2xl">{{ props.name }}</button>
        <img class="m-3" :src="props.gifUrl"></img>

        <button class="m-3 text-2xl p-2 w-1/2 self-center" @click="isActive = !isActive"> Log </button>

        <div :class="{'hidden' : isActive}" class="flex flex-col m-3">
            <div v-if="props.equipment != 'assisted' && props.equipment != 'body weight'" class="flex flex-col" >
                <input class="m-3 text-center" placeholder="weight in kg" >
                </input>
            </div>

            <input class="m-3 text-center" placeholder="reps (8-12)"></input>

            <input class="m-3 text-center" placeholder="sets (3-4)"></input>

            <input type="checkbox" class=" m-3">
            </input>
        </div>  

        <div class="m-5"> ______________________</div>

</template>