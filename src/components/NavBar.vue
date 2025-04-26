<script setup>
    defineProps({
        name: String // Define a prop named "userName"
    });

    const logout = () => {
        window.location.href = `${import.meta.env.VITE_BACKEND_HOST}/logout`
    }
</script>
<template>
    <h1>
        <button class="dm-serif-text-regular p-5" v-if="name" @click="$router.push('/dashboard')">GoFit</button>
        <button class="dm-serif-text-regular" v-else @click="$router.push('/')">GoFit</button>

        <button v-if="name" class="dm-serif-text-regular p-3" @click=logout >Log out
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
        color: #4f4537;
        border-color: #b6a999;
        width: 25%;
        background-color: #b6a999;
        font-size: 1.5rem;
    }
</style>
