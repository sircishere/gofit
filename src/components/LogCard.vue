<script setup>
import { ref } from 'vue';
import Set from './Set.vue';

const props = defineProps(['bodyPart','equipment','gifUrl','id','name','target','secondaryMuscles','instructions','index'])
const sets = ref([{
weight: '',
rep: ''
}])




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
            <input type="checkbox" class=" m-3">
            </input>
        </div>
        <div class="m-5"> ______________________</div>

</template>