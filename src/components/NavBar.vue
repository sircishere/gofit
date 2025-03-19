<script setup>
    defineProps({
        name: String // Define a prop named "userName"
    });

    const logout = () => {
        window.location.href = 'http://localhost:3000/logout'
    }
</script>
<template>
    <h1>
        <button class="dm-serif-text-regular" v-if="name" @click="$router.push('/dashboard')">GoFit</button>
        <button class="dm-serif-text-regular" v-else @click="$router.push('/')">GoFit</button>

        <button v-if="name" class="dm-serif-text-regular" @click=logout >Log out
        </button>
        <button v-else class="dm-serif-text-regular" @click="$router.push('/signin')">Log In</button>

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
