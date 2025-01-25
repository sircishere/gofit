<script>

</script>

<template>
    <h1>
        <button class="dm-serif-text-regular" @click="$router.push('/')">MTSFitness</button>
        <button class="dm-serif-text-regular">Icon</button>
    </h1>
</template>

<style scoped>
    h1{
        display: flex;
        justify-content: space-around;
        font-size: 1.5rem;
    }

    h1 button{
        border-radius: 5px;
        border:none;
        color: white;
        border-color: lightblue;
        width: 25%;
        background-color: lightblue;
        font-size: 1.5rem;
    }
</style>