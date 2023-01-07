import { createApp } from 'vue';
import App from './App.vue';
import '@/utils/rem.js';
import './style.css';

import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import 'element-plus/dist/index.css';
import './css/index.css';

import router from './router/index.js';
import 'amfe-flexible/index.js';

const app = createApp(App);
app.use(router).use(ElementPlus, {
    locale: zhCn,
});
app.mount('#app');
