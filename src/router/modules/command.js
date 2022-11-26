import RouterView from '@/components/parent-page/index.vue';

const aedRoutes = [
    {
        path: '/command',
        name: 'command',
        component: RouterView,
        children: [
            {
                path: 'list',
                name: 'commandList',
                component: () => import('@/views/aed/list/index.vue'),
            },
            {
                path: 'detail',
                name: 'commandDetail',
                component: () => import('@/views/aed/detail/index.vue'),
            },
        ],
    },
];

export default aedRoutes;
