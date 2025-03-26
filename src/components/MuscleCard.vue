<script setup>
    const props = defineProps(['muscle'])
</script>
<template>
    <button class="m-4 w-3/4 justify-center self-center text-2xl p-1" @click="$router.push(`/muscles/${props.muscle}`)">
        {{ props.muscle }}
    </button>
</template>