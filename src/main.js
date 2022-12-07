import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

import ElementPlus from 'element-plus';
import './css/theme/index.css';

import router from './router/index.js';

const app = createApp(App);
app.use(router).use(ElementPlus);
app.mount('#app');
