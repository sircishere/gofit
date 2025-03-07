import '@/assets/styles.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';
axios.defaults.withCredentials = true;

const app = createApp(App)
const pinia = createPinia();

app.use(pinia);  // Register Pinia here BEFORE using any store

app.use(router)
app.use(VueAxios, axios);

app.mount('#app')
