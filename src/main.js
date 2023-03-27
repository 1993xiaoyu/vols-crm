import { createApp } from 'vue';
import { getQuery } from './utils/common';
import App from './App.vue';

import '@/utils/rem.js';
import './style.css';

import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import 'element-plus/dist/index.css';
import './css/index.css';

import 'ssv-vue3-sdk/dist/style.css';
import ssvPlugin from 'ssv-vue3-sdk';

import router from './router/index.js';
import 'amfe-flexible/index.js';

const app = createApp(App);
const env = getQuery('env') === 'test' ? 'test' : 'master';
app.use(router)
    .use(ElementPlus, {
        locale: zhCn,
    })
    .use(ssvPlugin, { env: env });
app.mount('#app');
