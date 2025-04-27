<script setup>

const props = defineProps(['equipment','set'])

</script>
<template>
    <div v-if="props.equipment != 'assisted' && props.equipment != 'body weight'" class="flex flex-col" >
        <input class="m-4 text-center" placeholder="weight in kg" v-model="set.weight">
        </input>
    </div>
    <div class="flex flex-col">
        <input class="m-4 text-center" placeholder="reps (8-12)" v-model="set.rep"></input>
    </div>


</template>