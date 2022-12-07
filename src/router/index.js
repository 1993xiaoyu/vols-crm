import { createRouter, createWebHashHistory } from 'vue-router';

// 递归路由
let modules = [];
const files = import.meta.globEager('./modules/*.js');
Object.keys(files).forEach((file) => {
    // const fileName = file.replace(/(^\.\/)|(\/\.js$)/g, '');
    modules = modules.concat(files[file].default || files[file]);
});

// 路由列表
const routes = [
    ...modules,
    {
        path: '/cockpit',
        name: 'cockpit',
        meta: { isFullScreen: true },
        component: () => import('../views/cockpit/index.vue'),
    },
    {
        path: '/list',
        name: 'list',
        component: () => import('../views/list/index.vue'),
    },
    {
        path: '/login',
        name: 'login',
        meta: { isFullScreen: true },
        component: () => import('../views/login/index.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

/**
 * 路由钩子
 */
router.beforeEach((to, from, next) => {
    // 执行返回到顶部
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 0);
    next();
});

/**
 * 路由错误回调
 */
router.onError((handler) => {
    console.error('vue-router errorHandler', handler);
});

// 导出路由
export default createRouter({
    history: createWebHashHistory(),
    routes,
});
