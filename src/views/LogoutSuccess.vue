<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
    //session has to be cleared before logging out succesfully
  localStorage.removeItem('authToken');  // Clear stored auth token
  router.push('/');  // Redirect to homepage
});
</script>

<template>
  <div>Logging out... Redirecting...</div>
</template>
