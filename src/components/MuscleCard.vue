<script setup>
    const props = defineProps(['muscle'])
</script>
<template>
    <button class="mt-2 w-1/2 justify-center self-center" @click="$router.push(`/muscles/${props.muscle}`)">
        {{ props.muscle }}
    </button>
</template>