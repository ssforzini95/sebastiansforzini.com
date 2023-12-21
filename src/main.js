// Import our custom CSS
import './assets/main.css'

// import { createApp } from '@vue/compat';
import Vue, { createApp } from '@vue/compat';
import { createPinia } from 'pinia'
import BootstrapVue from 'bootstrap-vue';
import PrimeVue from 'primevue/config';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue'
import router from './router'

Vue.use(BootstrapVue);
Vue.use(PrimeVue);
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
