import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import postCssPxToRem from 'postcss-pxtorem';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [
        vue(),
        [
            'component',
            {
                libraryName: 'element-ui',
                styleLibraryName: 'theme-chalk',
            },
        ],
    ],
    css: {
        postcss: {
            plugins: [
                postCssPxToRem({
                    rootValue: 384, // 设计稿宽度除以 10，  开头大写的Px 不转换 => height: 100Px, 内联样式不转换，需要 / 75 转成 rem
                    unitPrecision: 2, // 计算结果保留 6 位小数
                    selectorBlackList: ['.no-rem', 'no-rem'], // 要忽略的选择器并保留为px。
                    propList: ['*'], // 可以从px更改为rem的属性  感叹号开头的不转换
                    replace: true, // 转换成 rem 以后，不保留原来的 px 单位属性
                    mediaQuery: true, // 允许在媒体查询中转换px。
                    minPixelValue: 2, // 设置要替换的最小像素值。
                    exclude: /node_modules/i, // 排除 node_modules 文件(node_modules 内文件禁止转换)
                }),
            ],
        },
    },
    server: {
        port: 3000,
        // open: true, //自动打开
        base: './ ', //生产环境路径
        proxy: {
            // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
            // 正则表达式写法
            '^/api': {
                target: 'http://47.98.113.76/api', // 后端服务实际地址
                changeOrigin: true, //开启代理
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
});
